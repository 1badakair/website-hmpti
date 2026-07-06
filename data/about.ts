export const aboutIntro =
  "The Informatics Engineering Student Association (HMPTI) at Satya Wacana Christian University (UKSW) is an intra-campus organization that serves as the main synergy platform for students. We are committed to facilitating the development of digital talent competencies, transparently accommodating aspirations, and encouraging real student contributions to society through technological literacy."

export type FeatureIcon = "users" | "trophy" | "star"

export const aboutFeatures: { title: string; description: string; icon: FeatureIcon }[] = [
  {
    icon: "users",
    title: "Solid Organization",
    description: "Dedicated management with a clear and transparent structure.",
  },
  {
    icon: "trophy",
    title: "Academic Excellence",
    description: "Continuous mentoring and academic development programs.",
  },
  {
    icon: "star",
    title: "Inclusive Community",
    description: "A room to grow for all students without exception.",
  },
]

export const visiContent =
  "To realize HMP S1 TI as an incubation center for critical and solution-oriented digital talents, and to become the main synergy in driving the professional competencies of Informatics Engineering students."

export const misiContent = [
  "Optimizing the role of HMP S1 TI as a transparent and collaborative digital aspiration platform among IT students",
  "Developing and facilitating skill acceleration programs (technical and non-technical) relevant to the current needs of the Technology Industry",
  "Building a culture of social care and contribution among IT students",
  "Conducting technology-based community service, focusing on improving digital literacy and digital problem-solving",
]

export const maskotIntro =
  "Introducing the representation of our revolutionary spirit and soul in the form of a robot owl mascot named Owiie"

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
    id: "Philosophy",
    content:
      "The futuristic owl mascot of HMPTI UKSW symbolizes intelligence, thoroughness, and wisdom combined with the power of modern technology. The owl is known as a symbol of knowledge and a sharp observer in the dark, representing the ability of Informatics Engineering students to solve complex problems in the digital world.",
  },
  {
    id: "Concept",
    intro: "Every part of Owiie is designed with a specific purpose and meaning:",
    bullets: [
      {
        label: "Head/Ear Tips",
        text: "Inspired by owl ears for hearing (receptive to aspirations).",
      },
      {
        label: "Visor/Robot Face",
        text: "The gray area on the face symbolizes the interface between humans and technology.",
      },
      {
        label: "Floating Hands",
        text: "Floating hands indicate futuristic technology and flexibility in work.",
      },
      {
        label: "Body Pattern",
        text: "The blue pattern on the body gives an aerodynamic and modern impression.",
      },
    ],
  },
  {
    id: "Meaning",
    content:
      "The robot touch and technological elements describe innovation, adaptation, and readiness to face the digital industry era. This mascot becomes a symbol of HMPTI UKSW students who are not only academically smart, but also visionary, ethical, and ready to become the guardians of the future of technology.",
  },
]

export const galleryPhotos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/figma/gallery-${i + 1}.jpg`,
}))
