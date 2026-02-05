import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ClassesSubjectsSection from '../components/sections/ClassesSubjectsSection';
import TeachingApproachSection from '../components/sections/TeachingApproachSection';
import EnquirySection from '../components/sections/EnquirySection';

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ClassesSubjectsSection />
      <TeachingApproachSection />
      <EnquirySection />
    </div>
  );
}
