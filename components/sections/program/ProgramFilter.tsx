import type { ProgramCategory } from "@/types"
import { Search } from "lucide-react"

type ProgramFilterProps = {
  activeCategory: ProgramCategory | "All"
  categories: ProgramCategory[]
  query: string
  onCategoryChange: (category: ProgramCategory | "All") => void
  onQueryChange: (query: string) => void
}

export function ProgramFilter({
  activeCategory,
  categories,
  query,
  onCategoryChange,
  onQueryChange,
}: ProgramFilterProps) {
  const allCategories: Array<ProgramCategory | "All"> = ["All", ...categories]

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
            Search program
          </label>
          <div className="flex min-h-[52px] items-center gap-3 rounded-[10px] bg-white/55 px-5">
            <Search className="h-6 w-6 shrink-0 text-[#001b4b]" />
            <input
              id="program-search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search HMPTI program..."
              className="min-w-0 flex-1 bg-transparent font-[family-name:var(--font-inter)] text-sm text-[#001b4b] outline-none placeholder:text-[#001b4b] sm:text-lg"
            />
          </div>
          <button
            type="submit"
            className="min-h-[53px] rounded-[10px] border-2 border-white/30 bg-[#0560c3] px-8 font-[family-name:var(--font-inter)] text-lg font-medium text-white transition duration-300 hover:bg-[#0a70da] hover:scale-[1.02] active:scale-[0.98]"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mx-auto grid max-w-[991px] gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {allCategories.map((category) => {
          const active = activeCategory === category

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`flex h-[53px] items-center justify-center rounded-[10px] border-2 border-white/30 px-5 font-[family-name:var(--font-inter)] text-base font-medium text-white transition duration-300 sm:text-lg lg:px-4 ${
                active ? "bg-[#f9a825] scale-100 shadow-[0_10px_24px_rgba(249,168,37,0.24)]" : "bg-[#001b4b] hover:bg-[#07336d] hover:scale-[1.02] active:scale-[0.98]"
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
