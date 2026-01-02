
import React from 'react';
import { FEATURES, BONUSES } from '../constants';
import { Gift, Users, ShieldCheck, Zap } from 'lucide-react';

export const OfferSection: React.FC = () => {
  const whopLink = "https://whop.com/checkout/plan_GuUsHdQ2URrN7/";

  return (
    <section id="checkout" className="bg-grid rounded-[40px] border border-zinc-800 p-6 md:p-12 relative overflow-hidden">
      <div className="relative z-10 text-center space-y-4 mb-12">
        <div className="text-zinc-500 font-black tracking-[0.2em] uppercase text-sm">Introducing:</div>
        <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">THE AI INFLUENCER <span className="text-rose-600 underline">BLUEPRINT</span></h2>
        <p className="text-zinc-400 font-medium">The only copy-paste protocol for building <span className="text-white underline decoration-[#b0ff3e]">viral AI INFLUENCERS</span>.</p>
      </div>

      <div className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 md:p-10 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h3 className="text-white font-black text-2xl tracking-tight uppercase italic underline decoration-rose-600">The Curriculum</h3>
          <div className="flex items-center gap-2 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20">
            <Users size={16} className="text-indigo-400" />
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">INCLUDES VIP COMMUNITY ACCESS</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {FEATURES.map(f => (
            <div key={f.id} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-[#b0ff3e]/30 transition-colors flex flex-col justify-between">
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

        <div className="mt-12 text-center bg-zinc-900/80 rounded-3xl p-8 border border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldCheck size={120} className="text-[#b0ff3e]" />
          </div>
          <div className="text-zinc-500 font-black line-through text-2xl mb-1">$5,500+ Total Value</div>
          <div className="flex flex-col items-center justify-center gap-3 relative z-10">
             <span className="text-4xl md:text-6xl font-black tracking-tighter italic">Get Everything For <span className="text-[#b0ff3e]">$97</span></span>
             <div className="bg-[#b0ff3e]/20 text-[#b0ff3e] text-[10px] font-black py-1.5 px-6 rounded-full uppercase tracking-[0.2em] animate-pulse border border-[#b0ff3e]/30">
                LIFETIME ACCESS INCLUDES PRIVATE COMMUNITY
             </div>
          </div>
        </div>

        <div className="mt-12">
          <a 
            href={whopLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#b0ff3e] text-black font-black py-6 rounded-2xl text-xl text-center block uppercase tracking-tight hover:scale-[1.01] transition-transform shadow-[0_20px_40px_rgba(176,255,62,0.3)] active:scale-95"
          >
            Enroll In AI Influencer Blueprint Now →
          </a>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { icon: Zap, text: "Instant Setup" },
               { icon: ShieldCheck, text: "Secure Whop Checkout" },
               { icon: Users, text: "1,000+ Members" },
               { icon: Gift, text: "4 Free Bonuses" }
             ].map((item, i) => (
               <div key={i} className="flex items-center justify-center gap-2 opacity-60">
                 <item.icon size={12} className="text-[#b0ff3e]" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{item.text}</span>
               </div>
             ))}
          </div>
          
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest text-center mt-6 italic">
            Risk-Free Guarantee • Join The Revolution
          </p>
        </div>
      </div>
    </section>
  );
};
