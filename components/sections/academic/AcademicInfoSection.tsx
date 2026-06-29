import { academicPagePosts } from "@/data/academic"
import { AcademicCard } from "./AcademicCard"
import { AcademicFilter } from "./AcademicFilter"

export function AcademicInfoSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <AcademicFilter />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {academicPagePosts.map((post) => (
            <AcademicCard
              category={post.category}
              description={post.description}
              key={post.id}
              title={post.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
