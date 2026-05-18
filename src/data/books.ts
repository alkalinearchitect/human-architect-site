export interface Book {
  id: string
  title: string
  slug: string
  tagline: string
  description: string
  whoFor: string[]
  themes: string[]
  coverImage: string
  paymentLink: string
  status: 'published' | 'coming-soon'
}

export const books: Book[] = [
  {
    id: 'intelligent-design',
    title: 'Intelligent Design',
    slug: 'intelligent-design',
    tagline: 'The Architecture of Creation',
    description: 'A provocative exploration of human architecture, nature, complexity, consciousness, and the argument that life reflects intelligence rather than accident. This book examines the design principles embedded in human anatomy and asks: what does the structure of the body tell us about intelligence, pattern, and the nature of biological order?',
    whoFor: [
      'Thinkers who question the narrative of random chance',
      'Anyone fascinated by the intersection of science and philosophy',
      'People who sense deeper order in biological systems',
    ],
    themes: ['Design', 'Architecture', 'Intelligence', 'Creation', 'Consciousness'],
    coverImage: '/books/intelligent-design.png',
    paymentLink: '#',
    status: 'published',
  },
  {
    id: 'alkaline-awakening',
    title: 'Alkaline Awakening',
    slug: 'alkaline-awakening',
    tagline: 'Detoxification. Terrain. Circulation. Regeneration.',
    description: 'A deep guide to raw food, alkalinity, detoxification, energy, discipline, purification, and reconnecting with the intelligence of the body. Your body is not random — it is architecture. And like any architecture, it can be understood, maintained, and redesigned.',
    whoFor: [
      'People who have tried every diet and still feel something is wrong',
      'Those seeking a deeper understanding of internal terrain',
      'Anyone ready to take responsibility for their biological environment',
    ],
    themes: ['Detoxification', 'Terrain', 'Circulation', 'Regeneration', 'Raw Food'],
    coverImage: '/books/alkaline-awakening.png',
    paymentLink: '#',
    status: 'published',
  },
  {
    id: 'life-force-energy',
    title: 'Life Force Energy',
    slug: 'life-force-energy',
    tagline: 'Discipline. Energy. Presence. Sovereignty.',
    description: 'A self-mastery text exploring discipline, sexual energy, focus, presence, and the redirection of instinct into purpose. This is not a book about suppression — it is about transformation. Taking the raw energy of human instinct and directing it toward creation, discipline, and sovereignty.',
    whoFor: [
      'Men who want to understand their energy, not fight it',
      'Anyone seeking deeper discipline and focus',
      'People ready to redirect instinct into purpose',
    ],
    themes: ['Discipline', 'Energy', 'Sovereignty', 'Self-Mastery', 'Focus'],
    coverImage: '/books/life-force-energy.png',
    paymentLink: '#',
    status: 'coming-soon',
  },
  {
    id: 'parasite-conspiracy',
    title: 'Parasite Conspiracy',
    slug: 'parasite-conspiracy',
    tagline: 'Hidden Burdens. Awareness. Sovereignty.',
    description: 'A controversial investigative-style book exploring hidden biological, environmental, and lifestyle burdens that may affect human vitality. This is not about fear — it is about awareness, personal responsibility, and the science of detoxification. An educational exploration, not a medical diagnosis.',
    whoFor: [
      'People who want to go deeper than surface-level wellness',
      'Those who suspect there is more to the story',
      'Anyone ready to take sovereignty over their internal environment',
    ],
    themes: ['Parasites', 'Awareness', 'Detox', 'Sovereignty', 'Investigation'],
    coverImage: '/books/parasite-conspiracy.png',
    paymentLink: '#',
    status: 'published',
  },
]
