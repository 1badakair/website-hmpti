import Image from "next/image"

const galleryItems = [
  {
    id: "main",
    title: "HMPTI academic activities",
    image: "/figma/gallery-1.jpg",
  },
  {
    id: "thumb-1",
    title: "Academic discussion",
    image: "/figma/gallery-2.jpg",
  },
  {
    id: "thumb-2",
    title: "Classroom",
    image: "/figma/gallery-3.jpg",
  },
  {
    id: "thumb-3",
    title: "Student collaboration",
    image: "/figma/gallery-4.jpg",
  },
  {
    id: "thumb-4",
    title: "Learning together",
    image: "/figma/gallery-5.jpg",
  },
]

export function AsdosGallerySection() {
  const [mainImage, ...thumbnails] = galleryItems

  return (
    <section className="relative bg-[#001b4b] px-5 pb-24 pt-2 sm:px-8 sm:pb-[130px] lg:px-16">
      <div className="mx-auto max-w-[900px]">
        <div className="relative mx-auto w-fit px-8 py-3 text-center">
          <Image
            src="/figma/star-rough.png"
            alt=""
            width={140}
            height={140}
            className="absolute -left-7 top-3 z-0 hidden h-[72px] w-[72px] object-contain opacity-70 md:block"
          />
          <Image
            src="/figma/star-rough.png"
            alt=""
            width={140}
            height={140}
            className="absolute -right-7 top-2 z-0 hidden h-[72px] w-[72px] object-contain opacity-70 md:block"
          />
          <h2 className="relative z-10 font-[family-name:var(--font-goldman)] text-[clamp(2.4rem,5vw,3.4rem)] leading-none text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] [text-shadow:0_4px_0_rgba(0,0,0,0.18)]">
            Academics <span className="text-[#ffbd4a]">Gallery</span>
          </h2>
        </div>

        <div className="relative mt-9 aspect-video overflow-hidden rounded-[13px] border border-white/20 bg-[#002a75] shadow-[0_20px_56px_rgba(0,0,0,0.28)] sm:mt-12 sm:aspect-[16/8.6]">
          <Image
            src={mainImage.image}
            alt={mainImage.title}
            fill
            sizes="(min-width: 1024px) 860px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-9 sm:gap-5 lg:grid-cols-4">
          {thumbnails.map((item) => (
            <div
              className="relative aspect-[16/9] overflow-hidden rounded-[10px] border border-white/15 bg-[#002a75] shadow-[0_12px_34px_rgba(0,0,0,0.18)]"
              key={item.id}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 210px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
