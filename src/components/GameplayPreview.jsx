import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { gameplaySlides } from '../data/floops'
import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function GameplayPreview() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <img src="/assets/images/sparkle-left.png" alt="" className="w-8 h-8 object-contain" style={{ filter: 'invert(60%) sepia(100%) saturate(500%) hue-rotate(180deg)' }} />
          <h2 className="font-fredoka text-center text-xl md:text-2xl text-floop-navy tracking-wide">
            GAMEPLAY PREVIEW
          </h2>
          <img src="/assets/images/sparkle-right.png" alt="" className="w-8 h-8 object-contain" style={{ filter: 'invert(60%) sepia(100%) saturate(500%) hue-rotate(180deg)' }} />
        </div>

        {/* Desktop — show all 3 side by side */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {gameplaySlides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className={`bg-gradient-to-br ${slide.bg} rounded-3xl overflow-hidden shadow-xl cursor-pointer`}
              style={{ aspectRatio: '16/10' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
            >
              <img
                src={slide.image}
                alt={`Gameplay ${slide.id}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden w-full h-full items-center justify-center text-7xl">
                🎮
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile — carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex gap-4">
              {gameplaySlides.map((slide) => (
                <div key={slide.id} className="flex-none w-full">
                  <div
                    className={`bg-gradient-to-br ${slide.bg} rounded-3xl overflow-hidden shadow-xl`}
                    style={{ aspectRatio: '16/10' }}
                  >
                    <img
                      src={slide.image}
                      alt={`Gameplay ${slide.id}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center text-7xl">
                      🎮
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {gameplaySlides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === selectedIndex ? 'bg-floop-purple w-6' : 'bg-gray-300 w-2'}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {gameplaySlides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-floop-purple w-6' : 'bg-gray-300 w-2'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}