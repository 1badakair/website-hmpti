import Image from "next/image"

export function AsdosRegistrationSection() {
  return (
    <section className="relative bg-[#001b4b] px-5 pb-[150px] pt-6 sm:px-8 lg:px-16">
      <div className="relative z-10 mx-auto max-w-[720px] text-center">
        <div className="relative mx-auto inline-block px-10 py-4">
          <Image
            src="/figma/star-rough.png"
            alt=""
            width={140}
            height={140}
            className="absolute -left-8 top-2 z-0 hidden h-[110px] w-[110px] object-contain opacity-70 md:block"
          />
          <Image
            src="/figma/star-rough.png"
            alt=""
            width={140}
            height={140}
            className="absolute -right-8 top-5 z-0 hidden h-[92px] w-[92px] object-contain opacity-70 md:block"
          />
          <h2 className="relative z-10 font-[family-name:var(--font-goldman)] text-[clamp(2.7rem,6vw,4rem)] leading-[0.9] text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] [text-shadow:0_4px_0_rgba(0,0,0,0.18)]">
            Pendaftaran<br />
            <span className="text-[#ffbd4a]">ASDOS</span>
          </h2>
        </div>

        <p className="mx-auto mt-5 max-w-[560px] font-[family-name:var(--font-inter)] text-base font-bold leading-[1.35] text-white sm:text-xl">
          Salurkan aspirasimu agar bisa di dengar dan di perbaiki kedepannya...
        </p>

        <a
          href="#"
          className="mx-auto mt-9 inline-flex h-[58px] w-full max-w-[360px] items-center justify-center gap-3 rounded-[8px] bg-[#d98800] px-6 font-[family-name:var(--font-inter)] text-base font-bold text-white shadow-[0_14px_34px_rgba(249,168,37,0.2)] transition hover:bg-[#f9a825]"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-[7px] border-2 border-white"
          >
            <span className="h-3 w-3 rounded-sm bg-white" />
          </span>
          Daftar Asisten Dosen
        </a>

        <p className="mt-5 font-[family-name:var(--font-inter)] text-sm font-medium text-white/68">
          Pendaftaran belum dibuka
        </p>
      </div>
    </section>
  )
}
