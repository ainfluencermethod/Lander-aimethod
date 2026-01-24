
import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize, Eye, ArrowRight } from 'lucide-react';

export const EarningShowcase: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [viewers, setViewers] = useState(842);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  // Simulate live viewer count fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
        setViewers(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Ensure autoplay works reliably
  useEffect(() => {
    if (videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                setIsPlaying(false);
            });
        }
    }
  }, []);

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      const duration = videoRef.current.duration;
      if (Number.isFinite(duration) && duration > 0) {
        const prog = (videoRef.current.currentTime / duration) * 100;
        setProgress(prog);
      } else {
        setProgress(0);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      
      if (width > 0) {
        const percentage = Math.max(0, Math.min(1, x / width));
        const duration = videoRef.current.duration;
        if (Number.isFinite(duration)) {
          videoRef.current.currentTime = percentage * duration;
        }
      }
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto px-4">
      
      {/* VSL Player Container */}
      <div className="relative max-w-4xl mx-auto group shadow-[0_0_80px_rgba(176,255,62,0.15)] rounded-[20px] md:rounded-[32px]">
        {/* Glow Effects */}
        <div className="absolute -inset-0.5 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-[20px] md:rounded-[32px] blur opacity-50"></div>
        
        {/* Main Video Wrapper */}
        <div className="relative bg-[#000] rounded-[20px] md:rounded-[32px] overflow-hidden aspect-video flex flex-col z-10 border-4 border-zinc-900 ring-1 ring-white/10">
          
          {/* VSL Top Bar (Live Status) */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-30 pointer-events-none">
             <div className="flex items-center gap-2 pointer-events-auto">
                <div className="flex items-center gap-2 bg-red-600/90 backdrop-blur px-3 py-1 rounded-md shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    <span className="text-[10px] font-black text-white tracking-widest uppercase">Live Demo</span>
                </div>
                
                <div className="hidden md:flex items-center gap-1.5 bg-black/60 backdrop-blur px-3 py-1 rounded-md border border-white/5">
                    <Eye size={12} className="text-zinc-400" />
                    <span className="text-[10px] font-bold text-zinc-300 tabular-nums">{viewers} watching</span>
                </div>
             </div>
             
             <button 
                onClick={toggleMute} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 border border-white/10 transition-all backdrop-blur text-white pointer-events-auto"
             >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
             </button>
          </div>

          {/* Video Element */}
          <div className="relative flex-1 bg-black cursor-pointer h-full" onClick={togglePlay}>
            <video 
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/694d0c20dda19201e3593e07.mp4" 
              poster="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/69584f494aa66947d2eba68a.png"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />

            {/* Smart Unmute Overlay (High Conversion) */}
            {isMuted && isPlaying && (
                <div 
                    className="absolute inset-0 flex items-center justify-center z-20 bg-black/10 hover:bg-black/5 transition-all"
                    onClick={toggleMute}
                >
                   <div className="relative group/unmute">
                        <div className="absolute inset-0 bg-[#b0ff3e] blur-xl opacity-20 group-hover/unmute:opacity-40 transition-opacity"></div>
                        <div className="bg-black/80 backdrop-blur-md pl-5 pr-6 py-3 rounded-full border border-[#b0ff3e]/30 flex items-center gap-3 shadow-2xl cursor-pointer hover:scale-105 transition-transform animate-bounce-slight">
                            <VolumeX size={20} className="text-[#b0ff3e]" />
                            <span className="text-sm font-black text-white uppercase tracking-wide">Tap to unmute</span>
                        </div>
                   </div>
                </div>
            )}

            {/* Play Button Overlay (Paused) */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-30 backdrop-blur-[2px]">
                    <div className="w-20 h-20 bg-[#b0ff3e] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(176,255,62,0.6)] hover:scale-110 transition-transform cursor-pointer">
                        <Play className="fill-black text-black ml-2" size={32} />
                    </div>
                </div>
            )}

            {/* VSL Controls (Minimalist) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
               <div className="flex items-center gap-4">
                  <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} className="text-white hover:text-[#b0ff3e] transition-colors">
                     {isPlaying ? <Pause size={18} className="fill-current" /> : <Play size={18} className="fill-current" />}
                  </button>
                  
                  {/* Custom Progress Bar */}
                  <div 
                    className="flex-1 h-1.5 bg-white/20 rounded-full cursor-pointer relative group/bar"
                    onClick={(e) => { e.stopPropagation(); handleSeek(e); }}
                  >
                     <div 
                        className="absolute top-0 left-0 h-full bg-[#b0ff3e] rounded-full"
                        style={{ width: `${progress}%` }}
                     >
                        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg scale-0 group-hover/bar:scale-100 transition-transform"></div>
                     </div>
                  </div>

                  <button onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }} className="text-white hover:text-[#b0ff3e] transition-colors">
                    <Maximize size={16} />
                  </button>
               </div>
            </div>
            
            {/* Social Proof Popup - Hidden on mobile to not obstruct view */}
            <div 
              className={`hidden md:flex absolute top-8 right-8 z-20 pointer-events-none transition-all duration-500 ease-out ${showOverlay ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            >
               <div className="bg-black/90 backdrop-blur-xl p-4 rounded-xl border border-zinc-800 shadow-2xl flex items-center gap-4">
                  <div className="bg-[#b0ff3e]/10 p-2 rounded-lg">
                    <div className="w-2 h-2 bg-[#b0ff3e] rounded-full animate-pulse"></div>
                  </div>
                  <div>
                     <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest">Just Verified</p>
                     <p className="text-white font-bold text-sm">$51,311 Payout</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main CTA - Below Video */}
      <div className="flex flex-col items-center gap-5 max-w-3xl mx-auto pt-6">
        <button 
            onClick={scrollToCheckout}
            className="w-full relative group overflow-hidden bg-[#b0ff3e] text-black font-black py-5 md:py-6 rounded-[24px] text-2xl md:text-4xl uppercase tracking-tighter hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_0_60px_rgba(176,255,62,0.3)] border-b-4 border-black/10"
        >
            <span className="relative z-10 flex items-center justify-center gap-4">
                Start Earning With AI Today
                <ArrowRight className="group-hover:translate-x-2 transition-transform" strokeWidth={4} size={32} />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
        </button>
        
        <div className="flex items-center gap-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse"></div>
            <p className="text-xs text-zinc-500 font-black uppercase tracking-[0.2em] pt-0.5">
                Spots Available for March Cohort
            </p>
        </div>
      </div>
    </div>
  );
};
