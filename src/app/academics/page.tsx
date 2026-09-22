"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator,
  Microscope,
  BookOpen,
  GraduationCap,
  Monitor,
  Presentation,
  FlaskConical
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { ACADEMIC_VIDEOS } from '@/data/mediaData';
import { MediaCard } from '@/components/MediaCard';
import { VideoModal } from '@/components/VideoModal';

export default function AcademicsPage() {
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
            <span>{t('nav.academics') || 'Ta\'lim'}</span>
          </div>
          <span className="eyebrow" style={{ color: '#A3B5FF', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <GraduationCap size={16} />
            <span>{t('academics.hero.eyebrow') || "Akademik yo'nalishlar"}</span>
          </span>
          <h1 className="display" style={{ color: '#fff', marginTop: '14px', marginBottom: '18px' }}>
            {t('academics.hero.title') || "Fanlar chuqurligi, keng qamrovli sinfxonalar"}
          </h1>
          <p className="lede" style={{ color: '#D4DAFB', maxWidth: '720px' }}>
            {t('academics.hero.lede') || "5–11 sinflar umumiy davlat ta'lim standartlarini to'liq o'zlashtiradi, shuningdek tabiiy, aniq va ijtimoiy fanlar bo'yicha qo'shimcha darslar hamda ixtisoslashtirilgan to'garaklar tashkil etilgan."}
          </p>
        </div>
      </section>

      {/* 2. THREE CORE TRACKS */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="card">
              <div className="icon-badge" style={{ marginBottom: '18px' }}>
                <Microscope size={24} strokeWidth={2.2} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>
                {t('academics.natural.title') || "Tabiiy fanlar"}
              </h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                {t('academics.natural.body') || "Biologiya, kimyo va virtual laboratoriya darslari orqali tabiat qonuniyatlarini chuqur o'rganish."}
              </p>
            </div>

            <div className="card">
              <div className="icon-badge" style={{ marginBottom: '18px' }}>
                <Calculator size={24} strokeWidth={2.2} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>
                {t('academics.exact.title') || "Aniq fanlar"}
              </h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                {t('academics.exact.body') || "Matematika, fizika va informatika bo'yicha mustahkam nazariy va amaliy bilimlar, to'garaklar."}
              </p>
            </div>

            <div className="card">
              <div className="icon-badge" style={{ marginBottom: '18px' }}>
                <BookOpen size={24} strokeWidth={2.2} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>
                {t('academics.social.title') || "Ijtimoiy fanlar"}
              </h3>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                {t('academics.social.body') || "Tarix, huquq, tillar va adabiyot darslari o'quvchilar dunyoqarashini kengaytirishga xizmat qiladi."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS & FACILITIES */}
      <section className="section-tight" style={{ backgroundColor: 'var(--blue-050)' }}>
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
              <span className="eyebrow">{t('academics.how.eyebrow') || "Ta'lim qanday tashkil etilgan?"}</span>
              <h2 className="display" style={{ marginTop: '12px', marginBottom: '16px' }}>
                {t('academics.how.title') || "Davlat dasturi + Ixtisoslashuv"}
              </h2>
              <p className="lede" style={{ marginBottom: '16px' }}>
                {t('academics.how.body1') || "Har bir o'quvchi o'z sinf bosqichidagi to'liq davlat o'quv rejasini bajaradi. Shuningdek, qo'shimcha soatlar va to'garaklar orqali o'quvchilar tabiiy va aniq fanlarni chuqurroq o'rganishadi."}
              </p>
              <p style={{ color: 'var(--gray-700)', fontSize: '0.96rem', lineHeight: 1.7 }}>
                {t('academics.how.body2') || "Maktab barcha bosqichlarda uzluksiz umumiy ta'lim beradi, ixtisoslashtirilgan ta'lim esa asosiy dasturdan ajralmagan holda qo'shimcha darslar orqali amalga oshiriladi."}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="card" style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <div className="icon-badge">
                  <Monitor size={22} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>
                    {t('academics.facility1.title') || "Zamonaviy kompyuter sinfxonalari"}
                  </h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.9rem', margin: 0 }}>
                    {t('academics.facility1.body') || "O'quvchilar tadqiqot olib borishi va dars tayyorlashi uchun yuqori tezlikdagi internetga ulangan kompyuterlar."}
                  </p>
                </div>
              </div>

              <div className="card" style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <div className="icon-badge">
                  <Presentation size={22} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>
                    {t('academics.facility2.title') || "Interaktiv elektron doskalar"}
                  </h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.9rem', margin: 0 }}>
                    {t('academics.facility2.body') || "Barcha sinflarda o'qituvchi va o'quvchilar o'rtasida jonli muloqot va ko'rgazmali dars o'tish uchun elektron doskalar qo'llaniladi."}
                  </p>
                </div>
              </div>

              <div className="card" style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <div className="icon-badge">
                  <FlaskConical size={22} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>
                    {t('academics.facility3.title') || "Virtual laboratoriyalar"}
                  </h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.9rem', margin: 0 }}>
                    {t('academics.facility3.body') || "Murakkab kimyoviy va fizik tajribalarni xavfsiz va aniq ko'rsatish imkonini beruvchi virtual laboratoriya dasturlari."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL CLASSROOM MOMENTS (THE EXACT 4 VIDEOS FROM USER SCREENSHOT 1) */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <span className="eyebrow">
              {t('academics.lesson.eyebrow') || "Dars ichida"}
            </span>
            <h2 className="display" style={{ marginTop: '12px', marginBottom: '14px' }}>
              {t('academics.lesson.title') || "Haqiqiy dars lahzalari"}
            </h2>
            <p className="lede" style={{ maxWidth: '680px' }}>
              {t('academics.lesson.lede') || "UNCO'da g'oyalar qanday o'rgatilishidan namunalar — shunchaki ma'ruza emas, qiziquvchanlikka asoslangan jonli suhbat."}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px'
            }}
          >
            {ACADEMIC_VIDEOS.map((item) => (
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

      {/* 5. GRADE STRUCTURE TABLE */}
      <section className="section-tint section">
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <span className="eyebrow">{t('academics.grades.eyebrow') || "Sinf tuzilmasi"}</span>
            <h2 className="display" style={{ marginTop: '12px' }}>
              {t('academics.grades.title') || "5-sinfdan 11-sinfgacha ta'lim bosqichlari"}
            </h2>
          </div>

          <div className="card" style={{ padding: '0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ background: 'var(--blue-050)', borderBottom: '2px solid var(--gray-200)' }}>
                  <th style={{ padding: '16px 24px', fontWeight: 800, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--blue-900)' }}>
                    {t('th.stage') || "Bosqich"}
                  </th>
                  <th style={{ padding: '16px 24px', fontWeight: 800, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--blue-900)' }}>
                    {t('th.grades') || "Sinflar"}
                  </th>
                  <th style={{ padding: '16px 24px', fontWeight: 800, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--blue-900)' }}>
                    {t('th.focus') || "Asosiy e'tibor"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--gray-200)' }}>
                  <td style={{ padding: '20px 24px', fontWeight: 700, color: 'var(--ink)' }}>
                    {t('td.lower') || "Kichik o'rta ta'lim"}
                  </td>
                  <td style={{ padding: '20px 24px', fontWeight: 700, color: 'var(--blue)' }}>
                    {t('td.lowerGrades') || "5–7 sinflar"}
                  </td>
                  <td style={{ padding: '20px 24px', color: 'var(--gray-700)', fontSize: '0.94rem' }}>
                    {t('td.lowerFocus') || "Barcha fanlar bo'yicha mustahkam umumta'lim poydevorini shakllantirish"}
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--gray-200)' }}>
                  <td style={{ padding: '20px 24px', fontWeight: 700, color: 'var(--ink)' }}>
                    {t('td.middle') || "O'rta sinflar"}
                  </td>
                  <td style={{ padding: '20px 24px', fontWeight: 700, color: 'var(--blue)' }}>
                    {t('td.middleGrades') || "8–9 sinflar"}
                  </td>
                  <td style={{ padding: '20px 24px', color: 'var(--gray-700)', fontSize: '0.94rem' }}>
                    {t('td.middleFocus') || "Umumiy ta'lim bilan birga tabiiy va aniq fanlar bo'yicha qo'shimcha soatlar"}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '20px 24px', fontWeight: 700, color: 'var(--ink)' }}>
                    {t('td.upper') || "Yuqori sinflar"}
                  </td>
                  <td style={{ padding: '20px 24px', fontWeight: 700, color: 'var(--blue)' }}>
                    {t('td.upperGrades') || "10–11 sinflar"}
                  </td>
                  <td style={{ padding: '20px 24px', color: 'var(--gray-700)', fontSize: '0.94rem' }}>
                    {t('td.upperFocus') || "OTMlarga kirish imtihonlariga intensiv tayyorgarlik va chuqur fan to'garaklari"}
                  </td>
                </tr>
              </tbody>
            </table>
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
