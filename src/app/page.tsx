"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  GraduationCap, 
  Calendar, 
  Award, 
  Atom, 
  Calculator, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  FileText,
  Monitor,
  Presentation,
  FlaskConical,
  Puzzle,
  Bus,
  Activity,
  Coffee,
  Wind,
  ShieldCheck,
  Play,
  MapPin,
  Phone
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { SCHOOL_DATA, TEACHERS_LIST } from '@/data/schoolData';
import { ACADEMIC_VIDEOS, STUDENT_LIFE_GAMES, TESTIMONIALS } from '@/data/mediaData';
import { StatCard } from '@/components/StatCard';
import { MediaCard } from '@/components/MediaCard';
import { VideoModal } from '@/components/VideoModal';
import { ApplicationModal } from '@/components/ApplicationModal';

export default function Home() {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(175deg, #050826 0%, #080D38 65%, #0B1245 100%)',
          color: '#ffffff',
          paddingTop: 'clamp(120px, 14vw, 170px)',
          paddingBottom: 'clamp(64px, 9vw, 120px)',
          overflow: 'hidden'
        }}
      >
        {/* Glow ambient background */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '60vw',
            height: '60vw',
            maxWidth: '800px',
            maxHeight: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(22, 47, 216, 0.35) 0%, rgba(22, 47, 216, 0) 70%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(40px, 6vw, 72px)',
              alignItems: 'center'
            }}
          >
            {/* Hero Left Copy */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  color: '#A3B5FF',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: '20px'
                }}
              >
                <Sparkles size={14} color="#A3B5FF" />
                <span>{t('home.hero.eyebrow') || "Ibrat shahri · Buvayda tumani"}</span>
              </div>

              <h1
                className="display"
                style={{
                  color: '#ffffff',
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                  lineHeight: 1.08,
                  marginBottom: '22px',
                  letterSpacing: '-0.02em'
                }}
              >
                {t('home.hero.title') || 'UNCO SCHOOL'}
              </h1>

              <p
                className="lede"
                style={{
                  color: '#D4DAFB',
                  marginBottom: '32px',
                  maxWidth: '540px'
                }}
              >
                {t('home.hero.lede') || 'Tabiiy va aniq fanlarni chuqurlashtirilgan holda o\'qitishga ixtisoslashgan xususiy maktab — zamonaviy sinfxonalar, kuchli pedagoglar va har bir o\'quvchiga individual yondashuv.'}
              </p>

              {/* CTAs */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '14px',
                  marginBottom: '40px'
                }}
              >
                <button
                  type="button"
                  onClick={() => setApplyModalOpen(true)}
                  className="btn btn-primary"
                  style={{ padding: '14px 26px', fontSize: '0.98rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <Sparkles size={16} />
                  <span>{t('header.admissionsBtn') || 'Qabul 2025'}</span>
                </button>
                <Link
                  href="/about"
                  className="btn btn-ghost-light"
                  style={{ padding: '14px 24px', fontSize: '0.98rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>{t('home.hero.cta1') || 'Maktab haqida'}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Key Quick Facts */}
              <div
                style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 36px)',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.14)'
                }}
              >
                <div>
                  <strong style={{ display: 'block', fontSize: '1.6rem', color: '#fff', fontWeight: 800 }}>193+</strong>
                  <span style={{ fontSize: '0.82rem', color: '#B0BCEB' }}>{t('stat.students.label') || "O'quvchilar"}</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.6rem', color: '#fff', fontWeight: 800 }}>22</strong>
                  <span style={{ fontSize: '0.82rem', color: '#B0BCEB' }}>{t('stat.teachers.label') || "Pedagoglar"}</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.6rem', color: '#fff', fontWeight: 800 }}>5–11</strong>
                  <span style={{ fontSize: '0.82rem', color: '#B0BCEB' }}>{t('stat.grades.label') || "Sinflar"}</span>
                </div>
              </div>
            </div>

            {/* Media showcase */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: '340px' }}>
                <MediaCard
                  imageSrc="/assets/hero/school_introduction.jpg"
                  videoSrc="/assets/hero/school_introduction.mp4"
                  title={t('home.hero.caption') || "UNCO School ichkarisida"}
                  tag="Video tanishuv"
                  aspect="portrait"
                  onPlay={(src, title) => setActiveVideo({ src, title })}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT INTRODUCTION */}
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
            <div>
              <span className="eyebrow">{t('home.intro.eyebrow') || "Maktab haqida"}</span>
              <h2 className="display" style={{ marginTop: '14px' }}>
                {t('home.intro.title') || "Aniq akademik maqsadlarga ega yosh va shijoatli maktab"}
              </h2>
            </div>
            <div>
              <p className="lede">
                {t('home.intro.body') || "UNCO School 2024-yil sentabridan buyon 5–11 sinf o'quvchilariga tabiiy va aniq fanlarni chuqur o'rgatib kelmoqda. Standart davlat ta'lim dasturidan tashqari, qo'shimcha soatlar va ixtisoslashtirilgan to'garaklar tashkil etilgan."}
              </p>
              <Link href="/about" className="text-link" style={{ marginTop: '20px' }}>
                <span>{t('home.intro.link') || "Batafsil ma'lumot"}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY STAT CARDS */}
      <section className="section-tight" style={{ backgroundColor: 'var(--blue-050)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px'
            }}
          >
            <StatCard
              icon={<Users size={24} strokeWidth={2.2} />}
              value="193"
              label={t('stat.students.label') || "Ta'lim olayotgan o'quvchilar"}
            />
            <StatCard
              icon={<Award size={24} strokeWidth={2.2} />}
              value="22"
              label={t('stat.teachers.label') || "Yuqori malakali o'qituvchilar"}
            />
            <StatCard
              icon={<Calendar size={24} strokeWidth={2.2} />}
              value="5–11"
              label={t('stat.grades.label') || "O'qitiladigan sinflar"}
            />
            <StatCard
              icon={<GraduationCap size={24} strokeWidth={2.2} />}
              value="5 / 6"
              label={t('stat.gradRate.label') || "2025 bitiruvchilari OTM talabasi"}
            />
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC FOCUS (3 TRACKS) */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '44px' }}>
            <div>
              <span className="eyebrow">{t('home.academic.eyebrow') || "Akademik yo'nalish"}</span>
              <h2 className="display" style={{ marginTop: '12px' }}>
                {t('home.academic.title') || "Fanlar chuqurligi, keng qamrovli sinfxonalar"}
              </h2>
            </div>
            <Link href="/academics" className="text-link">
              <span>{t('home.academic.link') || "Barcha yo'nalishlar"}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <div className="icon-badge" style={{ marginBottom: '18px' }}>
                <Atom size={24} strokeWidth={2.2} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>{t('card.naturalSciences.title') || "Tabiiy fanlar"}</h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem' }}>
                {t('card.naturalSciences.body') || "Biologiya, kimyo va amaliy laboratoriya darslari orqali tabiat qonuniyatlarini chuqur o'rganish."}
              </p>
            </div>

            <div className="card">
              <div className="icon-badge" style={{ marginBottom: '18px' }}>
                <Calculator size={24} strokeWidth={2.2} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>{t('card.exactSciences.title') || "Aniq fanlar"}</h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem' }}>
                {t('card.exactSciences.body') || "Matematika, fizika va informatika fanlari bo'yicha mustahkam nazariy va amaliy bilimlar."}
              </p>
            </div>

            <div className="card">
              <div className="icon-badge" style={{ marginBottom: '18px' }}>
                <BookOpen size={24} strokeWidth={2.2} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>{t('card.socialSciences.title') || "Ijtimoiy fanlar"}</h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem' }}>
                {t('card.socialSciences.body') || "Tarix, huquq, tillar va adabiyot darslari o'quvchilar dunyoqarashini kengaytirishga xizmat qiladi."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLASSROOM MEDIA SHOWCASE */}
      <section className="section-dark section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="eyebrow" style={{ color: '#9BB0FF' }}>
                {t('home.visual.eyebrow') || "Dars jarayonlari"}
              </span>
              <h2 className="display" style={{ color: '#fff', marginTop: '14px', marginBottom: '16px' }}>
                {t('home.visual.title') || "Fanni jonli muloqotga aylantiruvchi ustozlar"}
              </h2>
              <p className="lede" style={{ color: '#D4DAFB', marginBottom: '24px' }}>
                {t('home.visual.lede') || "Sinfxonalarda shunchaki yodlash emas, balki chuqur qiziqish va izlanish uyg'otuvchi interaktiv darslar tashkil etilgan."}
              </p>
              <Link href="/academics" className="text-link">
                <span>{t('home.visual.link') || "Barcha dars videolarini ko'rish"}</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: '320px' }}>
                <MediaCard
                  imageSrc="/assets/academics/teacher_exploring_interesting_question.jpg"
                  videoSrc="/assets/academics/teacher_exploring_interesting_question.mp4"
                  title="Dars jarayonida qiziqarli savol-javob"
                  tag="O'qituvchilar darsi"
                  aspect="portrait"
                  onPlay={(src, title) => setActiveVideo({ src, title })}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEARNING BEYOND THE CLASSROOM (4 CARDS) */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 44px' }}>
            <span className="eyebrow">{t('home.beyond.eyebrow') || "Darslikdan tashqari"}</span>
            <h2 className="display" style={{ marginTop: '12px' }}>
              {t('home.beyond.title') || "Sinfxonadan tashqarida ham ta'lim"}
            </h2>
          </div>

          <div className="grid grid-4">
            <div className="card">
              <div className="icon-badge" style={{ marginBottom: '16px' }}>
                <Puzzle size={22} strokeWidth={2.2} />
              </div>
              <h3 style={{ fontSize: '1.12rem', marginBottom: '8px' }}>
                {t('card.clubs.title') || "Ixtisoslashgan to'garaklar"}
              </h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.9rem' }}>
                {t('card.clubs.body') || "Har bir o'quvchining qiziqishi va yo'nalishiga mos qo'shimcha soatlar va darsdan tashqari mashg'ulotlar."}
              </p>
            </div>

            <div className="card">
              <div className="icon-badge" style={{ marginBottom: '16px' }}>
                <FlaskConical size={22} strokeWidth={2.2} />
              </div>
              <h3 style={{ fontSize: '1.12rem', marginBottom: '8px' }}>
                {t('card.virtualLabs.title') || "Virtual laboratoriyalar"}
              </h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.9rem' }}>
                {t('card.virtualLabs.body') || "Murakkab tajribalarni xavfsiz va aniq sinab ko'rish imkonini beruvchi virtual laboratoriya mashqlari."}
              </p>
            </div>

            <div className="card">
              <div className="icon-badge" style={{ marginBottom: '16px' }}>
                <Monitor size={22} strokeWidth={2.2} />
              </div>
              <h3 style={{ fontSize: '1.12rem', marginBottom: '8px' }}>
                {t('card.computers.title') || "Zamonaviy kompyuterlar"}
              </h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.9rem' }}>
                {t('card.computers.body') || "Internetga ulangan qulay kompyuter xonalari o'quvchilar tadqiqoti va amaliy mashg'ulotlari uchun xizmat qiladi."}
              </p>
            </div>

            <div className="card">
              <div className="icon-badge" style={{ marginBottom: '16px' }}>
                <Presentation size={22} strokeWidth={2.2} />
              </div>
              <h3 style={{ fontSize: '1.12rem', marginBottom: '8px' }}>
                {t('card.boards.title') || "Interaktiv doskalar"}
              </h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.9rem' }}>
                {t('card.boards.body') || "Darslarni interaktiv va ko'rgazmali qilish uchun barcha sinflarda elektron doskalardan foydalaniladi."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BIG ACHIEVEMENTS BANNER (5/6 HIGHER EDUCATION) */}
      <section className="section-tight" style={{ paddingTop: 0 }}>
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
                <span>{t('home.achieve.eyebrow') || "2025 · Ilk bitiruvchilar"}</span>
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#fff', marginTop: '8px', marginBottom: '16px' }}>
                UNCO School bitiruvchilarining OTM natijalari
              </h2>
              <p style={{ color: '#D4DAFB', fontSize: '1.02rem', lineHeight: 1.65, marginBottom: '24px' }}>
                {t('home.achieve.body') || "2025-yilda UNCO School o'zining ilk bitiruvchilarini chiqardi. 6 nafar o'quvchidan 5 nafari nufuzli OTMlarga talabalikka qabul qilindi."}
              </p>
              <Link href="/achievements" className="btn btn-ghost-light" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>{t('home.achieve.link') || "Barcha yutuqlarni ko'rish"}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 9vw, 6.5rem)', color: '#fff', fontWeight: 800, lineHeight: 1 }}>
                5 <span style={{ color: '#8FA0FF' }}>/</span> 6
              </div>
              <div style={{ fontSize: '1rem', color: '#B0BCEB', fontWeight: 600, marginTop: '8px' }}>
                {t('home.achieve.lede') || "bitiruvchilar oliygohlarga qabul qilindi"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. STUDENT LIFE MOMENTS PREVIEW */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
              <span className="eyebrow">{t('home.studentlife.eyebrow') || "O'quvchilar hayoti"}</span>
              <h2 className="display" style={{ marginTop: '12px' }}>
                {t('home.studentlife.title') || "UNCO hayoti, haqiqiy lahzalarda"}
              </h2>
            </div>
            <Link href="/student-life" className="text-link">
              <span>{t('home.studentlife.link') || "Barcha lahzalarni ko'rish"}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px'
            }}
          >
            {STUDENT_LIFE_GAMES.map((item) => (
              <div key={item.id}>
                <MediaCard
                  imageSrc={item.poster}
                  videoSrc={item.src}
                  title={t(item.titleKey)}
                  tag={t(item.tagKey)}
                  aspect="portrait"
                  onPlay={(src, title) => setActiveVideo({ src, title })}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CAMPUS & FACILITIES LIST (4 ROWS) */}
      <section className="section section-tint">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="eyebrow">{t('home.facilities.eyebrow') || "Maktab sharoitlari"}</span>
              <h2 className="display" style={{ marginTop: '12px', marginBottom: '16px' }}>
                {t('home.facilities.title') || "Shinam va xavfsiz maktab binosi"}
              </h2>
              <p className="lede">
                {t('home.facilities.lede') || "Barcha sinfxonalar yil davomida qulay haroratda saqlanadi, o'quvchilar xavfsizligi va qulayligi esa biz uchun eng ustuvor vazifadir."}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="card" style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <div className="icon-badge">
                  <Wind size={22} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>
                    {t('facility.climate.title') || "Zamonaviy bino va iqlim nazorati"}
                  </h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.9rem', margin: 0 }}>
                    {t('facility.climate.body') || "Zamonaviy isitish va sovutish tizimlari tufayli sinfxonalarda o'quv yili davomida ideal harorat ta'minlanadi."}
                  </p>
                </div>
              </div>

              <div className="card" style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <div className="icon-badge">
                  <Activity size={22} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>
                    {t('facility.sports.title') || "Sport maydoni va faol dam olish"}
                  </h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.9rem', margin: 0 }}>
                    {t('facility.sports.body') || "Ochiq voleybol va sport maydonchalari o'quvchilarning jismoniy salomatligini mustahkamlashga xizmat qiladi."}
                  </p>
                </div>
              </div>

              <div className="card" style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <div className="icon-badge">
                  <Bus size={22} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>
                    {t('facility.transport.title') || "O'quvchilar transporti"}
                  </h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.9rem', margin: 0 }}>
                    {t('facility.transport.body') || "2 ta Isuzu avtobusi o'quvchilarni xavfsiz va o'z vaqtida maktabga keltirish hamda olib ketishni ta'minlaydi."}
                  </p>
                </div>
              </div>

              <div className="card" style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <div className="icon-badge">
                  <Coffee size={22} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>
                    {t('facility.meals.title') || "Kunlik sifatli tushlik"}
                  </h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.9rem', margin: 0 }}>
                    {t('facility.meals.body') || "Maktab oshxonasida gazli ichimliklar va yarim tayyor mahsulotlarsiz, faqat sifatli va yangi taomlar tayyorlanadi."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PARENT TESTIMONIALS (3 INTERACTIVE VIDEOS) */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <span className="eyebrow">{t('home.testimonials.eyebrow') || "Ota-onalar fikri"}</span>
            <h2 className="display" style={{ marginTop: '12px', marginBottom: '14px' }}>
              {t('home.testimonials.title') || "Oilalar UNCO haqida nima deyishadi"}
            </h2>
            <p className="lede" style={{ maxWidth: '680px' }}>
              {t('home.testimonials.lede') || "UNCO ota-onalari bilan ochiq suhbatlar — shunchaki matn emas, ularning samimiy so'zlarini videoda tomosha qiling."}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}
          >
            {TESTIMONIALS.map((item) => (
              <div key={item.id}>
                <MediaCard
                  imageSrc={item.poster}
                  videoSrc={item.src}
                  title={t(item.noteKey) || t(item.labelKey)}
                  tag={t(item.labelKey)}
                  aspect="portrait"
                  onPlay={(src, title) => setActiveVideo({ src, title })}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TEACHERS PREVIEW (FIRST 4 TEACHERS) */}
      <section className="section section-tint">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
              <span className="eyebrow">{t('home.teachers.eyebrow') || "Pedagogik jamoa"}</span>
              <h2 className="display" style={{ marginTop: '12px' }}>
                {t('home.teachers.title') || "Ustozlar jamoasi bilan tanishing"}
              </h2>
            </div>
            <Link href="/teachers" className="text-link">
              <span>{t('home.teachers.link') || "Barcha o'qituvchilar"}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-4">
            {TEACHERS_LIST.slice(0, 4).map((teacher) => (
              <div
                key={teacher.id}
                className="card"
                style={{
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(145deg, var(--blue-050) 0%, rgba(22, 47, 216, 0.12) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue)',
                    marginBottom: '14px',
                    border: '2px solid rgba(22, 47, 216, 0.18)'
                  }}
                >
                  <Users size={34} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>{teacher.name}</h3>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--blue)',
                    backgroundColor: 'var(--blue-050)',
                    padding: '4px 10px',
                    borderRadius: '999px'
                  }}
                >
                  {t(teacher.subjectKey) || teacher.subjectKey}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL ADMISSIONS & TUITION CTA BANNER */}
      <section className="section">
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(145deg, var(--blue-900) 0%, var(--blue) 100%)',
              color: '#ffffff',
              borderRadius: 'var(--radius-l)',
              padding: 'clamp(36px, 6vw, 64px)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '24px',
              boxShadow: '0 30px 60px -20px rgba(22, 47, 216, 0.45)'
            }}
          >
            <div style={{ maxWidth: '560px' }}>
              <span className="eyebrow" style={{ color: '#A3B5FF', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={15} />
                <span>{t('home.cta.eyebrow') || "Qabul va Shartnoma"}</span>
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff', marginTop: '8px', marginBottom: '12px' }}>
                {t('home.cta.title') || "Oylik ta'lim to'lovi: 600 000 dan 1 700 000 so'mgacha"}
              </h2>
              <p style={{ color: '#D4DAFB', fontSize: '1rem', lineHeight: 1.6 }}>
                {t('home.cta.lede') || "Boquvchisini yo'qotgan bolalar uchun imtiyozli ta'lim beriladi. Shuningdek, a'lochi o'quvchilarga 100 000 dan 500 000 so'mgacha oylik stipendiyalar taqdim etiladi."}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setApplyModalOpen(true)}
                className="btn btn-ghost-light"
                style={{ padding: '16px 28px', fontSize: '1.02rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>{t('home.cta.btn1') || "Onlayn ariza topshirish"}</span>
                <ArrowRight size={18} />
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

      {/* Online Application Modal */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
      />
    </>
  );
}
