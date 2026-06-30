import Link from "next/link"
import type { Program } from "@/types"
import { ProgramCard } from "./ProgramCard"

type RelatedProgramsProps = {
  programs: Program[]
}

export function RelatedPrograms({ programs }: RelatedProgramsProps) {
  if (programs.length === 0) {
    return null
  }

  return (
    <section className="bg-[#001b4b] px-5 pb-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.22em] text-[#ffbd4a]">
              Program Lainnya
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-goldman)] text-4xl text-white sm:text-5xl">
              Program Lainnya
            </h2>
          </div>
          <Link
            href="/program"
            className="inline-flex w-fit rounded-full border border-[#ffbd4a] px-5 py-3 font-[family-name:var(--font-inter)] text-sm font-bold text-[#ffbd4a] transition hover:bg-[#ffbd4a] hover:text-[#062a5c]"
          >
            Lihat Program Lain
          </Link>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  )
}
