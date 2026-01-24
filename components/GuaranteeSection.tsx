
import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background with slight gradient */}
      <div className="absolute inset-0 bg-zinc-950"></div>
      
      {/* Giant Background text for texture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-zinc-900/50 whitespace-nowrap select-none pointer-events-none">
        GUARANTEE
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center space-y-8">
        <div className="inline-block border border-zinc-700 bg-zinc-900/80 backdrop-blur rounded-full px-6 py-2">
            <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-zinc-400 uppercase">
                <span className="text-[#b0ff3e]">●</span> 100% Risk-Free
            </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
          <span className="text-[#b0ff3e]">14-Day</span> <span className="italic text-white">"Profit Or Refund"</span><br />
          <span className="underline decoration-zinc-700 underline-offset-8 text-white">Guarantee</span>
        </h2>

        <div className="py-8 flex justify-center">
            {/* Visual representation of a gold seal using CSS/SVG */}
            <div className="relative w-48 h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 rounded-full p-2 animate-pulse shadow-[0_0_50px_rgba(234,179,8,0.3)]">
                     <div className="w-full h-full border-4 border-dashed border-yellow-200/50 rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-inner">
                        <div className="text-yellow-900 font-black text-xs uppercase tracking-widest mb-1">Money Back</div>
                        <div className="text-white font-black text-5xl tracking-tighter drop-shadow-md">100%</div>
                        <div className="text-yellow-100 font-bold text-xs uppercase tracking-widest mt-1">Guarantee</div>
                        <div className="flex gap-1 mt-2 text-yellow-900">
                             {[1,2,3].map(i => <StarIcon key={i} />)}
                        </div>
                     </div>
                </div>
            </div>
        </div>

        <div className="space-y-6">
            <h3 className="text-2xl font-black italic text-white">This works. Period.</h3>
            
            <p className="text-zinc-400 font-medium text-lg leading-relaxed max-w-xl mx-auto">
                <span className="text-white font-bold">100+</span> people have generated thousands in earnings following this exact system.
            </p>
            
            <p className="text-zinc-400 font-medium text-lg leading-relaxed max-w-xl mx-auto">
                Try it risk-free for 14 days. If you don't make money, email <span className="text-white font-bold">max@ainfluencerblueprint.com</span> for a complete refund.
            </p>
            
            <p className="text-white font-bold text-lg italic">
                One viral video alone can pay for this course 20x over.
            </p>
        </div>
      </div>
    </section>
  );
};

const StarIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
);
