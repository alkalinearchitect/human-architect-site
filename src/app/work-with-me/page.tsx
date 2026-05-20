import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Disclaimer from '@/components/ui/Disclaimer'

export const metadata: Metadata = {
  title: 'Work With Me — Human Architect',
  description: 'Apply to work with Human Architect on 1:1 transformation, protocols, brand strategy, AI systems, and book architecture.',
}

export default function WorkWithMePage() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 text-center">
        <div className="max-w-[750px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Work With <span className="gradient-text">Human Architect</span></h1>
          <p className="text-lg text-[var(--text-muted)]">This is for people who are ready to take personal responsibility for their body, habits, environment, and discipline.</p>
        </div>
      </section>

      <Section>
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-3xl font-bold mb-6">Who This Is For</h2>
          <ul className="space-y-3 text-[var(--text-secondary)] leading-relaxed mb-8">
            <li className="flex items-start gap-3"><span className="text-[var(--accent)]">•</span> You are tired of surface-level wellness advice</li>
            <li className="flex items-start gap-3"><span className="text-[var(--accent)]">•</span> You want a framework, not a quick fix</li>
            <li className="flex items-start gap-3"><span className="text-[var(--accent)]">•</span> You are willing to make serious lifestyle changes</li>
            <li className="flex items-start gap-3"><span className="text-[var(--accent)]">•</span> You take personal responsibility for your health</li>
            <li className="flex items-start gap-3"><span className="text-[var(--accent)]">•</span> You understand this is education, not medical treatment</li>
          </ul>

          <h2 className="text-3xl font-bold mb-6">What We Work On</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: '🧬', title: 'Personal Protocols', desc: 'Custom detoxification, circulation, and regeneration protocols.' },
              { icon: '🎨', title: 'Brand Strategy', desc: 'Positioning, messaging, and visual identity for premium brands.' },
              { icon: '🤖', title: 'AI Systems', desc: 'Personal command centres, agent workflows, and document pipelines.' },
              { icon: '📚', title: 'Book Architecture', desc: 'Structure, positioning, and content strategy for knowledge products.' },
            ].map((item) => (
              <div key={item.title} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Apply</h2>
          <form className="space-y-5" action="#" method="POST">
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.8px] text-[var(--text-secondary)] mb-2">Full Name</label>
              <input type="text" required name="name" className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--deep)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.8px] text-[var(--text-secondary)] mb-2">Email</label>
              <input type="email" required name="email" className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--deep)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.8px] text-[var(--text-secondary)] mb-2">Current Challenge</label>
              <textarea name="challenge" className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--deep)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all min-h-[100px] resize-y" placeholder="What are you struggling with?" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.8px] text-[var(--text-secondary)] mb-2">Main Goal</label>
              <textarea name="goal" className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--deep)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all min-h-[100px] resize-y" placeholder="What do you want to achieve?" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.8px] text-[var(--text-secondary)] mb-2">Why Now?</label>
              <textarea name="why" className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--deep)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all min-h-[80px] resize-y" placeholder="What made you reach out today?" />
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" id="commitment" name="commitment" className="mt-1 accent-[var(--accent)]" />
              <label htmlFor="commitment" className="text-sm text-[var(--text-muted)]">I understand this is an application, not a guarantee of acceptance. I am willing to make serious lifestyle changes.</label>
            </div>
            <Button variant="primary" size="lg" className="w-full">Submit Application</Button>
          </form>
        </div>
      </Section>

      <Disclaimer />
    </>
  )
}
