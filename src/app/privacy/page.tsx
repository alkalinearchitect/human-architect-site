import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy — Human Architect',
  description: 'Privacy Policy for Human Architect.',
}

export default function PrivacyPage() {
  return (
    <section className="pt-36 pb-20 px-6">
      <div className="max-w-[750px] mx-auto">
        <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
        <p className="text-sm text-[var(--text-muted)] mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>
        <div className="prose prose-invert max-w-none space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <h2 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you subscribe to our newsletter, fill out a contact form, or apply for 1:1 work. This may include your name, email address, and any information you choose to include in your message.</p>
          <h2 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to respond to your enquiries, send you our newsletter (if you opt in), improve our website, and provide you with relevant content and offers.</p>
          <h2 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">3. Data Storage</h2>
          <p>Your data is stored securely. We do not sell, trade, or rent your personal information to third parties. We may use third-party service providers to help us operate our website and manage communications.</p>
          <h2 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">4. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. You may unsubscribe from our newsletter at any time by clicking the unsubscribe link in any email.</p>
          <h2 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">5. Contact</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:humanarchitect@protonmail.com" className="text-[var(--gold)]">humanarchitect@protonmail.com</a>.</p>
        </div>
      </div>
    </section>
  )
}
