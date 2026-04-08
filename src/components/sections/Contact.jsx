import React from 'react'
import RevealOnScroll from '../common/RevealOnScroll'
import Button from '../ui/Button'

const Contact = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 border-b border-white/10 min-h-[60vh]">
      <RevealOnScroll className="p-8 md:p-12 lg:p-24 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4  font-mono text-[10.5px] tracking-[0.2em] uppercase text-gold after:w-8 after:h-px after:bg-gold/50 after:ml-2">
            Get in Touch
          </div>
          <h2 className="font-display text-[clamp(60px,8vw,110px)] leading-[0.92] tracking-[-0.01em]">
            CRAFTING<br/>CODE<br/>
            <span className="text-transparent [-webkit-text-stroke:1.5px_#edecf0]">SHAPING</span><br/>EXPERIENCE
          </h2>
        </div>
        <Button href="mailto:jcuenca633@gmail.com" variant="gold" className="self-start mt-8">
          Send a Message →
        </Button>
      </RevealOnScroll>
      
      <RevealOnScroll className="p-8 md:p-12 lg:p-24 bg-bg2 flex flex-col gap-8 justify-center">
        <div className="border-b border-white/10 pb-7">
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-grey mb-2">
            Direct Contact
          </div>
          <a href="mailto:jcuenca633@gmail.com" className="text-[15px] font-semibold text-white hover:text-gold transition-colors no-underline">
            jcuenca633@gmail.com
          </a>
        </div>
        
        <div className="border-b border-white/10 pb-7">
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-grey mb-2">
            Location
          </div>
          <span className="text-[15px] font-semibold text-white">
            Philippines
          </span>
        </div>
        
        <div className="border-b border-white/10 pb-7">
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-grey mb-2">
            Availability
          </div>
          <span className="text-[15px] font-semibold text-green-400">
            ● Open to opportunities
          </span>
        </div>
        
        <div className="pb-7">
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-grey mb-2">
            GitHub
          </div>
          <a href="#" className="text-[15px] font-semibold text-white hover:text-gold transition-colors no-underline">
            github.com/joaquincuenca
          </a>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Contact