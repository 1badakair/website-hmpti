import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { AboutSection } from "@/components/sections/home/AboutSection"
import { AcademicInfoSection } from "@/components/sections/home/AcademicInfoSection"
import { FAQSection } from "@/components/sections/home/FAQSection"
import { HeroSection } from "@/components/sections/home/HeroSection"
import { ProgramSection } from "@/components/sections/home/ProgramSection"

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#032d5c] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <AcademicInfoSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
