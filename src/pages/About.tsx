import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import CardSwap from '../components/CardSwap';
import LightRays from '../components/LightRays';
export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="container mx-auto px-4 min-h-screen pt-32 pb-24"
    >
      {/* AMBIENT BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-60">
        <div className="absolute inset-0 z-0 opacity-80">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-indigo-900/30 blur-[130px] mix-blend-screen z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/20 blur-[130px] mix-blend-screen z-10" />
        <div className="absolute top-[30%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-cyan-900/10 blur-[100px] mix-blend-screen z-10" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-16 text-center md:text-left">About Me</h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-display font-medium text-slate-200 mb-6 leading-tight">
            I'm <strong className="text-white font-bold">Sagar Satapathy</strong>, a final-year B.Tech CSE (AI & ML) student who is trying to turn curiosity into career.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-12">
            I don't just "like tech" — I question it, break it, Google it, fix it, and then pretend it worked on the first try.
          </p>

          <div className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-700/50 backdrop-blur-md inline-flex flex-col items-center md:items-start w-full md:w-auto shadow-2xl mb-12">
            <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold mb-6">
              Currently exploring the intersection of:
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
              <span className="px-6 py-3 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium tracking-wide">AI</span>
              <span className="px-6 py-3 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium tracking-wide">Data</span>
              <span className="px-6 py-3 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-medium tracking-wide">Product Thinking</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl font-display font-medium text-slate-300 leading-relaxed max-w-3xl mx-auto md:mx-0">
            My goal? To build products that people don’t uninstall after 2 minutes. 😅
          </p>
        </motion.div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-24">
          
          {/* SECTION 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-md shadow-2xl relative overflow-hidden group"
          >
            <h3 className="text-2xl font-bold font-display text-white mb-6">What I Bring to the Table</h3>
            
            <ul className="space-y-4 text-slate-300 mb-8 list-none">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✦</span>
                <span><strong className="text-white font-medium">Strong foundation</strong> in Python, DSA, and ML</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✦</span>
                <span><strong className="text-white font-medium">Growing skills</strong> in Python, Data Analysis, and AI</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✦</span>
                <span className="leading-relaxed">Ability to understand both technical + user perspective <span className="block text-slate-400 italic text-sm mt-1">(future AI Product Manager mindset)</span></span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-500 p-5 rounded-r-xl mb-6">
              <p className="italic text-slate-300 font-medium leading-relaxed">
                "A good product solves problems. A great product makes users forget they had one."
              </p>
            </div>

            <p className="text-slate-400 font-light leading-relaxed">
              Also, I don't just write code — I try to understand <strong className="text-slate-200">why</strong> the code should exist.
            </p>
          </motion.div>

          {/* SECTION 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-md shadow-2xl relative overflow-hidden group"
          >
            <h3 className="text-2xl font-bold font-display text-white mb-6 flex items-center">
              <span className="mr-3">⚡</span> What I’m Currently Doing
            </h3>
            
            <ul className="space-y-4 text-slate-300 mb-8 list-none">
              <li className="flex items-start">
                <span className="text-indigo-400 mr-3 mt-1">✦</span>
                <span>Searching for <strong className="text-white font-medium">Jobs & Internships</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-3 mt-1">✦</span>
                <span>Learning Python & Data Analysis <span className="text-slate-400 italic">(real-world datasets)</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-3 mt-1">✦</span>
                <span>Building projects that are not just “resume fillers” but actually <strong className="text-white font-medium">useful</strong></span>
              </li>
            </ul>

            <div className="bg-indigo-500/10 px-6 py-5 rounded-2xl w-full border border-indigo-500/20">
              <span className="block text-sm uppercase tracking-wider text-indigo-400 font-bold mb-3">Daily routine includes:</span>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-medium text-slate-200">
                <span className="whitespace-nowrap">Debugging life</span>
                <span className="text-xl">🤝</span>
                <span className="whitespace-nowrap">Debugging code</span>
              </div>
            </div>
          </motion.div>
          
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center md:text-left">Selected Projects</h2>
          <CardSwap />
        </motion.div>

        {/* WHAT I'M LOOKING FOR */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-32"
        >
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-indigo-900/20 to-purple-900/10 border border-indigo-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden group w-full text-center">
            
            {/* Subtle Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 group-hover:bg-indigo-500/20 transition-colors duration-700"></div>

            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-8 flex items-center justify-center">
              <span className="mr-3">🎯</span> What I’m Looking For
            </h2>
            
            <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold mb-6">Opportunities in:</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12">
              <span className="px-6 py-4 rounded-full bg-slate-900/80 border border-slate-700/80 text-white font-medium tracking-wide shadow-lg whitespace-nowrap hover:border-indigo-500/50 transition-colors">AI Product Management</span>
              <span className="px-6 py-4 rounded-full bg-slate-900/80 border border-slate-700/80 text-white font-medium tracking-wide shadow-lg whitespace-nowrap hover:border-indigo-500/50 transition-colors">Data Analyst / Tech Roles</span>
              <span className="px-6 py-4 rounded-full bg-slate-900/80 border border-slate-700/80 text-white font-medium tracking-wide shadow-lg w-full md:w-auto hover:border-indigo-500/50 transition-colors">
                Internships <span className="opacity-70 text-sm italic block sm:inline mt-1 sm:mt-0 sm:ml-2">(learn, build, contribute)</span>
              </span>
            </div>

            <div className="inline-block px-8 py-6 rounded-3xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm shadow-xl">
              <p className="text-slate-400 font-medium uppercase tracking-widest text-xs sm:text-sm mb-4">If you like people who are:</p>
              <p className="text-xl md:text-2xl text-white font-display mb-5">
                Curious <span className="text-indigo-400 mx-2">+</span> Consistent <span className="text-indigo-400 mx-2">+</span> Slightly funny
              </p>
              <div className="w-24 h-[2px] bg-indigo-500/50 mx-auto rounded-full mb-5"></div>
              <p className="text-lg sm:text-xl text-slate-300 italic font-light">We’ll get along well 👋</p>
            </div>
            
            {/* CALL TO ACTION BUTTON */}
            <div className="mt-12 mb-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-1 group"
              >
                <span className="mr-3 text-lg">Let's Build Something Together</span>
                <span className="group-hover:translate-x-2 transition-transform text-xl">→</span>
              </Link>
            </div>
            
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
