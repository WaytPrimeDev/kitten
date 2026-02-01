
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FDFCFB] overflow-hidden pt-20">
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div className="relative h-full w-full">
           <img 
            src="https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=95&w=1400" 
            alt="Scottish Fold Excellence" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCFB] via-transparent to-transparent"></div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-10 w-full relative z-10">
        <div className="max-w-2xl space-y-10">
          <div className="space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#A68B6D]">Kyiv • International Delivery</span>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif leading-[0.85] text-[#121212]">
              The Soul of <br/>
              <span className="italic font-normal">Scottish</span> <br/>
              Grace.
            </h1>
          </div>
          
          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-lg">
            Preserving the rare genetic heritage of the Scottish Fold and Straight. Raised for health, bred for character, chosen for love.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a href="#kittens" className="px-12 py-6 bg-[#121212] text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#A68B6D] transition-all duration-700 shadow-2xl">
              Acquire a Companion
            </a>
            <a href="#about" className="group flex items-center space-x-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#121212]">
              <span>Our Philosophy</span>
              <div className="w-8 h-[1px] bg-[#121212] group-hover:w-16 transition-all duration-500"></div>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-12 pt-16 border-t border-slate-100">
            <div>
              <p className="text-2xl font-serif italic">WCF</p>
              <p className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mt-1">Certified Elite</p>
            </div>
            <div>
              <p className="text-2xl font-serif italic">12y+</p>
              <p className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mt-1">Breeding History</p>
            </div>
            <div>
              <p className="text-2xl font-serif italic">50+</p>
              <p className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mt-1">Global Destinations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
