"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  Calculator, 
  FlaskConical, 
  Globe, 
  BookOpen, 
  GraduationCap, 
  UserCheck, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { TEACHERS_LIST } from '@/data/schoolData';
import { useTranslation } from '@/context/LanguageContext';

export default function TeachersPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'exact' | 'natural' | 'humanities' | 'languages'>('all');

  const filteredTeachers = filter === 'all'
    ? TEACHERS_LIST
    : TEACHERS_LIST.filter((teacher) => teacher.category === filter);

  const tabs = [
    { id: 'all', label: t('nav.teachers') || 'Barcha ustozlar', icon: <Users size={16} /> },
    { id: 'exact', label: t('card.exactSciences.title') || 'Aniq fanlar', icon: <Calculator size={16} /> },
    { id: 'natural', label: t('card.naturalSciences.title') || 'Tabiiy fanlar', icon: <FlaskConical size={16} /> },
    { id: 'languages', label: t('subject.english') || 'Tillar', icon: <Globe size={16} /> },
    { id: 'humanities', label: t('card.socialSciences.title') || 'Ijtimoiy fanlar', icon: <BookOpen size={16} /> }
  ];

  return (
    <>
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
            <span>{t('nav.teachers') || "O'qituvchilar"}</span>
          </div>
          <span className="eyebrow" style={{ color: '#A3B5FF', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <GraduationCap size={16} />
            <span>{t('teachers.hero.eyebrow') || "Pedagogik jamoa"}</span>
          </span>
          <h1 className="display" style={{ color: '#fff', marginTop: '14px', marginBottom: '18px' }}>
            {t('teachers.hero.title') || "22 nafar malakali ustoz, yagona maqsad"}
          </h1>
          <p className="lede" style={{ color: '#D4DAFB', maxWidth: '720px' }}>
            {t('teachers.hero.lede') || "O'quvchilarimizga bilim va ko'nikmalarni chuqur o'rgatuvchi, zamonaviy o'qitish metodikalariga ega o'qituvchilar jamoasi."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '40px',
              justifyContent: 'center'
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: filter === tab.id ? 'var(--blue)' : 'var(--white)',
                  color: filter === tab.id ? '#ffffff' : 'var(--ink-soft)',
                  border: filter === tab.id ? '1.5px solid var(--blue)' : '1.5px solid var(--gray-300)',
                  transition: 'all 0.2s ease',
                  boxShadow: filter === tab.id ? '0 8px 20px -6px rgba(22, 47, 216, 0.5)' : 'none'
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Teacher Cards Grid */}
          <div className="grid grid-4">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="card"
                style={{
                  padding: '28px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                {/* Avatar Silhouette */}
                <div
                  style={{
                    width: '86px',
                    height: '86px',
                    borderRadius: '50%',
                    background: 'linear-gradient(145deg, var(--blue-050) 0%, rgba(22, 47, 216, 0.12) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue)',
                    marginBottom: '16px',
                    border: '2px solid rgba(22, 47, 216, 0.18)',
                    boxShadow: '0 8px 20px rgba(22, 47, 216, 0.08)'
                  }}
                >
                  <UserCheck size={38} strokeWidth={1.8} />
                </div>

                <h3 style={{ fontSize: '1.12rem', color: 'var(--ink)', marginBottom: '6px' }}>
                  {teacher.name}
                </h3>
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--blue)',
                    backgroundColor: 'var(--blue-050)',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    marginBottom: '12px'
                  }}
                >
                  {t(teacher.subjectKey) || teacher.subjectKey}
                </span>

                <p style={{ fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: 1.5 }}>
                  {t('teacher.bioPlaceholder') || "O'quvchilar bilan individual ishlash, olimpiadalarga tayyorlash va fan asoslarini mustahkam o'rgatish bo'yicha tajribali mutaxassis."}
                </p>
              </div>
            ))}
          </div>

          {/* Join our team notice */}
          <div
            style={{
              marginTop: '64px',
              padding: '36px',
              borderRadius: 'var(--radius-l)',
              background: 'var(--blue-050)',
              border: '1px solid var(--blue-100)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            <div>
              <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={15} color="var(--blue)" />
                <span>{t('teachers.cta.eyebrow') || "Bizning jamoaga qo'shiling"}</span>
              </span>
              <h3 style={{ fontSize: '1.3rem', marginTop: '6px', marginBottom: '8px' }}>
                {t('teachers.cta.title') || "Siz tajribali va shijoatli pedagogmisiz?"}
              </h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem' }}>
                {t('teachers.cta.lede') || "UNCO School doim o'z kasbiga sadoqatli, zamonaviy fikrlovchi ustozlarni jamoaga qabul qilishdan mamnun."}
              </p>
            </div>
            <Link 
              href="/contact" 
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>{t('teachers.cta.btn') || "Ma'muriyat bilan bog'lanish"}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
