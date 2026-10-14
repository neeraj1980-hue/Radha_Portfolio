'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Calendar, 
  Award, 
  MessageCircle, 
  Phone, 
  ExternalLink,
  ZoomIn,
  X
} from 'lucide-react';

const taglines = [
  'B.A. Scholar @ R.B.S. College',
  'M.S. Office & Productivity Specialist',
  'AI Tools & Modern Tech Explorer',
  'Creative Dancer & Avid Reader'
];

export default function HeroSection() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Blue Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-600/[0.14] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-sky-500/[0.1] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-700/[0.12] rounded-full blur-[100px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Info */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 shadow-lg shadow-blue-950/60 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span className="text-xs font-mono tracking-wider text-sky-200 uppercase font-semibold">
                Welcome to My Official Portfolio
              </span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
                Radha{' '}
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
                  Kushwah
                </span>
              </h1>
              
              {/* Dynamic Animated Subtitle */}
              <div className="h-8 flex items-center">
                <p className="text-lg sm:text-xl font-medium text-slate-200 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-sky-400 animate-pulse" />
                  <span className="key-transition transition-all duration-500 border-b border-blue-400/50 pb-0.5 font-mono text-sky-300">
                    {taglines[taglineIndex]}
                  </span>
                </p>
              </div>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Enthusiastic undergraduate scholar pursuing a{' '}
              <strong className="text-white font-semibold underline decoration-blue-500 underline-offset-4">
                B.A. at R.B.S. College, Agra
              </strong>
              . Proficient in <strong className="text-sky-300 font-medium">M.S. Office</strong>,{' '}
              <strong className="text-sky-300 font-medium">WordPad</strong>, and modern{' '}
              <strong className="text-sky-300 font-medium">AI productivity tools</strong>. Driven by lifelong learning, creative dance expression, and literature.
            </p>

            {/* Quick Information Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-2">
              <div className="p-3.5 rounded-xl bg-[#091538]/90 border border-blue-500/25 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-0.5 shadow-md">
                <div className="flex items-center gap-2 text-sky-400 text-xs mb-1">
                  <GraduationCap className="w-4 h-4 text-sky-400" />
                  <span className="font-medium text-slate-300">College</span>
                </div>
                <div className="text-sm font-bold text-white truncate">R.B.S. College</div>
                <div className="text-[11px] text-sky-300/80">Agra, U.P.</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#091538]/90 border border-blue-500/25 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-0.5 shadow-md">
                <div className="flex items-center gap-2 text-sky-400 text-xs mb-1">
                  <Calendar className="w-4 h-4 text-sky-400" />
                  <span className="font-medium text-slate-300">Born</span>
                </div>
                <div className="text-sm font-bold text-white">13 March 2007</div>
                <div className="text-[11px] text-sky-300/80">Age 19 Years</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#091538]/90 border border-blue-500/25 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-0.5 shadow-md">
                <div className="flex items-center gap-2 text-sky-400 text-xs mb-1">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span className="font-medium text-slate-300">City</span>
                </div>
                <div className="text-sm font-bold text-white">Agra, India</div>
                <div className="text-[11px] text-sky-300/80">Khandari</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#091538]/90 border border-blue-500/25 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-0.5 shadow-md">
                <div className="flex items-center gap-2 text-sky-400 text-xs mb-1">
                  <Award className="w-4 h-4 text-amber-300" />
                  <span className="font-medium text-slate-300">Honors</span>
                </div>
                <div className="text-sm font-bold text-white truncate">Trophy Awardee</div>
                <div className="text-[11px] text-sky-300/80">Academic & Arts</div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white font-bold text-sm hover:from-blue-500 hover:to-sky-400 transition-all duration-300 shadow-xl shadow-blue-600/35 hover:shadow-blue-500/50 hover:scale-105 active:scale-95"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919808869470?text=Hello%20Radha,%20I%20visited%20your%20portfolio%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#08153a] border border-blue-500/40 text-white font-semibold text-sm hover:bg-blue-900/60 hover:border-blue-400 transition-all duration-200 shadow-lg shadow-blue-950/50"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Chat</span>
              </a>

              <a
                href="tel:9808869470"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-blue-950 font-bold text-sm hover:bg-sky-50 transition-all duration-200 shadow-lg shadow-white/10"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+91 9808869470</span>
              </a>
            </div>

          </div>

          {/* Right Column: Radha's Photo Portrait with Blue & White Frame */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Outer Decorative Blue Glow & Borders */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 opacity-60 blur-lg group-hover:opacity-90 transition-all duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden bg-[#07112c] border-2 border-blue-400/40 p-2.5 shadow-2xl shadow-blue-950">
                
                {/* Photo Container */}
                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="relative aspect-[4/5] w-full rounded-xl overflow-hidden cursor-pointer group/img bg-[#091638]"
                >
                  <Image
                    src="/radha.jpg"
                    alt="Radha Kushwah holding academic award trophy"
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                  />
                  
                  {/* Subtle dark gradient overlay at bottom for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050e24]/90 via-transparent to-transparent opacity-80 group-hover/img:opacity-60 transition-opacity" />

                  {/* Corner Click To Zoom Indicator */}
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-blue-950/80 backdrop-blur-md border border-blue-400/50 text-white opacity-0 group-hover/img:opacity-100 transition-opacity shadow-lg">
                    <ZoomIn className="w-4 h-4 text-sky-300" />
                  </div>

                  {/* Bottom Photo Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#071334]/85 backdrop-blur-md border border-blue-400/40 shadow-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-4 h-4 text-amber-300" />
                      <span className="text-xs font-bold text-white tracking-wide">
                        Achievement & Excellence Award
                      </span>
                    </div>
                    <p className="text-[11px] text-sky-100/90 leading-tight">
                      Recognized for exceptional commitment & academic performance at R.B.S. College
                    </p>
                  </div>
                </div>

                {/* Frame Corner Accents */}
                <div className="flex items-center justify-between px-3 py-2 text-xs text-sky-400/80 font-mono">
                  <span>AGRA // 2026</span>
                  <span className="flex items-center gap-1.5 text-white font-semibold">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                    RADHA KUSHWAH
                  </span>
                </div>

              </div>

              {/* Floating Mini Badge */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#09173d] border border-blue-400/50 shadow-2xl backdrop-blur-lg">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center font-extrabold text-xs shadow-md">
                  BA
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">RBS College Scholar</div>
                  <div className="text-[10px] text-sky-300">Class of 2024–2027</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Image Modal for Full View */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#030818]/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-lg w-full bg-[#081538] border-2 border-blue-400/50 rounded-2xl overflow-hidden p-3 shadow-2xl shadow-blue-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-blue-950/90 text-white hover:bg-white hover:text-blue-950 transition-colors border border-blue-500/40"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
              <Image
                src="/radha.jpg"
                alt="Radha Kushwah"
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-base font-bold text-white">Radha Kushwah</h3>
              <p className="text-xs text-sky-300 mt-1">
                Holding Academic & Co-Curricular Excellence Trophy • R.B.S. College, Agra
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
