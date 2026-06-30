import type { Metadata } from "next"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { ProfileHero } from "@/components/sections/profile/ProfileHero"
import { ProfileStructureSection } from "@/components/sections/profile/ProfileStructureSection"

export const metadata: Metadata = {
  title: "Profile — HMPTI UKSW",
  description:
    "Kenali struktur dan divisi HMPTI UKSW: BPH, Operation, Creative, Academic, dan Humanitarian.",
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[linear-gradient(180deg,#023f93_0%,rgba(29,96,188,0.8)_22%,rgba(5,96,195,0.5)_32%,rgba(3,62,135,0.75)_40%,#001b4b_88%)] text-white">
      <Navbar />
      <main>
        <ProfileHero />
        <ProfileStructureSection />
      </main>
      <Footer />
    </div>
  )
}
