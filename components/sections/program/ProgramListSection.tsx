"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { programCategories, programPageItems } from "@/data/programs"
import type { ProgramCategory } from "@/types"
import { ProgramCard } from "./ProgramCard"
import { ProgramFilter } from "./ProgramFilter"

export function ProgramListSection() {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<ProgramCategory | "Semua">("Semua")

  const filteredPrograms = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return programPageItems.filter((program) => {
      const matchesCategory =
        activeCategory === "Semua" || program.category === activeCategory
      const searchable = `${program.title} ${program.category} ${program.description}`.toLowerCase()
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery)

      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <section className="relative -mt-[53px] overflow-hidden rounded-t-[35px] bg-[#001b4b] px-5 pb-24 pt-[90px] sm:px-8 lg:px-16">
      <Image
        src="/figma/star-rough.png"
        alt=""
        width={167}
        height={167}
        className="absolute left-[9%] top-[58px] hidden h-40 w-40 -rotate-[57deg] opacity-80 md:block"
      />
      <Image
        src="/figma/star-blob-white.svg"
        alt=""
        width={112}
        height={112}
        className="absolute right-[18%] top-[88px] hidden h-28 w-28 rotate-[73deg] opacity-90 md:block"
      />
      <Image
        src="/figma/star-solid.svg"
        alt=""
        width={84}
        height={73}
        className="absolute right-[7%] top-[190px] hidden h-12 w-14 opacity-95 lg:block"
      />
      <Image
        src="/figma/star-sparkle.svg"
        alt=""
        width={70}
        height={67}
        className="absolute left-[6%] top-[146px] hidden h-12 w-12 opacity-95 lg:block"
      />

      <div className="relative mx-auto max-w-[1168px]">
        <div className="mx-auto max-w-[916px] text-center">
          <div className="relative mx-auto w-fit">
            <h2 className="relative font-[family-name:var(--font-goldman)] text-[clamp(2.6rem,5.3vw,4.1rem)] leading-none text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.85)] [text-shadow:0_4px_0_rgba(0,0,0,0.18)]">
              Program <span className="text-[#ffbd4a]">HMPTI</span>
            </h2>
          </div>
          <p className="mx-auto mt-7 max-w-[724px] font-[family-name:var(--font-inter)] text-base font-medium leading-normal text-white sm:text-2xl">
            Temukan berbagai program kerja yang telah dan akan dilaksanakan oleh
            HMPTI
          </p>
        </div>

        <div className="mt-[90px]">
          <ProgramFilter
            activeCategory={activeCategory}
            categories={programCategories}
            query={query}
            onCategoryChange={setActiveCategory}
            onQueryChange={setQuery}
          />
        </div>

        <div className="mx-auto mt-[54px] grid max-w-[991px] gap-x-[41px] gap-y-[50px] lg:grid-cols-2">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="mx-auto mt-14 max-w-[991px] rounded-[25px] border-2 border-white/30 bg-white/[0.06] px-6 py-12 text-center font-[family-name:var(--font-inter)] text-white/70">
            Program belum ditemukan. Coba kata kunci atau kategori lain.
          </div>
        )}

        <button
          type="button"
          className="mx-auto mt-[58px] flex h-[59px] w-full max-w-[400px] items-center justify-center gap-3 rounded-[10px] border border-white bg-[#032a79] font-[family-name:var(--font-inter)] text-lg font-bold text-white transition hover:bg-[#0560c3]"
        >
          Lihat Program Lain
          <span
            aria-hidden="true"
            className="grid h-6 w-6 place-items-center rounded-full border border-white/80 text-xs"
          >
            v
          </span>
        </button>
      </div>
    </section>
  )
}
