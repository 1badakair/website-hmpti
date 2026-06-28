import Image from "next/image"
import { aboutFeatures, aboutIntro, type FeatureIcon } from "@/data/about"

function FeatureGlyph({ icon }: { icon: FeatureIcon }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  }
  if (icon === "users") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
  if (icon === "trophy") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...common}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    )
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...common}>
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  )
}

export function TentangKami() {
  return (
    <section className="relative px-5 pb-12 pt-24 sm:px-8 lg:px-16">
      <Image
        src="/figma/ellipse-14.svg"
        alt=""
        width={1079}
        height={824}
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 opacity-40"
      />
      <Image
        src="/figma/star-rough.png"
        alt=""
        width={255}
        height={255}
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[28%] -z-10 hidden w-28 opacity-80 lg:block"
      />

      <div className="mx-auto max-w-[900px] text-center">
        <h2 className="font-[family-name:var(--font-goldman)] text-5xl leading-none [paint-order:stroke] [-webkit-text-stroke:0.13em_#032a79] sm:text-[64px]">
          Tentang <span className="text-[#ffbd4a]">Kami</span>
        </h2>
        <p className="mx-auto mt-7 max-w-[880px] font-[family-name:var(--font-inter)] text-base font-medium leading-[26px] text-white sm:text-lg">
          {aboutIntro}
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-[800px] gap-5 sm:grid-cols-3">
        {aboutFeatures.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-[#002a75]/80 bg-white/80 p-5"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-11 place-items-center rounded-[14px] bg-[#718096] text-white">
                <FeatureGlyph icon={feature.icon} />
              </span>
              <h3 className="font-[family-name:var(--font-inter)] text-[15px] font-bold text-[#002a75]">
                {feature.title}
              </h3>
            </div>
            <p className="mt-4 font-[family-name:var(--font-inter)] text-xs leading-[19px] text-[#002a75]/70">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
