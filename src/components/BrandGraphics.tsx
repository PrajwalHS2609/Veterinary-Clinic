import React, { useState } from 'react';
import type { VeterinaryService, FacilitySuite } from '../data/clinicData';

export function VesperaMark({ className = 'w-7 h-7', light = false }: { className?: string; light?: boolean }) {
  const stroke = light ? '#FAF7F0' : '#1B3831';
  const accent = light ? '#F2C8B8' : '#B9574B';
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 3C10.8 3 5 8.8 5 16C5 23.8 11.9 29.8 18 33C24.1 29.8 31 23.8 31 16C31 8.8 25.2 3 18 3Z"
        stroke={stroke}
        strokeWidth="1.6"
      />
      <path
        d="M18 10V22M12 16H24"
        stroke={accent}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M11 24.5C13.2 21.8 15.6 20.6 18 20.6C20.4 20.6 22.8 21.8 25 24.5"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

export function BotanicalSprig({ className = 'w-28 h-28', color = '#D7A3A5' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M22 104C34 74 58 46 96 20"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M42 74C28 70 22 57 26 44C39 48 47 60 42 74Z"
        stroke={color}
        strokeWidth="1.15"
      />
      <path
        d="M58 54C72 54 84 63 86 76C72 78 60 69 58 54Z"
        stroke={color}
        strokeWidth="1.15"
      />
      <path
        d="M66 44C56 36 55 22 64 13C74 20 77 33 66 44Z"
        stroke={color}
        strokeWidth="1.15"
      />
      <path
        d="M78 33C90 32 101 38 106 49C94 52 83 45 78 33Z"
        stroke={color}
        strokeWidth="1.15"
      />
    </svg>
  );
}

export function CompanionLineArt({ className = 'w-48 h-32', color = '#38283F' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 220 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Minimal editorial continuous-line canine & feline silhouette */}
      <path
        d="M26 118C26 94 34 72 48 56C44 43 46 28 55 22C62 28 65 37 64 46C74 42 87 43 96 49C102 38 112 31 122 33C124 44 119 54 111 61C118 74 119 95 113 118"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M132 118C130 96 136 78 148 68C145 55 147 45 153 40C158 46 161 52 162 58C170 57 177 58 183 62C187 54 191 47 196 43C200 50 200 61 195 70C202 82 203 99 197 118"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 118H208"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
      <circle cx="71" cy="60" r="1.8" fill={color} />
      <circle cx="94" cy="60" r="1.8" fill={color} />
      <path d="M79 69C81 71.5 84 71.5 86 69" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="164" cy="74" r="1.5" fill={color} />
      <circle cx="180" cy="74" r="1.5" fill={color} />
      <path d="M170 80L172 82L174 80" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ServiceLineIcon({
  iconKey,
  className = 'w-6 h-6',
}: {
  iconKey: VeterinaryService['iconKey'];
  className?: string;
}) {
  switch (iconKey) {
    case 'consultation':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <path d="M8 5V12C8 15.3 10.7 18 14 18C17.3 18 20 15.3 20 12V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 18V21.5C14 23.4 15.6 25 17.5 25C19.4 25 21 23.4 21 21.5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="21" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 5H10M18 5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'preventive':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <path d="M14 3.5L22.5 7V13.8C22.5 19.2 18.8 23.3 14 25C9.2 23.3 5.5 19.2 5.5 13.8V7L14 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M14 10V17M10.5 13.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'vaccination':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <path d="M18.5 5.5L22.5 9.5M16 8L20 12L11 21L7 17L16 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 19L5 23M13.5 10.5L15.5 12.5M11 13L13 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'diagnostics':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <rect x="4" y="5" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 13H11L13 9.5L15.5 16L17.5 13H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 23H18M14 20V23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'dental':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <path d="M9.5 5.5C6.8 5.5 5.5 7.9 5.8 10.7C6.1 13.8 7.5 16.5 8.4 20.5C8.8 22.4 10.6 23 11.4 21.3L13 17.8C13.4 16.9 14.6 16.9 15 17.8L16.6 21.3C17.4 23 19.2 22.4 19.6 20.5C20.5 16.5 21.9 13.8 22.2 10.7C22.5 7.9 21.2 5.5 18.5 5.5C16.7 5.5 15.3 6.5 14 6.5C12.7 6.5 11.3 5.5 9.5 5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case 'surgery':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <circle cx="14" cy="14" r="9.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 9V19M9 14H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 4.5V6.5M14 21.5V23.5M4.5 14H6.5M21.5 14H23.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 'nutrition':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <path d="M6 16H22C22 20.4 18.4 23.5 14 23.5C9.6 23.5 6 20.4 6 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M14 16V10.5C14 7.5 16.5 5 19.5 5C19.5 8 17 10.5 14 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M14 12.5C11.5 12.5 9.5 10.5 9.5 8C12 8 14 10 14 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case 'dermatology':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <path d="M14 4.5C14 4.5 7.5 11.5 7.5 16.5C7.5 20.1 10.4 23 14 23C17.6 23 20.5 20.1 20.5 16.5C20.5 11.5 14 4.5 14 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M11.5 17C11.5 18.6 12.6 19.8 14.2 19.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 'senior':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <path d="M14 23C14 23 5.5 17.8 5.5 11.2C5.5 8.1 7.9 5.8 10.7 5.8C12.4 5.8 13.4 6.7 14 7.8C14.6 6.7 15.6 5.8 17.3 5.8C20.1 5.8 22.5 8.1 22.5 11.2C22.5 17.8 14 23 14 23Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M10.5 13.5L13 16L17.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'urgent':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <circle cx="14" cy="14" r="9.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 8.5V14.5L18 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function FacilityBlueprintGraphic({
  blueprintKey,
  className = 'w-full h-full',
}: {
  blueprintKey: FacilitySuite['blueprintKey'];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 420 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="16" y="16" width="388" height="228" rx="14" stroke="#38283F" strokeOpacity="0.16" strokeWidth="1.2" />
      <path d="M16 64H404" stroke="#38283F" strokeOpacity="0.1" strokeDasharray="4 4" />
      <path d="M210 16V244" stroke="#38283F" strokeOpacity="0.1" strokeDasharray="4 4" />

      {blueprintKey === 'reception' && (
        <>
          <path d="M56 176C56 132 104 108 168 108H252C316 108 364 132 364 176" stroke="#1B3831" strokeWidth="1.6" />
          <rect x="132" y="144" width="156" height="44" rx="22" stroke="#B9574B" strokeWidth="1.6" />
          <rect x="46" y="64" width="76" height="36" rx="10" stroke="#38283F" strokeWidth="1.3" />
          <rect x="298" y="64" width="76" height="36" rx="10" stroke="#38283F" strokeWidth="1.3" />
          <circle cx="210" cy="82" r="16" stroke="#1B3831" strokeWidth="1.3" />
        </>
      )}

      {blueprintKey === 'consultation' && (
        <>
          <rect x="128" y="88" width="164" height="84" rx="16" stroke="#1B3831" strokeWidth="1.6" />
          <rect x="162" y="112" width="96" height="36" rx="8" stroke="#B9574B" strokeWidth="1.5" />
          <circle cx="88" cy="130" r="22" stroke="#38283F" strokeWidth="1.3" />
          <circle cx="332" cy="130" r="22" stroke="#38283F" strokeWidth="1.3" />
          <path d="M128 198H292" stroke="#38283F" strokeOpacity="0.35" strokeWidth="1.4" strokeLinecap="round" />
        </>
      )}

      {blueprintKey === 'diagnostics' && (
        <>
          <rect x="64" y="66" width="128" height="128" rx="12" stroke="#1B3831" strokeWidth="1.5" />
          <path d="M84 130H108L120 102L134 156L146 130H172" stroke="#B9574B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="228" y="66" width="128" height="58" rx="10" stroke="#38283F" strokeWidth="1.4" />
          <rect x="228" y="136" width="128" height="58" rx="10" stroke="#38283F" strokeWidth="1.4" />
          <circle cx="262" cy="95" r="12" stroke="#1B3831" strokeWidth="1.3" />
          <path d="M290 90H334M290 100H322" stroke="#38283F" strokeWidth="1.3" strokeLinecap="round" />
        </>
      )}

      {blueprintKey === 'treatment' && (
        <>
          <rect x="76" y="82" width="268" height="96" rx="18" stroke="#1B3831" strokeWidth="1.6" />
          <line x1="165" y1="82" x2="165" y2="178" stroke="#38283F" strokeOpacity="0.25" />
          <line x1="255" y1="82" x2="255" y2="178" stroke="#38283F" strokeOpacity="0.25" />
          <circle cx="120" cy="130" r="18" stroke="#B9574B" strokeWidth="1.5" />
          <circle cx="210" cy="130" r="18" stroke="#1B3831" strokeWidth="1.5" />
          <circle cx="300" cy="130" r="18" stroke="#B9574B" strokeWidth="1.5" />
        </>
      )}

      {blueprintKey === 'surgery' && (
        <>
          <circle cx="210" cy="130" r="72" stroke="#1B3831" strokeWidth="1.5" strokeDasharray="6 4" />
          <rect x="150" y="106" width="120" height="48" rx="12" stroke="#38283F" strokeWidth="1.6" />
          <circle cx="210" cy="130" r="16" stroke="#B9574B" strokeWidth="1.7" />
          <path d="M210 120V140M200 130H220" stroke="#B9574B" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="64" y="88" width="46" height="84" rx="8" stroke="#38283F" strokeOpacity="0.4" />
          <rect x="310" y="88" width="46" height="84" rx="8" stroke="#38283F" strokeOpacity="0.4" />
        </>
      )}

      {blueprintKey === 'recovery' && (
        <>
          <rect x="64" y="72" width="130" height="116" rx="16" stroke="#1B3831" strokeWidth="1.5" />
          <rect x="226" y="72" width="130" height="116" rx="16" stroke="#1B3831" strokeWidth="1.5" />
          <path d="M98 138C108 122 148 122 158 138" stroke="#B9574B" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M260 138C270 122 310 122 320 138" stroke="#B9574B" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="129" cy="108" r="10" stroke="#38283F" strokeOpacity="0.4" />
          <circle cx="291" cy="108" r="10" stroke="#38283F" strokeOpacity="0.4" />
        </>
      )}
    </svg>
  );
}

interface EditorialImageProps {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackTitle?: string;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  fallbackTitle,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#E4F0E8] via-[#FAF7F0] to-[#F2C8B8]/40 flex flex-col items-center justify-center p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <CompanionLineArt className="w-40 h-24 opacity-70" color="#38283F" />
        {fallbackTitle && (
          <p className="mt-3 text-xs font-medium tracking-wide text-[#5D4D63] max-w-[22ch]">
            {fallbackTitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#E4F0E8]/60 ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={() => setFailed(true)}
        className={imgClassName}
      />
    </div>
  );
}
