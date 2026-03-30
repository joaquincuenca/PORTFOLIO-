import React from 'react'
import StatsStrip from '../common/StatsStrip'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center px-4 sm:px-6 md:px-12 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto w-full py-12 sm:py-16 md:py-20">
        {/* Tagline - Responsive spacing */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-6 sm:w-8 h-px bg-gold"></div>
          <span className="text-gold font-mono text-[10px] sm:text-xs tracking-wider">
            FULL-STACK DEVELOPER
          </span>
        </div>

        {/* Main Title - Responsive font sizes */}
        <h1 className="font-display leading-[0.9] tracking-tight mb-4 sm:mb-6">
          <span className="text-[clamp(48px,12vw,180px)] block">
            JOAQUIN
          </span>
          <span className="text-[clamp(40px,10vw,160px)] text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold2 block">
            CUENCA
          </span>
        </h1>

        {/* Description - Responsive text size and width */}
        <p className="text-grey text-sm sm:text-base md:text-lg max-w-full sm:max-w-xl md:max-w-2xl leading-relaxed mb-6 sm:mb-8">
          I build web app systems and clean UIs. Full-stack developer based in the Philippines, 
          crafting modern digital experiences from AR to cloud-based web apps.
        </p>

        {/* Buttons - Responsive layout */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
          <Button href="#projects" variant="ghost" className="w-full sm:w-auto text-center">
            View Works
          </Button>
          <Button href="#" variant="gold" className="w-full sm:w-auto text-center">
            Download CV
          </Button>
        </div>

        {/* Stats - Responsive */}
        <div className="overflow-x-auto">
          <StatsStrip />
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile, visible on larger screens */}
      <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-grey/30 rounded-full flex justify-center">
          <div className="w-1 h-1.5 sm:h-2 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero