import { motion } from 'motion/react';
import Prism from '../components/Prism';
import LogoLoop from '../components/LogoLoop';
import { ArrowRight, Code2, Database, Layout, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const skills = [
  { icon: Layout, title: 'Frontend Development', desc: 'Crafting beautiful, responsive, and accessible user interfaces.' },
  { icon: Database, title: 'Backend Systems', desc: 'Building scalable architectures and resilient APIs.' },
  { icon: Sparkles, title: 'UI/UX Design', desc: 'Designing intuitive experiences that delight users.' },
  { icon: Code2, title: 'Generative AI', desc: 'Integrating modern AI models to solve complex problems.' }
];

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-12"
    >
      <Prism />
      
      {/* HERO SECTION */}
      <div className="container mx-auto px-4 min-h-[80vh] flex flex-col justify-center items-center text-center pb-24">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-semibold tracking-wide backdrop-blur-md">
            Available for new opportunities
          </span>
        </motion.div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white mb-6 drop-shadow-2xl">
          Building Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Experiences</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl px-2 sm:px-0 mb-12 font-light">
          A passionate software engineer crafting beautiful and performant web applications with modern technologies. Let’s create something amazing together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-6 sm:px-0">
          <Link to="/contact" className="w-full sm:w-auto justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-transform active:scale-95 flex items-center shadow-xl shadow-white/10">
            Get in touch <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link 
            to="/projects"
            className="w-full sm:w-auto text-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-slate-700 hover:bg-slate-800 transition-colors active:scale-95 cursor-pointer"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* ABOUT ME SECTION */}
      <div className="container mx-auto px-4 py-12 z-10 w-full relative">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Who I Am</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto p-6 sm:p-10 md:p-12 rounded-3xl md:rounded-[2.5rem] bg-slate-900/40 border border-slate-700/50 backdrop-blur-md shadow-2xl relative overflow-hidden group mx-2 md:mx-auto"
        >
          {/* Subtle animated background gradients inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 group-hover:bg-blue-500/20 transition-colors duration-700"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3 group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed font-light text-center">
            Hi, I'm <strong className="text-white font-medium">Sagar Satapathy</strong>, a <strong className="text-white font-medium">fourth-year student</strong> deeply passionate about the intersection of artificial intelligence and software engineering. My current focus is securing challenging roles in <strong className="text-blue-400 font-medium whitespace-nowrap">AI & Web Development</strong>. Ultimately, I am aspiring to step into an <strong className="text-indigo-400 font-medium whitespace-nowrap">AI Product Manager</strong> role, where I can bridge the gap between complex engineering capabilities and intuitive, high-impact user experiences.
          </p>
        </motion.div>
      </div>

      {/* SKILLS SECTION */}
      <div className="container mx-auto px-4 py-24 z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Technical Skills</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">A blend of technical logic and creative design to build exceptional digital experiences.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 cursor-default mx-2 md:mx-0"
              >
                <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 inline-block text-blue-400 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{skill.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">{skill.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>


      {/* LOGO LOOP FOOTER TRANSITION */}
      <div className="w-full mt-12 z-10">
        <LogoLoop />
      </div>
    </motion.div>
  );
}
