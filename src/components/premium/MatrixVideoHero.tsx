'use client'

import { useEffect, useRef, useState } from 'react'

export default function MatrixVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowH = window.innerHeight
      const progress = Math.min(scrollY / (windowH * 0.8), 1)
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const opacity = 1 - scrollProgress * 1.2
  const scale = 1 + scrollProgress * 0.15
  const translateY = scrollProgress * -80

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Video Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: Math.max(0, opacity),
          transform: `scale(${scale}) translateY(${translateY}px)`,
          transition: 'opacity 0.1s linear',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.4) contrast(1.1) saturate(0.8)',
          }}
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>
        {/* Fallback gradient if video doesn't load */}
        {!videoLoaded && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at 50% 30%, rgba(255,45,85,0.15) 0%, transparent 60%), linear-gradient(180deg, #0a0a0f 0%, #000 100%)',
            }}
          />
        )}
      </div>

      {/* Gradient Overlay */}
      <div
        className="hero-gradient-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '900px',
          opacity: Math.max(0, 1 - scrollProgress * 2),
          transform: `translateY(${scrollProgress * -40}px)`,
        }}
      >
        {/* Brand Mark */}
        <div
          style={{
            marginBottom: '32px',
            animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              padding: '8px 16px',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '980px',
            }}
          >
            Human Architect
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="headline-xl"
          style={{
            color: 'white',
            marginBottom: '24px',
            animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both',
          }}
        >
          Rebuild The
          <br />
          <span className="gradient-text">Human System</span>
        </h1>

        {/* Subheadline */}
        <p
          className="body-lg"
          style={{
            maxWidth: '600px',
            margin: '0 auto 48px',
            color: 'rgba(255,255,255,0.65)',
            animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both',
          }}
        >
          A body, mind, and lifestyle philosophy for those ready to
          detoxify their environment, master their habits, and return to their original design.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both',
          }}
        >
          <a href="#books" className="btn-premium btn-premium-primary">
            Explore The Library
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#manifesto" className="btn-premium btn-premium-secondary">
            The Philosophy
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: Math.max(0, 1 - scrollProgress * 3),
          animation: 'float 3s ease-in-out infinite',
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: '24px',
            height: '40px',
            border: '2px solid rgba(255,255,255,0.2)',
            borderRadius: '12px',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '3px',
              height: '8px',
              background: 'rgba(255,255,255,0.5)',
              borderRadius: '2px',
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'float 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  )
}
