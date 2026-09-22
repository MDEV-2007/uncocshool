"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/data/translations';

export type Language = 'uz' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('uz');

  useEffect(() => {
    // Intentional: hydrate language from localStorage only after mount so the
    // statically-exported HTML (always 'uz') matches the client's first render,
    // then switch once we know the visitor's saved preference. Reading this in
    // a useState initializer instead would cause a hydration mismatch.
    try {
      const saved = localStorage.getItem('unco_lang') as Language;
      if (saved && (saved === 'uz' || saved === 'ru' || saved === 'en')) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLanguageState(saved);
      }
    } catch {
      // localStorage unavailable or SSR
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('unco_lang', lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const t = (key: string): string => {
    const dict = translations[language] || {};
    const fallback = translations.uz || translations.en || {};
    if (dict[key]) return dict[key];
    if (fallback[key]) return fallback[key];
    return '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
