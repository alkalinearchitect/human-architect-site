import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Human Architect',
  description: 'Contact Human Architect for collaborations, book enquiries, partnerships, and 1:1 applications.',
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 text-center">
        <div className="max-w-[750px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"><span className="gradient-text">Contact</span></h1>
          <p className="text-lg text-[var(--text-muted)]">For collaborations, book enquiries, partnerships, and 1:1 applications.</p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-3">Email</h3>
            <p className="text-sm text-[var(--text-muted)] mb-4">For general enquiries and collaborations.</p>
            <a href="mailto:humanarchitect@protonmail.com" className="text-[var(--accent)] hover:underline text-sm">humanarchitect@protonmail.com</a>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-3">Substack</h3>
            <p className="text-sm text-[var(--text-muted)] mb-4">Weekly essays and protocol updates.</p>
            <a href="https://humanarchitect8.substack.com" target="_blank" rel="noopener" className="text-[var(--accent)] hover:underline text-sm">humanarchitect8.substack.com →</a>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-xl font-bold mb-3">Instagram</h3>
            <p className="text-sm text-[var(--text-muted)] mb-4">Visual content and daily insights.</p>
            <a href="https://instagram.com/humanarchitect_" target="_blank" rel="noopener" className="text-[var(--accent)] hover:underline text-sm">@humanarchitect_ →</a>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-bold mb-3">TikTok</h3>
            <p className="text-sm text-[var(--text-muted)] mb-4">Short-form content on health and biology.</p>
            <span className="text-sm text-[var(--text-dim)]">Coming Soon</span>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Send a Message</h2>
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
