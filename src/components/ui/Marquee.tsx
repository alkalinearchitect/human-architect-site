'use client'

import { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  /** Seconds for one full loop. Default 40 */
  duration?: number
  /** Reverse direction */
  reverse?: boolean
  className?: string
}

/**
 * Infinite horizontal scrolling strip. Duplicates content for seamless loop.
 * Pauses on hover; respects prefers-reduced-motion.
 */
export default function Marquee({ children, duration = 40, reverse, className = '' }: MarqueeProps) {
  return (
    <div
      className={className}
      style={{
        overflow: 'hidden',
        position: 'relative',
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          gap: 48,
          paddingLeft: 24,
          paddingRight: 24,
          animation: `marquee ${duration}s linear infinite ${reverse ? 'reverse' : ''}`,
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused' }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running' }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
