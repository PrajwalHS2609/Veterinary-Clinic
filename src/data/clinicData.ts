export interface VeterinaryService {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: 'Preventive' | 'Clinical & Diagnostics' | 'Surgery & Dental' | 'Life Stage';
  summary: string;
  description: string;
  iconKey:
    | 'consultation'
    | 'preventive'
    | 'vaccination'
    | 'diagnostics'
    | 'dental'
    | 'surgery'
    | 'nutrition'
    | 'dermatology'
    | 'senior'
    | 'urgent';
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  visitDuration: string;
  leadDoctorSlug: string;
  highlights: string[];
  whatToExpect: string[];
  whenToSchedule: string[];
}

export interface VeterinaryDoctor {
  slug: string;
  name: string;
  credentials: string;
  role: string;
  specialty: string;
  experienceNote: string;
  image?: string;
  imageAlt: string;
  portraitFocus?: string;
  education: string[];
  languages: string[];
  areasOfExpertise: string[];
  shortBio: string;
  fullBio: string[];
  carePhilosophy: string;
}

export interface FacilitySuite {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image?: string;
  imageAlt: string;
  blueprintKey: 'reception' | 'consultation' | 'diagnostics' | 'treatment' | 'surgery' | 'recovery';
  availabilityNote: string;
}

export interface CareJourneyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  clinicalDetail: string;
}

export interface HealthArticle {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedDate: string;
  authorSlug: string;
  image?: string;
  imageAlt: string;
  featured?: boolean;
  keyTakeaways: string[];
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export interface ClientStory {
  id: string;
  quote: string;
  clientName: string;
  petDetails: string;
  visitType: string;
  consentNote: string;
  image?: string;
  imageAlt?: string;
}

export interface FaqItem {
  id: string;
  category: 'Appointments' | 'Clinical Care' | 'Clinic Policies';
  question: string;
  answer: string;
}

export const CLINIC_IMAGES = {
  consultationHero: '/src/assets/images/about_vet_consultation_1795102597519.jpg',
  catPortrait: '/src/assets/images/hero_cat_portrait_1795102661521.jpg',
  doctorElena: '/src/assets/images/doctor_elena_1795102602720.jpg',
  doctorAmara: '/src/assets/images/doctor_amara_1795102605963.jpg',
} as const;

export const CLINIC_INFO = {
  name: 'Vespera Veterinary Clinic',
  shortName: 'Vespera Veterinary',
  tagline: 'Companion Animal Medicine & Preventive Hospital',
  phoneDisplay: '(503) 555-0194',
  phoneHref: 'tel:+15035550194',
  urgentPhoneDisplay: '(503) 555-0199',
  urgentPhoneHref: 'tel:+15035550199',
  whatsappHref: 'https://wa.me/15035550194?text=Hello%20Vespera%20Veterinary%20Clinic%2C%20I%20would%20like%20to%20request%20an%20appointment.',
  email: 'care@vesperavet.com',
  addressLine1: '418 Alder Grove Avenue, Suite 100',
  addressLine2: 'Portland, OR 97205',
  fullAddress: '418 Alder Grove Avenue, Suite 100, Portland, OR 97205',
  coordinates: {
    lat: 45.5231,
    lng: -122.6819,
  },
  hoursSummary: 'Mon–Fri 8:00 AM – 7:00 PM · Sat 9:00 AM – 5:00 PM',
  hoursDetailed: [
    { days: 'Monday – Friday', hours: '8:00 AM – 7:00 PM' },
    { days: 'Saturday', hours: '9:00 AM – 5:00 PM' },
    { days: 'Sunday', hours: 'Closed (24/7 Partner Emergency Referral)' },
  ],
  emergencyNote:
    'Daytime urgent care is available during operating hours by calling ahead. After-hours emergencies are coordinated directly with DoveLewis 24/7 Emergency Animal Hospital.',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=45.5231,-122.6819',
};

export const TRUST_HIGHLIGHTS = [
  {
    number: '01',
    title: 'Experienced Veterinary Team',
    description:
      'Licensed doctors of veterinary medicine with focused backgrounds in internal medicine, preventive care, and soft-tissue surgery.',
  },
  {
    number: '02',
    title: 'Modern Clinical Facilities',
    description:
      'Purpose-built acoustic rooms, separated canine and feline consultation areas, and hygienic in-house diagnostic suites.',
  },
  {
    number: '03',
    title: 'Personalized Pet Care',
    description:
      'Unhurried 40-minute standard consultations designed around your companion’s temperament, medical history, and daily routines.',
  },
  {
    number: '04',
    title: 'Preventive Healthcare',
    description:
      'Evidence-based screening, individualized vaccination protocols, and life-stage wellness planning to identify subtle changes early.',
  },
  {
    number: '05',
    title: 'Compassionate Treatment',
    description:
      'Low-stress handling techniques, gentle pacing, and transparent clinical conversations so every visit feels calm and reassuring.',
  },
];

export const VETERINARY_SERVICES: VeterinaryService[] = [
  {
    slug: 'general-consultation',
    number: '01',
    title: 'General Veterinary Consultation',
    shortTitle: 'General Consultation',
    category: 'Clinical & Diagnostics',
    summary:
      'Comprehensive nose-to-tail physical examinations with unhurried time for questions, behavioral observation, and clear medical guidance.',
    description:
      'Every clinical relationship begins with attentive listening and a thorough physical assessment. Our veterinarians evaluate cardiovascular, respiratory, musculoskeletal, ophthalmic, and dermatologic health while keeping your pet calm and comfortable.',
    iconKey: 'consultation',
    featured: true,
    image: CLINIC_IMAGES.consultationHero,
    imageAlt: 'Veterinarian gently examining a Cavalier King Charles Spaniel on a padded exam table',
    visitDuration: '40 minutes',
    leadDoctorSlug: 'dr-elena-vance',
    highlights: [
      'Complete nose-to-tail physical examination',
      'Weight, body condition, and muscle mass assessment',
      'Written visit summary and individualized next steps',
      'Low-stress handling tailored for shy or anxious pets',
    ],
    whatToExpect: [
      'We begin with a quiet settling-in period in a species-appropriate room so your pet can acclimate before hands-on examination.',
      'Your doctor reviews medical records, diet, lifestyle, and any subtle changes you have observed at home.',
      'Findings are explained clearly without rushing, accompanied by transparent cost estimates for any recommended tests.',
    ],
    whenToSchedule: [
      'Establishing care with a new primary veterinary clinic',
      'Annual or semi-annual wellness reviews',
      'Evaluating changes in appetite, mobility, energy, or digestion',
    ],
  },
  {
    slug: 'preventive-healthcare',
    number: '02',
    title: 'Preventive Healthcare',
    shortTitle: 'Preventive Care',
    category: 'Preventive',
    summary:
      'Proactive wellness plans, parasite protection, and baseline laboratory screening tailored to your pet’s age, breed, and lifestyle.',
    description:
      'Preventive medicine focuses on preserving comfort and longevity long before illness becomes visible. We design structured annual and semi-annual wellness schedules that pair physical exams with targeted bloodwork and regional parasite prevention.',
    iconKey: 'preventive',
    featured: true,
    image: CLINIC_IMAGES.catPortrait,
    imageAlt: 'Calm British Shorthair cat resting comfortably on a linen cushion in natural light',
    visitDuration: '30–40 minutes',
    leadDoctorSlug: 'dr-amara-okafor',
    highlights: [
      'Individualized annual and semi-annual health roadmaps',
      'Baseline hematology, organ chemistry, and urinalysis screening',
      'Heartworm, flea, tick, and intestinal parasite protocols',
      'Microchipping and preventive lifestyle counseling',
    ],
    whatToExpect: [
      'We assess regional exposure risks, travel habits, and indoor/outdoor routines before recommending preventive medications.',
      'Baseline laboratory values help us detect early kidney, liver, thyroid, or metabolic shifts with precision.',
    ],
    whenToSchedule: [
      'Every 12 months for healthy adult dogs and cats',
      'Every 6 months for senior companions aged 7 and older',
      'Before seasonal travel, boarding, or welcoming a new household pet',
    ],
  },
  {
    slug: 'vaccination-protocols',
    number: '03',
    title: 'Vaccination Protocols',
    shortTitle: 'Vaccination',
    category: 'Preventive',
    summary:
      'Core and lifestyle-specific immunizations administered gently according to current AAHA and AAFP veterinary guidelines.',
    description:
      'Rather than following a rigid one-size-fits-all schedule, we evaluate your companion’s real-world environment to balance essential protection with minimal vaccine stress. Every immunization visit includes a full physical exam to ensure your pet is healthy enough to respond well.',
    iconKey: 'vaccination',
    visitDuration: '30 minutes',
    leadDoctorSlug: 'dr-amara-okafor',
    highlights: [
      'Core canine (DHPP, Rabies) and feline (FVRCP, Rabies) vaccines',
      'Lifestyle immunizations (Bordetella, Leptospirosis, FeLV) when indicated',
      'Puppy and kitten primary immunization series planning',
      'Digital vaccination certificates for boarding and travel',
    ],
    whatToExpect: [
      'A pre-vaccination physical examination confirms normal temperature, lymph nodes, and overall vitality.',
      'We use ultra-fine needles, calming pheromones, and gentle distraction techniques to minimize discomfort.',
    ],
    whenToSchedule: [
      'Puppy and kitten series beginning at 8 weeks of age',
      'Scheduled adult booster intervals based on prior records',
      'At least two weeks prior to grooming, daycare, or boarding',
    ],
  },
  {
    slug: 'diagnostic-services',
    number: '04',
    title: 'Diagnostic Services',
    shortTitle: 'Diagnostics',
    category: 'Clinical & Diagnostics',
    summary:
      'In-house clinical pathology, digital radiography, and point-of-care ultrasound to deliver accurate answers promptly.',
    description:
      'Accurate diagnosis is the foundation of responsible veterinary medicine. Our clinic maintains on-site hematology and serum chemistry analyzers alongside low-dose digital radiography and abdominal ultrasound, supported by board-certified radiologist review when complex interpretation is needed.',
    iconKey: 'diagnostics',
    visitDuration: '45–60 minutes',
    leadDoctorSlug: 'dr-elena-vance',
    highlights: [
      'In-house blood chemistry, CBC, and urinalysis panels',
      'Low-dose digital radiography with rapid image review',
      'Point-of-care diagnostic ultrasound assessments',
      'Direct coordination with reference laboratories for specialized assays',
    ],
    whatToExpect: [
      'Many routine blood panels are processed on-site so your doctor can discuss findings during or shortly after your visit.',
      'We review diagnostic images together on screen so you understand exactly what we see and why each next step matters.',
    ],
    whenToSchedule: [
      'Pre-anesthetic safety screening prior to surgery or dentistry',
      'Investigating unexplained weight changes, coughing, or digestive signs',
      'Routine monitoring for chronic endocrine, cardiac, or renal conditions',
    ],
  },
  {
    slug: 'dental-care',
    number: '05',
    title: 'Dental Care & Oral Health',
    shortTitle: 'Dental Care',
    category: 'Surgery & Dental',
    summary:
      'Comprehensive oral exams, ultrasonic scaling, polishing, and dental radiography under carefully monitored anesthesia.',
    description:
      'Oral discomfort is one of the most frequently overlooked sources of chronic pain in dogs and cats. Our dental care program combines thorough awake oral checks with full-mouth anesthetized cleanings and intraoral X-rays to identify sub-gingival disease early.',
    iconKey: 'dental',
    visitDuration: 'Half-day outpatient procedure',
    leadDoctorSlug: 'dr-marcus-chen',
    highlights: [
      'Full-mouth dental radiography to evaluate tooth roots',
      'Ultrasonic scaling, sub-gingival curettage, and enamel polishing',
      'Dedicated anesthetic monitoring and individualized pain management',
      'Practical at-home brushing and dental diet guidance',
    ],
    whatToExpect: [
      'Every dental procedure begins with pre-anesthetic bloodwork and a tailored safety protocol.',
      'Your pet recovers in a warm, quiet suite under continuous nursing observation before going home the same afternoon.',
    ],
    whenToSchedule: [
      'Persistent bad breath, visible tartar buildup, or red gums',
      'Reluctance to chew firm kibble or dropping food while eating',
      'Annual oral health grading during routine wellness exams',
    ],
  },
  {
    slug: 'surgical-procedures',
    number: '06',
    title: 'Surgical Procedures',
    shortTitle: 'Surgery',
    category: 'Surgery & Dental',
    summary:
      'Soft-tissue surgery, spay and neuter procedures, and mass removals performed with modern anesthetic monitoring and pain control.',
    description:
      'When surgery is recommended, safety, sterile technique, and proactive comfort guide every decision. Our surgical suite utilizes multi-parameter monitoring, heated surgical tables, and individualized multimodal analgesia before, during, and after every procedure.',
    iconKey: 'surgery',
    visitDuration: 'Same-day outpatient surgical care',
    leadDoctorSlug: 'dr-marcus-chen',
    highlights: [
      'Spay, neuter, and elective soft-tissue procedures',
      'Diagnostic biopsies and cutaneous mass removals',
      'Individualized anesthesia with continuous ECG, capnography, and SpO2 monitoring',
      'Detailed home recovery plan with scheduled post-operative rechecks',
    ],
    whatToExpect: [
      'Pre-surgical consultations walk you through fasting instructions, anesthetic protocols, and expected recovery timelines.',
      'We call you directly as soon as your pet wakes comfortably from anesthesia and send clear written home-care instructions.',
    ],
    whenToSchedule: [
      'Elective spay or neuter at the medically appropriate age for your pet’s breed',
      'New or changing skin lumps requiring biopsy or excision',
      'Soft-tissue procedures recommended following diagnostic evaluation',
    ],
  },
  {
    slug: 'pet-nutrition-guidance',
    number: '07',
    title: 'Pet Nutrition Guidance',
    shortTitle: 'Pet Nutrition',
    category: 'Preventive',
    summary:
      'Evidence-based dietary planning for growth, healthy weight management, food sensitivities, and therapeutic medical diets.',
    description:
      'Nutrition shapes immune resilience, joint longevity, digestive stability, and skin health. Rather than relying on marketing trends, we evaluate caloric needs, life stage, and clinical lab markers to recommend complete, balanced diets that fit your household.',
    iconKey: 'nutrition',
    visitDuration: '30 minutes',
    leadDoctorSlug: 'dr-amara-okafor',
    highlights: [
      'Precise daily caloric calculations and portion guidance',
      'Therapeutic diets for kidney, urinary, gastrointestinal, and dermatologic needs',
      'Safe weight-loss pacing with gentle check-in weigh-ins',
      'Puppy, kitten, and large-breed growth nutrition planning',
    ],
    whatToExpect: [
      'Bring a list or photo of your pet’s current food, treats, and supplements so we can calculate exact nutrient intake.',
      'You leave with a realistic feeding roadmap designed around sustainable daily habits.',
    ],
    whenToSchedule: [
      'Gradual weight gain or unexpected weight loss',
      'Transitioning between puppy/kitten, adult, and senior life stages',
      'Suspected food sensitivities or chronic digestive upset',
    ],
  },
  {
    slug: 'dermatology-skin-care',
    number: '08',
    title: 'Dermatology & Skin Care',
    shortTitle: 'Dermatology',
    category: 'Clinical & Diagnostics',
    summary:
      'Targeted evaluation for itching, recurring ear infections, seasonal allergies, and coat conditions using on-site cytology.',
    description:
      'Chronic scratching, paw licking, and recurring ear discomfort can significantly diminish a pet’s quality of life. We use systematic diagnostics—including skin cytology, ear microscopy, and structured diet trials—to address root causes rather than temporary symptom relief.',
    iconKey: 'dermatology',
    visitDuration: '40 minutes',
    leadDoctorSlug: 'dr-elena-vance',
    highlights: [
      'In-house skin and ear cytology for rapid infection identification',
      'Environmental and food allergy management pathways',
      'Gentle medicated topical therapies and barrier-repair protocols',
      'Long-term flare prevention plans tailored to Pacific Northwest seasons',
    ],
    whatToExpect: [
      'We examine coat quality, paw pads, skin folds, and ear canals using illuminated video otoscopy when appropriate.',
      'Treatment plans prioritize comfort while minimizing unnecessary steroid reliance.',
    ],
    whenToSchedule: [
      'Frequent scratching, head shaking, or chewing at paws',
      'Patchy hair loss, redness, or recurring ear odor',
      'Seasonal allergy flares that return each spring or autumn',
    ],
  },
  {
    slug: 'senior-pet-care',
    number: '09',
    title: 'Senior Pet Care',
    shortTitle: 'Senior Care',
    category: 'Life Stage',
    summary:
      'Thoughtful mobility support, pain management, cognitive wellness, and biannual health screening for aging dogs and cats.',
    description:
      'Growing older is not a disease, yet senior pets benefit deeply from closer clinical partnership. Our senior care visits focus on joint comfort, blood pressure monitoring, kidney and thyroid screening, and gentle home adaptations that preserve joy and independence.',
    iconKey: 'senior',
    visitDuration: '45 minutes',
    leadDoctorSlug: 'dr-elena-vance',
    highlights: [
      'Biannual comprehensive physical and orthopedic mobility checks',
      'Blood pressure checks and senior organ function panels',
      'Multimodal osteoarthritis and comfort management',
      'Compassionate quality-of-life conversations and guidance',
    ],
    whatToExpect: [
      'Non-slip padded mats and floor-level examinations ensure stiff or arthritic companions never struggle on slick tables.',
      'We track subtle trends over time so comfort interventions begin early.',
    ],
    whenToSchedule: [
      'Every six months once dogs or cats reach age 7 (or age 5–6 for giant breeds)',
      'Hesitation on stairs, stiffness after rest, or changes in sleep cycles',
      'Increased thirst, changes in litter box habits, or mild weight loss',
    ],
  },
  {
    slug: 'urgent-daytime-care',
    number: '10',
    title: 'Daytime Urgent Veterinary Care',
    shortTitle: 'Urgent Care',
    category: 'Clinical & Diagnostics',
    summary:
      'Same-day clinical assessment during operating hours for sudden illness, minor injuries, or concerning symptoms.',
    description:
      'When your pet is unexpectedly unwell during clinic hours, timely triage provides clarity and relief. We reserve dedicated same-day urgent care windows Monday through Saturday and coordinate directly with 24/7 specialty emergency hospitals whenever overnight hospitalization is required.',
    iconKey: 'urgent',
    visitDuration: 'Same-day triage',
    leadDoctorSlug: 'dr-marcus-chen',
    highlights: [
      'Dedicated daytime urgent assessment slots for sudden symptoms',
      'Immediate clinical triage by telephone before you travel',
      'On-site diagnostics, fluid therapy, and wound management',
      'Seamless record transfer to 24/7 partner hospitals if overnight care is needed',
    ],
    whatToExpect: [
      'Please call our urgent care line at (503) 555-0199 before arriving so our clinical team can prepare an examination room.',
      'If your pet requires intensive 24-hour critical care or after-hours stabilization, we immediately guide you to our partner emergency hospital.',
    ],
    whenToSchedule: [
      'Sudden vomiting, diarrhea, or marked lethargy',
      'Minor lacerations, torn nails, or acute lameness',
      'Eye squinting, sudden hives, or suspected ingestion of non-food items',
    ],
  },
];

export const VETERINARY_DOCTORS: VeterinaryDoctor[] = [
  {
    slug: 'dr-elena-vance',
    name: 'Dr. Elena Vance',
    credentials: 'DVM, DACVIM (SAIM)',
    role: 'Medical Director & Internal Medicine Lead',
    specialty: 'Small Animal Internal Medicine & Senior Care',
    experienceNote: 'Board-Certified Veterinary Internist',
    image: CLINIC_IMAGES.doctorElena,
    imageAlt: 'Portrait of Dr. Elena Vance wearing a white clinical coat over deep plum scrubs with a stethoscope',
    portraitFocus: 'object-top',
    education: [
      'Doctor of Veterinary Medicine — Cornell University College of Veterinary Medicine',
      'Small Animal Internal Medicine Residency — University of California, Davis',
      'Diplomate, American College of Veterinary Internal Medicine (DACVIM)',
    ],
    languages: ['English', 'Spanish'],
    areasOfExpertise: [
      'Complex endocrine & metabolic conditions',
      'Gastrointestinal & hepatic medicine',
      'Diagnostic abdominal ultrasound',
      'Senior pet longevity & chronic care planning',
    ],
    shortBio:
      'Dr. Vance founded Vespera Veterinary Clinic to bridge hospital-grade internal medicine with calm, unhurried primary consultations.',
    fullBio: [
      'Dr. Elena Vance leads clinical standards at Vespera Veterinary Clinic with a focus on thoughtful diagnostics and clear, collaborative decision-making. After completing her veterinary degree at Cornell and residency training at UC Davis, she practiced in multi-specialty referral hospitals before establishing a clinic where families could access rigorous medicine in a calmer, hospitality-inspired setting.',
      'She is especially passionate about guiding pet parents through chronic conditions—such as kidney disease, diabetes, and inflammatory bowel disorders—by translating complex laboratory results into practical, compassionate daily care.',
    ],
    carePhilosophy:
      'Every pet deserves the same diagnostic rigor we expect in human medicine, delivered in an environment quiet enough for them to feel safe.',
  },
  {
    slug: 'dr-amara-okafor',
    name: 'Dr. Amara Okafor',
    credentials: 'DVM, Fear Free Certified',
    role: 'Lead Preventive & Feline Medicine Veterinarian',
    specialty: 'Preventive Care, Feline Medicine & Clinical Nutrition',
    experienceNote: 'Fear Free Certified Practitioner',
    image: CLINIC_IMAGES.doctorAmara,
    imageAlt: 'Portrait of Dr. Amara Okafor wearing a crisp white lab coat over plum scrubs in a sunlit clinic',
    portraitFocus: 'object-top',
    education: [
      'Doctor of Veterinary Medicine — University of Pennsylvania School of Veterinary Medicine',
      'Certificate in Feline-Friendly Practice — American Association of Feline Practitioners',
      'Fear Free Veterinary Certification — Level 3',
    ],
    languages: ['English', 'French'],
    areasOfExpertise: [
      'Low-stress feline consultations & behavior-conscious handling',
      'Puppy and kitten developmental wellness',
      'Evidence-based clinical nutrition & weight management',
      'Individualized immunization & parasite protocols',
    ],
    shortBio:
      'Dr. Okafor brings gentle clinical precision to lifelong preventive medicine, feline health, and stress-minimized veterinary visits.',
    fullBio: [
      'Dr. Amara Okafor believes that a pet’s emotional comfort directly improves the quality of their medical exam. Trained at the University of Pennsylvania, she has dedicated her career to preventive healthcare, feline internal wellness, and evidence-based nutrition.',
      'Pet parents frequently remark on how calm their cats and sensitive dogs remain in her examination rooms—where slow movements, quiet voices, and feline-specific acoustic design replace the clinical rush of traditional clinics.',
    ],
    carePhilosophy:
      'Preventive medicine works best when pets feel genuinely respected and families feel heard without judgment.',
  },
  {
    slug: 'dr-marcus-chen',
    name: 'Dr. Marcus Chen',
    credentials: 'DVM, MS',
    role: 'Lead Veterinary Surgeon & Dentistry Clinician',
    specialty: 'Soft-Tissue Surgery, Veterinary Dentistry & Urgent Care',
    experienceNote: 'Advanced Soft-Tissue & Oral Surgery Focus',
    image: CLINIC_IMAGES.consultationHero,
    imageAlt: 'Veterinary surgical and clinical consultation team caring for a companion dog',
    portraitFocus: 'object-center',
    education: [
      'Doctor of Veterinary Medicine — Oregon State University Carlson College of Veterinary Medicine',
      'Master of Science in Comparative Biomedical Sciences — Oregon State University',
      'Advanced Continuing Training in Veterinary Dentistry & Intraoral Radiography',
    ],
    languages: ['English', 'Mandarin'],
    areasOfExpertise: [
      'Soft-tissue surgery & minimally invasive biopsies',
      'Comprehensive veterinary dentistry & oral surgery',
      'Multimodal anesthesia & proactive pain management',
      'Daytime urgent care triage & wound reconstruction',
    ],
    shortBio:
      'Dr. Chen oversees surgical safety protocols, anesthetic monitoring, and comprehensive dental care with meticulous attention to comfort.',
    fullBio: [
      'Dr. Marcus Chen brings steady surgical precision and an unwavering commitment to pain management to Vespera’s surgical and dental suites. A graduate of Oregon State University, he focuses on safe, well-monitored outpatient procedures and thorough pre-operative communication.',
      'Before every surgery or dental procedure, Dr. Chen walks pet parents through the exact anesthetic monitoring protocol and recovery expectations so families feel informed and reassured throughout the day.',
    ],
    carePhilosophy:
      'Safe anesthesia and gentle pain control are not extras—they are the ethical standard for every surgical and dental patient.',
  },
];

export const CARE_JOURNEY_STEPS: CareJourneyStep[] = [
  {
    number: '01',
    title: 'Understanding Your Pet',
    subtitle: 'Pre-visit preparation & calm arrival',
    description:
      'Before you even step inside, we review prior medical records and note your pet’s temperament, sensitivities, and preferred comfort cues.',
    clinicalDetail:
      'Species-separated arrival seating and pheromone-diffused suites minimize waiting room stress from the first minute.',
  },
  {
    number: '02',
    title: 'Detailed Consultation',
    subtitle: 'Unhurried 40-minute clinical assessment',
    description:
      'Your veterinarian conducts a thorough nose-to-tail examination at your pet’s pace—on a warm padded table or right beside you on a cushioned mat.',
    clinicalDetail:
      'Every clinical finding is shared in plain language while we listen closely to the subtle habits you notice at home.',
  },
  {
    number: '03',
    title: 'Personalized Care Plan',
    subtitle: 'Clear options & transparent estimates',
    description:
      'Together, we outline prioritized preventive or diagnostic recommendations tailored to your companion’s age, breed, and lifestyle.',
    clinicalDetail:
      'Written treatment plans include itemized cost clarity so you can make confident decisions without pressure.',
  },
  {
    number: '04',
    title: 'Treatment and Guidance',
    subtitle: 'Gentle procedures & practical coaching',
    description:
      'Whether administering a gentle immunization, processing in-house diagnostics, or performing dental care, comfort remains central.',
    clinicalDetail:
      'You receive step-by-step medication demonstrations and a printed & digital home-care summary before leaving.',
  },
  {
    number: '05',
    title: 'Continued Health Support',
    subtitle: 'Proactive follow-ups & lifelong partnership',
    description:
      'Our clinical team checks in after procedures or new treatments and keeps preventive milestones organized across every life stage.',
    clinicalDetail:
      'Direct email and phone follow-ups ensure questions between appointments never go unanswered.',
  },
];

export const CLINIC_FACILITIES: FacilitySuite[] = [
  {
    id: 'reception',
    number: '01',
    category: 'Arrival',
    title: 'Calm Reception & Separated Waiting Alcoves',
    subtitle: 'Hospitality-inspired arrival with acoustic calm',
    description:
      'Designed to feel welcoming rather than clinical, our sunlit reception features natural wood acoustics, matte travertine surfaces, and distinct seating alcoves that keep cats elevated and visually shielded from dogs.',
    details: [
      'Separate canine and feline waiting zones with visual privacy',
      'Elevated carrier shelves infused with gentle feline pheromones',
      'Non-slip honed matte flooring for confident senior traction',
    ],
    image: CLINIC_IMAGES.catPortrait,
    imageAlt: 'Calm feline environment with warm linen and serene natural lighting',
    blueprintKey: 'reception',
    availabilityNote: 'Open during all clinic hours for scheduled visits and pharmacy pickups.',
  },
  {
    id: 'consultation',
    number: '02',
    category: 'Examination',
    title: 'Dedicated Canine & Feline Consultation Suites',
    subtitle: 'Quiet rooms built for unhurried examinations',
    description:
      'Three sunlit consultation rooms feature warm natural lighting, soft acoustic wall panels, built-in digital weight scales, and convertible examination surfaces so anxious or arthritic pets can be examined comfortably.',
    details: [
      'Dedicated feline-only examination suite free of canine scents',
      'Warm padded exam surfaces and cushioned floor mats',
      'Wall-mounted diagnostic screens to review X-rays together',
    ],
    image: CLINIC_IMAGES.consultationHero,
    imageAlt: 'Sunlit modern veterinary consultation room with veterinarian caring for a spaniel',
    blueprintKey: 'consultation',
    availabilityNote: 'Standard consultations are booked for 40 minutes.',
  },
  {
    id: 'diagnostics',
    number: '03',
    category: 'Diagnostics',
    title: 'In-House Laboratory & Digital Imaging Suite',
    subtitle: 'Prompt clinical answers without unnecessary waiting',
    description:
      'Our on-site diagnostic area houses point-of-care hematology, serum chemistry, microscopy, low-dose digital radiography, and ultrasound equipment for timely evaluation.',
    details: [
      'Same-visit blood chemistry, CBC, and cytology microscopy',
      'Low-dose digital X-ray suite with shielded safety architecture',
      'Dedicated quiet ultrasound space with soft positioning troughs',
    ],
    image: CLINIC_IMAGES.doctorElena,
    imageAlt: 'Dr. Elena Vance reviewing patient diagnostic charts on a digital clinical tablet',
    blueprintKey: 'diagnostics',
    availabilityNote: 'Specialized MRI/CT imaging is referred to accredited regional imaging centers.',
  },
  {
    id: 'treatment',
    number: '04',
    category: 'Clinical Care',
    title: 'Central Treatment & Dental Procedure Area',
    subtitle: 'Hygienic workspace with direct line-of-sight care',
    description:
      'A calm, organized clinical hub for gentle blood draws, fluid therapy, wound care, and dedicated dental prophylaxis equipped with ultrasonic scaling and intraoral dental radiography.',
    details: [
      'Dedicated wet-table dental station with digital dental X-ray sensor',
      'Temperature-controlled IV fluid warmers for patient comfort',
      'Hospital-grade air filtration and surface sanitization between patients',
    ],
    image: CLINIC_IMAGES.doctorAmara,
    imageAlt: 'Dr. Amara Okafor in the modern clinical workspace',
    blueprintKey: 'treatment',
    availabilityNote: 'All dental procedures are performed under monitored outpatient anesthesia.',
  },
  {
    id: 'surgery',
    number: '05',
    category: 'Surgery',
    title: 'Dedicated Sterile Surgical Suite',
    subtitle: 'Modern anesthetic safety and sterile clinical standards',
    description:
      'Enclosed behind glass for strict sterility and visual clarity, our surgical suite features positive-pressure ventilation, shadowless LED surgical lighting, heated surgical tables, and multi-parameter patient monitoring.',
    details: [
      'Continuous ECG, blood pressure, capnography, and oxygen monitoring',
      'Active warm-air patient blankets to prevent hypothermia',
      'Sterile autoclaved instrumentation packs tracked for every procedure',
    ],
    imageAlt: 'Architectural layout diagram of Vespera sterile surgical suite',
    blueprintKey: 'surgery',
    availabilityNote: 'Focused on soft-tissue, elective, and oral surgeries; complex orthopedics referred to board-certified surgical specialists.',
  },
  {
    id: 'recovery',
    number: '06',
    category: 'Recovery',
    title: 'Quiet Recovery Sanctuary',
    subtitle: 'Warm, softly lit post-procedure observation',
    description:
      'Pets waking from anesthesia rest in temperature-regulated, acoustically buffered recovery enclosures positioned directly beside our veterinary nursing desk for attentive, one-to-one comfort monitoring.',
    details: [
      'Separate calm feline and canine recovery enclosures',
      'Heated orthopedic bedding and gentle dimmable lighting',
      'Direct nursing observation until fully awake and ready to go home',
    ],
    imageAlt: 'Architectural layout diagram of Vespera quiet canine and feline recovery suites',
    blueprintKey: 'recovery',
    availabilityNote: 'Daytime outpatient recovery; overnight critical care is coordinated with 24/7 partner hospitals.',
  },
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Compassionate Handling',
    description:
      'We slow down, observe body language, and adapt every exam so fear never becomes part of your pet’s veterinary story.',
  },
  {
    number: '02',
    title: 'Individualized Treatment Plans',
    description:
      'No cookie-cutter packages—every vaccine, diet, and diagnostic plan reflects your pet’s unique age, genetics, and home life.',
  },
  {
    number: '03',
    title: 'Clear Communication',
    description:
      'We explain clinical reasoning in plain language, review test results visually, and share transparent estimates before proceeding.',
  },
  {
    number: '04',
    title: 'Preventive Healthcare',
    description:
      'Catching subtle metabolic, dental, or joint changes early protects both your companion’s comfort and long-term wellbeing.',
  },
  {
    number: '05',
    title: 'Modern Veterinary Practices',
    description:
      'Evidence-based medicine guided by AAHA, AAFP, and ACVIM standards, supported by on-site digital imaging and pathology.',
  },
  {
    number: '06',
    title: 'Ongoing Pet Health Guidance',
    description:
      'From puppy milestones to senior comfort adjustments, our clinical team stays reachable between annual visits.',
  },
];

export const HEALTH_ARTICLES: HealthArticle[] = [
  {
    slug: 'understanding-core-vs-lifestyle-vaccines',
    category: 'Vaccination Guidance',
    title: 'Understanding Core vs. Lifestyle Vaccines for Dogs and Cats',
    excerpt:
      'How modern veterinary guidelines tailor immunization schedules to your companion’s real environment—providing dependable protection without over-vaccination.',
    readTime: '5 min read',
    publishedDate: 'October 2026',
    authorSlug: 'dr-amara-okafor',
    image: CLINIC_IMAGES.consultationHero,
    imageAlt: 'Veterinarian performing a gentle pre-vaccination examination on a dog',
    featured: true,
    keyTakeaways: [
      'Core vaccines protect against widespread, severe diseases regardless of indoor or outdoor lifestyle.',
      'Lifestyle vaccines are selected thoughtfully based on regional risks such as trail water, boarding, or dog parks.',
      'A full physical exam before every vaccine ensures your pet’s immune system is ready to respond safely.',
    ],
    sections: [
      {
        heading: 'Why Individualized Vaccination Matters',
        paragraphs: [
          'Veterinary immunology has evolved significantly over the past two decades. Rather than administering every available vaccine every single year, current guidelines from the American Animal Hospital Association (AAHA) and American Association of Feline Practitioners (AAFP) distinguish between core vaccines and non-core lifestyle vaccines.',
          'Core vaccines—such as Rabies and DHPP for dogs, or Rabies and FVRCP for cats—protect against high-consequence infections present across virtually all regions. Once a pet completes their puppy or kitten series and initial adult booster, many core vaccines provide multi-year immunity.',
        ],
      },
      {
        heading: 'Evaluating Your Pet’s Daily Environment',
        paragraphs: [
          'Non-core vaccines are chosen through a conversation about how your companion actually lives. A dog who hikes damp Pacific Northwest trails benefits from Leptospirosis protection, while a dog who visits daycare or groomers benefits from Bordetella.',
          'Even strictly indoor cats benefit from core FVRCP and Rabies protection, as certain hardy viruses can travel indoors on shoes or clothing, and unexpected escapes do happen.',
        ],
      },
      {
        heading: 'What to Watch After an Immunization Visit',
        paragraphs: [
          'Mild drowsiness or slight tenderness at the injection site for 24 hours is a normal sign of immune recognition. Always contact your veterinarian promptly if you ever notice facial swelling, hives, persistent vomiting, or pronounced lethargy.',
        ],
      },
    ],
  },
  {
    slug: 'quiet-signs-of-dental-discomfort-in-cats-and-dogs',
    category: 'Dental Health',
    title: 'Five Subtle Signs Your Pet May Have Dental Discomfort',
    excerpt:
      'Pets rarely stop eating because of a painful tooth. Learn the early behavioral and oral clues veterinarians look for long before severe dental disease develops.',
    readTime: '4 min read',
    publishedDate: 'September 2026',
    authorSlug: 'dr-marcus-chen',
    image: CLINIC_IMAGES.catPortrait,
    imageAlt: 'Serene British Shorthair cat resting comfortably in natural light',
    keyTakeaways: [
      'Persistent bad breath is usually an indicator of bacterial biofilm beneath the gumline, not just "normal pet breath."',
      'Chewing predominantly on one side or suddenly preferring soft food can signal localized tooth sensitivity.',
      'Intraoral dental X-rays reveal root and bone changes hidden completely beneath healthy-looking enamel.',
    ],
    sections: [
      {
        heading: 'Why Oral Pain Hides in Plain Sight',
        paragraphs: [
          'Dogs and cats have strong survival instincts that mask chronic oral pain. By the age of three, a large majority of companion animals show early periodontal inflammation beneath the gumline, even while continuing to greet meals enthusiastically.',
        ],
      },
      {
        heading: 'Early Clues at Home',
        paragraphs: [
          'Noticeable mouth odor, a thin crimson line along the gum margin, chattering jaws when yawning, pawing gently at the muzzle, or dropping kibble mid-chew are all worthwhile reasons to schedule an oral health check.',
          'Daily or alternate-day brushing with enzymatic veterinary toothpaste remains the gold standard for slowing plaque mineralization between professional cleanings.',
        ],
      },
    ],
  },
  {
    slug: 'supporting-senior-pets-mobility-and-comfort',
    category: 'Senior Pet Wellness',
    title: 'Supporting Senior Dogs and Cats Through Their Golden Years',
    excerpt:
      'Practical clinical screenings and thoughtful home adjustments that help aging pets stay mobile, comfortable, and engaged.',
    readTime: '6 min read',
    publishedDate: 'September 2026',
    authorSlug: 'dr-elena-vance',
    image: CLINIC_IMAGES.doctorElena,
    imageAlt: 'Dr. Elena Vance reviewing senior pet wellness notes',
    keyTakeaways: [
      'Biannual wellness exams catch subtle organ and blood pressure shifts months earlier than annual checks.',
      'Simple traction rugs, elevated bowls, and low-entry litter boxes dramatically ease daily joint strain.',
      'Early multimodal arthritis care preserves muscle mass and everyday joy.',
    ],
    sections: [
      {
        heading: 'Reframing "Just Slowing Down"',
        paragraphs: [
          'Many pet parents assume stiffness after a nap, reluctance to leap onto a favorite windowsill, or shorter evening walks are simply unavoidable signs of age. In reality, subtle mobility shifts often reflect treatable osteoarthritis or early metabolic changes.',
        ],
      },
      {
        heading: 'The Value of Biannual Senior Check-Ins',
        paragraphs: [
          'Because dogs and cats age roughly five to seven human-equivalent years per calendar year after age seven, visiting every six months allows your veterinarian to track weight, muscle condition, blood pressure, kidney markers, and thyroid health before discomfort escalates.',
        ],
      },
    ],
  },
  {
    slug: 'first-six-months-puppy-and-kitten-roadmap',
    category: 'Puppy & Kitten Care',
    title: 'Your First Six Months: A Calm Roadmap for Puppies and Kittens',
    excerpt:
      'From socialization windows and gentle carrier training to nutrition and preventive milestones, here is how to build lifelong veterinary confidence.',
    readTime: '5 min read',
    publishedDate: 'August 2026',
    authorSlug: 'dr-amara-okafor',
    image: CLINIC_IMAGES.doctorAmara,
    imageAlt: 'Dr. Amara Okafor smiling warmly in the veterinary clinic',
    keyTakeaways: [
      'Early positive clinic visits shape how calm your pet feels at the veterinarian for the next 15 years.',
      'Leave cat carriers open in a sunny room with soft bedding so the carrier becomes a familiar sanctuary.',
      'Discuss ideal spay/neuter timing with your veterinarian based on breed size and skeletal maturity.',
    ],
    sections: [
      {
        heading: 'Building Confidence Early',
        paragraphs: [
          'The first several veterinary visits are about far more than vaccines and weigh-ins—they teach young animals that clinic rooms are safe, predictable places filled with gentle voices and comforting rewards.',
        ],
      },
      {
        heading: 'Essential Milestones to Track',
        paragraphs: [
          'Between 8 and 16 weeks, your doctor will guide primary immunizations, intestinal parasite screening, growth-appropriate nutrition, microchipping, and gentle at-home ear, paw, and mouth handling practice.',
        ],
      },
    ],
  },
];

export const CLIENT_STORIES: ClientStory[] = [
  {
    id: 'story-1',
    quote:
      'Our senior spaniel used to tremble the moment we pulled into a clinic parking lot. At Vespera, Dr. Vance sat on the cushioned mat beside him for ten minutes before even reaching for her stethoscope. For the first time in years, his consultation felt calm, unhurried, and genuinely reassuring.',
    clientName: 'Hannah & David Morales',
    petDetails: 'Barnaby · 11-year-old Cavalier King Charles Spaniel',
    visitType: 'Senior Internal Medicine Consultation',
    consentNote: 'Shared with client permission',
    image: CLINIC_IMAGES.consultationHero,
    imageAlt: 'Cavalier King Charles Spaniel resting calmly during an examination',
  },
  {
    id: 'story-2',
    quote:
      'Having a separate quiet feline room made an immediate difference for Miso. Dr. Okafor walked us through her nutrition and kidney baseline bloodwork without a hint of jargon or pressure, and sent a clear written summary the same afternoon.',
    clientName: 'Claire Takahashi',
    petDetails: 'Miso · 6-year-old British Shorthair',
    visitType: 'Feline Preventive Wellness & Nutrition',
    consentNote: 'Shared with client permission',
    image: CLINIC_IMAGES.catPortrait,
    imageAlt: 'British Shorthair cat resting peacefully on a warm linen cushion',
  },
  {
    id: 'story-3',
    quote:
      'When our rescue terrier needed a dental procedure and extractions, Dr. Chen explained every monitoring step beforehand and called us personally the moment she woke up. You can feel how much clinical care and thought goes into every detail here.',
    clientName: 'Samuel & Priya Bennett',
    petDetails: 'Wren · 8-year-old Mixed Terrier',
    visitType: 'Comprehensive Dental Care',
    consentNote: 'Shared with client permission',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-book',
    category: 'Appointments',
    question: 'How can I book an appointment?',
    answer:
      'You can request an appointment online anytime using our Appointment Booking form, call our reception desk directly at (503) 555-0194 during clinic hours, or message us via WhatsApp. Our team confirms every online request promptly by phone or email.',
  },
  {
    id: 'faq-first-visit',
    category: 'Appointments',
    question: 'What should I bring to the first consultation?',
    answer:
      'Please bring any previous vaccination records, laboratory results, a list of current medications or supplements, and the name of your pet’s regular diet. For dogs, please use a secure non-retractable leash; for cats, a sturdy top-loading carrier lined with a familiar blanket helps keep arrival calm.',
  },
  {
    id: 'faq-animals',
    category: 'Clinical Care',
    question: 'Which animals does the clinic treat?',
    answer:
      'Vespera Veterinary Clinic focuses exclusively on companion dogs and cats. By dedicating our clinical training, acoustic design, and diagnostic instrumentation to canine and feline medicine, we maintain focused standards of care. We are happy to provide referrals to trusted avian and exotic specialists when needed.',
  },
  {
    id: 'faq-vaccines',
    category: 'Clinical Care',
    question: 'Are vaccinations available?',
    answer:
      'Yes. We provide core and lifestyle-appropriate vaccinations for puppies, kittens, adult dogs, and cats in accordance with AAHA and AAFP guidelines. Every immunization appointment includes a full physical examination to confirm your pet is healthy prior to vaccination.',
  },
  {
    id: 'faq-services',
    category: 'Clinical Care',
    question: 'What services does the clinic provide?',
    answer:
      'We offer general veterinary consultations, preventive healthcare, individualized vaccination protocols, in-house laboratory diagnostics, digital radiography, point-of-care ultrasound, veterinary dentistry, soft-tissue surgery, clinical nutrition guidance, dermatology, senior pet care, and daytime urgent assessments.',
  },
  {
    id: 'faq-contact',
    category: 'Clinic Policies',
    question: 'How can I contact the clinic?',
    answer:
      'You can reach our team by phone at (503) 555-0194, by email at care@vesperavet.com, via WhatsApp during business hours, or through our online Contact page. For urgent daytime symptoms, please call our dedicated urgent triage line at (503) 555-0199 before arriving.',
  },
  {
    id: 'faq-hours',
    category: 'Clinic Policies',
    question: 'What are the clinic’s operating hours?',
    answer:
      'We are open Monday through Friday from 8:00 AM to 7:00 PM, and Saturday from 9:00 AM to 5:00 PM. The clinic is closed on Sundays, with 24/7 after-hours emergency care coordinated through our regional partner emergency hospital.',
  },
  {
    id: 'faq-emergency',
    category: 'Clinic Policies',
    question: 'Does the clinic provide emergency services?',
    answer:
      'We provide daytime urgent care assessments during our regular operating hours when you call ahead at (503) 555-0199. We are not a 24-hour overnight critical care facility; for after-hours emergencies or life-threatening trauma requiring intensive overnight hospitalization, we coordinate directly with DoveLewis 24/7 Emergency Animal Hospital.',
  },
];
