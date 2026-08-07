import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AccredianEdgeSection } from "@/components/sections/AccredianEdgeSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { CatFrameworkSection } from "@/components/sections/CatFrameworkSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CourseSegmentationSection } from "@/components/sections/CourseSegmentationSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <PartnersSection />
        <AccredianEdgeSection />
        <ExpertiseSection />
        <CourseSegmentationSection />
        <AudienceSection />
        <CatFrameworkSection />
        <ProcessSection />
        <FaqSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
