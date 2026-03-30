import React from 'react'

const Button = ({ children, href, variant = 'gold', className = '', ...props }) => {
  const baseClasses = "inline-block text-[11px] sm:text-[11.5px] font-semibold tracking-[0.1em] uppercase py-3 sm:py-3.5 px-5 sm:px-8 rounded-md transition-all duration-200 no-underline"
  
  const variants = {
    gold: "bg-gold text-black hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(240,180,41,0.3)]",
    ghost: "bg-transparent text-white border border-white/10 hover:border-gold hover:text-gold",
    outline: "border-2 border-gold text-gold hover:bg-gold hover:text-black"
  }
  
  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`
  
  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}

export default Button