import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';

export const EarningShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      const duration = videoRef.current.duration;
      if (Number.isFinite(duration) && duration > 0) {
        const prog = (videoRef.current.currentTime / duration) * 100;
        setProgress(prog);
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative aspect-video bg-zinc-900 rounded-xl overflow-hidden shadow-2xl border border-zinc-800">
          
          <div className="absolute top-4 right-4 z-30">
             <button 
                onClick={toggleMute} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
             >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
             </button>
          </div>

          <div className="relative w-full h-full cursor-pointer" onClick={togglePlay}>
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/694d0c20dda19201e3593e07.mp4" 
              poster="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/69584f494aa66947d2eba68a.png"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
            />

            {/* Simple Unmute Overlay */}
            {isMuted && isPlaying && (
                <div 
                    className="absolute inset-0 flex items-center justify-center z-20 bg-black/20"
                    onClick={toggleMute}
                >
                   <div className="bg-black/80 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 hover:scale-105 transition-transform">
                        <VolumeX size={16} className="text-white" />
                        <span className="text-xs font-bold text-white uppercase tracking-wide">Tap to unmute</span>
                   </div>
                </div>
            )}

            {/* Play Button Overlay */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Play className="fill-white text-white ml-1" size={24} />
                    </div>
                </div>
            )}

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800">
               <div 
                  className="h-full bg-[#b0ff3e]"
                  style={{ width: `${progress}%` }}
               ></div>
            </div>
          </div>
      </div>
    </div>
  );
};