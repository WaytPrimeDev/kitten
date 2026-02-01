
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-6 border-b border-slate-100' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1440px] mx-auto px-10 flex justify-between items-center">
        <div className="flex flex-col cursor-pointer group">
          <span className="text-2xl font-serif font-bold tracking-tighter text-[#121212]">Arlen Cat</span>
        </div>
        
        <nav className="hidden lg:flex space-x-16 items-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
          <a href="#about" className="hover:text-black transition-colors">Philosophy</a>
          <a href="#kittens" className="hover:text-black transition-colors">Collection</a>
          <a href="#reviews" className="hover:text-black transition-colors">Journal</a>
          <a href="#contact" className="hover:text-black transition-colors">Inquiry</a>
        </nav>

        <div className="flex items-center space-x-10">
          <a href="#contact" className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.2em] bg-[#121212] text-white px-8 py-3 hover:bg-[#A68B6D] transition-all shadow-xl">
            Reserved List
          </a>
          <button className="lg:hidden text-black">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeWidth="1"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
