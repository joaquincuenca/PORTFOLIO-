import React from 'react'

const Pill = ({ children }) => {
  return (
    <span className="text-[11.5px] font-semibold px-3.5 py-1.5 rounded-md bg-bg3 border border-white/10 text-white hover:bg-gold/10 hover:border-gold/20 hover:text-gold transition-all duration-200">
      {children}
    </span>
  )
}

export default Pill