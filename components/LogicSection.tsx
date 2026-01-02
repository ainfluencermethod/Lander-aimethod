
import React from 'react';
import { Eye, ArrowDown } from 'lucide-react';

export const LogicSection: React.FC = () => {
  return (
    <section className="space-y-16">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-zinc-500 text-[10px] font-black uppercase tracking-widest">
           <span className="text-indigo-500 animate-pulse">●</span> THE AI ARBITRAGE
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight max-w-4xl mx-auto text-balance text-white">
          What If You Got <span className="text-[#b0ff3e]">Paid Every Time</span> Someone Watched <br />
          <span className="italic underline decoration-indigo-600 underline-offset-[16px] decoration-8">Your AI Influencer Video?</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { 
            img: 'https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6957a2f5748303ef559edb8c.png', 
            label: '17.3M',
            desc: 'TRAVEL VIRAL MOMENT'
          },
          { 
            img: 'https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6957a2f5edb8a229283ca82a.png', 
            label: '61.3M',
            desc: 'MIRROR SELFIE HOOK'
          },
          { 
            img: 'https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6957a2f5edb8a2537f3ca82b.png', 
            label: '5.2M',
            desc: 'CHARACTER COLLAB'
          }
        ].map((item, idx) => (
          <div key={idx} className="relative aspect-[9/16] rounded-[32px] overflow-hidden group border border-white/10 bg-black shadow-2xl transition-all hover:border-[#b0ff3e]/30">
            <img 
              src={item.img} 
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" 
              alt={item.desc} 
            />
            
            {/* View Count Overlay */}
            <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2 text-white/95 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              <Eye size={18} className="stroke-[3px]" />
              <span className="font-black text-xl tracking-tight">{item.label}</span>
            </div>

            {/* Glossy Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
            
            {/* Subtle Vignette & Shadow Bottom */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[32px] z-20 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Visual Connector */}
      <div className="flex flex-col items-center justify-center -my-8 relative z-10">
         <div className="h-16 w-px bg-gradient-to-b from-transparent via-[#b0ff3e] to-transparent opacity-50"></div>
         <div className="bg-black border border-[#b0ff3e]/30 rounded-full p-2 shadow-[0_0_20px_rgba(176,255,62,0.3)]">
            <ArrowDown className="text-[#b0ff3e]" size={24} />
         </div>
         <div className="h-16 w-px bg-gradient-to-b from-[#b0ff3e] via-transparent to-transparent opacity-50"></div>
      </div>

      {/* Results Grid */}
      <div className="space-y-8">
        <div className="text-center">
            <div className="inline-block bg-[#b0ff3e]/10 border border-[#b0ff3e]/20 px-4 py-1 rounded-full">
                <span className="text-[10px] font-black text-[#b0ff3e] uppercase tracking-[0.3em]">Direct Results</span>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {[
            'https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/695810244aa6694273e385d0.jpg',
            'https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/69581024e7c613f5a46bd9b3.jpg',
            'https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/695810244aa669cf2be385cf.jpg'
            ].map((img, idx) => (
            <div key={idx} className="relative rounded-[24px] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl group hover:-translate-y-1 transition-transform duration-300">
                <img 
                    src={img} 
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                    alt="Results Proof" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
            ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-zinc-800"></div>
          <h3 className="text-2xl italic font-bold shrink-0 text-white">The Game Has Changed...</h3>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-zinc-800"></div>
        </div>
        
        <p className="text-zinc-400 text-lg leading-relaxed text-center font-medium">
          You no longer need to be the talent. You own the <span className="text-white font-bold">digital asset</span> that never gets tired, never complains, and works 24/7.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'NO', value: 'expensive cameras.' },
            { label: 'NO', value: '10-hour editing sessions.' },
            { label: 'NO', value: 'awkward filming in public.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-950 border border-zinc-900 p-5 rounded-3xl flex flex-col gap-1 text-center group hover:border-[#b0ff3e]/30 transition-all hover:bg-zinc-900/50">
               <span className="text-rose-600 font-black text-xs tracking-widest">{item.label}</span>
               <span className="text-zinc-300 italic font-bold leading-tight">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
