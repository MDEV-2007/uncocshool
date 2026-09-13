"use client";

import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => {
  return (
    <div
      style={{
        position: 'relative',
        background: 'radial-gradient(circle at 14px 14px, rgba(22, 47, 216, 0.08) 1.5px, transparent 1.5px) 0 0/16px 16px, linear-gradient(150deg, #FFFFFF 55%, var(--blue-050) 145%)',
        border: '1px solid var(--gray-200)',
        borderRadius: 'var(--radius-l)',
        padding: 'clamp(20px, 4vw, 28px) clamp(18px, 3.5vw, 24px)',
        minHeight: '190px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default'
      }}
      className="stat-card"
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, var(--blue) 0%, #6E7BFF 100%)',
          opacity: 0.8
        }}
      />
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '14px',
          background: 'linear-gradient(145deg, var(--blue) 0%, var(--blue-700) 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          boxShadow: '0 10px 22px -8px rgba(22, 47, 216, 0.6)',
          transition: 'all 0.35s ease'
        }}
        className="stat-icon"
      >
        {icon}
      </div>

      <strong
        style={{
          display: 'block',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
          fontWeight: 800,
          lineHeight: 1,
          color: 'var(--blue-900)',
          marginTop: 'auto',
          marginBottom: '8px'
        }}
      >
        {value}
      </strong>

      <span
        style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          color: 'var(--gray-700)',
          lineHeight: 1.4
        }}
      >
        {label}
      </span>

      <style jsx>{`
        .stat-card:hover {
          transform: translateY(-6px);
          border-color: var(--blue-100);
          box-shadow: 0 26px 50px -20px rgba(22, 47, 216, 0.32);
        }
        .stat-card:hover .stat-icon {
          transform: scale(1.08) rotate(-4deg);
          box-shadow: 0 14px 28px -8px rgba(22, 47, 216, 0.7);
        }
      `}</style>
    </div>
  );
};
