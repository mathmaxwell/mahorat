import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Lang } from '../types';
import { translations } from '../locales/translations';

interface LanguageContextType {
  lang: Lang;
  changeLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>((localStorage.getItem('ms-lang') as Lang) || 'uz');

  const changeLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem('ms-lang', l);
  };

  const t = useCallback((key: string) => translations[lang][key] || key, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
