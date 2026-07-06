export const academicPosts = [
  {
    image: "/figma/activity-1.png",
    category: "Competition",
    status: "Deadline Approaching",
    statusClass: "border-[#f9a825]/25 bg-[#f9a825]/15 text-[#f9a825]",
    title: "National Hackathon InformaticFest 2025",
    description:
      "The biggest annual coding competition with a total prize of 50 million rupiah. Register your team now!",
    date: "28 June 2025",
    readTime: "3 minutes",
  },
  {
    image: "/figma/activity-2.png",
    category: "Seminar",
    status: "Soon",
    statusClass: "border-[#0560c3]/25 bg-[#0560c3]/15 text-[#0560c3]",
    title: "Web3 & AI Summit: The Future of Indonesia's Technology",
    description:
      "Featuring top industry experts discussing AI trends, blockchain, and digital transformation.",
    date: "5 July 2025",
    readTime: "4 minutes",
  },
  {
    image: "/figma/activity-3.png",
    category: "Achievement",
    status: "New",
    statusClass: "border-[#00a88f]/25 bg-[#00a88f]/15 text-[#00a88f]",
    title: "HMPTI Excellence Scholarship 2025 Batch II",
    description:
      "Study support opportunities for active students with a track record of academic and organizational achievements.",
    date: "12 July 2025",
    readTime: "5 minutes",
  },
]

export const academicPagePosts = [
  {
    id: "info-lomba",
    title: "Competition",
    category: "lomba",
    description:
      "A collection of information on technology, design, and innovation competitions for Informatics students.",
    image: "/figma/academic-lomba.png",
    badge: "Achievement",
    href: "/academic/lomba",
  },
  {
    id: "jadwal-seminar",
    title: "Seminar",
    category: "seminar",
    description:
      "Agenda for seminars, public lectures, and industry discussions relevant for skill development.",
    image: "/figma/academic-seminar.png",
    badge: "Achievement",
    href: "/academic/seminar",
  },
  {
    id: "info-beasiswa",
    title: "Scholarship",
    category: "beasiswa",
    description:
      "Study funding opportunities, educational assistance, and student achievement appreciation programs.",
    image: "/figma/academic-beasiswa.png",
    badge: "Achievement",
    href: "/academic/beasiswa",
  },
  {
    id: "magang-bersertifikat",
    title: "Internship & Certification",
    category: "magang",
    description:
      "Curated opportunities for certified internships and career programs for future IT professionals.",
    image: "/figma/academic-magang.png",
    badge: "Achievement",
    href: "/academic/magang-sertifikasi",
  },
] satisfies import("@/types").AcademicPost[]

export const academicCategories = [
  { id: "lomba", label: "Competition" },
  { id: "seminar", label: "Seminar" },
  { id: "beasiswa", label: "Scholarship" },
  { id: "magang", label: "Internship" },
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
      "National level Capture The Flag competition to hone cyber security skills.",
    image: "/figma/academic-recent.png",
    date: "Registration Open",
    organizer: "UKM Polytechnic Computer Club Polines",
    tags: ["National", "Cyber Security"],
    registration: "15 October - 13 December",
    eventDate: "27 December",
    cost: "Rp90.000",
    buttonLabel: "Competition Info",
    href: "#",
  },
  {
    id: "techcomfest-ctf-2026-2",
    title: "TECHCOMFEST 2026 - CTF",
    category: "lomba",
    description:
      "National level Capture The Flag competition to hone cyber security skills.",
    image: "/figma/academic-recent.png",
    date: "Registration Open",
    organizer: "UKM Polytechnic Computer Club Polines",
    tags: ["National", "Cyber Security"],
    registration: "15 October - 13 December",
    eventDate: "27 December",
    cost: "Rp90.000",
    buttonLabel: "Competition Info",
    href: "#",
  },
] satisfies import("@/types").AcademicPost[]
