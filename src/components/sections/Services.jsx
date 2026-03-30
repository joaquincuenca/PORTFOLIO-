import React from 'react'
import RevealOnScroll from '../common/RevealOnScroll'
import { servicesData } from '../../data/servicesData'

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold"></div>
            <span className="text-gold font-mono text-xs tracking-wider">WHAT I DO</span>
            <div className="w-8 h-px bg-gold"></div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-4">My Services</h2>
          <p className="text-grey max-w-2xl mx-auto">
            From interactive web apps to AR experiences — I deliver end-to-end solutions with clean code and sharp design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => (
            <RevealOnScroll key={idx}>
              <div className="group p-8 bg-bg2 rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="font-display text-2xl mb-3 group-hover:text-gold transition-colors">
                  {service.name}
                </h3>
                <p className="text-grey text-sm leading-relaxed mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.split(' · ').map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs text-gold/70 bg-gold/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services