export type Program = {
  id: string
  title: string
  description: string
}

export type AcademicPost = {
  id: string
  title: string
  category: "lomba" | "seminar" | "beasiswa"
  description: string
}

export type GalleryItem = {
  id: string
  title: string
  imageUrl: string
}
