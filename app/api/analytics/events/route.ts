import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const DATA_DIR = join(process.cwd(), '.analytics');
const EVENTS_FILE = join(DATA_DIR, 'events.json');
const MAX_EVENTS = 10000;

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

async function ensureDataDir() {
  try { await mkdir(DATA_DIR, { recursive: true }); } catch {}
}

async function getEvents(): Promise<AnalyticsEvent[]> {
  try {
    const data = await readFile(EVENTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveEvents(events: AnalyticsEvent[]) {
  await ensureDataDir();
  // Mantener solo los últimos MAX_EVENTS
  const trimmed = events.slice(-MAX_EVENTS);
  await writeFile(EVENTS_FILE, JSON.stringify(trimmed, null, 2));
}

/**
 * POST /api/analytics/events
 * Recibe eventos del UniversalTracker y los almacena para análisis con Gemini
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const event: AnalyticsEvent = {
      event: body.event || 'unknown',
      category: body.category || 'unknown',
      action: body.action || '',
      label: body.label || '',
      value: body.value || 0,
      metadata: body.metadata || {},
      timestamp: new Date().toISOString(),
      sessionId: body.sessionId || crypto.randomUUID(),
      userAgent: request.headers.get('user-agent') || '',
      referrer: request.headers.get('referer') || '',
      page: body.page || '/',
    };

    const events = await getEvents();
    events.push(event);
    await saveEvents(events);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Analytics Events] Error:', error);
    return NextResponse.json({ error: 'Error storing event' }, { status: 500 });
  }
}

/**
 * GET /api/analytics/events
 * Retorna eventos almacenados (protegido con API key)
 */
export async function GET(request: NextRequest) {
  const apiKey = request.headers.get('x-api-key');
  if (apiKey !== process.env.ANALYTICS_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const events = await getEvents();
  const { searchParams } = new URL(request.url);
  const days = parseInt(searchParams.get('days') || '7');
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  const filtered = events.filter(e => new Date(e.timestamp) >= since);

  return NextResponse.json({
    total: filtered.length,
    period: `${days} days`,
    events: filtered,
  });
}
