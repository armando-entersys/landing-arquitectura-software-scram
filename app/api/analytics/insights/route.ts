import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { readFile } from 'fs/promises';
import { join } from 'path';

const EVENTS_FILE = join(process.cwd(), '.analytics', 'events.json');

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
  timestamp: string;
  sessionId: string;
  userAgent: string;
  referrer: string;
  page: string;
}

interface AnalyticsSummary {
  totalSessions: number;
  totalEvents: number;
  period: string;
  topEvents: { event: string; count: number }[];
  ctaClicks: { cta: string; location: string; count: number }[];
  whatsappClicks: number;
  formSubmissions: number;
  visitorProfiles: {
    byIntent: Record<string, number>;
    byIndustry: Record<string, number>;
    byPersona: Record<string, number>;
    bySource: Record<string, number>;
  };
  sectionViews: { section: string; avgDepth: number; count: number }[];
  deviceBreakdown: { mobile: number; desktop: number; tablet: number };
  hourlyDistribution: Record<string, number>;
  bounceEstimate: number;
}

async function getEvents(days: number): Promise<AnalyticsEvent[]> {
  try {
    const data = await readFile(EVENTS_FILE, 'utf-8');
    const events: AnalyticsEvent[] = JSON.parse(data);
    const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
    return events.filter(e => new Date(e.timestamp) >= since);
  } catch {
    return [];
  }
}

function buildSummary(events: AnalyticsEvent[], days: number): AnalyticsSummary {
  const sessions = new Set(events.map(e => e.sessionId));

  // Top events
  const eventCounts: Record<string, number> = {};
  events.forEach(e => { eventCounts[e.event] = (eventCounts[e.event] || 0) + 1; });
  const topEvents = Object.entries(eventCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([event, count]) => ({ event, count }));

  // CTA clicks
  const ctaMap: Record<string, { location: string; count: number }> = {};
  events.filter(e => e.event === 'cta_click').forEach(e => {
    const key = `${e.action}|${e.label}`;
    if (!ctaMap[key]) ctaMap[key] = { location: e.label || '', count: 0 };
    ctaMap[key].count++;
  });
  const ctaClicks = Object.entries(ctaMap)
    .map(([key, val]) => ({ cta: key.split('|')[0] || '', ...val }))
    .sort((a, b) => b.count - a.count);

  // WhatsApp & Forms
  const whatsappClicks = events.filter(e => e.event === 'whatsapp_click').length;
  const formSubmissions = events.filter(e => e.event === 'form_submit').length;

  // Visitor profiles
  const profileEvents = events.filter(e => e.event === 'visitor_profiled');
  const byIntent: Record<string, number> = {};
  const byIndustry: Record<string, number> = {};
  const byPersona: Record<string, number> = {};
  const bySource: Record<string, number> = {};
  profileEvents.forEach(e => {
    const m = e.metadata || {};
    const intent = (m.visitor_intent as string) || 'unknown';
    const industry = (m.visitor_industry as string) || 'unknown';
    const persona = (m.visitor_persona as string) || 'unknown';
    const source = (m.utm_source as string) || 'direct';
    byIntent[intent] = (byIntent[intent] || 0) + 1;
    byIndustry[industry] = (byIndustry[industry] || 0) + 1;
    byPersona[persona] = (byPersona[persona] || 0) + 1;
    bySource[source] = (bySource[source] || 0) + 1;
  });

  // Section views
  const sectionMap: Record<string, { depths: number[]; count: number }> = {};
  events.filter(e => e.event === 'section_view').forEach(e => {
    const section = e.action;
    if (!sectionMap[section]) sectionMap[section] = { depths: [], count: 0 };
    sectionMap[section].depths.push(e.value || 0);
    sectionMap[section].count++;
  });
  const sectionViews = Object.entries(sectionMap)
    .map(([section, val]) => ({
      section,
      avgDepth: val.depths.reduce((a, b) => a + b, 0) / val.depths.length,
      count: val.count,
    }))
    .sort((a, b) => b.count - a.count);

  // Device breakdown
  let mobile = 0, desktop = 0, tablet = 0;
  const sessionUAs = new Map<string, string>();
  events.forEach(e => {
    if (!sessionUAs.has(e.sessionId)) sessionUAs.set(e.sessionId, e.userAgent);
  });
  sessionUAs.forEach(ua => {
    if (/tablet|ipad/i.test(ua)) tablet++;
    else if (/mobile|android|iphone/i.test(ua)) mobile++;
    else desktop++;
  });

  // Hourly distribution
  const hourlyDistribution: Record<string, number> = {};
  events.forEach(e => {
    const hour = new Date(e.timestamp).getHours().toString().padStart(2, '0');
    hourlyDistribution[hour] = (hourlyDistribution[hour] || 0) + 1;
  });

  // Bounce estimate: sessions with only 1 event
  const sessionEventCounts: Record<string, number> = {};
  events.forEach(e => {
    sessionEventCounts[e.sessionId] = (sessionEventCounts[e.sessionId] || 0) + 1;
  });
  const singleEventSessions = Object.values(sessionEventCounts).filter(c => c <= 1).length;
  const bounceEstimate = sessions.size > 0 ? (singleEventSessions / sessions.size) * 100 : 0;

  return {
    totalSessions: sessions.size,
    totalEvents: events.length,
    period: `${days} días`,
    topEvents,
    ctaClicks,
    whatsappClicks,
    formSubmissions,
    visitorProfiles: { byIntent, byIndustry, byPersona, bySource },
    sectionViews,
    deviceBreakdown: { mobile, desktop, tablet },
    hourlyDistribution,
    bounceEstimate: Math.round(bounceEstimate * 10) / 10,
  };
}

async function analyzeWithGemini(summary: AnalyticsSummary): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return 'GEMINI_API_KEY no configurada. Configura la variable de entorno para activar análisis con IA.';
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `Eres un analista de conversión experto en landing pages B2B de software empresarial en México.

Analiza estos datos de la landing page de Scram Consulting (arquitectura de software para manufactura, logística y distribución):

DATOS DEL PERÍODO (${summary.period}):
- Sesiones totales: ${summary.totalSessions}
- Eventos totales: ${summary.totalEvents}
- Clicks a WhatsApp: ${summary.whatsappClicks}
- Formularios enviados: ${summary.formSubmissions}
- Bounce rate estimado: ${summary.bounceEstimate}%

DISPOSITIVOS:
- Desktop: ${summary.deviceBreakdown.desktop}
- Mobile: ${summary.deviceBreakdown.mobile}
- Tablet: ${summary.deviceBreakdown.tablet}

TOP EVENTOS:
${summary.topEvents.map(e => `- ${e.event}: ${e.count}`).join('\n')}

CLICKS EN CTAs:
${summary.ctaClicks.map(c => `- "${c.cta}" en ${c.location}: ${c.count}`).join('\n') || 'Sin datos'}

VISTAS DE SECCIONES:
${summary.sectionViews.map(s => `- ${s.section}: ${s.count} vistas, profundidad promedio ${s.avgDepth}%`).join('\n') || 'Sin datos'}

PERFIL DE VISITANTES:
- Por intención: ${JSON.stringify(summary.visitorProfiles.byIntent)}
- Por industria: ${JSON.stringify(summary.visitorProfiles.byIndustry)}
- Por persona: ${JSON.stringify(summary.visitorProfiles.byPersona)}
- Por fuente: ${JSON.stringify(summary.visitorProfiles.bySource)}

DISTRIBUCIÓN POR HORA: ${JSON.stringify(summary.hourlyDistribution)}

Genera un análisis en español con estas secciones:
1. **Resumen Ejecutivo** (3 puntos clave)
2. **Métricas de Conversión** (tasa de conversión, embudo, dónde se pierden leads)
3. **Comportamiento del Usuario** (scroll depth, secciones más vistas, CTAs más efectivos)
4. **Perfil del Visitante Ideal** (basado en los datos de intent, industry, persona)
5. **Recomendaciones Accionables** (5 acciones concretas para mejorar conversión)
6. **Oportunidades de Personalización** (qué segmentos priorizar en campañas)

Sé específico y accionable. No uses datos que no tengas. Si hay pocos datos, menciona qué métricas faltan y cómo obtenerlas.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

/**
 * GET /api/analytics/insights
 * Genera análisis de conversión con Gemini basado en eventos capturados
 */
export async function GET(request: NextRequest) {
  const apiKey = request.headers.get('x-api-key');
  if (apiKey !== process.env.ANALYTICS_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const days = parseInt(searchParams.get('days') || '7');

  const events = await getEvents(days);

  if (events.length === 0) {
    return NextResponse.json({
      summary: null,
      analysis: 'No hay eventos registrados en el período. Los eventos se capturan automáticamente cuando los visitantes interactúan con la landing.',
      tip: 'Asegúrate de que el TrackingProvider esté activo y que el endpoint /api/analytics/events esté recibiendo datos.',
    });
  }

  const summary = buildSummary(events, days);
  const analysis = await analyzeWithGemini(summary);

  return NextResponse.json({
    summary,
    analysis,
    generatedAt: new Date().toISOString(),
  });
}
