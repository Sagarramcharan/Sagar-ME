import { motion } from 'motion/react';

const projects = [
  { id: 1, title: 'AI Health & Fitness Coach', desc: 'A personalized platform utilizing machine learning to construct dynamic, customized health routines.', color: 'from-blue-600 to-slate-900', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'Store Mate: Inventory Management', desc: 'A comprehensive inventory tracking system built for seamless operational flow and stock optimization.', color: 'from-purple-600 to-slate-900', img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, title: 'Vision-Controlled Robot', desc: 'An autonomous robotic system powered by computer vision and imitation learning for complex task execution.', color: 'from-emerald-600 to-slate-900', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop' },
];

export default function CardSwap() {
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="relative w-full overflow-hidden py-12 flex items-center">
      {/* Side Gradients for fading effect */}
      <div className="absolute left-0 top-0 w-16 md:w-48 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-16 md:w-48 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none"></div>

      <motion.div
        className="flex w-max will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
      >
        {duplicatedProjects.map((proj, i) => (
          <div
            key={`${proj.id}-${i}`}
            className="relative flex-shrink-0 w-[85vw] sm:w-[450px] md:w-[600px] mx-4 h-72 md:h-80 rounded-3xl p-6 md:p-8 flex flex-col justify-end text-white shadow-2xl border border-white/10 group overflow-hidden cursor-pointer"
          >
            {/* Image Background */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110" 
              style={{ backgroundImage: `url(${proj.img})` }}
            />
            {/* Gradient Overlay for Text Readability */}
            <div className={`absolute inset-0 z-0 bg-gradient-to-br ${proj.color} opacity-80 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60`} />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
            
            {/* Cute Number Badge */}
            <div className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-display font-bold text-lg shadow-xl group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
              0{proj.id}
            </div>
            
            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-bold font-display mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{proj.title}</h3>
              <p className="text-white/90 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-sm md:text-base leading-relaxed">{proj.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

