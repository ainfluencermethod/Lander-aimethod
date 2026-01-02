
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 px-4 max-w-5xl mx-auto relative overflow-hidden">
      <div className="text-center space-y-10 relative">
        {/* Floating Sidebar (Desktop Only) */}
        <div className="hidden xl:block absolute left-0 top-32 -rotate-3 text-left z-20">
           <div className="p-5 bg-zinc-900/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-1">
             <div className="text-indigo-400 font-black text-xl tracking-tight">Giuliaa.banks</div>
             <div className="text-white/40 font-medium text-[10px] italic leading-tight max-w-[150px]">Don't Fall In Love, I'm Just an AI</div>
             <div className="text-indigo-400/60 font-bold text-sm mt-1">130k Followers</div>
           </div>
        </div>

        {/* Floating Badge (Centered Above Heading) */}
        <div className="flex justify-center">
           <div className="bg-[#b0ff3e]/5 border border-[#b0ff3e]/20 px-6 py-2.5 rounded-full flex items-center gap-3 backdrop-blur-md">
             <div className="bg-[#b0ff3e] text-black font-black text-[9px] px-1.5 py-0.5 rounded leading-none flex items-center justify-center">NEW</div>
             <span className="text-white font-black italic tracking-tight text-xs md:text-sm uppercase flex items-center gap-2">
               THE <span className="italic">LAZIEST</span> WAY TO EARN IN 2025
             </span>
           </div>
        </div>

        {/* Content Stack */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-[5.5rem] font-black leading-[1] tracking-tighter text-white">
              How I Make <br />
              <span className="text-[#b0ff3e]">$1,400-$2,800</span> Every Day <br />
              <span className="italic underline decoration-white decoration-8 underline-offset-[16px]">With AI Influencers</span>
            </h1>
            <div className="h-px w-full max-w-3xl mx-auto bg-zinc-800/50 mt-12 mb-8"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-zinc-400 text-lg md:text-xl font-bold leading-relaxed">
              No Camera. No Editing Skills. No Following Required. 
              <span className="text-white"> Completely Faceless.</span>
              <br className="hidden md:block" />
              <span className="text-zinc-500 italic block mt-6 text-base md:text-lg font-bold opacity-90">
                Just Find Viral Dance Videos & Recreate Them With Your AI Influencer
              </span>
            </p>
          </div>
        </div>

        {/* Social Proof Row */}
        <div className="flex flex-col items-center gap-4 pt-12">
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/hero${i}/100/100`} 
                className="w-10 h-10 rounded-full border-2 border-zinc-950" 
                alt="Student avatar"
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-indigo-600 border-2 border-zinc-950 flex items-center justify-center text-[10px] font-bold text-white">
              +1k
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
          <p className="text-zinc-500 text-sm font-medium italic">Join 1000+ Successful Students</p>
        </div>
      </div>
    </section>
  );
};
