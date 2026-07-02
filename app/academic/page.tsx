import type { Metadata } from "next"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { AcademicStatsSection } from "@/components/sections/academic/AcademicStatsSection"
import { AspirationSection } from "@/components/sections/academic/AspirationSection"
import { AcademicHero } from "@/components/sections/academic/AcademicHero"
import { AcademicInfoSection } from "@/components/sections/academic/AcademicInfoSection"
import { RecentActivitiesSection } from "@/components/sections/academic/RecentActivitiesSection"

export const metadata: Metadata = {
  title: "Academic - HMPTI UKSW",
  description:
    "Academic Hub HMPTI UKSW untuk informasi lomba, seminar, beasiswa, magang, dan asisten dosen.",
}

export default function AcademicPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#001b4b] text-white">
      <Navbar />
      <main>
        <AcademicHero />
        <AcademicInfoSection />
        <AcademicStatsSection />
        <RecentActivitiesSection />
        <AspirationSection />
      </main>
      <Footer />
    </div>
  )
}
