import type { AcademicPost } from "@/types"
import Image from "next/image"

type AcademicCardProps = {
  post: AcademicPost
  active?: boolean
  onSelect?: () => void
}

export function AcademicCard({ active = false, onSelect, post }: AcademicCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative h-[298px] w-full overflow-hidden rounded-[16px] border-2 text-left shadow-[0_18px_42px_rgba(0,0,0,0.26)] transition duration-300 hover:-translate-y-1 ${
        active ? "border-[#f9a825]" : "border-white/30 hover:border-[#ffbd4a]"
      }`}
    >
      <Image
        src={post.image ?? "/figma/academic-lomba.png"}
        alt={post.title}
        fill
        sizes="(min-width: 1280px) 284px, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,27,75,0.03)_0%,rgba(0,27,75,0.12)_42%,rgba(0,27,75,0.92)_100%)]" />
      <div className="absolute bottom-[104px] left-8 rounded-full bg-black/50 px-4 py-2 font-[family-name:var(--font-inter)] text-xs font-medium text-white backdrop-blur-sm">
        {post.badge ?? "Achievement"}
      </div>
      <h3 className="absolute bottom-[58px] left-8 right-6 font-[family-name:var(--font-inter)] text-2xl font-semibold leading-tight text-white">
        {post.title}
      </h3>
      <span className="absolute bottom-8 left-8 font-[family-name:var(--font-inter)] text-sm font-medium text-white/75">
        Explore Portal
      </span>
    </button>
  )
}
