import { motion } from 'motion/react';

const logos = [
  { name: 'React', url: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Tailwind CSS', url: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'Vite', url: 'https://cdn.simpleicons.org/vite/646CFF' },
  { name: 'Framer Motion', url: 'https://cdn.simpleicons.org/framer/0055FF' },
  { name: 'PostgreSQL', url: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Docker', url: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'AWS', url: 'https://cdn.simpleicons.org/amazonaws/232F3E' },
];

export default function LogoLoop() {
  // Duplicate the logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-black/20 backdrop-blur-sm py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          Technologies I work with
        </p>
      </div>

      <div className="relative flex">
        <motion.div
          className="flex whitespace-nowrap gap-16 items-center px-8"
          animate={{
            x: [0, -100 * logos.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default group"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-8 w-auto"
                referrerPolicy="no-referrer"
              />
              <span className="text-slate-400 font-display font-bold text-lg group-hover:text-white transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
