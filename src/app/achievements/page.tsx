"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  Play, 
  GraduationCap, 
  Star, 
  CheckCircle2, 
  Calendar, 
  ArrowRight,
  ZoomIn,
  BookOpen,
  Layers,
  FileCheck,
  Search
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { 
  ACHIEVEMENTS_TIMELINE, 
  ACHIEVEMENTS_MEDIA, 
  ACHIEVEMENT_MOMENTS,
  STUDENT_CERTIFICATES,
  MULTILEVEL_SHOWCASE
} from '@/data/mediaData';
import { MediaCard } from '@/components/MediaCard';
import { PhotoFan } from '@/components/PhotoFan';
import { VideoModal } from '@/components/VideoModal';
import { ImageModal } from '@/components/ImageModal';
import { ApplicationModal } from '@/components/ApplicationModal';

export default function AchievementsPage() {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null);
  const [activeImage, setActiveImage] = useState<{ src: string; title: string; subtitle?: string; badge?: string } | null>(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);

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
            <span>{t('nav.achievements') || 'Yutuqlar'}</span>
          </div>
          <span className="eyebrow" style={{ color: '#A3B5FF', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Trophy size={16} />
            <span>{t('achievements.hero.eyebrow') || "Natijalar va g'alabalar"}</span>
          </span>
          <h1 className="display" style={{ color: '#fff', marginTop: '14px', marginBottom: '18px' }}>
            {t('achievements.hero.title') || "Shunchaki va'dalar emas, aniq natijalar"}
          </h1>
          <p className="lede" style={{ color: '#D4DAFB', maxWidth: '720px' }}>
            {t('achievements.hero.lede') || "Yosh maktabning natijalari hozircha qisqa, biroq har bir ko'rsatkich UNCO ning ta'lim sifati va jiddiy yondashuvini isbotlaydi."}
          </p>
        </div>
      </section>

      {/* 2. BIG STAT HERO (FIRST GRADUATING CLASS) */}
      <section className="section" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div
            style={{
              background: 'radial-gradient(80% 120% at 100% 0%, rgba(38, 70, 236, 0.45), transparent 70%), var(--blue-900)',
              color: '#ffffff',
              borderRadius: 'var(--radius-l)',
              padding: 'clamp(32px, 5vw, 64px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              alignItems: 'center',
              boxShadow: '0 24px 50px -15px rgba(22, 47, 216, 0.4)'
            }}
          >
            <div>
              <span className="eyebrow" style={{ color: '#9BB0FF', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <GraduationCap size={16} />
                <span>{t('achievements.big.eyebrow') || "2025 · Ilk bitiruvchilar"}</span>
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#fff', marginTop: '8px', marginBottom: '16px' }}>
                {t('achievements.big.title') || "Birinchi bitiruvchilarimizning OTM natijalari"}
              </h2>
              <p style={{ color: '#D4DAFB', fontSize: '1.02rem', lineHeight: 1.65 }}>
                {t('achievements.big.body') || "2025-yilda UNCO School o'zining birinchi bitiruvchilarini chiqardi. 6 nafar bitiruvchidan 5 nafari nufuzli oliygohlarga talabalikka qabul qilindi."}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 9vw, 6.5rem)', color: '#fff', fontWeight: 800, lineHeight: 1 }}>
                5 <span style={{ color: '#8FA0FF' }}>/</span> 6
              </div>
              <div style={{ fontSize: '1rem', color: '#B0BCEB', fontWeight: 600, marginTop: '8px' }}>
                {t('achievements.big.lede') || "bitiruvchilar oliy ta'lim muassasalariga qabul qilindi"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NATIONAL & MULTILEVEL LANGUAGE CERTIFICATES (THE 4 USER CERTIFICATES) */}
      <section className="section" style={{ paddingTop: '32px' }}>
        <div className="container">
          <div style={{ marginBottom: '44px' }}>
            <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <FileCheck size={16} color="var(--blue)" />
              <span>{t('achievements.certs.eyebrow') || "Davlat va Xalqaro Sertifikatlar"}</span>
            </span>
            <h2 className="display" style={{ marginTop: '10px', marginBottom: '14px' }}>
              {t('achievements.certs.title') || "Milliy til sertifikatlari va rekord natijalar"}
            </h2>
            <p className="lede" style={{ maxWidth: '740px' }}>
              {t('achievements.certs.lede') || "UNCO School va UNCO Academy o'quvchilari Bilim va malakalarni baholash agentligi (DTM) hamda xalqaro Multilevel sinovlarida yuqori natijalar qayd etib, oliygohlarga kirishda 100% lik imtiyozlarni qo'lga kiritmoqdalar."}
            </p>
          </div>

          {/* Featured Spotlight: UNCO Academy Certificate Wall & Top Student */}
          <div
            className="card"
            style={{
              padding: 'clamp(28px, 4vw, 44px)',
              background: 'linear-gradient(145deg, #FFFFFF 65%, var(--blue-050) 145%)',
              border: '1.5px solid rgba(22, 47, 216, 0.16)',
              borderRadius: 'var(--radius-l)',
              boxShadow: '0 24px 50px -18px rgba(22, 47, 216, 0.16)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(28px, 5vw, 56px)',
              alignItems: 'center',
              marginBottom: '52px'
            }}
          >
            {/* Visual with Click-to-Zoom */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                onClick={() => setActiveImage({
                  src: MULTILEVEL_SHOWCASE.image,
                  title: t('achievements.spotlight.title') || "UNCO Academy — Multilevel Sertifikatlar Galereyasi",
                  subtitle: t('achievements.spotlight.desc') || "12+ Tasdiqlangan milliy va xalqaro til sertifikatlari",
                  badge: "UNCO Academy"
                })}
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '440px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 20px 40px -12px rgba(8, 13, 56, 0.35)',
                  border: '3px solid #ffffff',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="certificate-thumb-hover"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={MULTILEVEL_SHOWCASE.image}
                  alt={t('achievements.spotlight.title') || "UNCO Academy Multilevel sertifikatlar g'olibi"}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 60%, rgba(5, 8, 38, 0.75) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    padding: '16px'
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(255, 255, 255, 0.92)',
                      color: 'var(--blue-900)',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      padding: '4px 12px',
                      borderRadius: '999px',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {t('achievements.spotlight.btn') || "Kattalashtirish"}
                  </span>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(8px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff'
                    }}
                  >
                    <ZoomIn size={18} />
                  </div>
                </div>
              </div>
            </div>

            {/* Content description */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    borderRadius: '999px',
                    background: 'var(--blue-050)',
                    border: '1px solid var(--blue-200)',
                    color: 'var(--blue)',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  <Award size={14} />
                  <span>{t('achievements.spotlight.tag') || MULTILEVEL_SHOWCASE.tag}</span>
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: '#059669',
                    fontWeight: 700,
                    background: '#ECFDF5',
                    padding: '5px 10px',
                    borderRadius: '999px',
                    border: '1px solid #A7F3D0'
                  }}
                >
                  ✓ {t('achievements.spotlight.verified') || "Rasman tasdiqlangan"}
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', lineHeight: 1.25, marginBottom: '16px' }}>
                {t('achievements.spotlight.title') || MULTILEVEL_SHOWCASE.titleKey}
              </h3>

              <p style={{ color: 'var(--gray-700)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '24px' }}>
                {t('achievements.spotlight.desc') || MULTILEVEL_SHOWCASE.desc}
              </p>

              {/* Badges / Key facts */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginBottom: '28px' }}>
                <div style={{ padding: '12px 16px', background: '#fff', borderRadius: 'var(--radius-s)', border: '1px solid var(--gray-200)' }}>
                  <strong style={{ display: 'block', fontSize: '1.25rem', color: 'var(--blue)', fontWeight: 800 }}>12+</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>{t('achievements.spotlight.stat1') || "Milliy sertifikat"}</span>
                </div>
                <div style={{ padding: '12px 16px', background: '#fff', borderRadius: 'var(--radius-s)', border: '1px solid var(--gray-200)' }}>
                  <strong style={{ display: 'block', fontSize: '1.25rem', color: '#059669', fontWeight: 800 }}>100%</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>{t('achievements.spotlight.stat2') || "Imtihon imtiyozi"}</span>
                </div>
                <div style={{ padding: '12px 16px', background: '#fff', borderRadius: 'var(--radius-s)', border: '1px solid var(--gray-200)' }}>
                  <strong style={{ display: 'block', fontSize: '1.25rem', color: 'var(--ink)', fontWeight: 800 }}>B / C+</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>{t('achievements.spotlight.stat3') || "Yuqori darajalar"}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveImage({
                  src: MULTILEVEL_SHOWCASE.image,
                  title: t('achievements.spotlight.title') || "UNCO Academy — Multilevel Sertifikatlar Galereyasi",
                  subtitle: t('achievements.spotlight.desc') || "12+ Tasdiqlangan milliy va xalqaro til sertifikatlari",
                  badge: "UNCO Academy"
                })}
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <ZoomIn size={16} />
                <span>{t('achievements.spotlight.btn') || "Fotolavhani to'liq ochish"}</span>
              </button>
            </div>
          </div>

          {/* 3 Verified National Ona Tili Certificates Grid */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
              <div>
                <span className="eyebrow" style={{ color: 'var(--blue)' }}>{t('achievements.dtm.eyebrow') || "Davlat Test Markazi (DTM) Natijalari"}</span>
                <h3 style={{ fontSize: '1.5rem', marginTop: '6px' }}>
                  {t('achievements.dtm.title') || "Ona tili va adabiyot fanidan milliy sertifikatlar"}
                </h3>
              </div>
              <span style={{ fontSize: '0.86rem', color: 'var(--gray-600)' }}>
                {t('achievements.dtm.hint') || "Kattalashtirib ko'rish uchun har bir sertifikat ustiga bosing"}
              </span>
            </div>

            <div className="grid grid-3">
              {STUDENT_CERTIFICATES.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setActiveImage({
                    src: cert.image,
                    title: cert.studentName,
                    subtitle: `${t('achievements.dtm.subject') || cert.subject} · ${cert.score} (${cert.points}) · ${t('achievements.dtm.agency') || cert.agency}`,
                    badge: `${t('achievements.dtm.level') || "Daraja"}: ${cert.level}`
                  })}
                  className="card certificate-item-card"
                  style={{
                    padding: '16px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative'
                  }}
                >
                  {/* Certificate Image Frame */}
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      backgroundColor: '#0A1033',
                      aspectRatio: '1 / 1',
                      marginBottom: '16px'
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cert.image}
                      alt={`${cert.studentName} sertifikati`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                      className="cert-img"
                    />

                    {/* Level Badge Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: cert.badgeBg,
                        color: '#fff',
                        fontWeight: 800,
                        fontSize: '0.82rem',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Award size={13} />
                      <span>{cert.level}</span>
                    </div>

                    {/* Zoom Icon Button Overlay */}
                    <div
                      className="zoom-overlay"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(5, 8, 38, 0.45)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.25s ease'
                      }}
                    >
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '50%',
                          backgroundColor: '#ffffff',
                          color: 'var(--blue)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 10px 24px rgba(0,0,0,0.4)',
                          transform: 'scale(0.85)',
                          transition: 'transform 0.25s ease'
                        }}
                        className="zoom-circle"
                      >
                        <ZoomIn size={22} />
                      </div>
                    </div>
                  </div>

                  {/* Student & Score Details */}
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                      <h4 style={{ fontSize: '1.18rem', margin: 0, color: 'var(--ink)' }}>
                        {cert.studentName}
                      </h4>
                    </div>

                    <span style={{ fontSize: '0.84rem', color: 'var(--blue)', fontWeight: 600, marginBottom: '12px' }}>
                      {t('achievements.dtm.subject') || cert.subject}
                    </span>

                    {/* Score Bar */}
                    <div
                      style={{
                        background: 'var(--gray-100)',
                        borderRadius: '10px',
                        padding: '12px',
                        marginBottom: '14px',
                        border: '1px solid var(--gray-200)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--gray-600)', fontWeight: 600 }}>{t('achievements.dtm.scoreLabel') || "Umumiy ko'rsatkich:"}</span>
                        <strong style={{ fontSize: '1.1rem', color: cert.badgeBg, fontWeight: 800 }}>{cert.score}</strong>
                      </div>
                      <div
                        style={{
                          width: '100%',
                          height: '6px',
                          backgroundColor: 'var(--gray-200)',
                          borderRadius: '999px',
                          overflow: 'hidden'
                        }}
                      >
                        <div
                          style={{
                            width: cert.score,
                            height: '100%',
                            backgroundColor: cert.badgeBg,
                            borderRadius: '999px'
                          }}
                        />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '0.74rem', color: 'var(--gray-500)' }}>
                        <span>{t('achievements.dtm.points') || "To'plangan ball"}: <strong>{cert.points}</strong></span>
                        <span>{t('achievements.dtm.level') || "Daraja"}: <strong>{cert.level}</strong></span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#059669', marginTop: 'auto' }}>
                      <CheckCircle2 size={14} />
                      <span>{t('achievements.dtm.agency') || cert.agency}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERIFIED MILESTONES TIMELINE */}
      <section className="section" style={{ paddingTop: '16px' }}>
        <div className="container">
          <div style={{ marginBottom: '64px' }}>
            <span className="eyebrow">{t('achievements.timeline.eyebrow') || "Vaqt xronologiyasi"}</span>
            <h2 className="display" style={{ marginTop: '12px', marginBottom: '32px' }}>
              {t('achievements.timeline.title') || "Tasdiqlangan muhim bosqichlar"}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {ACHIEVEMENTS_TIMELINE.map((m) => (
                <div 
                  key={m.id} 
                  className="card" 
                  style={{ 
                    display: 'flex', 
                    gap: '24px', 
                    alignItems: 'flex-start',
                    padding: '24px 28px'
                  }}
                >
                  <div 
                    className="icon-badge icon-badge-gold" 
                    style={{ 
                      flexShrink: 0, 
                      fontWeight: 800, 
                      fontSize: '0.85rem',
                      width: 'auto',
                      padding: '8px 16px',
                      borderRadius: '999px'
                    }}
                  >
                    {m.year}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>{t(m.titleKey)}</h3>
                    <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                      {t(m.descriptionKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. SCHOLARSHIPS CARDS */}
          <div style={{ marginBottom: '64px' }}>
            <span className="eyebrow">{t('achievements.scholarships.eyebrow') || "Stipendiyalar"}</span>
            <h2 className="display" style={{ marginTop: '12px', marginBottom: '14px' }}>
              {t('achievements.scholarships.title') || "Natijalarni e'tirof etish"}
            </h2>
            <p className="lede" style={{ maxWidth: '680px', marginBottom: '28px' }}>
              {t('achievements.scholarships.lede') || "Faol va intiluvchan o'quvchilar har oylik doimiy akademik monitoring asosida stipendiya olish huquqiga ega bo'ladilar."}
            </p>

            <div className="grid grid-2">
              <div className="card" style={{ padding: '32px' }}>
                <div className="icon-badge icon-badge-gold" style={{ marginBottom: '16px' }}>
                  <Award size={24} strokeWidth={2.2} />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>
                  {t('achievements.scholarships.card1.title') || "100 000 – 500 000 so'm / oy"}
                </h3>
                <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {t('achievements.scholarships.card1.body') || "O'quv natijalari va faolligi yuqori bo'lgan o'quvchilar uchun oylik stipendiya ko'lami."}
                </p>
              </div>

              <div className="card" style={{ padding: '32px' }}>
                <div className="icon-badge icon-badge-gold" style={{ marginBottom: '16px' }}>
                  <Calendar size={24} strokeWidth={2.2} />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>
                  {t('achievements.scholarships.card2.title') || "Doimiy monitoring"}
                </h3>
                <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {t('achievements.scholarships.card2.body') || "Stipendiyalar bir marta berilib unutilmaydi, balki har oy muntazam ravishda qayta ko'rib chiqiladi."}
                </p>
              </div>
            </div>
          </div>

          {/* 6. RECOGNITION & AWARDS ON VIDEO */}
          <div style={{ marginBottom: '64px' }}>
            <span className="eyebrow">{t('achievements.videos.eyebrow') || "O'sha lahzalarda"}</span>
            <h2 className="display" style={{ marginTop: '12px', marginBottom: '36px' }}>
              {t('achievements.videos.title') || "Taqdirlash va mukofotlar — videoda"}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
              {ACHIEVEMENTS_MEDIA.map((item, idx) => {
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
                      <span className="eyebrow">{tag}</span>
                      <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', marginTop: '8px', marginBottom: '16px' }}>
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
                        <span>{t('common.watchVideo') || "Taqdirlash videosini ko'rish"}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 7. MORE FROM THE DAY: INTERACTIVE PHOTO FAN */}
          <div style={{ marginTop: '56px' }}>
            <span className="eyebrow">{t('achievements.moments.eyebrow') || "O'sha kundan fotolavhalar"}</span>
            <h2 className="display" style={{ marginTop: '12px', marginBottom: '16px' }}>
              {t('achievements.moments.title') || "Yaqinroq nazar — lahzalar"}
            </h2>
            <p className="lede" style={{ maxWidth: '680px', marginBottom: '24px' }}>
              {t('achievements.moments.lede') || "Taqdirlash marosimidan haqiqiy fotosuratlar. Har bir surat ustiga kursorni olib boring."}
            </p>

            <PhotoFan
              items={ACHIEVEMENT_MOMENTS}
            />
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER */}
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
                <span>{t('achievements.cta.eyebrow') || "Keyingi bitiruvchilar safida bo'lishga tayyormisiz?"}</span>
              </span>
              <h2 className="display" style={{ color: '#fff', marginTop: '8px' }}>
                {t('achievements.cta.title') || "Qabul arizasini topshiring"}
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link 
                href="/contact" 
                className="btn btn-ghost-light"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>{t('achievements.cta.btn2') || "Aloqa"}</span>
                <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                onClick={() => setApplyModalOpen(true)}
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Sparkles size={16} />
                <span>{t('achievements.cta.btn1') || "Qabul 2025"}</span>
              </button>
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

      {/* Lightbox Image Modal */}
      <ImageModal
        src={activeImage?.src || null}
        title={activeImage?.title}
        subtitle={activeImage?.subtitle}
        badge={activeImage?.badge}
        onClose={() => setActiveImage(null)}
      />

      {/* Online Application Modal */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
      />

      <style jsx>{`
        .certificate-thumb-hover:hover img {
          transform: scale(1.04);
        }
        .certificate-item-card:hover {
          transform: translateY(-5px);
          border-color: rgba(22, 47, 216, 0.35);
          box-shadow: 0 20px 40px -15px rgba(22, 47, 216, 0.2);
        }
        .certificate-item-card:hover .cert-img {
          transform: scale(1.05);
        }
        .certificate-item-card:hover .zoom-overlay {
          opacity: 1 !important;
        }
        .certificate-item-card:hover .zoom-circle {
          transform: scale(1) !important;
        }
      `}</style>
    </>
  );
}
