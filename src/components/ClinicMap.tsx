import React, { useState } from 'react';
import {
  APIProvider,
  Map as GoogleMap,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

const MAPS_API_KEY = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined) || '';

function ClinicMarkerWithInfoWindow() {
  const [infoOpen, setInfoOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={CLINIC_INFO.coordinates}
        title={CLINIC_INFO.name}
        onClick={() => setInfoOpen((prev) => !prev)}
      >
        <Pin
          background="#1B3831"
          borderColor="#FAF7F0"
          glyphColor="#F2C8B8"
          scale={1.25}
        />
      </AdvancedMarker>
      {infoOpen && marker && (
        <InfoWindow
          anchor={marker}
          maxWidth={260}
          onCloseClick={() => setInfoOpen(false)}
        >
          <div className="p-1 text-[#38283F]">
            <p className="font-semibold text-sm text-[#1B3831]">{CLINIC_INFO.name}</p>
            <p className="text-xs text-[#5D4D63] mt-1">{CLINIC_INFO.addressLine1}</p>
            <p className="text-xs text-[#5D4D63]">{CLINIC_INFO.addressLine2}</p>
            <p className="text-xs text-[#1B3831] font-medium mt-1.5 tabular-nums">
              {CLINIC_INFO.phoneDisplay}
            </p>
            <a
              href={CLINIC_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-[#B9574B] hover:underline"
            >
              Get Directions
              <Navigation className="w-3 h-3" />
            </a>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

interface ClinicMapProps {
  heightClass?: string;
  quotaExceeded?: boolean;
}

export function ClinicMap({ heightClass = 'h-[420px]', quotaExceeded = false }: ClinicMapProps) {
  const [mapLoadError, setMapLoadError] = useState(false);

  const showFallback = !MAPS_API_KEY || quotaExceeded || mapLoadError;

  if (showFallback) {
    return (
      <div
        className={`relative w-full ${heightClass} rounded-2xl overflow-hidden bg-[#1B3831] text-[#FAF7F0] border border-[#38283F]/10 flex flex-col justify-between p-8`}
        aria-label="Clinic location map fallback"
      >
        {/* Subtle architectural street-grid illustration */}
        <svg
          viewBox="0 0 600 400"
          fill="none"
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          aria-hidden="true"
        >
          <path d="M0 90H600M0 190H600M0 295H600" stroke="#E4F0E8" strokeWidth="1.2" />
          <path d="M120 0V400M275 0V400M430 0V400" stroke="#E4F0E8" strokeWidth="1.2" />
          <path d="M60 360C180 280 280 220 540 90" stroke="#F2C8B8" strokeWidth="2.2" strokeDasharray="6 6" />
          <circle cx="275" cy="190" r="44" stroke="#F2C8B8" strokeWidth="1.2" />
          <circle cx="275" cy="190" r="10" fill="#B9574B" />
        </svg>

        <div className="relative z-10 flex items-center gap-2 text-xs text-[#DFD3E0]">
          <MapPin className="w-4 h-4 text-[#F2C8B8]" />
          <span>Northwest District · Portland, Oregon</span>
        </div>

        <div className="relative z-10 max-w-md bg-[#FAF7F0] text-[#38283F] p-6 rounded-xl shadow-lg">
          <h4 className="font-semibold text-base text-[#1B3831]">{CLINIC_INFO.name}</h4>
          <p className="text-sm text-[#5D4D63] mt-1">{CLINIC_INFO.fullAddress}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#5D4D63] tabular-nums">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#B9574B]" />
              {CLINIC_INFO.phoneDisplay}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#1B3831]" />
              Mon–Fri 8am–7pm
            </span>
          </div>
          <a
            href={CLINIC_INFO.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#B9574B] text-white text-xs font-semibold hover:bg-[#9D4439] transition-colors whitespace-nowrap"
          >
            <Navigation className="w-3.5 h-3.5" />
            Open in Google Maps
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${heightClass} rounded-2xl overflow-hidden border border-[#38283F]/12 bg-[#E4F0E8]`}
    >
      <APIProvider
        apiKey={MAPS_API_KEY}
        libraries={['marker']}
        language="en"
        region="US"
        onError={() => setMapLoadError(true)}
      >
        <GoogleMap
          mapId="DEMO_MAP_ID"
          defaultCenter={CLINIC_INFO.coordinates}
          defaultZoom={15}
          gestureHandling="cooperative"
          mapTypeControl={false}
          streetViewControl={false}
          fullscreenControl={true}
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          className="w-full h-full"
        >
          <ClinicMarkerWithInfoWindow />
        </GoogleMap>
      </APIProvider>
    </div>
  );
}
