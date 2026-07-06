import Image from "next/image"
import { faqItems } from "@/data/faq"
import { MotionSection } from "@/components/ui/MotionSection"
import { ChevronRight } from "lucide-react"

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
      <MotionSection className="relative mx-auto max-w-[1120px]">
        <h2 className="text-center font-[family-name:var(--font-goldman)] text-6xl leading-none">FAQ</h2>
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h3 className="font-[family-name:var(--font-inter)] text-2xl font-bold leading-tight">
              Frequently Asked Questions
            </h3>
            <p className="mt-6 max-w-sm font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/70">
              Still have unanswered questions or have feedback/suggestions? Don't hesitate to
              contact us.
            </p>
            <div className="mt-7">
              <a
                className="inline-flex h-8 items-center justify-center rounded-md bg-gradient-to-r from-[#ffbd4a] to-[#ff8d24] px-5 font-[family-name:var(--font-inter)] text-xs font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] sm:h-9 sm:text-sm"
                href="#explore"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <button
                className="group flex w-full items-center justify-between rounded-lg border border-white/40 bg-[#002a75]/25 px-5 py-3 text-left font-[family-name:var(--font-inter)] text-sm font-semibold text-white transition duration-300 hover:border-[#ffbd4a] hover:bg-[#ffbd4a]/10 active:scale-[0.99]"
                key={item}
              >
                {item}
                <span className="grid h-6 w-6 place-items-center rounded-full border border-white/70 text-xs transition-colors group-hover:border-[#ffbd4a] group-hover:text-[#ffbd4a]">
                  <ChevronRight className="h-3 w-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </MotionSection>
    </section>
  )
}
