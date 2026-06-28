"use client"

import { useState } from "react"
import Image from "next/image"
import { maskotIntro, maskotTabs } from "@/data/about"

export function Maskot() {
  const [active, setActive] = useState(maskotTabs[0].id)
  const activeTab = maskotTabs.find((t) => t.id === active) ?? maskotTabs[0]

  return (
    <section className="relative px-5 py-20 sm:px-8 lg:px-16">
      <Image
        src="/figma/star-rough.png"
        alt=""
        width={255}
        height={255}
        aria-hidden
        className="pointer-events-none absolute left-[2%] top-[10%] -z-10 hidden w-44 opacity-80 lg:block"
      />
      <Image
        src="/figma/star-rough.png"
        alt=""
        width={255}
        height={255}
        aria-hidden
        className="pointer-events-none absolute right-[6%] bottom-[6%] -z-10 hidden w-56 opacity-60 lg:block"
      />

      <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-[1fr_minmax(0,520px)] lg:items-end">
        <div>
          <div className="relative w-fit">
            <Image
              src="/figma/star-rough.png"
              alt=""
              width={255}
              height={255}
              aria-hidden
              className="pointer-events-none absolute -left-12 -top-10 -z-10 w-32 opacity-90"
            />
            <h2 className="font-[family-name:var(--font-goldman)] text-5xl leading-none [paint-order:stroke] [-webkit-text-stroke:0.13em_#032a79] sm:text-[64px]">
              Maskot <span className="text-[#ffbd4a]">HMPTI</span>
            </h2>
          </div>
          <p className="mt-5 max-w-xl font-[family-name:var(--font-inter)] text-lg font-medium leading-[26px] text-white sm:text-xl">
            {maskotIntro.replace(/\s*Owiie$/, "")}{" "}
            <span className="text-[#ffbd4a]">Owiie</span>
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {maskotTabs.map((tab) => {
              const isActive = active === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive(tab.id)}
                  aria-pressed={isActive}
                  className={`rounded-[15px] border border-white px-8 py-2.5 font-[family-name:var(--font-inter)] text-lg font-medium text-white [paint-order:stroke] [-webkit-text-stroke:0.05em_#ffffff] transition sm:text-xl ${
                    isActive ? "bg-[#a0aec0]" : "bg-[#002a75] hover:bg-[#003491]"
                  }`}
                >
                  {tab.id}
                </button>
              )
            })}
          </div>

          <div className="no-scrollbar mt-5 h-[300px] overflow-y-auto rounded-[15px] border-2 border-white bg-[#a0aec0]/20 p-6 shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-sm">
            {activeTab.bullets ? (
              <div className="font-[family-name:var(--font-inter)] text-sm font-medium leading-[24px] text-white">
                <p className="mb-3 text-center">{activeTab.intro}</p>
                <ul className="list-disc space-y-2 pl-5">
                  {activeTab.bullets.map((b) => (
                    <li key={b.label}>
                      <span className="font-bold">{b.label}:</span> {b.text}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center">
                <p className="text-center font-[family-name:var(--font-inter)] text-base font-medium leading-[26px] text-white">
                  {activeTab.content}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-[15px] bg-white shadow-[0_20px_55px_rgba(0,0,0,0.35)]">
          <div className="relative aspect-[495/278] w-full">
            <Image
              src="/figma/owiie.png"
              alt="Owiie — maskot HMPTI"
              fill
              sizes="(min-width: 1024px) 520px, 92vw"
              className="object-contain p-4"
            />
          </div>
          <div className="bg-[#002a75] py-5 text-center">
            <span className="font-[family-name:var(--font-goldman)] text-4xl font-bold text-[#002a75] [-webkit-text-stroke:0.06em_#ffffff] [paint-order:stroke]">
              Owiie
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
