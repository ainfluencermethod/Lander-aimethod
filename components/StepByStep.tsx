
import React from 'react';
import { PRIMARY_GREEN } from '../constants';

export const StepByStep: React.FC = () => {
  return (
    <section className="space-y-16">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-zinc-500 text-[10px] font-black uppercase tracking-widest">
           <span className="text-[#b0ff3e]">●</span> Step-by-Step
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic">
          How Does This Work <span className="text-indigo-500 underline">Exactly?</span>
        </h2>
      </div>

      <div className="bg-grid rounded-[40px] border border-zinc-800 p-8 md:p-12 overflow-hidden relative">
         {/* Step 1 Visual */}
         <div className="flex flex-col md:flex-row items-center gap-12 mb-24 relative">
            <div className="flex-1 space-y-6">
              <div className="text-7xl font-black text-zinc-800 opacity-50 absolute -top-10 -left-6 z-0">01</div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black tracking-tighter italic mb-4">Find The <span className="text-[#b0ff3e]">Gold.</span></h3>
                <p className="text-zinc-400 leading-relaxed font-medium">Use our proprietary "Clip Goldmine" method to instantly spot long videos that are primed for viral moments.</p>
              </div>
            </div>
            <div className="flex-1 bg-zinc-900 border border-zinc-800 p-6 rounded-3xl rotate-2 hover:rotate-0 transition-transform shadow-2xl">
               <img src="https://picsum.photos/seed/step1/500/300" className="rounded-xl grayscale contrast-125 mb-4" alt="YouTube/Twitch icons" />
               <div className="flex gap-2">
                 {['youtube', 'twitch', 'rumble'].map(p => (
                   <span key={p} className="text-[8px] font-black uppercase tracking-widest bg-zinc-800 px-2 py-1 rounded text-zinc-500">{p}</span>
                 ))}
               </div>
            </div>
         </div>

         {/* Step 2 Visual */}
         <div className="flex flex-col md:flex-row-reverse items-center gap-12 relative">
            <div className="flex-1 space-y-6">
              <div className="text-7xl font-black text-zinc-800 opacity-50 absolute -top-10 -right-6 z-0">02</div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black tracking-tighter italic mb-4">Let The <span className="text-indigo-500">AI Handle It.</span></h3>
                <p className="text-zinc-400 leading-relaxed font-medium">Throw the link into our automated system. The AI identifies the high-engagement peaks, crops for mobile, and subtitles everything in seconds.</p>
              </div>
            </div>
            <div className="flex-1 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl -rotate-2 hover:rotate-0 transition-transform shadow-2xl">
               <div className="space-y-4">
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-3/4 animate-pulse"></div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-indigo-400">
                    <span>AI Processing...</span>
                    <span>75%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="aspect-square bg-zinc-800 rounded-lg animate-pulse" />
                    ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};
