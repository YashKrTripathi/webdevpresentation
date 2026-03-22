import { motion } from 'framer-motion'
import { Server, Database } from 'lucide-react'

export default function Backend() {
  const features = [
    {
      icon: Server,
      title: 'API Gateways',
      description: 'Managing authentication, rate limiting, and routing.',
      color: 'primary',
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Querying NoSQL and SQL databases with optimized performance.',
      color: 'secondary',
    },
  ]

  return (
    <section className="py-32 bg-[#050505] border-y border-white/5" id="backend">
      <motion.div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-headline text-5xl md:text-7xl font-black text-white uppercase mb-10 leading-none">
            The <span className="text-primary italic">Backend</span> Engine
          </h2>
          <p className="text-on-surface-variant text-xl mb-12 leading-relaxed">
            Where data persistence meets business logic. We leverage Node.js and Express to build high-performance, scalable API gateways.
          </p>

          <motion.div className="space-y-8" variants={{ visible: { transition: { staggerChildren: 0.2 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="flex gap-6 items-center group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className={`w-16 h-16 flex-shrink-0 border flex items-center justify-center rounded-lg transition-colors`}
                    style={{
                      background: feature.color === 'primary' ? 'rgba(84, 231, 139, 0.05)' : 'rgba(165, 231, 255, 0.05)',
                      borderColor: feature.color === 'primary' ? 'rgba(84, 231, 139, 0.2)' : 'rgba(165, 231, 255, 0.2)',
                    }}
                    whileHover={{
                      background: feature.color === 'primary' ? 'rgba(84, 231, 139, 0.1)' : 'rgba(165, 231, 255, 0.1)',
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: feature.color === 'primary' ? '#98ffb4' : '#a5e7ff' }} />
                  </motion.div>
                  <div>
                    <h5 className="text-white text-xl font-bold mb-1">{feature.title}</h5>
                    <p className="text-on-surface-variant">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-surface-container-lowest/80 rounded-xl p-1 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-surface-container-high/40 p-4 flex gap-2 border-b border-white/5 items-center rounded-t-lg">
            <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
            <span className="text-[11px] text-white/40 ml-4 font-mono tracking-widest uppercase">server.js</span>
            <div className="ml-auto opacity-20">
              <span className="text-sm">📋</span>
            </div>
          </div>

          <motion.div
            className="p-10 font-mono text-sm overflow-x-auto leading-relaxed bg-[#0a0a0a]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <pre className="text-white/90">
              <span className="text-[#c678dd]">const</span> express = <span className="text-[#61afef]">require</span>
              <span className="text-[#98c379]">('express')</span>
              {'\n'}
              <span className="text-[#c678dd]">const</span> app = <span className="text-[#61afef]">express</span>();
              {'\n\n'}
              app.<span className="text-[#61afef]">get</span>
              <span className="text-[#98c379]">('/api/status'</span>, (req, res) =&gt; {'{'}
              {'\n'}
              &nbsp;&nbsp;res.<span className="text-[#61afef]">json</span>({'{'}
              {'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;status: <span className="text-[#98c379]">'Operational'</span>
              {','}
              {'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;version: <span className="text-[#98c379]">'2.4.0'</span>
              {','}
              {'\n'}
              &nbsp;&nbsp;&nbsp;&nbsp;latency: <span className="text-[#d19a66]">14</span>
              {'\n'}
              &nbsp;&nbsp;{'}'});
              {'\n'}
              {'}'});
              {'\n\n'}
              app.<span className="text-[#61afef]">listen</span>
              <span className="text-[#d19a66]">(8080</span>, () =&gt; {'{'}
              {'\n'}
              &nbsp;&nbsp;console.<span className="text-[#61afef]">log</span>
              <span className="text-[#98c379]">('Engine Ignite...')</span>;
              {'\n'}
              {'}'});
            </pre>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
