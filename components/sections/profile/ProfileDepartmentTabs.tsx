"use client"

import type { ProfileDepartment } from "@/types"

type ProfileDepartmentTabsProps = {
  activeId: ProfileDepartment["id"]
  departments: ProfileDepartment[]
  onChange: (id: ProfileDepartment["id"]) => void
}

export function ProfileDepartmentTabs({
  activeId,
  departments,
  onChange,
}: ProfileDepartmentTabsProps) {
  return (
    <div className="flex gap-3 overflow-x-auto rounded-[25px] border border-[#a0aec0] bg-[rgba(5,96,195,0.2)] p-5 lg:flex-col lg:gap-5 lg:p-16">
      {departments.map((department) => {
        const isActive = department.id === activeId

        return (
          <button
            className={`h-[53px] min-w-36 rounded-[10px] border-2 border-white/30 px-8 py-3 text-center font-[family-name:var(--font-inter)] text-sm transition sm:text-base lg:w-full ${
              isActive
                ? "bg-[#f9a825] font-bold text-white shadow-[0_10px_24px_rgba(249,168,37,0.24)]"
                : "bg-[#001b4b] font-medium text-white hover:border-[#f9a825]/70 hover:bg-[#082c70]"
            }`}
            key={department.id}
            onClick={() => onChange(department.id)}
            type="button"
          >
            {department.name}
          </button>
        )
      })}
    </div>
  )
}
