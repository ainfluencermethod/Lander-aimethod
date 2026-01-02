
import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize } from 'lucide-react';

export const EarningShowcase: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  // Ensure autoplay works reliably
  useEffect(() => {
    if (videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Auto-play was prevented
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

  const toggleMute = () => {
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
        
        // Only set currentTime if duration is valid and finite
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

  const formatTime = (time: number) => {
    if (!time || isNaN(time) || !Number.isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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

      {/* Video Section with Glow */}
      <div className="relative max-w-4xl mx-auto group">
        {/* The Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#b0ff3e] via-indigo-500 to-[#b0ff3e] rounded-[40px] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse"></div>
        <div className="absolute -inset-8 bg-[#b0ff3e]/10 rounded-[60px] blur-3xl -z-10 pointer-events-none"></div>

        {/* Video Container */}
        <div className="relative bg-[#0c0c0e] border border-zinc-800 rounded-[32px] md:rounded-[40px] overflow-hidden aspect-video flex flex-col shadow-2xl z-10">
          
          {/* Header */}
          <div className="px-4 py-3 md:px-6 md:py-4 flex items-center justify-between bg-black/80 backdrop-blur-md border-b border-white/5 z-30 absolute top-0 left-0 right-0">
             <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b0ff3e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b0ff3e]"></span>
                </span>
                <span className="text-[10px] font-black text-zinc-400 tracking-widest uppercase">Live Demo</span>
             </div>
             
             <button 
                onClick={toggleMute} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur text-white"
             >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
             </button>
          </div>

          {/* Video Player */}
          <div className="relative flex-1 bg-black group/player cursor-pointer" onClick={togglePlay}>
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

            {/* Centered Play Button (Visible when paused) */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20 backdrop-blur-sm">
                    <div className="w-24 h-24 bg-[#b0ff3e] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(176,255,62,0.6)] transform hover:scale-110 transition-transform">
                        <Play className="fill-black text-black ml-2" size={48} />
                    </div>
                </div>
            )}

            {/* Custom Controls (Visible on hover) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 opacity-0 group-hover/player:opacity-100 transition-opacity duration-300 z-30 flex flex-col gap-3">
               
               {/* Progress Bar */}
               <div 
                 className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer group/bar relative"
                 onClick={(e) => { e.stopPropagation(); handleSeek(e); }}
               >
                  <div 
                    className="absolute top-0 left-0 h-full bg-[#b0ff3e] rounded-full relative"
                    style={{ width: `${progress}%` }}
                  >
                     <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg scale-0 group-hover/bar:scale-100 transition-transform"></div>
                  </div>
               </div>

               {/* Buttons */}
               <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-4">
                     <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} className="hover:text-[#b0ff3e] transition-colors">
                        {isPlaying ? <Pause size={20} className="fill-current" /> : <Play size={20} className="fill-current" />}
                     </button>
                     <span className="text-[11px] font-mono font-medium opacity-80">
                        {formatTime(currentTime)} / {formatTime(duration)}
                     </span>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }} className="hover:text-[#b0ff3e] transition-colors">
                    <Maximize size={18} />
                  </button>
               </div>
            </div>
            
            {/* Revenue Overlay Card - HIDDEN ON MOBILE */}
            <div 
              className={`hidden md:flex absolute inset-0 items-center justify-center z-40 pointer-events-none transition-all duration-700 ease-out ${showOverlay ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
               <div className="bg-black/90 backdrop-blur-xl p-8 rounded-[32px] border border-[#b0ff3e]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-center space-y-4 max-w-xs w-full mx-4">
                  <div className="space-y-1">
                     <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.25em]">Verified Earnings</p>
                     <h4 className="text-5xl font-black text-[#b0ff3e] tracking-tighter italic drop-shadow-[0_0_15px_rgba(176,255,62,0.5)]">
                        $51,311
                     </h4>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="px-4 py-1.5 bg-[#b0ff3e]/10 border border-[#b0ff3e]/20 rounded-full flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#b0ff3e] animate-pulse"></div>
                        <span className="text-[10px] font-bold text-[#b0ff3e] uppercase tracking-wide">Live Student Data</span>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>

      <button 
        onClick={scrollToCheckout}
        className="w-full bg-[#b0ff3e] text-black font-black py-5 md:py-7 rounded-2xl text-xl md:text-2xl uppercase tracking-tighter hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(176,255,62,0.3)] border-2 border-transparent hover:border-black/10"
      >
        Start Earning With AI Today →
      </button>
    </div>
  );
};
