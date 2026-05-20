/**
 * Subtle film-grain overlay using inline SVG turbulence. Adds organic texture
 * across the whole viewport — makes flat colors feel less digital. ~12kb,
 * fully inlined, no extra request.
 */
export default function GrainOverlay() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.045,
        mixBlendMode: 'overlay',
        backgroundImage:
          // SVG noise — 1 octave is plenty for a tasteful film grain
          'url("data:image/svg+xml;utf8,<svg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'1.2\' numOctaves=\'2\' stitchTiles=\'stitch\'/><feColorMatrix values=\'0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.55 0\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/></svg>")',
        backgroundSize: '200px 200px',
      }}
    />
  )
}
