import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export default function Section({ children, className = '', id, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${dark ? 'bg-[var(--deep)]' : ''} ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  center?: boolean
}

export function SectionHeader({ title, subtitle, center = true }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-[var(--text-muted)] max-w-[600px] mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
