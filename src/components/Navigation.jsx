import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const navItems = ['Hero', 'Journey', 'Frontend', 'Backend', 'Architecture', 'Advanced']
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none">
      <motion.nav
        className="pointer-events-auto"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center gap-2 px-6 rounded-full"
          animate={{
            paddingTop: isScrolled ? '8px' : '12px',
            paddingBottom: isScrolled ? '8px' : '12px',
            gap: isScrolled ? '0px' : '12px',
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: '#000000',
            border: '1px solid rgba(84, 231, 139, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
          }}
        >
          {/* Logo - Video */}
          <video
            autoPlay
            muted
            loop
            className={`object-contain transition-all duration-300 ${
              isScrolled ? 'h-8 w-auto' : 'h-12 w-auto'
            }`}
          >
            <source src="/DDD.mkv" type="video/x-matroska" />
            <source src="/DDD.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Divider */}
          <motion.div
            className="hidden md:block w-px bg-[#54e78b]/30"
            animate={{
              height: isScrolled ? '0px' : '20px',
              opacity: isScrolled ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Nav Items */}
          <motion.div
            className="hidden md:flex items-center gap-3 font-headline tracking-wide uppercase font-bold"
            animate={{
              opacity: isScrolled ? 0 : 1,
              width: isScrolled ? '0px' : 'auto',
              overflow: 'hidden',
            }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#54e78b] hover:text-white transition-colors px-4 py-2 rounded hover:bg-[#54e78b]/10 text-sm whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.nav>
    </div>
  )
}
