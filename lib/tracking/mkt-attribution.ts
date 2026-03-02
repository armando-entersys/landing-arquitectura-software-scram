/**
 * Marketing Attribution — First-Touch / Last-Touch
 *
 * Persists UTM parameters, gclid, fbclid, and li_fat_id
 * using cookies (30-day TTL) with localStorage fallback.
 *
 * First-touch: saved only once (cookie: scram_ft)
 * Last-touch: overwritten on every visit with params (cookie: scram_lt)
 */

interface MarketingParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  li_fat_id?: string;
  landing_page?: string;
  timestamp?: string;
}

export interface Attribution {
  firstTouch: MarketingParams | null;
  lastTouch: MarketingParams | null;
}

const COOKIE_FT = 'scram_ft';
const COOKIE_LT = 'scram_lt';
const LS_FT = 'scram_mkt_ft';
const LS_LT = 'scram_mkt_lt';
const COOKIE_TTL_DAYS = 30;

const TRACKED_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
  'li_fat_id',
] as const;

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match?.[1] ? decodeURIComponent(match[1]) : null;
}

function setLS(key: string, value: MarketingParams) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or blocked — silent fail
  }
}

function getLS(key: string): MarketingParams | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function getMarketingParamsFromURL(): MarketingParams | null {
  const params = new URLSearchParams(window.location.search);
  const result: MarketingParams = {};
  let hasAny = false;

  for (const key of TRACKED_PARAMS) {
    const val = params.get(key);
    if (val) {
      result[key] = val;
      hasAny = true;
    }
  }

  if (!hasAny) return null;

  result.landing_page = window.location.pathname;
  result.timestamp = new Date().toISOString();
  return result;
}

function readAttribution(cookieName: string, lsKey: string): MarketingParams | null {
  const raw = getCookie(cookieName);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch {
      // Corrupted cookie — fall through to localStorage
    }
  }
  return getLS(lsKey);
}

function saveAttribution(cookieName: string, lsKey: string, data: MarketingParams) {
  const serialized = JSON.stringify(data);
  setCookie(cookieName, serialized, COOKIE_TTL_DAYS);
  setLS(lsKey, data);
}

/**
 * Initialize attribution on page load.
 * Call once from TrackingProvider useEffect.
 */
export function initAttribution() {
  if (typeof window === 'undefined') return;

  const params = getMarketingParamsFromURL();
  if (!params) return;

  // First-touch: only save if no existing first-touch data
  const existingFT = readAttribution(COOKIE_FT, LS_FT);
  if (!existingFT) {
    saveAttribution(COOKIE_FT, LS_FT, params);
  }

  // Last-touch: always overwrite
  saveAttribution(COOKIE_LT, LS_LT, params);
}

/**
 * Get current attribution data.
 * Returns first-touch and last-touch marketing params.
 */
export function getAttribution(): Attribution {
  if (typeof window === 'undefined') {
    return { firstTouch: null, lastTouch: null };
  }

  return {
    firstTouch: readAttribution(COOKIE_FT, LS_FT),
    lastTouch: readAttribution(COOKIE_LT, LS_LT),
  };
}
