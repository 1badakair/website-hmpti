import type { AcademicPost } from "@/types"
import Image from "next/image"
import Link from "next/link"

type AcademicCardProps = {
  post: AcademicPost
  active?: boolean
  onSelect?: () => void
}

export function AcademicCard({ active = false, onSelect, post }: AcademicCardProps) {
  const cardClassName = `group relative block h-[238px] w-full overflow-hidden rounded-[16px] border-2 text-left shadow-[0_18px_42px_rgba(0,0,0,0.26)] transition duration-300 hover:-translate-y-1 sm:h-[298px] ${
    active ? "border-[#f9a825]" : "border-white/30 hover:border-[#ffbd4a]"
  }`

  const content = (
    <>
      <Image
        src={post.image ?? "/figma/academic-lomba.png"}
        alt={post.title}
        fill
        sizes="(min-width: 1280px) 284px, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,27,75,0.03)_0%,rgba(0,27,75,0.12)_42%,rgba(0,27,75,0.92)_100%)]" />
      <div className="absolute bottom-[82px] left-5 rounded-full bg-black/50 px-3 py-1.5 font-[family-name:var(--font-inter)] text-xs font-medium text-white backdrop-blur-sm sm:bottom-[104px] sm:left-8 sm:px-4 sm:py-2">
        {post.badge ?? "Achievement"}
      </div>
      <h3 className="absolute bottom-11 left-5 right-5 font-[family-name:var(--font-inter)] text-xl font-semibold leading-tight text-white sm:bottom-[58px] sm:left-8 sm:right-6 sm:text-2xl">
        {post.title}
      </h3>
      <span className="absolute bottom-5 left-5 font-[family-name:var(--font-inter)] text-xs font-medium text-white/75 sm:bottom-8 sm:left-8 sm:text-sm">
        Explore Portal
      </span>
    </>
  )

  if (post.href) {
    return (
      <Link className={cardClassName} href={post.href}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cardClassName}
    >
      {content}
    </button>
  )
}
