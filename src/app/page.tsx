import type { Metadata } from 'next'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Disclaimer from '@/components/ui/Disclaimer'
import { books } from '@/data/books'

export const metadata: Metadata = {
  title: 'Human Architect — Rebuild The Human System',
  description: 'Human Architect is a body, mind, and lifestyle philosophy for those ready to detoxify their environment, master their habits, and return to their original design.',
}

const pillars = [
  { icon: '🧬', title: 'Detoxify', desc: 'Remove the interference. Clear the terrain. Your body is not broken — it is overloaded.' },
  { icon: '🔋', title: 'Rebuild', desc: 'Restore circulation, elimination, and regeneration. Return to original design.' },
  { icon: '👑', title: 'Master Yourself', desc: 'Discipline is freedom. Habits are code. Your lifestyle is the operating system.' },
]

const featuredBooks = books.slice(0, 3)

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(212,168,83,0.05) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(45,212,191,0.03) 0%, transparent 50%)',
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[var(--void)] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[900px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--gold-dim)] text-[var(--gold)] text-[11px] font-bold uppercase tracking-[1.5px] mb-8 border border-[rgba(212,168,83,0.15)] animate-fade-in-up">
            ⚡ Human Optimization Philosophy
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-[1.05] animate-fade-in-up animate-gradient" style={{ animationDelay: '0.2s' }}>
            <span className="gradient-text">Rebuild The</span><br />
            <span className="gradient-text">Human System</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-[650px] mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Human Architect is a body, mind, and lifestyle philosophy for those ready to detoxify their environment, master their habits, and return to their original design.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button href="/work-with-me" variant="primary" size="lg">Start Your Transformation</Button>
            <Button href="/books" variant="secondary" size="lg">Explore The Books</Button>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <Section>
        <div className="max-w-[750px] mx-auto text-center">
          <p className="text-2xl md:text-3xl font-display italic text-[var(--text)] leading-relaxed mb-8 reveal">
            &ldquo;The body is architecture. The mind is software. Food is information. Habits are code. Detoxification is the removal of interference. Self-mastery is freedom.&rdquo;
          </p>
          <p className="text-[var(--text-muted)] reveal">— Human Architect</p>
        </div>
      </Section>

      {/* PILLARS */}
      <Section dark>
        <SectionHeader
          title="Three Pillars of Human Architecture"
          subtitle="The framework for rebuilding your body, mind, and lifestyle from the ground up."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 text-center hover:border-[var(--border-light)] hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(212,168,83,0.06)] transition-all duration-300 reveal">
              <div className="text-4xl mb-5">{pillar.icon}</div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BOOKS */}
      <Section>
        <SectionHeader
          title="Books by Human Architect"
          subtitle="Forbidden knowledge, biological intelligence, detoxification, design, and the architecture of human evolution."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBooks.map((book) => (
            <div key={book.id} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--border-light)] hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(212,168,83,0.06)] transition-all duration-300 reveal">
              <div className="w-full aspect-[3/4] img-placeholder text-6xl">📖</div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{book.description.slice(0, 120)}...</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {book.themes.slice(0, 3).map((theme) => (
                    <span key={theme} className="text-[10px] px-2.5 py-1 rounded bg-[var(--teal-dim)] text-[var(--teal)] font-semibold uppercase tracking-[0.5px]">
                      {theme}
                    </span>
                  ))}
                </div>
                <Button href={`/books/${book.slug}`} variant="outline" size="sm">View Book →</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/books" variant="secondary">View All Books →</Button>
        </div>
      </Section>

      {/* PHILOSOPHY PREVIEW */}
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Modern World <span className="gradient-text">Drains You</span></h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Processed food. Sedentary living. Digital overload. Environmental toxins. The modern environment is designed to extract your energy, attention, and health.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Human Architect exists to help you rebuild the system beneath your energy, clarity, and discipline. Not with quick fixes. With architecture.
            </p>
            <Button href="/philosophy" variant="primary">Read The Philosophy →</Button>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-10 text-center reveal">
            <div className="text-6xl mb-6">🏛️</div>
            <h3 className="text-xl font-bold mb-3">4thSpace Pods</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Prevention infrastructure. Sauna. Ice bath. Breathwork. Community. AI-enabled support. The future of wellness is civic.
            </p>
          </div>
        </div>
      </Section>

      {/* WORK WITH ME PREVIEW */}
      <Section>
        <div className="text-center max-w-[700px] mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to <span className="gradient-text">Rebuild</span>?</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8 text-lg">
            This is for people who are ready to take personal responsibility for their body, habits, environment, and discipline. Not for everyone. For the few who refuse to decay quietly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/work-with-me" variant="primary" size="lg">Apply For 1:1</Button>
            <Button href="/protocols" variant="secondary" size="lg">Explore Protocols</Button>
          </div>
        </div>
      </Section>

      {/* NEWSLETTER */}
      <Section dark>
        <div className="text-center max-w-[600px] mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join The <span className="gradient-text">Letters</span></h2>
          <p className="text-[var(--text-muted)] leading-relaxed mb-8">
            Weekly reflections on detoxification, discipline, body intelligence, mindset, and the architecture of human transformation.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-[450px] mx-auto" action="#" method="POST">
            <input type="text" name="name" placeholder="Your name" className="flex-1 px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--deep)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all" />
            <input type="email" name="email" placeholder="Your email" className="flex-1 px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--deep)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all" />
            <Button variant="primary" size="md">Join</Button>
          </form>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <div className="text-center max-w-[700px] mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Body Is <span className="gradient-text">Architecture</span></h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8 text-lg">
            Not random. Not broken. Overloaded. The question is not &ldquo;what do you want?&rdquo; It&apos;s &ldquo;what are you programming?&rdquo;
          </p>
          <Button href="/work-with-me" variant="primary" size="lg">Start Your Transformation →</Button>
        </div>
      </Section>

      <Disclaimer />
    </>
  )
}
