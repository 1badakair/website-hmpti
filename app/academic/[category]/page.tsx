import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { AcademicCategoryHero } from "@/components/sections/academic/category/AcademicCategoryHero"
import { AcademicCategoryPage } from "@/components/sections/academic/category/AcademicCategoryPage"
import {
  academicCategoryPages,
  getAcademicCategoryPage,
} from "@/data/academic-categories"

type AcademicCategoryRouteProps = {
  params: Promise<{
    category: string
  }>
}

export function generateStaticParams() {
  return academicCategoryPages.map((category) => ({
    category: category.slug,
  }))
}

export async function generateMetadata({
  params,
}: AcademicCategoryRouteProps): Promise<Metadata> {
  const { category: categorySlug } = await params
  const category = getAcademicCategoryPage(categorySlug)

  if (!category) {
    return {
      title: "Academic - HMPTI UKSW",
    }
  }

  return {
    title: `${category.title} - HMPTI UKSW`,
    description: category.subtitle,
  }
}

export default async function AcademicCategoryRoute({
  params,
}: AcademicCategoryRouteProps) {
  const { category: categorySlug } = await params
  const category = getAcademicCategoryPage(categorySlug)

  if (!category) notFound()

  return (
    <div className="min-h-screen overflow-x-clip bg-[#001b4b] text-white">
      <Navbar />
      <main id="main-content">
        <AcademicCategoryHero
          buttonText={category.buttonText}
          subtitle={category.subtitle}
          title={category.title}
        />
        <AcademicCategoryPage category={category} />
      </main>
      <Footer />
    </div>
  )
}
