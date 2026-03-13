import { NextRequest, NextResponse } from 'next/server';

const CRM_API = 'https://api.scram2k.com';
const SITE_ORIGIN = 'arquitectura-software.scram2k.com';

/**
 * POST /api/leads
 * Receives form data and sends it to the native SCRAM CRM
 * via POST /v1/crm/forms/submit (public endpoint)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.email || !body.name || !body.company) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Build visitorId from localStorage value sent by client, or generate one
    const visitorId = body.visitorId || `v_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;

    const needTagMap: Record<string, string> = {
      erp: 'ERP / Sistema Gestión',
      app: 'App Móvil',
      integration: 'Integración Sistemas',
      automation: 'Automatización Procesos',
      other: 'Otro',
    };

    const crmPayload = {
      visitorId,
      formId: body.source || 'hero_form',
      siteOrigin: SITE_ORIGIN,
      fields: {
        name: body.name,
        email: body.email,
        company: body.company,
        phone: body.phone || '',
        message: body.needLabel || needTagMap[body.need] || body.need || '',
      },
      utmSource: body.utm_source || undefined,
      utmMedium: body.utm_medium || undefined,
      utmCampaign: body.utm_campaign || undefined,
    };

    const res = await fetch(`${CRM_API}/v1/crm/forms/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crmPayload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('[CRM API] Error:', res.status, errorText);
      return NextResponse.json({ success: false, error: 'CRM submission failed' }, { status: 502 });
    }

    const data = await res.json();
    return NextResponse.json({
      success: true,
      contactId: data.contactId || null,
    });
  } catch (error) {
    console.error('[Leads API] Error:', error);
    return NextResponse.json({ error: 'Error processing lead' }, { status: 500 });
  }
}
