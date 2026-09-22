"use client";

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

export interface PhotoFanItem {
  id: string;
  titleKey?: string;
  tagKey?: string;
  descriptionKey?: string;
  captionKey?: string;
  src?: string;
  poster?: string;
  img?: string;
}

interface PhotoFanProps {
  items: PhotoFanItem[];
  onPlay?: (videoSrc: string, title: string) => void;
}

export const PhotoFan: React.FC<PhotoFanProps> = ({ items, onPlay }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (!items || items.length === 0) return null;

  const n = items.length;
  const itemW = 46; // rest card width (% of container)
  const spreadX = 22; // total pile spread X (%)
  const spreadY = 16; // total pile spread Y (%)
  const stepX = n > 1 ? spreadX / (n - 1) : 0;
  const stepY = n > 1 ? spreadY / (n - 1) : 0;
  const hoverLeft = 100 - itemW - 2; // shared slid-out destination (%)

  const activeItem = items[activeIndex] || items[0];
  const activeTag = activeItem.tagKey ? t(activeItem.tagKey) : "";
  const activeDesc = activeItem.descriptionKey 
    ? t(activeItem.descriptionKey) 
    : (activeItem.captionKey ? t(activeItem.captionKey) : "");

  return (
    <div style={{ position: 'relative', width: '100%', margin: '20px 0 36px' }}>
      {/* Desktop & Tablet Cascading Fan Deck */}
      <div className="photo-fan-container">
        <div className="photo-fan-stage">
          {items.map((item, i) => {
            const isVideo = !!item.src;
            const imgSrc = item.img || item.poster || "";
            const title = item.titleKey ? t(item.titleKey) : "";
            const tag = item.tagKey ? t(item.tagKey) : "";
            const restLeft = i * stepX;
            const top = i * stepY;
            const shiftContainerPct = hoverLeft - restLeft;
            const zoneWidthPct = itemW + shiftContainerPct;
            const cardWidthOfZonePct = (itemW / zoneWidthPct) * 100;
            const shiftOfCardPct = (shiftContainerPct / itemW) * 100;
            const isActive = activeIndex === i;

            return (
              <div
                key={item.id || i}
                className={`photo-fan-hit-zone ${isActive ? 'is-active' : ''}`}
                style={{
                  position: 'absolute',
                  top: `${top}%`,
                  left: `${restLeft}%`,
                  width: `${zoneWidthPct}%`,
                  height: '78%',
                  zIndex: isActive ? 50 : i + 1,
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => {
                  setActiveIndex(i);
                  if (isVideo && item.src && onPlay) {
                    onPlay(item.src, title || tag);
                  }
                }}
              >
                <div
                  className="photo-fan-card"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: `${cardWidthOfZonePct}%`,
                    height: '100%',
                    borderRadius: 'var(--radius-l)',
                    overflow: 'hidden',
                    background: '#000',
                    border: '3px solid var(--blue-050)',
                    boxShadow: isActive
                      ? '0 34px 64px -20px rgba(8, 13, 56, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.3) inset'
                      : '0 16px 36px -18px rgba(8, 13, 56, 0.4)',
                    transform: isActive ? `translateX(${shiftOfCardPct}%) scale(1.02)` : 'none',
                    filter: !isActive ? 'brightness(0.72) saturate(0.85)' : 'none',
                    transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease, box-shadow 0.4s ease'
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgSrc}
                    alt={title || tag || "UNCO school moment"}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.85) 100%)'
                    }}
                  />

                  {isVideo && (
                    <div
                      className="photo-fan-play"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.22)',
                        border: '1.5px solid rgba(255, 255, 255, 0.7)',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        opacity: isActive ? 1 : 0.8,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Play size={20} fill="currentColor" style={{ marginLeft: '2px' }} />
                    </div>
                  )}

                  <div style={{ position: 'absolute', left: '16px', right: '16px', bottom: '16px', color: '#fff' }}>
                    {tag && (
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '0.68rem',
                          fontWeight: 800,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--blue-900)',
                          background: '#ffffff',
                          padding: '4px 10px',
                          borderRadius: '999px',
                          marginBottom: '6px'
                        }}
                      >
                        {tag}
                      </span>
                    )}
                    {title && (
                      <h4 style={{ fontSize: '0.98rem', color: '#fff', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                        {title}
                      </h4>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Animated Caption Card */}
      <div
        className="card"
        style={{
          marginTop: '20px',
          padding: '24px 28px',
          background: 'linear-gradient(145deg, #ffffff 60%, var(--blue-050) 140%)',
          borderColor: 'rgba(22, 47, 216, 0.2)',
          minHeight: '100px',
          boxShadow: '0 12px 28px -12px rgba(22, 47, 216, 0.12)'
        }}
      >
        {activeTag && (
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--blue)',
              marginBottom: '6px'
            }}
          >
            {activeTag}
          </span>
        )}
        <p
          key={activeIndex}
          style={{
            color: 'var(--ink)',
            fontSize: '1.02rem',
            lineHeight: 1.7,
            margin: 0,
            animation: 'fadeInCaption 0.4s ease forwards'
          }}
        >
          {activeDesc}
        </p>
      </div>

      <style jsx>{`
        .photo-fan-stage {
          position: relative;
          height: clamp(340px, 42vw, 480px);
          width: 100%;
        }

        @keyframes fadeInCaption {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .photo-fan-stage {
            display: flex;
            overflow-x: auto;
            gap: 16px;
            height: auto;
            padding-bottom: 12px;
            scroll-snap-type: x mandatory;
          }
          .photo-fan-hit-zone {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            width: 260px !important;
            height: 340px !important;
            flex-shrink: 0;
            scroll-snap-align: center;
          }
          .photo-fan-card {
            position: relative !important;
            width: 100% !important;
            height: 100% !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </div>
  );
};
