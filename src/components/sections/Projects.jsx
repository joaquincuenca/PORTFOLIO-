import React, { useEffect, useState } from 'react'
import RevealOnScroll from '../common/RevealOnScroll'
import { projectsData } from '../../data/projectsData'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  useEffect(() => {
    if (!activeProject) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveProject(null)
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeProject])

  const openCaseStudy = (project) => {
    setActiveProject(project)
    setActiveScreenshot(0)
  }

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
        {projectsData.map((project) => (
          <RevealOnScroll
            key={project.id}
            className="proj-row relative grid grid-cols-1 md:grid-cols-[80px_1fr_1fr_auto] items-start p-6 md:p-10 border-b border-white/10 gap-6 md:gap-8 hover:bg-bg2 transition-all group"
          >
            <span className="font-mono text-[11px] text-grey tracking-[0.1em] pt-1 z-20">
              {project.id}
            </span>

            <div className="z-20">
              <div className="font-display text-[clamp(26px,3vw,40px)] tracking-[0.01em] leading-none group-hover:text-gold transition-colors">
                {project.name}
              </div>
              <div className="font-mono text-[10px] text-grey tracking-[0.12em] uppercase mt-1.5">
                {project.subtitle}
              </div>
            </div>

            <div className="text-[12.5px] text-grey leading-relaxed pt-1 z-20">
              <div className="font-mono text-[11px] leading-relaxed">
                <span className="text-green-400">1</span>{' '}
                <span className="text-gold">export</span>{' '}
                {project.name.split(' ')[0]} <br />
                <span className="text-green-400">2</span>{' '}
                <span className="text-blue-300">{project.icon || ''} from</span>{' '}
                <span>"{project.source || 'Project'}"</span> <br />
                <span className="text-green-400">3</span>{' '}
                {project.description}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:flex-col md:items-end z-20">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.1em] uppercase text-gold bg-gold/10 border border-gold/20 px-2.5 py-1 rounded whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
              {project.screenshots && (
                <button
                  type="button"
                  onClick={() => openCaseStudy(project)}
                  className="mt-2 text-[10px] tracking-[0.12em] uppercase text-black bg-gold hover:bg-white px-3 py-2 rounded transition-colors whitespace-nowrap"
                >
                  View case study ↗
                </button>
              )}
            </div>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} live demo`}
                className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10"
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

      {activeProject && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProject(null)
          }}
          role="presentation"
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="w-full max-w-6xl max-h-[94vh] overflow-y-auto bg-[#111318] border border-white/15 rounded-2xl shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 sm:px-7 py-4 bg-[#111318]/95 backdrop-blur border-b border-white/10">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold">Project case study</div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="w-9 h-9 rounded-full border border-white/20 text-white hover:bg-white/10 text-xl"
                aria-label="Close case study"
              >
                ×
              </button>
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 id="case-study-title" className="font-display text-3xl sm:text-4xl text-white">
                    {activeProject.name}
                  </h3>
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-grey mt-2">
                    {activeProject.subtitle}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="text-[9px] tracking-wider uppercase text-gold border border-gold/25 bg-gold/10 rounded px-2.5 py-1">{tag}</span>
                  ))}
                </div>
              </div>

              <p className="text-sm leading-7 text-gray-300 mb-8 max-w-4xl">
                {activeProject.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(250px,0.8fr)] gap-7">
                <div>
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
                    <img
                      src={activeProject.screenshots[activeScreenshot].image}
                      alt={activeProject.screenshots[activeScreenshot].title}
                      className="block w-full h-auto object-contain"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {activeProject.screenshots.map((shot, index) => (
                      <button
                        key={shot.image}
                        type="button"
                        onClick={() => setActiveScreenshot(index)}
                        aria-pressed={activeScreenshot === index}
                        className={`text-[10px] uppercase tracking-wider rounded-lg border px-3 py-2 transition-colors ${activeScreenshot === index ? 'border-gold text-gold bg-gold/10' : 'border-white/15 text-gray-400 hover:text-white hover:border-white/40'}`}
                      >
                        {shot.title}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    {activeProject.screenshots[activeScreenshot].description}
                  </p>
                </div>

                <aside>
                  <h4 className="font-display text-xl text-white mb-4">System features</h4>
                  <div className="space-y-4">
                    {activeProject.features.map((feature, index) => (
                      <div key={feature.title} className="border-l border-gold/50 pl-4">
                        <div className="font-mono text-[9px] text-gold mb-1">0{index + 1}</div>
                        <h5 className="text-sm text-white font-semibold">{feature.title}</h5>
                        <p className="text-xs leading-6 text-gray-400 mt-1">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 rounded-xl border border-emerald-400/20 bg-emerald-400/5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 mb-2">Privacy notice</div>
                    <p className="text-xs leading-6 text-gray-300">
                      Screenshots are sanitized for portfolio viewing. Names, contact details, addresses, and individual records are hidden. Only interface layouts, aggregate summaries, and system features are presented.
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  )
}

export default Projects
