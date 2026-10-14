'use client';

import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Music, 
  Heart, 
  Quote
} from 'lucide-react';

export default function HobbiesSection() {
  const hobbies = [
    {
      title: 'Dancing',
      category: 'Performing Arts & Rhythm',
      icon: Music,
      tagline: 'Expression, Harmony & Physical Energy',
      quote: 'Dance is the poetic rhythm of life. It translates raw emotion into graceful motion.',
      description:
        'Dancing is one of my greatest creative passions. Whether participating in festive celebrations, cultural stage events, or expressive dance routines, it cultivates rhythm, mental presence, and vibrant joy.',
      benefits: [
        'Builds unwavering stage confidence & public poise',
        'Enhances physical coordination, balance, and agility',
        'Fosters creative storytelling through movement',
        'Nurtures teamwork and synchronization in group dances',
      ],
      stats: 'Passionate Performer',
    },
    {
      title: 'Reading',
      category: 'Literary Exploration & Learning',
      icon: BookOpen,
      tagline: 'Intellectual Depth, Focus & Imagination',
      quote: 'Today a reader, tomorrow a leader. Every page turned is a new horizon discovered.',
      description:
        'Reading is my gateway to continuous self-improvement and broader perspectives. From classic literature and regional narratives to insightful articles and modern guides, books nurture focus and intellectual curiosity.',
      benefits: [
        'Enriches vocabulary, communication, and rhetoric',
        'Strengthens analytical ability and critical reasoning',
        'Sharpens deep focus and concentration span',
        'Broadens empathy and cultural understanding',
      ],
      stats: 'Avid Book Lover',
    },
  ];

  return (
    <section id="hobbies" className="py-24 relative overflow-hidden bg-[#030818] border-t border-blue-500/20">
      
      {/* Ambient background blur */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-mono text-sky-300 uppercase tracking-widest mb-3 shadow-md">
            <Heart className="w-3.5 h-3.5 text-sky-400" />
            <span>Passions & Interests</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Hobbies &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
              Creative Outlets
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 mt-4 rounded-full shadow-lg shadow-blue-500/50" />
          <p className="text-slate-300 max-w-2xl mt-4 text-sm sm:text-base">
            How I cultivate balance, creative energy, and intellectual curiosity outside the lecture hall.
          </p>
        </div>

        {/* Two Featured Hobbies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {hobbies.map((hobby, idx) => {
            const Icon = hobby.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 sm:p-10 rounded-3xl flex flex-col justify-between border border-blue-500/25 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle top corner gradient */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/[0.1] rounded-full blur-3xl group-hover:bg-sky-400/[0.18] transition-all" />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-600/35">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-400/40 text-xs font-mono text-sky-200 font-semibold shadow-inner">
                      {hobby.stats}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1 font-semibold">
                    {hobby.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    {hobby.title}
                  </h3>
                  <div className="text-sm font-semibold text-sky-200 mb-4">
                    {hobby.tagline}
                  </div>

                  {/* Quote block */}
                  <div className="p-4 rounded-2xl bg-[#061230]/80 border border-blue-500/25 mb-6 relative shadow-inner">
                    <Quote className="w-4 h-4 text-sky-400 mb-1" />
                    <p className="text-xs sm:text-sm italic text-slate-200 leading-relaxed">
                      &ldquo;{hobby.quote}&rdquo;
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {hobby.description}
                  </p>
                </div>

                {/* Key takeaways */}
                <div className="pt-4 border-t border-blue-500/20">
                  <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold mb-3">
                    Character & Skill Benefits
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {hobby.benefits.map((benefit, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-center gap-2 text-xs text-slate-200 bg-[#071333]/70 p-2.5 rounded-xl border border-blue-500/20"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span className="truncate">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Complementary Life Balance Quote */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-gradient-to-r from-[#09173d] via-[#0b1c48] to-[#071233] border border-blue-500/30 max-w-3xl mx-auto shadow-xl">
          <p className="text-sm text-slate-200">
            <strong className="text-white">The Harmony of Body & Mind:</strong> Dancing brings vibrant rhythm and expressive confidence, while reading instills quiet contemplation and analytical vision. Together, they shape a well-rounded and creative personality.
          </p>
        </div>

      </div>
    </section>
  );
}
