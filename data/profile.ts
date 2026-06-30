import type { Department, ProfileDepartment, ProfileMember } from "@/types"

const memberImage = "/figma/profile-member.png"

const bphMembers: ProfileMember[] = [
  {
    id: "bph-1",
    name: "Nyoman Ayu Carmenita",
    role: "Chairman HMPTI",
    image: memberImage,
  },
  {
    id: "bph-2",
    name: "Nyoman Ayu Carmenita",
    role: "Vice Chairman",
    image: memberImage,
  },
  {
    id: "bph-3",
    name: "Nyoman Ayu Carmenita",
    role: "Secretary",
    image: memberImage,
  },
  {
    id: "bph-4",
    name: "Nyoman Ayu Carmenita",
    role: "Treasurer",
    image: memberImage,
  },
  {
    id: "bph-5",
    name: "Nyoman Ayu Carmenita",
    role: "Coordinator",
    image: memberImage,
  },
]

function makeMembers(prefix: string, role: string): ProfileMember[] {
  return Array.from({ length: 5 }, (_, index) => ({
    id: `${prefix}-${index + 1}`,
    name: "Nyoman Ayu Carmenita",
    role,
    image: memberImage,
  }))
}

export const profileDepartments: ProfileDepartment[] = [
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
    members: makeMembers("operation", "Operation Staff"),
  },
  {
    id: "creative",
    name: "Creative",
    description:
      "Creative mengolah ide visual, publikasi, dan dokumentasi menjadi komunikasi yang segar serta mudah dikenali. Divisi ini memastikan identitas HMPTI hadir konsisten di setiap kanal.",
    members: makeMembers("creative", "Creative Staff"),
  },
  {
    id: "academic",
    name: "Academic",
    description:
      "Academic berfokus pada pengembangan atmosfer belajar, informasi lomba, seminar, dan peluang akademik. Divisi ini menjadi jembatan mahasiswa untuk bertumbuh secara intelektual.",
    members: makeMembers("academic", "Academic Staff"),
  },
  {
    id: "humanitarian",
    name: "Humanitarian",
    description:
      "Humanitarian membangun kepedulian sosial dan solidaritas mahasiswa melalui kegiatan yang berdampak. Divisi ini menjaga HMPTI tetap dekat dengan kebutuhan manusia dan komunitas.",
    members: makeMembers("humanitarian", "Humanitarian Staff"),
  },
]

export const organizationStructure = profileDepartments[0].members

export const departments: Department[] = profileDepartments.map((department) => ({
  id: department.id,
  name: department.name,
  description: department.description,
}))
