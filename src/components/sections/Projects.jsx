import React from 'react'
import RevealOnScroll from '../common/RevealOnScroll'
import { projectsData } from '../../data/projectsData'

const Projects = () => {
  return (
    <section id="projects" className="border-b border-white/10">
      <div className="px-6 md:px-12 pt-20 pb-12 border-b border-white/10">
        <div className="flex items-center gap-2 mb-4 font-mono text-[10.5px] tracking-[0.2em] uppercase text-gold after:w-8 after:h-px after:bg-gold/50 after:ml-2">
          Selected Work
        </div>
        <h2 className="font-display text-[clamp(52px,6vw,86px)] leading-[0.95] mb-0">
          MY<br />
          <span className="text-transparent [-webkit-text-stroke:1.5px_#edecf0]">
            PROJECTS
          </span>
        </h2>
      </div>

      <div className="projects-list">
        {projectsData.map((project, idx) => (
          <RevealOnScroll
            key={idx}
            className="proj-row relative grid grid-cols-1 md:grid-cols-[80px_1fr_1fr_auto] items-start p-6 md:p-10 border-b border-white/10 gap-6 md:gap-8 hover:bg-bg2 transition-all group"
          >
            {/* ID */}
            <span className="font-mono text-[11px] text-grey tracking-[0.1em] pt-1 z-20">
              {project.id}
            </span>

            {/* NAME + SUBTITLE */}
            <div className="z-20">
              <div className="font-display text-[clamp(26px,3vw,40px)] tracking-[0.01em] leading-none group-hover:text-gold transition-colors">
                {project.name}
              </div>
              <div className="font-mono text-[10px] text-grey tracking-[0.12em] uppercase mt-1.5">
                {project.subtitle}
              </div>
            </div>

            {/* DESCRIPTION (code style) */}
            <div className="text-[12.5px] text-grey leading-relaxed pt-1 z-20">
              <div className="font-mono text-[11px] leading-relaxed">
                <span className="text-green-400">1</span>{' '}
                <span className="text-gold">export</span>{' '}
                {project.name.split(' ')[0]} <br />
                <span className="text-green-400">2</span>{' '}
                <span className="text-blue-300">
                  {project.icon || ''} from
                </span>{' '}
                <span>"{project.source || 'Project'}"</span> <br />
                <span className="text-green-400">3</span>{' '}
                {project.description}
              </div>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 md:flex-col md:items-end z-20">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="text-[10px] tracking-[0.1em] uppercase text-gold bg-gold/10 border border-gold/20 px-2.5 py-1 rounded whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 🔥 HOVER LIVE DEMO OVERLAY */}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  absolute inset-0 flex items-center justify-center
                  bg-black/70 backdrop-blur-sm
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-300
                  z-30
                "
              >
                <div className="text-center animate-pulse">
                  <div className="text-gold font-display text-2xl tracking-wide">
                    LIVE DEMO
                  </div>
                  <div className="text-grey text-[11px] tracking-[0.2em] uppercase mt-2">
                    Click to open project
                  </div>
                </div>
              </a>
            )}
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

export default Projects