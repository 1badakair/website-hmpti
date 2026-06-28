import Image from "next/image"
import { faqItems } from "@/data/faq"

export function FAQSection() {
  return (
    <section className="relative px-5 py-24 sm:px-8 lg:px-16">
      <Image
        src="/figma/ellipse-14.svg"
        alt=""
        width={1079}
        height={824}
        className="pointer-events-none absolute left-1/2 top-0 -z-0 -translate-x-1/2 opacity-45"
      />
      <div className="relative mx-auto max-w-[1120px]">
        <h2 className="text-center font-[family-name:var(--font-goldman)] text-6xl leading-none">FAQ</h2>
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h3 className="font-[family-name:var(--font-inter)] text-2xl font-bold leading-tight">
              Pertanyaan Yang Sering Diajukan
            </h3>
            <p className="mt-6 max-w-sm font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/70">
              Masih ada pertanyaan yang belum terjawab atau memiliki kritik/saran? Jangan ragu
              untuk menghubungi kami.
            </p>
            <div className="mt-7">
              <a
                className="inline-flex h-8 items-center justify-center rounded-md bg-gradient-to-r from-[#ffbd4a] to-[#ff8d24] px-5 font-[family-name:var(--font-inter)] text-xs font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.18)] transition hover:brightness-110 sm:h-9 sm:text-sm"
                href="#explore"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <button
                className="flex w-full items-center justify-between rounded-lg border border-white/40 bg-[#002a75]/25 px-5 py-3 text-left font-[family-name:var(--font-inter)] text-sm font-semibold text-white transition hover:border-[#ffbd4a]"
                key={item}
              >
                {item}
                <span className="grid h-5 w-5 place-items-center rounded-full border border-white/70 text-xs">
                  +
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
