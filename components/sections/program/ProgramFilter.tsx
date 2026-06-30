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
    <div className="space-y-[26px]">
      <form
        className="mx-auto flex min-h-[134px] max-w-[1168px] items-center justify-center rounded-[25px] border-2 border-white/30 px-4 shadow-[8px_12px_80px_rgba(0,0,0,0.25)] sm:px-8"
        style={{
          backgroundImage:
            "linear-gradient(162deg, rgba(255,255,255,0.4) 0%, rgba(133,190,255,0.24) 22%, rgba(6,94,194,0.4) 57%, rgba(3,45,92,0.4) 109%)",
        }}
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="grid w-full max-w-[698px] gap-3 sm:grid-cols-[1fr_107px]">
          <label className="sr-only" htmlFor="program-search">
            Cari program
          </label>
          <div className="flex min-h-[52px] items-center gap-3 rounded-[10px] bg-white/55 px-5">
            <svg
              aria-hidden="true"
              className="h-[26px] w-[26px] shrink-0 text-[#001b4b]"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <input
              id="program-search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Cari tahu kegiatan"
              className="min-w-0 flex-1 bg-transparent font-[family-name:var(--font-inter)] text-sm text-[#001b4b] outline-none placeholder:text-[#001b4b] sm:text-lg"
            />
          </div>
          <button
            type="submit"
            className="min-h-[53px] rounded-[10px] border-2 border-white/30 bg-[#0560c3] px-8 font-[family-name:var(--font-inter)] text-lg font-medium text-white transition hover:bg-[#0a70da]"
          >
            Cari
          </button>
        </div>
      </form>

      <div className="mx-auto grid max-w-[991px] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {allCategories.map((category) => {
          const active = activeCategory === category

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`flex h-[53px] items-center justify-center rounded-[10px] border-2 border-white/30 px-5 font-[family-name:var(--font-inter)] text-base font-medium text-white transition sm:text-lg lg:px-4 ${
                active ? "bg-[#f9a825]" : "bg-[#001b4b] hover:bg-[#07336d]"
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
