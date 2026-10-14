'use client';

import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  Trophy
} from 'lucide-react';

export default function EducationSection() {
  const educationItems = [
    {
      degree: 'Bachelor of Arts (B.A.)',
      institution: 'Raja Balwant Singh (R.B.S.) College',
      location: 'Agra, Uttar Pradesh',
      duration: 'Present / Ongoing',
      type: 'Undergraduate Degree',
      status: 'Active Scholar',
      description:
        'Pursuing higher education at the prestigious R.B.S. College in Agra. Developing an expansive understanding of humanities, literature, social sciences, and critical analytical methodologies.',
      achievements: [
        'Recognized with Trophy & Certificate of Merit for academic & co-curricular dedication',
        'Active participant in collegiate seminars, debates, and cultural forums',
        'Strong focus on language comprehension, critical thinking, and written expression',
        'Fostered teamwork and leadership within student project groups',
      ],
      highlight: true,
    },
    {
      degree: 'Senior Secondary Education (Class XII)',
      institution: 'Higher Secondary School',
      location: 'Agra, Uttar Pradesh',
      duration: 'Completed',
      type: 'Higher Secondary Board',
      status: 'Graduated',
      description:
        'Completed senior secondary schooling with distinction. Developed foundational strengths in communication, social sciences, and computer fundamentals.',
      achievements: [
        'Maintained high academic standing with consistent coursework grades',
        'Participated in school cultural dance programs and literary reading clubs',
      ],
      highlight: false,
    },
    {
      degree: 'Computer & Office Applications Certification',
      institution: 'Professional Skills & Digital Upskilling',
      location: 'Agra, Uttar Pradesh',
      duration: 'Practical Mastery',
      type: 'Technical Specialization',
      status: 'Proficient',
      description:
        'Specialized practical training in Microsoft Office (Word, Excel, PowerPoint), WordPad, and emerging AI generative technologies.',
      achievements: [
        'Hands-on expertise in document styling, spreadsheet formulas, and slide design',
        'Effective utilization of prompt engineering and automated AI tools for workflow acceleration',
      ],
      highlight: false,
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#04091c]/80 border-t border-blue-500/20">
      
      {/* Background illumination */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-mono text-sky-300 uppercase tracking-widest mb-3 shadow-md">
            <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
            <span>Academic Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Education &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 mt-4 rounded-full shadow-lg shadow-blue-500/50" />
          <p className="text-slate-300 max-w-2xl mt-4 text-sm sm:text-base">
            Formal education credentials and ongoing pursuit of academic and technological excellence.
          </p>
        </div>

        {/* Timeline / Cards */}
        <div className="space-y-8">
          {educationItems.map((edu, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                edu.highlight
                  ? 'bg-gradient-to-br from-[#091840] via-[#071333] to-[#040c24] border-2 border-blue-400/50 shadow-2xl shadow-blue-950/80 relative overflow-hidden'
                  : 'glass-panel hover:border-blue-400/50 shadow-lg'
              }`}
            >
              {edu.highlight && (
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold text-[11px] uppercase tracking-wider rounded-bl-2xl flex items-center gap-1.5 shadow-lg shadow-blue-600/40">
                  <Trophy className="w-3.5 h-3.5 text-amber-300" />
                  <span>Featured Credential</span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Meta details column */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-blue-950/80 border border-blue-500/30 text-xs font-mono text-sky-300 font-semibold">
                      {edu.type}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-blue-600/30 text-xs font-bold text-sky-200 border border-blue-400/30">
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {edu.degree}
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <Building2 className="w-4 h-4 text-sky-400" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-sky-400" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-sky-400" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Description and Key Achievements column */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
                      Key Highlights & Accomplishments
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {edu.achievements.map((achieve, aIdx) => (
                        <div
                          key={aIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-[#061230]/70 border border-blue-500/25 text-xs text-slate-200 hover:border-blue-400/50 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span>{achieve}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Institution Callout Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#09173d] to-[#050f28] border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <Building2 className="w-8 h-8 text-sky-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">About R.B.S. College, Agra</div>
              <div className="text-xs text-sky-200 mt-0.5">
                Established in 1885, Raja Balwant Singh College is one of the premier educational institutions of Northern India.
              </div>
            </div>
          </div>
          <a
            href="https://www.google.com/search?q=RBS+College+Agra"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white whitespace-nowrap transition-colors shadow-md shadow-blue-600/30"
          >
            Learn More ↗
          </a>
        </div>

      </div>
    </section>
  );
}
