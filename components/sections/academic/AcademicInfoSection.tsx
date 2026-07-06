"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { academicPagePosts } from "@/data/academic"
import type { AcademicCategory } from "@/types"
import { AcademicCard } from "./AcademicCard"
import { AcademicFilter } from "./AcademicFilter"

export function AcademicInfoSection() {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<AcademicCategory | null>(null)

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return academicPagePosts.filter((post) => {
      const matchesCategory = !activeCategory || post.category === activeCategory
      const searchable = `${post.title} ${post.category} ${post.description}`.toLowerCase()
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery)

      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <section className="relative -mt-[39px] overflow-hidden rounded-t-[35px] bg-[#001b4b] px-5 pb-12 pt-20 sm:px-8 sm:pt-[100px] lg:px-16 lg:pt-[118px]">
      <Image
        src="/figma/star-rough.png"
        alt=""
        width={140}
        height={140}
        className="absolute left-[11%] top-[98px] hidden h-[100px] w-[100px] object-contain opacity-60 md:block"
      />
      <Image
        src="/figma/star-blob-white.svg"
        alt=""
        width={118}
        height={118}
        className="absolute right-[11%] top-[285px] hidden h-[96px] w-[96px] object-contain md:block"
      />

      <div className="mx-auto max-w-[1217px]">
        <div className="mx-auto max-w-[916px] text-center">
          <h2 className="font-[family-name:var(--font-goldman)] text-[clamp(3rem,6vw,4rem)] leading-none text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] [text-shadow:0_4px_0_rgba(0,0,0,0.18)]">
            HMPTI <span className="text-[#ffbd4a]">Info</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[724px] font-[family-name:var(--font-inter)] text-sm font-bold leading-[1.45] text-white sm:mt-10 sm:text-[22px] lg:mt-[52px]">
            Search for seminar info, scholarships, and the latest interesting programs
            lainnya.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 lg:mt-[76px]">
          <AcademicFilter
            query={query}
            onQueryChange={setQuery}
          />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 xl:gap-[27px]">
          {filteredPosts.map((post) => (
            <AcademicCard
              active={activeCategory === post.category}
              key={post.id}
              post={post}
              onSelect={() =>
                setActiveCategory((current) =>
                  current === post.category ? null : post.category,
                )
              }
            />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="mt-9 rounded-[16px] border-2 border-white/20 bg-white/[0.06] px-6 py-12 text-center font-[family-name:var(--font-inter)] text-white/70">
            Info akademik belum ditemukan. Coba kata kunci atau kategori lain.
          </div>
        )}
      </div>
    </section>
  )
}
