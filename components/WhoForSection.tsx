
import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const WhoForSection: React.FC = () => {
  return (
    <section className="bg-[#fcfcfc] py-24 px-4 relative overflow-hidden">
      {/* Light Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        <div className="text-center space-y-2">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900">
            Who This Works For
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-400 tracking-tighter">
            (And Who It Doesn't)
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Works For Card */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-zinc-200 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
            <div className="flex items-center gap-3 mb-8 border-b border-dashed border-zinc-200 pb-6">
              <div className="bg-green-100 p-2 rounded-lg">
                <CheckCircle2 className="text-green-600 fill-green-100" size={24} />
              </div>
              <h4 className="font-black text-xl text-zinc-900 tracking-tight">AI Influencer Blueprint is perfect if you...</h4>
            </div>
            
            <ul className="space-y-4">
              {[
                "Spend time watching videos online anyway",
                "Want extra income without starting a complicated business",
                "Need money coming in within 30 days, not months",
                "Can put in 2-3 hours daily consistently",
                "Have a phone and basic internet",
                "Are willing to follow a proven system"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                  <span className="text-zinc-600 font-medium text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For Card */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-zinc-200 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
            <div className="flex items-center gap-3 mb-8 border-b border-dashed border-zinc-200 pb-6">
              <div className="bg-red-100 p-2 rounded-lg">
                <XCircle className="text-red-600 fill-red-100" size={24} />
              </div>
              <h4 className="font-black text-xl text-zinc-900 tracking-tight">It's not for you if...</h4>
            </div>
            
            <ul className="space-y-4">
              {[
                "You expect money without any work",
                "You won't follow simple instructions",
                "You give up after one week",
                "You want to become famous (this is about money, not fame)",
                'You think $97 is "expensive" for a complete income system'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
                  <span className="text-zinc-600 font-medium text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
