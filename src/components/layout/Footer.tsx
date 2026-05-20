import Link from 'next/link'
import { navigation } from '@/data/navigation'
import { siteConfig } from '@/data/siteConfig'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="font-display text-2xl font-black gradient-text mb-4">
              {siteConfig.name}
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-[var(--text-secondary)] mb-5">
              Explore
            </h4>
            <ul className="list-none space-y-3">
              {navigation.footer.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-[var(--text-secondary)] mb-5">
              Connect
            </h4>
            <ul className="list-none space-y-3">
              {navigation.social.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-[var(--text-secondary)] mb-5">
              Legal
            </h4>
            <ul className="list-none space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--border)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--text-dim)]">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-dim)]">
            Built with discipline ⚡
          </p>
        </div>
      </div>
    </footer>
  )
}
