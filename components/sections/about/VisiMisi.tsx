"use client"

import { useState } from "react"
import Image from "next/image"
import { misiContent, visiContent } from "@/data/about"

type Tab = "Visi" | "Misi"

export function VisiMisi() {
  const [active, setActive] = useState<Tab>("Visi")

  return (
    <section className="relative px-5 py-20 sm:px-8 lg:px-16">
      <h2 className="mb-12 text-center font-[family-name:var(--font-goldman)] text-5xl leading-none [paint-order:stroke] [-webkit-text-stroke:0.13em_#032a79] sm:text-[64px]">
        Visi <span className="text-[#ffbd4a]">Misi</span>
      </h2>

      <Image
        src="/figma/Star3.svg"
        alt=""
        width={475}
        height={486}
        aria-hidden
        className="pointer-events-none absolute left-[-160px] top-[20%] z-0 block w-[230px] lg:w-[520px]"
      />
      <Image
        src="/figma/Star3.svg"
        alt=""
        width={475}
        height={486}
        aria-hidden
        className="pointer-events-none absolute right-[-80px] top-[6%] z-0 block w-[150px] lg:w-[340px]"
      />

      <div className="relative z-10 mx-auto max-w-[1022px]">
        <div className="flex flex-col items-center justify-center gap-8 rounded-[25px] border-2 border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.4)_4%,rgba(133,190,255,0.24)_22%,rgba(6,94,194,0.4)_53%,rgba(3,45,92,0.4)_98%)] p-8 shadow-[8px_12px_80px_0_rgba(0,0,0,0.25)] lg:h-[552px] lg:flex-row lg:gap-[70px] lg:px-[68px]">
          <div className="flex w-full max-w-[222px] flex-col gap-[30px]">
            {(["Visi", "Misi"] as Tab[]).map((tab) => {
              const isActive = active === tab
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActive(tab)}
                  aria-pressed={isActive}
                  className={`flex h-[89px] items-center justify-center rounded-[20px] border-2 border-white/30 font-[family-name:var(--font-goldman)] text-4xl font-bold [paint-order:stroke] [-webkit-text-stroke:0.1em_#032a79] transition sm:text-5xl ${
                    isActive
                      ? "bg-[#001b4b] text-[#f9a825]"
                      : "bg-[#003491] text-[#a0aec0] hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              )
            })}
          </div>

          <div className="relative w-full lg:w-[514px]">
            <Image
              src="/figma/star-solid.svg"
              alt=""
              width={109}
              height={109}
              aria-hidden
              className="pointer-events-none absolute -left-10 -top-10 z-10 block w-14 sm:w-[88px]"
            />
            <Image
              src="/figma/star-blob.svg"
              alt=""
              width={74}
              height={74}
              aria-hidden
              className="pointer-events-none absolute -bottom-6 right-2 z-10 block w-10 sm:w-14"
            />
            <div className="flex min-h-[280px] items-center rounded-[25px] bg-[#001b4b] p-8 font-[family-name:var(--font-inter)] text-white lg:h-[419px] lg:p-10">
              {active === "Visi" ? (
                <p className="w-full text-center text-lg font-medium leading-[26px]">
                  {visiContent}
                </p>
              ) : (
                <ol className="list-decimal space-y-3 pl-5 text-base font-medium leading-[26px]">
                  {misiContent.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
