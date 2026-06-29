type MemberCardProps = {
  name: string
  role: string
}

export function MemberCard({ name, role }: MemberCardProps) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-5">
      <p className="font-semibold text-white">{name}</p>
      <p className="mt-1 text-sm text-white/60">{role}</p>
    </div>
  )
}
