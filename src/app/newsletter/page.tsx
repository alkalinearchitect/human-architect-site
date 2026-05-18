import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Newsletter — Human Architect',
  description: 'Join The Human Architect Letters. Weekly reflections on detoxification, discipline, body intelligence, mindset, and transformation.',
}

export default function NewsletterPage() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 text-center">
        <div className="max-w-[750px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Join The <span className="gradient-text">Letters</span></h1>
          <p className="text-lg text-[var(--text-muted)]">Weekly reflections on detoxification, discipline, body intelligence, mindset, and the architecture of human transformation.</p>
        </div>
      </section>

      <Section>
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What You Receive</h2>
          <ul className="space-y-4 text-[var(--text-secondary)] leading-relaxed mb-10 text-left max-w-[500px] mx-auto">
            <li className="flex items-start gap-3"><span className="text-[var(--gold)]">•</span> Weekly essays on body intelligence and detoxification</li>
            <li className="flex items-start gap-3"><span className="text-[var(--gold)]">•</span> Protocol updates and seasonal frameworks</li>
            <li className="flex items-start gap-3"><span className="text-[var(--gold)]">•</span> Book excerpts and early access to new content</li>
            <li className="flex items-start gap-3"><span className="text-[var(--gold)]">•</span> AI systems and personal infrastructure insights</li>
            <li className="flex items-start gap-3"><span className="text-[var(--gold)]">•</span> No spam. No fluff. Just architecture.</li>
          </ul>

          <form className="flex flex-col sm:flex-row gap-3 max-w-[450px] mx-auto mb-8" action="#" method="POST">
            <input type="text" name="name" placeholder="Your name" className="flex-1 px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--deep)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all" />
            <input type="email" name="email" placeholder="Your email" className="flex-1 px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--deep)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all" />
            <Button variant="primary" size="md">Join</Button>
          </form>

          <p className="text-xs text-[var(--text-dim)]">Or subscribe on <a href="https://humanarchitect8.substack.com" target="_blank" rel="noopener" className="text-[var(--gold)] hover:underline">Substack →</a></p>
        </div>
      </Section>
    </>
  )
}
