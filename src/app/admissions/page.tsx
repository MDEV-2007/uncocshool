"use client";

import React from 'react';
import Link from 'next/link';
import {
  FileEdit,
  UserCheck,
  GraduationCap,
  CreditCard,
  Award,
  Sparkles,
  Lightbulb,
  Trophy
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

export default function AdmissionsPage() {
  const { t } = useTranslation();

  const steps = [
    {
      num: "01",
      icon: <FileEdit size={24} strokeWidth={2.2} />,
      title: t('admissions.step1.title') || "Bog'lanish va ariza",
      desc: t('admissions.step1.body') || "Maktab ofisiga tashrif buyurib yoki sayt orqali ariza qoldirib suhbatni boshlang."
    },
    {
      num: "02",
      icon: <UserCheck size={24} strokeWidth={2.2} />,
      title: t('admissions.step2.title') || "Sinf va to'lovni aniqlash",
      desc: t('admissions.step2.body') || "Kanselyariya sinf darajasi va tegishli to'lov toifasini tasdiqlaydi."
    },
    {
      num: "03",
      icon: <GraduationCap size={24} strokeWidth={2.2} />,
      title: t('admissions.step3.title') || "Maktabga tashrif va shartnoma",
      desc: t('admissions.step3.body') || "Ota-onalar va o'quvchilar sinflar va sharoitlarni bevosita o'zlari ko'rishlari mumkin."
    }
  ];

  return (
    <>
      {/* 1. HERO */}
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
            <span>{t('nav.admissions') || 'Qabul'}</span>
          </div>
          <span className="eyebrow" style={{ color: '#A3B5FF', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={16} />
            <span>{t('admissions.hero.eyebrow') || "Qabul va to'lov"}</span>
          </span>
          <h1 className="display" style={{ color: '#fff', marginTop: '14px', marginBottom: '18px' }}>
            {t('admissions.hero.title') || "UNCO Schoolga qabul"}
          </h1>
          <p className="lede" style={{ color: '#D4DAFB', maxWidth: '720px' }}>
            {t('admissions.hero.lede') || "5–11-sinflarga qabul bevosita maktab kansellyariyasi orqali, shaxsan yoki telefon orqali amalga oshiriladi — onlayn ariza tizimi mavjud emas."}
          </p>
        </div>
      </section>

      {/* 2. THREE KEY CARDS */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ marginBottom: '64px' }}>
            <div className="card">
              <div className="icon-badge" style={{ marginBottom: '18px' }}>
                <GraduationCap size={24} strokeWidth={2.2} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>{t('admissions.card1.title') || "5–11-sinflar"}</h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                {t('admissions.card1.body') || "UNCO School hozirda 5-sinfdan 11-sinfgacha o'quvchilarni qabul qilmoqda."}
              </p>
            </div>

            <div className="card">
              <div className="icon-badge" style={{ marginBottom: '18px' }}>
                <UserCheck size={24} strokeWidth={2.2} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>{t('admissions.card2.title') || "Shaxsan yoki telefon orqali"}</h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                {t('admissions.card2.body') || "Qabul bo'yicha savollar bevosita maktab kansellyariyasi bilan hal qilinadi — bu anketa emas, suhbat."}
              </p>
            </div>

            <div className="card">
              <div className="icon-badge" style={{ marginBottom: '18px' }}>
                <Award size={24} strokeWidth={2.2} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>{t('admissions.card3.title') || "Moliyaviy yordam mavjud"}</h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                {t('admissions.card3.body') || "Kamaytirilgan to'lov va yutuqlar uchun stipendiyalar narxning yagona hal qiluvchi omil bo'lmasligini anglatadi."}
              </p>
            </div>
          </div>

          {/* Steps */}
          <div style={{ marginBottom: '64px' }}>
            <span className="eyebrow">{t('admissions.apply.eyebrow') || "Qabul jarayoni"}</span>
            <h2 className="display" style={{ marginTop: '12px', marginBottom: '14px' }}>
              {t('admissions.apply.title') || "Oddiy va tushunarli jarayon"}
            </h2>
            <p className="lede" style={{ maxWidth: '680px', marginBottom: '32px' }}>
              {t('admissions.apply.body') || "Oila a'zolari maktab ofisiga tashrif buyurib yoki telefon orqali bog'lanib barcha tafsilotlarni kelishib olishlari mumkin."}
            </p>

            <div className="grid grid-3">
              {steps.map((step, idx) => (
                <div key={idx} className="card" style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div className="icon-badge">
                      {step.icon}
                    </div>
                    <span
                      style={{
                        fontSize: '1.8rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        color: 'var(--blue)',
                        opacity: 0.35
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{step.title}</h3>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tuition & Scholarships */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              alignItems: 'start',
              marginBottom: '64px'
            }}
          >
            <div className="card" style={{ padding: '36px' }}>
              <div className="icon-badge" style={{ marginBottom: '16px' }}>
                <CreditCard size={24} strokeWidth={2.2} />
              </div>
              <span className="eyebrow">{t('admissions.tuition.eyebrow') || "O'quv to'lovi"}</span>
              <h3 style={{ fontSize: '1.5rem', marginTop: '6px', marginBottom: '16px' }}>
                {t('admissions.tuition.title') || "O'qish qanchaga tushadi"}
              </h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '14px' }}>
                <strong style={{ fontSize: '2.4rem', color: 'var(--blue)', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                  600 000 – 1 700 000
                </strong>
                <span style={{ fontSize: '1rem', color: 'var(--gray-700)', fontWeight: 600 }}>UZS / oy</span>
              </div>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {t('admissions.tuition.lede') || "To'lov yagona qat'iy summa emas, balki toifa va sharoitlarga qarab farqlanadi."}
              </p>
              <div
                style={{
                  background: 'var(--blue-050)',
                  border: '1px solid var(--blue-100)',
                  padding: '16px',
                  borderRadius: 'var(--radius-s)',
                  fontSize: '0.88rem',
                  color: 'var(--ink-soft)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}
              >
                <Lightbulb size={18} color="var(--blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>{t('td.hardship') || "Imtiyoz"}:</strong> {t('td.hardshipNote') || "Boquvchisini yo'qotgan bolalar uchun to'lovning pastki qismi amal qiladi."}</span>
              </div>
            </div>

            <div className="card" style={{ padding: '36px', background: 'linear-gradient(150deg, #FFFFFF 55%, var(--blue-050) 145%)' }}>
              <div className="icon-badge icon-badge-gold" style={{ marginBottom: '16px' }}>
                <Trophy size={24} strokeWidth={2.2} />
              </div>
              <span className="eyebrow" style={{ color: '#D97706' }}>{t('td.scholarship') || "Grantlar"}</span>
              <h3 style={{ fontSize: '1.5rem', marginTop: '6px', marginBottom: '16px' }}>
                {t('achievements.scholarships.title') || "Natijalarni e'tirof etish"}
              </h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '14px' }}>
                <strong style={{ fontSize: '2.4rem', color: '#D97706', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                  100 000 – 500 000
                </strong>
                <span style={{ fontSize: '1rem', color: 'var(--gray-700)', fontWeight: 600 }}>UZS / oy</span>
              </div>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {t('achievements.scholarships.card1.body') || "Aktiv va a'lochi o'quvchilar uchun oylik monitoring natijalariga asoslangan rag'batlantirish stipendiyalari."}
              </p>
              <div
                style={{
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  padding: '16px',
                  borderRadius: 'var(--radius-s)',
                  fontSize: '0.88rem',
                  color: '#92400E',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}
              >
                <Award size={18} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{t('admissions.tuition.note') || "Farzandingiz uchun aniq to'lov miqdorini bilish uchun maktab kanselyariyasiga murojaat qiling."}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
