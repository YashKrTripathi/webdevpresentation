import { useEffect, useRef } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Frontend from './components/Frontend'
import Journey from './components/Journey'
import EfficiencyEngine from './components/EfficiencyEngine'
import RenderingMechanics from './components/RenderingMechanics'
import Backend from './components/Backend'
import Footer from './components/Footer'
import YoutubeBackground from './components/YoutubeBackground'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'

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

  const HomePage = () => (
    <>
      <Hero />
      <Frontend />
      <Journey />
      <EfficiencyEngine />
      <RenderingMechanics />
    </>
  )

  const BackendPage = () => (
    <div className="min-h-screen pt-32">
      <Backend />
    </div>
  )

  return (
    <HashRouter>
      <div className="dark bg-background overflow-x-hidden min-h-screen">
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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/backend" element={<BackendPage />} />
          </Routes>
        </main>

        {/* Global Scroll To Top Button */}
        <ScrollToTop />

        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
