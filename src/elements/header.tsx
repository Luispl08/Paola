import React from 'react';
import { ChevronLeft, Heart } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Nuestra Historia" }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-12 pb-4 flex justify-between items-center bg-gradient-to-b from-background-light/95 via-background-light/80 to-transparent dark:from-background-dark/95 dark:via-background-dark/80 backdrop-blur-[2px]">
      <button 
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm active:scale-95 transition-transform"
        aria-label="Volver"
      >
        <ChevronLeft className="text-primary w-6 h-6 ml-[-2px]" />
      </button>

      <div className="flex flex-col items-center">
        <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-0.5">Para Paola</span>
        <span className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">{title}</span>
      </div>

      <button 
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm active:scale-95 transition-transform"
        aria-label="Me gusta"
      >
        <Heart className="text-primary w-5 h-5 fill-primary" />
      </button>
    </div>
  );
};

export default Header;