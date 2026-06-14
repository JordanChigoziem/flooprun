import { motion } from 'framer-motion'

const newsItems = [
  {
    id: 1,
    tag: 'UPDATE',
    tagColor: 'bg-red-500',
    image: '/assets/images/gameplay1.png',
    title: 'New Floops Incoming! Meet Sprout 🌱',
    date: 'MAY 10, 2025',
  },
  {
    id: 2,
    tag: 'EVENT',
    tagColor: 'bg-purple-500',
    image: '/assets/images/gameplay2.png',
    title: 'Daily Chaos Mode Is Live!',
    date: 'MAY 8, 2025',
  },
  {
    id: 3,
    tag: 'UPDATE',
    tagColor: 'bg-red-500',
    image: '/assets/images/gameplay3.png',
    title: 'Version 1.3.0 Patch Notes',
    date: 'MAY 5, 2025',
  },
]

export default function NewsSection() {
  return (
    <section
      id="news"
      className="relative py-20 overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <img src="/assets/images/sparkle-left.png" alt="" className="w-8 h-8 object-contain" style={{ filter: 'invert(60%) sepia(100%) saturate(500%) hue-rotate(0deg)' }} />
          <h2 className="font-fredoka text-center text-xl md:text-2xl text-floop-navy tracking-wide uppercase">
            LATEST NEWS
          </h2>
          <img src="/assets/images/sparkle-right.png" alt="" className="w-8 h-8 object-contain" style={{ filter: 'invert(60%) sepia(100%) saturate(500%) hue-rotate(0deg)' }} />
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, shadow: 'xl' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
            >
              {/* Image with tag */}
              <div
                className="relative w-full h-56 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7B35F0, #FF3FA4)' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none' }}
                />

                {/* Tag badge */}
                <span className={`absolute top-3 left-3 z-20 ${item.tagColor} text-white text-xs font-black font-nunito px-3 py-1 rounded-lg`}>
                  {item.tag}
                </span>
              </div>

              {/* Card content */}
              <div className="px-5 py-5 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-nunito font-black text-floop-navy text-lg leading-snug mb-2 group-hover:text-floop-purple transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="font-nunito text-gray-400 text-xs tracking-widest uppercase">
                    {item.date}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-floop-purple flex items-center justify-center text-floop-purple group-hover:bg-floop-purple group-hover:text-white transition-all duration-200">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}