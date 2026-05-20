'use client'

import { useEffect, useState } from 'react'

/**
 * Thin gold/teal gradient bar that fills along the top of the viewport as the
 * user scrolls down the page. Respects prefers-reduced-motion.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max <= 0 ? 0 : (h.scrollTop / max) * 100)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 100,
        pointerEvents: 'none',
        background: 'rgba(255,255,255,0.04)',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #a78bfa, #2dd4bf)',
          transition: 'width 0.08s linear',
          boxShadow: progress > 0 ? '0 0 12px rgba(212,168,83,0.5)' : 'none',
        }}
      />
    </div>
  )
}
