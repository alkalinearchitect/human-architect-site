'use client'

import { ReactNode, useRef } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  className?: string
  style?: React.CSSProperties
  /** How strongly the element follows the cursor (px at edge). Default 12. */
  strength?: number
}

/**
 * Element that gently tracks the cursor when within its bounds. Adds a tactile
 * feel to primary CTAs. Disabled under prefers-reduced-motion.
 */
export default function MagneticButton({
  children, href, className, style, strength = 12,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null)

  const onMove = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`
  }
  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = ''
  }

  const common = {
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    className,
    style: { display: 'inline-block', transition: 'transform 0.18s ease', ...style },
  } as const

  if (href) {
    return (
      <a ref={(el) => { ref.current = el as HTMLAnchorElement }} href={href} {...common}>{children}</a>
    )
  }
  return (
    <button ref={(el) => { ref.current = el as HTMLButtonElement }} {...common}>{children}</button>
  )
}
