import React, { useState, useEffect } from 'react'

const ScrollIndicator = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0)
    const [currentSection, setCurrentSection] = useState(1)
    const [totalSections, setTotalSections] = useState(5)

    useEffect(() => {
        const calculateScrollPercentage = () => {
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const scrollTop = window.scrollY
        
        const maxScroll = documentHeight - windowHeight
        const percentage = (scrollTop / maxScroll) * 100
        setScrollPercentage(Math.min(100, Math.max(0, percentage)))
        
        const sections = ['hero', 'about', 'services', 'projects', 'contact']
        let activeSection = 1
        
        for (let i = 0; i < sections.length; i++) {
            const element = document.getElementById(sections[i])
            if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                activeSection = i + 1
                break
            }
            }
        }
        
        setCurrentSection(activeSection)
        }
        
        window.addEventListener('scroll', calculateScrollPercentage)
        window.addEventListener('resize', calculateScrollPercentage)
        calculateScrollPercentage()
        
        return () => {
        window.removeEventListener('scroll', calculateScrollPercentage)
        window.removeEventListener('resize', calculateScrollPercentage)
        }
    }, [])

    return (
        <>
        {/* Compact Scroll Indicator */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center gap-2">
            {/* Small Mouse with Percentage Inside */}
            <div className="relative group">
            {/* Mouse Shape */}
            <div className="w-[42px] h-[68px] border-2 border-gold/50 rounded-full relative overflow-hidden bg-bg2/60 backdrop-blur-sm">
                {/* Fill Progress */}
                <div 
                className="absolute bottom-0 left-0 right-0 bg-gold transition-all duration-200"
                style={{ 
                    height: `${scrollPercentage}%`,
                    opacity: 0.6
                }}
                />
                
                {/* Percentage Number Inside */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-mono text-sm font-bold text-white">
                    {Math.floor(scrollPercentage)}
                </span>
                <span className="font-mono text-[8px] text-white/60 -mt-0.5">%</span>
                </div>
                
                {/* Scroll Wheel Dot */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1.5 bg-white/80 rounded-full animate-scroll-wheel" />
            </div>
            </div>

        </div>
        
        {/* Thin Top Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-[2px] bg-gold/20 z-50">
            <div 
            className="h-full bg-gold transition-all duration-200"
            style={{ width: `${scrollPercentage}%` }}
            />
        </div>
        </>
    )
}

export default ScrollIndicator