'use client'

export default function ProtocolsPreview() {
  const protocols = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Circadian Reset',
      description: 'Align your master clock. Light, temperature, and timing protocols for deep sleep and high energy.',
      color: 'var(--color-amber)',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      title: 'Semen Retention',
      description: 'The HALT protocol. Physical rewiring, mental clarity, and redirecting biological energy toward purpose.',
      color: 'var(--color-accent)',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 12c0-3 4-6 9-6s9 3 9 6-4 6-9 6-9-3-9-6z" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      ),
      title: 'Mucusless Diet',
      description: 'Clear the terrain. Foods that cleanse vs foods that clog. Complete alkaline architecture protocol.',
      color: 'var(--color-green)',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Energy Mastery',
      description: 'Breathwork, cold exposure, and HRV optimization. Train your nervous system for resilience.',
      color: 'var(--color-teal)',
    },
  ]

  return (
    <section id="protocols" className="section-premium-sm" style={{ background: 'var(--color-surface)' }}>
      <div className="container-premium">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-teal)',
              marginBottom: '24px',
            }}
          >
            The Protocols
          </span>
          <h2 className="headline-md" style={{ color: 'white', marginBottom: '16px' }}>
            Four Pillars Of Human Optimization
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}
        >
          {protocols.map((protocol, index) => (
            <ProtocolCard key={protocol.title} protocol={protocol} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProtocolCard({
  protocol,
  index,
}: {
  protocol: { icon: React.ReactNode; title: string; description: string; color: string }
  index: number
}) {
  return (
    <div
      className="reveal card-hover"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid var(--color-border)',
        borderRadius: '20px',
        padding: '36px 28px',
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '14px',
          background: `${protocol.color === 'var(--color-amber)' ? 'rgba(251,191,36,0.1)' :
            protocol.color === 'var(--color-accent)' ? 'rgba(255,45,85,0.1)' :
            protocol.color === 'var(--color-green)' ? 'rgba(52,211,153,0.1)' : 'rgba(45,212,191,0.1)'}`,
          color: protocol.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
        }}
      >
        {protocol.icon}
      </div>

      <h3
        style={{
          fontSize: '1.15rem',
          fontWeight: 600,
          color: 'white',
          marginBottom: '10px',
          letterSpacing: '-0.01em',
        }}
      >
        {protocol.title}
      </h3>

      <p
        className="body-md"
        style={{
          fontSize: '14px',
          lineHeight: 1.6,
        }}
      >
        {protocol.description}
      </p>
    </div>
  )
}
