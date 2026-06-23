'use client'

export default function PremiumHeader() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 24px',
      }}
    >
      <div
        className="glass"
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          borderRadius: '980px',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#"
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.05em',
            color: 'white',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          Human Architect
        </a>

        <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a
            href="#books"
            style={{
              fontSize: '12px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              transition: 'color 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'white' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
          >
            Library
          </a>
          <a
            href="#protocols"
            style={{
              fontSize: '12px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              transition: 'color 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'white' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
          >
            Protocols
          </a>
          <a
            href="#manifesto"
            style={{
              fontSize: '12px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              transition: 'color 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'white' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
          >
            Philosophy
          </a>
        </nav>

        <a
          href="#cta"
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'white',
            textDecoration: 'none',
            padding: '8px 18px',
            borderRadius: '980px',
            background: 'var(--color-accent)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,45,85,0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Start Free
        </a>
      </div>
    </header>
  )
}
