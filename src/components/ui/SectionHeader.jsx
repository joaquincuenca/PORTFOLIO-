import React from 'react'

const SectionHeader = ({ eyebrow, title, subtitle, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-4 font-mono text-[10.5px] tracking-[0.2em] uppercase text-gold after:w-8 after:h-px after:bg-gold/50 after:ml-2">
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className="font-display text-[clamp(52px,6vw,86px)] leading-[0.95] mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-sm text-grey max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader