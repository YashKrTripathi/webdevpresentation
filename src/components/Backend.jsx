import { motion } from 'framer-motion'
import { Smartphone, Server, Database, ArrowRight, Instagram, UserCircle, Activity, Archive, HardDrive, Network, ShieldCheck, Briefcase, TrendingUp, Zap, Box, Cpu } from 'lucide-react'

export default function Backend() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto min-h-screen flex flex-col justify-center" id="backend">
      <motion.div
        className="text-center mb-24"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-primary font-headline font-bold text-xs uppercase tracking-[0.5em] mb-4 block">The Hidden Layer</span>
        <h2 className="font-headline text-5xl md:text-7xl font-black text-white uppercase tracking-tight">
          What is <span className="text-secondary italic">Backend?</span>
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative mb-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Connection Line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-24 z-10">
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/20"
          >
            <ArrowRight size={48} />
          </motion.div>
        </div>

        {/* Frontend POV (Instagram UI) */}
        <motion.div variants={itemVariants} className="relative group [perspective:1000px] h-[450px]">
          <div className="w-full h-full relative transition-[transform] duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            
            {/* Front Side */}
            <div className="absolute inset-0 bg-surface-container-high/30 backdrop-blur-md p-10 border border-white/5 rounded-2xl flex flex-col justify-between [backface-visibility:hidden]">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Smartphone size={120} />
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center mb-6 shadow-2xl transition-transform">
                  <Instagram className="text-white w-12 h-12 relative z-10" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <span className="text-white font-bold bg-black/50 px-4 py-2 rounded-full uppercase tracking-widest text-xs backdrop-blur-sm">Flip</span>
                  </div>
                </div>
                <h3 className="font-headline text-4xl font-bold text-white mb-2 text-center mt-2">Instagram UI</h3>
                <p className="text-on-surface-variant text-center max-w-xs">The buttons you tap, the feed you scroll, the stories you watch.</p>
              </div>

              <div className="border-t border-white/10 pt-4 mt-auto z-10 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-primary font-bold uppercase">Perspective</span>
                  <span className="text-2xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis ml-2">FRONTEND <span className="text-primary">POV</span></span>
                </div>
              </div>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 bg-surface-container-high/80 backdrop-blur-xl border border-primary/50 rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-6 shadow-[0_0_50px_rgba(84,231,139,0.2)]">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Frontend View Source Full</span>
              <img src="/UIcover.png" alt="Instagram Frontend Full" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>

          </div>
        </motion.div>

        {/* Backend POV (Instagram Servers) */}
        <motion.div variants={itemVariants} className="relative group [perspective:1000px] h-[450px]">
          <div className="w-full h-full relative transition-[transform] duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            
            {/* Front Side */}
            <div className="absolute inset-0 bg-surface-container-high/30 backdrop-blur-md p-10 border border-white/5 rounded-2xl flex flex-col justify-between [backface-visibility:hidden]">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Server size={120} />
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex gap-4 mb-6 transition-transform relative">
                  <div className="w-20 h-24 rounded-xl bg-surface-container border border-secondary/30 flex items-center justify-center shadow-xl">
                    <Server className="text-secondary w-10 h-10 relative z-10" />
                  </div>
                  <div className="w-20 h-24 rounded-xl bg-surface-container border border-secondary/30 flex items-center justify-center shadow-xl translate-y-4">
                    <Database className="text-secondary w-10 h-10 relative z-10" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <span className="text-white font-bold bg-black/50 px-4 py-2 rounded-full uppercase tracking-widest text-xs backdrop-blur-sm">Flip</span>
                  </div>
                </div>
                <h3 className="font-headline text-4xl font-bold text-white mb-2 text-center mt-2">Instagram Servers</h3>
                <p className="text-on-surface-variant text-center max-w-xs">Where photos are saved, likes are counted, and feeds are generated.</p>
              </div>

              <div className="border-t border-white/10 pt-4 mt-auto z-10 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-secondary font-bold uppercase">Perspective</span>
                  <span className="text-2xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis ml-2">BACKEND <span className="text-secondary">POV</span></span>
                </div>
              </div>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 bg-surface-container-high/80 backdrop-blur-xl border border-secondary/50 rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-6 shadow-[0_0_50px_rgba(165,231,255,0.2)]">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4">Backend View Source Full</span>
              <img src="/INSTA SERVERS.jpg" alt="Instagram Backend Full" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>

          </div>
        </motion.div>
      </motion.div>

      {/* Auto Rickshaw Example */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Connection Line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-24 z-10">
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/20"
          >
            <ArrowRight size={48} />
          </motion.div>
        </div>

        {/* Frontend POV (Auto Rickshaw Outside) */}
        <motion.div variants={itemVariants} className="relative group [perspective:1000px] h-[450px]">
          <div className="w-full h-full relative transition-[transform] duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            
            {/* Front Side */}
            <div className="absolute inset-0 bg-surface-container-high/30 backdrop-blur-md p-10 border border-white/5 rounded-2xl flex flex-col justify-between [backface-visibility:hidden]">
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-full h-40 rounded-2xl bg-gradient-to-tr from-yellow-400/20 to-yellow-600/20 flex items-center justify-center mb-6 overflow-hidden border border-white/10 transition-transform">
                  <img src="/BACKEND.webp" alt="Auto Rickshaw Front" className="w-full h-full object-contain drop-shadow-2xl opacity-70" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold bg-black/50 px-4 py-2 rounded-full uppercase tracking-widest text-xs backdrop-blur-sm">Hover to Flip</span>
                  </div>
                </div>
                <h3 className="font-headline text-4xl font-bold text-white mb-2 text-center">The Wrapper</h3>
                <p className="text-on-surface-variant text-center max-w-xs">The yellow shell, the seats, the doors. What the passenger sees and interacts with.</p>
              </div>

              <div className="border-t border-white/10 pt-4 mt-auto z-10 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-primary font-bold uppercase">Perspective</span>
                  <span className="text-2xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis ml-2">FRONTEND <span className="text-primary">POV</span></span>
                </div>
              </div>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 bg-surface-container-high/80 backdrop-blur-xl border border-primary/50 rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-6 shadow-[0_0_50px_rgba(84,231,139,0.2)]">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Frontend View Source Full</span>
              <img src="/BACKEND.webp" alt="Auto Rickshaw Front Full" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>

          </div>
        </motion.div>

        {/* Backend POV (Auto Rickshaw Inside/Driver) */}
        <motion.div variants={itemVariants} className="relative group [perspective:1000px] h-[450px]">
          <div className="w-full h-full relative transition-[transform] duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            
            {/* Front Side */}
            <div className="absolute inset-0 bg-surface-container-high/30 backdrop-blur-md p-10 border border-white/5 rounded-2xl flex flex-col justify-between [backface-visibility:hidden]">
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-full h-40 rounded-2xl bg-gradient-to-tr from-blue-400/20 to-blue-600/20 flex items-center justify-center mb-6 overflow-hidden border border-white/10 transition-transform">
                   <img src="/BACKEND.jpg" alt="Auto Rickshaw Inside" className="w-full h-full object-contain drop-shadow-2xl opacity-70" />
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-bold bg-black/50 px-4 py-2 rounded-full uppercase tracking-widest text-xs backdrop-blur-sm">Hover to Flip</span>
                   </div>
                </div>
                <h3 className="font-headline text-4xl font-bold text-white mb-2 text-center mt-2">The Engine & Controls</h3>
                <p className="text-on-surface-variant text-center max-w-xs">The steering column, the gears, the engine doing the actual moving.</p>
              </div>

              <div className="border-t border-white/10 pt-4 mt-auto z-10 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-secondary font-bold uppercase">Perspective</span>
                  <span className="text-2xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis ml-2">BACKEND <span className="text-secondary">POV</span></span>
                </div>
              </div>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 bg-surface-container-high/80 backdrop-blur-xl border border-secondary/50 rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-6 shadow-[0_0_50px_rgba(165,231,255,0.2)]">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4">Backend View Source Full</span>
              <img src="/BACKEND.jpg" alt="Auto Rickshaw Inside Full" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>

          </div>
        </motion.div>
      </motion.div>

      {/* Workflow Visualization Section */}
      <motion.div
        className="mt-32 w-full max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <span className="text-primary font-headline font-bold text-xs uppercase tracking-[0.5em] mb-4 block">System Architecture</span>
          <h3 className="font-headline text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            The Request <span className="text-secondary italic">Lifecycle</span>
          </h3>
          <p className="text-on-surface-variant mt-4">Visualizing the flow of data behind the scenes.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
          {/* Connecting Line (Horizontal on Desktop, Vertical on Mobile) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-secondary/30 to-primary/30 md:hidden z-0"></div>
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 hidden md:block z-0 -translate-y-1/2"></div>

          {/* Step 1: User Login */}
          <motion.div
            className="flex flex-col items-center relative z-10 group w-full md:w-auto"
            variants={itemVariants}
          >
            <div className="w-24 h-24 rounded-full bg-surface-container-high border-2 border-primary/50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all shadow-[0_0_30px_rgba(84,231,139,0.2)]">
              <UserCircle className="w-10 h-10 text-primary" />
            </div>
            <h4 className="font-bold text-xl text-white text-center whitespace-nowrap">User Login</h4>
            <p className="text-xs text-primary mt-1 font-mono uppercase tracking-widest text-center">Frontend Action</p>
          </motion.div>

          <ArrowRight className="text-white/20 hidden md:block z-10" size={24} />

          {/* Step 2: APIs */}
          <motion.div
            className="flex flex-col items-center relative z-10 group w-full md:w-auto"
            variants={itemVariants}
          >
            <div className="w-24 h-24 rounded-full bg-surface-container-high border-2 border-white/50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <Activity className="w-10 h-10 text-white" />
            </div>
            <h4 className="font-bold text-xl text-white text-center whitespace-nowrap">APIs</h4>
            <p className="text-xs text-white/60 mt-1 font-mono uppercase tracking-widest text-center">The Bridge</p>
          </motion.div>

          <ArrowRight className="text-white/20 hidden md:block z-10" size={24} />

          {/* Step 3: Server Logic */}
          <motion.div
            className="flex flex-col items-center relative z-10 group w-full md:w-auto"
            variants={itemVariants}
          >
            <div className="w-24 h-24 rounded-full bg-surface-container-high border-2 border-secondary/50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-secondary/20 transition-all shadow-[0_0_30px_rgba(165,231,255,0.2)]">
              <Server className="w-10 h-10 text-secondary" />
            </div>
            <h4 className="font-bold text-xl text-white text-center whitespace-nowrap">Server Logic</h4>
            <p className="text-xs text-secondary mt-1 font-mono uppercase tracking-widest text-center">Processing</p>
          </motion.div>

          <ArrowRight className="text-white/20 hidden md:block z-10" size={24} />

          {/* Step 4: Data Storage */}
          <motion.div
            className="flex flex-col items-center relative z-10 group w-full md:w-auto"
            variants={itemVariants}
          >
            <div className="w-24 h-24 rounded-full bg-surface-container-high border-2 border-purple-500/50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <Archive className="w-10 h-10 text-purple-400" />
            </div>
            <h4 className="font-bold text-xl text-white text-center whitespace-nowrap">Data Storage</h4>
            <p className="text-xs text-purple-400 mt-1 font-mono uppercase tracking-widest text-center">On Servers</p>
          </motion.div>

        </div>
      </motion.div>

      {/* Technology Stack Section */}
      <motion.div
        className="mt-40 w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <span className="text-primary font-headline font-bold text-xs uppercase tracking-[0.5em] mb-4 block">The Arsenal</span>
          <h3 className="font-headline text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Technology <span className="text-secondary italic">Stack</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Languages */}
          <motion.div variants={itemVariants} className="bg-surface-container-high/30 backdrop-blur-md p-8 border border-white/5 rounded-2xl group hover:border-primary/30 transition-colors">
            <h4 className="font-headline text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Languages</h4>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex flex-col items-center gap-2 group/icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-16 h-16 group-hover/icon:scale-110 transition-transform drop-shadow-lg" alt="Node.js" />
                <span className="text-xs text-on-surface-variant font-bold">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-2 group/icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-16 h-16 group-hover/icon:scale-110 transition-transform drop-shadow-lg" alt="Python" />
                <span className="text-xs text-on-surface-variant font-bold">Python</span>
              </div>
              <div className="flex flex-col items-center gap-2 group/icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="w-16 h-16 group-hover/icon:scale-110 transition-transform drop-shadow-lg" alt="Java" />
                <span className="text-xs text-on-surface-variant font-bold">Java</span>
              </div>
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div variants={itemVariants} className="bg-surface-container-high/30 backdrop-blur-md p-8 border border-white/5 rounded-2xl group hover:border-secondary/30 transition-colors">
            <h4 className="font-headline text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Databases</h4>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex flex-col items-center gap-2 group/icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-16 h-16 group-hover/icon:scale-110 transition-transform drop-shadow-lg" alt="MongoDB" />
                <span className="text-xs text-on-surface-variant font-bold">MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-2 group/icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" className="w-16 h-16 group-hover/icon:scale-110 transition-transform drop-shadow-lg" alt="MySQL" />
                <span className="text-xs text-on-surface-variant font-bold">MySQL</span>
              </div>
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div variants={itemVariants} className="bg-surface-container-high/30 backdrop-blur-md p-8 border border-white/5 rounded-2xl group hover:border-purple-500/30 transition-colors">
            <h4 className="font-headline text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Frameworks</h4>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex flex-col items-center gap-2 group/icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className="w-16 h-16 group-hover/icon:scale-110 transition-transform drop-shadow-lg bg-white/90 rounded-full p-2" alt="Express.js" />
                <span className="text-xs text-on-surface-variant font-bold">Express.js</span>
              </div>
              <div className="flex flex-col items-center gap-2 group/icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" className="w-16 h-16 group-hover/icon:scale-110 transition-transform drop-shadow-lg bg-white/90 rounded-md p-1" alt="Django" />
                <span className="text-xs text-on-surface-variant font-bold">Django</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* What Will You Learn Section */}
      <motion.div
        className="mt-40 mb-20 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <span className="text-secondary font-headline font-bold text-xs uppercase tracking-[0.5em] mb-4 block">Curriculum</span>
          <h3 className="font-headline text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            What Will You <span className="text-primary italic">Learn?</span>
          </h3>
        </div>

        <div className="flex flex-col gap-6">
          {[
            { icon: HardDrive, title: 'Server Creation From Scratch', desc: 'Build scalable local and cloud servers from zero.', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30' },
            { icon: Network, title: 'API Creation', desc: 'Master RESTful principles using GET, POST, PUT, DELETE.', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/30' },
            { icon: Database, title: 'DB Connection', desc: 'Securely interface with SQL and NoSQL databases.', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30' },
            { icon: ShieldCheck, title: 'Auth Creation', desc: 'Implement secure login, hashing, and JWT authorization.', color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/30' },
            { icon: Briefcase, title: 'Real World Projects', desc: 'Build production-ready industry examples.', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/30' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="flex items-center gap-6 p-6 rounded-2xl bg-surface-container-high/30 border border-white/5 hover:bg-surface-container-high/50 transition-colors group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center border ${item.bg} ${item.border} group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">{item.title}</h4>
                  <p className="text-on-surface-variant">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Why Choose Backend Section */}
      <motion.div
        className="mt-40 mb-32 w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <span className="text-primary font-headline font-bold text-xs uppercase tracking-[0.5em] mb-4 block">The Advantage</span>
          <h3 className="font-headline text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Why Choose <span className="text-secondary italic">Backend?</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: TrendingUp,
              title: 'High Demand Skill',
              desc: 'Companies are always in need of architects who can power the apps.',
              color: 'text-green-400',
              borderColor: 'hover:border-green-400/50',
              gradient: 'from-green-400/10 to-transparent'
            },
            {
              icon: Zap,
              title: 'Real Problem Solving',
              desc: 'Tackle intense logical challenges, optimization, and complex algorithms every day.',
              color: 'text-yellow-400',
              borderColor: 'hover:border-yellow-400/50',
              gradient: 'from-yellow-400/10 to-transparent'
            },
            {
              icon: Box,
              title: 'Scalable Systems',
              desc: 'Design architecture capable of handling millions of simultaneous user requests.',
              color: 'text-blue-400',
              borderColor: 'hover:border-blue-400/50',
              gradient: 'from-blue-400/10 to-transparent'
            },
            {
              icon: Cpu,
              title: 'Core of Software Eng',
              desc: 'Understand the fundamental lifeblood of computing and web infrastructure.',
              color: 'text-purple-400',
              borderColor: 'hover:border-purple-400/50',
              gradient: 'from-purple-400/10 to-transparent'
            }
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                className={`bg-surface-container-high/30 backdrop-blur-md p-8 border border-white/5 rounded-2xl group transition-all duration-300 ${card.borderColor} relative overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10 flex items-start gap-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-black/50 border border-white/10 group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <Icon className={`w-7 h-7 ${card.color}`} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white tracking-tight mb-2">{card.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

    </section>
  )
}
