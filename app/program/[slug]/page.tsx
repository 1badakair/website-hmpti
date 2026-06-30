import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { ProgramDetailContent } from "@/components/sections/program/ProgramDetailContent"
import { ProgramDetailHero } from "@/components/sections/program/ProgramDetailHero"
import { RelatedPrograms } from "@/components/sections/program/RelatedPrograms"
import {
  getProgramBySlug,
  getRelatedPrograms,
  programPageItems,
} from "@/data/programs"

type ProgramDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return programPageItems.map((program) => ({
    slug: program.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProgramDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const program = getProgramBySlug(slug)

  if (!program) {
    return {
      title: "Program Tidak Ditemukan - HMPTI UKSW",
    }
  }

  return {
    title: `${program.title} - HMPTI UKSW`,
    description: program.description,
  }
}

export default async function ProgramDetailPage({
  params,
}: ProgramDetailPageProps) {
  const { slug } = await params
  const program = getProgramBySlug(slug)

  if (!program) {
    notFound()
  }

  const relatedPrograms = getRelatedPrograms(program.slug)

  return (
    <div className="min-h-screen overflow-x-clip bg-[#001b4b] text-white">
      <Navbar />
      <main>
        <ProgramDetailHero program={program} />
        <ProgramDetailContent program={program} />
        <RelatedPrograms programs={relatedPrograms} />
      </main>
      <Footer />
    </div>
  )
}
