import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, ArrowUpRight, Calendar } from 'lucide-react';
import { CLINIC_INFO, VETERINARY_SERVICES } from '../data/clinicData';
import { VesperaMark, BotanicalSprig } from './BrandGraphics';

export interface NavProps {
  currentPath: string;
  onNavigate: (path: string, prefill?: { service?: string; doctor?: string }) => void;
  quotaExceeded: boolean;
  children: React.ReactNode;
}

const PRIMARY_NAV = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export function Layout({ currentPath, onNavigate, quotaExceeded, children }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = currentPath === '/';

  const handleLink = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#38283F]">
      {/* Google Maps Demo Key Quota Banner (if triggered) */}
      {quotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-[60] shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      {/* Slim Clinic Information Utility Bar (Desktop only to honor <=15% mobile sticky cap) */}
      <div className="hidden lg:block bg-[#162E28] text-[#DFD3E0] text-xs border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 h-9 flex items-center justify-between gap-6">
          <div className="flex items-center gap-5 min-w-0">
            <a
              href={CLINIC_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#F2C8B8] transition-colors whitespace-nowrap shrink-0 tabular-nums"
            >
              <Phone className="w-3.5 h-3.5 text-[#D7A3A5]" />
              {CLINIC_INFO.phoneDisplay}
            </a>
            <span className="text-white/25" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 tabular-nums">
              <Clock className="w-3.5 h-3.5 text-[#D7A3A5]" />
              {CLINIC_INFO.hoursSummary}
            </span>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <a
              href={CLINIC_INFO.urgentPhoneHref}
              className="hover:text-white transition-colors whitespace-nowrap tabular-nums"
            >
              Daytime Urgent Care: <span className="text-[#F2C8B8] font-medium">{CLINIC_INFO.urgentPhoneDisplay}</span>
            </a>
            <span className="text-white/25" aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => handleLink('/contact')}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D7A3A5]" />
              Portland, OR
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar — Clean 3-Zone Top Bar */}
      <header
        className={`sticky top-0 z-50 transition-colors duration-200 ${
          isHome && !scrolled && !mobileMenuOpen
            ? 'bg-[#1B3831]/95 text-[#FAF7F0] border-b border-white/10 backdrop-blur-md'
            : 'bg-[#FAF7F0]/95 text-[#38283F] border-b border-[#38283F]/10 backdrop-blur-md'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between gap-8">
          {/* Zone 1: Clean single-line brand wordmark */}
          <button
            type="button"
            onClick={() => handleLink('/')}
            className="inline-flex items-center gap-2.5 text-left cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4"
            aria-label="Vespera Veterinary Clinic Home"
          >
            <VesperaMark
              className="w-7 h-7 shrink-0"
              light={isHome && !scrolled && !mobileMenuOpen}
            />
            <span
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {CLINIC_INFO.shortName}
            </span>
          </button>

          {/* Zone 2: Single-line navigation links */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Primary navigation"
          >
            {PRIMARY_NAV.map((item) => {
              const active =
                item.path === '/'
                  ? currentPath === '/'
                  : currentPath === item.path || currentPath.startsWith(`${item.path}/`);
              const lightBar = isHome && !scrolled;
              return (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => handleLink(item.path)}
                  className={`relative py-1 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    lightBar
                      ? active
                        ? 'text-white'
                        : 'text-[#DFD3E0] hover:text-white'
                      : active
                        ? 'text-[#1B3831]'
                        : 'text-[#5D4D63] hover:text-[#38283F]'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      className={`absolute left-0 right-0 -bottom-0.5 h-[1.5px] ${
                        lightBar ? 'bg-[#F2C8B8]' : 'bg-[#B9574B]'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleLink('/book')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#B9574B] text-white text-sm font-semibold hover:bg-[#9D4439] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Book Appointment
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg transition-colors cursor-pointer ${
                isHome && !scrolled && !mobileMenuOpen
                  ? 'text-[#FAF7F0] hover:bg-white/10'
                  : 'text-[#38283F] hover:bg-[#38283F]/5'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F0] text-[#38283F] border-t border-[#38283F]/10 px-6 py-6 shadow-lg">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              <button
                type="button"
                onClick={() => handleLink('/')}
                className={`text-left py-3 px-2 text-base font-medium border-b border-[#38283F]/8 cursor-pointer ${
                  currentPath === '/' ? 'text-[#B9574B]' : 'text-[#38283F]'
                }`}
              >
                Home
              </button>
              {PRIMARY_NAV.map((item) => {
                const active =
                  currentPath === item.path || currentPath.startsWith(`${item.path}/`);
                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleLink(item.path)}
                    className={`text-left py-3 px-2 text-base font-medium border-b border-[#38283F]/8 cursor-pointer ${
                      active ? 'text-[#B9574B]' : 'text-[#38283F]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => handleLink('/faq')}
                className="text-left py-3 px-2 text-base font-medium border-b border-[#38283F]/8 text-[#38283F] cursor-pointer"
              >
                Frequently Asked Questions
              </button>
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => handleLink('/book')}
                className="w-full py-3.5 px-5 rounded-lg bg-[#B9574B] text-white text-sm font-semibold text-center cursor-pointer"
              >
                Book an Appointment
              </button>
              <a
                href={CLINIC_INFO.phoneHref}
                className="w-full py-3 px-5 rounded-lg border border-[#38283F]/15 text-[#1B3831] text-sm font-medium text-center inline-flex items-center justify-center gap-2 tabular-nums"
              >
                <Phone className="w-4 h-4" />
                Call {CLINIC_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Page Body */}
      <main className="flex-1">{children}</main>

      {/* Subtle Floating Desktop Appointment Shortcut (Hidden on booking page & mobile to respect 15% mobile sticky cap) */}
      {scrolled && currentPath !== '/book' && (
        <button
          type="button"
          onClick={() => onNavigate('/book')}
          className="hidden md:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-5 py-3 rounded-xl bg-[#38283F] text-[#FAF7F0] text-sm font-semibold shadow-lg hover:bg-[#50394F] transition-all cursor-pointer border border-white/10"
        >
          <Calendar className="w-4 h-4 text-[#F2C8B8]" />
          Book Visit
        </button>
      )}

      {/* Section 15: Premium Deep Botanical Green Footer */}
      <footer className="relative overflow-hidden bg-[#1B3831] text-[#FAF7F0] border-t border-white/10">
        <BotanicalSprig
          className="hidden lg:block absolute -right-6 top-10 w-56 h-56 opacity-15 pointer-events-none"
          color="#F2C8B8"
        />

        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-12">
          {/* Top Editorial CTA Band inside Footer */}
          <div className="pb-12 border-b border-white/12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2.5">
                <VesperaMark className="w-8 h-8" light />
                <span
                  className="text-xl font-bold tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {CLINIC_INFO.name}
                </span>
              </div>
              <p className="mt-4 text-sm text-[#DFD3E0] leading-relaxed max-w-md">
                Modern companion animal healthcare built around diagnostic precision, calm low-stress rooms, and enduring relationships with pet families.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/book')}
                className="px-6 py-3.5 rounded-lg bg-[#B9574B] text-white text-sm font-semibold hover:bg-[#9D4439] transition-colors cursor-pointer whitespace-nowrap"
              >
                Book an Appointment
              </button>
              <a
                href={CLINIC_INFO.phoneHref}
                className="px-5 py-3.5 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/8 transition-colors whitespace-nowrap tabular-nums"
              >
                Call {CLINIC_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Main Footer Columns */}
          <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-white">Clinic Navigation</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-[#DFD3E0]">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About the Clinic', path: '/about' },
                  { label: 'Our Veterinary Doctors', path: '/doctors' },
                  { label: 'Clinic Facilities', path: '/facilities' },
                  { label: 'Pet Health Blog', path: '/blog' },
                  { label: 'Frequently Asked Questions', path: '/faq' },
                  { label: 'Contact & Directions', path: '/contact' },
                ].map((link) => (
                  <li key={link.path}>
                    <button
                      type="button"
                      onClick={() => onNavigate(link.path)}
                      className="hover:text-[#F2C8B8] transition-colors cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h3 className="text-sm font-semibold text-white">Veterinary Services</h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-[#DFD3E0]">
                {VETERINARY_SERVICES.slice(0, 8).map((svc) => (
                  <li key={svc.slug}>
                    <button
                      type="button"
                      onClick={() => onNavigate(`/services/${svc.slug}`)}
                      className="hover:text-[#F2C8B8] transition-colors cursor-pointer text-left"
                    >
                      {svc.shortTitle}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-white">Visit & Contact</h3>
              <address className="mt-4 not-italic space-y-2.5 text-sm text-[#DFD3E0]">
                <p>{CLINIC_INFO.addressLine1}</p>
                <p>{CLINIC_INFO.addressLine2}</p>
                <p className="pt-1">
                  <a href={CLINIC_INFO.phoneHref} className="text-white hover:text-[#F2C8B8] tabular-nums">
                    Main: {CLINIC_INFO.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a href={CLINIC_INFO.urgentPhoneHref} className="hover:text-[#F2C8B8] tabular-nums">
                    Urgent Daytime: {CLINIC_INFO.urgentPhoneDisplay}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-[#F2C8B8]">
                    {CLINIC_INFO.email}
                  </a>
                </p>
              </address>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-white">Clinic Hours</h3>
              <dl className="mt-4 space-y-2.5 text-sm text-[#DFD3E0] tabular-nums">
                {CLINIC_INFO.hoursDetailed.map((row) => (
                  <div key={row.days}>
                    <dt className="text-white/90 font-medium text-xs">{row.days}</dt>
                    <dd className="text-xs text-[#DFD3E0] mt-0.5">{row.hours}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex items-center gap-4 text-xs text-[#DFD3E0]">
                <a
                  href={CLINIC_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#F2C8B8]"
                >
                  WhatsApp
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={CLINIC_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#F2C8B8]"
                >
                  Directions
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Quiet Legal Footer Bar */}
          <div className="pt-8 border-t border-white/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#DFD3E0]/80">
            <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => onNavigate('/privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms & Conditions
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/faq')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                FAQ
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
