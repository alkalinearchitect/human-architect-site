import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Cookie Notice — Human Architect',
  description: 'Cookie Notice for Human Architect.',
}

export default function CookiesPage() {
  return (
    <section className="pt-36 pb-20 px-6">
      <div className="max-w-[750px] mx-auto">
        <h1 className="text-4xl font-black mb-8">Cookie Notice</h1>
        <p className="text-sm text-[var(--text-muted)] mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <h2 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">What Are Cookies</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and improve your experience.</p>
          <h2 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">How We Use Cookies</h2>
          <p>We may use cookies for analytics (to understand how visitors use our site), functionality (to remember your preferences), and marketing (to deliver relevant content).</p>
          <h2 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">Managing Cookies</h2>
          <p>You can control and delete cookies through your browser settings. Note that disabling cookies may affect the functionality of this website.</p>
          <h2 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">Third-Party Cookies</h2>
          <p>We may use third-party services (such as analytics providers) that set their own cookies. We do not control these cookies.</p>
        </div>
      </div>
    </section>
  )
}
