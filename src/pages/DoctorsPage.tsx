import React from 'react';
import { ArrowRight, ArrowLeft, GraduationCap, Globe, Stethoscope } from 'lucide-react';
import { VETERINARY_DOCTORS, VETERINARY_SERVICES } from '../data/clinicData';
import { EditorialImage } from '../components/BrandGraphics';

interface DoctorsIndexProps {
  onNavigate: (path: string, prefill?: { service?: string; doctor?: string }) => void;
}

export function DoctorsIndexPage({ onNavigate }: DoctorsIndexProps) {
  return (
    <div>
      <section className="bg-[#F1F3ED] py-16 lg:py-24 border-b border-[#38283F]/10">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 max-w-3xl lg:max-w-[1240px]">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-[#B9574B]">Our Veterinary Doctors</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[#38283F] tracking-tight leading-[1.1]">
              Expert Hands. Compassionate Hearts.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5D4D63] leading-relaxed">
              Each veterinarian at Vespera brings accredited clinical training, continuing specialty education, and a calm, collaborative approach to companion animal care.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
          {VETERINARY_DOCTORS.map((doc, idx) => (
            <article
              key={doc.slug}
              className="grid lg:grid-cols-12 gap-10 items-center pb-16 border-b border-[#38283F]/10 last:border-b-0 last:pb-0"
            >
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <EditorialImage
                  src={doc.image}
                  alt={doc.imageAlt}
                  fallbackTitle={doc.name}
                  className="aspect-[4/5] rounded-2xl"
                  imgClassName={`w-full h-full object-cover ${doc.portraitFocus || 'object-top'}`}
                />
              </div>

              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-xs font-semibold text-[#B9574B]">
                  {doc.credentials} · {doc.experienceNote}
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#38283F]">{doc.name}</h2>
                <p className="mt-1 text-base font-medium text-[#1B3831]">{doc.role}</p>

                <p className="mt-5 text-base text-[#5D4D63] leading-relaxed">{doc.fullBio[0]}</p>

                <div className="mt-6 pt-5 border-t border-[#38283F]/10">
                  <p className="text-xs font-semibold text-[#38283F]">Clinical Focus Areas</p>
                  <ul className="mt-2.5 grid sm:grid-cols-2 gap-2 text-sm text-[#5D4D63]">
                    {doc.areasOfExpertise.map((area) => (
                      <li key={area} className="flex items-start gap-2">
                        <span className="text-[#B9574B] font-bold" aria-hidden="true">·</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate(`/doctors/${doc.slug}`)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#38283F] text-white text-sm font-semibold hover:bg-[#50394F] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Full Biography & Credentials
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate('/book', { doctor: `${doc.name}, ${doc.credentials}` })
                    }
                    className="px-5 py-3 rounded-lg border border-[#38283F]/20 text-sm font-semibold text-[#1B3831] hover:bg-[#E4F0E8] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Book with {doc.name.split(' ')[0]} {doc.name.split(' ')[1]}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

interface DoctorDetailProps {
  slug: string;
  onNavigate: (path: string, prefill?: { service?: string; doctor?: string }) => void;
}

export function DoctorDetailPage({ slug, onNavigate }: DoctorDetailProps) {
  const doctor = VETERINARY_DOCTORS.find((d) => d.slug === slug);
  if (!doctor) return null;

  const ledServices = VETERINARY_SERVICES.filter((s) => s.leadDoctorSlug === doctor.slug);

  return (
    <div>
      <section className="bg-[#FBF5F2] pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-[#38283F]/10">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('/doctors')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5D4D63] hover:text-[#38283F] cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Veterinary Doctors
          </button>

          <div className="mt-8 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <EditorialImage
                src={doctor.image}
                alt={doctor.imageAlt}
                fallbackTitle={doctor.name}
                className="aspect-[4/5] rounded-2xl"
                imgClassName={`w-full h-full object-cover ${doctor.portraitFocus || 'object-top'}`}
              />
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-semibold text-[#B9574B]">
                {doctor.credentials} · {doctor.experienceNote}
              </p>
              <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-[#38283F] tracking-tight">
                {doctor.name}
              </h1>
              <p className="mt-2 text-lg font-medium text-[#1B3831]">{doctor.role}</p>

              <blockquote className="mt-7 p-6 rounded-xl bg-[#E4F0E8]/70 text-base font-medium text-[#1B3831] leading-relaxed">
                “{doctor.carePhilosophy}”
              </blockquote>

              <div className="mt-7 space-y-4 text-base text-[#5D4D63] leading-relaxed">
                {doctor.fullBio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="mt-9 grid sm:grid-cols-2 gap-8 pt-8 border-t border-[#38283F]/10">
                <div>
                  <h2 className="text-sm font-bold text-[#38283F] inline-flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#B9574B]" />
                    Education & Credentials
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-[#5D4D63]">
                    {doctor.education.map((edu) => (
                      <li key={edu}>{edu}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-sm font-bold text-[#38283F] inline-flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-[#B9574B]" />
                    Areas of Clinical Expertise
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-[#5D4D63]">
                    {doctor.areasOfExpertise.map((area) => (
                      <li key={area} className="flex items-start gap-2">
                        <span className="text-[#B9574B] font-bold" aria-hidden="true">·</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-[#5D4D63] inline-flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#1B3831]" />
                    Languages: {doctor.languages.join(', ')}
                  </p>
                </div>
              </div>

              <div className="mt-9">
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('/book', { doctor: `${doctor.name}, ${doctor.credentials}` })
                  }
                  className="px-7 py-3.5 rounded-lg bg-[#B9574B] text-white text-sm font-semibold hover:bg-[#9D4439] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Request Appointment with {doctor.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {ledServices.length > 0 && (
        <section className="bg-[#FAF7F0] py-16">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#38283F]">
              Services Led by {doctor.name}
            </h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {ledServices.map((svc) => (
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
      )}
    </div>
  );
}
