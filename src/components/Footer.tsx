import { useState, useRef, useEffect } from 'react';
import { Github, Twitter, Instagram, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [showInstaTag, setShowInstaTag] = useState(false);
  const instaRef = useRef<HTMLDivElement>(null);

  // Close toggle when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (instaRef.current && !instaRef.current.contains(event.target as Node)) {
        setShowInstaTag(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <footer className="w-full py-8 text-center bg-black/60 backdrop-blur-sm border-t border-slate-800 z-10 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-slate-500 space-y-4 md:space-y-0 text-sm font-medium">
        <p>&copy; {new Date().getFullYear()} Sagar Satapathy. All rights reserved.</p>
        <div className="flex space-x-6 shrink-0 items-center">
          <a 
            href="https://github.com/Sagarramcharan" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub" 
            className="hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            aria-label="Twitter" 
            className="hover:text-blue-400 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>

          {/* Interactive Instagram Icon with Pop-up Tag */}
          <div
            ref={instaRef}
            className="relative flex items-center justify-center"
            onMouseEnter={() => setShowInstaTag(true)}
            onMouseLeave={() => setShowInstaTag(false)}
          >
            <button
              type="button"
              onClick={() => setShowInstaTag((prev) => !prev)}
              aria-label="Instagram profile"
              className="hover:text-pink-400 transition-colors focus:outline-none flex items-center justify-center text-slate-500"
            >
              <Instagram className="w-5 h-5" />
            </button>

            <AnimatePresence>
              {showInstaTag && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full mb-3 right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 z-50 pointer-events-auto"
                >
                  <a
                    href="https://www.instagram.com/sagarrxr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/95 border border-pink-500/40 text-white shadow-2xl backdrop-blur-xl hover:bg-slate-800/95 hover:border-pink-400 transition-all group"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 animate-pulse"></span>
                    <span className="text-xs font-semibold text-pink-300 group-hover:text-white transition-colors">
                      @sagarrxr
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Downward triangle pointer */}
                  <div className="w-2 h-2 bg-slate-900 border-r border-b border-pink-500/40 transform rotate-45 mx-auto -mt-1 md:block hidden"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </footer>
  );
}
