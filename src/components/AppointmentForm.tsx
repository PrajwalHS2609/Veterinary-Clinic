import React, { useState, useEffect } from 'react';
import { CheckCircle2, Phone, Calendar, Clock, AlertCircle } from 'lucide-react';
import { CLINIC_INFO, VETERINARY_SERVICES, VETERINARY_DOCTORS } from '../data/clinicData';

interface AppointmentFormProps {
  preselectedService?: string;
  preselectedDoctor?: string;
  compact?: boolean;
}

interface FormValues {
  ownerName: string;
  phone: string;
  email: string;
  petName: string;
  petType: string;
  service: string;
  doctor: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

export function AppointmentForm({
  preselectedService = '',
  preselectedDoctor = '',
  compact = false,
}: AppointmentFormProps) {
  const [values, setValues] = useState<FormValues>({
    ownerName: '',
    phone: '',
    email: '',
    petName: '',
    petType: 'Dog',
    service: preselectedService || VETERINARY_SERVICES[0].title,
    doctor: preselectedDoctor || 'No preference (first available doctor)',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM – 12:00 PM)',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setValues((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedDoctor) {
      setValues((prev) => ({ ...prev, doctor: preselectedDoctor }));
    }
  }, [preselectedDoctor]);

  const handleChange = (field: keyof FormValues, val: string) => {
    setValues((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (!values.ownerName.trim()) next.ownerName = 'Please enter your full name.';
    if (!values.phone.trim() || values.phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Please enter a valid phone number so we can confirm.';
    }
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!values.petName.trim()) next.petName = 'Please share your pet’s name.';
    if (!values.preferredDate) next.preferredDate = 'Please choose a preferred date.';

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const refCode = `VSP-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);
  };

  const todayMin = new Date().toISOString().split('T')[0];

  if (submittedRef) {
    return (
      <div className="bg-[#FAF7F0] rounded-2xl p-8 md:p-10 border border-[#38283F]/10 text-[#38283F]">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-full bg-[#E4F0E8] text-[#1B3831] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-medium text-[#5D4D63] tabular-nums">
              Request Reference · {submittedRef}
            </p>
            <h3 className="text-2xl font-bold text-[#1B3831] mt-1">
              Appointment Request Received
            </h3>
            <p className="text-sm text-[#5D4D63] mt-2 leading-relaxed">
              Thank you, {values.ownerName}. Our client care coordinator will contact you at{' '}
              <span className="font-medium text-[#38283F]">{values.phone}</span> or{' '}
              <span className="font-medium text-[#38283F]">{values.email}</span> to confirm{' '}
              {values.petName}’s appointment window.
            </p>
          </div>
        </div>

        <div className="mt-7 pt-6 border-t border-[#38283F]/10 grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-xs text-[#5D4D63]">Patient</p>
            <p className="font-medium text-[#38283F] mt-0.5">
              {values.petName} ({values.petType})
            </p>
          </div>
          <div>
            <p className="text-xs text-[#5D4D63]">Requested Service</p>
            <p className="font-medium text-[#38283F] mt-0.5">{values.service}</p>
          </div>
          <div>
            <p className="text-xs text-[#5D4D63]">Preferred Schedule</p>
            <p className="font-medium text-[#38283F] mt-0.5 tabular-nums">
              {values.preferredDate} · {values.preferredTime}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#5D4D63]">Preferred Doctor</p>
            <p className="font-medium text-[#38283F] mt-0.5">{values.doctor}</p>
          </div>
        </div>

        <div className="mt-7 pt-6 border-t border-[#38283F]/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[#5D4D63]">
            Need same-day urgent guidance? Call{' '}
            <a href={CLINIC_INFO.urgentPhoneHref} className="font-semibold text-[#B9574B] hover:underline tabular-nums">
              {CLINIC_INFO.urgentPhoneDisplay}
            </a>
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmittedRef(null);
              setValues((prev) => ({ ...prev, petName: '', preferredDate: '', notes: '' }));
            }}
            className="px-5 py-2.5 rounded-lg border border-[#38283F]/20 text-sm font-medium text-[#38283F] hover:bg-[#E4F0E8]/60 transition-colors cursor-pointer whitespace-nowrap"
          >
            Request Another Visit
          </button>
        </div>
      </div>
    );
  }

  const inputBase =
    'w-full rounded-lg bg-white border px-3.5 py-2.5 text-sm text-[#38283F] placeholder:text-[#8E7F94] focus:outline-none focus:ring-2 focus:ring-[#B9574B]/30 focus:border-[#B9574B] transition-colors';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-[#FAF7F0] rounded-2xl border border-[#38283F]/10 ${compact ? 'p-6 md:p-8' : 'p-7 md:p-10'}`}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ownerName" className="block text-xs font-semibold text-[#38283F] mb-1.5">
            Pet Owner’s Full Name *
          </label>
          <input
            id="ownerName"
            type="text"
            autoComplete="name"
            placeholder="e.g., Clara Bennett"
            value={values.ownerName}
            onChange={(e) => handleChange('ownerName', e.target.value)}
            className={`${inputBase} ${errors.ownerName ? 'border-[#B9574B]' : 'border-[#38283F]/15'}`}
          />
          {errors.ownerName && (
            <p className="mt-1 text-xs text-[#B9574B] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {errors.ownerName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-[#38283F] mb-1.5">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(503) 555-0120"
            value={values.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`${inputBase} tabular-nums ${errors.phone ? 'border-[#B9574B]' : 'border-[#38283F]/15'}`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-[#B9574B] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[#38283F] mb-1.5">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="clara@example.com"
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`${inputBase} ${errors.email ? 'border-[#B9574B]' : 'border-[#38283F]/15'}`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-[#B9574B] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {errors.email}
            </p>
          )}
        </div>

        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-3">
            <label htmlFor="petName" className="block text-xs font-semibold text-[#38283F] mb-1.5">
              Pet’s Name *
            </label>
            <input
              id="petName"
              type="text"
              placeholder="e.g., Barnaby"
              value={values.petName}
              onChange={(e) => handleChange('petName', e.target.value)}
              className={`${inputBase} ${errors.petName ? 'border-[#B9574B]' : 'border-[#38283F]/15'}`}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="petType" className="block text-xs font-semibold text-[#38283F] mb-1.5">
              Pet Type
            </label>
            <select
              id="petType"
              value={values.petType}
              onChange={(e) => handleChange('petType', e.target.value)}
              className={`${inputBase} border-[#38283F]/15`}
            >
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Puppy">Puppy</option>
              <option value="Kitten">Kitten</option>
              <option value="Multiple Pets">Multiple</option>
            </select>
          </div>
          {errors.petName && (
            <p className="col-span-5 -mt-1.5 text-xs text-[#B9574B] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {errors.petName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-[#38283F] mb-1.5">
            Preferred Service
          </label>
          <select
            id="service"
            value={values.service}
            onChange={(e) => handleChange('service', e.target.value)}
            className={`${inputBase} border-[#38283F]/15`}
          >
            {VETERINARY_SERVICES.map((svc) => (
              <option key={svc.slug} value={svc.title}>
                {svc.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="doctor" className="block text-xs font-semibold text-[#38283F] mb-1.5">
            Preferred Veterinarian
          </label>
          <select
            id="doctor"
            value={values.doctor}
            onChange={(e) => handleChange('doctor', e.target.value)}
            className={`${inputBase} border-[#38283F]/15`}
          >
            <option value="No preference (first available doctor)">
              No preference (first available doctor)
            </option>
            {VETERINARY_DOCTORS.map((doc) => (
              <option key={doc.slug} value={`${doc.name}, ${doc.credentials}`}>
                {doc.name}, {doc.credentials}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#38283F] mb-1.5">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#1B3831]" />
              Preferred Date *
            </span>
          </label>
          <input
            id="preferredDate"
            type="date"
            min={todayMin}
            value={values.preferredDate}
            onChange={(e) => handleChange('preferredDate', e.target.value)}
            className={`${inputBase} tabular-nums ${errors.preferredDate ? 'border-[#B9574B]' : 'border-[#38283F]/15'}`}
          />
          {errors.preferredDate && (
            <p className="mt-1 text-xs text-[#B9574B] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {errors.preferredDate}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-xs font-semibold text-[#38283F] mb-1.5">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#1B3831]" />
              Preferred Time Window
            </span>
          </label>
          <select
            id="preferredTime"
            value={values.preferredTime}
            onChange={(e) => handleChange('preferredTime', e.target.value)}
            className={`${inputBase} border-[#38283F]/15`}
          >
            <option value="Early Morning (8:00 AM – 10:00 AM)">Early Morning (8:00 AM – 10:00 AM)</option>
            <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
            <option value="Early Afternoon (12:30 PM – 3:30 PM)">Early Afternoon (12:30 PM – 3:30 PM)</option>
            <option value="Late Afternoon (3:30 PM – 6:30 PM)">Late Afternoon (3:30 PM – 6:30 PM)</option>
            <option value="Saturday (9:00 AM – 4:30 PM)">Saturday (9:00 AM – 4:30 PM)</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="notes" className="block text-xs font-semibold text-[#38283F] mb-1.5">
            Additional Information (Optional)
          </label>
          <textarea
            id="notes"
            rows={3}
            placeholder="Share your pet’s age, symptoms, temperament notes, or questions for the doctor..."
            value={values.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            className={`${inputBase} border-[#38283F]/15 resize-none`}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          className="px-7 py-3.5 rounded-lg bg-[#B9574B] text-white text-sm font-semibold hover:bg-[#9D4439] transition-colors cursor-pointer whitespace-nowrap"
        >
          Submit Appointment Request
        </button>

        <div className="flex items-center gap-2 text-xs text-[#5D4D63]">
          <Phone className="w-3.5 h-3.5 text-[#1B3831] shrink-0" />
          <span>
            Prefer to speak with us?{' '}
            <a
              href={CLINIC_INFO.phoneHref}
              className="font-semibold text-[#1B3831] hover:text-[#B9574B] transition-colors tabular-nums"
            >
              {CLINIC_INFO.phoneDisplay}
            </a>
          </span>
        </div>
      </div>
    </form>
  );
}
