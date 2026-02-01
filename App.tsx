
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KittenCard from './components/KittenCard';
import AIConsultant from './components/AIConsultant';
import { KITTENS, REVIEWS } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#A68B6D] selection:text-white">
      <Header />
      
      <main>
        <Hero />

        {/* Brand Ethos - Why It Matters (The "Interest" Phase) */}
        <section id="about" className="py-60 bg-white">
          <div className="max-w-[1440px] mx-auto px-10">
            <div className="grid lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-5 reveal-on-scroll">
                <div className="aspect-[3/4] overflow-hidden bg-slate-50 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&q=95&w=1000" 
                    alt="Heritage" 
                    className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 border-[30px] border-white/40 pointer-events-none"></div>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-16 reveal-on-scroll">
                <div className="space-y-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#A68B6D]">Our Philosophy</span>
                  <h2 className="text-6xl lg:text-7xl font-serif italic text-[#121212] leading-tight">
                    Breeding is a <br/>
                    <span className="not-italic font-bold">Silent Art Form.</span>
                  </h2>
                </div>
                
                <p className="text-2xl text-slate-500 font-light leading-relaxed max-w-2xl">
                  We don't believe in quantity. Arlen Cat is a private boutique cattery where every pairing is mathematically and emotionally considered. Our goal is to preserve the "owl-like" perfection of the Fold without compromising a single breath of health.
                </p>

                <div className="grid md:grid-cols-2 gap-16 pt-8">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#121212]">WCF Registered</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">International pedigree validation and strict adherence to breed standards.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#121212]">Genetic Purity</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">Mandatory PKD, HCM, and FIV/FeLV testing for all breeding pairs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Gallery - The "Desire" Phase */}
        <section id="kittens" className="py-40 border-t border-slate-100 bg-[#FDFCFB]">
          <div className="max-w-[1440px] mx-auto px-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 reveal-on-scroll">
              <div className="space-y-6">
                <h2 className="text-7xl font-serif text-[#121212]">The Collection</h2>
                <p className="text-slate-400 text-[11px] font-bold tracking-[0.4em] uppercase">Limited Litters Available</p>
              </div>
              <div className="flex gap-16 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                <button className="text-[#121212] border-b-2 border-[#121212] pb-3 transition-all">All</button>
                <button className="hover:text-[#121212] pb-3 transition-all">Fold</button>
                <button className="hover:text-[#121212] pb-3 transition-all">Straight</button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-32">
              {KITTENS.map(kitten => (
                <KittenCard key={kitten.id} kitten={kitten} />
              ))}
            </div>

            <div className="mt-60 p-24 bg-[#121212] text-white text-center space-y-12 reveal-on-scroll">
              <h3 className="text-5xl lg:text-6xl font-serif italic">Seeking something specific?</h3>
              <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
                Our future litters are often reserved before birth. Join our private registry for priority selection.
              </p>
              <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4 pt-6">
                <input type="email" placeholder="Your Email" className="flex-grow bg-white/5 border border-white/10 px-8 py-5 text-sm font-light focus:outline-none focus:border-white/30 transition-all" />
                <button className="bg-white text-black px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#A68B6D] hover:text-white transition-all">Join</button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Authority and Social Proof */}
        <section id="reviews" className="py-60 bg-white">
          <div className="max-w-[1440px] mx-auto px-10">
            <div className="text-center mb-40 reveal-on-scroll">
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#A68B6D] block mb-8">Journal</span>
              <h2 className="text-7xl font-serif text-[#121212]">From New Families</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-20">
              {REVIEWS.map((review, i) => (
                <div key={review.id} className={`space-y-10 reveal-on-scroll ${i % 2 !== 0 ? 'lg:pt-32' : ''}`}>
                  <div className="text-4xl text-[#A68B6D] font-serif">“</div>
                  <p className="text-3xl font-light text-slate-600 leading-relaxed italic">
                    {review.text}
                  </p>
                  <div className="flex items-center space-x-6 pt-10 border-t border-slate-100">
                    <div className="w-16 h-[1px] bg-[#A68B6D]"></div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">{review.author}</p>
                      <p className="text-[9px] uppercase tracking-widest text-slate-400 mt-1">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Action Phase - Application Inquiry */}
        <section id="contact" className="py-60 bg-[#FDFCFB] border-t border-slate-100">
          <div className="max-w-[1200px] mx-auto px-10">
             <div className="grid lg:grid-cols-12 gap-32">
               <div className="lg:col-span-5 space-y-16 reveal-on-scroll">
                 <div className="space-y-8">
                   <h2 className="text-7xl font-serif leading-tight text-[#121212]">Inquire.</h2>
                   <p className="text-xl text-slate-500 font-light leading-relaxed">
                     Adopting from Arlen Cat is a bespoke process. We select families that understand the luxury and responsibility of the breed.
                   </p>
                 </div>
                 
                 <div className="space-y-10 pt-10">
                   <div className="space-y-2">
                     <p className="text-[9px] uppercase font-bold tracking-[0.4em] text-slate-400">Digital Atelier</p>
                     <p className="text-lg font-light">hello@arlen-cat.com</p>
                   </div>
                   <div className="space-y-2">
                     <p className="text-[9px] uppercase font-bold tracking-[0.4em] text-slate-400">Direct Concierge</p>
                     <p className="text-lg font-light">+380 95 123 45 67</p>
                   </div>
                   <div className="flex gap-8 pt-6">
                      {['Instagram', 'Facebook', 'Viber'].map(s => (
                        <a key={s} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A68B6D] hover:text-black transition-colors">{s}</a>
                      ))}
                   </div>
                 </div>
               </div>

               <div className="lg:col-span-7 reveal-on-scroll">
                 <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                    <div className="group border-b border-slate-200 focus-within:border-[#A68B6D] transition-all py-4">
                      <input type="text" placeholder="Full Name" className="w-full bg-transparent text-lg font-light focus:outline-none placeholder:text-slate-300" />
                    </div>
                    <div className="group border-b border-slate-200 focus-within:border-[#A68B6D] transition-all py-4">
                      <input type="email" placeholder="Email Address" className="w-full bg-transparent text-lg font-light focus:outline-none placeholder:text-slate-300" />
                    </div>
                    <div className="group border-b border-slate-200 focus-within:border-[#A68B6D] transition-all py-4">
                      <select className="w-full bg-transparent text-lg font-light focus:outline-none text-slate-400">
                        <option>Interested in Archibald</option>
                        <option>Interested in Seraphina</option>
                        <option>General Interest / Waitlist</option>
                      </select>
                    </div>
                    <div className="group border-b border-slate-200 focus-within:border-[#A68B6D] transition-all py-4">
                      <textarea rows={2} placeholder="Share a brief description of your living environment" className="w-full bg-transparent text-lg font-light focus:outline-none resize-none placeholder:text-slate-300"></textarea>
                    </div>
                    <button className="w-full py-8 bg-[#121212] text-white text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-[#A68B6D] transition-all duration-700 shadow-2xl">
                      Send Application
                    </button>
                 </form>
               </div>
             </div>
          </div>
        </section>
      </main>

      {/* Understated Footer */}
      <footer className="bg-white border-t border-slate-100 py-32 px-10">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
          <div className="text-center md:text-left">
            <span className="text-2xl font-serif font-bold text-[#121212]">Arlen Cat</span>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#A68B6D] mt-2">Elite Scottish Cattery • Kyiv</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#about" className="hover:text-black transition-colors">Philosophy</a>
            <a href="#kittens" className="hover:text-black transition-colors">Collection</a>
            <a href="#reviews" className="hover:text-black transition-colors">Journal</a>
            <a href="#" className="hover:text-black transition-colors">Legal</a>
          </nav>

          <p className="text-[9px] uppercase tracking-[0.3em] text-slate-300">
            © {new Date().getFullYear()} Arlen Cat.
          </p>
        </div>
      </footer>

      <AIConsultant />
    </div>
  );
};

export default App;
