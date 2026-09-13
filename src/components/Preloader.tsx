"use client";

import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Show smooth luxury loading for ~900ms on first mount
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 750);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 1150);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'radial-gradient(circle at center, #0B1245 0%, #050826 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'auto',
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Brand Icon with Pulsing Halo */}
      <div style={{ position: 'relative', marginBottom: '24px' }}>
        <div
          style={{
            position: 'absolute',
            inset: '-16px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(22, 47, 216, 0.45) 0%, rgba(22, 47, 216, 0) 70%)',
            animation: 'preloaderPulse 2s infinite ease-in-out'
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/brand/unco-logo.png"
          alt="UNCO School"
          style={{
            width: '76px',
            height: 'auto',
            position: 'relative',
            zIndex: 2,
            filter: 'drop-shadow(0 10px 24px rgba(22, 47, 216, 0.6))'
          }}
        />
      </div>

      {/* Brand Title */}
      <h2
        style={{
          fontFamily: 'var(--font-display, "Outfit", sans-serif)',
          color: '#ffffff',
          fontSize: '1.75rem',
          fontWeight: 800,
          letterSpacing: '0.08em',
          margin: 0,
          textAlign: 'center'
        }}
      >
        UNCO SCHOOL
      </h2>

      <span
        style={{
          fontSize: '0.82rem',
          color: '#8EA1FF',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontWeight: 600,
          marginTop: '8px',
          marginBottom: '28px'
        }}
      >
        EDUCATION · SINCE 2024
      </span>

      {/* Glowing Loading Bar */}
      <div
        style={{
          width: '180px',
          height: '3px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '999px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '100%',
            background: 'linear-gradient(90deg, transparent 0%, #162FD8 50%, #8EA1FF 100%)',
            animation: 'preloaderBar 1.2s infinite cubic-bezier(0.65, 0, 0.35, 1)'
          }}
        />
      </div>

      <style jsx global>{`
        @keyframes preloaderPulse {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.9;
          }
        }
        @keyframes preloaderBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};
