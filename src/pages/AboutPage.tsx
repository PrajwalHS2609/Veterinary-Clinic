import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CLINIC_IMAGES, VETERINARY_DOCTORS, CLINIC_INFO } from '../data/clinicData';
import { BotanicalSprig, EditorialImage } from '../components/BrandGraphics';

interface AboutPageProps {
  onNavigate: (path: string, prefill?: { service?: string; doctor?: string }) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      {/* Editorial Story Header */}
      <section className="bg-[#FBF5F2] pt-14 pb-20 lg:pt-20 lg:pb-24 border-b border-[#38283F]/10 relative overflow-hidden">
        <BotanicalSprig
          className="hidden lg:block absolute right-10 top-8 w-44 h-44 opacity-25 pointer-events-none"
          color="#D7A3A5"
        />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-[#B9574B]">About Vespera Veterinary Clinic</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[#38283F] tracking-tight leading-[1.1]">
              A modern animal hospital shaped by calm design and clinical rigor.
            </h1>
            <p className="mt-6 text-lg text-[#5D4D63] leading-relaxed">
              Vespera Veterinary Clinic was founded in Portland to offer companion dogs and cats the diagnostic standards of an internal medicine hospital inside a serene, unhurried neighborhood clinic.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8">
              <EditorialImage
                src={CLINIC_IMAGES.consultationHero}
                alt="Veterinarian gently examining a spaniel inside a sunlit consultation suite"
                fallbackTitle="Unhurried Companion Care"
                className="aspect-[16/10] rounded-2xl"
              />
            </div>
            <div className="lg:col-span-4 bg-[#1B3831] text-[#FAF7F0] rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs text-[#F2C8B8]">Our Founding Commitment</p>
                <p className="mt-4 text-xl font-semibold leading-snug text-white">
                  “When an animal feels safe, every physical exam is more accurate and every conversation with their family becomes clearer.”
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-white/15">
                <p className="text-sm font-semibold text-white">Dr. Elena Vance, DVM, DACVIM</p>
                <p className="text-xs text-[#DFD3E0] mt-0.5">Medical Director & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars of Practice (Editorial Rows, No Cookie-Cutter Boxes) */}
      <section className="bg-[#FAF7F0] py-20 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium text-[#5D4D63]">How We Practice</p>
              <h2 className="mt-3 text-3xl font-bold text-[#38283F] tracking-tight">
                Standards both pet parents and doctors respect.
              </h2>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#38283F]/12 border-t border-[#38283F]/12">
              {[
                {
                  num: '01',
                  title: 'Evidence-Based Medicine Without Rushing',
                  body: 'Standard appointments are scheduled for 40 minutes so doctors have time to review clinical history, perform a thorough physical examination, and walk through diagnostic reasoning clearly.',
                },
                {
                  num: '02',
                  title: 'Architecture Designed Around Animal Senses',
                  body: 'Acoustic dampening panels, non-slip matte flooring, pheromone-diffused rooms, and strictly separated canine and feline waiting zones minimize sensory stress from the moment you arrive.',
                },
                {
                  num: '03',
                  title: 'Transparent Estimates & Collaborative Care',
                  body: 'We outline itemized care options before performing non-urgent diagnostics or procedures and coordinate openly with board-certified regional referral hospitals whenever specialized 24/7 intensive care is required.',
                },
              ].map((pillar) => (
                <div key={pillar.num} className="py-8 grid sm:grid-cols-12 gap-4">
                  <span className="sm:col-span-2 text-sm font-bold text-[#B9574B] tabular-nums">
                    {pillar.num}
                  </span>
                  <div className="sm:col-span-10">
                    <h3 className="text-xl font-bold text-[#38283F]">{pillar.title}</h3>
                    <p className="mt-2.5 text-sm sm:text-base text-[#5D4D63] leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Leadership Preview */}
      <section className="bg-[#E4F0E8] py-20 border-y border-[#38283F]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-[#1B3831]">Our Medical Team</p>
              <h2 className="mt-2 text-3xl font-bold text-[#1B3831]">
                Led by Dedicated Veterinary Clinicians.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/doctors')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B3831] hover:text-[#B9574B] cursor-pointer whitespace-nowrap"
            >
              Meet All Doctors
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {VETERINARY_DOCTORS.map((doc) => (
              <button
                key={doc.slug}
                type="button"
                onClick={() => onNavigate(`/doctors/${doc.slug}`)}
                className="text-left bg-[#FAF7F0] rounded-xl p-6 border border-[#38283F]/10 hover:border-[#B9574B]/50 transition-colors cursor-pointer"
              >
                <p className="text-xs font-semibold text-[#B9574B]">{doc.credentials}</p>
                <h3 className="mt-1.5 text-lg font-bold text-[#38283F]">{doc.name}</h3>
                <p className="text-xs text-[#5D4D63] mt-1">{doc.role}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#FAF7F0] py-16">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#38283F]">
              Ready to introduce us to your companion?
            </h2>
            <p className="mt-2 text-sm text-[#5D4D63]">
              Visit us at {CLINIC_INFO.fullAddress} or book your first consultation online.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/book')}
              className="px-6 py-3.5 rounded-lg bg-[#B9574B] text-white text-sm font-semibold hover:bg-[#9D4439] transition-colors cursor-pointer whitespace-nowrap"
            >
              Book an Appointment
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/facilities')}
              className="px-6 py-3.5 rounded-lg border border-[#38283F]/20 text-sm font-semibold text-[#38283F] hover:bg-[#F1F3ED] transition-colors cursor-pointer whitespace-nowrap"
            >
              Tour Facilities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
