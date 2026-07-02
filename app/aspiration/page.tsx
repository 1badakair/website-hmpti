import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"

export const metadata: Metadata = {
  title: "Aspiration - HMPTI UKSW",
  description: "Halaman aspirasi HMPTI UKSW untuk menampung masukan mahasiswa.",
}

export default function AspirationPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#001b4b] text-white">
      <Navbar />
      <main className="relative -mt-[101px] overflow-hidden bg-[linear-gradient(180deg,#0344a2_0%,#0b5dc2_42%,#001b4b_100%)] px-5 pb-24 pt-44 sm:px-8 lg:px-16">
        <section className="mx-auto max-w-[920px] rounded-[32px] border-2 border-white/15 bg-white/[0.07] p-8 text-center shadow-[0_22px_60px_rgba(0,0,0,0.24)] backdrop-blur sm:p-12">
          <p className="font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.24em] text-[#ffbd4a]">
            HMPTI Voice
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-goldman)] text-4xl leading-tight text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.85)] [text-shadow:0_4px_0_rgba(0,27,75,0.55)] sm:text-6xl">
            Aspiration
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-inter)] text-base leading-8 text-white/72">
            Ruang awal untuk aspirasi, masukan, dan ide mahasiswa. Fitur form
            akan disiapkan setelah desain detail tersedia.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-[12px] bg-[#ffbd4a] px-6 py-3 font-[family-name:var(--font-inter)] text-sm font-bold text-[#062a5c] transition hover:bg-[#ffd27a]"
          >
            Kembali ke Home
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
