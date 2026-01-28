
import React from 'react';
import { EarningShowcase } from './EarningShowcase';

export const Hero: React.FC = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-16 pb-8 px-4 text-center max-w-4xl mx-auto relative">
      <div className="space-y-8 flex flex-col items-center relative z-10 mb-12">
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.1]">
          Get Weekly Battle-Tested <br />
          <span className="bg-[#b0ff3e] text-black px-2">AI Influencer Workflows</span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
           Plus The Complete Operator Toolkit. <br />
           <span className="text-zinc-500 text-lg">So you stop feeling behind and start deploying working systems.</span>
        </p>

        <button 
            onClick={scrollToCheckout}
            className="bg-zinc-100 hover:bg-white text-black text-lg px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-2 group"
        >
            Join The Blueprint
            <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>

        <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
            Join 1,200+ Founding Members
        </p>
      </div>

      {/* VSL Embedded directly in Hero for focus */}
      <EarningShowcase />
    </section>
  );
};
