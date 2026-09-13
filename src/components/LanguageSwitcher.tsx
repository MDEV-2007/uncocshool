"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useTranslation, Language } from '@/context/LanguageContext';

const LANGS: { code: Language; label: string }[] = [
  { code: 'uz', label: "O'zbekcha" },
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' }
];

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Change language"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 14px',
          borderRadius: '999px',
          background: 'linear-gradient(140deg, var(--blue) 0%, var(--blue-700) 100%)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '0.82rem',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          boxShadow: '0 6px 18px -6px rgba(22, 47, 216, 0.6)',
          border: '1.5px solid rgba(255, 255, 255, 0.25)',
          cursor: 'pointer',
          transition: 'all 0.25s ease'
        }}
      >
        <Globe size={14} strokeWidth={2.2} />
        <span>{language.toUpperCase()}</span>
        <ChevronDown 
          size={13} 
          strokeWidth={2.5} 
          style={{
            transition: 'transform 0.25s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        />
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            minWidth: '150px',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--gray-200)',
            borderRadius: '12px',
            boxShadow: '0 20px 40px -15px rgba(8, 13, 56, 0.35)',
            padding: '6px',
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            gap: '3px'
          }}
        >
          {LANGS.map((item) => {
            const isActive = item.code === language;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLanguage(item.code);
                  setIsOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '0.86rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--blue)' : 'var(--ink-soft)',
                  background: isActive ? 'var(--blue-050)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease, color 0.2s ease'
                }}
              >
                <span>{item.label}</span>
                {isActive ? (
                  <Check size={14} color="var(--blue)" strokeWidth={2.5} />
                ) : (
                  <span style={{ fontSize: '0.68rem', opacity: 0.7, fontWeight: 700 }}>
                    {item.code.toUpperCase()}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
