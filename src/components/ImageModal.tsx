"use client";

import React, { useEffect } from 'react';
import { X, Award } from 'lucide-react';

interface ImageModalProps {
  src: string | null;
  title?: string;
  subtitle?: string;
  badge?: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ src, title, subtitle, badge, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (src) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 8, 38, 0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px, 3vw, 32px)',
        animation: 'modalFadeIn 0.25s ease forwards'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '720px',
          maxHeight: '92vh',
          borderRadius: '24px',
          overflow: 'hidden',
          backgroundColor: '#0D1442',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7)',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div
          style={{
            padding: '16px 20px',
            background: 'rgba(5, 8, 38, 0.8)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {badge && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'var(--blue)',
                  color: '#fff',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  textTransform: 'uppercase'
                }}
              >
                <Award size={13} />
                {badge}
              </span>
            )}
            <div>
              {title && (
                <h4 style={{ margin: 0, color: '#fff', fontSize: '1rem', fontWeight: 700 }}>
                  {title}
                </h4>
              )}
              {subtitle && (
                <span style={{ fontSize: '0.8rem', color: '#B0BCEB' }}>
                  {subtitle}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close image modal"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Image Display Area */}
        <div
          style={{
            padding: '12px',
            backgroundColor: '#050826',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'auto',
            maxHeight: 'calc(92vh - 80px)'
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={title || "UNCO Certificate"}
            style={{
              maxWidth: '100%',
              maxHeight: '75vh',
              width: 'auto',
              height: 'auto',
              borderRadius: '14px',
              objectFit: 'contain',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};
