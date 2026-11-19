import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Clock, Check } from 'lucide-react';
import {
  VETERINARY_SERVICES,
  VETERINARY_DOCTORS,
  CLINIC_INFO,
  type VeterinaryService,
} from '../data/clinicData';
import { ServiceLineIcon, EditorialImage } from '../components/BrandGraphics';

interface ServicesIndexProps {
  onNavigate: (path: string, prefill?: { service?: string; doctor?: string }) => void;
}

const CATEGORIES: Array<'All' | VeterinaryService['category']> = [
  'All',
  'Preventive',
  'Clinical & Diagnostics',
  'Surgery & Dental',
  'Life Stage',
];

export function ServicesIndexPage({ onNavigate }: ServicesIndexProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | VeterinaryService['category']>('All');

  const filtered =
    selectedCategory === 'All'
      ? VETERINARY_SERVICES
      : VETERINARY_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div>
      {/* Header */}
      <section className="bg-[#1B3831] text-[#FAF7F0] py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-[#F2C8B8]">Veterinary Services</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Comprehensive medicine tailored to every stage of life.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#DFD3E0] leading-relaxed">
              From preventive wellness and individualized vaccines to digital diagnostics, dentistry, and soft-tissue surgery—explore how our clinical team cares for dogs and cats.
            </p>
          </div>

          {/* Functional Category Filter Tabs */}
          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter services by category">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-[#FAF7F0] text-[#1B3831]'
                      : 'bg-white/10 text-[#DFD3E0] hover:bg-white/18'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Varied Editorial Service Directory */}
      <section className="bg-[#FAF7F0] py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filtered.map((svc, idx) => (
              <article
                key={svc.slug}
                className={`rounded-2xl border border-[#38283F]/10 overflow-hidden ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-[#FBF5F2]'
                }`}
              >
                <div className="p-7 sm:p-9 grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 text-xs text-[#5D4D63]">
                      <span className="font-bold text-[#B9574B] tabular-nums">{svc.number}</span>
                      <span aria-hidden="true">·</span>
                      <span>{svc.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{svc.visitDuration}</span>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-[#E4F0E8] text-[#1B3831] flex items-center justify-center shrink-0">
                        <ServiceLineIcon iconKey={svc.iconKey} className="w-5 h-5" />
                      </span>
                      <h2 className="text-2xl font-bold text-[#38283F]">{svc.title}</h2>
                    </div>

                    <p className="mt-4 text-sm sm:text-base text-[#5D4D63] leading-relaxed">
                      {svc.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => onNavigate(`/services/${svc.slug}`)}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#38283F] text-white text-xs sm:text-sm font-semibold hover:bg-[#50394F] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Full Service Details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onNavigate('/book', { service: svc.title })}
                        className="text-xs sm:text-sm font-semibold text-[#B9574B] hover:text-[#9D4439] cursor-pointer whitespace-nowrap"
                      >
                        Request This Service
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 pt-6 lg:pt-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-[#38283F]/10">
                    <p className="text-xs font-semibold text-[#1B3831]">Included Clinical Focus</p>
                    <ul className="mt-3 space-y-2.5 text-sm text-[#38283F]">
                      {svc.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#B9574B] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

interface ServiceDetailProps {
  slug: string;
  onNavigate: (path: string, prefill?: { service?: string; doctor?: string }) => void;
}

export function ServiceDetailPage({ slug, onNavigate }: ServiceDetailProps) {
  const service = VETERINARY_SERVICES.find((s) => s.slug === slug);
  if (!service) {
    return null;
  }

  const leadDoctor =
    VETERINARY_DOCTORS.find((d) => d.slug === service.leadDoctorSlug) || VETERINARY_DOCTORS[0];
  const related = VETERINARY_SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      <section className="bg-[#FBF5F2] pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#38283F]/10">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5D4D63] hover:text-[#38283F] cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Veterinary Services
          </button>

          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs text-[#5D4D63]">
                <span className="font-semibold text-[#B9574B] tabular-nums">
                  Service {service.number}
                </span>
                <span aria-hidden="true">·</span>
                <span>{service.category}</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 tabular-nums">
                  <Clock className="w-3.5 h-3.5" />
                  {service.visitDuration}
                </span>
              </div>

              <h1 className="mt-3 text-3xl sm:text-5xl font-bold text-[#38283F] tracking-tight leading-[1.12]">
                {service.title}
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#5D4D63] leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/book', { service: service.title })}
                  className="px-6 py-3.5 rounded-lg bg-[#B9574B] text-white text-sm font-semibold hover:bg-[#9D4439] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Book {service.shortTitle}
                </button>
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="px-5 py-3.5 rounded-lg border border-[#38283F]/15 text-sm font-semibold text-[#38283F] hover:bg-white transition-colors tabular-nums whitespace-nowrap"
                >
                  Call {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              {service.image ? (
                <EditorialImage
                  src={service.image}
                  alt={service.imageAlt || service.title}
                  fallbackTitle={service.title}
                  className="aspect-[4/3] rounded-2xl"
                />
              ) : (
                <div className="aspect-[4/3] rounded-2xl bg-[#E4F0E8] p-10 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#1B3831] text-[#F2C8B8] flex items-center justify-center">
                    <ServiceLineIcon iconKey={service.iconKey} className="w-8 h-8" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[#1B3831]">{service.title}</p>
                  <p className="mt-1 text-xs text-[#5D4D63]">{service.visitDuration}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Details */}
      <section className="bg-[#FAF7F0] py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-[#38283F]">What Is Included</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-4">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="p-4 rounded-xl bg-white border border-[#38283F]/8 text-sm text-[#38283F] flex items-start gap-2.5"
                  >
                    <Check className="w-4 h-4 text-[#B9574B] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38283F]">What to Expect During Your Visit</h2>
              <div className="mt-4 space-y-4 text-base text-[#5D4D63] leading-relaxed">
                {service.whatToExpect.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#38283F]">When to Schedule</h2>
              <ul className="mt-4 space-y-3 text-sm sm:text-base text-[#5D4D63]">
                {service.whenToSchedule.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#B9574B] font-bold" aria-hidden="true">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Clinical Lead Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#F1F3ED] rounded-2xl p-7 border border-[#38283F]/10">
              <p className="text-xs font-medium text-[#5D4D63]">Clinical Lead</p>
              <div className="mt-4 flex items-center gap-4">
                <EditorialImage
                  src={leadDoctor.image}
                  alt={leadDoctor.imageAlt}
                  className="w-16 h-16 rounded-full shrink-0"
                  imgClassName="w-full h-full object-cover object-top"
                />
                <div>
                  <h3 className="text-base font-bold text-[#38283F]">{leadDoctor.name}</h3>
                  <p className="text-xs text-[#B9574B] font-medium">{leadDoctor.credentials}</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#5D4D63] leading-relaxed">{leadDoctor.shortBio}</p>
              <button
                type="button"
                onClick={() => onNavigate(`/doctors/${leadDoctor.slug}`)}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B3831] hover:text-[#B9574B] cursor-pointer"
              >
                Read Doctor Profile
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-[#1B3831] text-[#FAF7F0] rounded-2xl p-7">
              <h3 className="text-lg font-bold text-white">Ready to schedule?</h3>
              <p className="mt-2 text-xs text-[#DFD3E0] leading-relaxed">
                Our team will pre-select {service.title} on your appointment request form.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/book', { service: service.title })}
                className="mt-5 w-full py-3 rounded-lg bg-[#B9574B] text-white text-sm font-semibold hover:bg-[#9D4439] transition-colors cursor-pointer"
              >
                Request Appointment
              </button>
            </div>
          </aside>
        </div>

        {/* Related Services */}
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-[#38283F]/10">
          <h2 className="text-xl font-bold text-[#38283F]">Related Veterinary Services</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {related.map((svc) => (
              <button
                key={svc.slug}
                type="button"
                onClick={() => onNavigate(`/services/${svc.slug}`)}
                className="text-left p-6 rounded-xl bg-white border border-[#38283F]/10 hover:border-[#B9574B]/40 transition-colors cursor-pointer"
              >
                <p className="text-xs font-semibold text-[#B9574B] tabular-nums">{svc.number}</p>
                <h3 className="mt-2 text-base font-bold text-[#38283F]">{svc.title}</h3>
                <p className="mt-2 text-xs text-[#5D4D63] leading-relaxed">{svc.summary}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
