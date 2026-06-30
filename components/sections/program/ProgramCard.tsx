import Image from "next/image"
import Link from "next/link"
import type { Program } from "@/types"

type ProgramCardProps = {
  program: Program
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="group overflow-hidden rounded-[25px] border-2 border-white/80 bg-[#002a75] shadow-[0_18px_42px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[#ffbd4a]">
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

      <div className="px-[33px] pb-[27px] pt-[12px]">
        <div className="flex flex-wrap items-center justify-between gap-3 font-[family-name:var(--font-inter)]">
          <div className="flex min-w-[145px] items-end gap-1.5 text-sm font-medium text-[#a0aec0]">
            <svg
              aria-hidden="true"
              className="h-[15px] w-[15px] shrink-0"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
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

        <h2 className="mt-5 max-w-[337px] font-[family-name:var(--font-inter)] text-[22px] font-bold leading-tight text-white">
          {program.title}
        </h2>
        <p className="mt-4 min-h-[78px] font-[family-name:var(--font-inter)] text-[13px] leading-[1.32] text-white/90">
          {program.description}
        </p>
        <Link
          href={`/program/${program.slug}`}
          className="mt-6 flex h-[39px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#0560c3] font-[family-name:var(--font-inter)] text-sm font-semibold text-white transition hover:bg-[#0a70da]"
        >
          Baca Selengkapnya
          <span aria-hidden="true" className="text-xs">
            &gt;
          </span>
        </Link>
      </div>
    </article>
  )
}
