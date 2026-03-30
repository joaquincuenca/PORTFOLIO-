import React, { useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'

const RevealOnScroll = ({ children, threshold = 0.12, className = '' }) => {
  const ref = useRef(null)
  const isVisible = useScrollReveal(ref, threshold)

  return (
    <div ref={ref} className={`${isVisible ? 'in' : ''} ${className}`}>
      {children}
    </div>
  )
}

export default RevealOnScroll