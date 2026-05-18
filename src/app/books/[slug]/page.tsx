import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
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
  return {
    title: `${book.title} — Human Architect`,
    description: book.description,
  }
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
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-start">
          <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--border)] shadow-[0_8px_40px_rgba(0,0,0,0.6)] bg-[var(--surface)]">
            <Image
              src={book.coverImage}
              alt={`${book.title} cover`}
              width={600}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-3">{book.title}</h1>
            <p className="text-xl text-[var(--text-muted)] mb-6">{book.tagline}</p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{book.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {book.themes.map((theme) => (
                <span key={theme} className="text-[10px] px-3 py-1 rounded bg-[var(--teal-dim)] text-[var(--teal)] font-semibold uppercase tracking-[0.5px]">{theme}</span>
              ))}
            </div>
            <div className="flex gap-4">
              {book.status === 'published' ? (
                <a href={book.paymentLink} className="inline-flex items-center px-7 py-3.5 text-sm font-bold uppercase tracking-[0.5px] rounded-xl bg-gradient-to-br from-[var(--gold)] to-[#c49a3f] text-black shadow-[0_4px_20px_rgba(212,168,83,0.25)] hover:shadow-[0_6px_30px_rgba(212,168,83,0.4)] hover:-translate-y-0.5 transition-all">Get the Book →</a>
              ) : (
                <span className="inline-flex items-center px-7 py-3.5 text-sm font-bold uppercase tracking-[0.5px] rounded-xl bg-white/5 text-[var(--text-muted)] border border-[var(--border)]">Coming Soon</span>
              )}
              <Button href="/books" variant="secondary" size="md">← All Books</Button>
            </div>
          </div>
        </div>
      </section>

      <Section dark>
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-3xl font-bold mb-6">What You Will Understand</h2>
          <ul className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            {book.whoFor.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[var(--gold)] text-lg mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="max-w-[750px] mx-auto">
          <h2 className="text-3xl font-bold mb-6">Who This Book Is For</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">This book is for people who want to go deeper than surface-level wellness. It is for people who suspect that there is more to the story — who want to understand the full picture of what affects human health and vitality.</p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">It is written as an educational exploration. It presents evidence, explores mechanisms, and provides frameworks for understanding. It does not diagnose, prescribe, or make guarantees. It empowers you with knowledge so you can make informed decisions.</p>
          <div className="text-center">
            {book.status === 'published' ? (
              <a href={book.paymentLink} className="inline-flex items-center px-9 py-4 text-base font-bold uppercase tracking-[0.5px] rounded-xl bg-gradient-to-br from-[var(--gold)] to-[#c49a3f] text-black shadow-[0_4px_20px_rgba(212,168,83,0.25)] hover:shadow-[0_6px_30px_rgba(212,168,83,0.4)] hover:-translate-y-0.5 transition-all">Get {book.title} →</a>
            ) : (
              <span className="inline-flex items-center px-9 py-4 text-base font-bold uppercase tracking-[0.5px] rounded-xl bg-white/5 text-[var(--text-muted)] border border-[var(--border)]">Coming Soon</span>
            )}
          </div>
        </div>
      </Section>

      <Disclaimer />
    </>
  )
}
