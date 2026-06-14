import { motion } from 'framer-motion'
import { FaGooglePlay, FaApple, FaSteam } from 'react-icons/fa'
 
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
 
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-xl">
 
          {/* Headline */}
          <motion.h1
            className="font-fredoka leading-tight mb-4"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="block text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-lg">
              ADVENTURE.
            </span>
            <span className="block text-6xl md:text-7xl lg:text-8xl text-floop-pink drop-shadow-lg">
              CHAOS.
            </span>
            <span className="block text-6xl md:text-7xl lg:text-8xl text-floop-yellow drop-shadow-lg">
              FLOOPS.
            </span>
          </motion.h1>
 
          {/* Subtext */}
          <motion.p
            className="font-nunito text-white text-base md:text-lg mb-8 leading-relaxed max-w-sm drop-shadow"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            Run, bounce, and dive into <br />chaotic worlds full of surprises,<br />
            challenges, and adorable Floops!
          </motion.p>
 
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            <button className="flex items-center gap-2 bg-floop-purple hover:bg-purple-600 text-white font-nunito font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50">
              <span className="text-lg">▶</span>
              <span className="flex flex-col items-start leading-none">
                <span className="text-base font-black">PLAY NOW</span>
                <span className="text-xs font-normal opacity-80">FREE TO PLAY</span>
              </span>
            </button>
 
            <button className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-floop-navy font-nunito font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105">
              <span className="text-lg">▶</span>
              <span className="text-base font-black">WATCH TRAILER</span>
            </button>
          </motion.div>
 
          {/* Platform Badges */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          >
            {[
              { icon: <FaGooglePlay className="text-2xl" />, label: 'GET IT ON', store: 'Google Play' },
              { icon: <FaApple className="text-2xl" />, label: 'Download on the', store: 'App Store' },
              { icon: <FaSteam className="text-2xl" />, label: 'Available on', store: 'STEAM' },
            ].map((badge) => (
              <button
                key={badge.store}
                className="flex items-center gap-2 bg-black/70 hover:bg-black/90 text-white border border-white/30 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105"
              >
                <span className="text-xl">{badge.icon}</span>
                <span className="flex flex-col items-start leading-none">
                  <span className="text-xs opacity-70">{badge.label}</span>
                  <span className="text-sm font-bold font-nunito">{badge.store}</span>
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
 