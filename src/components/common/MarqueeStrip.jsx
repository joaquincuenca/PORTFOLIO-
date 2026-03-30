import React from 'react'

const skills = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 
  'Supabase', 'Firebase', 'Unity AR', 'Java OOP', 'PostgreSQL', 
  'REST API', 'Full-Stack Dev'
]

const MarqueeStrip = () => {
  const duplicated = [...skills, ...skills]

  return (
    <div className="overflow-hidden bg-gold py-2.5 relative z-10 mt-[68px]">
      <div className="flex gap-0 whitespace-nowrap animate-marquee">
        {duplicated.map((skill, idx) => (
          <span 
            key={idx} 
            className="font-mono text-[11.5px] font-medium tracking-[0.1em] uppercase text-black px-7 after:content-['_•'] after:pl-7 after:opacity-50"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default MarqueeStrip