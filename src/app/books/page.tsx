import type { Metadata } from 'next'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { books } from '@/data/books'

export const metadata: Metadata = {
  title: 'Books — Human Architect',
  description: 'Books by Human Architect: Intelligent Design, Alkaline Awakening, Life Force Energy, Parasite Conspiracy.',
}

export default function BooksPage() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 text-center">
        <div className="max-w-[750px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Books by <span className="gradient-text">Human Architect</span></h1>
          <p className="text-lg text-[var(--text-muted)]">Forbidden knowledge, biological intelligence, detoxification, design, and the architecture of human evolution.</p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book) => (
            <div key={book.id} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--border-light)] hover:-translate-y-1 transition-all duration-300 reveal">
              <div style={{ width: '100%', aspectRatio: '3/4', background: '#141420', position: 'relative', overflow: 'hidden' }}>
                <img src={book.coverImage} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold">{book.title}</h3>
                  {book.status === 'coming-soon' && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--accent-dim)] text-[var(--accent)] font-semibold uppercase tracking-[0.5px]">Soon</span>
                  )}
                </div>
                <p className="text-sm text-[var(--accent)] font-semibold mb-4">{book.tagline}</p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">{book.description}</p>
                <div className="mb-5">
                  <p className="text-xs font-bold uppercase tracking-[1px] text-[var(--text-secondary)] mb-2">Who this is for:</p>
                  <ul className="space-y-1">
                    {book.whoFor.map((item) => (
                      <li key={item} className="text-sm text-[var(--text-muted)] flex items-start gap-2">
                        <span className="text-[var(--accent)] mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {book.themes.map((theme) => (
                    <span key={theme} className="text-[10px] px-2.5 py-1 rounded bg-[var(--teal-dim)] text-[var(--teal)] font-semibold uppercase tracking-[0.5px]">{theme}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button href={`/books/${book.slug}`} variant="primary" size="sm">View Book</Button>
                  {book.status === 'published' && (
                    <a href={book.paymentLink} className="inline-flex items-center px-4 py-2 text-sm font-bold text-[var(--accent)] border border-[rgba(212,168,83,0.3)] rounded-xl hover:bg-[var(--accent-dim)] transition-all">Get the Book →</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
