"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles,
  ArrowRight,
  Camera,
  Play,
  Mountain
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { STUDENT_LIFE_GAMES, STUDENT_LIFE_CAMPUS } from '@/data/mediaData';
import { MediaCard } from '@/components/MediaCard';
import { PhotoFan } from '@/components/PhotoFan';
import { VideoModal } from '@/components/VideoModal';

export default function StudentLifePage() {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null);

  return (
    <>
      {/* 1. PAGE HERO */}
      <section
        style={{
          background: 'linear-gradient(175deg, #050826 0%, #080D38 100%)',
          color: '#ffffff',
          paddingTop: 'clamp(110px, 12vw, 150px)',
          paddingBottom: 'clamp(44px, 6vw, 80px)'
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', fontSize: '0.84rem', color: '#B0BCEB', marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#fff' }}>{t('nav.home') || 'Bosh sahifa'}</Link>
            <span>/</span>
            <span>{t('nav.studentlife') || 'Maktab hayoti'}</span>
          </div>
          <span className="eyebrow" style={{ color: '#A3B5FF', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Camera size={16} />
            <span>{t('studentlife.hero.eyebrow') || "O'quvchilar hayoti"}</span>
          </span>
          <h1 className="display" style={{ color: '#fff', marginTop: '14px', marginBottom: '18px' }}>
            {t('studentlife.hero.title') || "UNCO hayoti — haqiqatda qanday ko'rinadi"}
          </h1>
          <p className="lede" style={{ color: '#D4DAFB', maxWidth: '720px' }}>
            {t('studentlife.hero.lede') || "Maktabimizdan saralangan haqiqiy foto va videolar — intellektual o'yinlar, qiziqarli darslar, sayohatlar hamda ustoz va o'quvchilar o'rtasidagi samimiy muloqot."}
          </p>
        </div>
      </section>

      {/* 2. GAMES & CHALLENGES (EDITORIAL STORY ROWS) */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <span className="eyebrow">
              {t('studentlife.games.eyebrow') || "O'yinlar va bellashuvlar"}
            </span>
            <h2 className="display" style={{ marginTop: '12px', marginBottom: '14px' }}>
              {t('studentlife.games.title') || "Ma'ruzaga o'xshamaydigan ta'lim jarayoni"}
            </h2>
            <p className="lede" style={{ maxWidth: '680px' }}>
              {t('studentlife.games.lede') || "Darslar orasida diqqatni jamlash, koordinatsiya va jamoada ishlash ko'nikmalarini rivojlantiruvchi qisqa mashg'ulotlar."}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {STUDENT_LIFE_GAMES.map((item, idx) => {
              const isReversed = idx % 2 === 1;
              const title = t(item.titleKey);
              const tag = t(item.tagKey);
              const desc = item.descriptionKey ? t(item.descriptionKey) : "";

              return (
                <div
                  key={item.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 'clamp(28px, 5vw, 64px)',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ order: isReversed ? 2 : 1, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '100%', maxWidth: '380px' }}>
                      <MediaCard
                        imageSrc={item.poster}
                        videoSrc={item.src}
                        title={title}
                        tag={tag}
                        aspect="portrait"
                        onPlay={(src, tStr) => setActiveVideo({ src, title: tStr })}
                      />
                    </div>
                  </div>

                  <div style={{ order: isReversed ? 1 : 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.8rem',
                          fontWeight: 800,
                          color: 'var(--blue)',
                          opacity: 0.4
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <span className="eyebrow" style={{ margin: 0 }}>{tag}</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', marginBottom: '16px' }}>
                      {title}
                    </h3>
                    <p style={{ color: 'var(--gray-700)', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '24px' }}>
                      {desc}
                    </p>
                    <button
                      type="button"
                      onClick={() => item.src && setActiveVideo({ src: item.src, title })}
                      className="btn btn-outline"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      <Play size={16} fill="currentColor" />
                      <span>{t('common.watchVideo') || "Videoni tomosha qilish"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ON CAMPUS (THE EXACT INTERACTIVE FANNED CARD STACK FROM USER SCREENSHOT 2) */}
      <section className="section section-tint">
        <div className="container">
          <div style={{ marginBottom: '32px' }}>
            <span className="eyebrow">
              {t('studentlife.campus.eyebrow') || "Maktab hududida"}
            </span>
            <h2 className="display" style={{ marginTop: '12px', marginBottom: '14px' }}>
              {t('studentlife.campus.title') || "Sinfxona va kundalik maktab hayoti"}
            </h2>
            <p className="lede" style={{ maxWidth: '680px' }}>
              {t('studentlife.campus.lede') || "Har qanday fotosurat ustiga kursorni olib boring (yoki telefonda bosing) — uning tafsiloti ko'rinadi."}
            </p>
          </div>

          {/* Interactive PhotoFan Component */}
          <PhotoFan
            items={STUDENT_LIFE_CAMPUS}
            onPlay={(src, title) => setActiveVideo({ src, title })}
          />
        </div>
      </section>

      {/* 4. BEYOND CAMPUS: SCHOOL TRIPS */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: '360px' }}>
                <MediaCard
                  imageSrc="/assets/student-life/school_mountain_trip.jpg"
                  videoSrc="/assets/student-life/school_mountain_trip.mp4"
                  title={t('gallery.s5.title') || "Tog' sayohati"}
                  tag={t('gallery.s5.tag') || "Ekskursiya"}
                  aspect="portrait"
                  onPlay={(src, title) => setActiveVideo({ src, title })}
                />
              </div>
            </div>

            <div>
              <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mountain size={16} color="var(--blue)" />
                <span>{t('studentlife.trip.eyebrow') || "Maktabdan tashqarida"}</span>
              </span>
              <h2 className="display" style={{ marginTop: '12px', marginBottom: '16px' }}>
                {t('studentlife.trip.title') || "Tog' sayohatlari va ekskursiyalar"}
              </h2>
              <p className="lede" style={{ marginBottom: '24px' }}>
                {t('studentlife.trip.lede') || "Tabiat qo'ynidagi sayohatlar o'quvchilarga sinfxonadan tashqarida dam olish va do'stlik rishtalarini mustahkamlash imkonini beradi."}
              </p>
              <button
                type="button"
                onClick={() => setActiveVideo({ src: "/assets/student-life/school_mountain_trip.mp4", title: t('gallery.s5.title') || "Tog' sayohati" })}
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Play size={16} fill="currentColor" />
                <span>{t('common.watchVideo') || "Sayohat videosini ko'rish"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="section-tight" style={{ backgroundColor: 'var(--blue-050)' }}>
        <div className="container">
          <div
            style={{
              padding: 'clamp(32px, 5vw, 56px)',
              borderRadius: 'var(--radius-l)',
              background: 'linear-gradient(135deg, var(--blue-900) 0%, var(--blue) 100%)',
              color: '#fff',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '24px',
              boxShadow: '0 24px 50px -15px rgba(22, 47, 216, 0.4)'
            }}
          >
            <div>
              <span className="eyebrow" style={{ color: '#9AABFF', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={16} />
                <span>{t('studentlife.cta.eyebrow') || "Natijalarni ham ko'rishni xohlaysizmi?"}</span>
              </span>
              <h2 className="display" style={{ color: '#fff', marginTop: '8px' }}>
                {t('studentlife.cta.title') || "O'quvchilarimiz yutuqlari bilan tanishing"}
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link 
                href="/achievements" 
                className="btn btn-ghost-light"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>{t('studentlife.cta.btn1') || "Yutuqlarni ko'rish"}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Video Modal */}
      <VideoModal
        src={activeVideo?.src || null}
        title={activeVideo?.title}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
