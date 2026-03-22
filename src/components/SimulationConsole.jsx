import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

export default function SimulationConsole() {
  const logLines = [
    { type: 'SYSTEM', text: 'Booting core modules...' },
    { type: 'CLIENT', text: 'Establishing handshake with DYPIU-SERVER...' },
    { type: 'SYSTEM', text: 'Authorization level: ADMIN' },
    { type: 'separator', text: '------------------------------------------------------------' },
    { type: 'command', text: 'npm install @geekverse/future-web' },
    { type: 'output', text: 'added 1422 packages from 208 contributors and audited 1423 packages in 4.2s' },
    { type: 'command', text: 'geekverse deploy --env production' },
    { type: 'output-secondary', text: 'Deploying to Global Edge Nodes... [##########] 100%' },
    { type: 'SUCCESS', text: 'Deployment synchronized across 24 edge locations.' },
    { type: 'cursor', text: '$' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
      <motion.div
        className="bg-[#020202] rounded-lg border border-primary/30 p-8 shadow-[0_0_50px_rgba(84,231,139,0.15)] relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Scanline overlay */}
        <div className="absolute inset-0 scanline opacity-20"></div>

        {/* Header */}
        <motion.div
          className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Terminal className="w-5 h-5 text-primary" />
          <h3 className="font-headline font-bold text-sm text-white uppercase tracking-[0.4em]">Simulation Console v1.0.4</h3>
          <div className="ml-auto flex gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/20"></div>
            <motion.div
              className="w-3 h-3 rounded-full bg-primary"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Console output */}
        <motion.div className="font-mono text-sm h-[400px] overflow-y-auto space-y-3 relative z-10 scrollbar-hide" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {logLines.map((line, index) => {
            let textColor = 'text-white'
            let iconColor = ''

            if (line.type === 'SYSTEM') {
              textColor = 'text-primary font-bold'
              iconColor = 'text-primary'
            } else if (line.type === 'CLIENT') {
              textColor = 'text-secondary font-bold'
              iconColor = 'text-secondary'
            } else if (line.type === 'SUCCESS') {
              textColor = 'text-primary font-bold'
              iconColor = 'text-primary'
            } else if (line.type === 'separator') {
              textColor = 'text-white/20'
            } else if (line.type === 'command') {
              textColor = 'text-primary-fixed-dim'
            } else if (line.type === 'output') {
              textColor = 'text-white/80'
            } else if (line.type === 'output-secondary') {
              textColor = 'text-secondary'
            } else if (line.type === 'cursor') {
              textColor = 'text-primary'
            }

            return (
              <motion.div key={index} className="flex gap-4" variants={itemVariants}>
                {line.type === 'SYSTEM' || line.type === 'CLIENT' || line.type === 'SUCCESS' ? (
                  <>
                    <span className={iconColor}>[{line.type}]</span>
                    <span className={textColor}>{line.text}</span>
                  </>
                ) : line.type === 'separator' ? (
                  <span className={textColor}>{line.text}</span>
                ) : line.type === 'command' ? (
                  <>
                    <span className="text-primary">root@geekverse:~$</span>
                    <span className={textColor}>{line.text}</span>
                  </>
                ) : line.type === 'output' ? (
                  <span className={textColor}>{line.text}</span>
                ) : line.type === 'output-secondary' ? (
                  <span className={textColor}>{line.text}</span>
                ) : line.type === 'cursor' ? (
                  <>
                    <span className={textColor}>root@geekverse:~{line.text}</span>
                    <motion.span
                      className="w-2.5 h-5 bg-primary inline-block"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    ></motion.span>
                  </>
                ) : null}
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
