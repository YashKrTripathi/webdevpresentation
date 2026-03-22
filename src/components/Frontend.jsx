import { motion } from 'framer-motion'
import { Layers, GitBranch, Smartphone } from 'lucide-react'

export default function Frontend() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto" id="frontend">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-xl">
          <h2 className="font-headline text-5xl md:text-7xl font-black text-white uppercase leading-tight mb-4">
            What is <span className="text-secondary">Frontend?</span>
          </h2>
          <p className="text-on-surface-variant text-lg">
            Beyond painting pixels. It's the orchestration of state, performance, and accessibility.
          </p>
        </div>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-outline-variant to-transparent mx-8 hidden md:block"></div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Large Card */}
        <motion.div
          className="md:col-span-8 relative group overflow-hidden rounded-xl h-[450px]"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <img
            alt="Code Workspace"
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU93Mlx0vL0s61NkspWni3T5c_5m3DjFtJuWpHAJzZVC9cxlUCmAohn7tzMqLcLujcmGfQKY8X6gD0wEQm_G7pjC-Ga-TCzvpB0wMBCiXGWlbMIAau6I9MHaELwZubT6xolAAapy-zof45KdwMnQ2_qt7yw6zYAFOYgoEwapksVWF8flvO01obOjjtb3Wghsbp6ZXs0mCZXkQgexuycOcu1nl3QmVMf2ptRyCDmdcIEMM9ovoivGUOQDUmgR61F2jc289BusfnH5k"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
          <motion.div
            className="absolute bottom-0 p-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 mb-4 inline-block uppercase tracking-widest border border-primary/30">
              Core Concept
            </span>
            <h3 className="font-headline text-4xl font-bold text-white mb-2">Frontend vs Backend</h3>
            <p className="text-on-surface-variant max-w-md text-lg">
              The client-side experience vs server-side logic. The interface where human intuition meets computational power.
            </p>
          </motion.div>
        </motion.div>

        {/* Side Cards */}
        <motion.div
          className="md:col-span-4 bg-surface-container-high/30 backdrop-blur-md p-10 flex flex-col justify-between group border border-white/5 hover:border-primary/20 transition-colors rounded-xl"
          variants={itemVariants}
          whileHover={{ y: -5, borderColor: 'rgba(84, 231, 139, 0.5)' }}
        >
          <Layers className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="font-headline text-3xl font-bold text-white mb-2">Virtual DOM</h3>
            <p className="text-on-surface-variant">Efficient reconciliation algorithms that minimize direct manipulation of the actual DOM.</p>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-4 bg-surface-container-high/30 backdrop-blur-md p-10 flex flex-col justify-between group border border-white/5 hover:border-secondary/20 transition-colors rounded-xl"
          variants={itemVariants}
          whileHover={{ y: -5, borderColor: 'rgba(165, 231, 255, 0.5)' }}
        >
          <GitBranch className="w-12 h-12 text-secondary group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="font-headline text-3xl font-bold text-white mb-2">Architecture</h3>
            <p className="text-on-surface-variant">Component-based structures that enable reusability and scalable application logic.</p>
          </div>
        </motion.div>

        {/* Wide Card */}
        <motion.div
          className="md:col-span-8 bg-surface-container-high/30 backdrop-blur-md p-10 flex flex-col md:flex-row items-center gap-10 border border-white/5 rounded-xl"
          variants={itemVariants}
          whileHover={{ borderColor: 'rgba(84, 231, 139, 0.3)' }}
        >
          <div className="w-full md:w-1/2 aspect-video bg-[#0a0a0a] overflow-hidden relative border border-outline-variant/20 rounded-lg">
            <img
              alt="Responsive devices"
              className="w-full h-full object-cover grayscale opacity-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMJUdUXoZvS_aR_i7-3ICaokU4hfLdJ3FSuPzi2lDkGQY4zQ5q_THYiZ1oNSYEBzSiKg6Q4ve9i53tLVkwdiqekO_2wuaukfc3-1F_TEnY7VSYWVcrKtuPq7XGQ4DQ0ZPZC16C8FFx2q2kpJSZEQeNDeg9tFcuf4VMmRwiex3FiS7W4jzy9_Zd3jBHKDY2FzBNb0bWcpn2aTeyIcMQayfjcEkyScqH7O3XbIdchyrubicH-zeaC7lsoWA5R9xVOiZOu00lWMkdptc"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Smartphone className="w-24 h-24 text-primary/20" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="font-headline text-3xl font-bold text-white mb-2">Responsive+</h3>
            <p className="text-on-surface-variant mb-6">
              Moving beyond breakpoints to fluid, adaptive layouts that respect user preference and device constraints.
            </p>
            <div className="flex gap-2">
              <span className="text-[10px] text-primary/60 border border-primary/20 px-3 py-1 font-bold">MOBILE-FIRST</span>
              <span className="text-[10px] text-primary/60 border border-primary/20 px-3 py-1 font-bold">PWA READY</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
