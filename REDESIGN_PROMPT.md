# Copy-Paste Redesign Prompt

Hand this prompt to Claude / GPT-5 / v0 / Lovable / Cursor / Bolt to regenerate the site to the same spec I just built. It's self-contained — paste it and a description of your content, you'll get a comparable result.

---

> Redesign my one-page marketing site as a single self-contained `index.html` file. No build step. No frameworks.
>
> **Brand**: Human Architect — a body/mind/lifestyle philosophy for men who want to detoxify, rebuild, and master themselves. Authors of 5 books on alkaline diet, parasites, semen retention, porn recovery, and intelligent design. Tone: stoic, direct, no-fluff, masculine, philosophical. Audience: men 22-45 who lift, read Marcus Aurelius, distrust mainstream medicine, want sovereignty.
>
> **Visual direction**: modernist health manifesto, NOT dark-purple SaaS template. Warm dark background (#0d0a08, paper-grain noise overlay at 4% opacity). Single accent oxblood (#b54a2b) + warm gold (#d4a853) for accents. Serif display font (Fraunces variable) paired with Inter body. Generous whitespace. Bold typographic hierarchy. Subtle film-grain texture.
>
> **Layout & sections (in order)**:
> 1. Fixed glass-blur nav with logo, 6 anchor links, primary CTA "Start Now".
> 2. Hero — full-bleed, ~92vh. Headline with kinetic typography: "You Are Not [Broken]." where the bracketed word morphs every 3s through ["Broken", "Obstructed", "Asleep"]. Below: one-sentence pitch. Two CTAs (primary "Explore the Books", ghost "Read the Philosophy"). Subtle scroll-cue arrow at bottom.
> 3. Marquee ticker — slow horizontal infinite scroll of brand values: "Detoxify · Rebuild · Master · Sovereignty · Discipline · Terrain · Body · Mind · Lifestyle" — separated by a small symbol.
> 4. Stats row — 4 columns: 5 books / 840+ pages / 125 recipes / 7 protocols. Numbers count up from 0 when entering viewport (~1.5s). On mobile, 2×2 grid.
> 5. Founder block — photo on left (circular, 140px, 2px ring in accent), bio on right.
> 6. Manifesto — full-width quote on warm-dark band, italic serif, max 680px center.
> 7. Three Pillars — 3 cards (Detoxify / Rebuild / Master Yourself). Each gets a DISTINCT hand-drawn-style SVG icon (water droplet / interconnected nodes / key). Stagger reveal.
> 8. Sticky deep-dive — left column pins while right column scrolls through 3 protocol explanations. Apple-iPhone-product-page style.
> 9. Books showcase — horizontal infinite marquee of book covers at top (~200px tall, image cards). Below: explicit interactive grid of all 5 books with: cover, title, tag, 2-line description, tag pills, "Preview Book" outline button. Cover hover = subtle scale 1.04 + accent border. Use `public/books/<slug>.png` (real images) first, fallback to placeholder.
> 10. Protocols grid — 4 cards in 2×2 (Hydration First / Tongue Test / Dry Brushing / Fruit Before Noon). Compact, clean.
> 11. Testimonials — 3 cards in a row with italic quotes and attribution.
> 12. Big CTA panel — "Ready to Rebuild?" centered, soft accent-tinted gradient background.
> 13. Newsletter — Substack iframe embed for slug `humanarchitect8`. NOT a fake form.
> 14. Subtle disclaimer card (muted, NOT red — looks like a legal note, not an error).
> 15. Footer — 4 columns (brand / Explore / Connect / Legal), copyright line. Substack, Instagram (`humanarchitect_`), email links.
>
> **Animation principles**:
> - GSAP via CDN (`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js` + ScrollTrigger).
> - All animations respect `prefers-reduced-motion: reduce` (set transition to 0.01ms).
> - Hero text: word-by-word stagger fade-up (0.6s each, 0.08s offset).
> - "[Broken]" word: morph-in/morph-out every 3s, blur+y-shift transition.
> - Stat numbers: count-up using GSAP ticker, 1.5s duration, ease "power2.out".
> - Pillar cards: stagger reveal, y: 40, opacity: 0 → 1, 0.6s each, 0.15s offset.
> - Sticky deep-dive: ScrollTrigger pin left column, swap right content at progress thresholds 0.33 / 0.66.
> - Book marquee: CSS animation `marquee 40s linear infinite`, pause on hover.
> - Cursor: 24px circular outline that follows mouse, scales to 48px solid on hover targets (only render if `pointer: fine`).
>
> **Typography spec**:
> - Display: Fraunces variable (300, 500, 700) — use for h1, h2, manifesto quote, stat numbers.
> - Body: Inter (400, 500, 600) — everything else.
> - Letter-spacing: `-0.04em` on display, `-0.01em` on body.
> - Line-height: `1.0` on display, `1.6` on body.
>
> **Color spec**:
> ```
> --bg:        #0d0a08   (warm near-black)
> --bg2:       #14100c   (slight elevation)
> --surface:   #1c1814
> --paper:     #f5efe6   (light text)
> --paper2:    #c4b8a8   (muted text)
> --paper3:    #8a7f73   (subtle text)
> --oxblood:   #b54a2b   (primary accent)
> --oxblood-h: #d65a35   (hover)
> --gold:      #d4a853   (secondary accent)
> --border:    rgba(245,239,230,0.08)
> --border2:   rgba(245,239,230,0.18)
> ```
>
> **Responsive**: mobile-first, breakpoints at 540, 768, 1024px. Burger menu opens FULL-SCREEN overlay with staggered link reveal (transform: translateY).
>
> **Performance**: lazy-load all images below the fold, system font fallbacks, GSAP loads `defer`, hero <100KB.
>
> **Accessibility**: skip-to-content link, focus-visible outlines in accent color, all SVGs have `aria-hidden` or labels, color contrast WCAG AA.
>
> **Do NOT**:
> - Use any third-party placeholder service (via.placeholder.com etc.).
> - Use any framework or build step.
> - Use Tailwind.
> - Use icons from Material Symbols / Heroicons — draw custom SVGs.
> - Add tracking pixels, GA, Hotjar.
> - Add a fake newsletter form that doesn't actually submit.
>
> Output the complete `index.html` file, ready to drop in.

---

That's it. Paste that into any AI coding tool with your content. You'll get something close to what I just built.
