import type { Program } from "@/types"

type ProgramDetailContentProps = {
  program: Program
}

export function ProgramDetailContent({ program }: ProgramDetailContentProps) {
  return (
    <section className="bg-[#001b4b] px-5 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <article className="rounded-[30px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_55px_rgba(0,0,0,0.18)] sm:p-8">
          <p className="font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.22em] text-[#ffbd4a]">
            Deskripsi Kegiatan
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-goldman)] text-3xl text-white">
            Tentang Program
          </h2>
          <p className="mt-5 font-[family-name:var(--font-inter)] text-base leading-8 text-white/70">
            {program.content}
          </p>
        </article>

        <aside className="rounded-[30px] border border-white/10 bg-[#07336d] p-6 shadow-[0_20px_55px_rgba(0,0,0,0.2)] sm:p-8">
          <p className="font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.22em] text-[#ffbd4a]">
            Informasi Program
          </p>
          <div className="mt-6 space-y-5 font-[family-name:var(--font-inter)]">
            <InfoRow label="Tanggal" value={program.date} />
            <InfoRow label="Pelaksanaan" value={program.mode} />
            <InfoRow label="Lokasi" value={program.location} />
            <InfoRow label="Peserta" value={program.audience} />
          </div>
        </aside>

        <article className="rounded-[30px] border border-white/10 bg-[#07336d] p-6 shadow-[0_20px_55px_rgba(0,0,0,0.2)] sm:p-8">
          <p className="font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.22em] text-[#ffbd4a]">
            Materi Program
          </p>
          <ul className="mt-6 space-y-4 font-[family-name:var(--font-inter)] text-white/72">
            {program.materials.map((material) => (
              <li key={material} className="flex gap-3 leading-7">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ffbd4a]" />
                <span>{material}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[30px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_55px_rgba(0,0,0,0.18)] sm:p-8">
          <p className="font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.22em] text-[#ffbd4a]">
            Manfaat Program
          </p>
          <ul className="mt-6 space-y-4 font-[family-name:var(--font-inter)] text-white/72">
            {program.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 leading-7">
                <span className="mt-1 h-6 w-6 shrink-0 rounded-full border-[6px] border-[#ffbd4a] bg-[#062a5c]" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
      <span className="block text-xs uppercase tracking-[0.18em] text-white/40">
        {label}
      </span>
      <span className="mt-1 block text-sm font-semibold text-white">{value}</span>
    </div>
  )
}
