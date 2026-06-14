import { FaDiscord, FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { useState } from 'react'

const footerLinks = {
  GAME: ['Gameplay', 'Floops', 'Worlds', 'News'],
  SUPPORT: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
}

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-floop-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/assets/images/logo.png"
              alt="FloopRun"
              className="h-10 w-auto mb-4"
            />
            <p className="font-nunito text-white/60 text-sm leading-relaxed max-w-[200px]">
              A chaotic adventure full of cute creatures, wild worlds, and endless running fun!
            </p>
          </div>

          {/* Game Links */}
          <div>
            <h4 className="font-fredoka text-white text-lg mb-4 tracking-wide">GAME</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.GAME.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-nunito text-white/60 text-sm hover:text-floop-pink transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-fredoka text-white text-lg mb-4 tracking-wide">SUPPORT</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.SUPPORT.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-nunito text-white/60 text-sm hover:text-floop-pink transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-fredoka text-white text-lg mb-4 tracking-wide">COMMUNITY</h4>
            <div className="flex gap-4 flex-wrap">
              {[
                { Icon: FaDiscord,   color: 'hover:text-indigo-400' },
                { Icon: FaTwitter,   color: 'hover:text-sky-400'    },
                { Icon: FaInstagram, color: 'hover:text-pink-400'   },
                { Icon: FaTiktok,    color: 'hover:text-white'      },
                { Icon: FaYoutube,   color: 'hover:text-red-500'    },
              ].map(({ Icon, color }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`text-white/60 ${color} text-2xl transition-all duration-200 hover:scale-125 inline-block`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-fredoka text-white text-lg mb-1 tracking-wide">
              GET FLOOPTASTIC NEWS!
            </h4>
            <p className="font-nunito text-white/50 text-xs mb-4">
              Join our newsletter for updates, events and rewards!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 min-w-0 bg-white/10 border border-white/20 text-white placeholder-white/40 font-nunito text-sm px-4 py-3 rounded-full outline-none focus:border-floop-purple transition-colors"
              />
              <button className="bg-floop-purple hover:bg-purple-600 text-white w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 flex-shrink-0 text-lg font-bold">
                ›
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="font-nunito text-white/40 text-sm">
            © 2025 RunBox Studios. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
