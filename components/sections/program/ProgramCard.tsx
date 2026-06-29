type ProgramCardProps = {
  title: string
  description: string
}

export function ProgramCard({ title, description }: ProgramCardProps) {
  return (
    <article className="rounded-xl border border-white/15 bg-white/5 p-5">
      <h2 className="font-semibold text-white">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
    </article>
  )
}
