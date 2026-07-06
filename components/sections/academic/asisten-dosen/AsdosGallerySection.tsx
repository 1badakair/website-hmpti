"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Play, Pause } from "lucide-react"

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
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

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

        <div
          className="group relative mt-9 aspect-video cursor-pointer overflow-hidden rounded-[13px] border border-white/20 bg-black shadow-[0_20px_56px_rgba(0,0,0,0.28)] sm:mt-12 sm:aspect-[16/8.6]"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="/assets/video/home-hmpti.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              !isPlaying
                ? "bg-black/40 opacity-100"
                : "bg-black/20 opacity-0 group-hover:opacity-100"
            }`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffbd4a] text-[#001a48] shadow-[0_8px_24px_rgba(255,189,74,0.4)] transition-transform hover:scale-105 active:scale-95 sm:h-24 sm:w-24">
              {!isPlaying ? (
                <Play className="ml-1.5 h-8 w-8 sm:ml-2 sm:h-12 sm:w-12" fill="currentColor" />
              ) : (
                <Pause className="h-8 w-8 sm:h-12 sm:w-12" fill="currentColor" />
              )}
            </div>
          </div>
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
