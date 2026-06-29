"use client"

import { useEffect, useState } from "react"
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
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 40
      setScrolled(isScrolled)
      // Header merges back into the hero at the top → close the mobile menu
      if (!isScrolled) setOpen(false)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 px-3 pt-6 sm:px-5 lg:px-6">
      <nav
        className={`mx-auto flex h-[77px] items-center justify-between rounded-[20px] transition-all duration-500 ease-out ${
          scrolled
            ? "max-w-[1216px] border border-white/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.3),rgba(0,86,150,0.8))] px-5 shadow-[0_8px_30px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.15)] backdrop-blur-[8px] sm:px-10"
            : "max-w-[1320px] border border-transparent bg-transparent px-3 shadow-none sm:px-6"
        }`}
      >
        {/* Logo — sits at the far left */}
        <Link className="flex items-center gap-3" href="/" onClick={() => setOpen(false)}>
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

        {/* Desktop nav — sits at the far right */}
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

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-white transition hover:bg-white/10 md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-[1320px] overflow-hidden rounded-2xl border border-white/20 bg-[#002a75]/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col p-2 font-[family-name:var(--font-inter)] text-sm">
            {navItems.map((item) => (
              <Link
                className="rounded-xl px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#ffbd4a]"
                href={item.href}
                key={item.label}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
