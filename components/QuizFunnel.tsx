
import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Lock, ChevronRight, Loader2, Calculator } from 'lucide-react';

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
             <Calculator className="text-[#b0ff