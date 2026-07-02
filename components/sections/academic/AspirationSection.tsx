import Image from "next/image"
import Link from "next/link"

export function AspirationSection() {
  return (
    <section className="relative bg-[#001b4b] px-5 pb-[180px] pt-[80px] sm:px-8 lg:px-16">
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
        <p className="mx-auto mt-[52px] max-w-[724px] font-[family-name:var(--font-inter)] text-base font-bold leading-[1.45] text-white sm:text-[22px]">
          Salurkan aspirasimu agar bisa di dengar dan di perbaiki kedepannya.
          Jadilah bagian dari perubahan positif di lingkungan akademik kita!
        </p>
        <Link
          href="/academic/asisten-dosen"
          className="mx-auto mt-[54px] inline-flex min-h-[72px] w-full max-w-[476px] items-center justify-center gap-4 rounded-[13px] bg-[#f9a825] px-6 font-[family-name:var(--font-inter)] text-xl font-bold text-[#001b4b] transition hover:bg-[#ffbd4a] sm:min-h-[85px] sm:text-2xl"
        >
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-[8px] border-2 border-[#001b4b]"
          >
            <span className="h-3 w-3 rounded-sm bg-[#001b4b]" />
          </span>
          Info Asisten Dosen
        </Link>
      </div>
    </section>
  )
}
