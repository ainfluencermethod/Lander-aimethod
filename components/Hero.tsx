
import React from 'react';
import { Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-8 pb-8 px-4 text-center max-w-5xl mx-auto">
      <div className="space-y-8 flex flex-col items-center">
        
        {/* Profile Header Image */}
        <img 
          src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/695846ba035c3a74d65b20b9.png" 
          alt="Profile Header" 
          className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform"
        />

        {/* VIP Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1a1b2e] border border-indigo-500/30 px-5 py-2.5 rounded-full mb-2">
          <Users size={16} className="text-indigo-400" />
          <span className="text-[11px] font-black text-indigo-200 uppercase tracking-widest">LIMITED SPOTS, BE QUICK</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tighter max-w-4xl">
          How I Make <br />
          <span className="text-[#b0ff3e]">$1,400-$2,800</span> <span className="text-white">Every Day</span> <br />
          <span className="italic underline decoration-[#b0ff3e] decoration-[12px] underline-offset-[14px]">With AI Influencers</span>
        </h1>
        
        {/* Sub Headline */}
        <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mt-4">
          No Camera. No Editing Skills. No Following Required. 
          <span className="text-white font-black"> Completely Faceless.</span> Just Find Viral Dance Videos & Recreate Them With Your AI Influencer
        </p>
      </div>
    </section>
  );
};
