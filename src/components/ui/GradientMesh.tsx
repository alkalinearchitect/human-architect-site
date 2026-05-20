'use client'

import { useEffect, useRef } from 'react'

/**
 * Animated radial gradient mesh background. Three blurred blobs drift slowly
 * with sine-wave motion. Pure CSS animation, no canvas. Respects
 * prefers-reduced-motion (becomes static).
 *
 * Use as an absolutely-positioned background inside a relatively-positioned
 * parent. The colors pick up the site's gold + teal + purple tokens.
 */
export default function GradientMesh({ intensity = 1 }: { intensity?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const dt = (t - start) / 1000
      el.style.setProperty('--mx1', `${50 + Math.sin(dt * 0.18) * 22}%`)
      el.style.setProperty('--my1', `${30 + Math.cos(dt * 0.13) * 12}%`)
      el.style.setProperty('--mx2', `${70 + Math.cos(dt * 0.21) * 20}%`)
      el.style.setProperty('--my2', `${70 + Math.sin(dt * 0.16) * 14}%`)
      el.style.setProperty('--mx3', `${30 + Math.sin(dt * 0.11) * 24}%`)
      el.style.setProperty('--my3', `${80 + Math.cos(dt * 0.19) * 10}%`)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const a = (v: number) => Math.min(Math.max(v, 0), 1)
  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
        ['--mx1' as string]: '50%',
        ['--my1' as string]: '30%',
        ['--mx2' as string]: '70%',
        ['--my2' as string]: '70%',
        ['--mx3' as string]: '30%',
        ['--my3' as string]: '80%',
        background: `
          radial-gradient(700px circle at var(--mx1) var(--my1), rgba(212,168,83,${a(0.18 * intensity)}) 0%, transparent 60%),
          radial-gradient(600px circle at var(--mx2) var(--my2), rgba(45,212,191,${a(0.12 * intensity)}) 0%, transparent 55%),
          radial-gradient(500px circle at var(--mx3) var(--my3), rgba(167,139,250,${a(0.10 * intensity)}) 0%, transparent 60%)
        `,
        filter: 'blur(40px)',
        transform: 'translateZ(0)',
      }}
    />
  )
}
