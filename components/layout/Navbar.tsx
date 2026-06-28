import Image from "next/image"

const navItems = ["Home", "About Us", "Profile", "Program", "Academic"]

export function Navbar() {
  return (
    <header className="relative z-20 px-5 pt-6 sm:px-8 lg:px-16">
      <nav className="mx-auto flex h-[77px] max-w-[1216px] items-center justify-between rounded-[20px] border border-white/10 bg-gradient-to-b from-white/20 to-[#005696]/50 px-5 shadow-[0_8px_30px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-10">
        <a className="flex items-center gap-3" href="#">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#002a75]/80 ring-1 ring-white/25">
            <Image
              src="/figma/vector.svg"
              alt="HMPTI"
              width={24}
              height={24}
              className="h-6 w-6"
              priority
            />
          </span>
          <span className="font-[var(--font-goldman)] text-sm tracking-wide text-white">
            HMPTI26
          </span>
        </a>
        <div className="hidden items-center gap-10 font-[var(--font-work-sans)] text-sm md:flex">
          {navItems.map((item) => (
            <a className="text-white transition hover:text-[#ffbd4a]" href="#" key={item}>
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
