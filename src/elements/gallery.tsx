import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

const Gallery: React.FC = () => {
  // Generate array for images 1 to 23
  const otherImages = Array.from({ length: 23 }, (_, i) => i + 1);

  return (
    <div className="space-y-6 pb-12">
      {/* Featured Photo (0.jpeg) */}
      <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 animate-fade-in-up">
        <img
          src="/fotos/0.jpeg"
          alt="Momento especial"
          className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
        <div className="absolute top-4 right-4 animate-bounce">
          <Sparkles className="text-white w-6 h-6 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-white text-xl font-bold translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Donde todo se siente perfecto</p>
        </div>
      </div>

      {/* Masonry Photo Grid (1-23) */}
      <div className="columns-2 sm:columns-3 gap-3 space-y-3">
        {otherImages.map((num, index) => (
          <div
            key={num}
            className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border-2 border-white dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 group cursor-pointer animate-fade-in-up"
            style={{
              animationDelay: `${(index + 1) * 30}ms`,
              animationFillMode: 'both'
            }}
          >
            <img
              src={`/fotos/${num}.jpeg`}
              alt={`Recuerdo ${num}`}
              className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;