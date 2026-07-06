import Image from "next/image"

export function AcademicHero() {
  return (
    <section className="relative -mt-[101px] min-h-[640px] overflow-hidden bg-[#002a75] px-5 pt-[214px] sm:min-h-[720px] sm:px-8 sm:pt-[230px] lg:min-h-[790px] lg:px-16 lg:pt-[242px]">
      <Image
        src="/figma/star-outline.svg"
        alt=""
        width={107}
        height={107}
        className="absolute left-[5%] top-[176px] z-0 h-16 w-16 rotate-[16deg] opacity-95 sm:h-24 sm:w-24"
      />
      <Image
        src="/figma/star-solid.svg"
        alt=""
        width={74}
        height={74}
        className="absolute right-[5%] top-[180px] z-0 hidden h-14 w-14 rotate-12 opacity-95 md:block"
      />
      <Image
        src="/figma/star-sparkle.svg"
        alt=""
        width={67}
        height={58}
        className="absolute right-[15%] top-[138px] z-0 hidden h-10 w-12 opacity-95 lg:block"
      />

      <div className="relative z-10 mx-auto flex max-w-[916px] flex-col items-center text-center">
        <h1 className="max-w-[916px] font-[family-name:var(--font-goldman)] text-[clamp(2.7rem,6vw,4rem)] leading-[0.98] text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] [text-shadow:0_4px_0_rgba(0,27,75,0.55)]">
          Empowering Future{" "}
          <span className="text-[#ffbd4a] [-webkit-text-stroke:1px_rgba(255,255,255,0.9)]">
            IT Professionals
          </span>
        </h1>
        <p className="mt-7 max-w-[916px] font-[family-name:var(--font-inter)] text-sm font-bold leading-[1.45] text-white sm:mt-10 sm:text-[22px] lg:mt-12">
          Pusat informasi dan layanan akademik HMPTI untuk mendukung perjalanan
          studimu. Temukan berbagai peluang beasiswa, perlombaan, dan seminar,
          serta jadikan ini ruang resmi untuk menyuarakan aspirasimu demi
          kemajuan bersama.
        </p>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[440px] z-0 h-[260px] w-[min(500px,88vw)] -translate-x-1/2 overflow-hidden sm:top-[480px] sm:h-[320px] sm:w-[min(580px,88vw)] lg:top-[514px] lg:h-[372px] lg:w-[min(614px,90vw)]">
        <Image
          src="/figma/academic-mascot.png"
          alt="Maskot Academic HMPTI"
          width={3072}
          height={4096}
          priority
          className="absolute left-0 top-[-63.55%] h-[220.05%] w-full object-cover"
        />
      </div>
    </section>
  )
}
