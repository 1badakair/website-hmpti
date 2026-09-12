"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Profile", href: "/profile" },
  { label: "Program", href: "/program" },
  { label: "Academic", href: "/academic" },
  { label: "Aspiration", href: "/aspiration" },
]

// Hysteresis: the header only floats past 56px and only merges back below
// 24px, so a scroll that hovers on the threshold can't flicker the state.
const SCROLL_ENTER = 56
const SCROLL_EXIT = 24

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  useEffect(() => {
    let frame = 0

    const onScroll = () => {
      // Coalesce scroll events into one read per frame so the transition
      // never competes with layout reads mid-scroll.
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        setScrolled((current) => {
          const y = window.scrollY
          if (!current && y > SCROLL_ENTER) return true
          if (current && y < SCROLL_EXIT) return false
          return current
        })
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  // Escape closes the mobile menu and returns focus to the page.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 px-3 pt-6 sm:px-5 lg:px-6">
      <nav
        aria-label="Main"
        className={`relative mx-auto flex h-[77px] max-w-[1216px] items-center justify-between rounded-[20px] transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "px-5 sm:px-10" : "px-3 sm:px-6"
        }`}
      >
        {/* Floating chrome lives on its own layer so the header can fade
            between merged and floating instead of swapping classes in one
            frame — the width and height never change, so nothing reflows. */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 rounded-[20px] border border-white/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.3),rgba(0,86,150,0.8))] shadow-[0_8px_30px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.15)] backdrop-blur-[8px] transition-opacity duration-500 ease-out ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Logo — sits at the far left */}
        <Link
          className="relative flex items-center gap-3 rounded-lg"
          href="/"
          onClick={() => setOpen(false)}
        >
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
        <div className="relative hidden items-center gap-6 font-[family-name:var(--font-inter)] text-sm lg:gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`group relative py-1 transition-colors duration-200 hover:text-[#ffbd4a] ${
                isActive(item.href) ? "font-semibold text-[#ffbd4a]" : "text-white"
              }`}
              href={item.href}
              key={item.label}
            >
              {item.label}
              {/* Underline grows from the centre on hover and stays put on
                  the current page — a second, non-colour cue for "you are
                  here" that survives colour-blind viewing. */}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -bottom-0.5 h-px origin-center bg-[#ffbd4a] transition-transform duration-300 ease-out ${
                  isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative grid h-10 w-10 place-items-center rounded-lg text-white transition-colors duration-200 hover:bg-white/10 active:bg-white/20 md:hidden"
        >
          {/* Three bars that morph into a cross, so the control reads as one
              object changing state rather than two icons swapping. */}
          <span aria-hidden="true" className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu — grid-rows trick animates to the menu's natural height
          without hardcoding it, so opening and closing are symmetrical. */}
      <div
        id="mobile-menu"
        className={`mx-auto grid max-w-[1320px] transition-[grid-template-rows,opacity,margin] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "mt-2 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile"
            className="flex flex-col rounded-2xl border border-white/20 bg-[#002a75]/95 p-2 font-[family-name:var(--font-inter)] text-sm backdrop-blur-md"
          >
            {navItems.map((item) => (
              <Link
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-white/10 hover:text-[#ffbd4a] active:bg-white/20 ${
                  isActive(item.href) ? "bg-white/10 font-semibold text-[#ffbd4a]" : "text-white"
                }`}
                href={item.href}
                key={item.label}
                onClick={() => setOpen(false)}
                tabIndex={open ? undefined : -1}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
