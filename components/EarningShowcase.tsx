
import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';

export const EarningShowcase: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  // Auto-hide the revenue overlay after a few seconds once autoplay is established
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="relative group">
        {/* Subtle Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#b0ff3e]/20 via-indigo-500/10 to-[#b0ff3e]/20 rounded-[32px] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
        
        <div className="relative bg-[#0c0c0e] border border-zinc-800 rounded-[32px] overflow-hidden aspect-video flex flex-col shadow-2xl">
          
          {/* Top Header Bar */}
          <div className="px-6 py-4 flex items-center justify-center relative bg-black/40 backdrop-blur-md border-b border-zinc-800/50 z-30">
            <div className="absolute left-6 flex items-center gap-2">
              <div className="bg-[#b0ff3e]/10 p-1.5 rounded-lg">
                <Volume2 size={16} className="text-[#b0ff3e]" />
              </div>
            </div>
            
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white animate-pulse">
              Live Case Study: Autoplay Enabled
            </span>

            <div className="absolute right-6">
              <Volume2 size={16} className="text-zinc-600" />
            </div>
          </div>

          {/* Video Player Container */}
          <div className="relative flex-1 bg-black overflow-hidden group/video">
            {/* YouTube Embed with Autoplay and Mute for standard browser policy compliance */}
            <iframe 
              className="absolute inset-0 w-full h-full pointer-events-auto"
              src="https://www.youtube.com/embed/woU1qFWnVNo?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0" 
              title="AI Influencer Revenue Proof"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            {/* Revenue Card Overlay */}
            {showOverlay && (
              <div 
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-opacity duration-1000"
                style={{ opacity: showOverlay ? 1 : 0 }}
              >
                 <div className="bg-black/95 backdrop-blur-3xl p-10 rounded-[40px] border border-white/5 w-full max-w-sm transform transition-transform shadow-[0_40px_80px_rgba(0,0,0,1)]">
                    <div className="space-y-6 text-center">
                      <div className="space-y-1">
                        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">Monthly Passive Yield</p>
                        <h4 className="text-5xl md:text-6xl font-black text-[#b0ff3e] tracking-tighter glow-primary-text italic">
                          $51,311.47
                        </h4>
                      </div>
                      
                      <div className="relative h-2.5 w-full bg-zinc-800/30 rounded-full overflow-hidden mx-auto">
                        <div 
                          className="absolute inset-y-0 left-0 bg-[#b0ff3e] rounded-full transition-all duration-1000" 
                          style={{ width: '85%' }}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            )}
            
            {/* Catch-all interaction overlay to dismiss the HUD */}
            {showOverlay && (
              <div 
                className="absolute inset-0 z-25 cursor-pointer bg-black/20" 
                onClick={() => setShowOverlay(false)}
              ></div>
            )}
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToCheckout}
        className="w-full bg-[#b0ff3e] text-black font-black py-6 rounded-2xl text-xl uppercase tracking-tighter hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(176,255,62,0.3)]"
      >
        I Want To Build My AI Influencer Now →
      </button>
    </div>
  );
};
