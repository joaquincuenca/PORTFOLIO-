import React from 'react'
import RevealOnScroll from '../common/RevealOnScroll'
import Pill from '../ui/Pill'
import { skillsData } from '../../data/skillsData'

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold"></div>
              <span className="text-gold font-mono text-xs tracking-wider">ABOUT ME</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.1] mb-6">
              Crafting Digital<br />
              <span className="text-gold">Experiences</span>
            </h2>
            <p className="text-grey leading-relaxed mb-6">
              I'm a Full-Stack Developer based in the Philippines with 5+ years of coding experience. 
              I build modern web applications, clean UIs, and full-stack systems — from augmented reality 
              museum guides to cloud-based logistics platforms.
            </p>
            <p className="text-grey leading-relaxed">
              Passionate about merging solid engineering with thoughtful design to ship experiences that actually work.
            </p>
          </RevealOnScroll>

          {/* Right Column - Skills */}
          <RevealOnScroll>
            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-sm text-gold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {skillsData.frontend.map((skill, idx) => (
                    <Pill key={idx}>{skill}</Pill>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-mono text-sm text-gold mb-4">Backend & Database</h3>
                <div className="flex flex-wrap gap-3">
                  {skillsData.backend.map((skill, idx) => (
                    <Pill key={idx}>{skill}</Pill>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-mono text-sm text-gold mb-4">Other Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skillsData.other.map((skill, idx) => (
                    <Pill key={idx}>{skill}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

export default About