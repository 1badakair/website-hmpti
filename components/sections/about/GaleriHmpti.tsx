import Image from "next/image"
import { galleryPhotos } from "@/data/about"

const rows = [galleryPhotos.slice(0, 6), galleryPhotos.slice(6, 12)]

export function GaleriHmpti() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,rgba(0,26,77,0)_0%,rgba(0,26,77,0.97)_37%,rgba(0,26,77,1)_100%)] py-20">
      <div className="relative mx-auto mb-12 flex w-fit items-center justify-center">
        <Image
          src="/figma/star-rough.png"
          alt=""
          width={255}
          height={255}
          aria-hidden
          className="pointer-events-none absolute -left-16 top-1/2 hidden w-24 -translate-y-1/2 opacity-80 sm:block"
        />
        <h2 className="px-5 text-center font-[family-name:var(--font-goldman)] text-5xl leading-none [paint-order:stroke] [-webkit-text-stroke:0.13em_#032a79] sm:text-[64px]">
          Galeri <span className="text-[#ffbd4a]">HMPTI</span>
        </h2>
        <Image
          src="/figma/star-rough.png"
          alt=""
          width={255}
          height={255}
          aria-hidden
          className="pointer-events-none absolute -right-16 top-1/2 hidden w-24 -translate-y-1/2 opacity-80 sm:block"
        />
      </div>

      {/* Two seamless, infinitely-scrolling photo strips.
          Row 1 drifts left, row 2 drifts right. Each row's items are duplicated
          so the animation loops without any visible break. */}
      <div className="flex flex-col gap-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex w-max">
            <div
              className={`flex w-max transition-[animation-duration] hover:[animation-duration:110s] ${
                rowIndex === 0 ? "animate-marquee-left" : "animate-marquee-right"
              }`}
            >
              {[...row, ...row].map((photo, i) => (
                <div
                  key={`${photo.id}-${i}`}
                  className="relative mr-4 h-44 w-[300px] shrink-0 overflow-hidden rounded-2xl sm:h-52 sm:w-[360px]"
                >
                  <Image
                    src={photo.src}
                    alt={`Galeri HMPTI ${photo.id}`}
                    fill
                    sizes="360px"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
