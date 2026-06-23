'use client'

import { books } from '@/data/books'

export default function ProductShowcase() {
  const publishedBooks = books.filter(b => b.status === 'published')

  return (
    <section id="books" className="section-premium" style={{ background: 'var(--color-void)' }}>
      <div className="container-premium">
        {/* Section Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '100px' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '24px',
            }}
          >
            The Library
          </span>
          <h2 className="headline-lg" style={{ color: 'white', marginBottom: '20px' }}>
            Knowledge That <span className="gradient-text">Transforms</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: '560px', margin: '0 auto' }}>
            Not information. Protocols. Each book is a complete system
            for rebuilding a specific domain of your biology.
          </p>
        </div>

        {/* Book Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {publishedBooks.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BookCard({ book, index }: { book: typeof books[0]; index: number }) {
  return (
    <div
      className="reveal card-hover"
      style={{
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderRadius: '24px',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        animationDelay: `${index * 0.15}s`,
      }}
    >
      {/* Book Cover */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '4/5',
          overflow: 'hidden',
          background: 'var(--color-surface)',
        }}
      >
        <img
          src={book.coverImage}
          alt={book.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}
        />
        {/* Subtle gradient overlay on cover */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(transparent, rgba(20,20,28,0.9))',
          }}
        />
      </div>

      {/* Book Info */}
      <div style={{ padding: '32px' }}>
        <span
          style={{
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            display: 'block',
            marginBottom: '8px',
          }}
        >
          {book.tagline}
        </span>
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'white',
            marginBottom: '12px',
            letterSpacing: '-0.02em',
          }}
        >
          {book.title}
        </h3>
        <p
          className="body-md"
          style={{
            marginBottom: '24px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {book.description}
        </p>

        {/* Themes */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          {book.themes.slice(0, 3).map((theme) => (
            <span
              key={theme}
              style={{
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.05em',
                padding: '4px 10px',
                borderRadius: '980px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                color: 'var(--color-text-muted)',
              }}
            >
              {theme}
            </span>
          ))}
        </div>

        {/* Pull Quote */}
        {book.pullQuotes && book.pullQuotes[0] && (
          <blockquote
            style={{
              fontSize: '14px',
              fontStyle: 'italic',
              color: 'var(--color-text-secondary)',
              borderLeft: '2px solid var(--color-accent)',
              paddingLeft: '16px',
              marginBottom: '24px',
              lineHeight: 1.5,
            }}
          >
            &ldquo;{book.pullQuotes[0].text}&rdquo;
          </blockquote>
        )}

        {/* CTA */}
        <a
          href={book.paymentLink}
          className="btn-premium btn-premium-primary"
          style={{ width: '100%', padding: '14px 24px' }}
        >
          Get The Book
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
