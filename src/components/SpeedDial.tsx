"use client";

import React, { useState, useEffect } from 'react';
import {
  Phone,
  Send,
  X,
  MessageCircle
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

export const SpeedDial: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Close speed dial on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Dim backdrop when open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 8, 38, 0.4)',
            backdropFilter: 'blur(2px)',
            zIndex: 9980,
            transition: 'opacity 0.25s ease'
          }}
          aria-hidden="true"
        />
      )}

      {/* Floating Speed Dial Container */}
      <aside 
        className="speed-dial-container"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9990,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '12px'
        }}
        aria-label={t('speeddial.title') || "Tezkor aloqa"}
      >
        {/* Expanded Speed-Dial Options */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '10px',
            pointerEvents: isOpen ? 'auto' : 'none',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.92)',
            transformOrigin: 'bottom right',
            transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Option 1: Direct Call */}
          <a
            href="tel:+998931401122"
            className="speed-dial-action"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: '#050826'
            }}
            title="+998 93 140 11 22"
          >
            <span
              className="speed-dial-label"
              style={{
                backgroundColor: '#ffffff',
                color: 'var(--ink)',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '6px 14px',
                borderRadius: '999px',
                boxShadow: '0 8px 24px rgba(5, 8, 38, 0.16)',
                border: '1px solid var(--gray-200)',
                whiteSpace: 'nowrap'
              }}
            >
              📞 {t('speeddial.call') || "Qo'ng'iroq qilish"} <strong style={{ color: 'var(--blue)' }}>(+998 93 140 11 22)</strong>
            </span>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 24px -4px rgba(16, 185, 129, 0.5)',
                transition: 'transform 0.2s ease'
              }}
              className="action-btn"
            >
              <Phone size={20} />
            </div>
          </a>

          {/* Option 2: Telegram Admin */}
          <a
            href="https://t.me/unco_school"
            target="_blank"
            rel="noopener noreferrer"
            className="speed-dial-action"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: '#050826'
            }}
            title="Telegram: @unco_school"
          >
            <span
              className="speed-dial-label"
              style={{
                backgroundColor: '#ffffff',
                color: 'var(--ink)',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '6px 14px',
                borderRadius: '999px',
                boxShadow: '0 8px 24px rgba(5, 8, 38, 0.16)',
                border: '1px solid var(--gray-200)',
                whiteSpace: 'nowrap'
              }}
            >
              ✈️ {t('speeddial.telegram') || "Telegram admin"} <strong style={{ color: '#0088cc' }}>(@unco_school)</strong>
            </span>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: '#0088cc',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 24px -4px rgba(0, 136, 204, 0.5)',
                transition: 'transform 0.2s ease'
              }}
              className="action-btn"
            >
              <Send size={20} />
            </div>
          </a>
        </div>

        {/* Main Floating Trigger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? (t('speeddial.close') || "Yopish") : (t('speeddial.title') || "Tezkor aloqa")}
          style={{
            position: 'relative',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: isOpen ? '#1E293B' : 'var(--blue)',
            color: '#ffffff',
            border: '2.5px solid #ffffff',
            boxShadow: '0 16px 36px -6px rgba(22, 47, 216, 0.5), 0 0 0 4px rgba(22, 47, 216, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="speed-dial-main-btn"
        >
          {/* Animated ping dot indicator when closed */}
          {!isOpen && (
            <span
              style={{
                position: 'absolute',
                top: '2px',
                right: '2px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                border: '2px solid #ffffff',
                boxShadow: '0 0 8px rgba(16, 185, 129, 0.8)'
              }}
              className="pulse-dot"
            />
          )}

          <div
            style={{
              transition: 'transform 0.3s ease',
              transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'
            }}
          >
            {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
          </div>
        </button>
      </aside>

      <style jsx>{`
        .speed-dial-main-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 20px 44px -6px rgba(22, 47, 216, 0.65), 0 0 0 6px rgba(22, 47, 216, 0.2);
        }
        .speed-dial-action:hover .action-btn {
          transform: scale(1.1);
        }
        .speed-dial-action:hover .speed-dial-label {
          background-color: var(--blue-050) !important;
          border-color: var(--blue-200) !important;
        }
        @keyframes pulseRing {
          0% {
            transform: scale(0.95);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.9;
          }
        }
        .pulse-dot {
          animation: pulseRing 1.8s infinite ease-in-out;
        }
        @media (max-width: 640px) {
          .speed-dial-container {
            bottom: 18px !important;
            right: 18px !important;
          }
        }
      `}</style>
    </>
  );
};
