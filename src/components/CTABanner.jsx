import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section
      className="relative py-8 overflow-visible mx-auto"
      style={{
        background: 'linear-gradient(135deg, #7B35F0 0%, #9B59F5 50%, #7B35F0 100%)',
        borderRadius: '140px 140px 0 0',
        marginTop: '-20px',
      }}
    >
      {/* Left Floop decoration */}
      <motion.div
        style={{ position: 'absolute', left: '40px', top: '-52px' }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src="/assets/images/ctafloop1.png"
          alt="Floop"
          className="h-48 w-auto object-contain"
        />
      </motion.div>

      {/* Right Floop decoration */}
      <motion.div
        style={{ position: 'absolute', right: '80px', top: '-20px' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <img
          src="/assets/images/ctafloop2.png"
          alt="Floop"
          className="h-40 w-auto object-contain"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-16 flex flex-col md:flex-row items-center justify-center gap-16">

        {/* Text */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="font-fredoka text-white text-xl md:text-3xl lg:text-3xl mb-2 tracking-wide">
            READY TO JOIN THE CHAOS?
          </h2>
          <p className="font-nunito text-white/80 text-base md:text-lg">
            Jump in now and become the ultimate Floop!
          </p>
        </motion.div>

        {/* Button */}
        <motion.button
          className="flex items-center gap-3 bg-floop-gold hover:bg-yellow-400 text-floop-navy font-nunito font-black px-11 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/40 whitespace-nowrap flex-shrink-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <span className="text-xl">▶</span>
          <span className="flex flex-col items-start leading-none">
            <span className="text-lg font-black">PLAY NOW</span>
            <span className="text-xs font-normal opacity-70">FREE TO PLAY</span>
          </span>
        </motion.button>
      </div>
    </section>
  )
}