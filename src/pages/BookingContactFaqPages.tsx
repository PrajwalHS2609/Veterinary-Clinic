import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Navigation,
  MessageCircle,
  ChevronDown,
  Check,
  Search,
  ArrowRight,
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES, FAQ_ITEMS, type FaqItem } from '../data/clinicData';
import { AppointmentForm } from '../components/AppointmentForm';
import { ClinicMap } from '../components/ClinicMap';
import { EditorialImage } from '../components/BrandGraphics';

interface BookingPageProps {
  preselectedService?: string;
  preselectedDoctor?: string;
}

export function BookingPage({ preselectedService, preselectedDoctor }: BookingPageProps) {
  return (
    <div>
      <section className="bg-[#1B3831] text-[#FAF7F0] py-14 lg:py-20">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-[#F2C8B8]">Appointment Booking</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Your Pet Deserves the Best Care. Let’s Get Started.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#DFD3E0] leading-relaxed">
              Submit your preferred visit details below. Our reception team confirms every appointment personally by phone or email during clinic hours.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <AppointmentForm
              preselectedService={preselectedService}
              preselectedDoctor={preselectedDoctor}
            />
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#FBF5F2] rounded-2xl p-7 border border-[#38283F]/10">
              <h2 className="text-base font-bold text-[#38283F]">First Visit Checklist</h2>
              <ul className="mt-4 space-y-3 text-sm text-[#5D4D63]">
                {[
                  'Previous vaccination certificates or clinic records (if available)',
                  'List of current food, treats, medications, or supplements',
                  'Secure non-retractable leash for dogs or sturdy carrier for cats',
                  'Any questions or subtle behavior notes you have observed at home',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#B9574B] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#E4F0E8] rounded-2xl p-7">
              <h2 className="text-base font-bold text-[#1B3831]">Direct Clinic Lines</h2>
              <div className="mt-4 space-y-3 text-sm text-[#38283F] tabular-nums">
                <p>
                  <span className="block text-xs text-[#5D4D63]">Main Appointments Desk</span>
                  <a href={CLINIC_INFO.phoneHref} className="font-bold text-[#1B3831] hover:text-[#B9574B]">
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="block text-xs text-[#5D4D63]">Daytime Urgent Triage</span>
                  <a href={CLINIC_INFO.urgentPhoneHref} className="font-bold text-[#B9574B] hover:underline">
                    {CLINIC_INFO.urgentPhoneDisplay}
                  </a>
                </p>
              </div>
              <p className="mt-4 pt-4 border-t border-[#1B3831]/12 text-xs text-[#38283F]/80 leading-relaxed">
                {CLINIC_INFO.emergencyNote}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

interface ContactPageProps {
  quotaExceeded: boolean;
}

export function ContactPage({ quotaExceeded }: ContactPageProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Clinic Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-[#F1F3ED] py-16 lg:py-22 border-b border-[#38283F]/10">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-[#B9574B]">Contact & Location</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[#38283F] tracking-tight">
              We Are Here to Help You and Your Companion.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5D4D63] leading-relaxed">
              Reach our reception team by phone, WhatsApp, email, or visit our ground-level Portland clinic with dedicated client parking.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#B9574B] mt-0.5 shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-[#38283F]">Address</h2>
                  <p className="text-sm text-[#5D4D63] mt-1">{CLINIC_INFO.addressLine1}</p>
                  <p className="text-sm text-[#5D4D63]">{CLINIC_INFO.addressLine2}</p>
                  <p className="text-xs text-[#5D4D63] mt-1">
                    Complimentary ground-level client parking behind building; step-free entrance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#B9574B] mt-0.5 shrink-0" />
                <div className="tabular-nums">
                  <h2 className="text-sm font-bold text-[#38283F]">Phone & Urgent Triage</h2>
                  <p className="text-sm text-[#5D4D63] mt-1">
                    Main Desk:{' '}
                    <a href={CLINIC_INFO.phoneHref} className="font-semibold text-[#1B3831] hover:text-[#B9574B]">
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </p>
                  <p className="text-sm text-[#5D4D63]">
                    Daytime Urgent Care:{' '}
                    <a href={CLINIC_INFO.urgentPhoneHref} className="font-semibold text-[#B9574B] hover:underline">
                      {CLINIC_INFO.urgentPhoneDisplay}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#B9574B] mt-0.5 shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-[#38283F]">Email</h2>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="text-sm text-[#5D4D63] hover:text-[#1B3831] mt-1 block"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#B9574B] mt-0.5 shrink-0" />
                <div>
                  <h2 className="text-sm font-bold text-[#38283F]">Operating Hours</h2>
                  <dl className="mt-1 space-y-1 text-sm text-[#5D4D63] tabular-nums">
                    {CLINIC_INFO.hoursDetailed.map((row) => (
                      <div key={row.days} className="flex justify-between gap-6">
                        <dt className="font-medium text-[#38283F]">{row.days}</dt>
                        <dd>{row.hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={CLINIC_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1B3831] text-white text-sm font-semibold hover:bg-[#162E28] transition-colors whitespace-nowrap"
              >
                <Navigation className="w-4 h-4" />
                Google Maps Directions
              </a>
              <a
                href={CLINIC_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#38283F]/20 text-sm font-semibold text-[#38283F] hover:bg-[#E4F0E8] transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#1B3831]" />
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-10 border border-[#38283F]/10">
            <h2 className="text-2xl font-bold text-[#38283F]">Send Us a Message</h2>
            <p className="mt-2 text-sm text-[#5D4D63]">
              For non-urgent inquiries, record transfers, or prescription refill questions.
            </p>

            {submitted ? (
              <div className="mt-6 p-6 rounded-xl bg-[#E4F0E8] text-[#1B3831]">
                <p className="font-bold text-base">Thank you, {form.name}.</p>
                <p className="mt-1.5 text-sm leading-relaxed">
                  Your message regarding “{form.subject}” has been received. A client care coordinator will respond within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', phone: '', subject: 'General Clinic Inquiry', message: '' });
                  }}
                  className="mt-4 text-xs font-semibold underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-name" className="block text-xs font-semibold text-[#38283F] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-[#38283F]/15 px-3.5 py-2.5 text-sm text-[#38283F] focus:outline-none focus:border-[#B9574B]"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-xs font-semibold text-[#38283F] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-[#38283F]/15 px-3.5 py-2.5 text-sm text-[#38283F] focus:outline-none focus:border-[#B9574B]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-phone" className="block text-xs font-semibold text-[#38283F] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg border border-[#38283F]/15 px-3.5 py-2.5 text-sm text-[#38283F] tabular-nums focus:outline-none focus:border-[#B9574B]"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-subject" className="block text-xs font-semibold text-[#38283F] mb-1.5">
                      Topic
                    </label>
                    <select
                      id="c-subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full rounded-lg border border-[#38283F]/15 px-3.5 py-2.5 text-sm text-[#38283F] focus:outline-none focus:border-[#B9574B]"
                    >
                      <option>General Clinic Inquiry</option>
                      <option>New Patient Record Transfer</option>
                      <option>Prescription or Diet Refill</option>
                      <option>Surgical or Dental Estimate Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="c-message" className="block text-xs font-semibold text-[#38283F] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="c-message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-[#38283F]/15 px-3.5 py-2.5 text-sm text-[#38283F] focus:outline-none focus:border-[#B9574B] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-lg bg-[#B9574B] text-white text-sm font-semibold hover:bg-[#9D4439] transition-colors cursor-pointer"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Full-Width Interactive Clinic Map */}
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 mt-14">
          <ClinicMap heightClass="h-[440px]" quotaExceeded={quotaExceeded} />
        </div>
      </section>
    </div>
  );
}

interface FaqPageProps {
  onNavigate: (path: string) => void;
}

export function FaqPage({ onNavigate }: FaqPageProps) {
  const [category, setCategory] = useState<'All' | FaqItem['category']>('All');
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const filtered = FAQ_ITEMS.filter((item) => {
    const matchCat = category === 'All' || item.category === category;
    const q = query.trim().toLowerCase();
    const matchQuery =
      !q ||
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  return (
    <div>
      <section className="bg-[#FBF5F2] py-16 lg:py-22 border-b border-[#38283F]/10">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-[#B9574B]">Frequently Asked Questions</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[#38283F] tracking-tight">
              Everything You Need to Know Before Visiting Vespera.
            </h1>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {(['All', 'Appointments', 'Clinical Care', 'Clinic Policies'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    category === cat
                      ? 'bg-[#38283F] text-white'
                      : 'bg-white border border-[#38283F]/12 text-[#38283F] hover:bg-[#E4F0E8]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#5D4D63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions..."
                aria-label="Search FAQ"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-[#38283F]/15 text-sm focus:outline-none focus:border-[#B9574B]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-16 lg:py-24">
        <div className="max-w-[920px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="divide-y divide-[#38283F]/12 border-y border-[#38283F]/12">
            {filtered.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id}>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? '' : faq.id)}
                    aria-expanded={isOpen}
                    className="w-full py-6 flex items-center justify-between gap-6 text-left cursor-pointer"
                  >
                    <div>
                      <span className="text-xs font-medium text-[#B9574B] block mb-1">
                        {faq.category}
                      </span>
                      <span className="text-lg font-semibold text-[#38283F]">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#B9574B] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-8 text-base text-[#5D4D63] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-[#E4F0E8] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-[#1B3831]">Still have a specific question?</h2>
              <p className="mt-1 text-sm text-[#38283F]/85">
                Our veterinary reception desk is happy to talk through any concern before you book.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1B3831] text-white text-sm font-semibold hover:bg-[#162E28] cursor-pointer whitespace-nowrap"
            >
              Contact Clinic
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function PrivacyPolicyPage() {
  return (
    <section className="bg-[#FAF7F0] py-16 lg:py-24">
      <div className="max-w-[820px] mx-auto px-5 sm:px-6 lg:px-8">
        <p className="text-xs font-medium text-[#B9574B]">Legal & Privacy</p>
        <h1 className="mt-2 text-4xl font-bold text-[#38283F]">Privacy Policy</h1>
        <p className="mt-3 text-xs text-[#5D4D63]">Last updated: November 2026</p>

        <div className="mt-10 space-y-8 text-sm sm:text-base text-[#5D4D63] leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#38283F]">1. Information We Collect</h2>
            <p className="mt-2.5">
              When you submit an appointment request or contact inquiry on the {CLINIC_INFO.name} website, we collect the contact details and pet care notes you voluntarily provide—such as your name, telephone number, email address, pet’s name, species, and preferred service—so our reception and clinical staff can coordinate veterinary care.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#38283F]">2. How We Use Your Information</h2>
            <p className="mt-2.5">
              We use client contact information solely to confirm appointments, communicate medical updates, share digital vaccination certificates, and coordinate referrals with partner specialty hospitals when authorized by you. We never sell or rent client contact records to third-party marketers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#38283F]">3. Google Maps Platform Integration</h2>
            <p className="mt-2.5">
              Our location pages incorporate interactive mapping features powered by Google Maps Platform. Your use of those embedded map features is subject to the{' '}
              <a
                href="https://maps.google.com/help/terms_maps/?utm_campaign=gmp_mcp_codeassist_v1_aistudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B3831] underline hover:text-[#B9574B]"
              >
                Google Maps/Google Earth Additional Terms of Service
              </a>{' '}
              and the{' '}
              <a
                href="https://policies.google.com/privacy?utm_campaign=gmp_mcp_codeassist_v1_aistudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B3831] underline hover:text-[#B9574B]"
              >
                Google Privacy Policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#38283F]">4. Contacting Our Privacy Coordinator</h2>
            <p className="mt-2.5">
              To request copies of your pet’s medical records or update your communication preferences, contact us at{' '}
              <a href={`mailto:${CLINIC_INFO.email}`} className="text-[#1B3831] underline">
                {CLINIC_INFO.email}
              </a>{' '}
              or call {CLINIC_INFO.phoneDisplay}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TermsPage() {
  return (
    <section className="bg-[#FAF7F0] py-16 lg:py-24">
      <div className="max-w-[820px] mx-auto px-5 sm:px-6 lg:px-8">
        <p className="text-xs font-medium text-[#B9574B]">Clinic Policies</p>
        <h1 className="mt-2 text-4xl font-bold text-[#38283F]">Terms and Conditions</h1>
        <p className="mt-3 text-xs text-[#5D4D63]">Last updated: November 2026</p>

        <div className="mt-10 space-y-8 text-sm sm:text-base text-[#5D4D63] leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#38283F]">1. Informational Website Content</h2>
            <p className="mt-2.5">
              Educational guides and service descriptions on this website are provided for general pet parent awareness and do not establish a veterinarian-client-patient relationship (VCPR) or substitute for an in-person clinical examination.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#38283F]">2. Appointments & Rescheduling</h2>
            <p className="mt-2.5">
              Online appointment submissions are booking requests until confirmed by our reception team. We kindly ask for at least 24 hours’ notice if you need to reschedule so another pet needing care may use the consultation window.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#38283F]">3. Daytime Urgent Care & After-Hours Emergencies</h2>
            <p className="mt-2.5">
              {CLINIC_INFO.emergencyNote} Please never rely on online contact forms for urgent medical distress; always call our urgent line or proceed immediately to a 24-hour emergency animal hospital.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#38283F]">4. Third-Party Mapping Services</h2>
            <p className="mt-2.5">
              Interactive maps and direction links integrated into this website are provided via Google Maps Platform and are governed by the{' '}
              <a
                href="https://maps.google.com/help/terms_maps/?utm_campaign=gmp_mcp_codeassist_v1_aistudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B3831] underline hover:text-[#B9574B]"
              >
                Google Maps End User Additional Terms of Service
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface NotFoundProps {
  onNavigate: (path: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundProps) {
  return (
    <section className="bg-[#FAF7F0] py-20 lg:py-28">
      <div className="max-w-[960px] mx-auto px-5 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5">
          <EditorialImage
            src={CLINIC_IMAGES.catPortrait}
            alt="Calm British Shorthair cat resting peacefully"
            fallbackTitle="Vespera Veterinary Clinic"
            className="aspect-square rounded-2xl"
          />
        </div>
        <div className="md:col-span-7">
          <p className="text-xs font-semibold text-[#B9574B] tabular-nums">Page 404</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-[#38283F] tracking-tight">
            Even curious cats wander off the path sometimes.
          </h1>
          <p className="mt-4 text-base text-[#5D4D63] leading-relaxed">
            The page you were looking for could not be found. Let us guide you back to our services, doctors, or appointment desk.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="px-6 py-3 rounded-lg bg-[#1B3831] text-white text-sm font-semibold hover:bg-[#162E28] transition-colors cursor-pointer whitespace-nowrap"
            >
              Return Home
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/book')}
              className="px-6 py-3 rounded-lg bg-[#B9574B] text-white text-sm font-semibold hover:bg-[#9D4439] transition-colors cursor-pointer whitespace-nowrap"
            >
              Book Appointment
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="px-5 py-3 rounded-lg border border-[#38283F]/20 text-sm font-semibold text-[#38283F] hover:bg-[#E4F0E8] transition-colors cursor-pointer whitespace-nowrap"
            >
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
