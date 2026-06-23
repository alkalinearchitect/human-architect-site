'use client'

import { useState } from 'react'

export default function PremiumCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="section-premium" style={{ background: 'var(--color-void)' }}>
      <div className="container-premium">
        {/* CTA Card */}
        <div
          className="reveal"
          style={{
            background: 'linear-gradient(135deg, rgba(255,45,85,0.08) 0%, rgba(167,139,250,0.06) 100%)',
            border: '1px solid rgba(255,45,85,0.12)',
            borderRadius: '32px',
            padding: '80px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background glow */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(255,45,85,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

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
            Free Protocol
          </span>

          <h2
            className="headline-lg"
            style={{ color: 'white', marginBottom: '16px', position: 'relative' }}
          >
            Start The Protocol
            <br />
            <span className="gradient-text">Today</span>
          </h2>

          <p
            className="body-lg"
            style={{
              maxWidth: '480px',
              margin: '0 auto 40px',
              position: 'relative',
            }}
          >
            Get the free HALT Protocol — a 7-day system to begin detoxifying
            your environment and rebuilding your biological foundation.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                gap: '12px',
                maxWidth: '440px',
                margin: '0 auto',
                flexWrap: 'wrap',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{
                  flex: '1 1 240px',
                  padding: '16px 24px',
                  borderRadius: '980px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'white',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                }}
              />
              <button
                type="submit"
                className="btn-premium btn-premium-primary"
                style={{ padding: '16px 28px', flex: '0 0 auto' }}
              >
                Send It
              </button>
            </form>
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '16px 24px',
                background: 'rgba(52,211,153,0.08)',
                border: '1px solid rgba(52,211,153,0.2)',
                borderRadius: '980px',
                maxWidth: '360px',
                margin: '0 auto',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#34d399" strokeWidth="1.5"/>
                <path d="M6 10.5l2.5 2.5L14.5 7.5" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ color: '#34d399', fontSize: '14px', fontWeight: 500 }}>
                Check your inbox. Protocol incoming.
              </span>
            </div>
          )}

          <p
            style={{
              fontSize: '12px',
              color: 'var(--color-text-muted)',
              marginTop: '20px',
              position: 'relative',
            }}
          >
            No spam. Unsubscribe anytime. Your data is yours.
          </p>
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="section-premium-sm" style={{ background: 'var(--color-deep)' }}>
      <div className="container-premium" style={{ textAlign: 'center' }}>
        <div className="reveal">
          <h2
            className="headline-lg"
            style={{ color: 'white', marginBottom: '24px', maxWidth: '700px', margin: '0 auto 24px' }}
          >
            Sovereignty Is A Practice.
            <br />
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Start Now.</span>
          </h2>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#books" className="btn-premium btn-premium-primary">
              Browse The Library
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#protocols" className="btn-premium btn-premium-secondary">
              View Protocols
            </a>
          </div>
        </div>

        {/* Footer */}
        <div
          className="divider-subtle"
          style={{ margin: '100px 0 40px' }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <span
            style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
            }}
          >
            Human Architect
          </span>
          <span
            style={{
              fontSize: '12px',
              color: 'var(--color-text-dim)',
            }}
          >
            © {new Date().getFullYear()} All Rights Reserved
          </span>
        </div>
      </div>
    </section>
  )
}
