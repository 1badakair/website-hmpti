type AcademicCategoryFilterProps = {
  activeScope: string
  onQueryChange: (query: string) => void
  onScopeChange: (scope: string) => void
  query: string
}

const scopes = ["Internal", "Nasional", "Internasional"]

export function AcademicCategoryFilter({
  activeScope,
  onQueryChange,
  onScopeChange,
  query,
}: AcademicCategoryFilterProps) {
  return (
    <div className="mx-auto max-w-[1168px] rounded-[25px] border-2 border-white/25 bg-[linear-gradient(140deg,rgba(255,255,255,0.28),rgba(5,96,195,0.28),rgba(0,42,117,0.5))] px-5 py-8 shadow-[8px_12px_70px_rgba(0,0,0,0.2)]">
      <form
        className="mx-auto flex w-full max-w-[698px] flex-col gap-5 sm:h-[53px] sm:flex-row"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="sr-only" htmlFor="academic-category-search">
          Cari info akademik
        </label>
        <div className="flex min-h-[52px] flex-1 items-center gap-3 rounded-[10px] border border-[#d5d5d5] bg-white/70 px-5">
          <svg
            aria-hidden="true"
            className="h-5 w-5 shrink-0 text-[#001b4b]/70"
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
            id="academic-category-search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Cari tahu kegiatan"
            className="min-w-0 flex-1 bg-transparent font-[family-name:var(--font-inter)] text-sm font-medium text-[#001b4b] outline-none placeholder:text-[#001b4b]/90 sm:text-base"
          />
        </div>
        <button
          type="submit"
          className="min-h-[53px] rounded-[13px] border-2 border-white/20 bg-[#0560c3] px-8 font-[family-name:var(--font-inter)] text-base font-semibold text-white transition hover:bg-[#0a70da] sm:w-[107px] sm:px-0"
        >
          Cari
        </button>
      </form>

      <div className="mx-auto mt-8 grid max-w-[980px] gap-5 md:grid-cols-3">
        {scopes.map((scope) => (
          <button
            key={scope}
            type="button"
            onClick={() => onScopeChange(scope)}
            className={`h-[50px] rounded-[9px] border font-[family-name:var(--font-inter)] text-sm font-semibold transition ${
              activeScope === scope
                ? "border-[#f9a825] bg-[#f9a825] text-white"
                : "border-white/35 bg-[#001b4b] text-white hover:border-[#ffbd4a]"
            }`}
          >
            {scope}
          </button>
        ))}
      </div>
    </div>
  )
}
