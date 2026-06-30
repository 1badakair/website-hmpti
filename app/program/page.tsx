import type { Metadata } from "next"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { ProgramHero } from "@/components/sections/program/ProgramHero"
import { ProgramListSection } from "@/components/sections/program/ProgramListSection"

export const metadata: Metadata = {
  title: "Program - HMPTI UKSW",
  description:
    "Daftar program kerja HMPTI UKSW untuk kegiatan internal, ekstra akademik, dan akademik.",
}

export default function ProgramPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#001b4b] text-white">
      <Navbar />
      <main>
        <ProgramHero />
        <ProgramListSection />
      </main>
      <Footer />
    </div>
  )
}
