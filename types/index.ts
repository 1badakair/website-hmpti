export type Program = {
  id: string
  title: string
  description: string
  imageUrl?: string
}

export type AcademicPost = {
  id: string
  title: string
  category: "lomba" | "seminar" | "beasiswa"
  description: string
  imageUrl?: string
}

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
