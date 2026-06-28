import Image from "next/image"
import { footerLinks } from "@/data/footer"

export function Footer() {
  return (
    <footer className="bg-[#001a48] px-5 py-16 font-[var(--font-inter)] sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[1.1fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#002a75]/80 ring-1 ring-white/25">
              <Image
                src="/figma/vector.svg"
                alt="HMPTI"
                width={26}
                height={26}
                className="h-[26px] w-[26px]"
              />
            </span>
            <span className="font-[var(--font-goldman)] text-xl text-white">HMPTI26</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            Himpunan Mahasiswa Program Studi Teknik Informatika UKSW.
          </p>
          <div className="mt-6 flex gap-3 text-xs text-white/70">
            <span className="rounded-full bg-white/10 px-3 py-2">IG</span>
            <span className="rounded-full bg-white/10 px-3 py-2">YT</span>
            <span className="rounded-full bg-white/10 px-3 py-2">IN</span>
          </div>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-[#f9a825]">
              {title}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/55">
              {links.map((link) => (
                <li key={link}>
                  <a className="transition hover:text-white" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-[#f9a825]">
            Kontak
          </h4>
          <div className="mt-5 space-y-5 text-sm">
            <p>
              <span className="block text-xs text-white/40">Email</span>
              <span className="text-white/70">hmpti@university.ac.id</span>
            </p>
            <p>
              <span className="block text-xs text-white/40">WhatsApp</span>
              <span className="text-white/70">+62 812 3456 7890</span>
            </p>
            <p>
              <span className="block text-xs text-white/40">Sekretariat</span>
              <span className="text-white/70">Gedung Fakultas Teknik, Lantai 2 Ruang HMPTI</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1120px] flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2025 HMPTI - Himpunan Mahasiswa Program Studi Teknik Informatika. Hak Cipta Dilindungi.</p>
        <p>Dibuat dengan hati oleh Tim Media Kreatif HMPTI</p>
      </div>
    </footer>
  )
}
