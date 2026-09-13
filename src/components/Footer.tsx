"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Sparkles, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { SCHOOL_DATA } from '@/data/schoolData';
import { ApplicationModal } from './ApplicationModal';

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  return (
    <>
      <footer
        style={{
          backgroundColor: 'var(--blue-950)',
          color: '#D4DAFB',
          paddingTop: 'clamp(56px, 8vw, 88px)',
          paddingBottom: '32px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '40px',
              marginBottom: '48px'
            }}
          >
            {/* Brand column */}
            <div style={{ maxWidth: '340px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/brand/unco-logo.png" alt="UNCO School" style={{ height: '42px', width: 'auto' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: '#fff' }}>
                  UNCO School
                </span>
              </div>
              <p style={{ color: '#A8B3E2', fontSize: '0.92rem', lineHeight: 1.65 }}>
                {t('footer.tagline') || 'Farg\'ona viloyati Buvayda tumani Ibrat shaharchasidagi tabiiy va aniq fanlarga ixtisoslashtirilgan zamonaviy xususiy maktab.'}
              </p>

              {/* Social links */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '22px' }}>
                <a
                  href={SCHOOL_DATA.social.telegram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    transition: 'all 0.25s ease'
                  }}
                  className="social-btn"
                >
                  <Send size={18} />
                </a>
                <a
                  href={SCHOOL_DATA.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    transition: 'all 0.25s ease'
                  }}
                  className="social-btn"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 style={{ color: '#fff', fontSize: '0.86rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px' }}>
                {t('footer.exploreHeading') || 'Bo\'limlar'}
              </h5>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li><Link href="/about" style={{ color: '#C5CEF8', fontSize: '0.92rem', transition: 'color 0.2s' }}>{t('nav.about') || 'Maktab haqida'}</Link></li>
                <li><Link href="/academics" style={{ color: '#C5CEF8', fontSize: '0.92rem', transition: 'color 0.2s' }}>{t('nav.academics') || 'Fanlar va darslar'}</Link></li>
                <li><Link href="/teachers" style={{ color: '#C5CEF8', fontSize: '0.92rem', transition: 'color 0.2s' }}>{t('nav.teachers') || 'O\'qituvchilar'}</Link></li>
                <li><Link href="/student-life" style={{ color: '#C5CEF8', fontSize: '0.92rem', transition: 'color 0.2s' }}>{t('nav.studentlife') || 'Maktab hayoti'}</Link></li>
              </ul>
            </div>

            {/* School details */}
            <div>
              <h5 style={{ color: '#fff', fontSize: '0.86rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px' }}>
                {t('footer.schoolHeading') || 'Qabul va Yutuqlar'}
              </h5>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li><Link href="/achievements" style={{ color: '#C5CEF8', fontSize: '0.92rem', transition: 'color 0.2s' }}>{t('nav.achievements') || 'Yutuqlar'}</Link></li>
                <li><Link href="/admissions" style={{ color: '#C5CEF8', fontSize: '0.92rem', transition: 'color 0.2s' }}>{t('nav.admissions') || 'Qabul tartibi'}</Link></li>
                <li><Link href="/contact" style={{ color: '#C5CEF8', fontSize: '0.92rem', transition: 'color 0.2s' }}>{t('nav.contact') || 'Bog\'lanish va Xarita'}</Link></li>
                <li>
                  <button
                    type="button"
                    onClick={() => setApplyModalOpen(true)}
                    style={{ 
                      color: '#7EA1FF', 
                      fontWeight: 700, 
                      fontSize: '0.92rem', 
                      textAlign: 'left',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <Sparkles size={14} />
                    <span>Ariza qoldirish</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h5 style={{ color: '#fff', fontSize: '0.86rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px' }}>
                {t('footer.visitHeading') || 'Manzil va Aloqa'}
              </h5>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                <MapPin size={16} color="#7EA1FF" style={{ flexShrink: 0, marginTop: '3px' }} />
                <p style={{ color: '#A8B3E2', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  {SCHOOL_DATA.location.full}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Phone size={15} color="#7EA1FF" style={{ flexShrink: 0 }} />
                <a href={`tel:${SCHOOL_DATA.social.phone}`} style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700 }}>
                  {SCHOOL_DATA.social.phone}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="#7EA1FF" style={{ flexShrink: 0 }} />
                <a href={`mailto:${SCHOOL_DATA.social.email}`} style={{ color: '#A8B3E2', fontSize: '0.88rem' }}>
                  {SCHOOL_DATA.social.email}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom copyright */}
          <div
            style={{
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
              fontSize: '0.84rem',
              color: '#8D98C7'
            }}
          >
            <div>© {new Date().getFullYear()} UNCO School. Barcha huquqlar himoyalangan.</div>
            <div>Grades 5–11 · Xususiy maktab · 2024 yildan faoliyat ko'rsatmoqda</div>
          </div>
        </div>

        <style jsx>{`
          .social-btn:hover {
            background-color: var(--blue) !important;
            border-color: var(--blue) !important;
            transform: translateY(-2px);
          }
        `}</style>
      </footer>

      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
      />
    </>
  );
};
