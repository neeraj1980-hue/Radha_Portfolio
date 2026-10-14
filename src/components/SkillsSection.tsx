'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  Bot, 
  Cpu, 
  Sparkles, 
  Layers, 
  BarChart, 
  Zap,
  ArrowRight
} from 'lucide-react';

interface SkillItem {
  name: string;
  level: number; // percentage
  desc: string;
  tags: string[];
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'office' | 'ai' | 'productivity'>('all');

  const officeSkills: SkillItem[] = [
    {
      name: 'M.S. Word',
      level: 95,
      desc: 'Expertise in official correspondence, document formatting, report creation, styling, and table management.',
      tags: ['Documentation', 'Formatting', 'Reports', 'Templates'],
    },
    {
      name: 'M.S. Excel',
      level: 88,
      desc: 'Data tabulation, spreadsheet analysis, formula calculations, sorting, and structured data entry.',
      tags: ['Spreadsheets', 'Formulas', 'Data Entry', 'Tables'],
    },
    {
      name: 'M.S. PowerPoint',
      level: 90,
      desc: 'Designing clean, visually compelling presentation slides with animations and structured typography.',
      tags: ['Presentations', 'Slide Design', 'Visual Hierarchy'],
    },
    {
      name: 'WordPad',
      level: 95,
      desc: 'Rapid draft preparation, rich text formatting, lightweight system notes, and swift text editing.',
      tags: ['Quick Notes', 'Rich Text', 'Speed Typing'],
    },
  ];

  const aiSkills: SkillItem[] = [
    {
      name: 'Generative AI & LLMs',
      level: 92,
      desc: 'Prompt engineering across ChatGPT, Google Gemini, and Claude for accelerated research and problem-solving.',
      tags: ['Prompting', 'Gemini', 'ChatGPT', 'AI Research'],
    },
    {
      name: 'AI Document Assistance',
      level: 90,
      desc: 'Leveraging AI for rapid proofreading, essay structuring, content summarization, and synthesis.',
      tags: ['Summarization', 'Proofreading', 'Ideation'],
    },
    {
      name: 'AI Creative & Productivity Tools',
      level: 86,
      desc: 'Using modern AI software to automate routine tasks, brainstorm concepts, and enhance digital workflow.',
      tags: ['Workflow Automation', 'Creative Brainstorming'],
    },
  ];

  const productivitySkills: SkillItem[] = [
    {
      name: 'High-Accuracy Typing',
      level: 92,
      desc: 'Fast typing speed with meticulous attention to spelling, punctuation, and structural alignment.',
      tags: ['Speed', 'Accuracy', 'Data Input'],
    },
    {
      name: 'Analytical & Critical Thinking',
      level: 89,
      desc: 'Drawing insights, evaluating complex ideas, and structuring coherent academic presentations.',
      tags: ['Analysis', 'Problem Solving', 'Reasoning'],
    },
    {
      name: 'Digital Organization & File Management',
      level: 94,
      desc: 'Systematic directory structures, cloud backups, version control of documents, and tidy workspaces.',
      tags: ['System Admin', 'Backups', 'Organization'],
    },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'office') return officeSkills;
    if (activeTab === 'ai') return aiSkills;
    if (activeTab === 'productivity') return productivitySkills;
    return [...officeSkills, ...aiSkills, ...productivitySkills];
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#030818] border-t border-blue-500/20">
      
      {/* Background radial blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-blue-600/[0.1] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-mono text-sky-300 uppercase tracking-widest mb-3 shadow-md">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 mt-4 rounded-full shadow-lg shadow-blue-500/50" />
          <p className="text-slate-300 max-w-2xl mt-4 text-sm sm:text-base">
            Proficiencies across official desktop software, document creation, and modern AI technological toolsets.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-12">
          {[
            { id: 'all', label: 'All Skills', icon: Layers },
            { id: 'office', label: 'M.S. Office & WordPad', icon: FileText },
            { id: 'ai', label: 'AI Tools & Tech', icon: Bot },
            { id: 'productivity', label: 'Productivity & Analytics', icon: BarChart },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-600/40 scale-105'
                    : 'bg-[#081538] text-slate-300 border border-blue-500/25 hover:text-white hover:border-blue-400/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={skill.name + index}
              className="glass-panel p-6 rounded-3xl flex flex-col justify-between border border-blue-500/20 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-sky-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-sky-200 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-sky-300 font-bold bg-blue-950/70 px-2 py-0.5 rounded-md border border-blue-500/30">
                    {skill.level}%
                  </span>
                </div>

                {/* Blue & White Animated Progress Bar */}
                <div className="w-full h-2 bg-[#061028] rounded-full overflow-hidden mb-4 border border-blue-500/20">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-white rounded-full transition-all duration-1000 shadow-sm shadow-sky-400/50"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {skill.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-blue-500/20">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-blue-950/60 border border-blue-500/25 text-[10px] font-mono text-sky-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Tech Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0a1842] via-[#08153b] to-[#040e2b] border border-blue-500/35 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-950">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-blue-500/35">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Modern Tooling & Artificial Intelligence</h4>
              <p className="text-xs text-sky-200 mt-1">
                Leveraging next-gen digital suites to streamline academic projects and professional administrative workflow.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-white text-blue-950 text-xs font-bold hover:bg-sky-50 transition-all whitespace-nowrap shadow-lg shadow-white/10 hover:scale-105"
            >
              Discuss Opportunities
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
