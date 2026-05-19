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

      {book.pullQuotes && book.pullQuotes.length > 0 && (
        <Section>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gap: 32 }}>
            {book.pullQuotes.map((q, i) => (
              <blockquote
                key={i}
                style={{
                  margin: 0,
                  padding: '36px 40px',
                  borderLeft: '3px solid #d4a853',
                  background: 'linear-gradient(135deg, rgba(212,168,83,0.05), rgba(45,212,191,0.03))',
                  borderRadius: 12,
                  color: '#e8e8f0',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  lineHeight: 1.4,
                  fontWeight: 600,
                  fontStyle: 'italic',
                }}
              >
                “{q.text}”
                {q.source && (
                  <div style={{ marginTop: 12, fontSize: 14, color: '#d4a853', fontStyle: 'normal', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
                    — {q.source}
                  </div>
                )}
              </blockquote>
            ))}
          </div>
        </Section>
      )}

      {book.gallery && book.gallery.length > 0 && (
        <Section dark>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, textAlign: 'center' }}>Inside the Book</h2>
            <p style={{ color: '#6b6b80', textAlign: 'center', marginBottom: 32 }}>A glimpse of what awaits inside.</p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 20,
              }}
            >
              {book.gallery.map((g) => (
                <figure
                  key={g.src}
                  style={{
                    margin: 0,
                    background: '#141420',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 16,
                    overflow: 'hidden',
                    transition: 'transform 0.3s, border-color 0.3s',
                  }}
                >
                  <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden', background: '#0a0a14' }}>
                    <img
                      src={g.src}
                      alt={g.caption}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <figcaption
                    style={{
                      padding: '14px 16px',
                      fontSize: 13,
                      color: '#a0a0b8',
                      textAlign: 'center',
                      fontWeight: 600,
                      letterSpacing: 0.3,
                    }}
                  >
                    {g.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Section>
      )}

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
