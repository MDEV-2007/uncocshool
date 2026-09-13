"use client";

import React from 'react';

interface MediaCardProps {
  imageSrc: string;
  videoSrc?: string;
  title: string;
  tag?: string;
  aspect?: 'portrait' | 'wide';
  onPlay?: (videoSrc: string, title: string) => void;
}

export const MediaCard: React.FC<MediaCardProps> = ({
  imageSrc,
  videoSrc,
  title,
  tag,
  aspect = 'portrait',
  onPlay
}) => {
  const handleClick = () => {
    if (videoSrc && onPlay) {
      onPlay(videoSrc, title);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-l)',
        overflow: 'hidden',
        aspectRatio: aspect === 'wide' ? '16/10' : '9/16',
        backgroundColor: '#050826',
        cursor: videoSrc ? 'pointer' : 'default',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      className="media-card-item"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          inset: 0,
          transition: 'transform 0.5s ease'
        }}
        className="media-card-img"
      />

      {/* Scrim overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(5,8,38,0.88) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Play button */}
      {videoSrc && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.22)',
            border: '1.5px solid rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            transition: 'all 0.3s ease',
            zIndex: 5
          }}
          className="play-icon-box"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ marginLeft: '3px' }}>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}

      {/* Bottom info */}
      <div
        style={{
          position: 'absolute',
          left: '16px',
          right: '16px',
          bottom: '16px',
          zIndex: 6,
          color: '#fff'
        }}
      >
        {tag && (
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#A8BDFF',
              display: 'block',
              marginBottom: '4px'
            }}
          >
            {tag}
          </span>
        )}
        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
          {title}
        </h4>
      </div>

      <style jsx>{`
        .media-card-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 60px -20px rgba(22, 47, 216, 0.45);
        }
        .media-card-item:hover .media-card-img {
          transform: scale(1.06);
        }
        .media-card-item:hover .play-icon-box {
          background-color: var(--blue);
          border-color: var(--blue-400);
          transform: translate(-50%, -50%) scale(1.12);
        }
      `}</style>
    </div>
  );
};
