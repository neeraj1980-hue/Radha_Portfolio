'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Copy, 
  Check, 
  ArrowUpRight,
  MessageCircle,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phone = '9808869470';
  const email = 'radhakushwaha01165@gmail.com';
  const address = 'New Dev Nagar, Khandari, Agra';

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Blue & White Confetti
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#ffffff', '#38bdf8']
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 1000);
  };

  const setTemplate = (subjectText: string) => {
    setFormData((prev) => ({ ...prev, subject: subjectText }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#030717] border-t border-blue-500/20">
      
      {/* Background illumination */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-blue-600/[0.12] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-mono text-sky-300 uppercase tracking-widest mb-3 shadow-md">
            <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Let&apos;s Start a{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 mt-4 rounded-full shadow-lg shadow-blue-500/50" />
          <p className="text-slate-300 max-w-2xl mt-4 text-sm sm:text-base">
            Have an academic inquiry, collaborative project, or professional opportunity? Reach out directly via call, WhatsApp, or email.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Phone Card */}
            <div className="glass-panel p-6 rounded-3xl border border-blue-500/25 hover:border-blue-400/60 transition-all group shadow-xl shadow-blue-950/60">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-sky-400 uppercase font-semibold">Direct Phone Call</div>
                    <div className="text-base font-bold text-white tracking-wide mt-0.5">
                      +91 {phone}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(phone, 'phone')}
                  className="p-2 rounded-xl bg-blue-950/80 border border-blue-500/30 hover:bg-blue-900 text-sky-300 hover:text-white transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-blue-500/20 flex items-center gap-3">
                <a
                  href={`tel:${phone}`}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold text-xs text-center hover:from-blue-500 hover:to-sky-400 transition-all shadow-md shadow-blue-600/30"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/91${phone}?text=Hello%20Radha,%20I%20saw%20your%20portfolio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#08153a] border border-blue-500/30 hover:border-blue-400 text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="glass-panel p-6 rounded-3xl border border-blue-500/25 hover:border-blue-400/60 transition-all group shadow-xl shadow-blue-950/60">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-sky-400 uppercase font-semibold">Email Address</div>
                    <div className="text-sm font-bold text-white tracking-wide mt-0.5 truncate max-w-[200px] sm:max-w-none">
                      {email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(email, 'email')}
                  className="p-2 rounded-xl bg-blue-950/80 border border-blue-500/30 hover:bg-blue-900 text-sky-300 hover:text-white transition-colors"
                  title="Copy Email Address"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-blue-500/20">
                <a
                  href={`mailto:${email}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white hover:bg-sky-50 text-blue-950 font-bold text-xs text-center transition-all shadow-md shadow-white/10"
                >
                  <span>Send Direct Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
                </a>
              </div>
            </div>

            {/* Location Reference Card */}
            <div className="glass-panel p-6 rounded-3xl border border-blue-500/25 shadow-xl shadow-blue-950/60">
              <div className="flex items-center gap-3.5 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-[#09173d] border border-blue-500/30 flex items-center justify-center text-sky-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-sky-400 uppercase font-semibold">Home Address</div>
                  <div className="text-sm font-bold text-white">
                    {address}
                  </div>
                </div>
              </div>
              <div className="text-xs text-slate-300 mt-2 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>IST (Indian Standard Time, UTC +5:30)</span>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#071333] to-[#040d24] border border-blue-500/30 flex items-center gap-3 shadow-lg">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div className="text-xs text-slate-200">
                <strong className="text-white">Actively Available:</strong> Open for academic projects, computer work, and collaborative initiatives.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-blue-500/30 relative shadow-2xl shadow-blue-950/80">
            
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center font-bold shadow-xl shadow-blue-600/40">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                <p className="text-sm text-slate-200 max-w-md">
                  Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Radha Kushwah will review your message and get back to you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-xs font-bold text-white transition-all shadow-md shadow-blue-600/30 hover:scale-105"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-1">
                    Send a Direct Note
                  </h3>
                  <p className="text-xs text-slate-300">
                    Fill out this form and I will respond to your inquiry promptly.
                  </p>
                </div>

                {/* Quick Topic Selectors */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-sky-400 font-semibold">
                    Select Topic / Subject
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Academic Project',
                      'M.S. Office / Computer Work',
                      'AI Tools Discussion',
                      'General Networking',
                    ].map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setTemplate(topic)}
                        className={`px-3.5 py-1 rounded-full text-xs font-semibold border transition-all ${
                          formData.subject === topic
                            ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white border-transparent shadow-md shadow-blue-600/30'
                            : 'bg-[#081538] text-slate-300 border-blue-500/25 hover:border-blue-400 hover:text-white'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-sky-300 mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Amit Sharma"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#06102a] border border-blue-500/25 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-sky-300 mb-1.5 font-medium">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#06102a] border border-blue-500/25 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-sky-300 mb-1.5 font-medium">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#06102a] border border-blue-500/25 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-sky-300 mb-1.5 font-medium">
                      Subject Line *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Topic of inquiry"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#06102a] border border-blue-500/25 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-sky-300 mb-1.5 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Hello Radha, I would like to discuss..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#06102a] border border-blue-500/25 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white font-extrabold text-sm tracking-wide hover:from-blue-500 hover:to-sky-400 transition-all disabled:opacity-50 shadow-xl shadow-blue-600/35 active:scale-95 hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Radha</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
