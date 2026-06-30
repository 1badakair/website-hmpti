"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { profileDepartments } from "@/data/profile"
import type { ProfileDepartment } from "@/types"
import { ProfileDepartmentTabs } from "./ProfileDepartmentTabs"
import { ProfileMemberCard } from "./ProfileMemberCard"

export function ProfileStructureSection() {
  const [activeId, setActiveId] = useState<ProfileDepartment["id"]>("bph")

  const activeDepartment = useMemo(
    () => profileDepartments.find((department) => department.id === activeId) ?? profileDepartments[0],
    [activeId],
  )

  return (
    <section className="relative px-5 pb-28 pt-20 sm:px-8 lg:px-16">
      <Image
        src="/figma/star-22.svg"
        alt=""
        width={647}
        height={647}
        className="pointer-events-none absolute right-[-260px] top-56 opacity-60"
      />
      <Image
        src="/figma/star-blob-white.svg"
        alt=""
        width={120}
        height={120}
        className="pointer-events-none absolute left-[52%] top-24 hidden rotate-12 opacity-70 md:block"
      />

      <div className="relative mx-auto max-w-[1177px]">
        <h2 className="text-center font-[family-name:var(--font-goldman)] text-4xl leading-none text-white sm:text-6xl">
          Struktur <span className="text-[#ffbd4a]">HMPTI</span>
        </h2>

        <div className="mt-12 rounded-[25px] border border-[#a0aec0] bg-[#032a79] p-5 shadow-[0_32px_80px_rgba(0,0,0,0.24)] sm:p-7 lg:p-[30px]">
          <div className="grid gap-6 lg:grid-cols-[295px_1fr]">
            <ProfileDepartmentTabs
              activeId={activeId}
              departments={profileDepartments}
              onChange={setActiveId}
            />

            <div className="rounded-[25px] border border-[#a0aec0] bg-[rgba(5,96,195,0.2)] px-5 py-8 sm:px-8 lg:min-h-[1209px] lg:px-16 lg:py-20">
              <div className="max-w-3xl">
                <h3 className="font-[family-name:var(--font-goldman)] text-4xl leading-none text-white sm:text-6xl">
                  {activeDepartment.name}
                </h3>
                <p className="mt-5 font-[family-name:var(--font-inter)] text-sm font-medium leading-relaxed text-white sm:text-lg">
                  {activeDepartment.description}
                </p>
              </div>

              <div className="mt-10 grid justify-items-center gap-8 sm:grid-cols-2 xl:grid-cols-3 xl:justify-items-start">
                {activeDepartment.members.map((member) => (
                  <ProfileMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
