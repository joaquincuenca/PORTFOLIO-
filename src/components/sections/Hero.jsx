import React, { useEffect, useRef } from 'react'
import StatsStrip from '../common/StatsStrip'
import Button from '../ui/Button'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current || !titleRef.current) return
      
      const { clientX, clientY } = e
      const { width, height, left, top } = heroRef.current.getBoundingClientRect()
      
      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5
      
      // 3D tilt effect for the title
      titleRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${y * 3}deg) 
        rotateY(${x * 3}deg)
        translateZ(10px)
      `
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={heroRef} id="hero" className="min-h-screen flex items-center px-4 sm:px-6 md:px-12 relative border-b border-gray-200 dark:border-white/10 overflow-hidden transition-colors duration-300">
      {/* Dynamic Background - Light/Dark Mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent dark:from-gold/5"></div>
      
      {/* Floating Particles for 3D Depth - Adjusted for light mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 dark:bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold2/10 dark:bg-gold2/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-200/20 dark:bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full py-12 sm:py-16 md:py-20 relative z-10">
        {/* Tagline - 3D Text Effect with Light Mode Support */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 transform-gpu">
          <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-gold to-gold2 shadow-lg shadow-gold/20 dark:shadow-gold/50"></div>
          <span className="font-mono text-[10px] sm:text-xs tracking-wider uppercase relative">
            <span className="relative z-10 text-gold-dark dark:text-gold font-semibold">
              FULL-STACK DEVELOPER
            </span>
            <span className="absolute inset-0 text-gold/20 dark:text-gold/30 blur-sm -z-10 translate-y-[1px]">
              FULL-STACK DEVELOPER
            </span>
          </span>
        </div>

        {/* Main Title - 3D Extruded Effect with Light Mode */}
        <h1 ref={titleRef} className="font-display leading-[0.85] tracking-tighter mb-4 sm:mb-6 relative transition-transform duration-200" style={{ transformStyle: 'preserve-3d' }}>
          {/* 3D Shadow Layers for JOAQUIN */}
          <div className="relative inline-block">
            <span className="text-[clamp(48px,12vw,180px)] block font-black relative">
              {/* Multiple shadow layers for depth - Light mode optimized */}
              <span className="absolute inset-0 text-gray-300 dark:text-gold/20 -translate-y-[2px] translate-x-[2px] blur-[1px]">JOAQUIN</span>
              <span className="absolute inset-0 text-gray-400/50 dark:text-gold/10 -translate-y-[4px] translate-x-[4px] blur-[2px]">JOAQUIN</span>
              <span className="absolute inset-0 text-gray-400/30 dark:text-white/5 -translate-y-[6px] translate-x-[6px] blur-[3px]">JOAQUIN</span>
              
              {/* Main Text - Light/Dark mode aware */}
              <span className="relative z-10 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                JOAQUIN
              </span>
            </span>
          </div>
          
          {/* 3D Extruded Effect for CUENCA */}
          <div className="relative inline-block mt-[-0.1em]">
            <span className="text-[clamp(40px,10vw,160px)] block font-black relative transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
              {/* 3D Extrusion Layers - Light mode optimized */}
              <span className="absolute inset-0 text-gold/40 dark:text-gold/30 -translate-y-[3px] translate-x-[3px] blur-sm">CUENCA</span>
              <span className="absolute inset-0 text-gold/30 dark:text-gold/20 -translate-y-[6px] translate-x-[6px] blur-md">CUENCA</span>
              <span className="absolute inset-0 text-gold/20 dark:text-gold/10 -translate-y-[9px] translate-x-[9px] blur-lg">CUENCA</span>
              <span className="absolute inset-0 text-gold2/10 dark:text-gold2/5 -translate-y-[12px] translate-x-[12px] blur-xl">CUENCA</span>
              
              {/* Main Gradient Text with 3D Perspective - Light mode vibrant, dark mode subtle */}
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-gold to-amber-500 dark:from-gold dark:via-amber-400 dark:to-gold2 inline-block transform-gpu" 
                    style={{ 
                      textShadow: '0 0 20px rgba(218, 165, 32, 0.2)',
                      transform: 'perspective(500px) rotateX(2deg)'
                    }}>
                CUENCA
              </span>
            </span>
          </div>
        </h1>

        {/* Description with subtle 3D lift - Light mode optimized */}
        <p className="text-gray-600 dark:text-grey text-sm sm:text-base md:text-lg max-w-full sm:max-w-xl md:max-w-2xl leading-relaxed mb-6 sm:mb-8 transform-gpu"
           style={{ transform: 'translateZ(20px)' }}>
          <span className="relative inline-block">
            I build web app systems and clean UIs. Full-stack developer based in the Philippines,
            crafting modern digital experiences web apps.
            <span className="absolute inset-0 blur-md text-gray-400/30 dark:text-grey/20 -z-10 translate-y-[1px]">
              I build web app systems and clean UIs. Full-stack developer based in the Philippines, 
              crafting modern digital experiences web apps.
            </span>
          </span>
        </p>

        {/* Buttons with 3D hover effects - Light mode optimized */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
          <Button 
            href="#projects" 
            variant="ghost" 
            className="w-full sm:w-auto text-center relative group border border-gray-300 dark:border-white/20 hover:border-gold dark:hover:border-gold transition-colors duration-300"
          >
            <span className="relative z-10 text-gray-700 dark:text-white group-hover:text-gold dark:group-hover:text-gold transition-colors duration-300">
              View Works
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 dark:via-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl"></span>
          </Button>
          
          <Button 
            href="cuencacv.pdf" 
            variant="gold" 
            className="w-full sm:w-auto text-center relative group overflow-hidden bg-gradient-to-r from-amber-500 to-gold dark:from-gold dark:to-gold2 shadow-lg shadow-gold/20 dark:shadow-gold/30"
          >
            <span className="relative z-10 text-white font-semibold">
              Download CV
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 dark:from-gold dark:via-yellow-400 dark:to-gold2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>
            <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/20"></span>
          </Button>
        </div>

        {/* Stats with 3D card effect - Light mode optimized */}
        <div className="overflow-x-auto transform-gpu" style={{ transform: 'translateZ(10px)' }}>
          <StatsStrip />
        </div>
      </div>

      {/* Enhanced 3D Scroll Indicator - Light/Dark mode aware */}
      <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce group cursor-pointer">
        <div className="relative">
          {/* Outer ring with glow */}
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-gold/40 dark:border-gold/30 rounded-full flex justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent dark:from-gold/20 rounded-full"></div>
            <div className="w-1 h-1.5 sm:h-2 bg-gradient-to-t from-amber-600 to-gold dark:from-gold dark:to-gold2 rounded-full mt-2 animate-pulse relative z-10"></div>
          </div>
          {/* 3D shadow */}
          <div className="absolute inset-0 w-5 sm:w-6 h-8 sm:h-10 border-2 border-gold/20 dark:border-gold/20 rounded-full blur-md -z-10 translate-y-1"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero