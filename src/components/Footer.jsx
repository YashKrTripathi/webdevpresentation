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
        className="flex flex-col md:flex-row justify-between items-center px-12 gap-10 max-w-[1440px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-3xl font-black tracking-tighter text-[#54e78b] italic font-headline"
          whileHover={{ scale: 1.1 }}
        >
          GEEKVERSE
        </motion.div>

        <motion.div
          className="font-body text-xs tracking-[0.2em] uppercase text-white/30 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          © 2024 GEEKVERSE // ARCHITECTING THE KINETIC CODEX
        </motion.div>

        <motion.div
          className="flex gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {['Github', 'Discord', 'Documentation'].map((link, i) => (
            <motion.a
              key={link}
              href="#"
              className="text-xs tracking-widest uppercase text-white/40 hover:text-[#54e78b] transition-colors"
              custom={i}
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}
