"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  School,
  ShieldCheck,
  Target,
  BookOpen,
  Sparkles,
  Activity,
  Laptop,
  CheckCircle2,
  Award,
  Bus,
  Wind,
  Layers,
  MapPin,
  ArrowRight,
  UtensilsCrossed,
  ZoomIn
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { MediaCard } from '@/components/MediaCard';
import { VideoModal } from '@/components/VideoModal';
import { ImageModal } from '@/components/ImageModal';

export default function AboutPage() {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null);
  const [activeImage, setActiveImage] = useState<{ src: string; title: string; subtitle?: string; badge?: string } | null>(null);

  const facilities = [
    { titleKey: "about.facility1.title", bodyKey: "about.facility1.body", icon: <School size={22} /> },
    { titleKey: "about.facility2.title", bodyKey: "about.facility2.body", icon: <Laptop size={22} /> },
    { titleKey: "about.facility3.title", bodyKey: "about.facility3.body", icon: <Layers size={22} /> },
    { titleKey: "about.facility4.title", bodyKey: "about.facility4.body", icon: <Wind size={22} /> },
    { titleKey: "about.facility5.title", bodyKey: "about.facility5.body", icon: <Activity size={22} /> },
    { titleKey: "about.facility6.title", bodyKey: "about.facility6.body", icon: <Award size={22} /> },
    { titleKey: "about.facility7.title", bodyKey: "about.facility7.body", icon: <BookOpen size={22} /> },
    { titleKey: "about.facility8.title", bodyKey: "about.facility8.body", icon: <Bus size={22} /> }
  ];

  return (
    <>
      {/* 1. PAGE HERO */}
      <section
        style={{
          background: 'linear-gradient(175deg, #050826 0%, #080D38 100%)',
          color: '#ffffff',
          paddingTop: 'clamp(110px, 12vw, 150px)',
          paddingBottom: 'clamp(44px, 6vw, 80px)',
          position: 'relative'
        }}
      >
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', gap: '8px', fontSize: '0.84rem', color: '#B0BCEB', marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#fff' }}>{t('nav.home') || 'Bosh sahifa'}</Link>
            <span>/</span>
            <span>{t('nav.about') || 'Maktab haqida'}</span>
          </div>
          <span className="eyebrow" style={{ color: '#A3B5FF', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <School size={16} />
            <span>{t('about.hero.eyebrow') || "Maktab haqida"}</span>
          </span>
          <h1 className="display" style={{ color: '#fff', marginTop: '14px', marginBottom: '18px' }}>
            {t('about.hero.title') || "Aniq akademik maqsadlarga ega yosh maktab"}
          </h1>
          <p className="lede" style={{ color: '#D4DAFB', maxWidth: '720px' }}>
            {t('about.hero.lede') || "2024-yil sentabr oyida ochilgan UNCO School tabiiy va aniq fanlarni chuqur o'rgatishga ixtisoslashgan."}
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & CANTEEN VIDEO */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'center',
              marginBottom: '64px'
            }}
          >
            <div>
              <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Target size={16} color="var(--blue)" />
                <span>{t('about.story.eyebrow') || "Bizning tariximiz"}</span>
              </span>
              <h2 className="display" style={{ marginTop: '14px', marginBottom: '18px' }}>
                {t('about.story.title') || "Yosh, maqsadli va natijaga intiluvchan"}
              </h2>
              <p style={{ color: 'var(--gray-700)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '16px' }}>
                {t('about.story.body1') || "UNCO School 2024-yil sentabr oyida Farg'ona viloyati Buvayda tumani Ibrat shaharchasida o'z faoliyatini boshladi. Birinchi kundan boshlab maktabning maqsadi aniq: mustahkam umumta'lim, tabiiy va aniq fanlar bo'yicha qo'shimcha soatlar va ixtisoslashtirilgan to'garaklar."}
              </p>
              <p style={{ color: 'var(--gray-700)', fontSize: '1rem', lineHeight: 1.7 }}>
                {t('about.story.body2') || "Maktab belgilangan umumiy ta'lim dasturiga to'liq amal qiladi, ixtisoslashtirilgan o'qitish esa asosiy darslarni almashtirmasdan, qo'shimcha to'garaklar va amaliy mashg'ulotlar orqali amalga oshiriladi."}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: '360px' }}>
                <MediaCard
                  imageSrc="/assets/facilities/canteen_and_meals.jpg"
                  videoSrc="/assets/facilities/canteen_and_meals.mp4"
                  title={t('about.food.title') || "Sifatli va nazoratdagi tushlik"}
                  tag={t('about.food.video.tag') || "Oshxona"}
                  aspect="portrait"
                  onPlay={(src, title) => setActiveVideo({ src, title })}
                />
              </div>
            </div>
          </div>

          {/* 3. FACILITIES LIST */}
          <div style={{ marginTop: '48px', marginBottom: '64px' }}>
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
              <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={16} color="var(--blue)" />
                <span>{t('about.facilities.eyebrow') || "Infratuzilma"}</span>
              </span>
              <h2 className="display" style={{ marginTop: '12px' }}>
                {t('about.facilities.title') || "Zamonaviy va qulay muhit"}
              </h2>
            </div>

            <div className="grid grid-4">
              {facilities.map((fac, idx) => (
                <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div className="icon-badge" style={{ marginBottom: '12px' }}>
                    {fac.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem' }}>{t(fac.titleKey)}</h3>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.92rem', lineHeight: 1.6 }}>{t(fac.bodyKey)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3.5. SCHOOL BAKERY & HEALTHY MEALS PROGRAM (USER PHOTOS) */}
          <div style={{ marginTop: '56px', marginBottom: '64px' }}>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
              <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <UtensilsCrossed size={16} color="var(--blue)" />
                <span>{t('about.food.eyebrow') || "Oshxona va sog'lom ovqatlanish"}</span>
              </span>
              <h2 className="display" style={{ marginTop: '12px', marginBottom: '14px' }}>
                {t('about.food.sectionTitle') || "Maktab novvoyxonasi va sifatli issiq taomlar"}
              </h2>
              <p className="lede">
                {t('about.food.sectionLede') || "Har kuni o'quvchilarimiz uchun maktabning o'zida issiq tandir nonlari yopiladi, to'yimli issiq tushliklar va mevalar taqdim etiladi. Yarim tayyor mahsulotlar va gazli ichimliklar qat'iyan taqiqlangan."}
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
              {/* Photo 1: Tandir Bread */}
              <div
                className="card food-card"
                onClick={() => setActiveImage({
                  src: "/assets/facilities/fresh_baked_bread.png",
                  title: t('about.food.freshBread') || "Yangi yopilgan issiq nonlar",
                  subtitle: t('about.food.freshBreadDesc') || "Har kuni ertalab maktab oshxonasining o'zida mehr bilan yopiladigan tandir nonlari.",
                  badge: t('about.food.freshBreadBadge') || "Har kuni ertalab"
                })}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-l)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#ffffff',
                  border: '1.5px solid rgba(22, 47, 216, 0.12)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 16px 36px -12px rgba(8, 13, 56, 0.08)'
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    aspectRatio: '4 / 3',
                    backgroundColor: '#0A1033',
                    marginBottom: '18px'
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/facilities/fresh_baked_bread.png"
                    alt={t('about.food.freshBread') || "Maktab novvoyxonasi issiq tandir nonlari"}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 25%',
                      transition: 'transform 0.4s ease'
                    }}
                    className="food-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: 'rgba(5, 8, 38, 0.75)',
                      backdropFilter: 'blur(8px)',
                      color: '#fff',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '5px 12px',
                      borderRadius: '999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span>🥐</span>
                    <span>{t('about.food.freshBreadBadge') || "Har kuni ertalab"}</span>
                  </div>

                  <div
                    className="zoom-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(5, 8, 38, 0.4)',
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

                <div style={{ padding: '0 8px 8px' }}>
                  <h3 style={{ fontSize: '1.28rem', marginBottom: '8px', color: 'var(--ink)' }}>
                    {t('about.food.freshBread') || "Yangi yopilgan issiq nonlar"}
                  </h3>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                    {t('about.food.freshBreadDesc') || "Har kuni ertalab maktab oshxonasining o'zida mehr bilan yopiladigan tandir nonlari."}
                  </p>
                </div>
              </div>

              {/* Photo 2: Hot Canteen Pilaf & Lunch */}
              <div
                className="card food-card"
                onClick={() => setActiveImage({
                  src: "/assets/facilities/canteen_hot_lunch_pilaf.png",
                  title: t('about.food.hotLunch') || "Issiq milliy tushlik taomlari",
                  subtitle: t('about.food.hotLunchDesc') || "Faqat tabiiy masalliqlardan tayyorlangan to'yimli va halol issiq osh hamda salatlar.",
                  badge: t('about.food.hotLunchBadge') || "100% Halol va Tabiiy"
                })}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-l)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#ffffff',
                  border: '1.5px solid rgba(22, 47, 216, 0.12)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 16px 36px -12px rgba(8, 13, 56, 0.08)'
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    aspectRatio: '4 / 3',
                    backgroundColor: '#0A1033',
                    marginBottom: '18px'
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/facilities/canteen_hot_lunch_pilaf.png"
                    alt={t('about.food.hotLunch') || "Maktab oshxonasida issiq osh va tushlik"}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    className="food-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: 'rgba(5, 8, 38, 0.75)',
                      backdropFilter: 'blur(8px)',
                      color: '#fff',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '5px 12px',
                      borderRadius: '999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span>🍲</span>
                    <span>{t('about.food.hotLunchBadge') || "100% Halol va Tabiiy"}</span>
                  </div>

                  <div
                    className="zoom-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(5, 8, 38, 0.4)',
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

                <div style={{ padding: '0 8px 8px' }}>
                  <h3 style={{ fontSize: '1.28rem', marginBottom: '8px', color: 'var(--ink)' }}>
                    {t('about.food.hotLunch') || "Issiq milliy tushlik taomlari"}
                  </h3>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                    {t('about.food.hotLunchDesc') || "Faqat tabiiy masalliqlardan tayyorlangan to'yimli va halol issiq osh hamda salatlar."}
                  </p>
                </div>
              </div>
            </div>

            {/* Quality nutrition pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '16px',
                padding: '16px 24px',
                backgroundColor: 'var(--blue-050)',
                borderRadius: 'var(--radius-m)',
                border: '1px solid var(--blue-100)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--blue-900)' }}>
                <CheckCircle2 size={18} color="var(--blue)" />
                <span>{t('about.food.nutrition1') || "Kunlik yangi tandir noni"}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--blue-900)' }}>
                <CheckCircle2 size={18} color="var(--blue)" />
                <span>{t('about.food.nutrition2') || "Kuniga 1 mahal issiq tushlik"}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--blue-900)' }}>
                <CheckCircle2 size={18} color="var(--blue)" />
                <span>{t('about.food.nutrition3') || "Gazli ichimliklar va fastfudsiz"}</span>
              </div>
            </div>
          </div>

          {/* 4. LOCATION & CAMPUS TRANSPORT */}
          <div
            style={{
              padding: 'clamp(32px, 5vw, 56px)',
              borderRadius: 'var(--radius-l)',
              backgroundColor: 'var(--blue-050)',
              border: '1px solid var(--blue-100)',
              marginBottom: '64px'
            }}
          >
            <div style={{ maxWidth: '680px', marginBottom: '32px' }}>
              <span className="eyebrow">{t('about.location.eyebrow') || "Joylashuv"}</span>
              <h2 className="display" style={{ marginTop: '10px', marginBottom: '12px' }}>
                {t('about.location.title') || "Ibrat shaharchasi, Buvayda tumani"}
              </h2>
              <p className="lede">
                {t('about.location.lede') || "Obod Yurt ko'chasi, 870-uy — o'quvchilar uchun maktab avtobuslari qatnovi yo'lga qo'yilgan."}
              </p>
            </div>

            <div className="grid grid-3">
              <div className="card" style={{ background: '#fff' }}>
                <div className="icon-badge" style={{ marginBottom: '12px' }}>
                  <MapPin size={22} />
                </div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '8px' }}>
                  {t('about.location.address.title') || "Manzil"}
                </h4>
                <p style={{ color: 'var(--gray-700)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {t('about.location.address.body') || "Obod Yurt ko'chasi, 870-uy, Ibrat shaharchasi, Buvayda tumani."}
                </p>
              </div>

              <div className="card" style={{ background: '#fff' }}>
                <div className="icon-badge" style={{ marginBottom: '12px' }}>
                  <Bus size={22} />
                </div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '8px' }}>
                  {t('about.location.transport.title') || "Transport"}
                </h4>
                <p style={{ color: 'var(--gray-700)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {t('about.location.transport.body') || "O'quvchilar xavfsiz qatnovi uchun 2 ta zamonaviy Isuzu avtobusi xizmat ko'rsatadi."}
                </p>
              </div>

              <div className="card" style={{ background: '#fff' }}>
                <div className="icon-badge" style={{ marginBottom: '12px' }}>
                  <ShieldCheck size={22} />
                </div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '8px' }}>
                  {t('about.location.safety.title') || "Xavfsizlik"}
                </h4>
                <p style={{ color: 'var(--gray-700)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {t('about.location.safety.body') || "Maktab hududiga kirish nazorati va professional xavfsizlik choralari doimiy ustuvorlikdir."}
                </p>
              </div>
            </div>
          </div>

          {/* 5. BOTTOM CTA */}
          <div
            style={{
              textAlign: 'center',
              padding: 'clamp(36px, 6vw, 64px)',
              borderRadius: 'var(--radius-l)',
              background: 'linear-gradient(145deg, var(--blue-900) 0%, var(--blue) 100%)',
              color: '#ffffff',
              boxShadow: '0 30px 60px -20px rgba(22, 47, 216, 0.4)'
            }}
          >
            <span className="eyebrow" style={{ color: '#A3B5FF' }}>
              {t('about.cta.eyebrow') || "O'z ko'zingiz bilan ko'rishni xohlaysizmi?"}
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff', marginTop: '12px', marginBottom: '24px' }}>
              {t('about.cta.title') || "Yo'nalishlar bilan tanishing yoki tashrif buyuring"}
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link
                href="/academics"
                className="btn btn-ghost-light"
                style={{ padding: '14px 28px', fontSize: '1rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>{t('about.cta.btn1') || "Ta'lim dasturi"}</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline"
                style={{ padding: '14px 28px', fontSize: '1rem', fontWeight: 700, color: '#fff', borderColor: 'rgba(255, 255, 255, 0.4)' }}
              >
                <span>{t('about.cta.btn2') || "Bog'lanish"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        src={activeVideo?.src || null}
        title={activeVideo?.title}
        onClose={() => setActiveVideo(null)}
      />

      <ImageModal
        src={activeImage?.src || null}
        title={activeImage?.title}
        subtitle={activeImage?.subtitle}
        badge={activeImage?.badge}
        onClose={() => setActiveImage(null)}
      />

      <style jsx>{`
        .food-card:hover {
          transform: translateY(-5px);
          border-color: rgba(22, 47, 216, 0.35) !important;
          box-shadow: 0 24px 48px -15px rgba(22, 47, 216, 0.2) !important;
        }
        .food-card:hover .food-img {
          transform: scale(1.05);
        }
        .food-card:hover .zoom-overlay {
          opacity: 1 !important;
        }
        .food-card:hover .zoom-circle {
          transform: scale(1) !important;
        }
      `}</style>
    </>
  );
}
