import React, { useEffect, useRef } from 'react'

const Cursor = () => {
  const cursorRef = useRef(null)
  const cursor2Ref = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursor2 = cursor2Ref.current
    if (!cursor || !cursor2) return

    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.11
      cursorY += (mouseY - cursorY) * 0.11
      cursor2.style.left = cursorX + 'px'
      cursor2.style.top = cursorY + 'px'
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    animate()

    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-[10px] h-[10px] bg-gold rounded-full pointer-events-none z-[9999] transition-[width,height] duration-150 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursor2Ref}
        className="fixed w-8 h-8 border border-gold/40 rounded-full pointer-events-none z-[9998]"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}

export default Cursor