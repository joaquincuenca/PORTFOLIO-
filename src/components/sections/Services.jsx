import React from 'react'
import RevealOnScroll from '../common/RevealOnScroll'
import { servicesData } from '../../data/servicesData'

const Services = () => {
  return (
    <section id="services" className="border-b border-white/10">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between px-6 md:px-12 pt-20 pb-12 border-b border-white/10 gap-5">
        <div>
          <div className="flex items-center gap-2 mb-4 font-mono text-[10.5px] tracking-[0.2em] uppercase text-gold after:w-8 after:h-px after:bg-gold/50 after:ml-2">
            What I Offer
          </div>
          <h2 className="font-display text-[clamp(52px,6vw,86px)] leading-[0.95] mb-0">
            MY<br/>SERVICES
          </h2>
        </div>
        <p className="text-[13px] text-grey max-w-[320px] leading-relaxed">
          From interactive web apps to AR experiences — I deliver end-to-end solutions with clean code and sharp design.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service, idx) => (
          <RevealOnScroll key={idx} className="svc-card p-8 md:p-10 lg:p-11 border-r border-white/10 relative overflow-hidden hover:bg-bg2 transition-all group cursor-pointer">
            <span className="font-mono text-[11px] text-grey tracking-[0.12em] block mb-8">{service.num}</span>
            <span className="text-4xl mb-5 block">{service.icon}</span>
            <div className="font-display text-2xl md:text-3xl tracking-[0.02em] mb-3 leading-tight">
              {service.name}
            </div>
            <p className="text-[12.5px] text-grey leading-relaxed">{service.desc}</p>
            <span className="inline-block mt-6 text-[9.5px] tracking-[0.14em] uppercase text-gold bg-gold/10 border border-gold/20 px-2.5 py-1 rounded">
              {service.tags}
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

export default Services