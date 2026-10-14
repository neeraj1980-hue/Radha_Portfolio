'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ['home', 'about', 'skills', 'education', 'hobbies', 'location', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#060e24]/85 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl shadow-blue-950/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-400 p-[1.5px] shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-all duration-300">
              <div className="w-full h-full rounded-full bg-[#07112c] flex items-center justify-center font-bold text-white tracking-widest text-sm">
                RK
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white tracking-tight group-hover:text-blue-200 transition-colors">
                Radha Kushwah
              </span>
              <span className="text-[11px] text-sky-400 font-mono tracking-wider uppercase font-semibold">
                Scholar & Creative
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#091536]/80 border border-blue-500/20 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg shadow-blue-950/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-blue-900/30'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Quick Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white hover:from-blue-500 hover:to-sky-400 transition-all duration-300 shadow-lg shadow-blue-600/35 hover:shadow-blue-500/50 hover:scale-105 active:scale-95"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#0b1739] border border-blue-500/30 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5 text-sky-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 bg-[#070f28]/95 border-b border-blue-500/20 backdrop-blur-2xl animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-blue-900/40 border border-transparent hover:border-blue-500/30 transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-600/40 transition-all"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
