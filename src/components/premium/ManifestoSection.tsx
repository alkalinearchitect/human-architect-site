'use client'

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="section-premium" style={{ background: 'var(--color-deep)' }}>
      <div className="container-premium">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-purple)',
              marginBottom: '32px',
            }}
          >
            The Philosophy
          </span>

          {/* Main Quote */}
          <blockquote
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
              fontWeight: 400,
              lineHeight: 1.35,
              color: 'rgba(255,255,255,0.95)',
              marginBottom: '48px',
              fontFamily: 'var(--font-playfair), Georgia, serif',
              letterSpacing: '-0.02em',
              fontStyle: 'italic',
            }}
          >
            &ldquo;You are not broken. Your environment is.
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Fix the terrain.</span>
            <br />
            The body knows what to do.&rdquo;
          </blockquote>

          {/* Divider */}
          <div
            style={{
              width: '60px',
              height: '2px',
              background: 'var(--color-accent)',
              margin: '0 auto 48px',
              borderRadius: '1px',
            }}
          />

          {/* Three Pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '48px',
              textAlign: 'left',
            }}
          >
            <Pillar
              number="01"
              title="Detoxify"
              description="Clear the internal terrain. Remove what doesn't belong — mucus, toxins, interference. The body is self-cleaning when you stop poisoning it."
            />
            <Pillar
              number="02"
              title="Rebuild"
              description="Rebuild the system from the foundation. Nutrition, circulation, energy management. Install the protocols that create resilience."
            />
            <Pillar
              number="03"
              title="Master"
              description="Master yourself. Redirect energy toward purpose. Sovereignty isn't given — it's built through daily discipline and self-accountability."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Pillar({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="reveal">
      <span
        style={{
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          color: 'var(--color-accent)',
          display: 'block',
          marginBottom: '16px',
          fontFamily: 'var(--font-mono), monospace',
        }}
      >
        {number}
      </span>
      <h3
        className="headline-md"
        style={{ color: 'white', marginBottom: '12px', fontSize: '1.75rem' }}
      >
        {title}
      </h3>
      <p className="body-md" style={{ maxWidth: '320px' }}>
        {description}
      </p>
    </div>
  )
}
