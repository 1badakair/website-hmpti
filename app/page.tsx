import Image from "next/image";

const navItems = ["Home", "About Us", "Profile", "Program", "Academic"];

const activityCards = [
  {
    image: "/figma/activity-1.png",
    category: "Lomba",
    status: "Deadline Dekat",
    statusClass: "border-[#f9a825]/25 bg-[#f9a825]/15 text-[#f9a825]",
    title: "Hackathon Nasional InformaticFest 2025",
    description:
      "Kompetisi coding tahunan terbesar dengan total hadiah 50 juta rupiah. Daftarkan tim kamu sekarang!",
    date: "28 Juni 2025",
    readTime: "3 menit",
  },
  {
    image: "/figma/activity-2.png",
    category: "Seminar",
    status: "Segera",
    statusClass: "border-[#0560c3]/25 bg-[#0560c3]/15 text-[#0560c3]",
    title: "Web3 & AI Summit: Masa Depan Teknologi Indonesia",
    description:
      "Hadirkan pakar industri terkemuka membahas tren AI, blockchain, dan transformasi digital.",
    date: "5 Juli 2025",
    readTime: "4 menit",
  },
  {
    image: "/figma/activity-3.png",
    category: "Prestasi",
    status: "Baru",
    statusClass: "border-[#00a88f]/25 bg-[#00a88f]/15 text-[#00a88f]",
    title: "Beasiswa Unggulan HMPTI 2025 Batch II",
    description:
      "Kesempatan dukungan studi untuk mahasiswa aktif dengan rekam prestasi akademik dan organisasi.",
    date: "12 Juli 2025",
    readTime: "5 menit",
  },
];

const exploreCards = [
  {
    icon: "/figma/vector-target.svg",
    title: "Visi & Misi",
  },
  {
    icon: "/figma/vector-folder.svg",
    title: "Division",
  },
  {
    icon: "/figma/vector.svg",
    title: "Mascot",
  },
];

const faqItems = [
  "Apa itu HMPTI?",
  "Bagaimana cara bergabung dengan HMPTI?",
  "Apa manfaat bergabung di HMPTI?",
  "Apa saja kegiatan yang dilakukan HMPTI?",
  "Apakah HMPTI hanya untuk mahasiswa Informatika?",
];

const footerLinks = {
  Navigasi: ["Beranda", "Tentang Kami", "Pengurus", "Program & Kegiatan", "Academic Hub"],
  "Academic Hub": [
    "Aspirasi Mahasiswa",
    "Info Lomba",
    "Info Beasiswa",
    "Jadwal Seminar",
    "Riset & Publikasi",
  ],
};

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      className="inline-flex h-8 items-center justify-center rounded-md bg-gradient-to-r from-[#ffbd4a] to-[#ff8d24] px-5 font-[var(--font-inter)] text-xs font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.18)] transition hover:brightness-110 sm:h-9 sm:text-sm"
      href="#explore"
    >
      {children}
    </a>
  );
}

function ActivityCard({ card }: { card: (typeof activityCards)[number] }) {
  return (
    <article className="w-full overflow-hidden rounded-2xl border border-[#002a75]/10 bg-white shadow-[0_4px_24px_rgba(0,42,117,0.12)]">
      <div className="relative h-44">
        <Image src={card.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 305px, 90vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002a75]/55 to-transparent" />
        <div className="absolute left-3 top-3 rounded-full bg-[#002a75] px-3 py-1 font-[var(--font-inter)] text-xs font-bold text-white">
          {card.category}
        </div>
        <div
          className={`absolute right-3 top-3 rounded-full border px-3 py-1 font-[var(--font-inter)] text-xs font-bold ${card.statusClass}`}
        >
          {card.status}
        </div>
      </div>
      <div className="flex min-h-44 flex-col p-5 font-[var(--font-inter)]">
        <h3 className="text-base font-bold leading-snug text-[#002a75]">{card.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#718096]">{card.description}</p>
        <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-[#a0aec0]">
          <span>{card.date}</span>
          <span>{card.readTime}</span>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#032d5c] text-white">
      <section className="relative isolate min-h-[830px] px-5 pt-6 sm:px-8 lg:px-16">
        <Image
          src="/figma/blue-pattern.png"
          alt=""
          width={736}
          height={1386}
          priority
          className="pointer-events-none absolute right-[-180px] top-0 -z-10 h-[760px] w-[520px] rotate-180 object-cover opacity-45 sm:right-[-90px]"
        />
        <div className="absolute left-[-180px] top-[520px] -z-10 h-96 w-96 rounded-full bg-[#005696]/25 blur-3xl" />
        <nav className="mx-auto flex h-[77px] max-w-[1216px] items-center justify-between rounded-[20px] border border-white/10 bg-gradient-to-b from-white/20 to-[#005696]/50 px-5 shadow-[0_8px_30px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-10">
          <a className="flex items-center gap-3" href="#">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-sm font-black text-[#002a75]">
              H
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

        <div className="mx-auto grid max-w-[1216px] gap-10 pb-16 pt-20 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:pt-24">
          <div className="max-w-2xl">
            <h1 className="font-[var(--font-goldman)] text-[clamp(3rem,8vw,5.8rem)] font-bold leading-[0.9] text-white drop-shadow-[0_5px_0_#002260]">
              <span className="block text-[#ffbd4a] [text-shadow:0_4px_0_#ffffff,0_9px_0_#002260]">
                One Vision
              </span>
              <span className="block [text-shadow:0_4px_0_#002260]">Infinite Solutions</span>
            </h1>
            <p className="mt-8 max-w-xl font-[var(--font-work-sans)] text-sm leading-relaxed text-white/90 sm:text-base">
              HMPTI UKSW is the official Informatics Engineering student organization of UKSW,
              empowering students in technology and innovation.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <PrimaryButton>Learn More</PrimaryButton>
              <PrimaryButton>Contact Us</PrimaryButton>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1110px]">
          <div className="relative overflow-hidden rounded-[18px] border border-[#ffbd4a]/45 bg-[#001a48] p-2 shadow-[0_16px_50px_rgba(0,0,0,0.28)]">
            <div className="relative aspect-[1070/510] overflow-hidden rounded-xl">
              <Image src="/figma/kegiatan-1.png" alt="Pengurus HMPTI UKSW" fill className="object-cover" sizes="(min-width: 1200px) 1110px, 92vw" />
            </div>
          </div>
          <div className="mx-auto mt-8 flex max-w-4xl items-center gap-6">
            <div className="h-px flex-1 bg-[#ffbd4a]/35" />
            <p className="text-center font-[var(--font-inter)] text-sm font-bold">
              HMPTI UKSW
              <span className="block text-[10px] font-normal text-white/55">Periode 2025</span>
            </p>
            <div className="h-px flex-1 bg-[#ffbd4a]/35" />
          </div>
        </div>
      </section>

      <section id="explore" className="relative px-5 py-24 sm:px-8 lg:px-16">
        <Image src="/figma/ellipse-13.svg" alt="" width={878} height={824} className="pointer-events-none absolute left-[-520px] top-[-80px] opacity-70" />
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <h2 className="font-[var(--font-goldman)] text-5xl leading-none sm:text-7xl">
              Explore <span className="text-[#ffbd4a]">HMPTI</span>
            </h2>
            <p className="mt-7 max-w-xl font-[var(--font-work-sans)] text-sm leading-relaxed text-white/80 sm:text-base">
              Let&apos;s dive deeper into HMPTI. Discover our dynamic activities, tech
              innovations, and academic programs designed to empower your IT journey.
            </p>
            <PrimaryButton>About HMPTI</PrimaryButton>
          </div>
          <div className="relative mx-auto w-full max-w-[310px]">
            <div className="overflow-hidden rounded-[28px] border border-[#ffbd4a] bg-[#001a48] p-2 shadow-[0_20px_55px_rgba(0,0,0,0.35)]">
              <Image src="/figma/ketua.png" alt="Ketua HMPTI" width={264} height={402} className="h-[420px] w-full rounded-[20px] object-cover" />
            </div>
            <div className="absolute bottom-5 left-1/2 w-[78%] -translate-x-1/2 rounded-full bg-black/45 px-4 py-2 text-center font-[var(--font-inter)] text-xs backdrop-blur">
              HMPTI UKSW
              <span className="block text-white/70">Company Profile</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-[800px] gap-4 sm:grid-cols-3">
          {exploreCards.map((card) => (
            <a
              href="#"
              key={card.title}
              className="flex h-16 items-center justify-center gap-3 rounded-lg border border-white/35 bg-white/5 px-5 font-[var(--font-inter)] text-sm font-semibold text-white backdrop-blur transition hover:border-[#ffbd4a] hover:bg-[#ffbd4a]/10"
            >
              <Image src={card.icon} alt="" width={24} height={24} className="h-6 w-6" />
              {card.title}
            </a>
          ))}
        </div>
      </section>

      <section className="relative px-5 py-24 sm:px-8 lg:px-16">
        <Image src="/figma/star-22.svg" alt="" width={647} height={647} className="pointer-events-none absolute right-[-220px] top-[-30px] opacity-70" />
        <div className="mx-auto flex max-w-[1120px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[var(--font-goldman)] text-5xl leading-none sm:text-7xl">
              Activity <span className="text-[#ffbd4a]">Highlights</span>
            </h2>
            <p className="mt-4 max-w-2xl font-[var(--font-work-sans)] text-sm leading-relaxed text-white/80">
              Catch a glimpse of HMPTI&apos;s latest highlights and exciting moments. From tech
              innovations and academic events to our fun collaborations, discover how we stay
              connected and keep moving forward.
            </p>
          </div>
          <PrimaryButton>Read more</PrimaryButton>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1120px] gap-6 md:grid-cols-3">
          {activityCards.map((card) => (
            <ActivityCard card={card} key={card.title} />
          ))}
        </div>
      </section>

      <section className="relative px-5 py-24 sm:px-8 lg:px-16">
        <Image src="/figma/ellipse-14.svg" alt="" width={1079} height={824} className="pointer-events-none absolute left-1/2 top-0 -z-0 -translate-x-1/2 opacity-45" />
        <div className="relative mx-auto max-w-[1120px]">
          <h2 className="text-center font-[var(--font-goldman)] text-6xl leading-none">FAQ</h2>
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <h3 className="font-[var(--font-work-sans)] text-2xl font-bold leading-tight">
                Pertanyaan Yang Sering Diajukan
              </h3>
              <p className="mt-6 max-w-sm font-[var(--font-work-sans)] text-sm leading-relaxed text-white/70">
                Masih ada pertanyaan yang belum terjawab atau memiliki kritik/saran?
                Jangan ragu untuk menghubungi kami.
              </p>
              <div className="mt-7">
                <PrimaryButton>Read more</PrimaryButton>
              </div>
            </div>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <button
                  className="flex w-full items-center justify-between rounded-lg border border-white/40 bg-[#002a75]/25 px-5 py-3 text-left font-[var(--font-work-sans)] text-sm font-semibold text-white transition hover:border-[#ffbd4a]"
                  key={item}
                >
                  {item}
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-white/70 text-xs">+</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#001a48] px-5 py-16 font-[var(--font-inter)] sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[1.1fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-base font-black text-[#002a75]">
                H
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
              <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-[#f9a825]">{title}</h4>
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
            <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-[#f9a825]">Kontak</h4>
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
    </main>
  );
}
