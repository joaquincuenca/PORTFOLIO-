import React from 'react'
import RevealOnScroll from '../common/RevealOnScroll'
import Pill from '../ui/Pill'
import { skillsData } from '../../data/skillsData'

const About = () => {
  return (
    <section id="about" className="grid md:grid-cols-2 border-b border-white/10">
      <RevealOnScroll className="p-8 md:p-12 lg:p-24 border-r border-white/10">
        <div className="flex items-center gap-2 mb-4 font-mono text-[10.5px] tracking-[0.2em] uppercase text-gold after:w-8 after:h-px after:bg-gold/50 after:ml-2">
          About the Developer
        </div>
        <h2 className="font-display text-[clamp(52px,6vw,86px)] leading-[0.95] mb-6">
          ABOUT<br/>
          <span className="text-transparent [-webkit-text-stroke:1.5px_#edecf0]">THE DEV</span>
        </h2>
        <p className="text-sm text-grey leading-relaxed max-w-[440px]">
          I'm a Full-Stack Developer based in the Philippines with 5+ years of coding experience. 
          I build modern web applications, clean UIs, and full-stack systems — from augmented reality 
          museum guides to cloud-based logistics platforms and IoT management systems.
          <br/><br/>
          Passionate about merging solid engineering with thoughtful design to ship experiences that actually work.
        </p>
      </RevealOnScroll>
      
      <RevealOnScroll className="p-8 md:p-12 lg:p-24 bg-bg2 flex flex-col gap-10">
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-grey mb-3 pb-2 border-b border-white/10">
            Frontend
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsData.frontend.map((skill, idx) => (
              <Pill key={idx}>{skill}</Pill>
            ))}
          </div>
        </div>
        
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-grey mb-3 pb-2 border-b border-white/10">
            Backend & Database
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsData.backend.map((skill, idx) => (
              <Pill key={idx}>{skill}</Pill>
            ))}
          </div>
        </div>
        
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-grey mb-3 pb-2 border-b border-white/10">
            Other
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsData.other.map((skill, idx) => (
              <Pill key={idx}>{skill}</Pill>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default About