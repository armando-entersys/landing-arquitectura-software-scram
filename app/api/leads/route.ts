import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const DATA_DIR = join(process.cwd(), '.analytics');
const LEADS_FILE = join(DATA_DIR, 'leads.json');

interface Lead {
  id: string;
  company: string;
  name: string;
  email: string;
  need: string;
  needLabel: string;
  source: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  timestamp: string;
  ip: string;
  userAgent: string;
  mauticContactId?: number;
  mauticError?: string;
}

async function ensureDataDir() {
  try { await mkdir(DATA_DIR, { recursive: true }); } catch { /* exists */ }
}

async function getLeads(): Promise<Lead[]> {
  try {
    const data = await readFile(LEADS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveLeads(leads: Lead[]) {
  await ensureDataDir();
  await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
}

// ============================================================
// MAUTIC OAUTH2 — Client Credentials Flow
// ============================================================

let cachedToken: { accessToken: string; expiresAt: number } | null = null;

/**
 * Obtiene un access token de Mautic via OAuth2 Client Credentials.
 * Cachea el token en memoria hasta que expire.
 */
async function getMauticAccessToken(): Promise<string | null> {
  const mauticBaseUrl = process.env.NEXT_PUBLIC_MAUTIC_BASE_URL;
  const clientId = process.env.MAUTIC_CLIENT_ID;
  const clientSecret = process.env.MAUTIC_CLIENT_SECRET;

  if (!mauticBaseUrl || !clientId || !clientSecret) return null;

  // Usar token cacheado si no ha expirado (con 60s de margen)
  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.accessToken;
  }

  try {
    const response = await fetch(`${mauticBaseUrl}/oauth/v2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[Mautic OAuth] Token error:', response.status, errorText);
      return null;
    }

    const data = await response.json();
    cachedToken = {
      accessToken: data.access_token,
      expiresAt: Date.now() + (data.expires_in || 3600) * 1000,
    };

    console.log('[Mautic OAuth] Token obtained, expires in', data.expires_in, 's');
    return cachedToken.accessToken;
  } catch (error) {
    console.error('[Mautic OAuth] Exception:', error);
    return null;
  }
}

/**
 * Envía el contacto a Mautic CRM vía API REST con OAuth2
 * Docs: https://developer.mautic.org/#create-contact
 */
async function sendToMautic(lead: Lead): Promise<{ contactId?: number; error?: string }> {
  const mauticBaseUrl = process.env.NEXT_PUBLIC_MAUTIC_BASE_URL;
  if (!mauticBaseUrl) return { error: 'Mautic URL not configured' };

  const accessToken = await getMauticAccessToken();
  if (!accessToken) return { error: 'Mautic OAuth2 failed — check client_id/secret' };

  try {
    const nameParts = lead.name.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Map need to Mautic tags
    const needTagMap: Record<string, string> = {
      erp: 'ERP / Sistema Gestión',
      app: 'App Móvil',
      integration: 'Integración Sistemas',
      automation: 'Automatización Procesos',
      other: 'Otro',
    };

    const tags = [
      needTagMap[lead.need] || lead.needLabel,
      'landing-agentic-architect',
      lead.utm_source ? `src:${lead.utm_source}` : null,
      lead.utm_campaign ? `camp:${lead.utm_campaign}` : null,
      lead.gclid ? 'google-ads' : null,
    ].filter(Boolean) as string[];

    const payload = {
      firstname: firstName,
      lastname: lastName,
      email: lead.email,
      company: lead.company,
      tags,
      // Mautic custom fields (already exist in CRM)
      lead_source: lead.gclid ? 'Google Ads' : lead.utm_source || 'Direct',
      landing_page: 'https://arquitectura-software.scram2k.com',
      current_issue: lead.needLabel || lead.need,
      // Built-in locale
      preferred_locale: 'es',
    };

    const response = await fetch(`${mauticBaseUrl}/api/contacts/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[Mautic API] Error:', response.status, errorText);

      // Si el token expiró, invalidar cache e intentar una vez más
      if (response.status === 401) {
        cachedToken = null;
        const retryToken = await getMauticAccessToken();
        if (retryToken) {
          const retry = await fetch(`${mauticBaseUrl}/api/contacts/new`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${retryToken}`,
            },
            body: JSON.stringify(payload),
          });
          if (retry.ok) {
            const retryData = await retry.json();
            return { contactId: retryData.contact?.id };
          }
        }
      }

      return { error: `Mautic ${response.status}: ${errorText.slice(0, 200)}` };
    }

    const data = await response.json();
    const contactId = data.contact?.id;
    console.log('[Mautic API] Contact created:', contactId);
    return { contactId };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Mautic API] Exception:', message);
    return { error: message };
  }
}

/**
 * POST /api/leads
 * Recibe datos del formulario, los guarda localmente y los envía a Mautic CRM
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validación básica
    if (!body.email || !body.name || !body.company) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const lead: Lead = {
      id: crypto.randomUUID(),
      company: body.company || '',
      name: body.name || '',
      email: body.email || '',
      need: body.need || '',
      needLabel: body.needLabel || '',
      source: body.source || 'hero_form',
      utm_source: body.utm_source || '',
      utm_medium: body.utm_medium || '',
      utm_campaign: body.utm_campaign || '',
      utm_content: body.utm_content || '',
      utm_term: body.utm_term || '',
      gclid: body.gclid || '',
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '',
      userAgent: request.headers.get('user-agent') || '',
    };

    // 1. Guardar localmente (backup)
    const leads = await getLeads();
    leads.push(lead);
    await saveLeads(leads);

    // 2. Enviar a Mautic CRM
    const mauticResult = await sendToMautic(lead);
    if (mauticResult.contactId) {
      lead.mauticContactId = mauticResult.contactId;
      // Actualizar con el ID de Mautic
      const updatedLeads = await getLeads();
      const idx = updatedLeads.findIndex((l) => l.id === lead.id);
      if (idx >= 0) {
        updatedLeads[idx] = lead;
        await saveLeads(updatedLeads);
      }
    } else if (mauticResult.error) {
      lead.mauticError = mauticResult.error;
    }

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      mauticContactId: mauticResult.contactId || null,
    });
  } catch (error) {
    console.error('[Leads API] Error:', error);
    return NextResponse.json({ error: 'Error processing lead' }, { status: 500 });
  }
}

/**
 * GET /api/leads
 * Lista leads almacenados (protegido con API key)
 */
export async function GET(request: NextRequest) {
  const apiKey = request.headers.get('x-api-key');
  if (apiKey !== process.env.ANALYTICS_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const leads = await getLeads();
  const { searchParams } = new URL(request.url);
  const days = parseInt(searchParams.get('days') || '30');
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  const filtered = leads.filter((l) => new Date(l.timestamp) >= since);

  return NextResponse.json({
    total: filtered.length,
    period: `${days} days`,
    leads: filtered,
  });
}
