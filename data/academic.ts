export const academicPosts = [
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
]

export const academicPagePosts = [
  {
    id: "info-lomba",
    title: "Lomba",
    category: "lomba",
    description:
      "Kumpulan informasi kompetisi teknologi, desain, dan inovasi untuk mahasiswa Informatika.",
    image: "/figma/academic-lomba.png",
    badge: "Achievement",
    href: "/academic/lomba",
  },
  {
    id: "jadwal-seminar",
    title: "Seminar",
    category: "seminar",
    description:
      "Agenda seminar, kuliah umum, dan diskusi industri yang relevan untuk pengembangan skill.",
    image: "/figma/academic-seminar.png",
    badge: "Achievement",
    href: "/academic/seminar",
  },
  {
    id: "info-beasiswa",
    title: "Beasiswa",
    category: "beasiswa",
    description:
      "Peluang pendanaan studi, bantuan pendidikan, dan program apresiasi prestasi mahasiswa.",
    image: "/figma/academic-beasiswa.png",
    badge: "Achievement",
    href: "/academic/beasiswa",
  },
  {
    id: "magang-bersertifikat",
    title: "Magang & Sertifikasi",
    category: "magang",
    description:
      "Kurasi peluang magang bersertifikat dan program karier untuk calon profesional IT.",
    image: "/figma/academic-magang.png",
    badge: "Achievement",
    href: "/academic/magang-sertifikasi",
  },
] satisfies import("@/types").AcademicPost[]

export const academicCategories = [
  { id: "lomba", label: "Lomba" },
  { id: "seminar", label: "Seminar" },
  { id: "beasiswa", label: "Beasiswa" },
  { id: "magang", label: "Magang" },
] satisfies Array<{ id: import("@/types").AcademicCategory; label: string }>

export const academicStats = [
  { id: "scholarships", value: "3", label: "Scholarships" },
  { id: "competitions", value: "0", label: "Competitions" },
  { id: "seminars", value: "4", label: "Seminars" },
]

export const recentAcademicActivities = [
  {
    id: "techcomfest-ctf-2026",
    title: "TECHCOMFEST 2026 - CTF",
    category: "lomba",
    description:
      "Kompetisi Capture The Flag tingkat nasional untuk mengasah kemampuan cyber security.",
    image: "/figma/academic-recent.png",
    date: "Pendaftaran Dibuka",
    organizer: "UKM Polytechnic Computer Club Polines",
    tags: ["Nasional", "Cyber Security"],
    registration: "15 Oktober - 13 Desember",
    eventDate: "27 Desember",
    cost: "Rp90.000",
    buttonLabel: "Info Lomba",
    href: "#",
  },
  {
    id: "techcomfest-ctf-2026-2",
    title: "TECHCOMFEST 2026 - CTF",
    category: "lomba",
    description:
      "Kompetisi Capture The Flag tingkat nasional untuk mengasah kemampuan cyber security.",
    image: "/figma/academic-recent.png",
    date: "Pendaftaran Dibuka",
    organizer: "UKM Polytechnic Computer Club Polines",
    tags: ["Nasional", "Cyber Security"],
    registration: "15 Oktober - 13 Desember",
    eventDate: "27 Desember",
    cost: "Rp90.000",
    buttonLabel: "Info Lomba",
    href: "#",
  },
] satisfies import("@/types").AcademicPost[]
