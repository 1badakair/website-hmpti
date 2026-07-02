import { academicStats } from "@/data/academic"
import Image from "next/image"

export function AcademicStatsSection() {
  return (
    <section className="bg-[#001b4b] px-5 pb-12 pt-[50px] sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-[1217px] gap-6 rounded-[12px] bg-[#002a75] px-6 py-8 shadow-[0_18px_50px_rgba(0,0,0,0.24)] lg:min-h-[252px] lg:grid-cols-[1fr_1.04fr_0.58fr] lg:px-10 lg:py-[54px]">
        <div>
          <p className="font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            Portal Snapshot
          </p>
          <div className="mt-7 grid grid-cols-3 gap-5">
            {academicStats.map((stat) => (
              <div key={stat.id}>
                <p className="font-[family-name:var(--font-goldman)] text-[44px] leading-none text-[#ffbd4a]">
                  {stat.value}
                </p>
                <p className="mt-2 font-[family-name:var(--font-inter)] text-xs font-semibold text-white/68 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <article className="relative overflow-hidden rounded-[16px] border border-white/20 bg-[#001b4b] px-6 py-7">
          <Image
            src="/figma/academic-deadline.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 411px, 100vw"
            className="object-cover opacity-45"
          />
          <div className="relative z-10">
            <p className="font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.2em] text-[#ffbd4a]">
              Deadline Watch
            </p>
            <h3 className="mt-5 font-[family-name:var(--font-inter)] text-2xl font-bold leading-tight text-white">
              BEASISWA AMGALA VISION
            </h3>
            <p className="mt-3 font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.18em] text-white/62">
              Scholarship · Tap For Info
            </p>
          </div>
        </article>

        <div className="flex flex-col justify-center lg:items-start lg:pl-2">
          <h3 className="font-[family-name:var(--font-inter)] text-2xl font-bold leading-tight text-white">
            Punya info akademik?
          </h3>
          <p className="mt-3 max-w-[230px] font-[family-name:var(--font-inter)] text-sm leading-6 text-white/65">
            Untuk share info edukatif lainnya.
          </p>
          <button
            type="button"
            className="mt-6 h-[44px] w-fit rounded-[10px] bg-[#f9a825] px-7 font-[family-name:var(--font-inter)] text-sm font-bold text-[#001b4b] transition hover:bg-[#ffbd4a]"
          >
            Submit News
          </button>
        </div>
      </div>
    </section>
  )
}
