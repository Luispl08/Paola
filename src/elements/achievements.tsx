import React from 'react';
import { Trophy, Crown, CheckCircle2 } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 shadow-lg ring-4 ring-white dark:ring-zinc-900">
          <Crown className="w-8 h-8 fill-current" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">¿Por qué eres la mejor?</h2>
        <p className="text-sm text-slate-500 mt-2 max-w-xs mx-auto">No es solo una cosa, es la suma de todas tus maravillas.</p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

        <div className="space-y-8 relative">
          
          <div className="flex gap-6 group">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg border-4 border-background-light dark:border-background-dark z-10 group-hover:scale-110 transition-transform">
              <span className="font-bold text-lg">1</span>
            </div>
            <div className="glass p-5 rounded-2xl rounded-tl-none shadow-sm flex-1 border border-primary/10">
              <h3 className="font-bold text-lg text-primary mb-1">Tu Inteligencia</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                La capacidad que tienes para resolver los problemas.
              </p>
            </div>
          </div>

          <div className="flex gap-6 group">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg border-4 border-background-light dark:border-background-dark z-10 group-hover:scale-110 transition-transform">
              <span className="font-bold text-lg">2</span>
            </div>
            <div className="glass p-5 rounded-2xl rounded-tl-none shadow-sm flex-1 border border-primary/10">
              <h3 className="font-bold text-lg text-primary mb-1">Tu Resiliencia</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                No importa qué tan difícil se ponga el día, siempre encuentras la fuerza para seguir adelante.
              </p>
            </div>
          </div>

          <div className="flex gap-6 group">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg border-4 border-background-light dark:border-background-dark z-10 group-hover:scale-110 transition-transform">
              <span className="font-bold text-lg">3</span>
            </div>
            <div className="glass p-5 rounded-2xl rounded-tl-none shadow-sm flex-1 border border-primary/10">
              <h3 className="font-bold text-lg text-primary mb-1">Tu Empatía</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Escuchas, comprendes y aconsejas mejor que nadie. Eres paz para quienes te rodean.
              </p>
            </div>
          </div>

          <div className="flex gap-6 group">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg border-4 border-background-light dark:border-background-dark z-10 animate-pulse">
              <Trophy className="w-6 h-6 fill-current" />
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-dark p-5 rounded-2xl rounded-tl-none shadow-lg flex-1 text-white">
              <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                Hacerme Feliz
                <CheckCircle2 className="w-4 h-4" />
              </h3>
              <p className="text-sm opacity-90">
                Gracias por ser tú misma y alegrar mi vida cada día.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Achievements;