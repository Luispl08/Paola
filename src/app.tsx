import React, { useState, useRef, useEffect } from 'react';
import Header from '@/elements/header';
import Gallery from '@/elements/gallery';
import Feelings from '@/elements/feelings';
import TabBar from '@/elements/tabbar';
import Values from '@/elements/values';
import Achievements from '@/elements/achievements';
import { Play, Heart } from 'lucide-react';

export type TabType = 'home' | 'us' | 'memories' | 'achievements';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandHeart, setExpandHeart] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (activeTab === 'us' && !isTransitioning && videoRef.current) {
      // Small delay to ensure the component is fully rendered and browser allows the play promise
      const playVideo = async () => {
        try {
          videoRef.current!.muted = false;
          await videoRef.current!.play();
        } catch (err) {
          console.log("Autoplay with sound might be blocked by the browser until more interaction occurs:", err);
          // If blocked, we try to play it muted as fallback or just wait for user click
          // but per user request, we want it active. 
        }
      };
      playVideo();
    }
  }, [activeTab, isTransitioning]);

  const handleTabChange = (tab: TabType) => {
    if (activeTab === tab || isTransitioning) return;

    // Start transition
    setIsTransitioning(true);
    setExpandHeart(true);

    // Wait for animation to cover screen (300ms matches CSS duration)
    setTimeout(() => {
      setActiveTab(tab);
      window.scrollTo(0, 0);

      // Brief pause to ensure DOM update behind the heart, then reveal
      setTimeout(() => {
        setExpandHeart(false);

        // Cleanup state after shrink animation finishes
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 50);
    }, 300);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="animate-fade-in-up">
            <div className="mb-8 text-center px-4">
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                Bienvenida, Paola
              </h1>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Este pequeño rincón digital es para recordarte lo increíble que eres y lo mucho que significas.
              </p>
            </div>
            <Values />
          </div>
        );
      case 'us':
        return (
          <div className="animate-fade-in-up pb-6">
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Lo que me haces sentir</h2>
              <p className="text-sm opacity-60 font-medium">Eres mi lugar seguro y mi mayor alegría.</p>
            </div>

            <div className="mb-8">
              <div className="relative max-w-[70%] mx-auto aspect-[2/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-zinc-800 bg-black group cursor-pointer">
                {/* Placeholder for video - Replace src with actual video URL */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                  preload="auto"
                  loop
                  playsInline
                  controls
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-2xl group-hover:scale-110 transition-transform hidden">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-center mt-3 text-slate-400">Nuestros momentos favoritos</p>
            </div>

            <Feelings />

            <div className="mt-12 flex flex-col items-center">
              <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full opacity-30 mb-4"></div>
              <p className="text-primary font-bold text-sm tracking-widest uppercase italic">TE QUIERO</p>
            </div>
          </div>
        );
      case 'memories':
        return (
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Nuestros Recuerdos</h2>
              <p className="text-sm opacity-60 font-medium">Instantes que quiero guardar para siempre.</p>
            </div>
            <Gallery />
          </div>
        );
      case 'achievements':
        return (
          <div className="animate-fade-in-up">
            <Achievements />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pb-32 relative min-h-screen">
      {/* Heart Transition Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div
          className={`transform transition-transform duration-300 ease-in-out will-change-transform ${expandHeart ? 'scale-[60]' : 'scale-0'
            }`}
        >
          <Heart className="w-10 h-10 text-primary fill-primary" />
        </div>
      </div>

      <Header title={activeTab === 'achievements' ? 'Tus Logros' : 'Nuestra Historia'} />

      <main className="pt-28 px-5 max-w-lg mx-auto w-full">
        {renderContent()}
      </main>

      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}