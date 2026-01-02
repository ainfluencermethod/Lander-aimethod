
import React from 'react';
import { PRIMARY_GREEN } from '../constants';
import { Cpu, Search, Zap, Layers } from 'lucide-react';

export const StepByStep: React.FC = () => {
  return (
    <section className="space-y-16">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-zinc-500 text-[10px] font-black uppercase tracking-widest">
           <span className="text-[#b0ff3e]">●</span> THE WORKFLOW
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic">
          How It Works <span className="text-[#b0ff3e] underline underline-offset-8">Step-By-Step</span>
        </h2>
      </div>

      <div className="bg-grid rounded-[40px] border border-zinc-800 p-8 md:p-16 overflow-hidden relative space-y-32">
         
         {/* Step 1: Build Your AI Influencer */}
         <div className="flex flex-col md:flex-row items-center gap-12 relative">
            <div className="flex-1 space-y-6">
              <div className="text-[120px] font-black text-white/5 absolute -top-16 -left-10 select-none z-0">01</div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#b0ff3e]/10 rounded-lg border border-[#b0ff3e]/20">
                        <Layers size={20} className="text-[#b0ff3e]" />
                    </div>
                    <h3 className="text-3xl font-black tracking-tighter italic">Build Your <span className="text-[#b0ff3e]">AI Influencer.</span></h3>
                </div>
                <p className="text-zinc-400 leading-relaxed font-medium text-lg">
                  Create a photorealistic, 100% consistent AI persona. Our "DNA Framework" ensures your character stays identical across every video, background, and outfit.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full md:w-auto bg-zinc-950 border border-zinc-800 p-8 rounded-[32px] shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">CONSISTENCY ENGINE v2.0</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                      <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                      <div className="w-2 h-2 rounded-full bg-[#b0ff3e]"></div>
                    </div>
                  </div>
                  <div className="aspect-square bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 relative">
                    <img 
                      src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6957a2f5edb8a229283ca82a.png" 
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                      alt="AI Character Generation"
                    />
                    <div className="absolute inset-0 bg-grid opacity-20"></div>
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {['FACE_LOCK', 'DNA_SYNC', 'TEXTURE_MAP'].map(tag => (
                        <span key={tag} className="text-[8px] font-black bg-black/60 backdrop-blur px-2 py-1 rounded border border-white/5 text-[#b0ff3e]">{tag}</span>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Step 2: Find The Gold */}
         <div className="flex flex-col md:flex-row-reverse items-center gap-12 relative">
            <div className="flex-1 space-y-6">
              <div className="text-[120px] font-black text-white/5 absolute -top-16 -right-10 select-none z-0 text-right w-full">02</div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                        <Search size={20} className="text-indigo-400" />
                    </div>
                    <h3 className="text-3xl font-black tracking-tighter italic">Find The <span className="text-white underline decoration-indigo-600 decoration-4">Gold.</span></h3>
                </div>
                <p className="text-zinc-400 leading-relaxed font-medium text-lg">
                  Use our proprietary "Clip Goldmine" method to instantly spot viral videos from any creator. We identify the specific hooks and dances that are primed for massive engagement.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full md:w-auto bg-zinc-950 border border-zinc-800 p-8 rounded-[32px] rotate-[-2deg] hover:rotate-0 transition-all duration-500 shadow-2xl group">
               <div className="space-y-6">
                 <div className="grid grid-cols-2 gap-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden relative border border-white/5">
                        <img src={`https://picsum.photos/seed/gold${i}/200/250?grayscale`} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity" alt="Viral clip" />
                        <div className="absolute bottom-2 left-2 flex items-center gap-1">
                          <Zap size={10} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-[8px] font-black text-white">VIRAL HOOK</span>
                        </div>
                     </div>
                   ))}
                 </div>
                 <div className="flex gap-2 justify-center">
                   {['YOUTUBE', 'TIKTOK', 'REELS', 'TWITCH'].map(p => (
                     <span key={p} className="text-[8px] font-black uppercase tracking-widest bg-zinc-800/50 px-3 py-1.5 rounded-full text-zinc-500 border border-zinc-800">{p}</span>
                   ))}
                 </div>
               </div>
            </div>
         </div>

         {/* Step 3: Let The AI Handle It */}
         <div className="flex flex-col md:flex-row items-center gap-12 relative">
            <div className="flex-1 space-y-6">
              <div className="text-[120px] font-black text-white/5 absolute -top-16 -left-10 select-none z-0">03</div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                        <Cpu size={20} className="text-indigo-400" />
                    </div>
                    <h3 className="text-3xl font-black tracking-tighter italic">Let The <span className="text-indigo-500 underline decoration-[#b0ff3e]">AI Handle It.</span></h3>
                </div>
                <p className="text-zinc-400 leading-relaxed font-medium text-lg">
                  Throw the link into our automated system. The AI swaps the creator for your AI Influencer, crops for mobile, and adds high-conversion subtitles in seconds.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full md:w-auto bg-[#0c0c0e] border border-zinc-800 p-8 rounded-[32px] shadow-2xl group overflow-hidden">
               <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
                    <span className="text-indigo-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                        AI PROCESSING...
                    </span>
                    <span className="text-zinc-600">75% COMPLETE</span>
                  </div>
                  
                  <div className="relative h-3 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                    <div className="h-full bg-indigo-600 w-3/4 animate-[shimmer_2s_infinite] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="aspect-[9/16] bg-zinc-900 rounded-xl relative overflow-hidden border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>
                        <div className="absolute bottom-2 inset-x-2 h-1 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 w-full animate-pulse"></div>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
               {/* Decorative circuit lines */}
               <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className="w-64 h-64 border-[1px] border-indigo-500 rounded-full"></div>
                    <div className="w-48 h-48 border-[1px] border-indigo-500 rounded-full absolute top-8 left-8"></div>
               </div>
            </div>
         </div>

      </div>
    </section>
  );
};
