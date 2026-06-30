import Image from "next/image"
import type { ProfileMember } from "@/types"

type ProfileMemberCardProps = {
  member: ProfileMember
}

export function ProfileMemberCard({ member }: ProfileMemberCardProps) {
  return (
    <article className="relative h-[322px] w-full max-w-[212px] overflow-hidden rounded-[10px] bg-white p-3 shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
      <div className="relative h-56 overflow-hidden rounded-[10px] bg-[#032a79]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="212px"
        />
      </div>
      <h3 className="mt-3 truncate font-[family-name:var(--font-inter)] text-sm font-bold text-[#032a79]">
        {member.name}
      </h3>
      <p className="mt-1 max-w-[140px] font-[family-name:var(--font-inter)] text-xs font-semibold text-[#ff9524]">
        {member.role}
      </p>
      <button
        className="absolute bottom-3 right-3 inline-flex h-[22px] items-center gap-1 rounded-[8px] border border-white bg-[#002a75] px-2 font-[family-name:var(--font-inter)] text-[8px] font-medium text-white"
        type="button"
      >
        Lihat Profil
        <span aria-hidden="true">›</span>
      </button>
    </article>
  )
}
