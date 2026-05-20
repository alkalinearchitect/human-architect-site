'use client'

import { ReactNode, useRef, useState } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  /** Maximum tilt angle in degrees. 8 = subtle; 14 = playful */
  max?: number
  /** Optional href — wraps the card in an anchor */
  href?: string
}

/**
 * Subtle 3D tilt-on-hover card. Tracks cursor position, rotates the card on
 * X/Y axes proportional to cursor distance from center. Auto-disables on
 * prefers-reduced-motion and on touch devices (no hover state).
 */
export default function TiltCard({ children, className = '', max = 8, href }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')
  const [highlight, setHighlight] = useState({ x: 50, y: 50, on: false })

  const reset = () => {
    setTransform('')
    setHighlight((h) => ({ ...h, on: false }))
  }

  const onMove = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.width / 2
    const cy = rect.height / 2
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const tiltX = ((y - cy) / cy) * -max
    const tiltY = ((x - cx) / cx) * max
    setTransform(`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(0)`)
    setHighlight({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, on: true })
  }

  const inner = (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={className}
      style={{
        transform,
        transition: 'transform 0.2s ease-out',
        transformStyle: 'preserve-3d',
        position: 'relative',
        willChange: 'transform',
      }}
    >
      {children}
      {/* radial highlight that follows the cursor */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          background: `radial-gradient(380px circle at ${highlight.x}% ${highlight.y}%, rgba(212,168,83,0.12), transparent 60%)`,
          opacity: highlight.on ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      />
    </div>
  )

  if (href) {
    return (
      <a href={href} style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
        {inner}
      </a>
    )
  }
  return inner
}
