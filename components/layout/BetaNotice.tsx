export default function BetaNotice() {
  return (
    <>
      <div className="fixed top-0 left-0 z-[60] w-full bg-amber-600 px-4 py-2">
        <p className="text-center text-xs sm:text-sm text-white leading-snug">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block w-4 h-4 mr-1.5 -mt-0.5 shrink-0 text-amber-100"
          >
            <path
              fillRule="evenodd"
              d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <strong>Announcement:</strong> HMPTI Website is currently in development
          (Beta). Some features may not work perfectly yet.
        </p>
      </div>
      {/* Spacer to push content below the fixed banner */}
      <div className="h-[36px] sm:h-[36px]" />
    </>
  );
}
