'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

const API_BASE = 'https://api.scram2k.com';
const SITE_ORIGIN = 'arquitectura-software.scram2k.com';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

function generateVisitorId(): string {
  if (typeof window === 'undefined') return '';
  const stored = localStorage.getItem('scram_visitor_id');
  if (stored) return stored;
  const id = `v_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
  localStorage.setItem('scram_visitor_id', id);
  return id;
}

// Render text with clickable links
function MessageText({ text }: { text: string }) {
  // Strip action tags leaked from backend
  const cleaned = text
    .replace(/\s*\[(QR|LEAD|TICKET_LOOKUP|TICKET_SEARCH|CREATE_TICKET|UPDATE_TICKET|CLOSE_TICKET|ESCALATE_TICKET):\s*.*?\]/g, '')
    .replace(/\s*\[(?:[^|\[\]]{3,40}\|){1,3}[^|\[\]]{3,40}\]\s*$/g, '')
    .trim();

  const urlRegex = /(https?:\/\/[^\s)]+)/g;
  const parts = cleaned.split(urlRegex);
  if (parts.length === 1) return <span className="whitespace-pre-wrap">{cleaned}</span>;

  return (
    <span className="whitespace-pre-wrap">
      {parts.map((part, i) =>
        urlRegex.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-scram-primary font-semibold underline break-all"
          >
            {part.includes('wa.me') ? 'Contactar por WhatsApp' : part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Delay appearance
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const startSession = useCallback(async (): Promise<string | null> => {
    try {
      const visitorId = generateVisitorId();
      const params = new URLSearchParams(window.location.search);
      const res = await fetch(`${API_BASE}/v1/chat/sessions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorId,
          siteOrigin: SITE_ORIGIN,
          currentSection: 'arquitectura-software',
          utmSource: params.get('utm_source') || undefined,
          utmMedium: params.get('utm_medium') || undefined,
          utmCampaign: params.get('utm_campaign') || undefined,
        }),
      });
      if (!res.ok) return null;
      const data = await res.json();
      setSessionId(data.id);
      if (data.quickReplies) setQuickReplies(data.quickReplies);
      if (data.greeting) {
        setMessages([{ id: `g_${Date.now()}`, role: 'assistant', content: data.greeting }]);
        setHasGreeted(true);
      }
      return data.id;
    } catch {
      return null;
    }
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setShowBadge(false);
    if (!hasGreeted) {
      setMessages([{
        id: `g_${Date.now()}`,
        role: 'assistant',
        content: 'Hola, soy asesor de SCRAM Consulting. Cada proyecto de software empieza por entender bien el problema. Cuéntame qué necesita tu empresa y te ayudo a definir el mejor camino.\n\nSi prefieres, también puedes escribirnos por WhatsApp: https://wa.me/529993882606\n\nSi prefieres hablar directamente con un asesor, escribe "quiero hablar con un humano".',
      }]);
      setQuickReplies(['Necesito orientación', 'Quiero una cotización', 'Hablar con un asesor']);
      setHasGreeted(true);
      startSession();
    }
  }, [hasGreeted, startSession]);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    let sid = sessionId;
    if (!sid) {
      sid = await startSession();
      if (!sid) {
        setMessages(prev => [...prev, {
          id: `e_${Date.now()}`, role: 'assistant',
          content: 'No se pudo conectar con el servidor. Intenta de nuevo en unos segundos.',
        }]);
        return;
      }
    }

    setMessages(prev => [...prev, { id: `u_${Date.now()}`, role: 'user', content }]);
    setIsLoading(true);
    setQuickReplies([]);
    setInput('');

    try {
      const res = await fetch(`${API_BASE}/v1/chat/sessions/${sid}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, currentSection: 'arquitectura-software' }),
      });

      if (!res.ok) {
        const errorMsg = res.status === 429
          ? 'Has enviado muchos mensajes. Espera un momento e intenta de nuevo.'
          : 'Hubo un problema al procesar tu mensaje. ¿Puedes intentar de nuevo?';
        setMessages(prev => [...prev, { id: `e_${Date.now()}`, role: 'assistant', content: errorMsg }]);
        return;
      }

      const data = await res.json();
      setMessages(prev => [...prev, { id: `a_${Date.now()}`, role: 'assistant', content: data.content }]);
      if (data.quickReplies) setQuickReplies(data.quickReplies);
    } catch {
      setMessages(prev => [...prev, {
        id: `e_${Date.now()}`, role: 'assistant',
        content: 'Hubo un error de conexión. ¿Puedes intentar de nuevo?',
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [sessionId, isLoading, startSession]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[340px] sm:w-[380px] max-h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-scaleIn border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-scram-primary to-scram-secondary px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div>
              <h3 className="font-heading text-base font-bold text-white">SCRAM Consulting</h3>
              <p className="text-xs text-white/80">Asesor de arquitectura de software</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              aria-label="Cerrar chat"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[340px]">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-scram-primary text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}>
                  <MessageText text={msg.content} />
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {quickReplies.length > 0 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5 flex-shrink-0">
              {quickReplies.map((qr, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(qr)}
                  disabled={isLoading}
                  className="px-3 py-1.5 text-xs font-medium border border-scram-primary/30 text-scram-primary rounded-full hover:bg-scram-primary/10 transition-colors disabled:opacity-50"
                >
                  {qr}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex gap-2 flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
              className="flex-1 px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-scram-primary/40 focus:border-scram-primary disabled:opacity-50"
              maxLength={1000}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 flex items-center justify-center bg-scram-primary text-white rounded-xl hover:bg-scram-primaryHover transition-colors disabled:opacity-50 flex-shrink-0"
              aria-label="Enviar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* FAB Button */}
      <div className="relative">
        {showBadge && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse z-10">
            1
          </span>
        )}
        <button
          onClick={() => isOpen ? setIsOpen(false) : handleOpen()}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 ${
            isOpen ? 'bg-gray-600' : 'bg-scram-primary hover:bg-scram-primaryHover'
          }`}
          aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
