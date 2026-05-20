'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold mb-2">Message Sent</h3>
        <p className="text-[var(--text-muted)]">Thank you for your enquiry. We&apos;ll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-[0.8px] text-[var(--text-secondary)] mb-2">Name</label>
          <input type="text" required className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--deep)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-[0.8px] text-[var(--text-secondary)] mb-2">Email</label>
          <input type="email" required className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--deep)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all" placeholder="your@email.com" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-[0.8px] text-[var(--text-secondary)] mb-2">Subject</label>
        <select className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--deep)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all">
          <option>General Enquiry</option>
          <option>Book Purchase</option>
          <option>Collaboration</option>
          <option>1:1 Application</option>
          <option>Media / Press</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-[0.8px] text-[var(--text-secondary)] mb-2">Message</label>
        <textarea required className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--deep)] text-[var(--text)] text-sm focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(212,168,83,0.1)] transition-all min-h-[120px] resize-y" placeholder="Your message..." />
      </div>
      <Button variant="primary" size="lg" className="w-full">Send Message</Button>
    </form>
  )
}
