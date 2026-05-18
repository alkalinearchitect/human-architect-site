import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Disclaimer from '@/components/ui/Disclaimer'
import { books } from '@/data/books'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const book = books.find((b) => b.slug === slug)
  if (!book) return { title: 'Book Not Found' }
  return { title: `${book.title} — Human Architect`, description: book.description }
}

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }))
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params
  const book = books.find((b) => b.slug === slug)
  if (!book) notFound()

  return (
    <>
      <section style={{ padding: '140px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '300px 1fr', gap: 48, alignItems: 'start' }}>
          <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', background: '#141420' }}>
            <img src={book.coverImage} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: 8 }}>{book.title}</h1>
            <p style={{ fontSize: 18, color: '#6b6b80', marginBottom: 20 }}>{book.tagline}</p>
            <p style={{ color: '#a0a0b8', lineHeight: 1.7, marginBottom: 24 }}>{book.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {book.themes.map((t) => (
                <span key={t} style={{ fontSize: 10, padding: '3px 10px', borderRadius: 4, background: 'rgba(45,212,191,0.1)', color: '#2dd4bf', fontWeight: 600, textTransform: 'uppercase' }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              {book.status === 'published' ? (
                <a href={book.paymentLink} style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 28px', fontSize: 14, fontWeight: 700, textTransform: 'uppercase', borderRadius: 12, background: 'linear-gradient(135deg, #d4a853, #c49a3f)', color: '#000', textDecoration: 'none' }}>Get the Book →</a>
              ) : (
                <span style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 28px', fontSize: 14, fontWeight: 700, textTransform: 'uppercase', borderRadius: 12, background: 'rgba(255,255,255,0.05)', color: '#6b6b80', border: '1px solid rgba(255,255,255,0.06)' }}>Coming Soon</span>
              )}
              <Button href="/books" variant="secondary" size="md">← All Books</Button>
            </div>
          </div>
        </div>
      </section>

      <Section dark>
        <div style={{ maxWidth: 750, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>What You Will Understand</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {book.whoFor.map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12, color: '#a0a0b8', lineHeight: 1.7 }}>
                <span style={{ color: '#d4a853', fontSize: 18 }}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div style={{ maxWidth: 750, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#a0a0b8', lineHeight: 1.7, marginBottom: 32 }}>This book is for people who want to go deeper than surface-level wellness. It presents evidence, explores mechanisms, and provides frameworks for understanding — not medical advice.</p>
          {book.status === 'published' ? (
            <a href={book.paymentLink} style={{ display: 'inline-flex', alignItems: 'center', padding: '16px 36px', fontSize: 16, fontWeight: 700, textTransform: 'uppercase', borderRadius: 12, background: 'linear-gradient(135deg, #d4a853, #c49a3f)', color: '#000', textDecoration: 'none' }}>Get {book.title} →</a>
          ) : (
            <span style={{ display: 'inline-flex', alignItems: 'center', padding: '16px 36px', fontSize: 16, fontWeight: 700, textTransform: 'uppercase', borderRadius: 12, background: 'rgba(255,255,255,0.05)', color: '#6b6b80', border: '1px solid rgba(255,255,255,0.06)' }}>Coming Soon</span>
          )}
        </div>
      </Section>

      <Disclaimer />
    </>
  )
}
