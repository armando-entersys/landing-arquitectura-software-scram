'use client';

import { createContext, useContext } from 'react';
import type { Locale } from './config';
import type { SiteContent } from '@/content/types';

interface ContentContextValue {
  content: SiteContent;
  locale: Locale;
}

const ContentContext = createContext<ContentContextValue | null>(null);

export function ContentProvider({
  content,
  locale,
  children,
}: {
  content: SiteContent;
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <ContentContext.Provider value={{ content, locale }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): ContentContextValue {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return ctx;
}
