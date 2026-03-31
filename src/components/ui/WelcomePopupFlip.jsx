import React, { useState, useEffect } from 'react'

const WelcomePopupFlip = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup')
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    localStorage.setItem('hasSeenWelcomePopup', 'true')
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
      {/* 3D Flip Card Container */}
      <div 
        className="relative w-[90%] max-w-md h-[400px] cursor-pointer"
        style={{ perspective: '1500px' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className="relative w-full h-full transition-all duration-700"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 bg-bg2 rounded-2xl border border-gold/30 p-8 text-center"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold2 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <span className="text-4xl">👋</span>
              </div>
              <h2 className="font-display text-3xl mb-2">Welcome!</h2>
              <p className="text-grey text-sm mb-4">Click to flip →</p>
              <p className="text-xs text-grey">Joaquin Cuenca</p>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 bg-bg2 rounded-2xl border border-gold/30 p-8 text-center"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="font-display text-2xl text-gold mb-4">Joaquin Cuenca</h3>
                <p className="text-grey text-sm mb-6">
                  Full-Stack Developer crafting modern digital experiences.
                </p>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div><div className="text-gold font-bold">5+</div><div className="text-grey text-xs">Years</div></div>
                  <div><div className="text-gold font-bold">10+</div><div className="text-grey text-xs">Projects</div></div>
                  <div><div className="text-gold font-bold">12+</div><div className="text-grey text-xs">Clients</div></div>
                </div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); handleClose() }}
                className="w-full py-2 bg-gold text-black rounded-lg font-semibold hover:opacity-90 transition"
              >
                Enter Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePopupFlip