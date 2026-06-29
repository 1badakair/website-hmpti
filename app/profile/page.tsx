import { DepartmentSection } from "@/components/sections/profile/DepartmentSection"
import { ProfileHero } from "@/components/sections/profile/ProfileHero"
import { StructureSection } from "@/components/sections/profile/StructureSection"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#032d5c] text-white">
      <ProfileHero />
      <StructureSection />
      <DepartmentSection />
    </main>
  )
}
