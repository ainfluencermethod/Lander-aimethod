
import React, { useState, useEffect } from 'react';
import { Volume2, Play } from 'lucide-react';

export const EarningShowcase: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  // Auto-hide the revenue overlay after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto px-4">
      {/* Social Proof Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map(i => (
            <img 
              key={i}
              src={`https://picsum.photos/seed/user_proof_${i}/100/100`} 
              className="w-12 h-12 rounded-full border-2 border-zinc-950 object-cover" 
              alt="User"
            />
          ))}
          <div className="w-12 h-12 rounded-full bg-indigo-600 border-2 border-zinc-950 flex items-center justify-center text-xs font-black text-white">
            +1k
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map(i => (
            <span key={i} className="text-yellow-400 text-2xl">★</span>
          ))}
        </div>
        <p className="text-zinc-500 text-sm font-medium italic tracking-tight">
          Join 1000+ Successful Students
        </p>
      </div>

      <div className="relative group">
        {/* Container with rounded corners - Aspect Square on mobile for bigger size */}
        <div className="relative bg-[#0c0c0e] border border-zinc-800 rounded-[32px] md:rounded-[40px] overflow-hidden aspect-square md:aspect-video flex flex-col shadow-2xl">
          
          {/* Top Header Bar */}
          <div className="px-4 py-4 md:px-8 md:py-5 flex items-center justify-between bg-black border-b border-zinc-800/50 z-30">
            <Volume2 className="text-[#b0ff3e] w-5 h-5 md:w-6 md:h-6" />
            <span className="text-[10px] md:text-[14px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white">
              Turn sound on and hit play.
            </span>
            <Volume2 className="text-[#b0ff3e] w-5 h-5 md:w-6 md:h-6" />
          </div>

          {/* Video Player Container */}
          <div className="relative flex-1 bg-black overflow-hidden">
            <video 
              className="absolute inset-0 w-full h-full object-cover z-10"
              src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/694d0c20dda19201e3593e07.mp4" 
              autoPlay
              muted
              loop
              playsInline
              controls
            />

            {/* Revenue Card Overlay - Set to pointer-events-none to allow clicking the video underneath */}
            <div 
              className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-opacity duration-1000 ${showOverlay ? 'opacity-100' : 'opacity-0'}`}
            >
               <div className="bg-black/80 backdrop-blur-2xl p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-[#b0ff3e]/20 w-[85%] md:w-full max-w-sm transform shadow-[0_40px_80px_rgba(0,0,0,1)] text-center space-y-3 md:space-y-4">
                  <p className="text-zinc-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">Current Student Yield</p>
                  <h4 className="text-3xl md:text-5xl font-black text-[#b0ff3e] tracking-tighter italic glow-primary-text">
                    $51,311.47
                  </h4>
                  <div className="h-1.5 md:h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#b0ff3e] w-[85%] animate-pulse"></div>
                  </div>
                  
                  {/* Play Button and Text */}
                  <div className="flex flex-col items-center gap-2 pt-2">
                    <div className="w-16 h-12 bg-[#b0ff3e] rounded-xl flex items-center justify-center shadow-[0_4px_14px_0_rgba(176,255,62,0.39)]">
                        <Play className="fill-white text-white w-6 h-6 ml-1" />
                    </div>
                    <p className="text-zinc-500 text-[10px] font-bold italic">Turn sound on and hit play.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToCheckout}
        className="w-full bg-[#b0ff3e] text-black font-black py-5 md:py-7 rounded-2xl text-xl md:text-2xl uppercase tracking-tighter hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(176,255,62,0.3)]"
      >
        I Want To Build My AI Influencer Now →
      </button>
    </div>
  );
};
