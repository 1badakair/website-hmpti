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

export type GalleryItem = {
  id: string
  title: string
  imageUrl: string
}
