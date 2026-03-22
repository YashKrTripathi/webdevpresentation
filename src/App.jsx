import { useEffect, useRef } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Frontend from './components/Frontend'
import Journey from './components/Journey'
import EfficiencyEngine from './components/EfficiencyEngine'
import RenderingMechanics from './components/RenderingMechanics'
import Backend from './components/Backend'
import AdvancedConcepts from './components/AdvancedConcepts'
import Footer from './components/Footer'
import YoutubeBackground from './components/YoutubeBackground'
import CustomCursor from './components/CustomCursor'

function App() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="dark bg-background overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor ref={cursorRef} />

      {/* YouTube Background Video */}
      <YoutubeBackground />

      {/* Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] scanline opacity-30"></div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Frontend />
        <Journey />
        <EfficiencyEngine />
        <RenderingMechanics />
        <Backend />
        <AdvancedConcepts />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
