import React, { useState, useEffect } from 'react'

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup')
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
      localStorage.setItem('hasSeenWelcomePopup', 'true')
    }, 400)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Simple Overlay */}
      <div 
        className={`fixed inset-0 z-[9999] bg-black/70 transition-opacity duration-400 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* 3D Popup Container */}
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] w-[90%] max-w-md transition-all duration-400 ${
        isClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
      }`}>
        {/* 3D Card */}
        <div className="relative transform-gpu transition-all duration-300 hover:scale-105" style={{ transformStyle: 'preserve-3d' }}>
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gold to-gold2 rounded-2xl blur-md opacity-60"></div>
          
          {/* Main Content */}
          <div className="relative bg-bg2 rounded-2xl border border-gold/30 p-8 text-center">
            {/* Simple 3D Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold2 rounded-full animate-pulse"></div>
                <div className="absolute inset-1 bg-bg2 rounded-full flex items-center justify-center">
                  <span className="text-4xl animate-bounce">👋</span>
                </div>
              </div>
            </div>

            {/* Welcome Text */}
            <h2 className="font-display text-3xl md:text-4xl mb-3">
              Welcome to my
              <span className="text-gold block">Portfolio</span>
            </h2>
            
            <div className="w-12 h-0.5 bg-gold mx-auto my-4"></div>
            
            <p className="text-grey text-sm leading-relaxed mb-6">
              I'm <span className="text-gold font-semibold">Joaquin Cuenca</span>, 
              a Full-Stack Developer. Explore my work and let's create something amazing together.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="text-center p-2 rounded-lg bg-white/5">
                <div className="text-gold font-bold text-lg">5+</div>
                <div className="text-grey text-[10px]">Years</div>
              </div>
              <div className="text-center p-2 rounded-lg bg-white/5">
                <div className="text-gold font-bold text-lg">10+</div>
                <div className="text-grey text-[10px]">Projects</div>
              </div>
              <div className="text-center p-2 rounded-lg bg-white/5">
                <div className="text-gold font-bold text-lg">12+</div>
                <div className="text-grey text-[10px]">Clients</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleClose}
                className="flex-1 px-4 py-2 bg-gold text-black rounded-lg font-semibold hover:opacity-90 transition transform hover:scale-105"
              >
                Explore
              </button>
              <button
                onClick={handleClose}
                className="flex-1 px-4 py-2 border border-gold/50 text-gold rounded-lg font-semibold hover:bg-gold/10 transition transform hover:scale-105"
              >
                Close
              </button>
            </div>

            {/* Simple Close X */}
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 w-7 h-7 bg-gold text-black rounded-full flex items-center justify-center text-sm hover:scale-110 transition"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcomePopup