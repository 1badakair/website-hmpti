import Image from "next/image"
import type { ProfileMember } from "@/types"

type ProfileMemberCardProps = {
  member: ProfileMember & {
    profileUrl?: string
  }
}

export function ProfileMemberCard({ member }: ProfileMemberCardProps) {
  return (
    <article className="group relative h-[258px] w-full max-w-[164px] overflow-hidden rounded-[10px] border-2 border-transparent bg-white p-2 shadow-[0_12px_24px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#ffbd4a] hover:shadow-[0_16px_32px_rgba(0,0,0,0.25)] sm:h-[322px] sm:max-w-[212px] sm:p-3">
      <div className="relative h-40 overflow-hidden rounded-[10px] bg-[#032a79] sm:h-56">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="(min-width: 640px) 212px, 164px"
        />
      </div>
      <h3 className="mt-2 truncate font-[family-name:var(--font-inter)] text-xs font-bold text-[#032a79] sm:mt-3 sm:text-sm">
        {member.name}
      </h3>
      <p className="mt-1 max-w-[110px] font-[family-name:var(--font-inter)] text-[11px] font-semibold text-[#ff9524] sm:max-w-[140px] sm:text-xs">
        {member.role}
      </p>
      {member.profileUrl ? (
        <a
          className="absolute bottom-2 right-2 inline-flex h-[22px] items-center gap-1 rounded-[8px] border border-white bg-[#002a75] px-2 font-[family-name:var(--font-inter)] text-[8px] font-medium text-white transition hover:bg-[#0560c3] hover:border-[#ffbd4a] hover:scale-105 active:scale-95 sm:bottom-3 sm:right-3"
          href={member.profileUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Profile
          <span aria-hidden="true">›</span>
        </a>
      ) : (
        <span className="absolute bottom-2 right-2 inline-flex h-[22px] items-center rounded-[8px] border border-white/60 bg-[#002a75]/45 px-2 font-[family-name:var(--font-inter)] text-[8px] font-medium text-white/70 sm:bottom-3 sm:right-3">
          Not Available
        </span>
      )}
    </article>
  )
}
