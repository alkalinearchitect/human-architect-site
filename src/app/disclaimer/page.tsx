import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Disclaimer from '@/components/ui/Disclaimer'

export const metadata: Metadata = {
  title: 'Health Disclaimer — Human Architect',
  description: 'Health Disclaimer for Human Architect. Educational content only — not medical advice.',
}

export default function DisclaimerPage() {
  return (
    <section className="pt-36 pb-20 px-6">
      <div className="max-w-[750px] mx-auto">
        <h1 className="text-4xl font-black mb-8">Health Disclaimer</h1>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <p className="text-lg">This website is for <strong className="text-[var(--text)]">education and personal development only</strong>.</p>
          <p>It does <strong className="text-[var(--text)]">not</strong> provide medical advice, diagnosis, or treatment.</p>
          <p>The content on this website — including articles, protocols, book descriptions, and educational materials — is designed to help you understand concepts related to detoxification, nutrition, lifestyle, and personal development.</p>
          <p>It is <strong className="text-[var(--text)]">not</strong> a substitute for professional medical advice, diagnosis, or treatment.</p>
          <p>Always consult a qualified healthcare professional before making major changes to your diet, lifestyle, supplements, or health practices — especially if you have a medical condition, are pregnant, or are taking medication.</p>
          <p>Any health-related claims made on this website are presented as educational frameworks and personal philosophy — not as guaranteed medical outcomes.</p>
          <p>Results vary from person to person. Individual experiences shared or implied on this website should not be interpreted as typical or guaranteed.</p>
          <p>By using this website, you acknowledge that you have read and understood this disclaimer.</p>
        </div>
        <Disclaimer className="mt-10" />
      </div>
    </section>
  )
}
