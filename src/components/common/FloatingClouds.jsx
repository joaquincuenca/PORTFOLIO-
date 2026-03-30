import React from 'react'

const FloatingClouds = () => {
  const clouds = [
    { top: '10%', left: '5%', size: 'w-32 h-20', delay: '0s', duration: '20s' },
    { top: '70%', left: '85%', size: 'w-48 h-32', delay: '2s', duration: '25s' },
    { top: '40%', left: '15%', size: 'w-24 h-16', delay: '4s', duration: '18s' },
    { top: '80%', left: '20%', size: 'w-40 h-28', delay: '1s', duration: '22s' },
    { top: '15%', left: '75%', size: 'w-36 h-24', delay: '3s', duration: '24s' },
  ]

  return (
    <>
      {clouds.map((cloud, index) => (
        <div
          key={index}
          className={`fixed pointer-events-none z-0 ${cloud.size} opacity-30 dark:opacity-20`}
          style={{
            top: cloud.top,
            left: cloud.left,
            animation: `floatCloud ${cloud.duration} ease-in-out infinite`,
            animationDelay: cloud.delay,
          }}
        >
          <svg viewBox="0 0 200 120" fill="currentColor" className="w-full h-full text-gold/20">
            <path d="M50,80 Q40,60 50,40 Q60,20 80,30 Q100,10 120,30 Q140,20 150,40 Q160,60 150,80 Q160,100 140,100 L60,100 Q40,100 50,80Z" />
          </svg>
        </div>
      ))}
    </>
  )
}

export default FloatingClouds