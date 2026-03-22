import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

export default function RenderingMechanics() {
  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  const steps = [
    {
      icon: 'click',
      title: 'User Interaction',
      description: 'Click, scroll, or input events triggered by the user in the browser window.',
      color: 'primary',
    },
    {
      title: 'Browser Parsing',
      description: 'DOM/CSSOM tree construction and Javascript execution via the V8 engine.',
      color: 'secondary',
    },
    {
      title: 'UI Rendering',
      description: 'Paint and composite layers are generated to produce the visual frame.',
      color: 'tertiary',
    },
  ]

  const comparisonData = [
    {
      title: 'Client-Side',
      subtitle: '(CSR)',
      color: 'primary',
      pros: ['Fast subsequent page transitions.', 'Reduced server load for dynamic content.'],
      cons: ['Heavier initial JS bundle & SEO challenges.'],
    },
    {
      title: 'Server-Side',
      subtitle: '(SSR)',
      color: 'secondary',
      pros: ['Near-instant first contentful paint (FCP).', 'Optimal SEO performance out of the box.'],
      cons: ['Increased server compute and TTFB latency.'],
    },
  ]

  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto" id="architecture">
      <motion.h2
        className="font-headline text-5xl font-black text-white text-center mb-24 uppercase tracking-tighter"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Rendering <span className="text-secondary">Mechanics</span>
      </motion.h2>

      {/* Flow Steps */}
      <motion.div className="flex flex-col md:flex-row items-center justify-center gap-8 relative mb-32">
        {steps.map((step, index) => (
          <motion.div key={index} custom={index} variants={stepVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div
              className={`flex-1 w-full bg-surface-container-low/40 border-l-4 p-10 hover:bg-surface-container-high/40 transition-colors rounded-lg`}
              style={{
                borderLeftColor: step.color === 'primary' ? '#98ffb4' : step.color === 'secondary' ? '#a5e7ff' : '#f6e3ff',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block" style={{ color: step.color === 'primary' ? '#98ffb4' : step.color === 'secondary' ? '#a5e7ff' : '#f6e3ff' }}>
                Step {String(index + 1).padStart(2, '0')}
              </span>
              <h4 className="font-headline text-2xl text-white font-bold mb-4">{step.title}</h4>
              <p className="text-on-surface-variant">{step.description}</p>
            </motion.div>
            {index < steps.length - 1 && <ArrowRight className="hidden md:block text-outline-variant opacity-30 rotate-0 w-6 h-6" />}
          </motion.div>
        ))}
      </motion.div>

      {/* Comparison Cards */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {comparisonData.map((item, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r opacity-10 group-hover:opacity-30 transition duration-500 rounded-xl blur-xl"
              style={{
                background: item.color === 'primary' ? 'linear-gradient(to right, #98ffb4, transparent)' : 'linear-gradient(to right, #a5e7ff, transparent)',
              }}
            ></motion.div>
            <div className="relative bg-surface-container-low/50 backdrop-blur-xl p-12 rounded-xl h-full border border-white/5">
              <h3 className="font-headline text-4xl font-black text-white mb-8 uppercase">
                {item.title} <span style={{ color: item.color === 'primary' ? '#98ffb4' : '#a5e7ff' }} className="italic">
                  {item.subtitle}
                </span>
              </h3>
              <ul className="space-y-6">
                {item.pros.map((pro, i) => (
                  <motion.li key={i} className="flex items-start gap-4" whileHover={{ x: 5 }}>
                    <CheckCircle className="flex-shrink-0 w-5 h-5 mt-0.5" style={{ color: item.color === 'primary' ? '#98ffb4' : '#a5e7ff' }} />
                    <span className="text-on-surface-variant text-lg">{pro}</span>
                  </motion.li>
                ))}
                {item.cons.map((con, i) => (
                  <motion.li key={`con-${i}`} className="flex items-start gap-4 opacity-60" whileHover={{ x: 5 }}>
                    <AlertCircle className="flex-shrink-0 w-5 h-5 mt-0.5 text-error" />
                    <span className="text-on-surface-variant text-lg">{con}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
