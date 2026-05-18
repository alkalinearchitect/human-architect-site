import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Disclaimer from '@/components/ui/Disclaimer'

export const metadata: Metadata = {
  title: 'About — Human Architect',
  description: 'Human Architect studies the body, mind, environment, and technology as one connected architecture.',
}

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 text-center">
        <div className="max-w-[750px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">About <span className="gradient-text">Human Architect</span></h1>
          <p className="text-lg text-[var(--text-muted)]">A living knowledge system for human optimisation, biological intelligence, and future wellness infrastructure.</p>
        </div>
      </section>

      <Section>
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-3xl font-bold mb-6">The Architecture of Human Optimisation</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">Human Architect studies the body, mind, environment, and technology as one connected architecture. Not as separate domains — as a single system that can be understood, optimised, and redesigned.</p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">This is not generic wellness. This is not biohacking for its own sake. This is a serious, cinematic knowledge system built on the premise that your biology is not random — it is architecture. And architecture can be redesigned.</p>

          <div className="my-10 p-8 border-l-[3px] border-[var(--gold)] bg-[var(--gold-dim)] rounded-r-xl">
            <p className="font-display italic text-xl text-[var(--text)] leading-relaxed mb-3">&ldquo;Your habits are instructions. Your environment is programming you. Your circulation is your internal logistics system. Your mind is the operating system. And you are the architect.&rdquo;</p>
            <p className="text-sm text-[var(--gold)] font-semibold">— Human Architect</p>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">What We Study</h2>
          <ul className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <li><strong className="text-[var(--text)]">Detoxification</strong> — Internal terrain, mucus-forming foods, lymphatic circulation, fasting protocols, and the science of elimination.</li>
            <li><strong className="text-[var(--text)]">Circulation</strong> — Blood viscosity, HRV optimisation, lymphatic flow, and the hidden systems that determine energy and cognition.</li>
            <li><strong className="text-[var(--text)]">Regeneration</strong> — How the body rebuilds itself, what instructions you are giving it, and how to optimise the rebuilding process.</li>
            <li><strong className="text-[var(--text)]">Mindset Reprogramming</strong> — Identity as architecture, habit as instruction, environment as programming.</li>
            <li><strong className="text-[var(--text)]">AI-Augmented Living</strong> — Personal agents, document workflows, intelligence systems, and the future of human + machine collaboration.</li>
            <li><strong className="text-[var(--text)]">Community Infrastructure</strong> — HumanitAI CIC, 4thSpace Pods, prevention systems, and the civic dimension of wellness.</li>
          </ul>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-[750px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">The Books</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">Four books form the core of the knowledge system: <em>Alkaline Awakening</em> (detoxification and terrain), <em>Parasite Conspiracy</em> (hidden biological burdens and awareness), <em>Intelligent Design</em> (the architecture of creation), and <em>Life Force Energy</em> (discipline and sovereignty).</p>
          <Button href="/books" variant="primary">Explore The Books →</Button>
        </div>
      </Section>

      <Section>
        <div className="max-w-[750px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">HumanitAI CIC</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">Human Architect is the founder of HumanitAI CIC, a community benefit company building prevention infrastructure. Not a wellness brand — a civic system for loneliness prevention, movement, reconnection, and AI-enabled community support.</p>
          <Button href="/work-with-me" variant="primary">Work With Human Architect →</Button>
        </div>
      </Section>

      <Disclaimer />
    </>
  )
}
