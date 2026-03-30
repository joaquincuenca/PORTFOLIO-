import { useState, useEffect } from 'react'

const useCountUp = (target, duration = 1400) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!target && target !== 0) return
    
    let startTime = null
    let animationFrame
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }
    
    animationFrame = requestAnimationFrame(step)
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [target, duration])

  return count
}

export default useCountUp