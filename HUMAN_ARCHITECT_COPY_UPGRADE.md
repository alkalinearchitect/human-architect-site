# HUMAN ARCHITECT COPY & UI UPGRADE
## Premium Direct-Response Rewrite | Apple Clarity + Cinematic Power
Date: 2026-05-21
Source: Full audit of index.html
Brand Rules Applied: Direct. Premium. Emotionally powerful. Simple language. No fluff. No "According to the system" repetition. No hedging. Strong CTAs. Repeated visible buy buttons. Pain → Transformation → Proof → Offer → Urgency.

---

## 1. REWRITTEN HERO SECTION

**New Hero HTML (replace existing .hero section):**

```html
<section class="hero">
  <canvas id="hero-canvas" width="1400" height="900"></canvas>
  <div class="hc">
    <div class="hero-eyebrow">EST. 2022 • LONDON</div>
    <h1 id="hero-headline">
      <span class="word">YOUR</span>
      <span class="word">POWER</span>
      <span class="word">IS</span>
      <span class="word">BEING</span>
      <span class="word">STOLEN</span>
      <span class="word">EVERY</span>
      <span class="word">DAY.</span>
    </h1>
    <p class="morph" id="morph-text">You feel it in the fog. The low drive. The body that won't perform. These are not random problems. They are measurable leaks in your architecture.</p>
    
    <div class="ctas">
      <button onclick="document.getElementById('tools').scrollIntoView({behavior:'smooth'})" class="btn bp">RUN THE 60-SECOND DIAGNOSTIC <span class="arrow">→</span></button>
      <a href="https://shop.beacons.ai/alkalinearchitect/35dfea2c-5da1-46eb-8952-af717d9eaeae" target="_blank" class="btn bg">SECURE THE COMPLETE 5-BOOK SYSTEM</a>
    </div>
    <div style="margin-top:18px; font-size:11px; color:var(--paper2); letter-spacing:0.05em;">5 Books • 7 Named Protocols • 90-Day Execution Plan • Instant Access</div>
  </div>
</section>
```

**Copy Notes:** 
- Headline now direct pain: "YOUR POWER IS BEING STOLEN EVERY DAY."
- Sub: Specific symptoms + "measurable leaks" (ties to V=P-O).
- Added simple product line under CTAs for clarity.
- CTA 1: Low friction diagnostic (curiosity + value).
- CTA 2: Clear "COMPLETE 5-BOOK SYSTEM".

---

## 2. REWRITTEN PRODUCT / BOOKS SECTION

**New section header + intro (replace #books sh):**

```html
<div class="sh">
  <div class="eyebrow">THE COMPLETE SYSTEM</div>
  <h2>Five Books.<br>One Architecture.</h2>
  <p>You do not need more information. You need the exact protocols that remove what is blocking your energy, focus, and drive — then rebuild you into the man who executes without hesitation.</p>
</div>
```

**Rewritten Book Cards (shorter, benefit-first, strong CTA language):**

For each book in renderBooks() or static:

- Alkaline Awakening: "The foundation. Remove acid, mucus, and toxins from your body in 21 days. Restore clean energy and mental clarity through precise eating and detox protocols."

- Quit PRN Manual: "21-day system to kill porn addiction at the root. Rewire dopamine. Restore sexual energy and unbreakable discipline."

- Life Force Energy: "Master semen retention. Convert sexual energy into drive, magnetism, and creation. 90-day protocol that delivers measurable testosterone and vitality increases."

- Parasite Conspiracy: "Identify and eliminate the hidden parasites draining your energy. The missing piece most men never address."

- Intelligent Design: "The philosophy that makes the protocols permanent. Understand why you were built for power — and stop negotiating with weakness."

**New Product Explanation Box (insert after books-grid, before roadmap):**

```html
<div class="product-explain" style="max-width:720px; margin:40px auto 0; padding:28px; background:var(--bg3); border:1px solid var(--border); border-radius:16px; text-align:center;">
  <div style="font-size:11px; letter-spacing:0.2em; color:var(--paper2); margin-bottom:8px;">WHAT YOU ACTUALLY RECEIVE</div>
  <h3 style="font-size:21px; margin-bottom:12px;">The Human Architect 5-Book System</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px,1fr)); gap:12px; text-align:left; font-size:13px; color:var(--paper2);">
    <div>• Full Alkaline Detox &amp; Lymphatic Protocols</div>
    <div>• 21-Day Porn Elimination System</div>
    <div>• 90-Day Semen Retention &amp; Vitality Rebuild</div>
    <div>• Parasite Cleanse &amp; Prevention Guide</div>
    <div>• Intelligent Design Philosophy for Identity Shift</div>
    <div>• 7 Named Protocols (HALT, V=P-O, Circulation, etc.)</div>
    <div>• Day-by-Day 30/90 Execution Plans</div>
    <div>• All Future Protocol Updates</div>
  </div>
  <div style="margin-top:16px; font-size:12px; color:var(--accent);">One purchase. Complete architecture. No subscriptions.</div>
</div>
```

---

## 3. REWRITTEN BUTTONS (GLOBAL RULES + SPECIFICS)

**New CSS for buttons (add/replace in style):**

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px 36px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all .3s cubic-bezier(.23,1,.32,1);
  border: none;
  letter-spacing: .12em;
  text-transform: uppercase;
  border-radius: 9999px;
  min-height: 52px; /* mobile friendly */
  white-space: nowrap;
}

.bp {
  background: var(--accent);
  color: #fff;
  border: 2px solid var(--accent);
  box-shadow: 0 10px 30px var(--accent-glow);
  font-size: 12px;
}

.bp:hover {
  background: #fff;
  color: var(--accent);
  transform: translateY(-2px);
}

.bg {
  background: transparent;
  color: var(--paper);
  border: 2px solid var(--border2);
  font-size: 12px;
}

.bg:hover {
  background: var(--paper);
  color: #000;
  border-color: var(--paper);
}

/* Mobile specific */
@media (max-width: 600px) {
  .btn {
    padding: 16px 28px;
    font-size: 11px;
    min-height: 48px;
  }
  .ctas {
    flex-direction: column;
    gap: 12px;
  }
}
```

**Unified Button Language Examples:**
- Primary: "SECURE THE COMPLETE SYSTEM"
- Diagnostic: "RUN THE DIAGNOSTIC NOW"
- Book: "GET THIS BOOK + PROTOCOLS"
- Floating: "START YOUR REBUILD"
- Final: "BUY THE FULL SYSTEM — START TODAY"

All buttons now have higher contrast, larger text, better padding.

---

## 4. NEW GUARANTEE / TERMS / RISK REVERSAL SECTION

**Insert new section before final CTA or after FAQ:**

```html
<section class="sec" id="guarantee">
  <div class="wrap">
    <div style="max-width:620px; margin:0 auto; text-align:center; padding:32px 20px; background:var(--bg2); border:1px solid var(--border); border-radius:20px;">
      <div style="font-size:10px; color:var(--accent); letter-spacing:0.3em; margin-bottom:8px;">30-DAY IRONCLAD COMMITMENT</div>
      <h3 style="font-size:24px; margin-bottom:14px; letter-spacing:-0.02em;">If You Execute and See No Shift, We Return Your Investment.</h3>
      <p style="color:var(--paper2); font-size:14px; line-height:1.65; max-width:480px; margin:0 auto 18px;">Run the protocols exactly as written for 30 days. If your energy, clarity, and drive do not measurably improve, contact us. Full refund. No questions. Weakness is not tolerated — but we stand behind ruthless execution.</p>
      <div style="font-size:11px; color:var(--paper3);">Self-accountability is required. Results come from action, not purchase. This is architecture, not magic.</div>
    </div>
  </div>
</section>
```

**Update the harsh line in final CTA to positive version.**

---

## 5. REWRITTEN FOOTER

```html
<footer class="footer">
  <div class="footer-in">
    <div class="footer-copy">© 2026 Tyson Architect. Human Architect. All rights reserved.<br>Self-accountability is the price of power.</div>
    <ul class="footer-links">
      <li><a href="https://humanarchitect8.substack.com" target="_blank">SUBSTACK</a></li>
      <li><a href="https://shop.beacons.ai/alkalinearchitect/35dfea2c-5da1-46eb-8952-af717d9eaeae" target="_blank">SHOP THE SYSTEM</a></li>
      <li><a href="#tools">RUN DIAGNOSTIC</a></li>
      <li><a href="#guarantee">GUARANTEE</a></li>
    </ul>
  </div>
</footer>
```

**Add mobile-friendly styles if needed.**

---

## ADDITIONAL COPY IMPROVEMENTS (for roadmap, founder, FAQ, tools)

**Roadmap header:**
"THE 90-DAY REBUILD PATH — EXACT PHASES THAT DELIVER RESULTS"

**Founder rewrite (make more powerful):**
"I leaked power for years — through screens, food, and women. Then I stopped. These books are the precise system that took me from constant fatigue and zero drive to the strongest, clearest version of myself I have ever been. No supplements. No gurus. Only architecture you can execute."

**Tools intro:**
"Before you buy anything, know exactly where you stand. Two private instruments. No data leaves your browser."

**Diagnostic result buttons:** Change alerts to smooth modals or direct links later.

**All instances of repetitive "According to..." removed or replaced with direct statements.**

---

## NEXT: UI MOBILE IMPROVEMENTS (to be applied in code edit)

- Increase base body font to 16px
- All small text (9-11px) to minimum 12-13px where possible
- Book cards: larger titles, better spacing
- Buttons: min 48px height, high contrast
- Reduce preview images or make optional load
- Add more white space on mobile
- Ensure all CTAs stack vertically and are thumb-friendly

This copy upgrade document is the master for all rewrites. Will be used to patch the actual index.html in next phase.

All changes designed for:
- Higher conversion via clarity + repeated CTAs
- Premium feel without vagueness
- Mobile-first readability
- Low friction + strong offer explanation

Proceed to apply these to the live file after this document is finalized.