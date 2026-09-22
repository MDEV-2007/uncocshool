"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isSolid, setIsSolid] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigate (adjust state during render, avoiding an extra effect-triggered render)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const navLinks = [
    { href: '/', label: t('nav.home') || 'Bosh sahifa' },
    { href: '/about', label: t('nav.about') || 'Maktab haqida' },
    { href: '/academics', label: t('nav.academics') || 'Yo\'nalishlar' },
    { href: '/student-life', label: t('nav.studentlife') || 'Maktab hayoti' },
    { href: '/achievements', label: t('nav.achievements') || 'Yutuqlar' },
    { href: '/admissions', label: t('nav.admissions') || 'Qabul' },
    { href: '/contact', label: t('nav.contact') || 'Aloqa' }
  ];

  const isHomeHero = pathname === '/';
  const showDarkHeader = isHomeHero && !isSolid && !mobileMenuOpen;

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          paddingBlock: isSolid ? '12px' : '18px',
          backgroundColor: isSolid
            ? 'rgba(250, 250, 248, 0.94)'
            : showDarkHeader
            ? 'transparent'
            : 'rgba(250, 250, 248, 0.94)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isSolid ? '1px solid var(--gray-200)' : '1px solid transparent',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          {/* Brand Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.15rem',
              color: showDarkHeader ? '#ffffff' : 'var(--ink)',
              transition: 'color 0.25s ease'
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/brand/unco-logo.png"
              alt="UNCO School"
              style={{ height: '42px', width: 'auto', flexShrink: 0 }}
            />
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
              UNCO
              <small
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '0.64rem',
                  letterSpacing: '0.16em',
                  color: showDarkHeader ? '#B0BCEB' : 'var(--blue)',
                  textTransform: 'uppercase'
                }}
              >
                School
              </small>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              whiteSpace: 'nowrap',
              flexWrap: 'nowrap',
              flexShrink: 1,
              minWidth: 0
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: '6px 10px',
                    borderRadius: '999px',
                    fontSize: '0.84rem',
                    fontWeight: isActive ? 700 : 500,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    color: showDarkHeader
                      ? isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.92)'
                      : isActive ? 'var(--blue)' : 'var(--ink-soft)',
                    backgroundColor: isActive
                      ? showDarkHeader ? 'rgba(255, 255, 255, 0.22)' : 'var(--blue-050)'
                      : 'transparent',
                    transition: 'all 0.18s ease'
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Lang switcher + Mobile Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <LanguageSwitcher />

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="mobile-toggle-btn"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'none',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4.5px',
                border: '1.5px solid',
                borderColor: showDarkHeader ? 'rgba(255, 255, 255, 0.45)' : 'var(--gray-300)',
                color: showDarkHeader ? '#ffffff' : 'var(--ink)',
                background: showDarkHeader ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(6px)',
                cursor: 'pointer',
                zIndex: 101,
                transition: 'all 0.25s ease'
              }}
            >
              <span
                style={{
                  width: '18px',
                  height: '2px',
                  borderRadius: '2px',
                  backgroundColor: mobileMenuOpen ? 'var(--ink)' : 'currentColor',
                  transition: 'all 0.25s ease',
                  transform: mobileMenuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none'
                }}
              />
              <span
                style={{
                  width: '18px',
                  height: '2px',
                  borderRadius: '2px',
                  backgroundColor: mobileMenuOpen ? 'var(--ink)' : 'currentColor',
                  transition: 'all 0.25s ease',
                  opacity: mobileMenuOpen ? 0 : 1,
                  transform: mobileMenuOpen ? 'scale(0)' : 'none'
                }}
              />
              <span
                style={{
                  width: '18px',
                  height: '2px',
                  borderRadius: '2px',
                  backgroundColor: mobileMenuOpen ? 'var(--ink)' : 'currentColor',
                  transition: 'all 0.25s ease',
                  transform: mobileMenuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none'
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '32px 24px',
            animation: 'fadeIn 0.25s ease forwards'
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    padding: '12px 10px',
                    borderRadius: '10px',
                    color: isActive ? 'var(--blue)' : 'var(--ink)',
                    backgroundColor: isActive ? 'var(--blue-050)' : 'transparent',
                    borderBottom: '1px solid var(--gray-100)'
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 1120px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
