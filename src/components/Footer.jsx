import { motion } from 'framer-motion'

export default function Footer() {
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  return (
    <motion.footer
      className="bg-background w-full py-16 border-t border-white/5 relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-3xl font-black tracking-tighter text-[#54e78b] italic font-headline text-center w-full relative z-10"
        whileHover={{ scale: 1.1 }}
      >
        GEEKVERSE
      </motion.div>
    </motion.footer>
  )
}
