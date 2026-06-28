import Image from "next/image"
import { galleryItems } from "@/data/gallery"

export function AboutSection() {
  const profileImage = galleryItems[1]

  return (
    <section id="explore" className="relative px-5 pt-24 sm:px-8 lg:px-16">
      <Image
        src="/figma/ellipse-13.svg"
        alt=""
        width={878}
        height={824}
        className="pointer-events-none absolute left-[-520px] top-[-80px] opacity-70"
      />
      <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
        <div>
          <h2 className="font-[var(--font-goldman)] text-5xl leading-none sm:text-7xl">
            Explore <span className="text-[#ffbd4a]">HMPTI</span>
          </h2>
          <p className="mt-7 max-w-xl font-[var(--font-work-sans)] text-sm leading-relaxed text-white/80 sm:text-base">
            Let&apos;s dive deeper into HMPTI. Discover our dynamic activities, tech
            innovations, and academic programs designed to empower your IT journey.
          </p>
          <a
            className="inline-flex h-8 items-center justify-center rounded-md bg-gradient-to-r from-[#ffbd4a] to-[#ff8d24] px-5 font-[var(--font-inter)] text-xs font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.18)] transition hover:brightness-110 sm:h-9 sm:text-sm"
            href="#explore"
          >
            About HMPTI
          </a>
        </div>
        <div className="relative mx-auto w-full max-w-[310px]">
          <div className="overflow-hidden rounded-[28px] border border-[#ffbd4a] bg-[#001a48] p-2 shadow-[0_20px_55px_rgba(0,0,0,0.35)]">
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.title}
              width={264}
              height={402}
              className="h-[420px] w-full rounded-[20px] object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-1/2 w-[78%] -translate-x-1/2 rounded-full bg-black/45 px-4 py-2 text-center font-[var(--font-inter)] text-xs backdrop-blur">
            HMPTI UKSW
            <span className="block text-white/70">Company Profile</span>
          </div>
        </div>
      </div>
    </section>
  )
}
