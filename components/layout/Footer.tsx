import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/data/footer"

const linkHref: Record<string, string> = {
  Beranda: "/",
  "Tentang Kami": "/about",
}

const institutionLogos = [
  { src: "/figma/logo-uksw-v2.png", alt: "UKSW" },
  { src: "/figma/logo-k2i-v2.png", alt: "K2I" },
  { src: "/figma/logo-hmpti-v2.png", alt: "HMPTI" },
]

const socials = [
  { label: "Instagram", src: "/figma/social/instagram.svg" },
  { label: "LinkedIn", src: "/figma/social/linkedin.svg" },
  { label: "Twitter", src: "/figma/social/twitter.svg" },
  { label: "YouTube", src: "/figma/social/youtube.svg" },
]

const contacts = [
  { icon: "/figma/social/email.svg", label: "Email", value: "hmpti@university.ac.id" },
  { icon: "/figma/social/whatsapp.svg", label: "WhatsApp", value: "+62 812 3456 7890" },
  {
    icon: "/figma/social/location.svg",
    label: "Sekretariat",
    value: "Gedung Fakultas Teknik, Lantai 2 Ruang HMPTI",
  },
]

export function Footer() {
  return (
    <footer id="kontak" className="bg-[#001a48] px-5 py-16 font-[family-name:var(--font-inter)] sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[1.1fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            {institutionLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
            ))}
          </div>
          <Image
            src="/figma/logo-hmpti-text.png"
            alt="HMPTI26"
            width={420}
            height={77}
            className="mt-5 h-8 w-auto object-contain"
          />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
            Himpunan Mahasiswa Program Studi Teknik Informatika UKSW.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="grid h-9 w-9 place-items-center rounded-[14px] border border-white/10 bg-white/[0.08] transition hover:bg-white/20"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={social.src} alt={social.label} width={20} height={20} className="h-5 w-5" />
              </a>
            ))}
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
                  <Link className="transition hover:text-white" href={linkHref[link] ?? "#"}>
                    {link}
                  </Link>
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
            {contacts.map((c) => (
              <div key={c.label} className="flex gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.06]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.icon} alt="" width={16} height={16} className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-xs text-white/40">{c.label}</span>
                  <span className="text-white/70">{c.value}</span>
                </div>
              </div>
            ))}
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
