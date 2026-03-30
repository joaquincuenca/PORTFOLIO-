import React from 'react'
import MarqueeStrip from '../common/MarqueeStrip'
import StatsStrip from '../common/StatsStrip'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <>
    <div>
      <section id="hero" className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-14 md:pb-18 relative border-b border-white/10 overflow-hidden pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(120px,18vw,260px)] text-white/5 whitespace-nowrap pointer-events-none select-none">
          JOAQUIN
        </div>
        
        <div className="absolute top-[120px] right-6 md:right-12 font-mono text-[11px] text-grey tracking-[0.15em] uppercase flex flex-col items-end gap-1.5 before:content-[''] before:w-px before:h-[60px] before:bg-grey2 before:mb-1">
          <span>Philippines</span>
        </div>

        <div className="flex items-center gap-2.5 mb-5 text-gold font-mono text-[11px] tracking-[0.18em] uppercase before:w-7 before:h-px before:bg-gold">
          Full-Stack Developer
        </div>
        
        <h1 className="font-display text-[clamp(76px,11vw,160px)] leading-[0.95] tracking-[-0.01em]">
          JOAQUIN<br/>
          <span className="text-transparent [-webkit-text-stroke:1.5px_#edecf0]">CUENCA</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-10">
          <p className="text-[13.5px] text-grey leading-relaxed max-w-[360px]">
            <strong className="text-white font-semibold">I build web app systems and clean UIs.</strong><br/>
            Full-stack developer based in the Philippines, crafting modern digital experiences web apps.
          </p>
          
          <div className="flex gap-3">
            <Button href="#projects" variant="ghost">View Works</Button>
            <Button href="#" variant="gold">↓ Download CV</Button>
          </div>
        </div>
        
        <StatsStrip />
      </section>
    </div>
    </>
  )
}

export default Hero