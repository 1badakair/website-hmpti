import { Search, X } from "lucide-react"

type AcademicFilterProps = {
  query: string
  resultCount: number
  onQueryChange: (query: string) => void
}

export function AcademicFilter({
  query,
  resultCount,
  onQueryChange,
}: AcademicFilterProps) {
  const isFiltered = query.trim() !== ""

  return (
    <form
      className="mx-auto flex min-h-[104px] max-w-[1168px] items-center justify-center rounded-[25px] border-2 border-white/25 bg-[linear-gradient(140deg,rgba(255,255,255,0.34),rgba(5,96,195,0.34),rgba(0,42,117,0.5))] px-4 py-6 shadow-[8px_12px_70px_rgba(0,0,0,0.24)] sm:min-h-[125px] sm:py-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="w-full max-w-[698px]">
        <label className="sr-only" htmlFor="academic-search">
          Search academic info
        </label>
        <div className="flex min-h-[52px] items-center gap-3 rounded-[13px] border border-[#d5d5d5] bg-white/60 px-5 transition-shadow duration-200 focus-within:shadow-[0_0_0_2px_#ffbd4a]">
          <Search aria-hidden="true" className="h-5 w-5 shrink-0 text-[#001b4b]/70" />
          <input
            id="academic-search"
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search activity"
            className="min-w-0 flex-1 bg-transparent font-[family-name:var(--font-inter)] text-sm font-medium text-[#001b4b] outline-none placeholder:text-[#001b4b]/70 sm:text-base"
          />
          {isFiltered && (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[#001b4b] transition-colors duration-200 hover:bg-[#001b4b]/10"
            >
              <X aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </button>
          )}
        </div>
        {/* Results update as you type, so the count is announced rather than
            left for the eye to notice. */}
        <p
          aria-live="polite"
          className="mt-3 min-h-5 text-center font-[family-name:var(--font-inter)] text-sm text-white/70"
        >
          {isFiltered
            ? `${resultCount} ${resultCount === 1 ? "result" : "results"} found`
            : ""}
        </p>
      </div>
    </form>
  )
}
