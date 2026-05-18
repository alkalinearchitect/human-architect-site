import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function Button({ children, href, variant = 'primary', size = 'md', className = '', onClick, type = 'button' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-[0.5px] rounded-xl transition-all duration-300 cursor-pointer border-none focus-visible:outline-2 focus-visible:outline-[var(--gold)] focus-visible:outline-offset-2'

  const variants = {
    primary: 'bg-gradient-to-br from-[var(--gold)] to-[#c49a3f] text-black shadow-[0_4px_20px_rgba(212,168,83,0.25)] hover:shadow-[0_6px_30px_rgba(212,168,83,0.4)] hover:-translate-y-0.5',
    secondary: 'bg-white/5 text-[var(--text)] border border-[var(--border-light)] hover:bg-white/8 hover:border-[var(--gold)]',
    outline: 'bg-transparent text-[var(--gold)] border border-[rgba(212,168,83,0.3)] hover:bg-[var(--gold-dim)] hover:border-[var(--gold)]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }

  return <button type={type} className={classes} onClick={onClick}>{children}</button>
}
