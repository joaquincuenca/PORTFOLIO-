import React, { useRef } from 'react'
import useCountUp from '../../hooks/useCountUp'
import useScrollReveal from '../../hooks/useScrollReveal'

const StatsStrip = () => {
  const ref = useRef(null)
  const isVisible = useScrollReveal(ref, 0.4)
  
  const years = useCountUp(isVisible ? 5 : 0)
  const projects = useCountUp(isVisible ? 10 : 0)
  const experience = useCountUp(isVisible ? 2 : 0)
  const clients = useCountUp(isVisible ? 12 : 0)

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-0 border border-white/10 rounded-lg overflow-hidden">
      <div className="p-4 sm:p-6 md:p-7 border-r border-white/10 bg-bg2">
        <span className="font-display text-3xl sm:text-4xl md:text-5xl text-gold block leading-none mb-1">
          {years}+
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-grey">
          Years Coding
        </span>
      </div>
      
      <div className="p-4 sm:p-6 md:p-7 border-r border-white/10 bg-bg2">
        <span className="font-display text-3xl sm:text-4xl md:text-5xl text-gold block leading-none mb-1">
          {projects}+
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-grey">
          Completed Projects
        </span>
      </div>
      
      <div className="p-4 sm:p-6 md:p-7 border-r border-white/10 bg-bg2">
        <span className="font-display text-3xl sm:text-4xl md:text-5xl text-gold block leading-none mb-1">
          {experience}+
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-grey">
          Work Experience
        </span>
      </div>
      
      <div className="p-4 sm:p-6 md:p-7 bg-bg2">
        <span className="font-display text-3xl sm:text-4xl md:text-5xl text-gold block leading-none mb-1">
          {clients}+
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-grey">
          Satisfied Clients
        </span>
      </div>
    </div>
  )
}

export default StatsStrip