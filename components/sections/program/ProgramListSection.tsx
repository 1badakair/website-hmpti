import { programPageItems } from "@/data/programs"
import { ProgramCard } from "./ProgramCard"
import { ProgramFilter } from "./ProgramFilter"

export function ProgramListSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <ProgramFilter />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {programPageItems.map((program) => (
            <ProgramCard
              description={program.description}
              key={program.id}
              title={program.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
