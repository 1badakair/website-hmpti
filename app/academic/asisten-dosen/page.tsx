import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"

export const metadata: Metadata = {
  title: "Info Asisten Dosen - HMPTI UKSW",
  description: "Informasi placeholder untuk program asisten dosen HMPTI UKSW.",
}

export default function AssistantLecturerPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#001b4b] text-white">
      <Navbar />
      <main className="px-5 py-28 sm:px-8 lg:px-16">
        <section className="mx-auto max-w-[920px] rounded-[32px] border-2 border-white/15 bg-white/[0.06] p-8 text-center shadow-[0_22px_60px_rgba(0,0,0,0.22)] sm:p-12">
          <p className="font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.24em] text-[#ffbd4a]">
            Academic Hub
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-goldman)] text-4xl leading-tight text-white sm:text-6xl">
            Info Asisten Dosen
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-inter)] text-base leading-8 text-white/70">
            Halaman detail asisten dosen sedang disiapkan. Informasi persyaratan,
            jadwal seleksi, dan alur pendaftaran akan ditambahkan pada tahap
            berikutnya.
          </p>
          <Link
            href="/academic"
            className="mt-8 inline-flex rounded-[12px] bg-[#ffbd4a] px-6 py-3 font-[family-name:var(--font-inter)] text-sm font-bold text-[#062a5c] transition hover:bg-[#ffd27a]"
          >
            Kembali ke Academic
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
