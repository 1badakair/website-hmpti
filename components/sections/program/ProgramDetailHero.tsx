import Image from "next/image"
import Link from "next/link"
import type { Program } from "@/types"

type ProgramDetailHeroProps = {
  program: Program
}

export function ProgramDetailHero({ program }: ProgramDetailHeroProps) {
  return (
    <section className="relative -mt-[101px] overflow-hidden bg-[linear-gradient(180deg,#0344a2_0%,#0b55b0_36%,#001b4b_100%)] px-5 pb-16 pt-36 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1120px]">
        <nav
          aria-label="Breadcrumb"
          className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-5 py-3 font-[family-name:var(--font-inter)] text-sm text-white/70 backdrop-blur"
        >
          <Link className="transition hover:text-[#ffbd4a]" href="/">
            Home
          </Link>
          <span>/</span>
          <Link className="transition hover:text-[#ffbd4a]" href="/program">
            Program
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#ffbd4a]">{program.category}</span>
        </nav>

        <div className="relative mt-12 overflow-hidden rounded-[34px] border border-white/12 bg-[#08356e] shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
          <div className="relative aspect-[2.02] min-h-[260px]">
            <Image
              src="/figma/program-detail-hero.png"
              alt={program.title}
              fill
              priority
              sizes="(min-width: 1024px) 1120px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12 max-w-[920px]">
          <div className="flex flex-wrap gap-3 font-[family-name:var(--font-inter)] text-xs font-bold">
            <span className="rounded-full bg-white px-4 py-2 text-[#08356e]">
              {program.mode}
            </span>
            <span className="rounded-full bg-[#ffbd4a] px-4 py-2 text-[#062a5c]">
              {program.category}
            </span>
          </div>
          <h1 className="mt-6 font-[family-name:var(--font-goldman)] text-4xl leading-tight text-white sm:text-6xl">
            {program.title}
          </h1>
          <p className="mt-5 max-w-[820px] font-[family-name:var(--font-inter)] text-base leading-8 text-white/72 sm:text-lg">
            {program.description}
          </p>
        </div>
      </div>
    </section>
  )
}
