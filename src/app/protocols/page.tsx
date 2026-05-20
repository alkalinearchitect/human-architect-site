import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Disclaimer from '@/components/ui/Disclaimer'

export const metadata: Metadata = {
  title: 'Protocols — Human Architect',
  description: 'Human Architect protocols for detoxification, circulation, regeneration, breathwork, movement, and AI-assisted personal systems.',
}

const protocols = [
  { title: 'Detoxification Protocol', desc: 'Clear the terrain. Remove what blocks circulation, cognition, and vitality. Focus on reducing the burden on your elimination systems.', items: ['Mucusless diet transition', 'Fruit cleansing', 'Tongue coating test', 'Hydration first — 500ml water with lemon before anything'] },
  { title: 'Circulation Protocol', desc: 'Your blood is a river. When it flows clean, every cell gets what it needs. When it slows, everything suffers.', items: ['Morning water + lemon', 'Dry brushing toward heart', 'Cold exposure 2+ min', 'Move every 45 minutes', 'Legs up the wall before bed'] },
  { title: 'Regeneration Protocol', desc: 'The body rebuilds itself constantly. The question is: what instructions are you giving it?', items: ['Fruit before noon', 'Big salad with every meal', 'No dairy', 'Sauna when possible', 'Box breathing 4-4-4-4'] },
  { title: 'Breathwork & Nervous System', desc: 'Your nervous system is the master regulator. Breathwork is the fastest lever.', items: ['Box breathing (4-4-4-4)', 'Deep belly breathing 3x daily', 'Cold exposure breathing'] },
  { title: 'Movement & Discipline', items: ['Rebounding 10 min daily', 'Daily 30 min outdoor walk', 'Strength training'] },
  { title: 'AI-Assisted Systems', desc: 'The most powerful protocol is structural. Use AI agents to manage research, documents, and workflows.', items: ['Personal command centre', 'Document processing pipeline', 'Research agents'] },
]

export default function ProtocolsPage() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 text-center">
        <div className="max-w-[750px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">The <span className="gradient-text">Protocols</span></h1>
          <p className="text-lg text-[var(--text-muted)]">Systems for detoxification, circulation, regeneration, and human optimisation. Educational frameworks — not medical advice.</p>
        </div>
      </section>

      <Disclaimer />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {protocols.map((protocol, i) => (
            <div key={protocol.title} className={`bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--border-light)] transition-all duration-300 reveal${(i % 4) + 1}`}>
              <h3 className="text-xl font-bold mb-3">{protocol.title}</h3>
              {protocol.desc && <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">{protocol.desc}</p>}
              <ul className="space-y-2">
                {protocol.items.map((item) => (
                  <li key={item} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--accent)] mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want Personalised <span className="gradient-text">Protocols</span>?</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">Work with Human Architect on custom protocols, brand strategy, or AI systems.</p>
          <Button href="/work-with-me" variant="primary" size="lg">Apply to Work With Me →</Button>
        </div>
      </Section>
    </>
  )
}
