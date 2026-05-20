'use client'

import { useEffect, useState, useCallback, ReactNode } from 'react'

export interface LightboxImage {
  src: string
  caption?: string
  alt?: string
}

interface LightboxProps {
  images: LightboxImage[]
  /** Render prop for each thumbnail — gets the image + an onOpen handler */
  children: (img: LightboxImage, openHandler: () => void) => ReactNode
}

/**
 * Click-to-zoom gallery. Renders thumbnails via render prop so the layout
 * stays flexible. Supports arrow keys, ESC, and click-outside to close.
 */
export default function Lightbox({ images, children }: LightboxProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const close = useCallback(() => setOpenIdx(null), [])
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  )
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length],
  )

  useEffect(() => {
    if (openIdx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIdx, close, next, prev])

  return (
    <>
      {images.map((img, i) => (
        <div key={img.src}>{children(img, () => setOpenIdx(i))}</div>
      ))}

      {openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(8,8,14,0.92)',
            backdropFilter: 'blur(20px)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            animation: 'lightboxFade 0.2s ease',
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous image"
            style={navBtnStyle('left')}
          >‹</button>

          <figure
            onClick={(e) => e.stopPropagation()}
            style={{
              margin: 0,
              maxWidth: 'min(1100px, 95vw)',
              maxHeight: '92vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <img
              src={images[openIdx].src}
              alt={images[openIdx].alt || images[openIdx].caption || ''}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: 12,
                boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
              }}
            />
            {images[openIdx].caption && (
              <figcaption style={{ color: '#a0a0b8', fontSize: 14, textAlign: 'center', maxWidth: 700 }}>
                {images[openIdx].caption}
              </figcaption>
            )}
          </figure>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next image"
            style={navBtnStyle('right')}
          >›</button>

          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 18,
              right: 22,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              width: 40,
              height: 40,
              borderRadius: 999,
              fontSize: 20,
              cursor: 'pointer',
            }}
          >✕</button>
        </div>
      )}
    </>
  )
}

function navBtnStyle(side: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute',
    [side]: 24,
    top: '50%',
    transform: 'translateY(-50%)',
    width: 52,
    height: 52,
    borderRadius: 999,
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff',
    fontSize: 28,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
  }
}
