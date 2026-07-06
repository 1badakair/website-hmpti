import Image from "next/image"
import Link from "next/link"

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

      <div className="relative z-10 mx-auto max-w-[916px] text-center">
        <h2 className="font-[family-name:var(--font-goldman)] text-[clamp(3rem,6vw,4rem)] leading-none text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] [text-shadow:0_4px_0_rgba(0,0,0,0.18)]">
          Asisten <span className="text-[#ffbd4a]">Dosen</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[724px] font-[family-name:var(--font-inter)] text-sm font-bold leading-[1.45] text-white sm:mt-8 sm:text-[22px]">
          Salurkan aspirasimu agar bisa di dengar dan di perbaiki kedepannya.
          Jadilah bagian dari perubahan positif di lingkungan akademik kita!
        </p>
        <Link
          href="/academic/asisten-dosen"
          className="mx-auto mt-8 inline-flex min-h-[52px] w-fit max-w-full items-center justify-center gap-3 rounded-[10px] bg-[#f9a825] px-7 font-[family-name:var(--font-inter)] text-base font-bold text-[#001b4b] transition hover:bg-[#ffbd4a] sm:mt-10 sm:min-h-[58px] sm:px-10 sm:text-lg"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 shrink-0 text-[#001b4b] sm:h-7 sm:w-7"
            fill="none"
            viewBox="0 0 36 36"
          >
            <path
              d="M14 7h8v4h4v4h4v8h-4v4h-4v4h-8v-4h-4v-4H6v-8h4v-4h4V7Z"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="3"
            />
            <path
              d="M14 14h8v8h-8z"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
          Info Asisten Dosen
        </Link>
      </div>
    </section>
  )
}
