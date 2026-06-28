import Image from "next/image"
import { galleryItems } from "@/data/gallery"

export function HeroSection() {
  const heroImage = galleryItems[0]

  return (
    <section className="relative isolate min-h-[729px] px-5 pb-16 pt-20 sm:px-8 lg:px-16 lg:pt-24">
      <Image
        src="/figma/blue-pattern.png"
        alt=""
        width={736}
        height={1386}
        priority
        className="pointer-events-none absolute right-[-180px] top-[-101px] -z-10 h-[760px] w-[520px] rotate-180 object-cover opacity-45 sm:right-[-90px]"
      />
      <div className="absolute left-[-180px] top-[419px] -z-10 h-96 w-96 rounded-full bg-[#005696]/25 blur-3xl" />

      <div className="mx-auto grid max-w-[1216px] gap-10 pb-16 lg:grid-cols-[1fr_0.82fr] lg:items-center">
        <div className="max-w-2xl">
          <h1 className="font-[family-name:var(--font-goldman)] text-[clamp(3rem,8vw,5.8rem)] font-bold leading-[0.9] text-white drop-shadow-[0_5px_0_#002260]">
            <span className="block text-[#ffbd4a] [text-shadow:0_4px_0_#ffffff,0_9px_0_#002260]">
              One Vision
            </span>
            <span className="block [text-shadow:0_4px_0_#002260]">Infinite Solutions</span>
          </h1>
          <p className="mt-8 max-w-xl font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/90 sm:text-base">
            HMPTI UKSW is the official Informatics Engineering student organization of UKSW,
            empowering students in technology and innovation.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              className="inline-flex h-8 items-center justify-center rounded-md bg-gradient-to-r from-[#ffbd4a] to-[#ff8d24] px-5 font-[family-name:var(--font-inter)] text-xs font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.18)] transition hover:brightness-110 sm:h-9 sm:text-sm"
              href="#explore"
            >
              Learn More
            </a>
            <a
              className="inline-flex h-8 items-center justify-center rounded-md bg-gradient-to-r from-[#ffbd4a] to-[#ff8d24] px-5 font-[family-name:var(--font-inter)] text-xs font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.18)] transition hover:brightness-110 sm:h-9 sm:text-sm"
              href="#explore"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1110px]">
        <div className="relative overflow-hidden rounded-[18px] border border-[#ffbd4a]/45 bg-[#001a48] p-2 shadow-[0_16px_50px_rgba(0,0,0,0.28)]">
          <div className="relative aspect-[1070/510] overflow-hidden rounded-xl">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.title}
              fill
              className="object-cover"
              sizes="(min-width: 1200px) 1110px, 92vw"
            />
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-4xl items-center gap-6">
          <div className="h-px flex-1 bg-[#ffbd4a]/35" />
          <p className="text-center font-[family-name:var(--font-inter)] text-sm font-bold">
            HMPTI UKSW
            <span className="block text-[10px] font-normal text-white/55">Periode 2025</span>
          </p>
          <div className="h-px flex-1 bg-[#ffbd4a]/35" />
        </div>
      </div>
    </section>
  )
}
