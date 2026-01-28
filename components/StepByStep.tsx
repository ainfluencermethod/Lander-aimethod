import React from 'react';

export const StepByStep: React.FC = () => {
  return (
    <section className="space-y-24 max-w-2xl mx-auto px-4 pb-12">
      
      {/* The Real Issue */}
      <div className="space-y-8">
         <div className="inline-block bg-zinc-900 px-3 py-1 text-[10px] font-mono text-zinc-400 uppercase tracking-widest rounded border border-zinc-800">
            The Real Issue
        </div>
        
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            The problem isn't AI... <br />
            It's all the noise around it.
        </h2>

        <div className="space-y-6 text-lg text-zinc-400 font-medium leading-relaxed">
            <p>
                Accounts on X give you daily news. YouTube shows you every single tool that comes out. Newsletters share every single update.
            </p>
            <p className="text-white">
                Great for awareness. Terrible for implementation.
            </p>
            <p>
                The truth is... you don't need more information.
            </p>
            <p>
                You need filtered intelligence from someone who actually tests this stuff in real business. Not news. Not theory. Not marketing promises.
            </p>
            <p className="text-white text-2xl font-bold border-b border-zinc-800 pb-8">
                But working systems you can deploy this week.
            </p>
        </div>
      </div>

      {/* The Solution */}
      <div className="space-y-12">
         <div className="inline-block bg-zinc-900 px-3 py-1 text-[10px] font-mono text-zinc-400 uppercase tracking-widest rounded border border-zinc-800">
            How To Fix It
        </div>

        <h2 className="text-4xl font-medium tracking-tight text-white text-center">
            What you get
        </h2>
        
        <p className="text-center text-zinc-400 text-xl">
            Every Week: one tested implementation guide. <br />
            Plus the complete toolkit to become an AI operator.
        </p>

      </div>
    </section>
  );
};