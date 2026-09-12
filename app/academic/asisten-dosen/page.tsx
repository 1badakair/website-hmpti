import type { Metadata } from "next"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { AsdosFormSection } from "@/components/sections/academic/asisten-dosen/AsdosFormSection"
import { AsdosGallerySection } from "@/components/sections/academic/asisten-dosen/AsdosGallerySection"
import { AsdosHero } from "@/components/sections/academic/asisten-dosen/AsdosHero"
import { AsdosRegistrationSection } from "@/components/sections/academic/asisten-dosen/AsdosRegistrationSection"

export const metadata: Metadata = {
  title: "Asisten Dosen - HMPTI UKSW",
  description:
    "Informasi, aspirasi, pendaftaran, dan galeri akademik Asisten Dosen HMPTI UKSW.",
}

export default function AssistantLecturerPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#001b4b] text-white">
      <Navbar />
      <main id="main-content">
        <AsdosHero />
        <AsdosFormSection />
        <AsdosRegistrationSection />
        <AsdosGallerySection />
      </main>
      <Footer />
    </div>
  )
}
