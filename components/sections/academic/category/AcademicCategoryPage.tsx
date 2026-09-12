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
    <section className="relative -mt-[35px] overflow-hidden rounded-t-[35px] bg-[#001b4b] px-5 pb-24 pt-24 sm:px-8 sm:pb-[116px] sm:pt-[140px] lg:px-16 lg:pt-[178px]">
      <div className="mx-auto max-w-[1168px]">
        <AcademicCategoryFilter
          activeScope={activeScope}
          onQueryChange={setQuery}
          onScopeChange={setActiveScope}
          query={query}
          resultCount={filteredItems.length}
        />

        <div className="mx-auto mt-12 grid max-w-[990px] gap-x-10 gap-y-8 sm:mt-16 sm:gap-y-12 lg:grid-cols-2 lg:mt-[95px]">
          {filteredItems.map((item) => (
            <AcademicCategoryCard item={item} key={item.id} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="mx-auto mt-12 max-w-[990px] rounded-[16px] border-2 border-white/20 bg-white/[0.06] px-6 py-10 text-center font-[family-name:var(--font-inter)] text-white/70 sm:mt-[95px] sm:py-12">
            No info found. Try another keyword or scope.
          </div>
        )}
      </div>
    </section>
  )
}
