import { motion } from 'motion/react';

const logos = [
  'React', 'TypeScript', 'TailwindCSS', 'GSAP', 'Framer Motion', 'Vite', 'Node.js', 'Next.js', 'PostgreSQL', 'WebGL'
];

export default function LogoLoop() {
  return (
    <div className="w-full overflow-hidden bg-slate-900/50 py-12 border-y border-slate-800 backdrop-blur-md relative z-10">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-20"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-20"></div>
      
      <motion.div 
        className="flex space-x-16 whitespace-nowrap"
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
      >
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="text-xl font-display font-medium text-slate-500 hover:text-slate-200 transition-colors cursor-default">
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
