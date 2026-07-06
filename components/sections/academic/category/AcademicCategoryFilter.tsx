import { Search } from "lucide-react"

type AcademicCategoryFilterProps = {
  activeScope: string
  onQueryChange: (query: string) => void
  onScopeChange: (scope: string) => void
  query: string
}

const scopes = ["Internal", "National", "International"]

export function AcademicCategoryFilter({
  activeScope,
  onQueryChange,
  onScopeChange,
  query,
}: AcademicCategoryFilterProps) {
  return (
    <div className="mx-auto max-w-[1168px] rounded-[25px] border-2 border-white/25 bg-[linear-gradient(140deg,rgba(255,255,255,0.28),rgba(5,96,195,0.28),rgba(0,42,117,0.5))] px-4 py-6 shadow-[8px_12px_70px_rgba(0,0,0,0.2)] sm:px-5 sm:py-8">
      <form
        className="mx-auto flex w-full max-w-[698px] flex-col gap-5 sm:h-[53px] sm:flex-row"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="sr-only" htmlFor="academic-category-search">
          Search academic info
        </label>
        <div className="flex min-h-[52px] flex-1 items-center gap-3 rounded-[10px] border border-[#d5d5d5] bg-white/70 px-5">
          <Search className="h-5 w-5 shrink-0 text-[#001b4b]/70" />
          <input
            id="academic-category-search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search activity"
            className="min-w-0 flex-1 bg-transparent font-[family-name:var(--font-inter)] text-sm font-medium text-[#001b4b] outline-none placeholder:text-[#001b4b]/90 sm:text-base"
          />
        </div>
        <button
          type="submit"
          className="min-h-[53px] rounded-[13px] border-2 border-white/20 bg-[#0560c3] px-8 font-[family-name:var(--font-inter)] text-base font-semibold text-white transition duration-300 hover:bg-[#0a70da] hover:scale-[1.02] active:scale-[0.98] sm:w-[107px] sm:px-0"
        >
          Search
        </button>
      </form>

      <div className="mx-auto mt-6 grid max-w-[980px] gap-3 sm:mt-8 sm:gap-5 md:grid-cols-3">
        {scopes.map((scope) => (
          <button
            key={scope}
            type="button"
            onClick={() => onScopeChange(scope)}
            className={`h-11 rounded-[9px] border font-[family-name:var(--font-inter)] text-sm font-semibold transition duration-300 sm:h-[50px] ${
              activeScope === scope
                ? "border-[#f9a825] bg-[#f9a825] text-white scale-100 shadow-[0_10px_24px_rgba(249,168,37,0.24)]"
                : "border-white/35 bg-[#001b4b] text-white hover:border-[#ffbd4a] hover:scale-[1.02] active:scale-[0.98]"
            }`}
          >
            {scope}
          </button>
        ))}
      </div>
    </div>
  )
}
