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

const featuredBooks = books.filter(b => b.status === 'published').slice(0, 3)

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px', position: 'relative', overflow: 'hidden', background: 'radial-gradient(ellipse at 30% 20%, rgba(212,168,83,0.05) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(45,212,191,0.03) 0%, transparent 50%)' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to top, #0a0a0f, transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: 'rgba(212,168,83,0.12)', color: '#a78bfa', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 28, border: '1px solid rgba(212,168,83,0.15)' }}>
            ⚡ Human Optimization Philosophy
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24 }}>
            <span style={{ background: 'linear-gradient(135deg, #c4b5fd, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Rebuild The</span><br />
            <span style={{ background: 'linear-gradient(135deg, #c4b5fd, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Human System</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#a0a0b8', maxWidth: 650, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Human Architect is a body, mind, and lifestyle philosophy for those ready to detoxify their environment, master their habits, and return to their original design.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/work-with-me" variant="primary" size="lg">Start Your Transformation</Button>
            <Button href="/books" variant="secondary" size="lg">Explore The Books</Button>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <Section>
        <div style={{ maxWidth: 750, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', color: '#f0f0f0', lineHeight: 1.6, marginBottom: 20 }}>
            "The body is architecture. The mind is software. Food is information. Habits are code. Detoxification is the removal of interference. Self-mastery is freedom."
          </p>
          <p style={{ color: '#6b6b80' }}>— Human Architect</p>
        </div>
      </Section>

      {/* PILLARS */}
      <Section dark>
        <SectionHeader title="Three Pillars of Human Architecture" subtitle="The framework for rebuilding your body, mind, and lifestyle from the ground up." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {pillars.map((p) => (
            <div key={p.title} style={{ background: '#161628', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 32, textAlign: 'center', transition: 'all 0.3s' }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: '#6b6b80', lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BOOKS */}
      <Section>
        <SectionHeader title="Books by Human Architect" subtitle="Forbidden knowledge, biological intelligence, detoxification, design, and the architecture of human evolution." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {featuredBooks.map((book) => (
            <div key={book.id} style={{ background: '#161628', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden', transition: 'all 0.3s' }}>
              <div style={{ width: '100%', aspectRatio: '3/4', background: 'linear-gradient(135deg, #141420, #1a1a2e)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <img src={book.coverImage} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{book.title}</h3>
                <p style={{ fontSize: 14, color: '#6b6b80', lineHeight: 1.6, marginBottom: 16 }}>{book.description.slice(0, 120)}...</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {book.themes.slice(0, 3).map((t) => (
                    <span key={t} style={{ fontSize: 10, padding: '3px 10px', borderRadius: 4, background: 'rgba(45,212,191,0.1)', color: '#2dd4bf', fontWeight: 600, textTransform: 'uppercase' }}>{t}</span>
                  ))}
                </div>
                <Button href={`/books/${book.slug}`} variant="outline" size="sm">View Book →</Button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Button href="/books" variant="secondary">View All Books →</Button>
        </div>
      </Section>

      {/* PHILOSOPHY PREVIEW */}
      <Section dark>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: 20 }}>The Modern World <span style={{ background: 'linear-gradient(135deg, #c4b5fd, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Drains You</span></h2>
            <p style={{ color: '#a0a0b8', lineHeight: 1.7, marginBottom: 16 }}>Processed food. Sedentary living. Digital overload. Environmental toxins. The modern environment is designed to extract your energy, attention, and health.</p>
            <p style={{ color: '#a0a0b8', lineHeight: 1.7, marginBottom: 24 }}>Human Architect exists to help you rebuild the system beneath your energy, clarity, and discipline. Not with quick fixes. With architecture.</p>
            <Button href="/philosophy" variant="primary">Read The Philosophy →</Button>
          </div>
          <div style={{ background: '#161628', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 40, textAlign: 'center' }}>
            <div style={{ fontSize: 56, marginBottom: 20 }}>🏛️</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>4thSpace Pods</h3>
            <p style={{ fontSize: 14, color: '#6b6b80', lineHeight: 1.6 }}>Prevention infrastructure. Sauna. Ice bath. Breathwork. Community. AI-enabled support. The future of wellness is civic.</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: 20 }}>Ready to <span style={{ background: 'linear-gradient(135deg, #c4b5fd, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Rebuild</span>?</h2>
          <p style={{ color: '#a0a0b8', lineHeight: 1.7, marginBottom: 32, fontSize: 18 }}>This is for people who are ready to take personal responsibility for their body, habits, environment, and discipline. Not for everyone. For the few who refuse to decay quietly.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/work-with-me" variant="primary" size="lg">Apply For 1:1</Button>
            <Button href="/protocols" variant="secondary" size="lg">Explore Protocols</Button>
          </div>
        </div>
      </Section>

      {/* NEWSLETTER */}
      <Section dark>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: 16 }}>Join The <span style={{ background: 'linear-gradient(135deg, #c4b5fd, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Letters</span></h2>
          <p style={{ color: '#6b6b80', lineHeight: 1.7, marginBottom: 32 }}>Weekly reflections on detoxification, discipline, body intelligence, mindset, and the architecture of human transformation.</p>
          <form style={{ display: 'flex', flexDirection: 'row', gap: 12, maxWidth: 450, margin: '0 auto' }}>
            <input type="text" placeholder="Your name" style={{ flex: 1, padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: '#0e0e16', color: '#f0f0f0', fontSize: 14 }} />
            <input type="email" placeholder="Your email" style={{ flex: 1, padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: '#0e0e16', color: '#f0f0f0', fontSize: 14 }} />
            <Button variant="primary" size="md">Join</Button>
          </form>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: 20 }}>Your Body Is <span style={{ background: 'linear-gradient(135deg, #c4b5fd, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Architecture</span></h2>
          <p style={{ color: '#a0a0b8', lineHeight: 1.7, marginBottom: 32, fontSize: 18 }}>Not random. Not broken. Overloaded. The question is not "what do you want?" It's "what are you programming?"</p>
          <Button href="/work-with-me" variant="primary" size="lg">Start Your Transformation →</Button>
        </div>
      </Section>

      <Disclaimer />
    </>
  )
}
