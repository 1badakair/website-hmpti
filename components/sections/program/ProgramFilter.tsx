import type { ProgramCategory } from "@/types"
import { Search, X } from "lucide-react"

type ProgramFilterProps = {
  activeCategory: ProgramCategory | "All"
  categories: ProgramCategory[]
  query: string
  resultCount: number
  onCategoryChange: (category: ProgramCategory | "All") => void
  onQueryChange: (query: string) => void
}

export function ProgramFilter({
  activeCategory,
  categories,
  query,
  resultCount,
  onCategoryChange,
  onQueryChange,
}: ProgramFilterProps) {
  const isFiltered = query.trim() !== "" || activeCategory !== "All"

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
        <div className="w-full max-w-[698px]">
          <label className="sr-only" htmlFor="program-search">
            Search program
          </label>
          <div className="flex min-h-[52px] items-center gap-3 rounded-[10px] bg-white/55 px-5 transition-shadow duration-200 focus-within:shadow-[0_0_0_2px_#ffbd4a]">
            <Search aria-hidden="true" className="h-6 w-6 shrink-0 text-[#001b4b]" />
            <input
              id="program-search"
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search HMPTI program..."
              className="min-w-0 flex-1 bg-transparent font-[family-name:var(--font-inter)] text-sm text-[#001b4b] outline-none placeholder:text-[#001b4b]/70 sm:text-lg"
            />
            {isFiltered && (
              <button
                type="button"
                onClick={() => {
                  onQueryChange("")
                  onCategoryChange("All")
                }}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[#001b4b] transition-colors duration-200 hover:bg-[#001b4b]/10"
              >
                <X aria-hidden="true" className="h-4 w-4" />
                <span className="sr-only">Clear search and filters</span>
              </button>
            )}
          </div>
          {/* Results update as you type, so the count is announced rather
              than left for the eye to notice. */}
          <p
            aria-live="polite"
            className="mt-3 min-h-5 text-center font-[family-name:var(--font-inter)] text-sm text-white/70"
          >
            {isFiltered
              ? `${resultCount} ${resultCount === 1 ? "program" : "programs"} found`
              : ""}
          </p>
        </div>
      </form>

      <div className="mx-auto grid max-w-[991px] gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {allCategories.map((category) => {
          const active = activeCategory === category

          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
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
