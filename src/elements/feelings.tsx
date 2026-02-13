import React from 'react';
import { Heart, Sparkles, Wand2, Star, Flame } from 'lucide-react';

const Feelings: React.FC = () => {
  return (
    <div className="relative glass rounded-3xl p-8 min-h-[600px] w-full overflow-hidden shadow-xl border border-white/60 dark:border-white/10">
      
      {/* Background Decorative Icons */}
      <div className="absolute top-10 left-8 text-primary/10 animate-float pointer-events-none">
        <Heart size={48} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-8 text-primary/10 animate-float-delayed pointer-events-none">
        <Sparkles size={56} />
      </div>
      <div className="absolute top-1/2 left-1/4 text-primary/5 animate-float pointer-events-none">
        <Heart size={32} />
      </div>
      <div className="absolute top-1/3 right-1/4 text-primary/10 animate-float-delayed pointer-events-none">
        <Wand2 size={24} />
      </div>
      <div className="absolute bottom-1/4 left-10 text-primary/10 animate-float pointer-events-none">
        <Star size={40} />
      </div>
      <div className="absolute top-20 right-10 text-primary/5 animate-float-delayed pointer-events-none">
        <Flame size={32} />
      </div>

      {/* Floating Words Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center py-4 gap-5">
        
        {/* Row 1 */}
        <div className="flex items-center gap-4 w-full justify-center">
            <div className="bg-white/70 dark:bg-white/10 px-6 py-3 rounded-full shadow-lg border border-white/50 backdrop-blur-sm animate-float">
            <span className="text-primary font-bold text-xl tracking-tight">Paz</span>
            </div>
            
            <div className="bg-primary px-8 py-4 rounded-full shadow-2xl scale-110 animate-float-delayed rotate-[-3deg] border-4 border-white/30 dark:border-zinc-900/10">
            <span className="text-white font-bold text-2xl tracking-tighter">Hogar</span>
            </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center gap-3 w-full justify-center pl-8">
            <div className="bg-white/70 dark:bg-white/10 px-6 py-3 rounded-full shadow-lg border border-white/50 animate-float-delayed">
            <span className="text-primary font-bold text-lg">Alegría</span>
            </div>
            
            <div className="bg-white/60 dark:bg-white/10 px-5 py-2.5 rounded-full shadow-md border border-white/40 animate-float rotate-[6deg]">
            <span className="text-primary/80 font-semibold text-base">Inspiración</span>
            </div>
        </div>

        {/* Row 3 - New Sentiments */}
         <div className="flex items-center gap-6 w-full justify-center pr-6">
            <div className="bg-primary/15 dark:bg-primary/20 px-5 py-2 rounded-full shadow-inner border border-primary/20 animate-float rotate-[-2deg]">
                <span className="text-primary-dark font-bold text-lg">Confianza</span>
            </div>
             <div className="bg-white/80 dark:bg-white/10 px-4 py-2 rounded-full shadow-md border border-white/40 animate-float-delayed">
                <span className="text-primary font-medium text-base">Risas</span>
            </div>
        </div>

        {/* Row 4 */}
        <div className="flex items-center gap-5 w-full justify-center pr-4">
             <div className="bg-white/70 dark:bg-white/10 px-7 py-3 rounded-full shadow-lg border border-white/50 animate-float">
                <span className="text-primary font-bold text-xl">Ternura</span>
            </div>
            
            <div className="bg-white/60 dark:bg-white/10 px-4 py-2 rounded-full shadow-sm border border-white/40 animate-float-delayed rotate-[-6deg]">
                <span className="text-primary/70 font-medium text-sm">Seguridad</span>
            </div>
        </div>

        {/* Row 5 - New Sentiments */}
        <div className="flex items-center gap-3 w-full justify-center pl-4">
            <div className="bg-gradient-to-r from-primary/80 to-primary text-white px-5 py-2 rounded-full shadow-lg animate-float-delayed rotate-[3deg]">
                <span className="font-bold text-base">Complicidad</span>
            </div>
             <div className="bg-white/70 dark:bg-white/10 px-4 py-2 rounded-full shadow border border-white/40 animate-float">
                <span className="text-primary/80 font-semibold text-sm">Calma</span>
            </div>
        </div>

        {/* Row 6 */}
        <div className="flex items-center gap-4 w-full justify-center">
            <div className="bg-primary/10 dark:bg-primary/20 px-6 py-3 rounded-full shadow-inner border border-primary/20 animate-float-delayed backdrop-blur-md">
                <span className="text-primary font-black text-xl italic">Pasión</span>
            </div>
            
            <div className="bg-white/70 dark:bg-white/10 px-5 py-2 rounded-full shadow-md border border-white/50 animate-float">
                <span className="text-primary/90 font-bold text-lg">Magia</span>
            </div>
        </div>

        {/* Row 7 - New Sentiments */}
         <div className="flex items-center gap-5 w-full justify-center -mt-1">
             <div className="bg-white/50 dark:bg-white/5 px-4 py-1.5 rounded-full shadow-sm border border-white/30 animate-float rotate-[-4deg]">
                <span className="text-primary/60 font-medium text-sm">Admiración</span>
            </div>
            <div className="bg-primary/20 dark:bg-primary/30 px-5 py-2 rounded-full shadow border border-primary/20 animate-float-delayed">
                <span className="text-primary-dark font-bold text-lg">Luz</span>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Feelings;