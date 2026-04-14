import { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { MoreVertical, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BubbleMenu() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (!isOpen) return;

    const bubbles = menuRef.current?.querySelectorAll('.bubble-item');
    if (!bubbles) return;
    
    bubbles.forEach((bubble) => {
      const el = bubble as HTMLElement;
      
      const onMouseEnter = () => {
        gsap.to(el, { scale: 1.1, duration: 0.3, ease: 'back.out(1.7)' });
      };
      
      const onMouseLeave = () => {
        gsap.to(el, { scale: 1, duration: 0.3, ease: 'back.out(1.7)', x: 0, y: 0 });
      };
      
      const onMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
      };

      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
      el.addEventListener('mousemove', onMouseMove);
      
      return () => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
        el.removeEventListener('mousemove', onMouseMove);
      };
    });
  }, [isOpen]);

  return (
    <nav className="fixed top-4 md:top-8 right-6 md:right-8 z-50 flex flex-col items-end">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 mb-2 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-700/50 shadow-2xl text-white hover:bg-slate-800 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MoreVertical className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed w-screen h-screen -top-4 -right-6 md:-top-8 md:-right-8 bg-black/60 backdrop-blur-sm z-[-1] md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20, originX: 1, originY: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-4 md:py-4 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 shadow-2xl overflow-hidden relative"
            >
              <div ref={menuRef} className="flex flex-col space-y-2 md:space-y-4 items-center justify-center">
                <div className="bubble-item w-full text-center">
                  <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `nav-link block w-full py-3 md:py-1 px-10 md:px-0 text-xl md:text-lg font-medium tracking-wide ${isActive ? 'active' : ''}`}>
                    Home
                  </NavLink>
                </div>
                <div className="bubble-item w-full text-center">
                  <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => `nav-link block w-full py-3 md:py-1 px-10 md:px-0 text-xl md:text-lg font-medium tracking-wide ${isActive ? 'active' : ''}`}>
                    About
                  </NavLink>
                </div>
                <div className="bubble-item w-full text-center">
                  <NavLink to="/projects" onClick={() => setIsOpen(false)} className={({ isActive }) => `nav-link block w-full py-3 md:py-1 px-10 md:px-0 text-xl md:text-lg font-medium tracking-wide ${isActive ? 'active' : ''}`}>
                    Projects
                  </NavLink>
                </div>
                <div className="bubble-item w-full text-center">
                  <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => `nav-link block w-full py-3 md:py-1 px-10 md:px-0 text-xl md:text-lg font-medium tracking-wide ${isActive ? 'active' : ''}`}>
                    Contact
                  </NavLink>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
