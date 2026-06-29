import { AcademicHero } from "@/components/sections/academic/AcademicHero"
import { AcademicInfoSection } from "@/components/sections/academic/AcademicInfoSection"

export default function AcademicPage() {
  return (
    <main className="min-h-screen bg-[#032d5c] text-white">
      <AcademicHero />
      <AcademicInfoSection />
    </main>
  )
}
