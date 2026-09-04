import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronRight } from "lucide-react"
import type { Program } from "@/types"

type ProgramCardProps = {
  program: Program
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[25px] border-2 border-white/80 bg-[#002a75] shadow-[0_18px_42px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[#ffbd4a] focus-within:-translate-y-1 focus-within:border-[#ffbd4a]">
      <div className="relative aspect-[475/293] overflow-hidden rounded-t-[23px] bg-[#064082]">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(min-width: 1024px) 475px, 100vw"
          className="object-cover mix-blend-screen transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-[15px] top-[9px] h-[46px] w-[159px] rounded-[22px] px-[10px] py-[10px]">
          <Image
            src="/figma/program-logo-strip.png"
            alt="HMPTI26"
            width={159}
            height={46}
            className="h-full w-full object-contain object-left"
          />
        </div>
      </div>

      <div className="px-5 pb-5 pt-3 sm:px-[33px] sm:pb-[27px] sm:pt-[12px]">
        <div className="flex flex-wrap items-center justify-between gap-3 font-[family-name:var(--font-inter)]">
          <div className="flex min-w-[145px] items-center gap-1.5 text-sm font-medium text-[#a0aec0]">
            <Calendar className="h-[15px] w-[15px] shrink-0" />
            <span>{program.date}</span>
          </div>
          <div className="flex gap-2 text-xs font-medium text-white">
            <span className="flex h-[25px] min-w-[81px] items-center justify-center rounded-[8px] border border-white/80 bg-[#f9a825] px-3">
              {program.mode}
            </span>
            <span className="flex h-[25px] min-w-[91px] items-center justify-center rounded-[8px] border border-white/80 bg-[#064ddf] px-3">
              {program.category}
            </span>
          </div>
        </div>

        <h2 className="mt-5 max-w-[337px] font-[family-name:var(--font-inter)] text-xl font-bold leading-tight text-white sm:text-[22px]">
          {program.title}
        </h2>
        <p className="mt-4 min-h-[78px] font-[family-name:var(--font-inter)] text-[13px] leading-[1.32] text-white/90">
          {program.description}
        </p>
        <Link
          href={`/program/${program.slug}`}
          className="mt-6 flex h-[39px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#0560c3] font-[family-name:var(--font-inter)] text-sm font-semibold text-white transition-colors duration-300 after:absolute after:inset-0 after:rounded-[25px] after:content-[''] group-hover:bg-[#0a70da]"
        >
          Read More
          <ChevronRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
