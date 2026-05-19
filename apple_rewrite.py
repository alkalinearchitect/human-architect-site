import sys

def run():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. CSS REWRITE
    # Find the block starting at `.bgrid{` and ending before `.preview-grid{`
    css_start = content.find('.bgrid{')
    css_end = content.find('.preview-grid{')
    
    apple_css = """/* Apple-Style Books Layout */
.apple-book-section { display: flex; flex-direction: column; gap: 20vh; margin-top: 10vh; padding-bottom: 20vh; }
.apple-book { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 8vw; min-height: 80vh; cursor: pointer; position: relative; }
.apple-book:nth-child(even) { grid-template-columns: 1fr 1fr; direction: rtl; }
.apple-book:nth-child(even) > * { direction: ltr; }
.apple-book-img-wrapper { position: sticky; top: 15vh; height: 70vh; display: flex; justify-content: center; align-items: center; }
.apple-book-img { max-height: 100%; max-width: 100%; object-fit: contain; border-radius: var(--r2); box-shadow: 0 30px 80px rgba(0,0,0,0.8); transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
.apple-book:hover .apple-book-img { transform: scale(1.03); box-shadow: 0 40px 100px rgba(220,180,120,0.15); }
.apple-book-info { display: flex; flex-direction: column; justify-content: center; z-index: 2; }
.apple-book-info h3 { font-size: clamp(3rem, 5vw, 6rem); letter-spacing: -0.04em; margin-bottom: 16px; line-height: 1.05; background: linear-gradient(135deg, #fff 0%, #888 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 400; }
.apple-book-info .tag { font-size: 11px; color: var(--accent); text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 32px; font-weight: 600; }
.apple-book-info p { font-size: clamp(1rem, 1.2vw, 1.2rem); color: var(--paper2); line-height: 1.6; max-width: 440px; margin-bottom: 40px; }
.apple-btn { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 18px 40px; border-radius: 40px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; display: inline-flex; align-items: center; gap: 12px; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; align-self: flex-start; text-decoration: none; }
.apple-btn:hover { background: #fff; color: #000; border-color: #fff; transform: scale(1.02); }
@media(max-width: 900px) {
  .apple-book, .apple-book:nth-child(even) { grid-template-columns: 1fr; direction: ltr; text-align: center; gap: 40px; min-height: auto; }
  .apple-book-img-wrapper { position: relative; top: 0; height: auto; margin-bottom: 20px; }
  .apple-btn { align-self: center; }
  .apple-book-info p { margin-left: auto; margin-right: auto; }
}
"""
    if css_start != -1 and css_end != -1:
        content = content[:css_start] + apple_css + content[css_end:]

    # 2. HERO REWRITE
    hero_start = content.find('<section class="hero" id="hero"')
    hero_end = content.find('</section>', hero_start) + 10
    
    apple_hero = """<section class="hero" id="hero" style="position:relative; overflow:hidden; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
  <div class="hero-aura"></div>
  <div class="hero-aura-2"></div>
  <div class="macro-type">ARCHITECT</div>
  <div class="hc" style="position:relative; z-index:2; text-align: center; padding-top: 10vh;">
    <div class="glass-badge reveal reveal-up"><div class="dot"></div>System Status: Online</div>
    <h1 class="reveal reveal-up delay-1" style="font-size: clamp(3rem, 8vw, 7rem); margin-bottom:24px; line-height: 0.95; letter-spacing: -0.04em;">
      Built to be dangerous.<br>
      <span class="illuminate">Poisoned by design.</span>
    </h1>
    <p class="reveal reveal-up delay-2" style="font-size: clamp(1.2rem, 2vw, 1.5rem); color: var(--paper2); max-width: 600px; margin-left: auto; margin-right: auto; margin-bottom: 60px; font-weight: 300;">Remove the interference. Rebuild the machine.</p>
    <div class="ctas reveal reveal-up delay-3" style="display: flex; justify-content: center; gap: 20px;">
      <a href="#books" class="apple-btn" style="background: #fff; color: #000;"><span>Get The Books</span><span class="arrow">→</span></a>
      <a href="#about" class="apple-btn">The Method</a>
    </div>
  </div>
</section>"""
    
    if hero_start != -1:
        content = content[:hero_start] + apple_hero + content[hero_end:]

    # 3. ABOUT REWRITE
    about_start = content.find('<section class="sec sec2" id="about">')
    about_end = content.find('</section>', about_start) + 10
    
    apple_about = """<section class="sec sec2" id="about" style="padding: 20vh 0; border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05);">
  <div class="wrap">
    <div class="manifesto reveal reveal-up" style="text-align: center;">
      <h2 style="font-size: clamp(2.5rem, 5vw, 5rem); letter-spacing: -0.04em; line-height: 1.1; margin-bottom: 40px; font-weight: 400;">
        The body is architecture.<br>
        The mind is the blueprint.<br>
        <span class="illuminate" style="font-style: italic;">Detoxification is the removal of interference.</span>
      </h2>
      
      <!-- AEO & GEO Semantic Injection -->
      <div class="manifesto-aeo reveal reveal-up delay-2" style="margin-top: 80px; text-align: left; max-width: 800px; margin-left: auto; margin-right: auto; padding: 40px; background: rgba(255,255,255,0.02); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.05); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
        <h3 style="font-family: var(--serif); font-size: clamp(24px, 3vw, 32px); color: var(--paper); margin-bottom: 24px; font-weight: 300;">Conscious Biology. Science of the Mind.</h3>
        <p style="color: var(--paper2); font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Human Architect operates at the absolute intersection of <strong>alternative health</strong>, physical regeneration, and <strong>spirituality</strong>. We don't treat symptoms. We rebuild the biological terrain. The <em>conscious biology of the body</em> dictates that every cell possesses innate intelligence. When you clear the obstruction—parasites, mucus, and synthetic toxins—you unleash this intelligence.
        </p>
        <p style="color: var(--paper2); font-size: 16px; line-height: 1.8;">
          True <strong>wellness and healing</strong> is impossible without the <em>Science of the Mind</em>. By combining the <strong>alkaline diet</strong>, semen retention, and the HALT protocol, we rewire dopaminergic pathways to create unbreakable mental architecture. This is the definitive protocol for human regeneration.
        </p>
      </div>
    </div>
  </div>
</section>"""
    if about_start != -1:
        content = content[:about_start] + apple_about + content[about_end:]

    # 4. BOOKS REWRITE
    books_start = content.find('<section class="sec" id="books">')
    books_end = content.find('</section>', books_start) + 10
    
    apple_books = """<section class="sec" id="books" style="padding-top: 15vh;">
  <div class="wrap">
    <div class="sh reveal reveal-up" style="text-align: center; margin-bottom: 10vh;">
      <span class="eyebrow" style="margin-bottom: 24px;">The Library</span>
      <h2 style="font-size: clamp(3rem, 6vw, 6rem); letter-spacing: -0.04em;">Five manuals. <span class="illuminate">One protocol.</span></h2>
      <p style="font-size: 1.25rem; color: var(--paper2); max-width: 500px; margin: 24px auto 0;">Zero excuses. Written from experience, not theory.</p>
    </div>
    
    <div class="apple-book-section">
      <!-- ID -->
      <div class="apple-book bc reveal reveal-up" data-book="id" role="button" tabindex="0">
        <div class="apple-book-img-wrapper">
          <img src="public/book-covers/intelligent-design.webp" alt="Intelligent Design" class="apple-book-img" loading="lazy">
        </div>
        <div class="apple-book-info">
          <div class="tag">The Architecture of Creation</div>
          <h3>Intelligent<br>Design</h3>
          <p>Life was engineered. Not random. Not accidental. 204 pages of evidence that every cell in your body is proof of design.</p>
          <span class="apple-btn">View Protocol</span>
        </div>
      </div>

      <!-- AA -->
      <div class="apple-book bc reveal reveal-up" data-book="aa" role="button" tabindex="0">
        <div class="apple-book-img-wrapper">
          <img src="public/book-covers/alkaline-awakening.webp" alt="Alkaline Awakening" class="apple-book-img" loading="lazy">
        </div>
        <div class="apple-book-info">
          <div class="tag">Detoxification · Terrain · Circulation</div>
          <h3>Alkaline<br>Awakening</h3>
          <p>Your blood is acidic. Your terrain is toxic. 357 pages. 125+ recipes. The complete Alkaline Architect protocol.</p>
          <span class="apple-btn">View Protocol</span>
        </div>
      </div>

      <!-- PC -->
      <div class="apple-book bc reveal reveal-up" data-book="pc" role="button" tabindex="0">
        <div class="apple-book-img-wrapper">
          <img src="public/books/parasite-conspiracy.png" alt="Parasite Conspiracy" class="apple-book-img" loading="lazy">
        </div>
        <div class="apple-book-info">
          <div class="tag">Hidden Burdens · Awareness</div>
          <h3>Parasite<br>Conspiracy</h3>
          <p>Something is living inside you. Feeding. Hiding. This book names it — then gives you the protocol to remove it.</p>
          <span class="apple-btn">View Protocol</span>
        </div>
      </div>

      <!-- LFE -->
      <div class="apple-book bc reveal reveal-up" data-book="lfe" role="button" tabindex="0">
        <div class="apple-book-img-wrapper">
          <img src="public/book-covers/life-force-energy.webp" alt="Life Force Energy" class="apple-book-img" loading="lazy">
        </div>
        <div class="apple-book-info">
          <div class="tag">Retention · Discipline · Sovereignty</div>
          <h3>Life Force<br>Energy</h3>
          <p>Your most powerful energy is leaking. Every day. 163 pages on how to stop the leak, redirect the current, and become dangerous.</p>
          <span class="apple-btn">View Protocol</span>
        </div>
      </div>

      <!-- QPN -->
      <div class="apple-book bc reveal reveal-up" data-book="qpn" role="button" tabindex="0">
        <div class="apple-book-img-wrapper">
          <img src="public/books/quit-prn-manual.png" alt="Quit PRN Manual" class="apple-book-img" loading="lazy">
        </div>
        <div class="apple-book-info">
          <div class="tag">Recovery · Reboot · Freedom</div>
          <h3>Quit PRN<br>Manual</h3>
          <p>You know what it's doing to you. You keep doing it anyway. This is the manual that breaks the cycle. No excuses.</p>
          <span class="apple-btn">View Protocol</span>
        </div>
      </div>
    </div>
  </div>
</section>"""
    if books_start != -1:
        content = content[:books_start] + apple_books + content[books_end:]

    # 5. JS REWRITE (Fixing the bindings inside DOMContentLoaded)
    js_start = content.find('// Lightbox')
    js_end = content.find('// Apple-Level Scroll Animations')
    
    apple_js = """document.addEventListener('DOMContentLoaded', function() {
  // Lightbox
  var lightbox=document.getElementById('lightbox'),lbImg=document.getElementById('lightbox-img'),lbClose=document.getElementById('lightbox-close');
  document.querySelectorAll('.page-prev').forEach(function(el){
    el.addEventListener('click',function(){
      var full=el.getAttribute('data-full');
      if(full&&lbImg){lbImg.src=full;lightbox.classList.add('open');document.body.style.overflow='hidden'}
    });
    el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click()}});
  });
  if(lbClose)lbClose.addEventListener('click',function(){lightbox.classList.remove('open');document.body.style.overflow=''});
  if(lightbox)lightbox.addEventListener('click',function(e){if(e.target===lightbox){lightbox.classList.remove('open');document.body.style.overflow=''}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lightbox.classList.contains('open')){lightbox.classList.remove('open');document.body.style.overflow=''}});

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click',function(){
      var item=btn.parentElement,open=item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open');i.querySelector('.faq-q').setAttribute('aria-expanded','false')});
      if(!open){item.classList.add('open');btn.setAttribute('aria-expanded','true')}
    });
  });

  // Book modals
  var books={
    id:{title:'Intelligent Design',tag:'The Architecture of Creation',pages:'204',desc:'Life was engineered. Not random. Not accidental. 204 pages of evidence that every cell in your body is proof of design. The complexity of a single cell exceeds anything human engineering has ever produced. The code is real. The programmer is not random.',img:'public/books/intelligent-design.png',amazon:'https://www.amazon.com/dp/B0F9F2K8SW'},
    aa:{title:'Alkaline Awakening',tag:'Detoxification · Terrain · Circulation',pages:'357',recipes:'125+',desc:'Your blood is acidic. Your terrain is toxic. 357 pages. 125+ recipes. The complete Alkaline Architect protocol — start tonight. This is the foundational detox system of Human Architect. Every recipe is designed to reduce blood acidity, clear mucus, and restore proper circulation.',img:'public/books/alkaline-awakening.png',amazon:'https://www.amazon.com/dp/B0F9F3JXQ4'},
    pc:{title:'Parasite Conspiracy',tag:'Hidden Burdens · Awareness',pages:'70',desc:'Something is living inside you. Feeding. Hiding. This book names it — then gives you the protocol to remove it. A systematic guide to identifying, eliminating, and preventing parasitic colonization. You cannot detoxify a body that is actively being fed on.',img:'public/books/parasite-conspiracy.png',amazon:'https://www.amazon.com/dp/B0F9F4NQZR'},
    lfe:{title:'Life Force Energy',tag:'Retention · Discipline · Sovereignty',pages:'163',desc:'Your most powerful energy is leaking. Every day. 163 pages on how to stop the leak, redirect the current, and become dangerous. The definitive guide to semen retention, energy conservation, and masculine sovereignty. The 90-day Life Force Energy protocol.',img:'public/books/life-force-energy.png',amazon:'https://www.amazon.com/dp/B0F9F5VWP2'},
    qpn:{title:'Quit PRN Manual',tag:'Recovery · Reboot · Freedom',pages:'44',desc:'You know what it\\'s doing to you. You keep doing it anyway. This is the manual that breaks the cycle. No excuses. A complete system for eliminating porn from your life permanently. The 21-day reboot protocol that rewires triggers and reshapes your environment.',img:'public/books/quit-prn-manual.png',amazon:'https://www.amazon.com/dp/B0F9F6BQY8'}
  };

  var overlay=document.getElementById('bookModal');
  if(!overlay) {
    overlay=document.createElement('div');overlay.className='modal-overlay';overlay.id='bookModal';
    overlay.innerHTML='<div class="modal"><button class="modal-close" aria-label="Close">Close ✕</button><div class="modal-cover"><div class="modal-cover-img"><img id="mImg" src="" alt="" loading="lazy"></div><div class="modal-cover-info"><div class="tag" id="mTag"></div><h2 id="mTitle"></h2><div class="modal-stats"><div class="modal-stat"><div class="num" id="mPages"></div><div class="label">Pages</div></div><div class="modal-stat" id="mRecipesWrap" style="display:none"><div class="num" id="mRecipes"></div><div class="label">Recipes</div></div></div><p id="mDesc"></p><div class="modal-buy"><a id="mAmazon" href="#" class="btn bp" target="_blank" rel="noopener">Get This Book <span class="arrow">→</span></a><a href="#newsletter" class="btn bg">Read Free</a></div></div></div><div class="modal-body"><div class="modal-section"><h3>About this book</h3><p id="mDesc2"></p></div><div class="modal-section"><h3>Related Books</h3><div class="modal-related" id="mRelated"></div></div></div></div>';
    document.body.appendChild(overlay);
  }

  function openModal(key){
    var b=books[key];if(!b)return;
    document.getElementById('mImg').src=b.img;
    document.getElementById('mImg').alt=b.title+' by Tyson Architect';
    document.getElementById('mTag').textContent=b.tag;
    document.getElementById('mTitle').textContent=b.title;
    document.getElementById('mPages').textContent=b.pages;
    document.getElementById('mDesc').textContent=b.desc;
    document.getElementById('mDesc2').textContent=b.desc;
    document.getElementById('mAmazon').href=b.amazon;
    var rw=document.getElementById('mRecipesWrap');
    if(b.recipes){document.getElementById('mRecipes').textContent=b.recipes;rw.style.display='block'}else{rw.style.display='none'}
    var rel=document.getElementById('mRelated');rel.innerHTML='';
    Object.keys(books).forEach(function(k){if(k!==key){var rb=books[k];rel.innerHTML+='<a href="#" class="related-book" data-related="'+k+'"><img src="'+rb.img+'" alt="'+rb.title+'" loading="lazy"><div class="rbi" style="padding:8px;font-size:10px;color:var(--paper2)">'+rb.title+'</div></a>'}});
    overlay.classList.add('open');document.body.style.overflow='hidden';
    rel.querySelectorAll('.related-book').forEach(function(rb){rb.addEventListener('click',function(e){e.preventDefault();openModal(rb.getAttribute('data-related'))})});
  }

  document.querySelectorAll('.bc').forEach(function(bc){
    bc.addEventListener('click', function(e){
      if(e.target.closest('a')) return;
      openModal(bc.getAttribute('data-book'));
    });
  });

  overlay.addEventListener('click', function(e){
    if(e.target === overlay || e.target.classList.contains('modal-close')) {
      overlay.classList.remove('open');
      document.body.style.overflow='';
    }
  });

  // Dynamic Tabs
  document.querySelectorAll('.tab-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      var targetId=btn.getAttribute('data-target');
      document.querySelectorAll('.tab-btn').forEach(function(b){b.classList.remove('active');b.setAttribute('aria-selected','false')});
      document.querySelectorAll('.preview-panel').forEach(function(p){p.classList.remove('active')});
      btn.classList.add('active');btn.setAttribute('aria-selected','true');
      var targetPanel = document.getElementById(targetId);
      if(targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
});

"""
    if js_start != -1 and js_end != -1:
        content = content[:js_start] + apple_js + content[js_end:]


    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    run()
