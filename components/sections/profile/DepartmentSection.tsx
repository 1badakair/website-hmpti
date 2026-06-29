import { departments } from "@/data/profile"

export function DepartmentSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-white">Departemen</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {departments.map((department) => (
            <div className="rounded-xl border border-white/15 bg-white/5 p-5" key={department.id}>
              <h3 className="font-semibold text-white">{department.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{department.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
