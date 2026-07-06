import type { Program, ProgramCategory, ProgramSummary } from "@/types"

export const programs: ProgramSummary[] = [
  {
    id: "visi-misi",
    icon: "/figma/vector-target.svg",
    title: "Vision & Mission",
    description: "The main direction and goals of HMPTI UKSW.",
  },
  {
    id: "division",
    icon: "/figma/vector-folder.svg",
    title: "Division",
    description: "Workspace and role distribution within the organization.",
  },
  {
    id: "mascot",
    icon: "/figma/vector.svg",
    title: "Mascot",
    description: "Visual identity and character of HMPTI.",
  },
]

export const programCategories: ProgramCategory[] = [
  "Structured",
  "Unstructured",
]

export const programPageItems: Program[] = [
  {
    id: "program-001",
    slug: "bebek-belajar-bersama-akademik",
    title: "Bebek (Learn Together Academically)",
    category: "Structured",
    description:
      "A collaborative learning space to help students understand course materials and prepare for academic evaluations.",
    content:
      "Bebek provides a relaxed learning session with mentors and peers from the same cohort. This program is created so students can ask questions, discuss, and strengthen their understanding of materials in a supportive atmosphere.",
    image: "/figma/program-card.png",
    date: "12 August 2025",
    mode: "Offline",
    location: "FTI UKSW Campus",
    audience: "Informatics Engineering Students",
    benefits: [
      "Receive learning assistance from academic mentors.",
      "Understand course materials through lighter discussions.",
      "Build a consistent collaborative learning habit.",
    ],
    materials: [
      "Core lecture material review.",
      "Case study exercises and problem discussions.",
      "Q&A session with mentors.",
    ],
  },
  {
    id: "program-002",
    slug: "kelas-internal-react-dasar",
    title: "Basic React Internal Class",
    category: "Unstructured",
    description:
      "Member development class to learn components, state, and basic workflows in building web interfaces.",
    content:
      "The Basic React Internal Class serves as a place for HMPTI members to strengthen their technical skills through hands-on practice and mini-project discussions.",
    image: "/figma/program-card.png",
    date: "20 August 2025",
    mode: "Offline",
    location: "FTI Computer Laboratory",
    audience: "HMPTI Members",
    benefits: [
      "Understand basic components and props.",
      "Get accustomed to clean code structure.",
      "Gain experience building mini projects.",
    ],
    materials: [
      "React and JSX Fundamentals.",
      "Simple state and event handling.",
      "Structuring reusable components.",
    ],
  },
  {
    id: "program-003",
    slug: "workshop-ui-ux-kreatif",
    title: "Creative UI/UX Workshop",
    category: "Unstructured",
    description:
      "Digital product design workshop to hone research, wireframing, and prototyping skills.",
    content:
      "The Creative UI/UX Workshop is designed to open a space for design exploration starting from real user problems.",
    image: "/figma/program-card.png",
    date: "5 September 2025",
    mode: "Offline",
    location: "FTI UKSW Hall",
    audience: "General students",
    benefits: [
      "Understand the digital product design process.",
      "Able to construct wireframes and early prototypes.",
      "Practice presenting user-based solutions.",
    ],
    materials: [
      "User journey and problem framing.",
      "Low fidelity wireframing.",
      "Prototyping and design review.",
    ],
  },
  {
    id: "program-004",
    slug: "mentoring-asisten-dosen",
    title: "Teaching Assistant Mentoring",
    category: "Structured",
    description:
      "Preparation program for prospective teaching assistants through communication, technical, and class mentoring ethics training.",
    content:
      "Teaching Assistant Mentoring helps students prepare themselves to support the learning process in classes and laboratories.",
    image: "/figma/program-card.png",
    date: "18 September 2025",
    mode: "Offline",
    location: "HMPTI Discussion Room",
    audience: "Prospective teaching assistants",
    benefits: [
      "Understand the roles and responsibilities of a teaching assistant.",
      "Improve ability to explain materials.",
      "Prepare for practical mentoring simulations.",
    ],
    materials: [
      "Class assistance ethics.",
      "Material communication techniques.",
      "Practical mentoring simulations.",
    ],
  },
  {
    id: "program-005",
    slug: "kolaborasi-teknologi-komunitas",
    title: "Community Technology Collaboration",
    category: "Unstructured",
    description:
      "Cross-community collaborative activities to develop ideas, creations, and technology networks.",
    content:
      "Community Technology Collaboration connects students with creative and technology communities to create impactful creations.",
    image: "/figma/program-card.png",
    date: "30 September 2025",
    mode: "Offline",
    location: "Creative Space UKSW",
    audience: "Students and technology communities",
    benefits: [
      "Expand networks across communities.",
      "Gain experience in project collaboration.",
      "Test technology ideas with other participants.",
    ],
    materials: [
      "Ideation sprint.",
      "Team role distribution.",
      "Collaboration result showcase.",
    ],
  },
]

export function getProgramBySlug(slug: string) {
  return programPageItems.find((program) => program.slug === slug)
}

export function getRelatedPrograms(slug: string) {
  return programPageItems.filter((program) => program.slug !== slug).slice(0, 4)
}
