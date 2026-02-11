import { MetadataRoute } from 'next';

/**
 * Robots.txt dinámico
 *
 * Estrategia GEO (Generative Engine Optimization):
 * Permitimos TODOS los crawlers de IA para maximizar presencia en:
 *
 * USA:
 * - GPTBot / ChatGPT-User → OpenAI (ChatGPT, SearchGPT)
 * - Google-Extended → Google Gemini / AI Overview
 * - ClaudeBot → Anthropic Claude
 * - PerplexityBot → Perplexity AI
 * - Amazonbot → Amazon Alexa / AI
 * - Meta-ExternalAgent → Meta AI
 * - Applebot-Extended → Apple Intelligence
 * - CCBot → Common Crawl (entrena muchos LLMs)
 * - cohere-ai → Cohere LLMs
 *
 * Asia:
 * - Bytespider → ByteDance / TikTok / Doubao AI
 * - Baiduspider → Baidu (ERNIE Bot)
 * - YandexBot → Yandex AI
 * - NaverBot → Naver (HyperCLOVA)
 *
 * Crawlers SEO tradicionales (Google, Bing) ya tienen permiso por defecto.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://arquitectura-software.scram2k.com';

  return {
    rules: [
      // Regla general
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
      // --- IAs de USA ---
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      // --- IAs de Asia ---
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'Baiduspider', allow: '/' },
      { userAgent: 'YandexBot', allow: '/' },
      { userAgent: 'NaverBot', allow: '/' },
      // --- DeepSeek ---
      { userAgent: 'DeepSeekBot', allow: '/' },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
