import type { AcademicPost } from "@/types"

type AcademicCardProps = Pick<AcademicPost, "category" | "description" | "title">

export function AcademicCard({ category, description, title }: AcademicCardProps) {
  return (
    <article className="rounded-xl border border-white/15 bg-white/5 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ffbd4a]">
        {category}
      </p>
      <h2 className="mt-3 font-semibold text-white">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
    </article>
  )
}
