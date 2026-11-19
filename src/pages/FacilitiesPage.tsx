import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { CLINIC_FACILITIES, CLINIC_INFO } from '../data/clinicData';
import { EditorialImage, FacilityBlueprintGraphic } from '../components/BrandGraphics';

interface FacilitiesPageProps {
  onNavigate: (path: string) => void;
}

export function FacilitiesPage({ onNavigate }: FacilitiesPageProps) {
  return (
    <div>
      {/* Architectural Header */}
      <section className="bg-[#1B3831] text-[#FAF7F0] py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-[#F2C8B8]">Clinic Facilities & Gallery</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Designed Around Comfort, Care and Confidence.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#DFD3E0] leading-relaxed">
              Every room inside Vespera Veterinary Clinic balances hospital-grade hygiene and diagnostic precision with calm acoustics, warm daylight, and species-separated circulation.
            </p>
          </div>
        </div>
      </section>

      {/* Suite-by-Suite Asymmetric Editorial Gallery */}
      <section className="bg-[#FAF7F0] py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
          {CLINIC_FACILITIES.map((suite, idx) => (
            <article
              key={suite.id}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-[#38283F]/10 last:border-b-0 last:pb-0"
            >
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                {suite.image ? (
                  <EditorialImage
                    src={suite.image}
                    alt={suite.imageAlt}
                    fallbackTitle={suite.title}
                    className="aspect-[4/3] rounded-2xl"
                    imgClassName="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="aspect-[4/3] rounded-2xl bg-[#E4F0E8] p-8 flex items-center justify-center border border-[#38283F]/8">
                    <FacilityBlueprintGraphic blueprintKey={suite.blueprintKey} />
                  </div>
                )}
              </div>

              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-xs font-semibold text-[#B9574B] tabular-nums">
                  Suite {suite.number} · {suite.category}
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#38283F]">
                  {suite.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-[#1B3831]">{suite.subtitle}</p>
                <p className="mt-4 text-sm sm:text-base text-[#5D4D63] leading-relaxed">
                  {suite.description}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-[#38283F]">
                  {suite.details.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-[#B9574B] font-bold" aria-hidden="true">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-[#38283F]/10 flex items-start gap-2.5 text-xs text-[#5D4D63]">
                  <ShieldCheck className="w-4 h-4 text-[#1B3831] shrink-0 mt-0.5" />
                  <span>{suite.availabilityNote}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pre-visit Orientation CTA */}
      <section className="bg-[#E4F0E8] py-16 border-t border-[#38283F]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B3831]">
              Want a calm "Happy Visit" orientation first?
            </h2>
            <p className="mt-2 text-sm text-[#38283F]/85 leading-relaxed">
              For shy dogs or newly adopted companions, call {CLINIC_INFO.phoneDisplay} to arrange a brief, pressure-free lobby and exam room hello prior to their first clinical visit.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/book')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#B9574B] text-white text-sm font-semibold hover:bg-[#9D4439] transition-colors cursor-pointer whitespace-nowrap"
          >
            Schedule a Visit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
