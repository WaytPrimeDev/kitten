
import React from 'react';
import { Kitten } from '../types';

interface KittenCardProps {
  kitten: Kitten & { traits: string[], character: string };
}

const KittenCard: React.FC<KittenCardProps> = ({ kitten }) => {
  return (
    <div className="group space-y-8 reveal-on-scroll">
      <div className="relative aspect-[4/5] bg-[#F2F0ED] overflow-hidden">
        <img 
          src={kitten.image} 
          alt={kitten.name} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/20 to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
           <div className="flex gap-2">
              {kitten.traits.slice(0, 2).map(trait => (
                <span key={trait} className="px-3 py-1 bg-white/90 text-[9px] font-bold uppercase tracking-widest text-black">
                  {trait}
                </span>
              ))}
           </div>
        </div>
        {kitten.status !== 'Available' && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-black border border-black/20 px-6 py-3">
              Reserved
            </span>
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-3xl font-serif italic text-[#121212]">{kitten.name}</h3>
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#A68B6D]">{kitten.breed}</p>
          </div>
          <p className="text-xl font-light text-slate-900">{kitten.price}</p>
        </div>
        
        <p className="text-sm text-slate-500 font-light leading-relaxed">
          {kitten.description}
        </p>

        <div className="pt-4">
          <button 
            disabled={kitten.status !== 'Available'}
            className={`w-full py-5 text-[10px] font-bold uppercase tracking-[0.3em] border transition-all duration-700 ${
              kitten.status === 'Available' 
              ? 'bg-[#121212] text-white border-transparent hover:bg-transparent hover:text-[#121212] hover:border-[#121212]' 
              : 'border-slate-200 text-slate-300 cursor-not-allowed'
            }`}
          >
            {kitten.status === 'Available' ? 'Inquire About Adoption' : 'Join Next Litter'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default KittenCard;
