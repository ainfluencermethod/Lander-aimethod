
import React from 'react';

export const Footer: React.FC = () => {
  const handleFreeGuideClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('show-lead-magnet'));
    try {
      window.history.pushState({}, '', '?page=free-guide');
    } catch (err) {
      console.warn('Navigation state update failed (sandbox):', err);
    }
  };

  const handleManualClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('show-guide'));
    try {
      window.history.pushState({}, '', '?page=guide');
    } catch (err) {
      console.warn('Navigation state update failed (sandbox):', err);
    }
  };

  return (
    <footer className="py-12 px-4 border-t border-zinc-900 text-center space-y-4">
      <div className="text-lg font-black tracking-tighter">AI <span className="text-[#b0ff3e]">Influencer</span> Method</div>
      <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
        <a href="?page=guide" onClick={handleManualClick} className="hover:text-white transition-colors">Read The Manual</a>
        <a href="?page=free-guide" onClick={handleFreeGuideClick} className="hover:text-[#b0ff3e] transition-colors">Free Quiz</a>
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
        <a href="#" className="hover:text-white transition-colors">Contact Support</a>
      </div>
      <p className="text-zinc-700 text-[9px] max-w-lg mx-auto leading-relaxed">
        DISCLAIMER: This site is not a part of the TikTok or Facebook website. Results are not typical. We do not guarantee you will earn any money. Your success depends on your effort and market conditions.
      </p>
      <div className="text-zinc-800 text-[10px] pt-4">© 2026 AI Influencer Method. All rights reserved.</div>
    </footer>
  );
};
