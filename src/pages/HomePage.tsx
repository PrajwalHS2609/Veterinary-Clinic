import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowDown,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
  MapPin,
  Clock,
  Mail,
  Navigation,
  MessageCircle,
} from 'lucide-react';
import {
  CLINIC_IMAGES,
  CLINIC_INFO,
  TRUST_HIGHLIGHTS,
  VETERINARY_SERVICES,
  VETERINARY_DOCTORS,
  CARE_JOURNEY_STEPS,
  CLINIC_FACILITIES,
  WHY_CHOOSE_US,
  HEALTH_ARTICLES,
  CLIENT_STORIES,
  FAQ_ITEMS,
} from '../data/clinicData';
import {
  BotanicalSprig,
  CompanionLineArt,
  ServiceLineIcon,
  FacilityBlueprintGraphic,
  EditorialImage,
} from '../components/BrandGraphics';
import { AppointmentForm } from '../components/AppointmentForm';
import { ClinicMap } from '../components/ClinicMap';

interface HomePageProps {
  onNavigate: (path: string, prefill?: { service?: string; doctor?: string }) => void;
  quotaExceeded: boolean;
}

export function HomePage({ onNavigate, quotaExceeded }: HomePageProps) {
  const [activeJourneyIdx, setActiveJourneyIdx] = useState(0);
  const [activeFacilityId, setActiveFacilityId] = useState(CLINIC_FACILITIES[0].id);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);
  const [quickMessageSent, setQuickMessageSent] = useState(false);
  const [quickMessage, setQuickMessage] = useState({ name: '', email: '', message: '' });

  const activeFacility =
    CLINIC_FACILITIES.find((f) => f.id === activeFacilityId) || CLINIC_FACILITIES[0];
  const activeJourney = CARE_JOURNEY_STEPS[activeJourneyIdx];
  const activeStory = CLIENT_STORIES[activeStoryIdx];
  const featuredServices = VETERINARY_SERVICES.filter((s) => s.featured);
  const featuredArticle = HEALTH_ARTICLES[0];
  const secondaryArticles = HEALTH_ARTICLES.slice(1, 4);

  const handleQuickContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMessage.name.trim() || !quickMessage.email.trim() || !quickMessage.message.trim()) return;
    setQuickMessageSent(true);
  };

  return (
    <div>
      {/* SECTION 2: CREATIVE HERO EXPERIENCE */}
      <section className="relative bg-[#1B3831] text-[#FAF7F0] overflow-hidden">
        {/* Subtle organic botanical shapes */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#38283F]/30 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <BotanicalSprig
          className="hidden xl:block absolute top-10 right-8 w-44 h-44 opacity-20 pointer-events-none"
          color="#F2C8B8"
        />

        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 pt-12 pb-24 lg:pt-20 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Editorial Typography */}
            <div className="lg:col-span-6 xl:col-span-6 relative z-10">
              <p className="text-xs sm:text-sm font-medium text-[#F2C8B8] tracking-wide">
                Vespera Veterinary Clinic · Portland, Oregon
              </p>

              <h1 className="mt-5 text-[clamp(2.35rem,4.5vw,3.85rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white max-w-[16ch]">
                Exceptional Veterinary Care. Happier, Healthier Pets.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#DFD3E0] leading-relaxed max-w-[48ch]">
                Compassionate care, modern veterinary expertise and personalized attention for every member of your furry family.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/book')}
                  className="px-7 py-3.5 rounded-lg bg-[#B9574B] text-white text-sm font-semibold hover:bg-[#9D4439] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Book an Appointment
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="px-6 py-3.5 rounded-lg border border-white/25 text-[#FAF7F0] text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer inline-flex items-center gap-2 whitespace-nowrap"
                >
                  Explore Our Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Subtle quiet reassurance strip + scroll cue */}
              <div className="mt-12 pt-7 border-t border-white/12 flex flex-wrap items-center justify-between gap-6 text-xs text-[#DFD3E0]">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 tabular-nums">
                  <span>40-minute standard consultations</span>
                  <span className="text-white/30" aria-hidden="true">·</span>
                  <span>Separate canine & feline suites</span>
                </div>
                <a
                  href="#clinic-highlights"
                  className="inline-flex items-center gap-1.5 text-[#F2C8B8] hover:text-white transition-colors whitespace-nowrap"
                >
                  Scroll to explore
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Asymmetric Layered Photography Composition */}
            <div className="lg:col-span-6 xl:col-span-6 relative">
              <div className="relative max-w-[540px] mx-auto lg:ml-auto">
                {/* Soft organic geometric backing frame */}
                <div
                  className="absolute -inset-3 sm:-inset-4 rounded-t-[160px] rounded-b-[28px] border border-[#F2C8B8]/25 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Primary Hero Photograph with distinctive arch frame */}
                <EditorialImage
                  src={CLINIC_IMAGES.consultationHero}
                  alt="Veterinarian gently examining a calm Cavalier King Charles Spaniel during a consultation"
                  fallbackTitle="Compassionate Consultation"
                  className="aspect-[4/3] sm:aspect-[5/4] rounded-t-[150px] rounded-b-[24px] shadow-2xl"
                />

                {/* Secondary Overlapping Feline Portrait */}
                <div className="hidden sm:block absolute -top-6 -left-10 w-36 h-36 rounded-full p-1.5 bg-[#1B3831] shadow-xl border border-[#F2C8B8]/30">
                  <EditorialImage
                    src={CLINIC_IMAGES.catPortrait}
                    alt="Serene British Shorthair cat resting on a warm linen cushion"
                    fallbackTitle="Feline Care"
                    className="w-full h-full rounded-full"
                  />
                </div>

                {/* Floating Appointment Information Panel */}
                <div className="mt-5 sm:mt-0 sm:absolute sm:-bottom-8 sm:-left-8 max-w-[300px] bg-[#FAF7F0] text-[#38283F] rounded-xl p-5 shadow-xl border border-[#38283F]/10">
                  <p className="text-xs font-medium text-[#5D4D63]">Direct Clinic Desk</p>
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="mt-1 block text-lg font-bold text-[#1B3831] hover:text-[#B9574B] transition-colors tabular-nums"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                  <p className="mt-1.5 text-xs text-[#5D4D63] leading-relaxed tabular-nums">
                    Mon–Fri 8:00 AM – 7:00 PM · Sat 9:00 AM – 5:00 PM
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavigate('/book')}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#B9574B] hover:text-[#9D4439] cursor-pointer"
                  >
                    Request a consultation
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Distinctive Curved Lower Visual Boundary */}
        <div className="relative h-12 sm:h-16 w-full overflow-hidden leading-none" aria-hidden="true">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full block"
          >
            <path d="M0 80V32C360 88 1080 -12 1440 40V80H0Z" fill="#FAF7F0" />
          </svg>
        </div>
      </section>

      {/* SECTION 3: TRUST AND CLINIC HIGHLIGHTS */}
      <section id="clinic-highlights" className="bg-[#FAF7F0] py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#38283F]/12">
            <div className="max-w-xl">
              <p className="text-xs font-medium text-[#5D4D63]">Clinical Foundations</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#38283F] tracking-tight">
                Hospital-grade medicine in a calmer, hospitality-inspired space.
              </h2>
            </div>
            <p className="text-sm text-[#5D4D63] max-w-sm leading-relaxed">
              Designed for both pet parents seeking reassurance and clinicians committed to thorough, unhurried standards of care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#38283F]/10">
            {TRUST_HIGHLIGHTS.map((item) => (
              <div key={item.number} className="py-7 sm:px-5 first:sm:pl-0 last:sm:pr-0">
                <span className="text-xs font-semibold text-[#B9574B] tabular-nums">
                  {item.number}
                </span>
                <h3 className="mt-3 text-base font-bold text-[#38283F] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#5D4D63] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ABOUT THE CLINIC */}
      <section className="bg-[#FBF5F2] py-20 lg:py-28 border-y border-[#38283F]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Asymmetric Layered Images */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-12 gap-4 items-end">
                <div className="col-span-8">
                  <EditorialImage
                    src={CLINIC_IMAGES.doctorElena}
                    alt="Dr. Elena Vance walking through a bright veterinary clinic hallway holding a digital medical chart"
                    fallbackTitle="Dr. Elena Vance, DVM"
                    className="aspect-[3/4] rounded-2xl"
                    imgClassName="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="col-span-4 space-y-4">
                  <EditorialImage
                    src={CLINIC_IMAGES.catPortrait}
                    alt="Calm British Shorthair resting on natural linen cushion"
                    fallbackTitle="Calm Feline Care"
                    className="aspect-square rounded-2xl"
                  />
                  <div className="rounded-2xl bg-[#38283F] text-[#FAF7F0] p-5">
                    <p className="text-xs text-[#F2C8B8]">Care Philosophy</p>
                    <p className="mt-2 text-sm font-medium leading-relaxed">
                      Unhurried consultations where medicine and empathy carry equal weight.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-6">
              <p className="text-xs font-medium text-[#5D4D63]">About Vespera Veterinary Clinic</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#38283F] tracking-tight leading-[1.15]">
                More Than a Clinic. A Caring Partner in Your Pet’s Health.
              </h2>
              <p className="mt-6 text-base text-[#5D4D63] leading-relaxed">
                We created Vespera Veterinary Clinic to reimagine what a visit to the veterinarian feels like—replacing sterile waiting rooms and rushed 15-minute slots with quiet architectural acoustics, separate feline and canine suites, and evidence-based internal medicine.
              </p>
              <p className="mt-4 text-base text-[#5D4D63] leading-relaxed">
                Whether welcoming a newly adopted puppy, managing a senior cat’s metabolic health, or reviewing digital radiographs side-by-side, our doctors partner with you transparently at every milestone.
              </p>

              <div className="mt-8 pt-7 border-t border-[#38283F]/10 grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-bold text-[#1B3831]">Clinical Credibility</h3>
                  <p className="mt-1.5 text-sm text-[#5D4D63] leading-relaxed">
                    Guided by AAHA, AAFP, and ACVIM medical standards with full diagnostic transparency.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1B3831]">Fear-Free Atmosphere</h3>
                  <p className="mt-1.5 text-sm text-[#5D4D63] leading-relaxed">
                    Gentle pacing, warm padded surfaces, and species-separated acoustics reduce visit anxiety.
                  </p>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#38283F] text-white text-sm font-semibold hover:bg-[#50394F] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Read About Our Clinic
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/facilities')}
                  className="text-sm font-semibold text-[#1B3831] hover:text-[#B9574B] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Explore Clinical Facilities
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VETERINARY SERVICES (Visually Varied Editorial Layout) */}
      <section className="bg-[#FAF7F0] py-20 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[#5D4D63]">Our Veterinary Services</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#38283F] tracking-tight leading-[1.14]">
                Complete Care for Every Stage of Your Pet’s Life.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#B9574B] hover:text-[#9D4439] transition-colors cursor-pointer whitespace-nowrap"
            >
              View All 10 Veterinary Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Part A: Asymmetric Soft Mint Featured Clinical Pathways */}
          <div className="mt-12 grid lg:grid-cols-12 gap-6 items-stretch">
            {featuredServices.map((svc, idx) => (
              <div
                key={svc.slug}
                className={`${
                  idx === 0 ? 'lg:col-span-7 bg-[#E4F0E8]' : 'lg:col-span-5 bg-[#F1F3ED]'
                } rounded-2xl overflow-hidden border border-[#38283F]/8 flex flex-col`}
              >
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 text-xs text-[#5D4D63]">
                      <span className="font-semibold text-[#1B3831] tabular-nums">
                        {svc.number} · {svc.category}
                      </span>
                      <span className="tabular-nums">{svc.visitDuration}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-[#38283F] tracking-tight">
                      {svc.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#5D4D63] leading-relaxed max-w-[52ch]">
                      {svc.summary}
                    </p>
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => onNavigate(`/services/${svc.slug}`)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B3831] hover:text-[#B9574B] transition-colors cursor-pointer"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <EditorialImage
                  src={svc.image}
                  alt={svc.imageAlt || svc.title}
                  fallbackTitle={svc.title}
                  className={idx === 0 ? 'aspect-[16/9]' : 'aspect-[16/10]'}
                />
              </div>
            ))}
          </div>

          {/* Part B: Clean Numbered Horizontal Editorial Directory (Avoids repetitive card grid) */}
          <div className="mt-14 border-t border-[#38283F]/12">
            {VETERINARY_SERVICES.slice(2).map((svc) => (
              <div
                key={svc.slug}
                className="group py-6 border-b border-[#38283F]/10 grid md:grid-cols-12 gap-4 md:gap-6 items-center hover:bg-[#FBF5F2]/80 transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-xl"
              >
                <div className="md:col-span-1 flex items-center gap-3 text-[#1B3831]">
                  <span className="text-xs font-semibold text-[#B9574B] tabular-nums">
                    {svc.number}
                  </span>
                  <ServiceLineIcon iconKey={svc.iconKey} className="w-5 h-5 shrink-0" />
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg font-bold text-[#38283F] group-hover:text-[#1B3831] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#5D4D63] mt-0.5">{svc.category}</p>
                </div>
                <p className="md:col-span-6 text-sm text-[#5D4D63] leading-relaxed">
                  {svc.summary}
                </p>
                <div className="md:col-span-2 md:text-right">
                  <button
                    type="button"
                    onClick={() => onNavigate(`/services/${svc.slug}`)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#38283F] group-hover:text-[#B9574B] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR VETERINARY DOCTORS */}
      <section className="bg-[#F1F3ED] py-20 lg:py-28 border-t border-[#38283F]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-end pb-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-medium text-[#5D4D63]">Veterinary Medical Leadership</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#38283F] tracking-tight">
                Expert Hands. Compassionate Hearts.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="text-sm text-[#5D4D63] leading-relaxed lg:ml-auto max-w-md lg:text-left">
                Licensed doctors of veterinary medicine dedicated to diagnostic clarity, gentle handling, and long-term partnership with your family.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {VETERINARY_DOCTORS.map((doctor) => (
              <article
                key={doctor.slug}
                className="group bg-[#FAF7F0] rounded-2xl overflow-hidden border border-[#38283F]/10 flex flex-col"
              >
                <div className="overflow-hidden">
                  <EditorialImage
                    src={doctor.image}
                    alt={doctor.imageAlt}
                    fallbackTitle={`${doctor.name}, ${doctor.credentials}`}
                    className="aspect-[4/5]"
                    imgClassName={`w-full h-full object-cover ${doctor.portraitFocus || 'object-top'} transition-transform duration-500 group-hover:scale-[1.03]`}
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#B9574B]">
                      {doctor.credentials} · {doctor.experienceNote}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-[#38283F]">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#1B3831]">
                      {doctor.role}
                    </p>
                    <p className="mt-4 text-sm text-[#5D4D63] leading-relaxed">
                      {doctor.shortBio}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#38283F]/10 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => onNavigate(`/doctors/${doctor.slug}`)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#38283F] hover:text-[#B9574B] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      View Profile
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate('/book', { doctor: `${doctor.name}, ${doctor.credentials}` })
                      }
                      className="text-xs font-semibold text-[#1B3831] hover:text-[#B9574B] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Book Visit
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: THE PET CARE EXPERIENCE */}
      <section className="bg-[#38283F] text-[#FAF7F0] py-20 lg:py-28 relative overflow-hidden">
        <BotanicalSprig
          className="hidden lg:block absolute -left-8 bottom-8 w-52 h-52 opacity-15 pointer-events-none"
          color="#D7A3A5"
        />

        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#F2C8B8]">The Patient Journey</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Thoughtful Care at Every Visit.
            </h2>
            <p className="mt-4 text-base text-[#DFD3E0] leading-relaxed">
              Every appointment follows a calm, predictable five-step clinical rhythm designed to respect your pet’s nervous system and keep you fully informed.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Interactive Step List */}
            <div className="lg:col-span-6 space-y-2">
              {CARE_JOURNEY_STEPS.map((step, index) => {
                const isActive = index === activeJourneyIdx;
                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveJourneyIdx(index)}
                    className={`w-full text-left p-5 rounded-xl transition-colors cursor-pointer border ${
                      isActive
                        ? 'bg-[#50394F] border-[#F2C8B8]/40 text-white'
                        : 'bg-transparent border-white/10 text-[#DFD3E0] hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`text-sm font-bold tabular-nums ${
                          isActive ? 'text-[#F2C8B8]' : 'text-[#D7A3A5]/70'
                        }`}
                      >
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-white">{step.title}</h3>
                        <p className="text-xs text-[#DFD3E0] mt-0.5">{step.subtitle}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Spotlight Panel */}
            <div className="lg:col-span-6 bg-[#FAF7F0] text-[#38283F] rounded-2xl p-8 sm:p-10">
              <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#38283F]/10">
                <span className="text-xs font-semibold text-[#B9574B] tabular-nums">
                  Stage {activeJourney.number} of 05
                </span>
                <span className="text-xs text-[#5D4D63]">{activeJourney.subtitle}</span>
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-[#1B3831]">
                {activeJourney.title}
              </h3>

              <p className="mt-4 text-base text-[#38283F] leading-relaxed">
                {activeJourney.description}
              </p>

              <p className="mt-4 text-sm text-[#5D4D63] leading-relaxed bg-[#E4F0E8]/60 p-4 rounded-xl">
                {activeJourney.clinicalDetail}
              </p>

              <div className="mt-8 flex items-center justify-between gap-4 pt-4">
                <CompanionLineArt className="w-36 h-20 opacity-80" color="#38283F" />
                <button
                  type="button"
                  onClick={() => onNavigate('/book')}
                  className="px-5 py-3 rounded-lg bg-[#B9574B] text-white text-sm font-semibold hover:bg-[#9D4439] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Schedule First Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: MODERN CLINIC FACILITIES */}
      <section className="bg-[#FAF7F0] py-20 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[#5D4D63]">Clinic Environment & Standards</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#38283F] tracking-tight">
                Designed Around Comfort, Care and Confidence.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/facilities')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B3831] hover:text-[#B9574B] transition-colors cursor-pointer whitespace-nowrap"
            >
              Full Facilities Tour
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Suite Selector Tabs */}
          <div
            className="mt-10 flex flex-wrap gap-2 pb-2"
            role="tablist"
            aria-label="Clinic facility areas"
          >
            {CLINIC_FACILITIES.map((suite) => {
              const selected = suite.id === activeFacility.id;
              return (
                <button
                  key={suite.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveFacilityId(suite.id)}
                  className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    selected
                      ? 'bg-[#1B3831] text-white'
                      : 'bg-[#F1F3ED] text-[#38283F] hover:bg-[#E4F0E8]'
                  }`}
                >
                  {suite.number}. {suite.category}
                </button>
              );
            })}
          </div>

          {/* Asymmetric Architectural Display */}
          <div className="mt-6 grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7">
              {activeFacility.image ? (
                <EditorialImage
                  src={activeFacility.image}
                  alt={activeFacility.imageAlt}
                  fallbackTitle={activeFacility.title}
                  className="h-full min-h-[320px] lg:min-h-[420px] rounded-2xl"
                />
              ) : (
                <div className="h-full min-h-[320px] rounded-2xl bg-[#E4F0E8] p-8 flex items-center justify-center">
                  <FacilityBlueprintGraphic blueprintKey={activeFacility.blueprintKey} />
                </div>
              )}
            </div>

            <div className="lg:col-span-5 bg-[#FBF5F2] rounded-2xl p-7 sm:p-9 border border-[#38283F]/10 flex flex-col justify-between">
              <div>
                <div className="bg-[#FAF7F0] rounded-xl p-4 border border-[#38283F]/8 mb-6">
                  <FacilityBlueprintGraphic
                    blueprintKey={activeFacility.blueprintKey}
                    className="w-full h-36"
                  />
                </div>
                <p className="text-xs font-medium text-[#B9574B] tabular-nums">
                  Suite {activeFacility.number} · {activeFacility.category}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#38283F]">
                  {activeFacility.title}
                </h3>
                <p className="mt-3 text-sm text-[#5D4D63] leading-relaxed">
                  {activeFacility.description}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-[#38283F]">
                  {activeFacility.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2.5">
                      <span className="text-[#B9574B] font-bold" aria-hidden="true">·</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 pt-4 border-t border-[#38283F]/10 text-xs text-[#5D4D63]">
                {activeFacility.availabilityNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: WHY PET PARENTS CHOOSE US */}
      <section className="bg-[#E4F0E8] py-20 lg:py-28 border-y border-[#38283F]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="text-xs font-medium text-[#1B3831]">Why Pet Parents Choose Vespera</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1B3831] tracking-tight leading-[1.14]">
                Clinical rigor you can verify. Warmth your pet can feel.
              </h2>
              <p className="mt-4 text-base text-[#38283F]/80 leading-relaxed">
                Every protocol—from pre-visit record review to post-operative follow-ups—is built around clear communication and gentle animal handling.
              </p>
              <div className="mt-8">
                <CompanionLineArt className="w-52 h-32 opacity-75" color="#1B3831" />
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {WHY_CHOOSE_US.map((item) => (
                <div key={item.number} className="pt-5 border-t border-[#1B3831]/20">
                  <span className="text-xs font-bold text-[#B9574B] tabular-nums">
                    {item.number}
                  </span>
                  <h3 className="mt-2.5 text-lg font-bold text-[#1B3831]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#38283F]/85 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: PET HEALTH EDUCATION */}
      <section className="bg-[#FAF7F0] py-20 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[#5D4D63]">Pet Health Journal</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#38283F] tracking-tight">
                Helping You Make Better Decisions for Your Pet’s Health.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/blog')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#B9574B] hover:text-[#9D4439] transition-colors cursor-pointer whitespace-nowrap"
            >
              Browse All Guides
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Magazine Asymmetric Grid */}
          <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Featured Lead Article */}
            <article className="lg:col-span-7 group">
              <button
                type="button"
                onClick={() => onNavigate(`/blog/${featuredArticle.slug}`)}
                className="block w-full text-left cursor-pointer"
              >
                <EditorialImage
                  src={featuredArticle.image}
                  alt={featuredArticle.imageAlt}
                  fallbackTitle={featuredArticle.title}
                  className="aspect-[16/10] rounded-2xl"
                  imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="mt-5 flex items-center gap-2 text-xs text-[#5D4D63]">
                  <span className="font-semibold text-[#B9574B]">{featuredArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{featuredArticle.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.publishedDate}</span>
                </div>
                <h3 className="mt-2.5 text-2xl sm:text-3xl font-bold text-[#38283F] group-hover:text-[#1B3831] transition-colors leading-snug">
                  {featuredArticle.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#5D4D63] leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B3831] group-hover:text-[#B9574B] transition-colors">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </article>

            {/* Stacked Editorial Articles */}
            <div className="lg:col-span-5 divide-y divide-[#38283F]/12 flex flex-col justify-between">
              {secondaryArticles.map((article) => (
                <article key={article.slug} className="py-6 first:pt-0 last:pb-0 group">
                  <button
                    type="button"
                    onClick={() => onNavigate(`/blog/${article.slug}`)}
                    className="w-full text-left grid grid-cols-12 gap-4 items-center cursor-pointer"
                  >
                    <div className="col-span-4">
                      <EditorialImage
                        src={article.image}
                        alt={article.imageAlt}
                        fallbackTitle={article.category}
                        className="aspect-square rounded-xl"
                        imgClassName="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="col-span-8">
                      <div className="flex items-center gap-2 text-xs text-[#5D4D63]">
                        <span className="font-semibold text-[#B9574B]">{article.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{article.readTime}</span>
                      </div>
                      <h3 className="mt-1.5 text-base font-bold text-[#38283F] group-hover:text-[#1B3831] leading-snug">
                        {article.title}
                      </h3>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#1B3831] group-hover:text-[#B9574B]">
                        Read Article
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: PET PARENT STORIES */}
      <section className="bg-[#FBF5F2] py-20 lg:py-28 border-y border-[#38283F]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[#38283F]/10">
            <div>
              <p className="text-xs font-medium text-[#5D4D63]">Client Perspectives</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#38283F] tracking-tight">
                Stories of Care, Trust and Happy Tails.
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setActiveStoryIdx((prev) => (prev - 1 + CLIENT_STORIES.length) % CLIENT_STORIES.length)
                }
                aria-label="Previous client story"
                className="w-11 h-11 rounded-lg border border-[#38283F]/15 flex items-center justify-center text-[#38283F] hover:bg-[#38283F] hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-medium text-[#5D4D63] tabular-nums">
                0{activeStoryIdx + 1} / 0{CLIENT_STORIES.length}
              </span>
              <button
                type="button"
                onClick={() => setActiveStoryIdx((prev) => (prev + 1) % CLIENT_STORIES.length)}
                aria-label="Next client story"
                className="w-11 h-11 rounded-lg border border-[#38283F]/15 flex items-center justify-center text-[#38283F] hover:bg-[#38283F] hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <blockquote className="text-xl sm:text-2xl lg:text-[1.7rem] font-medium text-[#38283F] leading-[1.45]">
                “{activeStory.quote}”
              </blockquote>

              <div className="mt-8 pt-6 border-t border-[#38283F]/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-base font-bold text-[#1B3831]">{activeStory.clientName}</p>
                  <p className="text-sm text-[#5D4D63] mt-0.5">{activeStory.petDetails}</p>
                </div>
                <div className="text-xs text-[#5D4D63] sm:text-right">
                  <p className="font-medium text-[#38283F]">{activeStory.visitType}</p>
                  <p className="mt-0.5">{activeStory.consentNote}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              {activeStory.image ? (
                <EditorialImage
                  src={activeStory.image}
                  alt={activeStory.imageAlt || activeStory.petDetails}
                  fallbackTitle={activeStory.petDetails}
                  className="aspect-[4/3] rounded-2xl"
                />
              ) : (
                <div className="aspect-[4/3] rounded-2xl bg-[#E4F0E8] p-8 flex flex-col items-center justify-center text-center">
                  <CompanionLineArt className="w-40 h-24 opacity-80" color="#1B3831" />
                  <p className="mt-3 text-xs font-medium text-[#1B3831]">
                    {activeStory.petDetails}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: APPOINTMENT BOOKING */}
      <section className="bg-[#1B3831] text-[#FAF7F0] py-20 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium text-[#F2C8B8]">Schedule a Visit</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                Your Pet Deserves the Best Care. Let’s Get Started.
              </h2>
              <p className="mt-5 text-base text-[#DFD3E0] leading-relaxed">
                Request your preferred date and service below. Our client care team confirms every online booking personally and answers any preparation questions before you arrive.
              </p>

              <div className="mt-8 space-y-5 pt-7 border-t border-white/15 text-sm">
                <div>
                  <p className="text-xs text-[#F2C8B8]">Direct Reception Desk</p>
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="mt-1 inline-flex items-center gap-2 text-lg font-bold text-white hover:text-[#F2C8B8] tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#F2C8B8]" />
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-[#F2C8B8]">Daytime Urgent Triage</p>
                  <a
                    href={CLINIC_INFO.urgentPhoneHref}
                    className="mt-1 inline-block text-sm font-semibold text-white hover:text-[#F2C8B8] tabular-nums"
                  >
                    {CLINIC_INFO.urgentPhoneDisplay} (Mon–Sat during clinic hours)
                  </a>
                </div>
                <p className="text-xs text-[#DFD3E0]/85 leading-relaxed">
                  New patients welcome. Bringing prior veterinary records helps our doctors personalize your first consultation.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AppointmentForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQ */}
      <section className="bg-[#FAF7F0] py-20 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <p className="text-xs font-medium text-[#5D4D63]">Questions & Policies</p>
              <h2 className="mt-3 text-3xl font-bold text-[#38283F] tracking-tight">
                Clear Answers Before Your Visit.
              </h2>
              <p className="mt-4 text-sm text-[#5D4D63] leading-relaxed">
                Straightforward information about scheduling, first visits, clinical policies, and daytime urgent care.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/faq')}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B9574B] hover:text-[#9D4439] cursor-pointer"
              >
                Visit Full FAQ Page
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#38283F]/12 border-y border-[#38283F]/12">
              {FAQ_ITEMS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id}>
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                      aria-expanded={isOpen}
                      className="w-full py-5 flex items-center justify-between gap-6 text-left cursor-pointer"
                    >
                      <span className="text-base font-semibold text-[#38283F]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#B9574B] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-6 pr-8 text-sm text-[#5D4D63] leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: LOCATION AND CONTACT */}
      <section className="bg-[#F1F3ED] py-20 lg:py-28 border-t border-[#38283F]/8">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#5D4D63]">Visit Our Clinic</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#38283F] tracking-tight">
              Conveniently Located in Portland with Calm Ground-Level Access.
            </h2>
          </div>

          <div className="mt-10 grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Interactive Google Map */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <ClinicMap heightClass="h-[420px] lg:h-full min-h-[400px]" quotaExceeded={quotaExceeded} />
            </div>

            {/* Clinic Location & Quick Enquiry Panel */}
            <div className="lg:col-span-5 bg-[#FAF7F0] rounded-2xl p-7 sm:p-8 border border-[#38283F]/10 flex flex-col justify-between gap-7">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B9574B] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#38283F]">Clinic Address</p>
                    <p className="text-sm text-[#5D4D63] mt-0.5">{CLINIC_INFO.fullAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#B9574B] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#38283F]">Telephone & Urgent Line</p>
                    <p className="text-sm text-[#5D4D63] mt-0.5 tabular-nums">
                      <a href={CLINIC_INFO.phoneHref} className="hover:text-[#1B3831] font-medium">
                        {CLINIC_INFO.phoneDisplay}
                      </a>{' '}
                      · Urgent:{' '}
                      <a href={CLINIC_INFO.urgentPhoneHref} className="hover:text-[#1B3831]">
                        {CLINIC_INFO.urgentPhoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B9574B] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#38283F]">Email</p>
                    <a
                      href={`mailto:${CLINIC_INFO.email}`}
                      className="text-sm text-[#5D4D63] hover:text-[#1B3831] mt-0.5 block"
                    >
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B9574B] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#38283F]">Opening Hours</p>
                    <p className="text-sm text-[#5D4D63] mt-0.5 tabular-nums">
                      {CLINIC_INFO.hoursSummary}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={CLINIC_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1B3831] text-white text-xs font-semibold hover:bg-[#162E28] transition-colors whitespace-nowrap"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Get Directions
                  </a>
                  <a
                    href={CLINIC_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#38283F]/15 text-[#38283F] text-xs font-semibold hover:bg-[#E4F0E8] transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#1B3831]" />
                    WhatsApp Desk
                  </a>
                </div>
              </div>

              {/* Quick Contact Message Form */}
              <div className="pt-6 border-t border-[#38283F]/10">
                <h3 className="text-sm font-bold text-[#38283F]">Send a Quick Question</h3>
                {quickMessageSent ? (
                  <p className="mt-3 text-sm text-[#1B3831] bg-[#E4F0E8] p-4 rounded-xl">
                    Thank you, {quickMessage.name}. Our team has received your inquiry and will reply shortly.
                  </p>
                ) : (
                  <form onSubmit={handleQuickContactSubmit} className="mt-3 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        aria-label="Your name"
                        value={quickMessage.name}
                        onChange={(e) => setQuickMessage({ ...quickMessage, name: e.target.value })}
                        className="w-full rounded-lg bg-white border border-[#38283F]/15 px-3 py-2 text-xs text-[#38283F] focus:outline-none focus:border-[#B9574B]"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email address"
                        aria-label="Email address"
                        value={quickMessage.email}
                        onChange={(e) => setQuickMessage({ ...quickMessage, email: e.target.value })}
                        className="w-full rounded-lg bg-white border border-[#38283F]/15 px-3 py-2 text-xs text-[#38283F] focus:outline-none focus:border-[#B9574B]"
                      />
                    </div>
                    <textarea
                      rows={2}
                      required
                      placeholder="How can our clinical team help?"
                      aria-label="Message"
                      value={quickMessage.message}
                      onChange={(e) => setQuickMessage({ ...quickMessage, message: e.target.value })}
                      className="w-full rounded-lg bg-white border border-[#38283F]/15 px-3 py-2 text-xs text-[#38283F] focus:outline-none focus:border-[#B9574B] resize-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-lg bg-[#B9574B] text-white text-xs font-semibold hover:bg-[#9D4439] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
