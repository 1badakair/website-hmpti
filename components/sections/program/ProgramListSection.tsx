"use client"

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
    <section className="relative overflow-hidden bg-[#001b4b] px-5 py-24 sm:px-8 lg:px-16">
      <div className="relative mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.24em] text-[#ffbd4a]">
            Program HMPTI
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-goldman)] text-4xl text-white sm:text-6xl">
            Program HMPTI
          </h2>
          <p className="mt-5 font-[family-name:var(--font-inter)] text-base leading-7 text-white/65">
            Temukan berbagai program kerja yang telah dan akan dilaksanakan oleh
            HMPTI.
          </p>
        </div>

        <div className="mt-12">
          <ProgramFilter
            activeCategory={activeCategory}
            categories={programCategories}
            query={query}
            onCategoryChange={setActiveCategory}
            onQueryChange={setQuery}
          />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="mt-14 rounded-[28px] border border-white/10 bg-white/[0.06] px-6 py-12 text-center font-[family-name:var(--font-inter)] text-white/70">
            Program belum ditemukan. Coba kata kunci atau kategori lain.
          </div>
        )}
      </div>
    </section>
  )
}
