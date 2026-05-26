import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import GrainOverlay from '@/components/ui/GrainOverlay'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Human Architect — Rebuild The Human System',
  description: 'Human Architect is a body, mind, and lifestyle philosophy for those ready to detoxify their environment, master their habits, and return to their original design.',
  openGraph: {
    title: 'Human Architect — Rebuild The Human System',
    description: 'A body, mind, and lifestyle philosophy for those ready to detoxify their environment, master their habits, and return to their original design.',
    type: 'website',
    siteName: 'Human Architect',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Human Architect — Rebuild The Human System',
    description: 'A body, mind, and lifestyle philosophy for those ready to detoxify their environment, master their habits, and return to their original design.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="bg-[#0a0a0f] text-[#f0f0f0] font-sans antialiased">
        <ScrollProgress />
        <GrainOverlay />
        <Header />
        <main>{children}</main>
        <Footer />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
              const observeAll = () => {
                document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
              };
              observeAll();
              const mo = new MutationObserver(observeAll);
              mo.observe(document.body, { childList: true, subtree: true });
              setInterval(observeAll, 1000);
              setTimeout(observeAll, 2000);
              setTimeout(observeAll, 5000);
            })();
          `
        }} />
        <noscript>
          <style dangerouslySetInnerHTML={{
            __html: '.reveal{opacity:1!important;transform:none!important}'
          }} />
        </noscript>
      </body>
    </html>
  )
}
