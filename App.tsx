
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { EarningShowcase } from './components/EarningShowcase';
import { OfferSection } from './components/OfferSection';
import { ProofSection } from './components/ProofSection';
import { LogicSection } from './components/LogicSection';
import { FoundersSection } from './components/FoundersSection';
import { StepByStep } from './components/StepByStep';
import { IncomeCalculator } from './components/IncomeCalculator';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { WhoForSection } from './components/WhoForSection';
import { GuaranteeSection } from './components/GuaranteeSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#b0ff3e] selection:text-black">
      {/* Top Banner */}
      <div className="bg-[#b0ff3e] text-black py-2.5 text-center font-black text-[11px] tracking-widest uppercase">
        <span className="bg-white/40 px-2 py-0.5 rounded-sm mr-2 font-black">NEW</span>
        The Laziest Way to Earn in 2026
      </div>

      <Hero />
      
      <main className="max-w-4xl mx-auto px-4 space-y-24 pb-24">
        <EarningShowcase />
        <LogicSection />
      </main>

      {/* Full width section for WhoFor to allow background to span */}
      <div className="w-full my-24">
        <WhoForSection />
      </div>

      <main className="max-w-4xl mx-auto px-4 space-y-24 pb-24">
        <FoundersSection />
        <StepByStep />
        <ProofSection />
        <OfferSection />
        <GuaranteeSection />
        
        {/* Final CTA */}
        <div className="pt-12">
          <button 
            onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-[#b0ff3e] text-black font-black py-6 rounded-xl text-xl uppercase tracking-tighter hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(176,255,62,0.4)]"
          >
            Get Instant Access To AI Influencer Method →
          </button>
          <div className="mt-8 flex flex-col items-center gap-4">
             <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
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

        <IncomeCalculator />
        
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
