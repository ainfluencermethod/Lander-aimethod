
import React from 'react';

export const LogicSection: React.FC = () => {
  return (
    <section className="space-y-16">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-zinc-500 text-[10px] font-black uppercase tracking-widest">
           <span className="text-indigo-500 animate-pulse">●</span> The AI Arbitrage
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight max-w-4xl mx-auto text-balance text-white">
          What If You Got <span className="text-[#b0ff3e]">Paid Every Time</span> Someone Watched <br />
          <span className="italic underline decoration-indigo-600 underline-offset-[16px] decoration-8">Your AI Influencer Video?</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { 
            img: 'input_file_0.png', 
            label: '17.3M VIEWS',
            desc: 'Fishing Viral Moment',
            // Image input_file_0.png already contains the "started when my mom..." text
          },
          { 
            img: 'input_file_2.png', 
            label: '61.3M VIEWS',
            desc: 'Character & Partner Hook',
            isDashboard: false
          },
          { 
            img: 'input_file_1.png', 
            label: '5.2M VIEWS',
            desc: 'Daily Habit Mirror Selfie'
          }
        ].map((item, idx) => (
          <div key={idx} className="relative aspect-[9/16] rounded-3xl overflow-hidden group border border-white/5 bg-zinc-900 shadow-2xl">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img 
              src={item.img} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 contrast-125 saturate-[1.1]" 
              alt={item.desc} 
            />
            
            {/* View Count Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/90 to-transparent z-20">
               <div className="space-y-1">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#b0ff3e] shadow-[0_0_10px_#b0ff3e]"></div>
                   <span className="text-white text-xl font-black tracking-tighter glow-primary-text uppercase">
                     {item.label}
                   </span>
                 </div>
                 <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
                   {item.desc}
                 </p>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-zinc-800"></div>
          <h3 className="text-2xl italic font-bold shrink-0">The Game Has Changed...</h3>
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
