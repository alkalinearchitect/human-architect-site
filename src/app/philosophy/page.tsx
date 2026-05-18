import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Disclaimer from '@/components/ui/Disclaimer'

export const metadata: Metadata = {
  title: 'Philosophy — Human Architect',
  description: 'The Human Architect philosophy: body as architecture, mind as software, food as information, habits as code.',
}

const concepts = [
  { title: 'Body as Architecture', desc: 'Your biology is not random. It is architecture. Every system — circulation, detoxification, nervous regulation — follows design principles that can be understood and optimised.' },
  { title: 'Mind as Software', desc: 'Your thoughts, beliefs, and identity are programmable. The question is: who is writing the code? You, or your environment?' },
  { title: 'Food as Information', desc: 'Every meal is an instruction. Processed food sends one signal. Living food sends another. Your cells are listening.' },
  { title: 'Habits as Code', desc: 'Every action you repeat is a line of code in your operating system. Good habits compound. Bad habits compound faster.' },
  { title: 'Detoxification as Removing Interference', desc: 'The body is constantly trying to clean itself. Detoxification is not a trend — it is the art of removing what blocks the system from doing what it already knows how to do.' },
  { title: 'Nature as Intelligence', desc: 'The natural world is not primitive. It is the most sophisticated technology ever created. Human intelligence evolved from it. Returning to it is not regression — it is remembering.' },
]

export default function PhilosophyPage() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 text-center">
        <div className="max-w-[750px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">The <span className="gradient-text">Philosophy</span></h1>
          <p className="text-lg text-[var(--text-muted)]">The worldview behind Human Architect. Not a quick fix — a framework for rebuilding your lifestyle.</p>
        </div>
      </section>

      <Section>
        <div className="max-w-[750px] mx-auto">
          <div className="my-10 p-8 border-l-[3px] border-[var(--gold)] bg-[var(--gold-dim)] rounded-r-xl">
            <p className="font-display italic text-xl text-[var(--text)] leading-relaxed">&ldquo;The body is architecture. The mind is software. Food is information. Habits are code. Detoxification is the removal of interference. Self-mastery is freedom.&rdquo;</p>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {concepts.map((concept, i) => (
            <div key={concept.title} className={`bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--border-light)] transition-all duration-300 reveal${(i % 4) + 1}`}>
              <h3 className="text-xl font-bold mb-3">{concept.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{concept.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-[750px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Self-Mastery Is <span className="gradient-text">Freedom</span></h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">Most people do not need more motivation. They need a cleaner system. When your body is clear, your mind is sharp, and your habits are aligned — discipline becomes effortless. That is freedom.</p>
          <Button href="/work-with-me" variant="primary" size="lg">Start Your Transformation →</Button>
        </div>
      </Section>

      <Disclaimer />
    </>
  )
}
