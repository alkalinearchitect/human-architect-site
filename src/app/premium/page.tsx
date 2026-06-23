import type { Metadata } from 'next'
import MatrixVideoHero from '@/components/premium/MatrixVideoHero'
import ProductShowcase from '@/components/premium/ProductShowcase'
import ManifestoSection from '@/components/premium/ManifestoSection'
import ProtocolsPreview from '@/components/premium/ProtocolsPreview'
import PremiumCTA, { FinalCTA } from '@/components/premium/PremiumCTA'
import PremiumHeader from '@/components/premium/PremiumHeader'

export const metadata: Metadata = {
  title: 'Human Architect — Rebuild The Human System',
  description: 'A body, mind, and lifestyle philosophy for those ready to detoxify their environment, master their habits, and return to their original design.',
  openGraph: {
    title: 'Human Architect — Rebuild The Human System',
    description: 'A body, mind, and lifestyle philosophy for those ready to detoxify their environment, master their habits, and return to their original design.',
    type: 'website',
    siteName: 'Human Architect',
  },
}

export default function PremiumPage() {
  return (
    <>
      <PremiumHeader />
      <main>
        <MatrixVideoHero />
        <ManifestoSection />
        <ProductShowcase />
        <ProtocolsPreview />
        <PremiumCTA />
        <FinalCTA />
      </main>
    </>
  )
}
