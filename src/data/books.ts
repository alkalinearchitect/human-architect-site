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
    description: 'What if evolution cannot explain the irreducible complexity of the human eye, the blood clotting cascade, or the bacterial flagellum? This 204-page investigation dismantles the accident narrative and builds an airtight case that life was engineered — not by chance, but by intelligence. Written by Tyson Murray from years of obsessive research, not religious dogma. If you have ever felt in your bones that you are not a cosmic mistake, this book gives you the evidence. Stop believing you are random. Start understanding you are designed.',
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
    description: 'You have tried every diet. You eat clean, train hard, and still feel like your body is running on 60 percent. This 357-page manual is the complete Alkaline Architect protocol — raw food, mucusless eating, fruit cleansing, circulation work, and 125+ recipes that actually taste good. I wrote this because I was that guy spending a fortune on supplements while my internal terrain was a swamp. Clear the terrain. The body knows how to heal when you stop poisoning it. Your energy, clarity, and digestion will never be the same.',
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
    description: 'Every time you release your seed, you are not relieving pressure. You are dumping the most biologically expensive substance your body produces — loaded with zinc, testosterone precursors, and neurological fuel — into a tissue paper. This 163-page guide is the no-bullshit manual on semen retention: the physical rewiring, the mental clarity, the magnetic presence, and the spiritual sovereignty that men across every culture have known for millennia. I wrote this because I wasted years of my life and did not understand why I felt hollow. Stop leaking power. Start consolidating it. Your future self will thank you or your current weakness will cost you everything.',
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
    description: 'What is living inside you right now that you cannot see? This investigative 70-page exposé pulls back the curtain on the hidden biological burdens — parasites, environmental toxins, mucus-forming foods, and digital interference — that are silently draining your vitality. I wrote this because I discovered what was actually causing my fatigue and brain fog, and it was not what any doctor told you to look for. This is not fear. This is awareness. And awareness is the first protocol. Cleanse your body. Reclaim your sovereignty. Or stay blind and keep wondering why you feel like a ghost in your own life.',
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
