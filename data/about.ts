export const aboutIntro =
  "Himpunan Mahasiswa Program Studi Teknik Informatika (HMPTI) Universitas Kristen Satya Wacana (UKSW) adalah organisasi intra-kampus yang menjadi wadah sinergi utama bagi mahasiswa. Kami berkomitmen untuk memfasilitasi pengembangan kompetensi talenta digital, menampung aspirasi secara transparan, dan mendorong kontribusi nyata mahasiswa terhadap masyarakat melalui literasi teknologi."

export type FeatureIcon = "users" | "trophy" | "star"

export const aboutFeatures: { title: string; description: string; icon: FeatureIcon }[] = [
  {
    icon: "users",
    title: "Organisasi Solid",
    description: "Pengurus berdedikasi dengan struktur yang jelas dan transparan.",
  },
  {
    icon: "trophy",
    title: "Akademik Unggul",
    description: "Program mentoring dan pengembangan akademik berkelanjutan.",
  },
  {
    icon: "star",
    title: "Komunitas Inklusif",
    description: "Ruang tumbuh untuk semua mahasiswa tanpa terkecuali.",
  },
]

export const visiContent =
  "Mewujudkan HMP S1 TI sebagai pusat inkubasi talenta digital yang kritis dan solutif, serta menjadi sinergi utama dalam mendorong kompetensi profesional mahasiswa program Studi Teknik Informatika"

export const misiContent = [
  "Mengoptimalkan peran HMP S1 TI sebagai wadah aspirasi digital yang transparan dan kolaboratif antar mahasiswa TI",
  "Mengembangkan dan memfasilitasi porgram akselerasi skill (teknis dan non-teknis) yang relevan dengan kebutuhan Industri Teknologi terkini",
  "Membangun budaya kepedulian dan kontribusi sosial di kalangan mahasiswa TI",
  "Mengadakan pengabdian masyarakat berbasis teknologi, fokus pada peningkatan literasi digital dan pemecahan masalah digital",
]

export const maskotIntro =
  "Memperkenalkan representasi semangat dan jiwa revolusioner dalam bentuk maskot robot burung hantu bernama Owiie"

// Mascot tab copy — taken from the 3 variants of the Figma component set
// (Property 1 = Default / Variant2 / Variant3).
export type MaskotTab = {
  id: string
  content?: string
  intro?: string
  bullets?: { label: string; text: string }[]
}

export const maskotTabs: MaskotTab[] = [
  {
    id: "Filosofi",
    content:
      "Maskot burung hantu futuristik HMTI UKSW melambangkan kecerdasan, ketelitian, dan kebijaksanaan yang berpadu dengan kekuatan teknologi modern. Burung hantu dikenal sebagai simbol ilmu dan pengamat tajam dalam kegelapan, yang merepresentasikan kemampuan mahasiswa Teknik Informatika dalam memecahkan masalah kompleks di dunia digital.",
  },
  {
    id: "Konsep",
    intro: "Setiap bagian dari Owiie dirancang dengan tujuan dan arti yang spesifik:",
    bullets: [
      {
        label: "Head/Ear Tips",
        text: "Terinspirasi dari telinga burung hantu untuk pendengaran (reseptif terhadap aspirasi).",
      },
      {
        label: "Visor/Wajah Robot",
        text: "Area abu-abu pada wajah melambangkan antarmuka (interface) antara manusia dan teknologi.",
      },
      {
        label: "Floating Hands",
        text: "Tangan yang melayang menunjukkan teknologi futuristik dan fleksibilitas dalam bekerja.",
      },
      {
        label: "Body Pattern",
        text: "Pola biru pada tubuh memberikan kesan aerodinamis dan modern.",
      },
    ],
  },
  {
    id: "Makna",
    content:
      "Sentuhan robot dan elemen teknologi menggambarkan inovasi, adaptasi, dan kesiapan menghadapi era industri digital. Maskot ini menjadi simbol mahasiswa HMTI UKSW yang tidak hanya cerdas secara akademik, tetapi juga visioner, beretika, dan siap menjadi penjaga masa depan teknologi.",
  },
]

export const galleryPhotos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/figma/gallery-${i + 1}.jpg`,
}))
