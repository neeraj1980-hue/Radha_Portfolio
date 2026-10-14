'use client';

import React from 'react';
import { 
  User, 
  Calendar, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  BookOpen,
  Heart
} from 'lucide-react';

export default function AboutSection() {
  const personalInfo = [
    { label: 'Full Name', value: 'Radha Kushwah', icon: User },
    { label: 'Date of Birth', value: '13 March 2007', icon: Calendar },
    { label: 'Degree', value: 'Bachelor of Arts (B.A.)', icon: GraduationCap },
    { label: 'College', value: 'R.B.S. College, Agra', icon: GraduationCap },
    { label: 'Address', value: 'New Dev Nagar, Khandari, Agra', icon: MapPin },
    { label: 'Phone', value: '+91 9808869470', icon: Phone },
    { label: 'Email', value: 'radhakushwaha01165@gmail.com', icon: Mail },
    { label: 'Interests', value: 'Dancing & Reading', icon: Heart },
  ];

  const highlights = [
    'Academic Excellence at R.B.S. College with consistent high performance',
    'Certified competency in M.S. Office (Word, Excel, PowerPoint) and WordPad',
    'Adept at applying modern AI tools for accelerated research and problem-solving',
    'Active participant in cultural dance festivals and college stage events',
    'Disciplined reader with strong verbal & written communication',
    'Resident of Khandari, Agra with deep connection to cultural heritage',
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#04091c]/70 border-t border-blue-500/20">
      
      {/* Decorative ambient blue blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/[0.1] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-mono text-sky-300 uppercase tracking-widest mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Know Me Better</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
              Radha Kushwah
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 mt-4 rounded-full shadow-lg shadow-blue-500/50" />
          <p className="text-slate-300 max-w-2xl mt-4 text-sm sm:text-base">
            A snapshot into my academic pathway, technical capabilities, creative passion, and personal background.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Biography Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-panel p-8 sm:p-10 rounded-3xl relative group border border-blue-500/25 hover:border-blue-400/50 transition-all duration-300 shadow-xl shadow-blue-950/50">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center font-extrabold text-base shadow-lg shadow-blue-500/30">
                  RK
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Radha Kushwah</h3>
                  <p className="text-xs text-sky-400 font-mono font-semibold">B.A. Scholar & Tech Enthusiast</p>
                </div>
              </div>

              <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                Hello! I am <strong className="text-white font-semibold">Radha Kushwah</strong>, residing in{' '}
                <strong className="text-sky-300 font-semibold">New Dev Nagar, Khandari, Agra</strong>. I am actively pursuing my Bachelor of Arts (B.A.) at one of northern India&apos;s most prestigious institutions,{' '}
                <strong className="text-white font-semibold">Raja Balwant Singh (R.B.S.) College</strong>.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I believe in blending the cultural and intellectual foundation of humanities with modern computational capabilities. I have honed solid practical skills in{' '}
                <strong className="text-sky-200 font-medium">M.S. Office (Word, Excel, PowerPoint)</strong>,{' '}
                <strong className="text-sky-200 font-medium">WordPad</strong>, and cutting-edge{' '}
                <strong className="text-sky-200 font-medium">AI productivity tools</strong>.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Beyond academics, my soul is fueled by{' '}
                <strong className="text-white font-medium">dancing</strong>—which cultivates grace, rhythm, and self-confidence—and{' '}
                <strong className="text-white font-medium">reading</strong>, which constantly broadens my horizons, critical thinking, and vocabulary.
              </p>

              {/* Core Strengths Checklist */}
              <div className="pt-3 border-t border-blue-500/20 space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-3">
                  Core Attributes & Strengths
                </h4>
                {highlights.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-500/20 flex items-center justify-between">
              <span className="text-xs font-mono text-sky-400/80 font-semibold">RESIDENCE: KHANDARI, AGRA</span>
              <a
                href="#contact"
                className="text-xs font-bold text-sky-300 underline underline-offset-4 hover:text-white transition-colors"
              >
                Let&apos;s Connect →
              </a>
            </div>
          </div>

          {/* Right: Structured Data Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-blue-500/25 shadow-xl shadow-blue-950/50">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-600/30 text-sky-400">
                  <User className="w-5 h-5 text-sky-300" />
                </div>
                <span>Personal Particulars & Credentials</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#081538]/80 border border-blue-500/20 hover:border-blue-400/60 transition-all hover:translate-x-0.5 shadow-sm"
                    >
                      <div className="flex items-center gap-2 text-sky-400 text-xs mb-1">
                        <Icon className="w-3.5 h-3.5 text-sky-400" />
                        <span className="text-slate-400 font-medium">{info.label}</span>
                      </div>
                      <div className="text-sm font-semibold text-white truncate" title={info.value}>
                        {info.value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quote / Philosophy Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0c1a44] to-[#06102a] border border-blue-500/30 flex flex-col justify-between shadow-xl shadow-blue-950/60">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white shrink-0 shadow-md shadow-blue-600/30">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm italic text-slate-200 leading-relaxed font-normal">
                    &ldquo;Success is the sum of small efforts, repeated day in and day out. Combining academic diligence with modern digital tools unlocks infinite potential.&rdquo;
                  </p>
                  <p className="text-xs font-mono text-sky-300 font-bold mt-2.5">— Radha Kushwah</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
