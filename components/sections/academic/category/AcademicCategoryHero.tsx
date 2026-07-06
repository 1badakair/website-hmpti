import Image from "next/image"

type AcademicCategoryHeroProps = {
  buttonText: string
  subtitle: string
  title: string
}

export function AcademicCategoryHero({
  buttonText,
  subtitle,
  title,
}: AcademicCategoryHeroProps) {
  const [firstWord, ...restWords] = title.split(" ")
  const accentTitle = restWords.join(" ")

  return (
    <section className="relative -mt-[101px] min-h-[560px] overflow-hidden bg-[#002a75] px-5 pt-[218px] sm:min-h-[650px] sm:px-8 sm:pt-[250px] lg:min-h-[735px] lg:px-16 lg:pt-[286px]">
      <Image
        src="/figma/star-sparkle.svg"
        alt=""
        width={67}
        height={58}
        className="absolute right-[10%] top-[132px] hidden h-12 w-12 object-contain md:block"
      />
      <div className="mx-auto max-w-[916px] text-center">
        <div className="relative mx-auto inline-block px-8 py-3 sm:px-14">
          <Image
            src="/figma/star-rough.png"
            alt=""
            width={140}
            height={140}
            className="absolute -left-10 top-0 z-0 hidden h-[128px] w-[128px] object-contain opacity-70 md:block"
          />
          <Image
            src="/figma/star-rough.png"
            alt=""
            width={140}
            height={140}
            className="absolute -right-10 top-7 z-0 hidden h-[104px] w-[104px] object-contain opacity-70 md:block"
          />
          <h1 className="relative z-10 font-[family-name:var(--font-goldman)] text-[clamp(2.75rem,6vw,4.5rem)] leading-none text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] [text-shadow:0_4px_0_rgba(0,27,75,0.55)]">
            {firstWord}{" "}
            <span className="text-[#ffbd4a]">{accentTitle}</span>
          </h1>
        </div>

        <p className="mx-auto mt-6 max-w-[760px] font-[family-name:var(--font-inter)] text-sm font-bold leading-[1.35] text-white sm:mt-8 sm:text-[22px]">
          {subtitle}
        </p>

        <a
          href="#"
          className="mx-auto mt-8 inline-flex h-[52px] w-fit max-w-full items-center justify-center gap-3 rounded-[10px] bg-[#f9a825] px-6 font-[family-name:var(--font-inter)] text-sm font-bold text-white shadow-[0_16px_36px_rgba(249,168,37,0.18)] transition hover:bg-[#ffbd4a] sm:mt-11 sm:h-[60px] sm:px-8 sm:text-base"
        >
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-[8px] border-2 border-white sm:h-8 sm:w-8"
          >
            <span className="h-3 w-3 rounded-sm bg-white" />
          </span>
          {buttonText}
        </a>
      </div>
    </section>
  )
}
