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
  scope: "Internal" | "National" | "International"
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
  "Channel your aspirations so they can be heard and improved in the future."

const baseItems = [
  {
    id: "internal-1",
    title: "Bebek (Belajar Bersama Akademik)",
    description:
      "An internal learning program by HMIF aimed at the BPH and all HMIF staff. Materials cover HTML, CSS, Tailwind, JavaScript, React/Next, and others.",
    date: "12 August 2025",
    image: "/figma/program-card.png",
    scope: "Internal",
    mode: "Offline",
  },
  {
    id: "national-1",
    title: "Tech Competition Roadmap",
    description:
      "A summary of national competition opportunities for Informatics students looking to develop their academic portfolio and achievements.",
    date: "18 August 2025",
    image: "/figma/academic-lomba.png",
    scope: "National",
    mode: "Online",
  },
  {
    id: "international-1",
    title: "Global Academic Opportunity",
    description:
      "International academic information, research programs, global seminars, and cross-campus self-development opportunities.",
    date: "25 August 2025",
    image: "/figma/academic-seminar.png",
    scope: "International",
    mode: "Hybrid",
  },
  {
    id: "internal-2",
    title: "Academic Sharing Session",
    description:
      "A sharing session among students to discuss academic opportunities, class preparation, and strategies for campus activities.",
    date: "30 August 2025",
    image: "/figma/gallery-3.jpg",
    scope: "Internal",
    mode: "Offline",
  },
] satisfies Array<Omit<AcademicCategoryItem, "badge">>

const academicCategoryConfigs = [
  {
    slug: "lomba",
    title: "Competition Info",
    subtitle: defaultSubtitle,
    buttonText: "Provide Competition Info",
    category: "Competition",
  },
  {
    slug: "seminar",
    title: "Seminar Info",
    subtitle: defaultSubtitle,
    buttonText: "Provide Seminar Info",
    category: "Seminar",
  },
  {
    slug: "beasiswa",
    title: "Scholarship Info",
    subtitle: defaultSubtitle,
    buttonText: "Provide Scholarship Info",
    category: "Scholarship",
  },
  {
    slug: "magang-sertifikasi",
    title: "Internship & Certification",
    subtitle: defaultSubtitle,
    buttonText: "Provide Internship & Certification Info",
    category: "Academic",
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
