export type Program = {
  id: string
  slug: string
  title: string
  category: ProgramCategory
  description: string
  content: string
  image: string
  date: string
  mode: string
  location: string
  audience: string
  benefits: string[]
  materials: string[]
}

export type ProgramCategory = "Structured" | "Unstructured"

export type ProgramSummary = {
  id: string
  icon: string
  title: string
  description: string
}

export type AcademicPost = {
  id: string
  title: string
  category: AcademicCategory
  description: string
  image?: string
  imageUrl?: string
  date?: string
  href?: string
  badge?: string
  organizer?: string
  tags?: string[]
  registration?: string
  eventDate?: string
  cost?: string
  buttonLabel?: string
}

export type AcademicCategory = "lomba" | "seminar" | "beasiswa" | "magang"

export type Department = {
  id: string
  name: string
  description: string
}

export type ProfileMember = {
  id: string
  name: string
  role: string
  image: string
}

export type ProfileDepartment = {
  id: "bph" | "operation" | "creative" | "academic" | "humanitarian"
  name: string
  description: string
  members: ProfileMember[]
}

export type GalleryItem = {
  id: string
  title: string
  imageUrl: string
}
