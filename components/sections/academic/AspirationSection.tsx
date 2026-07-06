import Image from "next/image"
import Link from "next/link"
import { MotionSection } from "@/components/ui/MotionSection"
import { Send } from "lucide-react"

export function AspirationSection() {
  return (
    <section className="relative bg-[#001b4b] px-5 pb-24 pt-14 sm:px-8 sm:pb-[130px] sm:pt-[72px] lg:px-16">
      <Image
        src="/figma/star-rough.png"
        alt=""
        width={140}
        height={140}
        className="absolute left-[11%] top-[68px] hidden h-[100px] w-[100px] object-contain opacity-60 md:block"
      />
      <Image
        src="/figma/star-blob-white.svg"
        alt=""
        width={118}
        height={118}
        className="absolute right-[13%] top-[170px] hidden h-[96px] w-[96px] object-contain md:block"
      />

      <MotionSection className="relative z-10 mx-auto max-w-[916px] text-center">
        <h2 className="font-[family-name:var(--font-goldman)] text-[clamp(3rem,6vw,4rem)] leading-none text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] [text-shadow:0_4px_0_rgba(0,0,0,0.18)]">
          Teaching <span className="text-[#ffbd4a]">Assistant</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[724px] font-[family-name:var(--font-inter)] text-sm font-bold leading-[1.45] text-white sm:mt-8 sm:text-[22px]">
          Voice your aspirations so they can be heard and improved in the future.
          Be part of positive changes in our academic environment!
        </p>
        <Link
          href="/academic/asisten-dosen"
          className="mx-auto mt-8 inline-flex min-h-[52px] w-fit max-w-full items-center justify-center gap-3 rounded-[10px] bg-[#f9a825] px-7 font-[family-name:var(--font-inter)] text-base font-bold text-[#001b4b] transition duration-300 hover:bg-[#ffbd4a] hover:scale-[1.02] active:scale-[0.98] sm:mt-10 sm:min-h-[58px] sm:px-10 sm:text-lg"
        >
          <Send className="h-6 w-6 shrink-0 text-[#001b4b] sm:h-7 sm:w-7" />
          Teaching Assistant Info
        </Link>
      </MotionSection>
    </section>
  )
}
