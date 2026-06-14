import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { floops } from '../data/floops'
import { useCallback } from 'react'

export default function FloopsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section
      id="floops"
      className="relative py-16 overflow-hidden"
      style={{ background: '#FFFFFF', marginTop: '-2px' }}
    >
      {/* SVG bean background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 1600 500"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
          style={{ position: 'absolute', top: 0, left: '-5%', width: '110%', height: '90%' }}
        >
          <defs>
            <radialGradient id="beanGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2D1B69" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#1A0A3C" stopOpacity="0.95" />
            </radialGradient>
          </defs>
          <path
            d="
              M 300,30
              Q 800,90 1300,30
              Q 1600,10 1600,200
              Q 1600,450 1300,450
              Q 800,480 300,450
              Q 0,450 0,200
              Q 0,10 300,30
              Z
            "
            fill="url(#beanGradient)"
          />
        </svg>
      </div>

      {/* Content on top of SVG bean */}
      <div className="relative z-10 max-w-7xl mx-auto px-20">

        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <img src="/assets/images/sparkle-left.png" alt="" className="w-8 h-8 object-contain" style={{ filter: 'invert(60%) sepia(100%) saturate(500%) hue-rotate(280deg)' }} />
          <h2 className="font-fredoka text-center text-xl md:text-2xl text-white tracking-widest uppercase">
            MEET THE FLOOPS
          </h2>
          <img src="/assets/images/sparkle-right.png" alt="" className="w-8 h-8 object-contain" style={{ filter: 'invert(60%) sepia(100%) saturate(500%) hue-rotate(280deg)' }} />
        </div>

        {/* Arrows + Cards */}
        <div className="flex items-center gap-4">

          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            className="flex-shrink-0 bg-floop-purple hover:bg-purple-600 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl font-bold shadow-xl transition-all hover:scale-110"
          >
            ‹
          </button>

          {/* Cards */}
          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex gap-2">
              {floops.map((floop, index) => {
                const arcOffsets = [0, 0, 0, 0, 0]
                const clipPaths = [
                  'polygon(0% 0%, 100% 5%, 95% 100%, 5% 100%)',
                  'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
                  'polygon(0% 0%, 100% 5%, 95% 100%, 5% 100%)',
                  'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
                  'polygon(0% 0%, 100% 5%, 95% 100%, 5% 100%)',
                ]
                return (
                  <div
                    key={floop.id}
                    className="flex-none"
                    style={{
                      width: 'calc(19% - 10px)',
                      marginTop: `${arcOffsets[index]}px`
                    }}
                  >
                    <div
                      className={`relative bg-gradient-to-b ${floop.bg} rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer`}
                      style={{ height: '210px', clipPath: clipPaths[index] }}
                    >
                      {floop.isNew && (
                        <span className="absolute top-0 right-0 z-10 bg-red-500 text-white text-xs font-black px-3 py-3 rounded-bl-2xl">
                          NEW!
                        </span>
                      )}
                      <div className="absolute inset-0">
                        <img
                          src={floop.image}
                          alt={floop.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                        <div className="hidden w-full h-full items-center justify-center text-4xl">
                          👾
                        </div>
                      </div>
                      <div
                        className="absolute bottom-0 left-0 right-0 px-3 py-2"
                        style={{
                          background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
                        }}
                      >
                        <h3 className="font-fredoka text-white text-base font-bold tracking-wide text-center">
                          {floop.name}
                        </h3>
                        <p className="font-nunito text-white/80 text-xs text-center">
                          {floop.trait}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            className="flex-shrink-0 bg-floop-purple hover:bg-purple-600 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl font-bold shadow-xl transition-all hover:scale-110"
          >
            ›
          </button>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-floop-purple hover:bg-purple-600 text-white font-nunito font-bold px-10 py-3 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40 tracking-wide">
            VIEW ALL FLOOPS 👾
          </button>
        </div>
      </div>
    </section>
  )
}
