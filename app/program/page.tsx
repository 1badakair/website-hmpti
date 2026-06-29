import { ProgramHero } from "@/components/sections/program/ProgramHero"
import { ProgramListSection } from "@/components/sections/program/ProgramListSection"

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-[#032d5c] text-white">
      <ProgramHero />
      <ProgramListSection />
    </main>
  )
}
