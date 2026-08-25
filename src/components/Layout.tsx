import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Prism from './Prism';
import BubbleMenu from './BubbleMenu';

export default function Layout() {
  const logo = (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-lg shadow-[0_0_15px_rgba(37,99,235,0.5)]">
        S
      </div>
      <span className="font-display font-black text-xl tracking-[0.1em] text-black uppercase">SAGAR</span>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      {/* Global Background */}
      <div className="fixed inset-0 z-0 opacity-80 pointer-events-none">
        <Prism />
      </div>

      {/* Top Left Logo Bubble */}
      <div className="fixed top-4 md:top-8 left-6 md:left-8 z-50">
        <div className="px-6 py-3 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/50 shadow-2xl flex items-center justify-center">
          {logo}
        </div>
      </div>

      <BubbleMenu />

      <main className="flex-grow pt-20 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
