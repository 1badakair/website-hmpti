import type { ProgramCategory } from "@/types"

type ProgramFilterProps = {
  activeCategory: ProgramCategory | "Semua"
  categories: ProgramCategory[]
  query: string
  onCategoryChange: (category: ProgramCategory | "Semua") => void
  onQueryChange: (query: string) => void
}

export function ProgramFilter({
  activeCategory,
  categories,
  query,
  onCategoryChange,
  onQueryChange,
}: ProgramFilterProps) {
  const allCategories: Array<ProgramCategory | "Semua"> = ["Semua", ...categories]

  return (
    <div className="space-y-8">
      <form
        className="mx-auto flex max-w-[860px] flex-col gap-3 rounded-[28px] border border-white/15 bg-[#0b3f83]/70 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur sm:flex-row"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="sr-only" htmlFor="program-search">
          Cari program
        </label>
        <input
          id="program-search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Cari tahu kegiatan"
          className="min-h-14 flex-1 rounded-2xl border border-white/10 bg-white px-5 font-[family-name:var(--font-inter)] text-sm text-[#062a5c] outline-none placeholder:text-[#6f7d95] focus:border-[#ffbd4a]"
        />
        <button
          type="submit"
          className="min-h-14 rounded-2xl bg-[#ffbd4a] px-8 font-[family-name:var(--font-inter)] text-sm font-bold text-[#062a5c] transition hover:bg-[#ffd27a]"
        >
          Cari
        </button>
      </form>

      <div className="flex flex-wrap justify-center gap-3">
        {allCategories.map((category) => {
          const active = activeCategory === category

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`rounded-full border px-5 py-3 font-[family-name:var(--font-inter)] text-sm font-semibold transition ${
                active
                  ? "border-[#ffbd4a] bg-[#ffbd4a] text-[#062a5c] shadow-[0_10px_28px_rgba(255,189,74,0.24)]"
                  : "border-white/20 bg-white/[0.06] text-white/75 hover:border-[#ffbd4a]/70 hover:text-[#ffbd4a]"
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>
    </div>
  )
}
