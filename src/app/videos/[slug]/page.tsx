import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Disclaimer from '@/components/ui/Disclaimer'
import { videos } from '@/data/videos'
import { books } from '@/data/books'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const video = videos.find((v) => v.slug === slug)
  if (!video) return { title: 'Video Not Found' }
  return {
    title: `${video.title} — Human Architect`,
    description: video.description,
  }
}

export async function generateStaticParams() {
  return videos.map((video) => ({ slug: video.slug }))
}

export default async function VideoPage({ params }: Props) {
  const { slug } = await params
  const video = videos.find((v) => v.slug === slug)
  if (!video) notFound()

  const relatedBook = video.bookSlug
    ? books.find((b) => b.slug === video.bookSlug)
    : null

  return (
    <>
      {/* CINEMATIC HERO WITH VIDEO PLAYER */}
      <section
        style={{
          padding: '100px 24px 0',
          position: 'relative',
          overflow: 'hidden',
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(212,168,83,0.08) 0%, transparent 60%)',
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          {/* Back link */}
          <a
            href="/videos"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: '#6b6b80',
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              marginBottom: 24,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = '#a78bfa')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = '#6b6b80')
            }
          >
            ← All Videos
          </a>

          {/* Video Player — Portrait 464x848 */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 464,
              margin: '0 auto',
              aspectRatio: '464/848',
              borderRadius: 20,
              overflow: 'hidden',
              background: '#000',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow:
                '0 0 80px rgba(212,168,83,0.1), 0 30px 60px rgba(0,0,0,0.5)',
            }}
          >
            <video
              controls
              playsInline
              preload="metadata"
              poster={video.thumbnail}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            >
              <source src={video.videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video info below player */}
          <div
            style={{
              padding: '32px 0 48px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '4px 14px',
                borderRadius: 20,
                background: 'rgba(212,168,83,0.1)',
                color: '#a78bfa',
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 1.5,
                marginBottom: 16,
                border: '1px solid rgba(212,168,83,0.12)',
              }}
            >
              ▶ {video.duration}
            </div>
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 12,
              }}
            >
              {video.title}
            </h1>
            <p
              style={{
                fontSize: 18,
                color: '#a78bfa',
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              {video.tagline}
            </p>
            <p
              style={{
                fontSize: 15,
                color: '#6b6b80',
                maxWidth: 600,
                margin: '0 auto 24px',
                lineHeight: 1.7,
              }}
            >
              {video.description}
            </p>

            {/* Themes */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                justifyContent: 'center',
                marginBottom: 28,
              }}
            >
              {video.themes.map((theme) => (
                <span
                  key={theme}
                  style={{
                    fontSize: 10,
                    padding: '4px 12px',
                    borderRadius: 4,
                    background: 'rgba(45,212,191,0.1)',
                    color: '#2dd4bf',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                  }}
                >
                  {theme}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              style={{
                display: 'flex',
                gap: 14,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {relatedBook && (
                <Button
                  href={`/books/${relatedBook.slug}`}
                  variant="primary"
                  size="lg"
                >
                  Get the Book →
                </Button>
              )}
              <Button href="/videos" variant="secondary" size="lg">
                All Videos
              </Button>
            </div>
          </div>
        </div>

        {/* Fade to page background */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            background: 'linear-gradient(to top, #0a0a0f, transparent)',
            pointerEvents: 'none',
          }}
        />
      </section>

      {/* LONG DESCRIPTION */}
      <Section dark>
        <div
          style={{
            maxWidth: 750,
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            About This{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #c4b5fd, #2dd4bf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Experience
            </span>
          </h2>
          <p
            style={{
              color: '#a0a0b8',
              lineHeight: 1.8,
              fontSize: 16,
            }}
          >
            {video.longDescription}
          </p>
        </div>
      </Section>

      {/* WHO THIS IS FOR */}
      <Section>
        <div
          style={{
            maxWidth: 750,
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            Who This Is{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #c4b5fd, #2dd4bf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              For
            </span>
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {video.whoFor.map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  marginBottom: 14,
                  color: '#a0a0b8',
                  lineHeight: 1.7,
                  fontSize: 15,
                }}
              >
                <span style={{ color: '#a78bfa', fontSize: 18 }}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* PULL QUOTES */}
      {video.pullQuotes && video.pullQuotes.length > 0 && (
        <Section dark>
          <div
            style={{
              maxWidth: 900,
              margin: '0 auto',
              display: 'grid',
              gap: 28,
            }}
          >
            {video.pullQuotes.map((q, i) => (
              <blockquote
                key={i}
                style={{
                  margin: 0,
                  padding: '36px 40px',
                  borderLeft: '3px solid #a78bfa',
                  background:
                    'linear-gradient(135deg, rgba(212,168,83,0.05), rgba(45,212,191,0.03))',
                  borderRadius: 12,
                  color: '#e8e8f0',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                  lineHeight: 1.5,
                  fontWeight: 600,
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{q.text}&rdquo;
                {q.source && (
                  <div
                    style={{
                      marginTop: 12,
                      fontSize: 13,
                      color: '#a78bfa',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                    }}
                  >
                    — {q.source}
                  </div>
                )}
              </blockquote>
            ))}
          </div>
        </Section>
      )}

      {/* BOOK CTA — if related book exists */}
      {relatedBook && (
        <Section>
          <div
            style={{
              maxWidth: 900,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              gap: 40,
              alignItems: 'center',
              background: '#161628',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20,
              padding: 40,
            }}
          >
            {/* Book cover */}
            <div
              style={{
                width: '100%',
                aspectRatio: '3/4',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                background: '#141420',
              }}
            >
              <img
                src={relatedBook.coverImage}
                alt={relatedBook.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 1.5,
                  color: '#a78bfa',
                  marginBottom: 8,
                }}
              >
                Companion Book
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 800,
                  marginBottom: 8,
                }}
              >
                {relatedBook.title}
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: '#a78bfa',
                  fontWeight: 600,
                  marginBottom: 12,
                }}
              >
                {relatedBook.tagline}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: '#6b6b80',
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {relatedBook.description.slice(0, 200)}...
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {relatedBook.status === 'published' ? (
                  <a
                    href={relatedBook.paymentLink}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '12px 24px',
                      fontSize: 13,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      borderRadius: 12,
                      background: 'linear-gradient(135deg, #a78bfa, #6d4ed8)',
                      color: '#000',
                      textDecoration: 'none',
                    }}
                  >
                    Get the Book →
                  </a>
                ) : (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '12px 24px',
                      fontSize: 13,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      borderRadius: 12,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#6b6b80',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    Coming Soon
                  </span>
                )}
                <Button
                  href={`/books/${relatedBook.slug}`}
                  variant="outline"
                  size="md"
                >
                  View Book
                </Button>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* FINAL CTA */}
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
            Ready to{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #c4b5fd, #2dd4bf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Rebuild
            </span>
            ?
          </h2>
          <p
            style={{
              color: '#a0a0b8',
              lineHeight: 1.7,
              marginBottom: 32,
              fontSize: 16,
            }}
          >
            This is for people who are ready to take personal responsibility for their body, habits, environment, and discipline. Not for everyone. For the few who refuse to decay quietly.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Button href="/work-with-me" variant="primary" size="lg">
              Apply For 1:1
            </Button>
            <Button href="/books" variant="secondary" size="lg">
              Explore The Books
            </Button>
          </div>
        </div>
      </Section>

      <Disclaimer />
    </>
  )
}
