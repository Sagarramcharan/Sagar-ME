import { motion } from 'motion/react';
import CardSwap from '../components/CardSwap';

export default function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen flex flex-col items-center pt-32 pb-24"
    >
      <div className="container mx-auto px-4 z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight drop-shadow-2xl">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Expertise</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8 font-light">
            A glimpse into some of my recent interactive creations and projects.
          </p>
        </motion.div>
        
        <div className="relative z-10 pb-12 overflow-hidden w-full">
          <CardSwap />
        </div>
      </div>
    </motion.div>
  );
}
