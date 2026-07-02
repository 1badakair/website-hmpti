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
      className="mx-auto flex min-h-[125px] max-w-[1168px] items-center justify-center rounded-[25px] border-2 border-white/25 bg-[linear-gradient(140deg,rgba(255,255,255,0.34),rgba(5,96,195,0.34),rgba(0,42,117,0.5))] px-4 py-8 shadow-[8px_12px_70px_rgba(0,0,0,0.24)]"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex w-full max-w-[698px] flex-col gap-5 sm:h-[53px] sm:flex-row sm:gap-5">
        <label className="sr-only" htmlFor="academic-search">
          Cari info akademik
        </label>
        <div className="flex min-h-[52px] flex-1 items-center rounded-[13px] border border-[#d5d5d5] bg-white/60 px-5">
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
