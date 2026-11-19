import React, { useState, useEffect, useCallback } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesIndexPage, ServiceDetailPage } from './pages/ServicesPage';
import { DoctorsIndexPage, DoctorDetailPage } from './pages/DoctorsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { BlogIndexPage, BlogArticlePage } from './pages/BlogPage';
import {
  BookingPage,
  ContactPage,
  FaqPage,
  PrivacyPolicyPage,
  TermsPage,
  NotFoundPage,
} from './pages/BookingContactFaqPages';
import { VETERINARY_SERVICES, VETERINARY_DOCTORS, HEALTH_ARTICLES } from './data/clinicData';

function readHashPath(): string {
  const raw = window.location.hash.replace(/^#/, '');
  if (!raw || raw === '') return '/';
  return raw.startsWith('/') ? raw : `/${raw}`;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => readHashPath());
  const [bookingPrefill, setBookingPrefill] = useState<{ service?: string; doctor?: string }>({});
  const [quotaExceeded, setQuotaExceeded] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPath(readHashPath());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const handleQuota = () => setQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', handleQuota);
    return () => window.removeEventListener('gmp-quota-exceeded', handleQuota);
  }, []);

  const navigate = useCallback(
    (path: string, prefill?: { service?: string; doctor?: string }) => {
      if (prefill) {
        setBookingPrefill(prefill);
      } else if (path !== '/book') {
        setBookingPrefill({});
      }
      const normalized = path.startsWith('/') ? path : `/${path}`;
      if (window.location.hash !== `#${normalized}`) {
        window.location.hash = normalized;
      }
      setCurrentPath(normalized);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  const renderPage = () => {
    if (currentPath === '/' || currentPath === '/home') {
      return <HomePage onNavigate={navigate} quotaExceeded={quotaExceeded} />;
    }
    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }
    if (currentPath === '/services') {
      return <ServicesIndexPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      const exists = VETERINARY_SERVICES.some((s) => s.slug === slug);
      return exists ? (
        <ServiceDetailPage slug={slug} onNavigate={navigate} />
      ) : (
        <NotFoundPage onNavigate={navigate} />
      );
    }
    if (currentPath === '/doctors') {
      return <DoctorsIndexPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/doctors/')) {
      const slug = currentPath.replace('/doctors/', '');
      const exists = VETERINARY_DOCTORS.some((d) => d.slug === slug);
      return exists ? (
        <DoctorDetailPage slug={slug} onNavigate={navigate} />
      ) : (
        <NotFoundPage onNavigate={navigate} />
      );
    }
    if (currentPath === '/facilities') {
      return <FacilitiesPage onNavigate={navigate} />;
    }
    if (currentPath === '/blog') {
      return <BlogIndexPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      const exists = HEALTH_ARTICLES.some((a) => a.slug === slug);
      return exists ? (
        <BlogArticlePage slug={slug} onNavigate={navigate} />
      ) : (
        <NotFoundPage onNavigate={navigate} />
      );
    }
    if (currentPath === '/book') {
      return (
        <BookingPage
          preselectedService={bookingPrefill.service}
          preselectedDoctor={bookingPrefill.doctor}
        />
      );
    }
    if (currentPath === '/contact') {
      return <ContactPage quotaExceeded={quotaExceeded} />;
    }
    if (currentPath === '/faq') {
      return <FaqPage onNavigate={navigate} />;
    }
    if (currentPath === '/privacy') {
      return <PrivacyPolicyPage />;
    }
    if (currentPath === '/terms') {
      return <TermsPage />;
    }
    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <Layout currentPath={currentPath} onNavigate={navigate} quotaExceeded={quotaExceeded}>
      {renderPage()}
    </Layout>
  );
}
