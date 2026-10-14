import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import HobbiesSection from '@/components/HobbiesSection';
import AddressSection from '@/components/AddressSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030717] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <HobbiesSection />
      <AddressSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
