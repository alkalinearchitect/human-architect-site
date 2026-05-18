interface DisclaimerProps {
  className?: string
}

export default function Disclaimer({ className = '' }: DisclaimerProps) {
  return (
    <div className={`p-5 my-10 bg-[rgba(248,113,113,0.05)] border border-[rgba(248,113,113,0.15)] rounded-xl text-sm text-[var(--text-muted)] leading-relaxed ${className}`}>
      <strong className="text-[var(--red)]">⚠️ Health Disclaimer:</strong> This content is for education and personal development only. It does not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before making major changes to your diet, lifestyle, supplements, or health practices.
    </div>
  )
}
