"use client"

import { useMemo, useState } from "react"
import type { AcademicCategoryPageData } from "@/data/academic-categories"
import { AcademicCategoryCard } from "./AcademicCategoryCard"
import { AcademicCategoryFilter } from "./AcademicCategoryFilter"

type AcademicCategoryPageProps = {
  category: AcademicCategoryPageData
}

export function AcademicCategoryPage({ category }: AcademicCategoryPageProps) {
  const [query, setQuery] = useState("")
  const [activeScope, setActiveScope] = useState("Internal")

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return category.items.filter((item) => {
      const searchable = `${item.title} ${item.description} ${item.badge}`.toLowerCase()
      const matchesQuery =
        !normalizedQuery || searchable.includes(normalizedQuery)
      const matchesScope = item.scope === activeScope

      return matchesQuery && matchesScope
    })
  }, [activeScope, category.items, query])

  return (
    <section className="relative -mt-[35px] overflow-hidden rounded-t-[35px] bg-[#001b4b] px-5 pb-[132px] pt-[178px] sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1168px]">
        <AcademicCategoryFilter
          activeScope={activeScope}
          onQueryChange={setQuery}
          onScopeChange={setActiveScope}
          query={query}
        />

        <div className="mx-auto mt-[95px] grid max-w-[990px] gap-x-10 gap-y-12 lg:grid-cols-2">
          {filteredItems.map((item) => (
            <AcademicCategoryCard item={item} key={item.id} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="mx-auto mt-[95px] max-w-[990px] rounded-[16px] border-2 border-white/20 bg-white/[0.06] px-6 py-12 text-center font-[family-name:var(--font-inter)] text-white/70">
            Info belum ditemukan. Coba kata kunci atau filter lain.
          </div>
        )}
      </div>
    </section>
  )
}
