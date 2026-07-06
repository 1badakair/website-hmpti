import Image from "next/image"
import { aboutFeatures, aboutIntro, type FeatureIcon } from "@/data/about"
import { MotionSection } from "@/components/ui/MotionSection"
import { Users, Trophy, Star } from "lucide-react"

function FeatureGlyph({ icon }: { icon: FeatureIcon }) {
  const common = {
    className: "w-6 h-6",
    "aria-hidden": true,
  }
  if (icon === "users") {
    return <Users {...common} />
  }
  if (icon === "trophy") {
    return <Trophy {...common} />
  }
  return <Star {...common} />
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
        className="pointer-events-none absolute right-[8%] top-[28%] -z-10 block w-16 opacity-80 lg:w-28"
      />

      <MotionSection className="mx-auto max-w-[900px] text-center">
        <h2 className="font-[family-name:var(--font-goldman)] text-5xl leading-none [paint-order:stroke] [-webkit-text-stroke:0.13em_#032a79] sm:text-[64px]">
          About <span className="text-[#ffbd4a]">Us</span>
        </h2>
        <p className="mx-auto mt-7 max-w-[880px] font-[family-name:var(--font-inter)] text-base font-medium leading-[26px] text-white sm:text-lg">
          {aboutIntro}
        </p>
      </MotionSection>

      <MotionSection delay={0.2} className="mx-auto mt-16 grid max-w-[800px] gap-5 sm:grid-cols-3">
        {aboutFeatures.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-2xl border border-[#002a75]/80 bg-white/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ffbd4a] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-11 place-items-center rounded-[14px] bg-[#718096] text-white transition-colors duration-300 group-hover:bg-[#ffbd4a] group-hover:text-[#002a75]">
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
      </MotionSection>
    </section>
  )
}
