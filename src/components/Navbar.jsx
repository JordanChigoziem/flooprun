import { useState, useEffect } from 'react'
import { FaGamepad } from 'react-icons/fa'
import { motion } from 'framer-motion'

const navLinks = ['HOME', 'GAMEPLAY', 'FLOOPS', 'WORLDS', 'NEWS']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-floop-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.img
          src="/assets/images/logo.png"
          alt="FloopRun Logo"
          className="h-10 md:h-14 w-auto cursor-pointer"
          whileHover={{
            rotate: [0, -10, 10, -10, 10, 0],
            transition: { duration: 0.5 }
          }}
        />

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`font-nunito font-bold text-sm tracking-widest text-white hover:text-floop-pink transition-colors duration-200 ${
                  i === 0 ? 'border-b-2 border-floop-gold pb-1' : ''
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Play Now Button */}
        <button className="hidden md:flex items-center gap-2 bg-floop-purple hover:bg-purple-600 text-white font-nunito font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40">
          <FaGamepad className="text-lg" /> PLAY NOW
        </button>

        {/* Mobile Hamburger — purple circle with lines */}
        <button
          className="md:hidden w-10 h-10 bg-floop-purple rounded-full flex flex-col items-center justify-center gap-1.5 shadow-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-white text-lg font-bold">✕</span>
          ) : (
            <>
              <span className="w-5 h-0.5 bg-white rounded-full" />
              <span className="w-5 h-0.5 bg-white rounded-full" />
              <span className="w-5 h-0.5 bg-white rounded-full" />
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-floop-dark/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white font-nunito font-bold text-sm tracking-widest hover:text-floop-pink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="mt-2 bg-floop-purple text-white font-nunito font-bold text-sm px-6 py-3 rounded-full">
            🎮 PLAY NOW
          </button>
        </div>
      )}
    </nav>
  )
}
