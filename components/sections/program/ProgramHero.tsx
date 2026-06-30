import Image from "next/image"

export function ProgramHero() {
  return (
    <section className="relative -mt-[101px] min-h-[790px] overflow-hidden bg-[linear-gradient(180deg,rgba(3,45,92,0.9)_0%,rgba(5,96,195,0.9)_42%,rgba(0,42,117,0.94)_100%)] px-5 pt-[210px] sm:px-8 lg:px-16">
      <Image
        src="/figma/star-outline.svg"
        alt=""
        width={107}
        height={107}
        className="absolute left-[5%] top-[150px] z-0 h-16 w-16 rotate-[16deg] opacity-95 sm:h-24 sm:w-24"
      />
      <Image
        src="/figma/star-solid.svg"
        alt=""
        width={74}
        height={74}
        className="absolute right-[6%] top-[170px] z-0 hidden h-14 w-14 rotate-12 opacity-95 md:block"
      />
      <Image
        src="/figma/star-sparkle.svg"
        alt=""
        width={67}
        height={58}
        className="absolute right-[15%] top-[134px] z-0 hidden h-10 w-12 opacity-95 lg:block"
      />
      <div className="relative z-10 mx-auto flex max-w-[916px] flex-col items-center text-center">
        <h1 className="max-w-[760px] font-[family-name:var(--font-goldman)] text-[clamp(2.75rem,5.4vw,4.1rem)] leading-none text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.85)] [text-shadow:0_4px_0_rgba(0,27,75,0.65)]">
          Program Kerja <span className="text-[#ffbd4a] [-webkit-text-stroke:1px_rgba(255,255,255,0.85)]">HMPTI</span>
        </h1>
        <p className="mt-6 max-w-[916px] font-[family-name:var(--font-inter)] text-sm font-medium leading-relaxed text-white sm:text-[22px] sm:leading-normal">
          Intip berbagai program kerja seru dan inovatif dari HMPTI! Kami hadir
          dengan langkah nyata untuk mendukung kamu menjadi talenta digital yang
          solutif. Mari bersinergi, kembangkan skill profesional, dan ciptakan
          impact bareng!
        </p>
      </div>
      <div className="pointer-events-none relative z-0 mx-auto mt-10 h-[330px] w-full max-w-[820px] overflow-hidden sm:mt-12">
        <Image
          src="/figma/program-mascot.png"
          alt="Maskot HMPTI"
          width={1080}
          height={1920}
          priority
          className="absolute left-1/2 top-[clamp(-540px,-45vw,-320px)] h-auto w-[min(740px,92vw)] -translate-x-1/2 object-contain"
        />
      </div>
    </section>
  )
}
