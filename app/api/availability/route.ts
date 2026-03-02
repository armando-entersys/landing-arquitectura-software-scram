import { NextRequest, NextResponse } from 'next/server';
import { getAvailableSlots } from '@/lib/google-calendar';

/**
 * GET /api/availability?date=YYYY-MM-DD&tz=America/Mexico_City
 *
 * Returns available 30-minute booking slots for the given date.
 * Validates that the date is not in the past and not more than 21 days ahead.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');
  const timezone = searchParams.get('tz') || 'America/Mexico_City';

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json(
      { error: 'Invalid date format. Use YYYY-MM-DD.' },
      { status: 400 }
    );
  }

  // Validate date range
  const now = new Date();
  const today = new Date(now.toLocaleDateString('en-CA', { timeZone: timezone }));
  const target = new Date(date + 'T00:00:00');

  if (target < today) {
    return NextResponse.json(
      { error: 'Date is in the past.' },
      { status: 400 }
    );
  }

  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 21);
  if (target > maxDate) {
    return NextResponse.json(
      { error: 'Date is too far in the future. Maximum 21 days ahead.' },
      { status: 400 }
    );
  }

  try {
    const result = await getAvailableSlots(date, timezone);
    return NextResponse.json(result);
  } catch (error) {
    console.error('[Availability API] Error:', error);
    return NextResponse.json(
      { error: 'Error fetching availability' },
      { status: 500 }
    );
  }
}
