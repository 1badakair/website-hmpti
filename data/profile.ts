import type { Department, ProfileDepartment, ProfileMember } from "@/types"

type ProfileMemberWithUrl = ProfileMember & {
  profileUrl?: string
}

const bphMembers: ProfileMemberWithUrl[] = [
  {
    id: "bph-1",
    name: "Xavier",
    role: "Chairman",
    image: "/assets/profile/xavier.png",
    profileUrl: "https://xavierwijayahere.vercel.app/",
  },
  {
    id: "bph-2",
    name: "Berlian",
    role: "Secretary I",
    image: "/assets/profile/berlian.png",
    profileUrl: "https://linktr.ee/berlianrzn?utm_source=qr_code",
  },
  {
    id: "bph-3",
    name: "Jeremy",
    role: "Secretary II",
    image: "/assets/profile/jeremy.png",
    profileUrl: "https://portfolio-jeremy-trystan-amber.vercel.app/",
  },
  {
    id: "bph-4",
    name: "Audel",
    role: "Treasurer I",
    image: "/assets/profile/audel.png",
    profileUrl: "https://linktr.ee/audeliatjh",
  },
  {
    id: "bph-5",
    name: "Wynona",
    role: "Treasurer II",
    image: "/assets/profile/wynona.png",
    profileUrl: "https://linktr.ee/wynona?utm_source=qr_code",
  },
]

const operationMembers: ProfileMemberWithUrl[] = [
  {
    id: "operation-1",
    name: "Adit",
    role: "Coordinator",
    image: "/assets/profile/adit.png",
    profileUrl: "https://linktr.ee/twahyuaditya",
  },
  {
    id: "operation-2",
    name: "Yohanes",
    role: "Staff",
    image: "/assets/profile/yohanes.png",
    profileUrl: "https://yohaneswp.vercel.app/",
  },
  {
    id: "operation-3",
    name: "Yosua",
    role: "Staff",
    image: "/assets/profile/yosua.png",
    profileUrl: "https://linktr.ee/672024016?utm_source=qr_code",
  },
  {
    id: "operation-4",
    name: "Dhika",
    role: "Staff",
    image: "/assets/profile/dhika.png",
    profileUrl: "https://linktr.ee/dhikaprimanda",
  },
]

const creativeMembers: ProfileMemberWithUrl[] = [
  {
    id: "creative-1",
    name: "Theo",
    role: "Coordinator",
    image: "/assets/profile/theo.png",
    profileUrl: "https://www.instagram.com/aratakitheo/",
  },
  {
    id: "creative-2",
    name: "Samuel",
    role: "Staff",
    image: "/assets/profile/samuel.png",
  },
  {
    id: "creative-3",
    name: "Khulud",
    role: "Staff",
    image: "/assets/profile/khulud.png",
    profileUrl:
      "https://linktr.ee/Khulud_zlyn?utm_source=linktree_profile_share&ltsid=26bf897c-82c8-4d13-b420-c2ad84feee7f",
  },
  {
    id: "creative-4",
    name: "Agri",
    role: "Staff",
    image: "/assets/profile/agri.png",
  },
]

const academicMembers: ProfileMemberWithUrl[] = [
  {
    id: "academic-1",
    name: "Matheo",
    role: "Coordinator",
    image: "/assets/profile/matheo.png",
    profileUrl: "https://linktr.ee/matheoamarya?utm_source=qr_code",
  },
  {
    id: "academic-2",
    name: "Zia",
    role: "Staff",
    image: "/assets/profile/zia.png",
    profileUrl: "https://linktr.ee/fahzya",
  },
  {
    id: "academic-3",
    name: "John",
    role: "Staff",
    image: "/assets/profile/john.png",
    profileUrl: "https://linktr.ee/johnmsp",
  },
  {
    id: "academic-4",
    name: "Widhi",
    role: "Staff",
    image: "/assets/profile/widhi.png",
    profileUrl:
      "https://www.linkedin.com/in/widhi-kristianto-0816a2358?utm_source=share&utm_campaign=share_via&utm_content=profile&u",
  },
]

const humanitarianMembers: ProfileMemberWithUrl[] = [
  {
    id: "humanitarian-1",
    name: "Trista",
    role: "Coordinator",
    image: "/assets/profile/trista.png",
    profileUrl: "https://linktr.ee/candrarinitrista?utm_source=qr_code",
  },
  {
    id: "humanitarian-2",
    name: "Cesa",
    role: "Staff",
    image: "/assets/profile/cesa.png",
    profileUrl: "https://linktr.ee/cesacaa?utm_source=qr_code",
  },
  {
    id: "humanitarian-3",
    name: "Talita",
    role: "Staff",
    image: "/assets/profile/talita.png",
  },
  {
    id: "humanitarian-4",
    name: "Imam",
    role: "Staff",
    image: "/assets/profile/imam.png",
    profileUrl:
      "https://www.linkedin.com/in/imamadiwicaksana?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
]

export const profileDepartments = [
  {
    id: "bph",
    name: "Executive",
    description:
      "As the strategic command center of HMPTI, Executive is fully responsible for the association's policy direction, managerial, and operational activities. This division ensures all work programs synergize optimally with HMPTI's vision, which is to realize an incubation room for digital talents who are critical, solution-oriented, and professional.",
    members: bphMembers,
  },
  {
    id: "operation",
    name: "Operation",
    description:
      "Operation maintains the rhythm of HMPTI's work programs implementation to run neatly, measurably, and on target. This division guards the technical needs of activities from planning to evaluation.",
    members: operationMembers,
  },
  {
    id: "creative",
    name: "Creative",
    description:
      "Creative processes visual ideas, publications, and documentation into fresh and easily recognizable communications. This division ensures HMPTI's identity is consistently present across every channel.",
    members: creativeMembers,
  },
  {
    id: "academic",
    name: "Academic",
    description:
      "Academic focuses on developing a learning atmosphere, competition information, seminars, and academic opportunities. This division acts as a bridge for students to grow intellectually.",
    members: academicMembers,
  },
  {
    id: "humanitarian",
    name: "Humanitarian",
    description:
      "Humanitarian builds social care and student solidarity through impactful activities. This division keeps HMPTI close to human and community needs.",
    members: humanitarianMembers,
  },
] satisfies ProfileDepartment[]

export const organizationStructure = profileDepartments[0].members

export const departments: Department[] = profileDepartments.map((department) => ({
  id: department.id,
  name: department.name,
  description: department.description,
}))
