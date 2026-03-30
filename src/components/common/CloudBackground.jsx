import React, { useEffect, useRef } from 'react'

const CloudBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class CloudParticle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 60 + 20
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.2
        this.opacity = Math.random() * 0.3 + 0.1
        this.blur = Math.random() * 30 + 10
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width + this.size) this.x = -this.size
        if (this.x < -this.size) this.x = canvas.width + this.size
        if (this.y > canvas.height + this.size) this.y = -this.size
        if (this.y < -this.size) this.y = canvas.height + this.size
      }

      draw() {
        ctx.save()
        ctx.filter = `blur(${this.blur}px)`
        ctx.beginPath()
        
        // Create cloud-like shape with multiple circles
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        )
        
        if (document.documentElement.classList.contains('light')) {
          gradient.addColorStop(0, `rgba(200, 210, 230, ${this.opacity})`)
          gradient.addColorStop(1, `rgba(180, 190, 210, ${this.opacity * 0.5})`)
        } else {
          gradient.addColorStop(0, `rgba(100, 120, 140, ${this.opacity})`)
          gradient.addColorStop(1, `rgba(70, 85, 100, ${this.opacity * 0.5})`)
        }
        
        ctx.fillStyle = gradient
        
        // Draw cloud shape
        ctx.arc(this.x, this.y, this.size * 0.6, 0, Math.PI * 2)
        ctx.arc(this.x + this.size * 0.4, this.y - this.size * 0.2, this.size * 0.5, 0, Math.PI * 2)
        ctx.arc(this.x - this.size * 0.4, this.y - this.size * 0.2, this.size * 0.5, 0, Math.PI * 2)
        ctx.arc(this.x + this.size * 0.2, this.y + this.size * 0.2, this.size * 0.4, 0, Math.PI * 2)
        ctx.arc(this.x - this.size * 0.2, this.y + this.size * 0.2, this.size * 0.4, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.restore()
      }
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.min(15, Math.floor(window.innerWidth / 100))
      for (let i = 0; i < particleCount; i++) {
        particles.push(new CloudParticle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      setCanvasSize()
      initParticles()
    }

    setCanvasSize()
    initParticles()
    animate()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}

export default CloudBackground