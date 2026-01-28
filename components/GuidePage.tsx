
import React, { useState } from 'react';
import { ArrowLeft, Zap, Target, Video, Instagram, DollarSign, Lock, ArrowRight, CheckCircle2, X, Check } from 'lucide-react';

export const GuidePage: React.FC = () => {
  const communityLink = "https://whop.com/checkout/plan_GuUsHdQ2URrN7/";
  const freeTrialLink = "https://whop.com/checkout/plan_20OUDZF1ykcci";
  
  const [showTrialModal, setShowTrialModal] = useState(false);

  const handleReturn = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.dispatchEvent(new Event('hide-guide'));
    try {
      const url = window.location.pathname;
      window.history.pushState({}, '', url);
    } catch (err) {
      console.warn('Navigation state update failed (sandbox):', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-[#b0ff3e] selection:text-black pb-24 relative">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-[#09090b]/80 backdrop-blur border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
           <button 
             onClick={handleReturn}
             className="text-zinc-400 hover:text-white flex items-center gap-2 text-sm font-bold transition-colors"
           >
             <ArrowLeft size={16} /> Back
           </button>
           <div className="text-xs font-black uppercase tracking-widest text-zinc-500">
             The Viral AI Method
           </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-16">
        
        {/* Title Section */}
        <header className="space-y-6 text-center border-b border-zinc-800 pb-12">
           <div className="inline-flex items-center gap-2 bg-[#b0ff3e]/10 border border-[#b0ff3e]/20 px-3 py-1 rounded-full text-[#b0ff3e] text-[10px] font-black uppercase tracking-widest">
              <Zap size={12} fill="currentColor" /> Official Guide
           </div>
           <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[1.1]">
             Make Money With <br />
             <span className="text-[#b0ff3e]">AI Influencers</span>
           </h1>
           <div className="w-full h-auto bg-zinc-800 rounded-2xl overflow-hidden relative border border-zinc-700">
                <img 
                    src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/697a44131927c8d10b45b02d.webp" 
                    alt="AI Influencer on bed" 
                    className="w-full h-full object-cover opacity-80"
                />
           </div>
        </header>

        {/* Video Section */}
        <section className="space-y-4">
            <h2 className="text-2xl font-black text-white text-center">Watch The Full Breakdown</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden aspect-video relative shadow-2xl">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/ysqMRfauC6U?si=1LirFK4uqRdixEvS" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                ></iframe>
            </div>
        </section>

        {/* 1. Core Concept */}
        <section className="space-y-6">
            <h2 className="text-2xl font-black text-white flex items-center gap-3">
                <span className="bg-zinc-800 w-8 h-8 rounded-lg flex items-center justify-center text-sm text-zinc-400">1</span>
                Core Concept: "The Ultimate AI Influencer Builder"
            </h2>
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 text-zinc-300 leading-relaxed">
                <p>
                    The Higgsfield AI Influencer Studio is designed to bypass the traditional "prompt-heavy" approach of tools like Midjourney or Stable Diffusion. Instead of writing complex descriptions, users build a character through a <strong>parameter-based UI</strong> (similar to a video game character creator), ensuring visual consistency—a major hurdle in AI video.
                </p>
            </div>
        </section>

        {/* 2. Workflow */}
        <section className="space-y-8">
            <h2 className="text-2xl font-black text-white flex items-center gap-3">
                <span className="bg-zinc-800 w-8 h-8 rounded-lg flex items-center justify-center text-sm text-zinc-400">2</span>
                The Step-by-Step Workflow
            </h2>

            {/* Phase 1 */}
            <div className="pl-4 border-l-2 border-zinc-800 space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Target size={20} className="text-[#b0ff3e]" />
                    Phase 1: Character Creation (Zero Prompting)
                </h3>
                <ul className="space-y-4 text-zinc-400 list-disc pl-5">
                    <li>
                        <strong className="text-white">Character Type:</strong> You can choose from standard humans to exotic creatures (Ants, Lizards, Aliens, Elves).
                    </li>
                    <li>
                        <strong className="text-white">Identity Configuration:</strong> Full control over gender, ethnicity (blending origins like "Asian + Alien"), and age (from Adult to Ageless).
                    </li>
                    <li>
                        <strong className="text-white">Detail Control:</strong> High-level customization for:
                        <ul className="list-[circle] pl-5 mt-2 space-y-2">
                            <li><strong>Eyes:</strong> Individual eye colors, types (reptilian, mechanical), and glowing effects.</li>
                            <li><strong>Skin:</strong> Textures like vitiligo, scars, burns, scales, or metallic surfaces.</li>
                            <li><strong>Face/Body:</strong> Adjusting face shape, teeth, horns, height, and extra limbs.</li>
                        </ul>
                    </li>
                    <li>
                        <strong className="text-white">Consistency:</strong> The system generates a <strong>SoulID</strong>, which locks the character's facial structure so they look the same in every future video.
                    </li>
                </ul>
            </div>

            {/* Phase 2 */}
            <div className="pl-4 border-l-2 border-zinc-800 space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Video size={20} className="text-[#b0ff3e]" />
                    Phase 2: Video Generation & Motion
                </h3>
                <ul className="space-y-4 text-zinc-400 list-disc pl-5">
                    <li>
                        <strong className="text-white">Motion Control:</strong> Instead of hoping the AI understands "walking," you use <strong>Viral Motion Presets</strong>. These are pre-animated movements designed for short-form content (TikTok/Reels).
                    </li>
                    <li>
                        <strong className="text-white">Model Selection:</strong> The studio integrates multiple state-of-the-art models including <strong>Sora 2, Kling 2.6, and Google Veo 3</strong>.
                    </li>
                    <li>
                        <strong className="text-white">Technical Polishing:</strong> 
                        <ul className="list-[circle] pl-5 mt-2 space-y-2">
                            <li><strong>Sora 2 Enhancer:</strong> Used to remove flickers and exposure drift.</li>
                            <li><strong>Higgsfield Upscale:</strong> Brings the video to 4K quality for a professional look.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>

        {/* 3. Optimization */}
        <section className="space-y-6">
            <h2 className="text-2xl font-black text-white flex items-center gap-3">
                <span className="bg-zinc-800 w-8 h-8 rounded-lg flex items-center justify-center text-sm text-zinc-400">3</span>
                Instagram-Specific Optimization
            </h2>
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50">
                <p className="text-zinc-300 mb-4">The workflow is tailored specifically for <strong>IG Reels</strong> and <strong>YouTube Shorts</strong>:</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-black/40 p-4 rounded-xl border border-zinc-800">
                        <Instagram size={20} className="text-rose-500 mb-2" />
                        <h4 className="font-bold text-white mb-1">Aspect Ratio</h4>
                        <p className="text-zinc-500 text-sm">Preset to 9:16 vertical format.</p>
                    </div>
                    <div className="bg-black/40 p-4 rounded-xl border border-zinc-800">
                        <Zap size={20} className="text-yellow-500 mb-2" />
                        <h4 className="font-bold text-white mb-1">Hook-Driven Content</h4>
                        <p className="text-zinc-500 text-sm">Encourages "unusual" characters (like an octopus influencer) because "freaky" or extraordinary characters historically gain more traction on IG’s algorithm.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. Monetization 1 */}
        <section className="space-y-6">
            <h2 className="text-2xl font-black text-white flex items-center gap-3">
                <span className="bg-zinc-800 w-8 h-8 rounded-lg flex items-center justify-center text-sm text-zinc-400">4</span>
                Monetization (Higgsfield Earn)
            </h2>
            <div className="space-y-4 text-zinc-300">
                <p>This is the final stage of the workflow. Unlike other tools, Higgsfield has a built-in payout system:</p>
                <ol className="list-decimal pl-5 space-y-3 marker:text-[#b0ff3e] marker:font-bold">
                    <li><strong className="text-white">Verification:</strong> You link your IG account by putting a unique code in your bio.</li>
                    <li><strong className="text-white">Attribution:</strong> You must include "Powered by @higgsfield.ai" in your bio.</li>
                    <li><strong className="text-white">Campaigns:</strong> You join active "Earning Campaigns" within the studio.</li>
                    <li><strong className="text-white">Submission:</strong> Post your Reel (minimum 30 seconds, usually with a voiceover), paste the link back into the Higgsfield dashboard, and get paid based on views and engagement.</li>
                </ol>
            </div>
        </section>

        {/* 5. Monetization 2 */}
        <section className="space-y-6">
            <h2 className="text-2xl font-black text-white flex items-center gap-3">
                <span className="bg-zinc-800 w-8 h-8 rounded-lg flex items-center justify-center text-sm text-zinc-400">5</span>
                Monetization P2 (Fanvue)
            </h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <p className="text-zinc-300 mb-4">You can drive traffic to OnlyFans alternative, and sell exclusive content of your AI model.</p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                        <DollarSign size={16} className="text-green-500" />
                        <span className="text-zinc-300"><strong>Fanvue:</strong> Create your Fanvue account.</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-blue-500" />
                        <span className="text-zinc-300"><strong>Verification:</strong> Verify your AI model with your real documents.</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Lock size={16} className="text-rose-500" />
                        <span className="text-zinc-300"><strong>NSFW:</strong> Sell AI influencer exclusive content with subscriptions and custom messages.</span>
                    </li>
                </ul>
            </div>
        </section>

        {/* Promo Box */}
        <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-3xl p-8 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
                <h3 className="text-2xl font-black italic text-white mb-2">JOIN OUR LIVE PROMPTING CALLS</h3>
                <p className="text-indigo-300 font-bold text-sm uppercase tracking-widest mb-6">Every Tuesday & Thursday</p>
                
                <div className="space-y-3 text-left max-w-lg mx-auto mb-8">
                    <div className="flex items-start gap-3 bg-black/20 p-3 rounded-lg border border-white/5">
                         <div className="mt-1"><Zap size={14} className="text-yellow-400" /></div>
                         <p className="text-sm text-zinc-300">Learn how we grew our AI model @giualiaa.banks to <strong>200 Million views</strong> and 156k followers in just 14 days.</p>
                    </div>
                    <div className="flex items-start gap-3 bg-black/20 p-3 rounded-lg border border-white/5">
                         <div className="mt-1"><DollarSign size={14} className="text-green-400" /></div>
                         <p className="text-sm text-zinc-300">Learn how we made almost <strong>1 Million dollars</strong> in just 6 months starting AI content.</p>
                    </div>
                    <div className="flex items-start gap-3 bg-black/20 p-3 rounded-lg border border-white/5">
                         <div className="mt-1"><Target size={14} className="text-blue-400" /></div>
                         <p className="text-sm text-zinc-300">Learn how we're positioning ourselves for this new era of virtual creators</p>
                    </div>
                </div>

                <div className="text-left max-w-lg mx-auto mt-6">
                    <p className="text-zinc-400 text-xs mb-2">How our Live calls look:</p>
                    <div className="aspect-video bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden relative group">
                        <img 
                            src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/697a0c6d1d09826d717e246d.png" 
                            alt="Zoom Call Screenshot" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white">Live Prompting</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-12 text-center space-y-8">
             <div className="w-16 h-1 bg-zinc-800 mx-auto rounded-full"></div>
             
             <div className="space-y-4">
                 <h2 className="text-3xl font-black text-white">Ready to start?</h2>
                 <p className="text-zinc-400 max-w-md mx-auto">
                     Join the community and start building your viral AI influencer today.
                 </p>
             </div>

             <button 
                onClick={() => setShowTrialModal(true)}
                className="bg-[#b0ff3e] hover:bg-[#9de635] text-black font-black text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(176,255,62,0.3)] inline-flex items-center gap-2 mx-auto"
             >
                Join The Community <ArrowRight size={20} />
             </button>
        </div>

      </div>

      {/* FREE TRIAL MODAL */}
      {showTrialModal && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
           <div 
             className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full relative shadow-2xl overflow-hidden"
             onClick={(e) => e.stopPropagation()}
           >
              {/* Close Button */}
              <button 
                onClick={() => setShowTrialModal(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="p-8 space-y-6">
                 {/* Header */}
                 <div className="space-y-2 text-center">
                    <div className="inline-flex items-center gap-1.5 bg-[#b0ff3e]/10 border border-[#b0ff3e]/20 px-3 py-1 rounded-full mb-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b0ff3e] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b0ff3e]"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#b0ff3e]">Limited Offer</span>
                    </div>
                    <h2 className="text-3xl font-black text-white tracking-tight">Start Your <br /><span className="text-[#b0ff3e]">1-Day Free Trial</span></h2>
                    <p className="text-zinc-400 text-sm">Experience the full AI Blueprint community completely risk-free for 24 hours.</p>
                 </div>

                 {/* Benefits */}
                 <div className="space-y-4 bg-black/30 p-4 rounded-xl border border-white/5">
                    {[
                        "Full Access to the 72-Hour Accelerator",
                        "Join Live Prompting Calls (Tues & Thurs)",
                        "Copy-Paste Viral AI Workflows",
                        "Private Network of 1,200+ Builders"
                    ].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="bg-[#b0ff3e] p-0.5 rounded-full shrink-0">
                                <Check size={12} className="text-black stroke-[3]" />
                            </div>
                            <span className="text-sm font-medium text-zinc-200">{benefit}</span>
                        </div>
                    ))}
                 </div>

                 {/* CTA */}
                 <div className="space-y-3">
                    <a 
                        href={freeTrialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-[#b0ff3e] hover:bg-[#9de635] text-black font-black text-center py-4 rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(176,255,62,0.3)] flex items-center justify-center gap-2 group"
                    >
                        Claim 24-Hour Free Access
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-center text-[10px] text-zinc-500 uppercase tracking-wider font-medium">
                        Cancel anytime with 1 click
                    </p>
                 </div>
              </div>
           </div>
        </div>
      )}

    </div>
  );
};
