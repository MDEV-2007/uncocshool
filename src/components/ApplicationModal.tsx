"use client";

import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  GraduationCap, 
  Send, 
  User, 
  Phone, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const { language } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    grade: '5',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const allTexts = {
    uz: {
      title: "Qabul uchun ariza qoldirish",
      desc: "Ma'lumotlaringizni qoldiring. Maktab ma'muriyati tez orada siz bilan bog'lanadi.",
      nameLabel: "O'quvchi yoki ota-onaning F.I.Sh",
      namePlaceholder: "Masalan: Alisher Valiyev",
      phoneLabel: "Telefon raqami",
      phonePlaceholder: "+998 90 123 45 67",
      gradeLabel: "Qaysi sinfga topshirmoqchisiz?",
      notesLabel: "Qo'shimcha savol yoki izoh",
      notesPlaceholder: "Ixtiyoriy...",
      submitBtn: "Arizani yuborish",
      successTitle: "Arizangiz qabul qilindi!",
      successDesc: "Tez orada mutaxassislarimiz siz bilan bog'lanishadi. UNCO School'ni tanlaganingiz uchun rahmat!"
    },
    ru: {
      title: "Подать заявку на поступление",
      desc: "Оставьте свои данные, и администрация школы свяжется с вами в ближайшее время.",
      nameLabel: "Ф.И.О ученика или родителя",
      namePlaceholder: "Например: Алишер Валиев",
      phoneLabel: "Номер телефона",
      phonePlaceholder: "+998 90 123 45 67",
      gradeLabel: "В какой класс поступаете?",
      notesLabel: "Вопросы или комментарии",
      notesPlaceholder: "Необязательно...",
      submitBtn: "Отправить заявку",
      successTitle: "Заявка успешно принята!",
      successDesc: "Наши специалисты свяжутся с вами в ближайшее время. Спасибо за выбор UNCO School!"
    },
    en: {
      title: "Apply for Admission",
      desc: "Leave your details and the school admissions team will contact you shortly.",
      nameLabel: "Student or Parent Full Name",
      namePlaceholder: "e.g. Alisher Valiyev",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+998 90 123 45 67",
      gradeLabel: "Applying for Grade",
      notesLabel: "Questions or notes",
      notesPlaceholder: "Optional...",
      submitBtn: "Submit Application",
      successTitle: "Application Received!",
      successDesc: "Our admissions office will reach out to you soon. Thank you for choosing UNCO School!"
    }
  };

  const texts = allTexts[language] || allTexts.uz;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(8, 13, 56, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '520px',
          padding: 'clamp(26px, 5vw, 38px)',
          boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid var(--gray-200)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'var(--gray-100)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--ink-soft)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '36px 10px' }}>
            <div
              className="icon-badge icon-badge-lg"
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10B981',
                borderColor: 'rgba(16, 185, 129, 0.25)',
                margin: '0 auto 20px',
                width: '68px',
                height: '68px',
                borderRadius: '50%'
              }}
            >
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--ink)', marginBottom: '10px' }}>
              {texts.successTitle}
            </h3>
            <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              {texts.successDesc}
            </p>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div className="icon-badge" style={{ marginTop: '4px' }}>
                <GraduationCap size={24} strokeWidth={2.2} />
              </div>
              <div>
                <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Sparkles size={13} color="var(--blue)" />
                  <span>UNCO School</span>
                </span>
                <h3 style={{ fontSize: '1.45rem', marginTop: '4px', marginBottom: '6px' }}>
                  {texts.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: 1.5 }}>
                  {texts.desc}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <User size={15} color="var(--blue)" />
                  <span>{texts.nameLabel} *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={texts.namePlaceholder}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Phone size={15} color="var(--blue)" />
                  <span>{texts.phoneLabel} *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder={texts.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <GraduationCap size={15} color="var(--blue)" />
                  <span>{texts.gradeLabel}</span>
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                >
                  <option value="5">5-sinf (Grade 5)</option>
                  <option value="6">6-sinf (Grade 6)</option>
                  <option value="7">7-sinf (Grade 7)</option>
                  <option value="8">8-sinf (Grade 8)</option>
                  <option value="9">9-sinf (Grade 9)</option>
                  <option value="10">10-sinf (Grade 10)</option>
                  <option value="11">11-sinf (Grade 11)</option>
                </select>
              </div>

              <div className="form-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MessageSquare size={15} color="var(--blue)" />
                  <span>{texts.notesLabel}</span>
                </label>
                <textarea
                  rows={3}
                  placeholder={texts.notesPlaceholder}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ 
                  width: '100%', 
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px'
                }}
              >
                <Send size={16} />
                <span>{texts.submitBtn}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
