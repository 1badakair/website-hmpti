import Image from "next/image"
import type { AcademicCategoryItem } from "@/data/academic-categories"

type AcademicCategoryCardProps = {
  item: AcademicCategoryItem
}

export function AcademicCategoryCard({ item }: AcademicCategoryCardProps) {
  return (
    <article className="overflow-hidden rounded-[20px] border-2 border-white/65 bg-[#002a75] shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0a3a80]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 470px, 100vw"
          className="object-cover"
        />
        <div className="absolute left-5 top-5 rounded bg-white/95 px-2 py-1 font-[family-name:var(--font-goldman)] text-sm text-[#0056b8]">
          HMPTI26
        </div>
      </div>

      <div className="p-5 font-[family-name:var(--font-inter)] sm:p-7">
        <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
          <span className="inline-flex items-center gap-1.5">
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M8 2v4m8-4v4M3.5 9.5h17M5 5h14a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 19 21H5a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 5 5Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            {item.date}
          </span>
          <span className="ml-auto rounded-full bg-[#f9a825] px-4 py-1 text-xs font-bold text-white">
            {item.mode}
          </span>
          <span className="rounded-full bg-[#075ccc] px-4 py-1 text-xs font-bold text-white">
            {item.badge}
          </span>
        </div>

        <h2 className="mt-4 font-[family-name:var(--font-inter)] text-xl font-bold leading-tight text-white sm:mt-5 sm:text-2xl">
          {item.title}
        </h2>
        <p className="mt-3 line-clamp-4 text-sm leading-6 text-white/72 sm:mt-4">
          {item.description}
        </p>

        <a
          href="#"
          className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-[10px] bg-[#0d75df] text-sm font-bold text-white transition hover:bg-[#1688ff] sm:mt-7 sm:h-[44px]"
        >
          Read More
          <span
            aria-hidden="true"
            className="grid h-4 w-4 place-items-center rounded-full border border-white/80 text-[10px]"
          >
            i
          </span>
        </a>
      </div>
    </article>
  )
}
