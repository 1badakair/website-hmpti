import type { Metadata } from "next"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { AboutHero } from "@/components/sections/about/AboutHero"
import { GaleriHmpti } from "@/components/sections/about/GaleriHmpti"
import { Maskot } from "@/components/sections/about/Maskot"
import { TentangKami } from "@/components/sections/about/TentangKami"
import { VisiMisi } from "@/components/sections/about/VisiMisi"

export const metadata: Metadata = {
  title: "Tentang Kami — HMPTI UKSW",
  description:
    "Mengenal Himpunan Mahasiswa Program Studi Teknik Informatika (HMPTI) UKSW: visi misi, maskot Owiie, dan galeri kegiatan.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#032d5c] text-white">
      <Navbar />
      <main>
        <AboutHero />
        <TentangKami />
        <VisiMisi />
        <Maskot />
        <GaleriHmpti />
      </main>
      <Footer />
    </div>
  )
}
