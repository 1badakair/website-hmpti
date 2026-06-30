import Image from "next/image"
import Link from "next/link"
import type { Program } from "@/types"

type ProgramCardProps = {
  program: Program
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#07336d] shadow-[0_18px_55px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-[#ffbd4a]/45">
      <div className="relative aspect-[1.64] overflow-hidden bg-[#0b468f]">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(min-width: 1024px) 480px, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-white/90 p-3 shadow-lg">
          <Image
            src="/figma/program-logo-strip.png"
            alt="HMPTI, UKSW, dan K2I"
            width={353}
            height={72}
            className="h-10 w-full object-contain"
          />
        </div>
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-3 font-[family-name:var(--font-inter)] text-xs font-semibold">
          <span className="text-white/50">{program.date}</span>
          <span className="rounded-full bg-[#e9effb] px-3 py-1 text-[#0a3d7b]">
            {program.mode}
          </span>
          <span className="rounded-full bg-[#ffbd4a] px-3 py-1 text-[#062a5c]">
            {program.category}
          </span>
        </div>
        <h2 className="mt-5 font-[family-name:var(--font-goldman)] text-2xl leading-tight text-white">
          {program.title}
        </h2>
        <p className="mt-3 min-h-[72px] font-[family-name:var(--font-inter)] text-sm leading-6 text-white/68">
          {program.description}
        </p>
        <Link
          href={`/program/${program.slug}`}
          className="mt-6 inline-flex rounded-full bg-[#ffbd4a] px-5 py-3 font-[family-name:var(--font-inter)] text-sm font-bold text-[#062a5c] transition hover:bg-[#ffd27a]"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  )
}
