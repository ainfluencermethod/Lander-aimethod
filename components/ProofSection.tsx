
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Users } from 'lucide-react';

export const ProofSection: React.FC = () => {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-zinc-500 font-black tracking-[0.2em] uppercase text-xs">These Are Some Of The</h2>
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter italic text-white">SUCCESS <span className="text-rose-600">STORIES</span></h3>
        <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Real Results From Our Students</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map(t => (
          <div key={t.id} className="bg-zinc-900/40 backdrop-blur rounded-[32px] overflow-hidden border border-zinc-800/50 p-4 hover:border-zinc-700 transition-all group hover:-translate-y-1">
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-black border border-white/5">
              <img 
                src={t.image} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Success proof" 
              />
              {/* Removed video badges and play buttons as per request */}
              <div className="absolute bottom-4 right-4 bg-[#b0ff3e] text-black text-[10px] font-black px-3 py-1.5 rounded-full shadow-[0_4px_20px_rgba(176,255,62,0.4)]">
                {t.earnings} Earnings
              </div>
            </div>
            
            <div className="space-y-3 px-2">
              <h4 className="text-white font-black text-sm uppercase leading-tight tracking-tight">
                {t.content.split(' - ')[0]}
              </h4>
              <p className="text-zinc-500 text-[11px] italic font-medium leading-relaxed">
                {t.content.split(' - ')[1]}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <div className="text-[9px] font-black text-[#b0ff3e] tracking-widest uppercase opacity-70">{t.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-500/10 border border-indigo-500/20 p-8 md:p-12 rounded-[40px] text-center max-w-2xl mx-auto relative overflow-hidden group">
        <div className="absolute -top-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
           <Users size={200} className="text-indigo-500" />
        </div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 px-4 py-1.5 rounded-full mb-6">
            <Users size={14} className="text-indigo-400" />
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">PRIVATE VIP INNER CIRCLE</span>
          </div>
          
          <h4 className="text-2xl md:text-3xl font-black italic tracking-tighter mb-4 text-white">
            GET ACCESS TO THE <span className="text-[#b0ff3e]">PRIVATE VIP</span> COMMUNITY
          </h4>
          <p className="text-zinc-400 font-medium mb-8 leading-relaxed">
            Every testimonial above comes from a student who is currently active in our private community. Network with top creators, get daily prompt updates, and have your questions answered by Tim & Luka directly.
          </p>
          
          <button 
            onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 text-white font-black px-10 py-4 rounded-2xl text-xs uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:scale-105 active:scale-95"
          >
            Join The Community & Blueprint →
          </button>
        </div>
      </div>
    </section>
  );
};
