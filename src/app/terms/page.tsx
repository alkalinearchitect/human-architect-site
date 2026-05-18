import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Terms of Use — Human Architect',
  description: 'Terms of Use for Human Architect.',
}

export default function TermsPage() {
  return (
    <section className="pt-36 pb-20 px-6">
      <div className="max-w-[750px] mx-auto">
        <h1 className="text-4xl font-black mb-8">Terms of Use</h1>
        <p className="text-sm text-[var(--text-muted)] mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <h2 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this website.</p>
          <h2 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">2. Educational Content</h2>
          <p>All content on this website is for educational and personal development purposes only. It is not medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before making major changes to your diet, lifestyle, or health practices.</p>
          <h2 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">3. Intellectual Property</h2>
          <p>All content, including text, graphics, logos, and images, is the property of Human Architect and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without permission.</p>
          <h2 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">4. Limitation of Liability</h2>
          <p>Human Architect shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or its content.</p>
          <h2 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">5. Contact</h2>
          <p>For questions about these Terms, contact <a href="mailto:humanarchitect@protonmail.com" className="text-[var(--gold)]">humanarchitect@protonmail.com</a>.</p>
        </div>
      </div>
    </section>
  )
}
