
import React from 'react';
import { FEATURES, BONUSES } from '../constants';
import { Gift, Users, ShieldCheck, Zap, Check } from 'lucide-react';

export const OfferSection: React.FC = () => {
  const whopLink = "https://whop.com/checkout/plan_GuUsHdQ2URrN7/";

  return (
    <section id="checkout" className="bg-grid rounded-[40px] border border-zinc-800 p-6 md:p-12 relative overflow-hidden">
      <div className="relative z-10 text-center space-y-4 mb-12">
        <div className="text-zinc-500 font-black tracking-[0.2em] uppercase text-sm">Introducing:</div>
        <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">THE AI INFLUENCER <span className="text-rose-600 underline">BLUEPRINT</span></h2>
        <p className="text-zinc-400 font-medium">The only copy-paste protocol for building <span className="text-white underline decoration-[#b0ff3e]">viral AI INFLUENCERS</span>.</p>
      </div>

      <div className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 md:p-10 mb-8 relative">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h3 className="text-white font-black text-2xl tracking-tight uppercase italic underline decoration-rose-600">The Curriculum</h3>
          <div className="flex items-center gap-2 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20">
            <Users size={16} className="text-indigo-400" />
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">weekly updates</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {FEATURES.map(f => (
            <div key={f.id} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-[#b0ff3e]/30 transition-colors flex flex-col justify-between relative group">
              <div>
                <h4 className="font-black text-sm text-[#b0ff3e] tracking-widest uppercase mb-2 italic">{f.title}</h4>
                <p className="text-zinc-400 text-xs font-medium leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mb-12">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-zinc-800"></div>
          <div className="relative flex justify-center">
            <span className="bg-zinc-950 px-6 py-2 text-white font-black text-2xl tracking-tight uppercase italic underline decoration-[#b0ff3e]">FREE BONUSES</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {BONUSES.map(b => (
            <div key={b.id} className="bg-rose-600/10 border border-rose-600/30 p-5 rounded-2xl flex flex-col justify-between relative group hover:bg-rose-600/20 transition-all">
              <div className="absolute -top-2 -right-2 bg-rose-600 text-white text-[8px] font-black px-2 py-1 rounded rotate-12 group-hover:rotate-0 transition-transform">
                {b.value} VALUE
              </div>
              <div>
                <Gift size={18} className="text-rose-500 mb-3" />
                <h4 className="text-[11px] font-black text-zinc-100 uppercase tracking-tighter mb-2 leading-tight">{b.title}</h4>
                <p className="text-[10px] text-zinc-500 font-medium leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Stack & Pricing - Redesigned */}
        <div className="mt-16 max-w-2xl mx-auto">
          {/* The Stack */}
          <div className="bg-zinc-900 rounded-t-3xl p-8 border border-zinc-800 border-b-0 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-5">
                  <ShieldCheck size={100} />
              </div>
              <div className="text-center mb-8 relative z-10">
                 <h4 className="text-2xl font-black italic text-white tracking-tight">EVERYTHING YOU GET TODAY:</h4>
              </div>
              
              {/* List items */}
              <div className="space-y-3 relative z-10">
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded-lg border border-zinc-800/50">
                     <div className="flex items-center gap-3">
                        <div className="bg-[#b0ff3e]/10 p-1 rounded">
                            <Check size={14} className="text-[#b0ff3e]" />
                        </div>
                        <span className="font-bold text-zinc-300 text-sm md:text-base">AI Influencer Method Course</span>
                     </div>
                     <span className="font-black text-white">$297</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded-lg border border-zinc-800/50">
                     <div className="flex items-center gap-3">
                        <div className="bg-[#b0ff3e]/10 p-1 rounded">
                            <Check size={14} className="text-[#b0ff3e]" />
                        </div>
                        <span className="font-bold text-zinc-300 text-sm md:text-base">Viral Content Database</span>
                     </div>
                     <span className="font-black text-white">$497</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded-lg border border-zinc-800/50">
                     <div className="flex items-center gap-3">
                        <div className="bg-[#b0ff3e]/10 p-1 rounded">
                            <Check size={14} className="text-[#b0ff3e]" />
                        </div>
                        <span className="font-bold text-zinc-300 text-sm md:text-base">Weavy Workflows</span>
                     </div>
                     <span className="font-black text-white">$1,500</span>
                  </div>
                   <div className="flex justify-between items-center p-3 bg-black/40 rounded-lg border border-zinc-800/50">
                     <div className="flex items-center gap-3">
                        <div className="bg-[#b0ff3e]/10 p-1 rounded">
                            <Check size={14} className="text-[#b0ff3e]" />
                        </div>
                        <span className="font-bold text-zinc-300 text-sm md:text-base">Private VIP community ($97/ mo)</span>
                     </div>
                     <span className="font-black text-white">$997/yr</span>
                  </div>
              </div>

              <div className="pt-6 pb-2 text-center relative z-10">
                 <div className="text-zinc-500 font-bold uppercase text-xs tracking-widest mb-2">Total Value</div>
                 <div className="text-4xl md:text-5xl font-black text-zinc-400 line-through decoration-rose-600 decoration-[3px] opacity-70">$3,291</div>
              </div>
          </div>

          {/* The Price Card */}
          <div className="bg-[#b0ff3e] rounded-[32px] p-8 md:p-12 text-center relative shadow-[0_0_80px_rgba(176,255,62,0.3)] transform md:scale-105 z-10 border-4 border-black/5">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-8 py-3 rounded-full font-black text-xs md:text-sm tracking-widest uppercase border-[3px] border-[#b0ff3e] shadow-xl whitespace-nowrap">
                Save 98% Today
              </div>

              <div className="space-y-4 mb-8 mt-4">
                 <p className="text-black/70 font-black uppercase tracking-[0.2em] text-xs">Join The Blueprint For Only</p>
                 <div className="flex items-start justify-center gap-1 text-black leading-none">
                    <span className="text-4xl md:text-5xl font-black mt-2 md:mt-4">$</span>
                    <span className="text-[7rem] md:text-[9rem] font-black tracking-tighter">97</span>
                    <span className="text-2xl md:text-3xl font-black mt-8 md:mt-12">/mo</span>
                 </div>
                 <div className="bg-black/10 inline-block px-4 py-1 rounded-full">
                    <p className="text-black font-bold text-xs md:text-sm">
                        Less than $3.25/day • Cancel Anytime
                    </p>
                 </div>
              </div>

              <a 
                href={whopLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black text-white font-black py-6 rounded-2xl text-xl md:text-3xl text-center block uppercase tracking-tighter hover:scale-[1.02] transition-transform shadow-2xl active:scale-95 border border-white/10 relative overflow-hidden group"
              >
                <span className="relative z-10">Start Your AI Empire Now →</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>

               <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-widest text-black/60">
                 <div className="flex items-center gap-1.5">
                    <ShieldCheck size={16} /> 14-Day Money Back Guarantee
                 </div>
                 <div className="hidden md:block opacity-30">•</div>
                 <div className="flex items-center gap-1.5">
                    <Zap size={16} /> Instant Access
                 </div>
               </div>
          </div>
        </div>

      </div>
    </section>
  );
};
