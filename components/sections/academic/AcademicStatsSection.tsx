import Link from "next/link"
import { academicStats } from "@/data/academic"
import Image from "next/image"
import { Activity, Clock, Send } from "lucide-react"
import { MotionSection } from "@/components/ui/MotionSection"

export function AcademicStatsSection() {
  return (
    <section className="bg-[#001b4b] px-5 pb-10 pt-9 sm:px-8 sm:pb-12 sm:pt-[50px] lg:px-16">
      <MotionSection className="mx-auto grid max-w-[1217px] gap-5 rounded-[12px] bg-[#002a75] px-5 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:px-6 sm:py-8 lg:min-h-[252px] lg:grid-cols-[1fr_1.04fr_0.58fr] lg:px-10 lg:py-[54px]">
        <div>
          <p className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            <span
              aria-hidden="true"
              className="grid h-7 w-7 place-items-center rounded-md bg-[#f9a825]/15 text-[#f9a825]"
            >
              <Activity className="h-4 w-4" />
            </span>
            Portal Snapshot
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3 sm:mt-7 sm:gap-5">
            {academicStats.map((stat) => (
              <div key={stat.id}>
                <p className="font-[family-name:var(--font-goldman)] text-4xl leading-none text-[#ffbd4a] sm:text-[44px]">
                  {stat.value}
                </p>
                <p className="mt-1 font-[family-name:var(--font-inter)] text-[10px] font-semibold text-white/68 sm:mt-2 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <article className="relative overflow-hidden rounded-[16px] border border-white/20 bg-[#001b4b] px-5 py-6 sm:px-6 sm:py-7">
          <Image
            src="/figma/academic-deadline.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 411px, 100vw"
            className="object-cover opacity-45"
          />
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.2em] text-[#7ea7e6]">
              <span
                aria-hidden="true"
                className="grid h-7 w-7 place-items-center rounded-md bg-white/10 text-white/70"
              >
                <Clock className="h-4 w-4" />
              </span>
              Deadline Watch
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-inter)] text-xl font-bold leading-tight text-white sm:mt-5 sm:text-2xl">
              BEASISWA AMGALA VISION
            </h3>
            <p className="mt-2 font-[family-name:var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.18em] text-white/62 sm:mt-3 sm:text-xs">
              Scholarship · Tap For Info
            </p>
          </div>
        </article>

        <div className="flex flex-col justify-center lg:items-start lg:pl-2">
          <h3 className="font-[family-name:var(--font-inter)] text-xl font-bold leading-tight text-white sm:text-2xl">
            Have academic info?
          </h3>
          <p className="mt-2 max-w-[230px] font-[family-name:var(--font-inter)] text-sm leading-6 text-white/65 sm:mt-3">
            To share other educational info.
          </p>
          <Link
            href="/aspiration"
            className="mt-4 inline-flex h-[42px] w-fit items-center justify-center gap-2 rounded-[10px] bg-[#f9a825] px-6 font-[family-name:var(--font-inter)] text-sm font-bold text-white transition duration-300 hover:bg-[#ffbd4a] sm:mt-6 sm:h-[44px] sm:px-7"
          >
            <Send aria-hidden="true" className="h-4 w-4" />
            Submit News
          </Link>
        </div>
      </MotionSection>
    </section>
  )
}
