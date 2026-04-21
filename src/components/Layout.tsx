import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import BubbleMenu from './BubbleMenu';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-slate-100 overflow-hidden relative selection:bg-blue-500/30">
      <Link to="/" className="fixed top-4 left-6 md:top-8 md:left-8 z-50 hover:scale-105 transition-transform active:scale-95">
        <span className="text-xl md:text-2xl font-black font-display tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 drop-shadow-md">SAGAR</span>
      </Link>
      <BubbleMenu />
      <main className="flex-grow z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
