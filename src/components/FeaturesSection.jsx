import { FaBolt, FaGlobe, FaCrown, FaGift } from 'react-icons/fa'
import { motion } from 'framer-motion'
 
const features = [
  {
    id: 1,
    icon: <FaBolt className="text-white text-3xl" />,
    title: 'FAST & CHAOTIC',
    desc: 'Speed up, dodge, bounce<br/>and survive the madness!',
    bg: 'bg-yellow-400',
  },
  {
    id: 2,
    icon: <img src="/assets/images/cat-icon.png" alt="cat" className="w-10 h-9 object-contain" />,
    title: 'ADORABLE FLOOPS',
    desc: 'Unlock and collect<br/>hilarious Floops!',
    bg: 'bg-purple-400',
  },
  {
    id: 3,
    icon: <FaGlobe className="text-white text-3xl" />,
    title: 'WILD WORLDS',
    desc: 'Explore crazy floating<br/>islands and biomes!',
    bg: 'bg-pink-500',
  },
  {
    id: 4,
    icon: <FaCrown className="text-white text-3xl" />,
    title: 'CHALLENGE FRIENDS',
    desc: 'Compete for high scores and global leaderboards!',
    bg: 'bg-blue-400',
  },
  {
    id: 5,
    icon: <FaGift className="text-white text-3xl" />,
    title: 'ENDLESS FUN',
    desc: 'New events, rewards<br/>and surprises always!',
    bg: 'bg-green-400',
  },
]
 
export default function FeaturesSection() {
  return (
    <section className="relative w-full" style={{ marginTop: '-100px', zIndex: 10 }}>
 
      {/* SVG shape */}
      <div className="relative w-full">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: '120px', display: 'block' }}
        >
          <path
            d="M0,120 L0,90
               C20,90 30,30 80,25
               C130,20 150,70 200,72
               C260,75 280,45 340,50
               C400,55 420,75 500,75
               C580,75 600,60 680,65
               C760,70 780,75 880,75
               C980,75 1000,65 1100,68
               C1200,71 1250,80 1350,75
               C1400,72 1430,78 1440,78
               L1440,120 Z"
            fill="#FFFFFF"
          />
        </svg>
 
        {/* Blue mascot — floating animation */}
        <motion.div
          className="absolute z-20 select-none pointer-events-none"
          style={{ left: '0px', top: '50px', transform: 'translateY(-20%)' }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.3))' }}>
            <img
              src="/assets/images/bluefloop.png"
              alt="Floop mascot"
              style={{
                width: '200px',
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.3))',
              }}
            />
          </div>
        </motion.div>
      </div>
 
      {/* Main white content area */}
      <div className="relative bg-floop-offwhite overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
 
        {/* Faint paw prints */}
        {[
          { cls: 'top-8 left-20', rot: '20deg' },
          { cls: 'top-16 right-32', rot: '-15deg' },
          { cls: 'bottom-12 left-1/3', rot: '40deg' },
          { cls: 'top-24 right-1/4', rot: '-30deg' },
        ].map((p, i) => (
          <div
            key={i}
            className={`absolute ${p.cls} text-purple-200 opacity-20 text-3xl select-none pointer-events-none`}
            style={{ transform: `rotate(${p.rot})` }}
          >
            🐾
          </div>
        ))}
 
        <div className="relative z-10 max-w-6xl mx-auto px-8 pb-16 pt-4">
 
          {/* Section heading */}
          <div className="flex items-center justify-center gap-3 mb-14">
            <img src="/assets/images/sparkle-left.png" alt="" className="w-8 h-8 object-contain" style={{ filter: 'invert(60%) sepia(100%) saturate(500%) hue-rotate(280deg)' }} />
            <h2 className="font-fredoka text-center text-xl md:text-2xl text-floop-navy tracking-wide uppercase">
              WHY YOU'LL LOVE FLOOPRUN
            </h2>
            <img src="/assets/images/sparkle-right.png" alt="" className="w-8 h-8 object-contain" style={{ filter: 'invert(60%) sepia(100%) saturate(500%) hue-rotate(280deg)' }} />
          </div>
 
          {/* Feature Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {features.map((f, index) => (
              <motion.div
                key={f.id}
                className="group flex flex-col items-center text-center gap-4 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              >
                <div
                  className={`${f.bg} w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-xl`}
                >
                  {f.icon}
                </div>
                <h3 className="font-fredoka text-floop-navy text-base md:text-lg tracking-wide leading-tight group-hover:text-floop-purple transition-colors duration-200 whitespace-nowrap">
                  {f.title}
                </h3>
                <p className="font-nunito text-gray-500 text-xs md:text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: f.desc }} />
              </motion.div>
            ))}
          </div>
 
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-12">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-floop-purple w-6' : 'bg-gray-300 w-2'}`}
              />
            ))}
          </div>
 
        </div>
      </div>
 
    </section>
  )
}
 