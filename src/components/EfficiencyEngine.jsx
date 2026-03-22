import { motion } from 'framer-motion'

export default function EfficiencyEngine() {
  const tools = ['Loveable', 'Cursor', 'Gemini', 'Trae']

  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden">
      <motion.div
        className="bg-surface-container-high/20 rounded-2xl overflow-hidden relative border border-white/5 backdrop-blur-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            className="p-12 md:p-24"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-5xl md:text-6xl font-black text-white mb-6 uppercase leading-tight">
              Efficiency <span className="text-primary italic">Engine</span>
            </h2>
            <h3 className="text-secondary font-headline font-bold text-xl mb-8 tracking-[0.2em] uppercase">
              Vibe Coding Ecosystem
            </h3>
            <p className="text-on-surface-variant mb-12 text-lg leading-relaxed">
              Programming is evolving. We are entering the era of "Vibe Coding"—where developer intent is translated instantly into code. But remember:{' '}
              <span className="text-white font-bold italic">Use AI with Understanding.</span>
            </p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {tools.map((tool, index) => (
                <motion.span
                  key={index}
                  className="bg-surface-container-highest/50 border border-white/10 text-on-surface px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default rounded-lg"
                  whileHover={{ scale: 1.1, borderColor: 'rgba(84, 231, 139, 0.5)' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>

            <motion.button
              className="flex items-center gap-3 text-primary font-headline font-bold uppercase text-sm tracking-widest group hover:text-[#6dfe9f] transition-colors"
              whileHover={{ x: 10 }}
            >
              Explore Ecosystem
              <span className="group-hover:translate-x-3 transition-transform">→</span>
            </motion.button>
          </motion.div>

          <motion.div
            className="relative min-h-[500px] bg-[#050505] border-l border-white/5 overflow-hidden flex items-center justify-center p-12"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md space-y-6 font-mono text-sm">
              <motion.div className="text-primary/40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                &gt; Initializing neural_link_v2...
              </motion.div>
              <motion.div className="text-primary/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                &gt; Context window expanded: 1M tokens.
              </motion.div>
              <motion.div className="text-primary/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                &gt; Analyzing prompt intent: "Build me a kinetic UI"
              </motion.div>
              <motion.div className="text-secondary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                &gt; Generating boilerplate structure... [DONE]
              </motion.div>
              <motion.div className="text-primary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                &gt; Applying glassmorphic styling... [DONE]
              </motion.div>

              <motion.div
                className="text-white p-6 border border-primary/30 bg-primary/5 mt-8 relative rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                <div className="absolute -top-3 left-4 bg-[#050505] px-2 text-[10px] text-primary/50 uppercase">output.html</div>
                <pre className="overflow-x-auto text-xs text-primary">
                  {`<div class="kinetic-container">
  <h1>Architecting The Future</h1>
</div>`}
                </pre>
              </motion.div>
            </div>
            <div className="absolute bottom-6 right-8 text-[10px] text-white/20 uppercase font-headline tracking-[0.3em]">AI Core v4.2</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
