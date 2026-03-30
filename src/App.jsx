import React, { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Cursor from './components/layout/Cursor'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Scroll from './components/common/ScrollIndicator'

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })
  }, [])

  return (
    <>
      <Scroll />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App