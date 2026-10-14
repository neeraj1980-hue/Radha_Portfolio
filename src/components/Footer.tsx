'use client';

import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020512] border-t border-blue-500/20 py-16 relative overflow-hidden">
      
      {/* Subtle blue ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-blue-500/20">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 p-[1.5px] shadow-lg shadow-blue-500/25">
                <div className="w-full h-full rounded-full bg-[#07112c] flex items-center justify-center font-bold text-white tracking-widest text-sm">
                  RK
                </div>
              </div>
              <div>
                <div className="text-lg font-extrabold text-white">Radha Kushwah</div>
                <div className="text-xs text-sky-400 font-mono font-semibold">B.A. Scholar & Tech Enthusiast</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              Dedicated student at Raja Balwant Singh (R.B.S.) College, Agra. Combining humanities perspective with modern computer tools, M.S. Office, and AI capabilities.
            </p>

            <div className="flex items-center gap-2 text-xs text-sky-300 font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>BASED IN KHANDARI, AGRA, UTTAR PRADESH</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-white hover:underline transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-colors">About Radha</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white hover:underline transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#education" className="hover:text-white hover:underline transition-colors">Education & College</a>
              </li>
              <li>
                <a href="#hobbies" className="hover:text-white hover:underline transition-colors">Hobbies & Passions</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white hover:underline transition-colors">Address & Location</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:underline transition-colors">Contact Me</a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:9808869470" className="hover:text-white transition-colors">
                  +91 9808869470
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:radhakushwaha01165@gmail.com" className="hover:text-white transition-colors truncate">
                  radhakushwaha01165@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>New Dev Nagar, Khandari, Agra</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="https://wa.me/919808869470"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950/80 border border-blue-500/30 hover:border-blue-400 text-xs font-semibold text-white transition-all shadow-md"
              >
                <span>Chat on WhatsApp</span>
                <span className="text-[10px] text-emerald-400 font-bold">● Online</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Radha Kushwah. Crafted with Next.js & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-400/40 hover:bg-blue-600 text-white font-medium transition-all shadow-md"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
