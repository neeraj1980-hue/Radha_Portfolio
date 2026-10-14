'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Compass, 
  Landmark
} from 'lucide-react';

export default function AddressSection() {
  const [copied, setCopied] = useState(false);
  const fullAddress = "New Dev Nagar, Khandari, Agra, Uttar Pradesh - 282002";

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 relative overflow-hidden bg-[#04091c]/90 border-t border-blue-500/20">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/[0.1] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-mono text-sky-300 uppercase tracking-widest mb-3 shadow-md">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Address & Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Where I Am{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
              Based
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 mt-4 rounded-full shadow-lg shadow-blue-500/50" />
          <p className="text-slate-300 max-w-2xl mt-4 text-sm sm:text-base">
            Proudly rooted in Agra—the historic city of architectural grandeur and educational eminence.
          </p>
        </div>

        {/* Grid Layout: Location Details & Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Card */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-8 rounded-3xl border border-blue-500/25 shadow-2xl shadow-blue-950/70">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center font-bold p-3 shadow-lg shadow-blue-500/30">
                  <MapPin className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-400/40 text-sky-200 font-semibold shadow-inner">
                  Agra, Uttar Pradesh
                </span>
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-1 font-bold">
                Residential Address
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">
                New Dev Nagar
              </h3>
              <p className="text-lg font-semibold text-sky-100 mb-6">
                Khandari, Agra, Uttar Pradesh, India
              </p>

              {/* Copy Address Action Box */}
              <div className="p-4 rounded-2xl bg-[#06112e]/90 border border-blue-500/30 mb-6 flex items-center justify-between gap-3 shadow-inner">
                <div className="text-xs font-mono text-slate-300 truncate">
                  {fullAddress}
                </div>
                <button
                  onClick={handleCopy}
                  className="px-3.5 py-1.5 rounded-xl bg-blue-900/60 border border-blue-400/40 hover:bg-blue-600 text-xs font-bold text-white flex items-center gap-1.5 shrink-0 transition-all shadow-md"
                  title="Copy full address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-sky-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* City & Neighborhood Highlights */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2 font-bold">
                  Neighborhood Context
                </div>
                
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#071336]/60 border border-blue-500/20">
                  <Landmark className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-200 leading-relaxed">
                    <strong className="text-white">Educational Hub:</strong> Khandari houses prominent academic campuses including R.B.S. College and Dr. B.R. Ambedkar University campuses.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#071336]/60 border border-blue-500/20">
                  <Compass className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-200 leading-relaxed">
                    <strong className="text-white">Central Connectivity:</strong> Seamless access to national highways, central Agra, Sanjay Place commercial hub, and railway stations.
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps External Action Button */}
            <div className="pt-6 mt-6 border-t border-blue-500/20">
              <a
                href="https://www.google.com/maps/search/?api=1&query=New+Dev+Nagar+Khandari+Agra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white font-bold text-xs uppercase tracking-wider hover:from-blue-500 hover:to-sky-400 transition-all shadow-lg shadow-blue-600/35 hover:scale-[1.02]"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Map / Visual Card */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-panel border border-blue-500/30 relative flex flex-col shadow-2xl shadow-blue-950/80">
            
            {/* Top Bar for Map */}
            <div className="px-5 py-3.5 bg-[#06102a] border-b border-blue-500/25 flex items-center justify-between text-xs text-sky-300 font-mono">
              <div className="flex items-center gap-2 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
                <span>LOCATION: KHANDARI, AGRA (27.2152° N, 77.9928° E)</span>
              </div>
              <span className="hidden sm:inline text-sky-400/80">UTTAR PRADESH, INDIA</span>
            </div>

            {/* Embedded Google Maps iFrame */}
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full min-h-[360px] bg-[#050e26]">
              <iframe
                title="Location Map Khandari Agra"
                src="https://maps.google.com/maps?q=Khandari,%20Agra,%20Uttar%20Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-125 brightness-95 opacity-90 hover:opacity-100 transition-all duration-700"
                loading="lazy"
                allowFullScreen
              />

              {/* Map Floating Tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto p-3.5 rounded-2xl bg-[#061230]/90 backdrop-blur-md border border-blue-400/50 text-xs text-white flex items-center gap-3 shadow-xl">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">New Dev Nagar, Khandari</div>
                  <div className="text-[11px] text-sky-200">Agra, Uttar Pradesh</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
