
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { OfferSection } from './components/OfferSection';
import { ProofSection } from './components/ProofSection';
import { LogicSection } from './components/LogicSection';
import { FoundersSection } from './components/FoundersSection';
import { StepByStep } from './components/StepByStep';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { WhoForSection } from './components/WhoForSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { LeadMagnet } from './components/LeadMagnet';
import { GuidePage } from './components/GuidePage';

const App: React.FC = () => {
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('page') === 'free-guide') {
      setShowLeadMagnet(true);
    }
    if (params.get('page') === 'guide') {
      setShowGuide(true);
    }

    const handleShowMagnet = () => setShowLeadMagnet(true);
    const handleHideMagnet = () => setShowLeadMagnet(false);
    
    const handleShowGuide = () => setShowGuide(true);
    const handleHideGuide = () => setShowGuide(false);

    window.addEventListener('show-lead-magnet', handleShowMagnet);
    window.addEventListener('hide-lead-magnet', handleHideMagnet);
    window.addEventListener('show-guide', handleShowGuide);
    window.addEventListener('hide-guide', handleHideGuide);

    return () => {
      window.removeEventListener('show-lead-magnet', handleShowMagnet);
      window.removeEventListener('hide-lead-magnet', handleHideMagnet);
      window.removeEventListener('show-guide', handleShowGuide);
      window.removeEventListener('hide-guide', handleHideGuide);
    };
  }, []);

  if (showGuide) {
    return <GuidePage />;
  }

  if (showLeadMagnet) {
    return <LeadMagnet />;
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-[#b0ff3e] selection:text-black">
      
      <Hero />
      
      <main className="pb-12 md:pb-24">
        {/* The Problem Narrative */}
        <LogicSection />

        {/* The Solution / Mechanism */}
        <StepByStep />
        
        {/* Social Proof */}
        <div className="py-12">
            <ProofSection />
        </div>

        {/* Who it is for */}
        <WhoForSection />

        {/* The Offer */}
        <OfferSection />

        {/* Authority */}
        <div className="max-w-4xl mx-auto px-4 mb-24">
             <FoundersSection />
        </div>
        
        <GuaranteeSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
