import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { videos } from '@/data/videos'
import { books } from '@/data/books'

export const metadata: Metadata = {
  title: 'Videos — Human Architect',
  description:
    'Premium cinematic video experiences by Human Architect: Alkaline Awakening, Life Force Energy, and more.',
}

export default function VideosPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '140px 24px 80px',
          position: 'relative',
          overflow: 'hidden',
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(212,168,83,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(45,212,191,0.04) 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 200,
            background: 'linear-gradient(to top, #0a0a0f, transparent)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              borderRadius: 20,
              background: 'rgba(212,168,83,0.12)',
              color: '#a78bfa',
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              marginBottom: 28,
              border: '1px solid rgba(212,168,83,0.15)',
            }}
          >
            ▶ Premium Video Experience
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #c4b5fd, #2dd4bf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Cinematic
            </span>
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #c4b5fd, #2dd4bf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Protocols
            </span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#a0a0b8',
              maxWidth: 600,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Premium visual companions to the Human Architect books. Deep dives into detoxification, energy, terrain, and the architecture of human transformation.
          </p>
        </div>
      </section>

      {/* VIDEO CARDS */}
      <Section>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 32,
          }}
        >
          {videos.map((video) => {
            const relatedBook = video.bookSlug
              ? books.find((b) => b.slug === video.bookSlug)
              : null

            return (
              <div
                key={video.id}
                className="reveal"
                style={{
                  background: '#161628',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 20,
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(212,168,83,0.25)'
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(255,255,255,0.06)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Thumbnail */}
                <a
                  href={`/videos/${video.slug}`}
                  style={{ display: 'block', position: 'relative' }}
                >
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '16/9',
                      background: 'linear-gradient(135deg, #141420, #1a1a2e)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {video.thumbnail ? (
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          fontSize: 48,
                          opacity: 0.3,
                        }}
                      >
                        ▶
                      </div>
                    )}
                    {/* Play overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0,0,0,0.3)',
                        transition: 'background 0.3s',
                      }}
                    >
                      <div
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: '50%',
                          background: 'rgba(212,168,83,0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 24,
                          color: '#000',
                          boxShadow: '0 4px 20px rgba(212,168,83,0.4)',
                        }}
                      >
                        ▶
                      </div>
                    </div>
                    {/* Duration badge */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 12,
                        right: 12,
                        padding: '4px 10px',
                        borderRadius: 6,
                        background: 'rgba(0,0,0,0.75)',
                        color: '#f0f0f0',
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: 0.5,
                      }}
                    >
                      {video.duration}
                    </div>
                  </div>
                </a>

                {/* Content */}
                <div style={{ padding: 28 }}>
                  <a
                    href={`/videos/${video.slug}`}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        marginBottom: 6,
                        lineHeight: 1.2,
                      }}
                    >
                      {video.title}
                    </h3>
                  </a>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#a78bfa',
                      fontWeight: 600,
                      marginBottom: 12,
                    }}
                  >
                    {video.tagline}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: '#6b6b80',
                      lineHeight: 1.6,
                      marginBottom: 16,
                    }}
                  >
                    {video.description}
                  </p>

                  {/* Themes */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 6,
                      marginBottom: 20,
                    }}
                  >
                    {video.themes.slice(0, 3).map((theme) => (
                      <span
                        key={theme}
                        style={{
                          fontSize: 10,
                          padding: '3px 10px',
                          borderRadius: 4,
                          background: 'rgba(45,212,191,0.1)',
                          color: '#2dd4bf',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                        }}
                      >
                        {theme}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      gap: 10,
                      alignItems: 'center',
                    }}
                  >
                    <Button
                      href={`/videos/${video.slug}`}
                      variant="primary"
                      size="sm"
                    >
                      Watch Now
                    </Button>
                    {relatedBook && (
                      <Button
                        href={`/books/${relatedBook.slug}`}
                        variant="outline"
                        size="sm"
                      >
                        Get the Book
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div
          style={{
            textAlign: 'center',
            maxWidth: 700,
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            Go Deeper With{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #c4b5fd, #2dd4bf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              The Books
            </span>
          </h2>
          <p
            style={{
              color: '#a0a0b8',
              lineHeight: 1.7,
              marginBottom: 32,
              fontSize: 16,
            }}
          >
            The videos are a window. The books are the architecture. Each video has a companion book that goes deeper into the protocols, the science, and the philosophy.
          </p>
          <Button href="/books" variant="primary" size="lg">
            Explore The Books →
          </Button>
        </div>
      </Section>
    </>
  )
}
