import { motion } from 'framer-motion'

export default function AdvancedConcepts() {
  const concepts = [
    {
      title: 'JWT',
      description: 'Stateless authentication using signed tokens for secure communication between systems.',
      color: 'primary',
    },
    {
      title: 'GraphQL',
      description: 'Efficient data fetching using a flexible query language for APIs, minimizing over-fetching.',
      color: 'secondary',
    },
    {
      title: 'WebSockets',
      description: 'Full-duplex communication channels over a single TCP connection for real-time updates.',
      color: 'tertiary',
    },
    {
      title: 'Cloud Edge',
      description: 'Deploying serverless functions at the network edge for ultra-low latency global performance.',
      color: 'primary',
    },
  ]

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
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto" id="advanced">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-primary font-headline font-bold text-xs uppercase tracking-[0.5em] mb-4 block">Level 100+</span>
        <h2 className="font-headline text-6xl font-black text-white uppercase tracking-tight">
          Pro Layer <span className="text-secondary italic">Stack</span>
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {concepts.map((concept, index) => {
          const borderColor = concept.color === 'primary' ? 'rgba(84, 231, 139, 0.3)' : concept.color === 'secondary' ? 'rgba(165, 231, 255, 0.3)' : 'rgba(228, 191, 255, 0.3)'
          const titleColor = concept.color === 'primary' ? '#98ffb4' : concept.color === 'secondary' ? '#a5e7ff' : '#f6e3ff'

          return (
            <motion.div
              key={index}
              className="bg-surface-container-high/20 border border-white/5 p-10 group hover:border-opacity-100 transition-all rounded-lg"
              variants={itemVariants}
              whileHover={{
                y: -8,
                borderColor: borderColor,
                backgroundColor: 'rgba(32, 31, 31, 0.4)',
              }}
            >
              <motion.h5 className="font-bold mb-4 tracking-tight text-xl" style={{ color: titleColor }} whileHover={{ scale: 1.1 }}>
                {concept.title}
              </motion.h5>
              <p className="text-on-surface-variant">{concept.description}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
