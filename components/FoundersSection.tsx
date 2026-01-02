
import React from 'react';

export const FoundersSection: React.FC = () => {
  return (
    <section className="bg-zinc-950 border border-zinc-900 rounded-[40px] overflow-hidden p-8 md:p-16 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full -mr-20 -mt-20"></div>
      
      <div className="max-w-3xl mx-auto space-y-10 relative z-10 text-center md:text-left">
        <div className="space-y-4">
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Meet the Founders</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic">
            HEY, WE'RE <br />
            <span className="text-[#b0ff3e]">TIM & LUKA!</span>
          </h2>
        </div>
        
        <div className="space-y-6 text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
          <p>Before we founded <span className="text-white font-black underline decoration-indigo-500">AI Influencer Blueprint</span> and built @giulia.banks, we were exactly where you might be right now.</p>
          
          <p>We posted thousands of short-form videos that flopped. We sat in <span className="italic text-indigo-400 font-bold">"200-view jail"</span> for months, waiting for a breakthrough.</p>
          
          <div className="py-4">
            <p className="text-white font-black italic text-2xl tracking-tight">Then, everything changed.</p>
          </div>

          <p>We combined Luka's organic content strategy (which has since generated <span className="text-white font-black underline decoration-[#b0ff3e]">2 Billion+ views</span>) with Tim's paid systems (managing <span className="text-white font-black">$5M+ in ads</span>).</p>
          
          <p className="text-zinc-500 italic">Now, we're sharing exactly how we did it.</p>
        </div>
      </div>
    </section>
  );
};
