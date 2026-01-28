import React from 'react';

export const LogicSection: React.FC = () => {
  return (
    <section className="space-y-20 max-w-2xl mx-auto px-4 py-12">
      
      {/* Current Reality Narrative */}
      <div className="space-y-12">
        <div className="inline-block bg-zinc-900 px-3 py-1 text-[10px] font-mono text-zinc-400 uppercase tracking-widest rounded border border-zinc-800">
            Your Current Reality
        </div>
        
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            This is your week with AI...
        </h2>

        <div className="space-y-10 pl-6 border-l border-zinc-800 relative">
            {/* Monday */}
            <div className="space-y-2 relative">
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-950"></div>
                <h3 className="text-[#6d7db5] font-bold text-xl">Monday morning:</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                    3 new model announcements on X. Sora updated. Veo 3 dropped something. 
                    You bookmark all of it.
                </p>
            </div>

            {/* Tuesday */}
            <div className="space-y-2 relative">
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-950"></div>
                <h3 className="text-[#6d7db5] font-bold text-xl">Tuesday:</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                    Your bookmarks folder: 71 tweets. Your inbox: 12 unread AI newsletters.
                    You try Midjourney for an hour. Consistent characters fail. You do it yourself.
                </p>
            </div>

            {/* Wednesday */}
            <div className="space-y-2 relative">
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-950"></div>
                <h3 className="text-[#6d7db5] font-bold text-xl">Wednesday:</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                    Everyone's "10x-ing their output" with AI. Real or hype? You don't know.
                    You sign up for another tool. $20/month. You use it once.
                </p>
            </div>

            {/* Thursday */}
            <div className="space-y-2 relative">
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-950"></div>
                <h3 className="text-[#6d7db5] font-bold text-xl">Thursday:</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                    Client asks: "Can you use AI for this?" You say yes.
                    3 hours researching workarounds. You pick one randomly. It doesn't work.
                </p>
            </div>

            {/* Friday */}
            <div className="space-y-2 relative">
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-950"></div>
                <h3 className="text-[#6d7db5] font-bold text-xl">Friday:</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                    10+ hours this week "learning" about AI.
                    Zero hours actually shipping viral content.
                </p>
            </div>
        </div>

        <div className="bg-zinc-900/50 p-6 rounded-lg border-l-2 border-[#b0ff3e]">
            <p className="text-xl font-medium text-white italic">
                You're not behind because you're not trying. <br />
                <span className="text-zinc-400 not-italic">You're behind because you're drowning in information with zero clear path forward.</span>
            </p>
        </div>
      </div>

    </section>
  );
};