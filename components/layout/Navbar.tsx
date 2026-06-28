import Image from "next/image"
import Link from "next/link"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Profile", href: "#" },
  { label: "Program", href: "#" },
  { label: "Academic", href: "#" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-5 pt-6 sm:px-8 lg:px-16">
      <nav className="mx-auto flex h-[77px] max-w-[1216px] items-center justify-between rounded-[20px] border border-white/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.3),rgba(0,86,150,0.8))] px-5 shadow-[0_8px_30px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.15)] backdrop-blur-[8px] sm:px-10">
        <Link className="flex items-center gap-3" href="/">
          <Image
            src="/figma/logo-hmpti-v2.png"
            alt="HMPTI"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <Image
            src="/figma/logo-hmpti-text.png"
            alt="HMPTI26"
            width={420}
            height={77}
            className="h-5 w-auto object-contain"
            priority
          />
        </Link>
        <div className="hidden items-center gap-10 font-[family-name:var(--font-inter)] text-sm md:flex">
          {navItems.map((item) => (
            <Link
              className="text-white transition hover:text-[#ffbd4a]"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
