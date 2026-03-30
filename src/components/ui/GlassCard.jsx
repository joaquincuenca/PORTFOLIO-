import React from 'react'

const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`
        relative overflow-hidden
        bg-white/5 dark:bg-white/5
        backdrop-blur-xl
        border border-white/10 dark:border-white/10
        rounded-2xl
        transition-all duration-500
        ${hover ? 'hover:scale-105 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/20' : ''}
        ${className}
      `}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
      
      {/* Glass reflection effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      
      {children}
    </div>
  )
}

export default GlassCard