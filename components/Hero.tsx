
import React from 'react';
import { Users, Star, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-12 pb-4 px-4 text-center max-w-5xl mx-auto relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#b0ff3e]/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        
      <div className="space-y-6 flex flex-col items-center relative z-10">
        
        {/* Profile Header Image */}
        <div className="relative group cursor-pointer" onClick={scrollToCheckout}>
             <div className="absolute inset-0 bg-[#b0ff3e] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
             <img 
              src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/695846ba035c3a74d65b20b9.png" 
              alt="Profile Header" 
              className="h-12 md:h-16 w-auto object-contain relative z-10 hover:scale-105 transition-transform duration-300"
            />
        </div>

        {/* Social Proof Badge */}
        <div className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur border border-zinc-800 px-4 py-1.5 rounded-full shadow-xl animate-fade-in-up">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
                <img key={i} src={`https://picsum.photos/seed/p${i}/50/50`} className="w-5 h-5 rounded-full border border-zinc-900" alt="user" />
            ))}
          </div>
          <div className="flex items-center gap-1">
             <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />)}
             </div>
             <span className="text-[10px] font-bold text-zinc-300"><span className="text-white">4.9/5</span> from 1,200+ students</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter max-w-5xl text-white drop-shadow-2xl px-2">
          How You Can Copy My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b0ff3e] to-emerald-400">AI System</span> That Makes Me <span className="text-[#b0ff3e] underline decoration-white/20 underline-offset-8">$1,200 to $3,500</span> Every Day From AI Influencers
        </h1>
        
        {/* Sub Headline with Checkmarks */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm font-bold text-zinc-400 max-w-3xl mx-auto pt-2">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#b0ff3e]" /> No Camera</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#b0ff3e]" /> No Editing Skills</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#b0ff3e]" /> 2-3 Hours/Day</span>
        </div>
      </div>
    </section>
  );
};
