export type AcademicCategorySlug =
  | "lomba"
  | "seminar"
  | "beasiswa"
  | "magang-sertifikasi"

export type AcademicCategoryItem = {
  id: string
  title: string
  description: string
  date: string
  image: string
  badge: string
  scope: "Internal" | "Nasional" | "Internasional"
  mode: string
}

export type AcademicCategoryPageData = {
  slug: AcademicCategorySlug
  title: string
  subtitle: string
  buttonText: string
  category: string
  items: AcademicCategoryItem[]
}

const defaultSubtitle =
  "Salurkan aspirasimu agar bisa didengar dan diperbaiki kedepannya."

const baseItems = [
  {
    id: "internal-1",
    title: "Bebek (Belajar Bersama Akademik)",
    description:
      "Program belajar internal HMIF yang ditujukan untuk BPH dan seluruh staf HMIF. Materi mencakup HTML, CSS, Tailwind, JavaScript, React/Next, dan lain-lain.",
    date: "12 Agustus 2025",
    image: "/figma/program-card.png",
    scope: "Internal",
    mode: "Offline",
  },
  {
    id: "nasional-1",
    title: "Tech Competition Roadmap",
    description:
      "Rangkuman peluang kompetisi nasional untuk mahasiswa Informatika yang ingin mengembangkan portofolio akademik dan prestasi.",
    date: "18 Agustus 2025",
    image: "/figma/academic-lomba.png",
    scope: "Nasional",
    mode: "Online",
  },
  {
    id: "internasional-1",
    title: "Global Academic Opportunity",
    description:
      "Informasi akademik internasional, program riset, seminar global, dan peluang pengembangan diri lintas kampus.",
    date: "25 Agustus 2025",
    image: "/figma/academic-seminar.png",
    scope: "Internasional",
    mode: "Hybrid",
  },
  {
    id: "internal-2",
    title: "Academic Sharing Session",
    description:
      "Sesi berbagi antar mahasiswa untuk membahas peluang akademik, persiapan kelas, dan strategi mengikuti kegiatan kampus.",
    date: "30 Agustus 2025",
    image: "/figma/gallery-3.jpg",
    scope: "Internal",
    mode: "Offline",
  },
] satisfies Array<Omit<AcademicCategoryItem, "badge">>

const academicCategoryConfigs = [
  {
    slug: "lomba",
    title: "Info Lomba",
    subtitle: defaultSubtitle,
    buttonText: "Beri Info Lomba",
    category: "Lomba",
  },
  {
    slug: "seminar",
    title: "Info Seminar",
    subtitle: defaultSubtitle,
    buttonText: "Beri Info Seminar",
    category: "Seminar",
  },
  {
    slug: "beasiswa",
    title: "Info Beasiswa",
    subtitle: defaultSubtitle,
    buttonText: "Beri Info Beasiswa",
    category: "Beasiswa",
  },
  {
    slug: "magang-sertifikasi",
    title: "Magang & Sertifikasi",
    subtitle: defaultSubtitle,
    buttonText: "Beri Info Magang & Sertifikasi",
    category: "Akademik",
  },
] satisfies {
  slug: AcademicCategorySlug
  title: string
  subtitle: string
  buttonText: string
  category: string
}[]

export const academicCategoryPages = academicCategoryConfigs.map((category) => ({
  ...category,
  items: baseItems.map((item) => ({
    ...item,
    badge: category.category,
  })),
})) satisfies AcademicCategoryPageData[]

export const academicCategorySlugs = academicCategoryPages.map(
  (category) => category.slug,
)

export function getAcademicCategoryPage(slug: string) {
  return academicCategoryPages.find((category) => category.slug === slug)
}
