"use client";

import React, { useEffect } from 'react';

interface VideoModalProps {
  src: string | null;
  title?: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ src, title, onClose }) => {
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
        backgroundColor: 'rgba(5, 8, 38, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '840px',
          borderRadius: '20px',
          overflow: 'hidden',
          backgroundColor: '#000',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            zIndex: 10
          }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.6)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            ✕
          </button>
        </div>

        <video
          src={src}
          controls
          autoPlay
          playsInline
          style={{
            width: '100%',
            maxHeight: '80vh',
            display: 'block'
          }}
        />

        {title && (
          <div
            style={{
              padding: '16px 20px',
              background: 'rgba(10, 13, 26, 0.95)',
              color: '#fff',
              fontSize: '0.95rem',
              fontWeight: 600
            }}
          >
            {title}
          </div>
        )}
      </div>
    </div>
  );
};
