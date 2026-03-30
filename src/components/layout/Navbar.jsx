import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300 ${
      scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-white/10' : 'border-b border-transparent'
    }`}>
      <a href="#" className="font-display text-2xl tracking-wide text-white no-underline">
        JOAQUIN<span className="text-gold">.</span>
      </a>
      
      <ul className="hidden md:flex gap-9 list-none">
        <li><a href="#about" className="text-[11px] tracking-[0.18em] uppercase text-grey font-semibold hover:text-gold transition-colors">About</a></li>
        <li><a href="#services" className="text-[11px] tracking-[0.18em] uppercase text-grey font-semibold hover:text-gold transition-colors">Services</a></li>
        <li><a href="#projects" className="text-[11px] tracking-[0.18em] uppercase text-grey font-semibold hover:text-gold transition-colors">Works</a></li>
        <li><a href="#contact" className="text-[11px] tracking-[0.18em] uppercase text-grey font-semibold hover:text-gold transition-colors">Contact</a></li>
      </ul>
      
      <a href="#" className="text-[11px] tracking-[0.12em] uppercase font-bold text-black bg-gold py-2.5 px-5 rounded-md hover:opacity-85 transition transform hover:-translate-y-px">
        Download CV
      </a>
    </nav>
  )
}

export default Navbar