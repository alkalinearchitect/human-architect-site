export interface Video {
  id: string
  title: string
  slug: string
  tagline: string
  description: string
  longDescription: string
  thumbnail: string
  videoPath: string
  duration: string
  bookSlug?: string
  themes: string[]
  whoFor: string[]
  pullQuotes: { text: string; source?: string }[]
}

export const videos: Video[] = [
  {
    id: 'alkaline-awakening',
    title: 'Alkaline Awakening',
    slug: 'alkaline-awakening',
    tagline: 'Detoxification. Terrain. Circulation. Regeneration.',
    description:
      'The complete visual companion to the Alkaline Awakening protocol. Raw food, mucusless eating, fruit cleansing, circulation work — rebuild your terrain from the ground up.',
    longDescription:
      'You have tried every diet. You eat clean, train hard, and still feel like your body is running on 60 percent. This premium cinematic experience is the visual companion to the Alkaline Awakening book — a deep dive into the protocols, the philosophy, and the biological intelligence behind raw food, mucusless eating, fruit cleansing, and circulation work. Clear the terrain. The body knows how to heal when you stop poisoning it.',
    thumbnail: '/videos/alkaline-awakening-poster.jpg',
    videoPath: 'https://files.catbox.moe/2y1kg4.mp4',
    duration: '0:52',
    bookSlug: 'alkaline-awakening',
    themes: ['Detoxification', 'Terrain', 'Circulation', 'Regeneration', 'Raw Food'],
    whoFor: [
      'People who have tried every diet and still feel something is wrong',
      'Those seeking a deeper understanding of internal terrain',
      'Anyone ready to take responsibility for their biological environment',
    ],
    pullQuotes: [
      { text: 'Clear the terrain. The body knows how to heal when you stop poisoning it.' },
      { text: 'Food is information. Habits are code. Your lifestyle is the operating system.' },
      { text: 'Stop poisoning the system. Watch what it does next.' },
    ],
  },
  {
    id: 'semen-retention',
    title: 'Life Force Energy',
    slug: 'semen-retention',
    tagline: 'Discipline. Energy. Presence. Sovereignty.',
    description:
      'The definitive visual guide to semen retention — the physical rewiring, the mental clarity, the magnetic presence, and the spiritual sovereignty that men across every culture have known for millennia.',
    longDescription:
      'Every time you release your seed, you are not relieving pressure. You are dumping the most biologically expensive substance your body produces — loaded with zinc, testosterone precursors, and neurological fuel into a tissue paper. This premium cinematic experience covers the protocols, the science, and the ancient wisdom behind the practice of semen retention.',
    thumbnail: '/videos/semen-retention-poster.jpg',
    videoPath: '/videos/semen-retention.mp4',
    duration: '10:12',
    bookSlug: 'life-force-energy',
    themes: ['Discipline', 'Energy', 'Sovereignty', 'Self-Mastery', 'Focus'],
    whoFor: [
      'Men who want to understand their energy, not fight it',
      'Anyone seeking deeper discipline and focus',
      'People ready to redirect instinct into purpose',
    ],
    pullQuotes: [
      { text: 'Retention isn\'t denial. It\'s redirection.' },
      { text: 'Your spine is an altar. Your breath, a prayer. Your seed, a covenant.' },
    ],
  },
]
