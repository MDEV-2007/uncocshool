"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Send, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Navigation,
  Sparkles
} from 'lucide-react';
import { SCHOOL_DATA } from '@/data/schoolData';
import { useTranslation } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mapQuery = encodeURIComponent("Obod Yurt Street 870, Ibrat, Buvayda District, Fergana, Uzbekistan");
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const googleMapsDirUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <>
      {/* 1. HERO BANNER */}
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
            <span>{t('nav.contact') || 'Aloqa'}</span>
          </div>
          <span className="eyebrow" style={{ color: '#A3B5FF' }}>
            {t('contact.hero.eyebrow') || "Biz bilan bog'lanish"}
          </span>
          <h1 className="display" style={{ color: '#fff', marginTop: '14px', marginBottom: '18px' }}>
            {t('contact.hero.title') || "UNCO School ma'muriyati bilan aloqa"}
          </h1>
          <p className="lede" style={{ color: '#D4DAFB', maxWidth: '720px' }}>
            {t('contact.hero.lede') || "Savollaringiz bormi? Bizga qo'ng'iroq qiling, telegram orqali yozing yoki formani to'ldiring."}
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(28px, 4vw, 48px)',
              alignItems: 'start'
            }}
          >
            {/* Contact details */}
            <div>
              <span className="eyebrow">
                {t('contact.details.title') || "Maktab ma'lumotlari"}
              </span>
              <h2 className="display" style={{ marginTop: '12px', marginBottom: '28px' }}>
                {t('contact.hero.title') || "Biz doim aloqadamiz"}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Address Card */}
                <div className="card" style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                  <div className="icon-badge">
                    <MapPin size={22} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>
                      {t('contact.address.title') || "Manzil"}
                    </h4>
                    <p style={{ color: 'var(--gray-700)', fontSize: '0.92rem', lineHeight: '1.5' }}>
                      {t('contact.address.body') || SCHOOL_DATA.location.full}
                    </p>
                    <a 
                      href={googleMapsUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '5px', 
                        fontSize: '0.82rem', 
                        color: 'var(--blue)', 
                        fontWeight: 700, 
                        marginTop: '8px' 
                      }}
                    >
                      <span>Google Maps</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="card" style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                  <div className="icon-badge">
                    <Phone size={22} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>
                      {t('contact.phone.title') || "Telefon raqami"}
                    </h4>
                    <p style={{ color: 'var(--ink)', fontWeight: 700, fontSize: '0.98rem' }}>
                      <a href={`tel:${SCHOOL_DATA.social.phone}`}>{SCHOOL_DATA.social.phone}</a>
                    </p>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gray-500)', display: 'block', marginTop: '4px' }}>
                      08:00 – 18:00
                    </span>
                  </div>
                </div>

                {/* Social & Messenger Card */}
                <div className="card" style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                  <div className="icon-badge">
                    <MessageSquare size={22} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>
                      {t('contact.social.title') || "Ijtimoiy tarmoqlar"}
                    </h4>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
                      <a
                        href={SCHOOL_DATA.social.telegram}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline btn-sm"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                      >
                        <Send size={14} />
                        <span>Telegram</span>
                      </a>
                      <a
                        href={SCHOOL_DATA.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline btn-sm"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                      >
                        <Sparkles size={14} />
                        <span>Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="card" style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                  <div className="icon-badge">
                    <Clock size={22} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>
                      {t('contact.hours.title') || "Ish tartibi"}
                    </h4>
                    <p style={{ color: 'var(--gray-700)', fontSize: '0.92rem' }}>
                      08:00 – 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Feedback / Message Form */}
            <div className="card" style={{ padding: 'clamp(28px, 4vw, 40px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div className="icon-badge" style={{ width: '42px', height: '42px', borderRadius: '12px' }}>
                  <Send size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', margin: 0 }}>
                    {t('contact.form.title') || "Xabar qoldiring"}
                  </h3>
                </div>
              </div>

              <p style={{ color: 'var(--gray-700)', fontSize: '0.92rem', marginBottom: '24px' }}>
                {t('contact.form.notice') || "Xabar qoldiring, maktab mas'ullari siz bilan bog'lanishadi."}
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                    <div className="icon-badge icon-badge-lg" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', borderColor: 'rgba(16, 185, 129, 0.25)' }}>
                      <CheckCircle2 size={32} />
                    </div>
                  </div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                    {t('contact.form.alert') || "Xabaringiz qabul qilindi!"}
                  </h4>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label>{t('contact.form.name') || "Ismingiz *"} </label>
                    <input
                      type="text"
                      required
                      placeholder={t('contact.form.namePlaceholder') || "Ismingiz"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>{t('contact.phone.title') || "Telefon *"} </label>
                    <input
                      type="tel"
                      required
                      placeholder="+998 90 123 45 67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>{t('contact.form.message') || "Xabar *"}</label>
                    <textarea
                      rows={4}
                      required
                      placeholder={t('contact.form.messagePlaceholder') || "Xabaringizni yozing..."}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ 
                      width: '100%', 
                      marginTop: '8px', 
                      padding: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontSize: '0.96rem'
                    }}
                  >
                    <Send size={16} />
                    <span>{t('contact.form.submit') || "Xabarni yuborish"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE MAP SECTION */}
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card" style={{ padding: 'clamp(20px, 3vw, 32px)', overflow: 'hidden' }}>
            <div 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                flexWrap: 'wrap', 
                gap: '16px', 
                marginBottom: '20px' 
              }}
            >
              <div>
                <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Navigation size={14} color="var(--blue)" />
                  <span>{t('about.location.eyebrow') || "Xaritadagi manzil"}</span>
                </span>
                <h3 style={{ fontSize: '1.35rem', marginTop: '6px' }}>
                  {t('about.location.title') || "UNCO School binosi joylashuvi"}
                </h3>
                <p style={{ color: 'var(--gray-700)', fontSize: '0.9rem', marginTop: '4px' }}>
                  {t('contact.address.body') || SCHOOL_DATA.location.full}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={googleMapsDirUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <Navigation size={14} />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

            {/* Google Map Embed Iframe */}
            <div className="map-embed-wrapper">
              <iframe
                title="UNCO School location map"
                src="https://www.google.com/maps?q=Obod+Yurt+Street+870%2C+Ibrat%2C+Buvayda+District%2C+Uzbekistan&z=15&output=embed"
                className="map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. ADMISSIONS CTA */}
      <section className="section-tight" style={{ backgroundColor: 'var(--blue-050)' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              flexWrap: 'wrap', 
              gap: '24px',
              padding: 'clamp(24px, 4vw, 36px)',
              borderRadius: 'var(--radius-m)',
              background: 'linear-gradient(135deg, var(--blue-900) 0%, var(--blue-800) 100%)',
              color: '#fff'
            }}
          >
            <div>
              <span className="eyebrow" style={{ color: '#9AABFF' }}>
                {t('contact.cta.eyebrow') || "Farzandingiz uchun UNCO maktabini tanlamoqchimisiz?"}
              </span>
              <h2 className="display" style={{ color: '#fff', marginTop: '10px', fontSize: '1.6rem' }}>
                {t('contact.cta.title') || "Qabul jarayoni va shartnoma shartlari"}
              </h2>
            </div>
            <Link 
              href="/admissions" 
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <ShieldCheck size={16} />
              <span>{t('contact.cta.btn') || "Qabul tafsilotlari"}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
