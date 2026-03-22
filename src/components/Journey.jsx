import { motion } from 'framer-motion'

export default function Journey() {
  const steps = [
    {
      number: '01',
      title: 'Core Stack',
      description: 'Mastering the trifecta: HTML5 Semantic Structure, CSS Modern Layouts (Grid/Flex), and Vanilla JS Fundamentals.',
      color: 'primary',
      shadowColor: 'rgba(84,231,139,0.1)',
    },
    {
      number: '02',
      title: 'Strategic Impact',
      description: 'Implementation of Frameworks (React, Vue, Svelte) and State Management to handle complex user interactions.',
      color: 'secondary',
      shadowColor: 'rgba(165,231,255,0.1)',
    },
    {
      number: '03',
      title: 'Modern Tooling',
      description: 'Deploying with CI/CD, optimizing with Next.js/Nuxt, and integrating AI-driven development workflows.',
      color: 'tertiary',
      shadowColor: 'rgba(228,191,255,0.1)',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="py-32 bg-surface-container-lowest/50 relative overflow-hidden" id="journey">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-headline text-6xl font-black text-white uppercase tracking-tight">
            The Frontend <span className="text-primary italic">Journey</span>
          </h2>
          <div className="w-32 h-1.5 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-16 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative z-10 text-center journey-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="journey-card-inner"
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 10 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className={`w-32 h-32 bg-background border-2 border-${step.color} mx-auto mb-8 flex items-center justify-center font-headline font-black text-5xl text-${step.color}`}
                  style={{
                    borderColor: step.color === 'primary' ? '#98ffb4' : step.color === 'secondary' ? '#a5e7ff' : '#f6e3ff',
                    boxShadow: `0 0 40px ${step.shadowColor}`,
                  }}
                  animate={{ boxShadow: [`0 0 20px ${step.shadowColor}`, `0 0 40px ${step.shadowColor}`, `0 0 20px ${step.shadowColor}`] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span style={{ color: step.color === 'primary' ? '#98ffb4' : step.color === 'secondary' ? '#a5e7ff' : '#f6e3ff' }}>
                    {step.number}
                  </span>
                </motion.div>
                <h4 className="font-headline text-2xl font-bold text-white mb-4 uppercase">{step.title}</h4>
                <p className="text-on-surface-variant leading-relaxed">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
