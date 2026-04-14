import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-8 text-center bg-black/60 backdrop-blur-sm border-t border-slate-800 z-10 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-slate-500 space-y-4 md:space-y-0 text-sm font-medium">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <div className="flex space-x-6 shrink-0">
          <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}
