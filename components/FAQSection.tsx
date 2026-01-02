
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-900 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-lg font-bold tracking-tight transition-colors ${isOpen ? 'text-[#b0ff3e]' : 'text-zinc-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-0'}`}>
          {isOpen ? (
            <Minus size={20} className="text-[#b0ff3e]" />
          ) : (
            <Plus size={20} className="text-zinc-600 group-hover:text-zinc-400" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-zinc-500 font-medium leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Do I really not need to show my face?",
      answer: "Correct. The entire method is built around owning a digital asset. You find viral content and use our proprietary AI workflow to recreate it with a consistent AI character. You remain completely anonymous."
    },
    {
      question: "Is this saturated?",
      answer: "The attention economy is growing, but the supply of high-quality AI influencers is still tiny. While most people are trying to learn prompts, we provide you with a full business infrastructure that handles growth and monetization."
    },
    {
      question: "How much money do I need to start?",
      answer: "Aside from the initial $97 for the blueprint, you can start with $0. We show you free AI tools to begin with. As you scale, you might want to invest in paid software for better quality, but it's not required on day one."
    },
    {
      question: "How long until I see results?",
      answer: "Most students who follow the '72-Hour Launch Accelerator' have their first account live and posting within 3 days. Viral success varies, but our strategy is designed to bypass the '200-view jail' instantly."
    },
    {
      question: "Do I need a high-end computer?",
      answer: "No. All the AI tools we recommend are cloud-based. If you can watch a YouTube video on your laptop or phone, you have enough power to build a viral AI influencer."
    },
    {
      question: "What if I have zero tech skills?",
      answer: "This is a 'copy-paste' protocol. We don't just tell you what to do; we show you the exact settings, buttons to click, and workflows to follow. If you can follow a recipe, you can do this."
    }
  ];

  return (
    <section className="space-y-12 max-w-3xl mx-auto px-4">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-zinc-500 text-[10px] font-black uppercase tracking-widest">
           <span className="text-rose-600 animate-pulse">●</span> Got Questions?
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic text-white">
          FREQUENTLY ASKED <span className="text-[#b0ff3e]">QUESTIONS</span>
        </h2>
      </div>

      <div className="bg-zinc-950/50 border border-zinc-900 rounded-[32px] p-6 md:p-10">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="text-center">
        <p className="text-zinc-500 text-sm font-medium">
          Still have questions? <a href="#" className="text-white underline decoration-[#b0ff3e]">Contact our 24/7 Support Team</a>
        </p>
      </div>
    </section>
  );
};
