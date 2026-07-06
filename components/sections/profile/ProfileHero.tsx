import Image from "next/image"

export function ProfileHero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden px-5 pb-20 pt-24 sm:px-8 lg:px-16">
      <Image
        src="/figma/star-solid.svg"
        alt=""
        width={72}
        height={72}
        className="pointer-events-none absolute left-[8%] top-36 h-14 w-14 rotate-12 sm:h-[72px] sm:w-[72px]"
        priority
      />
      <Image
        src="/figma/star-outline.svg"
        alt=""
        width={38}
        height={38}
        className="pointer-events-none absolute right-[8%] top-36 h-8 w-8 rotate-12 sm:h-10 sm:w-10"
        priority
      />
      <div className="mx-auto flex min-h-[450px] max-w-[916px] flex-col items-center justify-center text-center">
        <h1 className="max-w-[760px] font-[family-name:var(--font-goldman)] text-[clamp(2.75rem,7vw,4.1rem)] font-bold leading-none text-white drop-shadow-[0_5px_0_#002260]">
          Incubating Ideas,{" "}
          <span className="text-[#ffbd4a] [text-shadow:0_4px_0_#002260]">
            Executing Solutions
          </span>
        </h1>
        <p className="mt-7 max-w-[916px] font-[family-name:var(--font-inter)] text-base font-medium leading-relaxed text-white sm:text-[22px]">
          Get to know the dedicated people behind the scenes of HMPTI! Through
          solid collaboration, we are ready to break boundaries, optimize potential, and
          execute every idea into a real masterpiece.
        </p>
      </div>
    </section>
  )
}
