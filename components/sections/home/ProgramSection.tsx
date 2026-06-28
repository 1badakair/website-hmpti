import Image from "next/image"
import { programs } from "@/data/programs"

export function ProgramSection() {
  return (
    <section className="px-5 pb-24 pt-16 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-[800px] gap-4 sm:grid-cols-3">
        {programs.map((program) => (
          <a
            href="#"
            key={program.title}
            className="flex h-16 items-center justify-center gap-3 rounded-lg border border-white/35 bg-white/5 px-5 font-[family-name:var(--font-inter)] text-sm font-semibold text-white backdrop-blur transition hover:border-[#ffbd4a] hover:bg-[#ffbd4a]/10"
          >
            <Image src={program.icon} alt="" width={24} height={24} className="h-6 w-6" />
            {program.title}
          </a>
        ))}
      </div>
    </section>
  )
}
