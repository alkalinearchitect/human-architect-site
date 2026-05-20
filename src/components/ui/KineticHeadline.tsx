'use client'

import { useEffect, useRef } from 'react'

interface KineticHeadlineProps {
  lines: string[]
  className?: string
}

/**
 * Headline that splits each line into words and reveals them in a staggered
 * upward sweep on mount. Each word slides up + fades in on its own delay so
 * the headline feels alive. No external dependencies.
 */
export default function KineticHeadline({ lines, className = '' }: KineticHeadlineProps) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const words = el.querySelectorAll<HTMLSpanElement>('[data-w]')
    words.forEach((w, i) => {
      w.style.transitionDelay = `${i * 60}ms`
      requestAnimationFrame(() => {
        w.style.opacity = '1'
        w.style.transform = 'translateY(0)'
      })
    })
  }, [])

  return (
    <h1 ref={ref} className={className} style={{ overflow: 'hidden' }}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block' }}>
          {line.split(' ').map((word, wi) => (
            <span
              key={`${li}-${wi}`}
              data-w
              style={{
                display: 'inline-block',
                marginRight: '0.25em',
                opacity: 0,
                transform: 'translateY(0.6em)',
                transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
                background: 'linear-gradient(135deg, #e8c97a, #2dd4bf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {word}
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}
