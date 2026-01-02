
import React from 'react';

export const FoundersSection: React.FC = () => {
  return (
    <section className="bg-zinc-950 border border-zinc-900 rounded-[40px] overflow-hidden p-8 md:p-12 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full -mr-20 -mt-20"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
        
        {/* Text Side */}
        <div className="space-y-8 flex-1 text-center md:text-left">
          <div className="space-y-4">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Meet the Founders</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic leading-none">
              HEY, WE'RE <br />
              <span className="text-[#b0ff3e]">TIM & LUKA!</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
            <p>Before we founded <span className="text-white font-black underline decoration-indigo-500">AI Influencer Blueprint</span> and built @giulia.banks, we were exactly where you might be right now.</p>
            
            <p>We posted thousands of short-form videos that flopped. We sat in <span className="italic text-indigo-400 font-bold">"200-view jail"</span> for months, waiting for a breakthrough.</p>
            
            <div className="py-2">
              <p className="text-white font-black italic text-xl tracking-tight">Then, everything changed.</p>
            </div>

            <p>We combined Luka's organic content strategy (which has since generated <span className="text-white font-black underline decoration-[#b0ff3e]">2 Billion+ views</span>) with Tim's paid systems (managing <span className="text-white font-black">$5M+ in ads</span>).</p>
            
            <p className="text-zinc-500 italic text-sm">Now, we're sharing exactly how we did it.</p>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full max-w-sm md:max-w-none">
             <div className="relative group">
                <div className="absolute inset-0 bg-[#b0ff3e] rounded-[32px] rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500 blur-lg"></div>
                <img 
                    src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6957c3f9748303fe0fa1a348.png" 
                    alt="Tim and Luka" 
                    className="relative z-10 w-full rounded-[32px] border border-zinc-800 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500"
                />
            </div>
        </div>
      
      </div>
    </section>
  );
};
