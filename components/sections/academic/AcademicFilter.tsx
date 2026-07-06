type AcademicFilterProps = {
  query: string
  onQueryChange: (query: string) => void
}

export function AcademicFilter({
  query,
  onQueryChange,
}: AcademicFilterProps) {
  return (
    <form
      className="mx-auto flex min-h-[104px] max-w-[1168px] items-center justify-center rounded-[25px] border-2 border-white/25 bg-[linear-gradient(140deg,rgba(255,255,255,0.34),rgba(5,96,195,0.34),rgba(0,42,117,0.5))] px-4 py-6 shadow-[8px_12px_70px_rgba(0,0,0,0.24)] sm:min-h-[125px] sm:py-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex w-full max-w-[698px] flex-col gap-3 sm:h-[53px] sm:flex-row sm:gap-5">
        <label className="sr-only" htmlFor="academic-search">
          Cari info akademik
        </label>
        <div className="flex min-h-[52px] flex-1 items-center gap-3 rounded-[13px] border border-[#d5d5d5] bg-white/60 px-5">
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
            id="academic-search"
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
      </div>
    </form>
  )
}
