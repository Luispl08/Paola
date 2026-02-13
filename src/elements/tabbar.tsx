import React from 'react';
import { Home, BookOpen, Image as ImageIcon, Trophy } from 'lucide-react';
import { TabType } from '../App';

interface TabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {

  const getButtonClass = (tabName: TabType) => {
    const isActive = activeTab === tabName;
    return `flex flex-col items-center gap-1.5 transition-all w-14 group cursor-pointer ${isActive ? 'text-primary opacity-100' : 'opacity-40 hover:opacity-70 text-slate-800 dark:text-white'
      }`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 glass border-t border-white/40 dark:border-white/5 flex items-center justify-around px-6 pb-5 z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">

      <button
        onClick={() => onTabChange('home')}
        className={getButtonClass('home')}
      >
        <Home className={`w-6 h-6 transition-transform ${activeTab === 'home' ? 'scale-110' : 'group-hover:scale-110'}`} />
        <span className="text-[9px] font-bold tracking-wide">PAOLA</span>
      </button>

      <button
        onClick={() => onTabChange('achievements')}
        className={getButtonClass('achievements')}
      >
        <Trophy className={`w-6 h-6 transition-transform ${activeTab === 'achievements' ? 'scale-110' : 'group-hover:scale-110'}`} />
        <span className="text-[9px] font-bold tracking-wide">LOGROS</span>
      </button>

      <button
        onClick={() => onTabChange('memories')}
        className={getButtonClass('memories')}
      >
        <ImageIcon className={`w-6 h-6 transition-transform ${activeTab === 'memories' ? 'scale-110' : 'group-hover:scale-110'}`} />
        <span className="text-[9px] font-bold tracking-wide">FOTOS</span>
      </button>

      <button
        onClick={() => onTabChange('us')}
        className={getButtonClass('us')}
      >
        <BookOpen className={`w-6 h-6 transition-transform ${activeTab === 'us' ? 'scale-110' : 'group-hover:scale-110'}`} />
        <span className="text-[9px] font-bold tracking-wide">NOSOTROS</span>
      </button>
    </div>
  );
};

export default TabBar;