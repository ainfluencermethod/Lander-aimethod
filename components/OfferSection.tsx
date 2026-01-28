
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export const OfferSection: React.FC = () => {
  const whopLink = "https://whop.com/checkout/plan_GuUsHdQ2URrN7/";

  const deliverables = [
      {
          text: "Live prompting sessions",
          sub: "Create & prompt AI content together on LIVE calls."
      },
      {
          text: "In-depth tech stack lessons",
          sub: "Learn the exact tools we use to create viral content."
      },
      {
          text: "AI Influencer Accelerator",
          sub: "Launch in 3 Days Framework."
      },
      {
          text: "'Sell in Your Sleep' System",
          sub: "Automated profile funnel setup for passive income."
      },
      {
          text: "[BONUS] JSON Prompts & Weavy Workflows",
          sub: "Copy-paste code for consistent character generation."
      },
      {
          text: "[BONUS] Viral Reverse Engineering",
          sub: "How to deconstruct any viral video and recreate it."
      }
  ];

  return (
    <section id="checkout" className="py-24 px-4 max-w-3xl mx-auto">
      
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white">
            Lock in <br />
            $97/month. Forever.
        </h2>
        <p className="text-zinc-400 text-lg">
            Launching: February 2026. <br />
            Your subscription starts the day you join.
        </p>
      </div>

      <div className="bg-zinc-100 rounded-2xl p-8 md:p-12 text-black shadow-2xl">
         <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
            <span className="font-bold uppercase tracking-widest text-xs">What Founding Members get:</span>
         </div>

         <ul className="space-y-6 mb-12">
            {deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                    <div className="bg-black/5 p-1 rounded mt-0.5">
                        <Check size={16} className="text-black" strokeWidth={3} />
                    </div>
                    <div>
                        <span className="font-bold text-lg leading-tight block">{item.text}</span>
                        <span className="text-sm text-zinc-600 leading-tight">{item.sub}</span>
                    </div>
                </li>
            ))}
         </ul>

         <div className="space-y-4">
             <a 
                href={whopLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black text-white text-center font-bold text-xl py-5 rounded-lg hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 group"
             >
                Join The Blueprint - $97/month <ArrowRight className="group-hover:translate-x-1 transition-transform" />
             </a>
             <p className="text-center text-xs font-medium text-zinc-500 uppercase tracking-widest">
                Instant Access • Cancel Anytime • 100% Risk-Free
             </p>
         </div>
      </div>
    </section>
  );
};
