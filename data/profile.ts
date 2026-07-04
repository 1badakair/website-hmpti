import type { Department, ProfileDepartment, ProfileMember } from "@/types"

const memberImage = "/figma/profile-member.png"

type ProfileMemberWithUrl = ProfileMember & {
  profileUrl?: string
}

const bphMembers: ProfileMemberWithUrl[] = [
  {
    id: "bph-1",
    name: "Xavier",
    role: "Ketua",
    image: memberImage,
    profileUrl: "https://xavierwijayahere.vercel.app/",
  },
  {
    id: "bph-2",
    name: "Berlian",
    role: "Sekretaris I",
    image: memberImage,
    profileUrl: "https://linktr.ee/berlianrzn?utm_source=qr_code",
  },
  {
    id: "bph-3",
    name: "Jeremy",
    role: "Sekretaris II",
    image: memberImage,
    profileUrl: "https://portfolio-jeremy-trystan-amber.vercel.app/",
  },
  {
    id: "bph-4",
    name: "Audel",
    role: "Bendahara I",
    image: memberImage,
    profileUrl: "https://linktr.ee/audeliatjh",
  },
  {
    id: "bph-5",
    name: "Wynona",
    role: "Bendahara II",
    image: memberImage,
    profileUrl: "https://linktr.ee/wynona?utm_source=qr_code",
  },
]

const operationMembers: ProfileMemberWithUrl[] = [
  {
    id: "operation-1",
    name: "Adit",
    role: "Coordinator",
    image: memberImage,
    profileUrl: "https://linktr.ee/twahyuaditya",
  },
  {
    id: "operation-2",
    name: "Yohanes",
    role: "Staff",
    image: memberImage,
    profileUrl: "https://yohaneswp.vercel.app/",
  },
  {
    id: "operation-3",
    name: "Yosua",
    role: "Staff",
    image: memberImage,
    profileUrl: "https://linktr.ee/672024016?utm_source=qr_code",
  },
  {
    id: "operation-4",
    name: "Dhika",
    role: "Staff",
    image: memberImage,
    profileUrl: "https://linktr.ee/dhikaprimanda",
  },
]

const creativeMembers: ProfileMemberWithUrl[] = [
  {
    id: "creative-1",
    name: "Theo",
    role: "Coordinator",
    image: memberImage,
    profileUrl: "https://www.instagram.com/aratakitheo/",
  },
  {
    id: "creative-2",
    name: "Samuel",
    role: "Staff",
    image: memberImage,
  },
  {
    id: "creative-3",
    name: "Khulud",
    role: "Staff",
    image: memberImage,
    profileUrl:
      "https://linktr.ee/Khulud_zlyn?utm_source=linktree_profile_share&ltsid=26bf897c-82c8-4d13-b420-c2ad84feee7f",
  },
  {
    id: "creative-4",
    name: "Agri",
    role: "Staff",
    image: memberImage,
  },
]

const academicMembers: ProfileMemberWithUrl[] = [
  {
    id: "academic-1",
    name: "Matheo",
    role: "Coordinator",
    image: memberImage,
    profileUrl: "https://linktr.ee/matheoamarya?utm_source=qr_code",
  },
  {
    id: "academic-2",
    name: "Zia",
    role: "Staff",
    image: memberImage,
    profileUrl: "https://linktr.ee/fahzya",
  },
  {
    id: "academic-3",
    name: "John",
    role: "Staff",
    image: memberImage,
    profileUrl: "https://linktr.ee/johnmsp",
  },
  {
    id: "academic-4",
    name: "Widhi",
    role: "Staff",
    image: memberImage,
    profileUrl:
      "https://www.linkedin.com/in/widhi-kristianto-0816a2358?utm_source=share&utm_campaign=share_via&utm_content=profile&u",
  },
]

const humanitarianMembers: ProfileMemberWithUrl[] = [
  {
    id: "humanitarian-1",
    name: "Trista",
    role: "Coordinator",
    image: memberImage,
    profileUrl: "https://linktr.ee/candrarinitrista?utm_source=qr_code",
  },
  {
    id: "humanitarian-2",
    name: "Cesa",
    role: "Staff",
    image: memberImage,
    profileUrl: "https://linktr.ee/cesacaa?utm_source=qr_code",
  },
  {
    id: "humanitarian-3",
    name: "Talita",
    role: "Staff",
    image: memberImage,
  },
  {
    id: "humanitarian-4",
    name: "Imam",
    role: "Staff",
    image: memberImage,
    profileUrl:
      "https://www.linkedin.com/in/imamadiwicaksana?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
]

export const profileDepartments = [
  {
    id: "bph",
    name: "BPH",
    description:
      "Sebagai pusat komando strategis HMPTI, BPH bertanggung jawab penuh atas arah kebijakan, manajerial, dan operasional himpunan. Divisi ini memastikan seluruh program kerja bersinergi secara optimal dengan visi HMPTI, yakni mewujudkan ruang inkubasi talenta digital yang kritis, solutif, dan profesional.",
    members: bphMembers,
  },
  {
    id: "operation",
    name: "Operation",
    description:
      "Operation menjaga ritme pelaksanaan program kerja HMPTI agar berjalan rapi, terukur, dan tepat sasaran. Divisi ini mengawal kebutuhan teknis kegiatan dari perencanaan sampai evaluasi.",
    members: operationMembers,
  },
  {
    id: "creative",
    name: "Creative",
    description:
      "Creative mengolah ide visual, publikasi, dan dokumentasi menjadi komunikasi yang segar serta mudah dikenali. Divisi ini memastikan identitas HMPTI hadir konsisten di setiap kanal.",
    members: creativeMembers,
  },
  {
    id: "academic",
    name: "Academic",
    description:
      "Academic berfokus pada pengembangan atmosfer belajar, informasi lomba, seminar, dan peluang akademik. Divisi ini menjadi jembatan mahasiswa untuk bertumbuh secara intelektual.",
    members: academicMembers,
  },
  {
    id: "humanitarian",
    name: "Humanitarian",
    description:
      "Humanitarian membangun kepedulian sosial dan solidaritas mahasiswa melalui kegiatan yang berdampak. Divisi ini menjaga HMPTI tetap dekat dengan kebutuhan manusia dan komunitas.",
    members: humanitarianMembers,
  },
] satisfies ProfileDepartment[]

export const organizationStructure = profileDepartments[0].members

export const departments: Department[] = profileDepartments.map((department) => ({
  id: department.id,
  name: department.name,
  description: department.description,
}))
