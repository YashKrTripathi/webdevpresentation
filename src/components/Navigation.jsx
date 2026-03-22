import { motion } from 'framer-motion'

export default function Navigation() {
  const navItems = ['Hero', 'Journey', 'Frontend', 'Backend', 'Architecture', 'Advanced']

  const logoVariants = {
    show: { display: 'block', opacity: 1 },
    hide: { display: 'none', opacity: 0 },
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 pointer-events-none">
      <motion.nav
        className="pointer-events-auto"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="flex items-center gap-3 px-12 py-6 rounded-full"
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
            className="h-16 w-auto object-contain"
          >
            <source src="/DDD.mkv" type="video/x-matroska" />
            <source src="/DDD.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-[#54e78b]/30" />

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-3 font-headline tracking-wide text-base uppercase font-bold">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#54e78b] hover:text-white transition-colors px-6 py-3 rounded hover:bg-[#54e78b]/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  )
}
