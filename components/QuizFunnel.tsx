import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, ChevronRight, Loader2, Calculator, ArrowLeft } from 'lucide-react';

interface QuizProps {
  onComplete: (email: string) => void;
  onBack: () => void;
}

const QUESTIONS = [
  {
    id: 1,
    question: "What is your primary financial goal with AI?",
    options: [
      { id: 'side_hustle', text: "Generate Side Cash ($1k-$3k/mo)", icon: "💸" },
      { id: 'replace_job', text: "Replace My 9-5 ($5k-$8k/mo)", icon: "👔" },
      { id: 'empire', text: "Build a Media Empire ($10k+/mo)", icon: "🏰" }
    ]
  },
  {
    id: 2,
    question: "Which content style appeals to you most?",
    options: [
      { id: 'realistic', text: "Hyper-Realistic Human (Sora/Flux)", icon: "👩" },
      { id: 'stylized', text: "Stylized / Anime (Midjourney Niji)", icon: "🎨" },
      { id: 'mascot', text: "Non-Human Mascot (Alien/Robot)", icon: "👾" }
    ]
  },
  {
    id: 3,
    question: "What is your current experience with AI Video?",
    options: [
      { id: 'beginner', text: "None - I'm a complete beginner", icon: "🌱" },
      { id: 'intermediate', text: "I've used ChatGPT or Midjourney", icon: "🧑‍💻" },
      { id: 'expert', text: "I'm already posting AI content", icon: "🤖" }
    ]
  },
  {
    id: 4,
    question: "How much time can you dedicate daily?",
    options: [
      { id: 'low', text: "30-60 Minutes (Speed Workflow)", icon: "⚡️" },
      { id: 'medium', text: "1-2 Hours (Growth Mode)", icon: "📈" },
      { id: 'high', text: "Full Time (All In)", icon: "🔥" }
    ]
  },
  {
    id: 5,
    question: "What is your preferred monetization path?",
    options: [
      { id: 'fanvue', text: "Exclusive Content (Fanvue/Subs)", icon: "🔒" },
      { id: 'brand_deals', text: "Brand Sponsorships", icon: "🤝" },
      { id: 'digital_products', text: "Selling Digital Products", icon: "📦" }
    ]
  },
  {
    id: 6,
    question: "Which platform do you consume the most?",
    options: [
      { id: 'tiktok', text: "TikTok (Fast Pace)", icon: "🎵" },
      { id: 'instagram', text: "Instagram (Aesthetic)", icon: "📸" },
      { id: 'youtube', text: "YouTube Shorts (Search)", icon: "▶️" }
    ]
  },
  {
    id: 7,
    question: "What is your biggest fear starting out?",
    options: [
      { id: 'tech', text: "The tech is too complicated", icon: "⚙️" },
      { id: 'face', text: "Accidentally showing my face", icon: "🎭" },
      { id: 'saturation', text: "It's too saturated", icon: "📉" }
    ]
  },
  {
    id: 8,
    question: "Do you have a powerful PC?",
    options: [
      { id: 'no_pc', text: "No, I only have a Phone/Laptop", icon: "📱" },
      { id: 'gaming_pc', text: "Yes, I have a dedicated GPU", icon: "💻" }
    ]
  },
  {
    id: 9,
    question: "How fast do you want to launch?",
    options: [
      { id: 'slow', text: "Slowly over the next month", icon: "🐢" },
      { id: 'fast', text: "ASAP (Within 72 Hours)", icon: "🚀" }
    ]
  },
  {
    id: 10,
    question: "Are you willing to invest in your growth?",
    options: [
      { id: 'free', text: "I only want free tools", icon: "🆓" },
      { id: 'invest', text: "I'm willing to invest for speed", icon: "💎" }
    ]
  }
];

export const QuizFunnel: React.FC<QuizProps> = ({ onComplete, onBack }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Analyzing animation sequence (The "Bridge")
  useEffect(() => {
    if (isAnalyzing) {
      const timers = [
        setTimeout(() => setAnalysisStep(1), 1200),
        setTimeout(() => setAnalysisStep(2), 2400),
        setTimeout(() => setAnalysisStep(3), 3600), // Finished
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [isAnalyzing]);

  const handleOptionClick = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [step]: optionId }));
    
    if (step < QUESTIONS.length - 1) {
      setStep(prev => prev + 1);
    } else {
      setIsAnalyzing(true);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      onComplete(email);
    }, 1500);
  };

  // 1. ANALYSIS / LOADING SCREEN
  if (isAnalyzing && analysisStep < 3) {
    return (
      <div className="fixed inset-0 z-50 bg-[#09090b] flex flex-col items-center justify-center p-6 space-y-8 animate-fade-in">
        <div className="relative w-24 h-24">
           <div className="absolute inset-0 border-4 border-zinc-800 rounded-full"></div>
           <div className="absolute inset-0 border-4 border-[#b0ff3e] rounded-full border-t-transparent animate-spin"></div>
           <div className="absolute inset-0 flex items-center justify-center">
             <Calculator className="text-[#b0ff3e]" size={32} />
           </div>
        </div>
        <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-white italic tracking-tighter">
                {analysisStep === 0 && "ANALYZING YOUR ANSWERS..."}
                {analysisStep === 1 && "CALCULATING EARNING POTENTIAL..."}
                {analysisStep === 2 && "GENERATING CUSTOM BLUEPRINT..."}
            </h3>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                PLEASE WAIT
            </p>
        </div>
      </div>
    );
  }

  // 2. EMAIL OPTIN
  if (isAnalyzing && analysisStep >= 3) {
      return (
          <div className="fixed inset-0 z-50 bg-[#09090b] flex items-center justify-center p-4 animate-fade-in">
              <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#b0ff3e]"></div>
                  
                  <div className="text-center space-y-6 mb-8">
                      <div className="inline-flex items-center gap-2 bg-[#b0ff3e]/10 text-[#b0ff3e] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#b0ff3e]/20">
                          <Check size={12} strokeWidth={3} /> Analysis Complete
                      </div>
                      <h2 className="text-3xl font-black text-white tracking-tighter">Your AI Blueprint <br />Is Ready</h2>
                      <p className="text-zinc-400">Enter your email below to receive your personalized roadmap and 1-day free access.</p>
                  </div>

                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <input 
                        type="email" 
                        required
                        placeholder="Enter your best email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black border border-zinc-800 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-[#b0ff3e] transition-colors"
                      />
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#b0ff3e] hover:bg-[#9de635] text-black font-black text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                      >
                          {isSubmitting ? <Loader2 className="animate-spin" /> : <>Access My Blueprint <ArrowRight size={20} /></>}
                      </button>
                  </form>
                  <button onClick={onBack} className="w-full text-center text-zinc-600 text-xs font-bold uppercase tracking-widest mt-6 hover:text-zinc-400">Start Over</button>
              </div>
          </div>
      )
  }

  // 3. QUIZ QUESTIONS
  const currentQ = QUESTIONS[step];

  return (
    <div className="fixed inset-0 z-40 bg-[#09090b] flex flex-col">
       {/* Progress Bar */}
       <div className="h-1 bg-zinc-900 w-full">
          <div 
            className="h-full bg-[#b0ff3e] transition-all duration-500 ease-out"
            style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
          ></div>
       </div>

       {/* Header */}
       <div className="p-6 flex justify-between items-center">
          <button onClick={onBack} className="text-zinc-500 hover:text-white flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              <ArrowLeft size={14} /> Back
          </button>
          <div className="text-zinc-600 text-xs font-black uppercase tracking-widest">
              Question {step + 1}/{QUESTIONS.length}
          </div>
       </div>

       {/* Question Area */}
       <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full px-6 pb-24">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-12 text-center leading-tight">
              {currentQ.question}
          </h2>

          <div className="grid gap-4">
              {currentQ.options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionClick(opt.id)}
                    className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 p-6 rounded-2xl flex items-center gap-6 group transition-all text-left"
                  >
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{opt.icon}</span>
                      <span className="text-xl font-bold text-zinc-200 group-hover:text-white">{opt.text}</span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronRight className="text-[#b0ff3e]" />
                      </div>
                  </button>
              ))}
          </div>
       </div>
    </div>
  );
};
