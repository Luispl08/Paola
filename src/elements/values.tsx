import React from 'react';
import { Heart, Star, HandFist, Sparkles, Zap } from 'lucide-react';

const Values: React.FC = () => {
  const values = [
    {
      title: "Bondad",
      desc: "Tu corazón noble que siempre busca ayudar a los demás sin esperar nada a cambio.",
      icon: <Sparkles className="w-6 h-6 text-primary" fill="currentColor" />,
      color: "bg-red-50 dark:bg-red-900/10",
      borderColor: "border-red-100 dark:border-red-900/30"
    },
    {
      title: "Amor",
      desc: "La forma incondicional y cálida en que entregas tu cariño a quienes te rodean.",
      icon: <Heart className="w-6 h-6 text-primary" fill="currentColor" />,
      color: "bg-red-50 dark:bg-red-900/10",
      borderColor: "border-red-100 dark:border-red-900/30"
    },
    {
      title: "Disciplina",
      desc: "Tu constancia admirable para mantener el rumbo incluso cuando el camino es difícil.",
      icon: <HandFist className="w-6 h-6 text-primary" />,
      color: "bg-red-50 dark:bg-red-900/10",
      borderColor: "border-red-100 dark:border-red-900/30"
    },
    {
      title: "Dedicación",
      desc: "El empeño y el detalle que pones en cada cosa que tocas para que sea perfecta.",
      icon: <Star className="w-6 h-6 text-primary" fill="currentColor" />,
      color: "bg-red-50 dark:bg-red-900/10",
      borderColor: "border-red-100 dark:border-red-900/30"
    },
    {
      title: "Esfuerzo",
      desc: "Cómo te superas día a día, demostrando que no hay límites para lo que sueñas.",
      icon: <Zap className="w-6 h-6 text-primary" fill="currentColor" />,
      color: "bg-red-50 dark:bg-red-900/10",
      borderColor: "border-red-100 dark:border-red-900/30"
    }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Tus Valores</h2>
        <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">Lo que te define</span>
      </div>
      
      <div className="space-y-4">
        {values.map((val, index) => (
          <div 
            key={index}
            className={`flex items-start gap-4 p-4 rounded-2xl border ${val.borderColor} ${val.color} transition-transform hover:scale-[1.02] duration-300`}
          >
            <div className="p-3 bg-white dark:bg-black/20 rounded-xl shadow-sm ring-1 ring-primary/5">
              {val.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg mb-1">{val.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;