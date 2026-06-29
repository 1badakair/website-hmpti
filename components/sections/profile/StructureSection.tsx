import { organizationStructure } from "@/data/profile"

export function StructureSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-white">Struktur Organisasi</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {organizationStructure.map((member) => (
            <div className="rounded-xl border border-white/15 bg-white/5 p-5" key={member.id}>
              <p className="font-semibold text-white">{member.name}</p>
              <p className="mt-1 text-sm text-white/60">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
