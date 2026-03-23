import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const leads = [
    {
      name: 'AZKA',
      role: 'WEBDEVFRONTEND LEAD',
      image: '/azka2.jpeg',
      position: 'left',
      color: '#98ffb4',
    },
    {
      name: 'YASH',
      role: 'WEBDEVBACKEND LEAD',
      image: '/yash.png',
      position: 'right',
      color: '#a5e7ff',
    },
  ]

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden pt-20"
      id="hero"
    >
      {/* Profile Circles - Side Panels */}
      {leads.map((lead) => (
        <motion.div
          key={lead.name}
          className={`absolute ${lead.position === 'left' ? 'left-4 md:left-8' : 'right-4 md:right-8'} flex flex-col items-center gap-6 hidden md:flex`}
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: [80, 0, 80] }}
          transition={{ 
            opacity: { duration: 0.8 },
            y: { delay: 0.8, duration: 3, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          {/* Image Circle */}
          <motion.div
            className="w-64 h-64 rounded-full border-4 p-1 overflow-hidden"
            style={{
              borderColor: lead.color,
              boxShadow: `0 0 40px ${lead.color}80`,
            }}
          >
            <img
              alt={lead.name}
              className="w-full h-full object-cover rounded-full"
              src={lead.image}
            />
          </motion.div>

          {/* Label */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: false }}
          >
            <div className="font-headline font-black text-sm uppercase tracking-widest" style={{ color: lead.color }}>
              {lead.name}
            </div>
            <div className="font-body text-xs opacity-70 mt-1">{lead.role}</div>
          </motion.div>
        </motion.div>
      ))}

      {/* Center Content */}
      <motion.div
        className="text-center max-w-4xl z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Session Label */}
        <motion.div
          className="mb-8 inline-block border border-primary/50 px-6 py-2 rounded-full text-primary text-xs font-headline font-bold tracking-[0.3em] uppercase"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          SESSION 01 : FUTURE WEB
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="font-headline font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Beyond HTML & <span className="text-primary">CSS</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          Presented by <span className="text-primary font-bold">GeeksforGeeks DYPIU</span> Campus Club.
          <br />
          Mastering the engine behind the interface.
        </motion.p>


      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll to Decode</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  )
}
