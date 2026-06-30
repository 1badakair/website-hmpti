import Image from "next/image"

export function ProgramHero() {
  return (
    <section className="relative -mt-[101px] overflow-hidden bg-[linear-gradient(180deg,#0344a2_0%,#1260bd_45%,#05458e_76%,#001b4b_100%)] px-5 pb-0 pt-36 sm:px-8 lg:px-16">
      <Image
        src="/figma/star-sparkle.svg"
        alt=""
        width={54}
        height={54}
        className="absolute left-[9%] top-40 h-10 w-10 opacity-90 sm:h-14 sm:w-14"
      />
      <Image
        src="/figma/star-rough.png"
        alt=""
        width={92}
        height={92}
        className="absolute right-[9%] top-52 hidden h-20 w-20 rotate-12 opacity-80 md:block"
      />
      <div className="mx-auto flex min-h-[720px] max-w-[1120px] flex-col items-center text-center">
        <p className="font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.28em] text-[#ffbd4a]">
          Program HMPTI
        </p>
        <h1 className="mt-7 max-w-[980px] font-[family-name:var(--font-goldman)] text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] text-white">
          Program Kerja <span className="text-[#ffbd4a]">HMPTI</span>
        </h1>
        <p className="mt-8 max-w-[820px] font-[family-name:var(--font-inter)] text-base leading-8 text-white/78 sm:text-lg">
          Intip berbagai program kerja seru dan inovatif dari HMPTI! Kami hadir
          dengan langkah nyata untuk mendukung kamu menjadi talenta digital yang
          solutif. Mari bersinergi, kembangkan skill profesional, dan ciptakan
          impact bareng!
        </p>
        <div className="relative mt-auto w-full max-w-[760px]">
          <Image
            src="/figma/program-mascot.png"
            alt="Maskot HMPTI"
            width={740}
            height={504}
            priority
            className="mx-auto h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
