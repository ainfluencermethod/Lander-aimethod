
import React from 'react';
import { PRIMARY_GREEN } from '../constants';
import { Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-12 px-4 text-center max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full mb-4">
          <Users size={14} className="text-indigo-400" />
          <span className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em]">Private VIP Community Access Included</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter">
          How I Make <br />
          <span className="text-[#b0ff3e]">$1,400-$2,800</span> Every Day <br />
          <span className="italic underline decoration-[#b0ff3e] decoration-8 underline-offset-8">With AI Influencers</span>
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          No Camera. No Editing Skills. No Following Required. 
          <span className="text-white"> Completely Faceless.</span> Just Find Viral Dance Videos & Recreate Them With Your AI Influencer
        </p>

        <div className="flex flex-col items-center gap-4 pt-4">
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/hero${i}/100/100`} 
                className="w-10 h-10 rounded-full border-2 border-zinc-950" 
                alt="user"
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-indigo-600 border-2 border-zinc-950 flex items-center justify-center text-[10px] font-bold">
              +1k
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
          <p className="text-zinc-500 text-sm font-medium italic">Join 1000+ Successful Students</p>
        </div>
      </div>
    </section>
  );
};
