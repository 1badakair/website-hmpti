import type { Metadata } from "next"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { AspirationFormSection } from "@/components/sections/aspiration/AspirationFormSection"
import { AspirationHero } from "@/components/sections/aspiration/AspirationHero"

export const metadata: Metadata = {
  title: "Aspiration - HMPTI UKSW",
  description: "Halaman aspirasi HMPTI UKSW untuk menampung masukan mahasiswa.",
}

export default function AspirationPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#001b4b] text-white">
      <Navbar />
      <main>
        <AspirationHero />
        <AspirationFormSection />
      </main>
      <Footer />
    </div>
  )
}
