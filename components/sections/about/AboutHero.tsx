import Image from "next/image"

// Two stacked outline layers (wide white back-stroke, narrow blue front-stroke
// over the fill). inline-grid keeps both in one cell; geometricPrecision +
// translateZ(0) keep the strokes aligned at any browser zoom.
function StackedLine({ text, fill }: { text: string; fill: string }) {
  return (
    <span className="inline-grid [text-rendering:geometricPrecision] [transform:translateZ(0)] [backface-visibility:hidden]">
      {/* Back layer: wider WHITE stroke = outermost outline */}
      <span
        aria-hidden
        className="col-start-1 row-start-1 block [-webkit-text-stroke:0.18em_#ffffff] [paint-order:stroke] [text-shadow:0_6px_0_#002260]"
        style={{ color: fill }}
      >
        {text}
      </span>
      {/* Front layer: narrower BLUE stroke = inner outline, over the fill */}
      <span
        className="col-start-1 row-start-1 block [-webkit-text-stroke:calc(0.1em_+_2px)_#032a79] [paint-order:stroke]"
        style={{ color: fill }}
      >
        {text}
      </span>
    </span>
  )
}

export function AboutHero() {
  return (
    <section className="relative isolate -mt-[101px] overflow-hidden px-5 pb-24 pt-[197px] sm:px-8 lg:px-16">
      <Image
        src="/figma/hero-members.png"
        alt="Anggota HMPTI UKSW"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(3,45,92,0.85)_0%,rgba(3,45,92,0.78)_40%,rgba(3,45,92,0.96)_82%,#032d5c_100%)]" />

      <Image
        src="/figma/star-rough.png"
        alt=""
        width={255}
        height={255}
        aria-hidden
        className="pointer-events-none absolute left-[4%] top-[26%] -z-10 hidden w-40 opacity-90 lg:block"
      />
      <Image
        src="/figma/star-rough.png"
        alt=""
        width={255}
        height={255}
        aria-hidden
        className="pointer-events-none absolute right-[3%] top-[34%] -z-10 hidden w-28 opacity-90 lg:block"
      />
      <Image
        src="/figma/star-sparkle.svg"
        alt=""
        width={75}
        height={72}
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-[18%] hidden w-16 sm:block"
      />
      <Image
        src="/figma/star-outline.svg"
        alt=""
        width={86}
        height={86}
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-[16%] hidden w-20 sm:block"
      />
      <Image
        src="/figma/star-solid.svg"
        alt=""
        width={88}
        height={91}
        aria-hidden
        className="pointer-events-none absolute right-[16%] top-[24%] hidden w-12 lg:block"
      />
      <Image
        src="/figma/star-blob-white.svg"
        alt=""
        width={41}
        height={41}
        aria-hidden
        className="pointer-events-none absolute bottom-[24%] left-[3%] hidden w-10 sm:block"
      />

      <div className="mx-auto flex max-w-[1000px] flex-col items-center py-16 text-center sm:py-24">
        <h1 className="font-[family-name:var(--font-goldman)] text-[clamp(2rem,6.5vw,4.5rem)] font-bold uppercase leading-[1.05]">
          <StackedLine text="Himpunan Mahasiswa" fill="#fef9db" />
          <StackedLine text="Prodi Teknik Informatika" fill="#ffbd4a" />
        </h1>
        <p className="mt-8 max-w-2xl font-[family-name:var(--font-inter)] text-base font-medium leading-relaxed text-white sm:text-lg">
          Selamat datang di website resmi Himpunan Mahasiswa S1 Prodi Teknik Informatika
          Universitas Kristen Satya Wacana
        </p>
        <a
          href="#kontak"
          className="mt-9 inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#ffbd4a] to-[#ff8d24] px-8 font-[family-name:var(--font-inter)] text-xl font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition hover:brightness-110 sm:h-[60px] sm:text-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Contact Us
        </a>
      </div>
    </section>
  )
}
