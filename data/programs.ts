import type { Program, ProgramCategory, ProgramSummary } from "@/types"

export const programs: ProgramSummary[] = [
  {
    id: "visi-misi",
    icon: "/figma/vector-target.svg",
    title: "Visi & Misi",
    description: "Arah dan tujuan utama HMPTI UKSW.",
  },
  {
    id: "division",
    icon: "/figma/vector-folder.svg",
    title: "Division",
    description: "Ruang kerja dan pembagian peran dalam organisasi.",
  },
  {
    id: "mascot",
    icon: "/figma/vector.svg",
    title: "Mascot",
    description: "Identitas visual dan karakter HMPTI.",
  },
]

export const programCategories: ProgramCategory[] = [
  "Internal",
  "Ekstra Akademik",
  "Akademik",
]

export const programPageItems: Program[] = [
  {
    id: "program-001",
    slug: "bebek-belajar-bersama-akademik",
    title: "Bebek Belajar Bersama Akademik",
    category: "Akademik",
    description:
      "Ruang belajar kolaboratif untuk membantu mahasiswa memahami materi kuliah dan mempersiapkan evaluasi akademik.",
    content:
      "Bebek Belajar Bersama Akademik menghadirkan sesi belajar santai bersama mentor dan teman satu angkatan. Program ini dibuat agar mahasiswa bisa bertanya, berdiskusi, dan menguatkan pemahaman materi dengan suasana yang suportif.",
    image: "/figma/program-card.png",
    date: "12 Agustus 2025",
    mode: "Offline",
    location: "Kampus FTI UKSW",
    audience: "Mahasiswa Teknik Informatika",
    benefits: [
      "Mendapat pendampingan belajar dari mentor akademik.",
      "Memahami materi kuliah melalui diskusi yang lebih ringan.",
      "Membangun kebiasaan belajar bersama yang konsisten.",
    ],
    materials: [
      "Review materi perkuliahan inti.",
      "Latihan studi kasus dan pembahasan soal.",
      "Sesi tanya jawab bersama mentor.",
    ],
  },
  {
    id: "program-002",
    slug: "kelas-internal-react-dasar",
    title: "Kelas Internal React Dasar",
    category: "Internal",
    description:
      "Kelas pengembangan anggota untuk mengenal komponen, state, dan alur kerja dasar dalam membangun antarmuka web.",
    content:
      "Kelas Internal React Dasar menjadi tempat anggota HMPTI memperkuat kemampuan teknis melalui praktik langsung dan diskusi proyek kecil.",
    image: "/figma/program-card.png",
    date: "20 Agustus 2025",
    mode: "Offline",
    location: "Laboratorium Komputer FTI",
    audience: "Anggota HMPTI",
    benefits: [
      "Memahami dasar komponen dan props.",
      "Membiasakan struktur kode yang rapi.",
      "Mendapat pengalaman membuat mini project.",
    ],
    materials: [
      "Fundamental React dan JSX.",
      "State sederhana dan event handling.",
      "Penyusunan komponen reusable.",
    ],
  },
  {
    id: "program-003",
    slug: "workshop-ui-ux-kreatif",
    title: "Workshop UI/UX Kreatif",
    category: "Ekstra Akademik",
    description:
      "Workshop desain produk digital untuk mengasah kemampuan riset, wireframe, dan prototyping.",
    content:
      "Workshop UI/UX Kreatif dirancang untuk membuka ruang eksplorasi desain yang berangkat dari masalah nyata pengguna.",
    image: "/figma/program-card.png",
    date: "5 September 2025",
    mode: "Offline",
    location: "Aula FTI UKSW",
    audience: "Mahasiswa umum",
    benefits: [
      "Mengenal proses desain produk digital.",
      "Mampu menyusun wireframe dan prototype awal.",
      "Melatih presentasi solusi berbasis pengguna.",
    ],
    materials: [
      "User journey dan problem framing.",
      "Wireframe low fidelity.",
      "Prototype dan review desain.",
    ],
  },
  {
    id: "program-004",
    slug: "mentoring-asisten-dosen",
    title: "Mentoring Asisten Dosen",
    category: "Akademik",
    description:
      "Program persiapan calon asisten dosen melalui pembekalan komunikasi, teknis, dan etika pendampingan kelas.",
    content:
      "Mentoring Asisten Dosen membantu mahasiswa mempersiapkan diri untuk mendukung proses pembelajaran di kelas dan laboratorium.",
    image: "/figma/program-card.png",
    date: "18 September 2025",
    mode: "Offline",
    location: "Ruang Diskusi HMPTI",
    audience: "Calon asisten dosen",
    benefits: [
      "Memahami peran dan tanggung jawab asisten dosen.",
      "Meningkatkan kemampuan menjelaskan materi.",
      "Mempersiapkan simulasi pendampingan praktikum.",
    ],
    materials: [
      "Etika asistensi kelas.",
      "Teknik komunikasi materi.",
      "Simulasi pendampingan praktikum.",
    ],
  },
  {
    id: "program-005",
    slug: "kolaborasi-teknologi-komunitas",
    title: "Kolaborasi Teknologi Komunitas",
    category: "Ekstra Akademik",
    description:
      "Kegiatan kolaboratif lintas komunitas untuk mengembangkan ide, karya, dan jejaring teknologi.",
    content:
      "Kolaborasi Teknologi Komunitas menghubungkan mahasiswa dengan komunitas kreatif dan teknologi untuk menciptakan karya yang punya dampak.",
    image: "/figma/program-card.png",
    date: "30 September 2025",
    mode: "Offline",
    location: "Creative Space UKSW",
    audience: "Mahasiswa dan komunitas teknologi",
    benefits: [
      "Memperluas jejaring antar komunitas.",
      "Mendapat pengalaman kolaborasi proyek.",
      "Menguji ide teknologi bersama peserta lain.",
    ],
    materials: [
      "Ideation sprint.",
      "Pembagian peran tim.",
      "Showcase hasil kolaborasi.",
    ],
  },
]

export function getProgramBySlug(slug: string) {
  return programPageItems.find((program) => program.slug === slug)
}

export function getRelatedPrograms(slug: string) {
  return programPageItems.filter((program) => program.slug !== slug).slice(0, 4)
}
