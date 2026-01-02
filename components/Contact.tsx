
import React from 'react';
import { Icons, CLINIC_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="pt-28 md:pt-40 pb-20 md:pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="space-y-10 md:space-y-16">
            <div className="space-y-4 md:space-y-8">
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 leading-none">Sig hej <br /><span className="text-teal-600 italic serif">til os.</span></h1>
              <p className="text-lg md:text-2xl text-slate-400 font-light leading-relaxed">
                Vi glæder os til at byde dig velkommen i klinikken på Frederiksberg.
              </p>
            </div>

            <div className="grid gap-8 md:gap-12">
              <a 
                href="https://maps.google.com/?q=Falkoner+Alle+112+Frederiksberg" 
                target="_blank"
                className="flex items-start gap-4 md:gap-8 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 text-teal-600 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-all">
                  <Icons.MapPin />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Adresse</h3>
                  <p className="text-lg md:text-2xl font-bold text-slate-900 leading-snug">{CLINIC_INFO.address}</p>
                  <p className="text-sm md:text-teal-600 font-bold italic">{CLINIC_INFO.locationDetail}</p>
                </div>
              </a>

              <a 
                href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-start gap-4 md:gap-8 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-rose-100 text-rose-600 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-all">
                  <Icons.Phone />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Telefon</h3>
                  <p className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter">{CLINIC_INFO.phone}</p>
                  <p className="text-slate-400 font-bold uppercase text-[9px] tracking-widest">Træffetid kl. 09-10</p>
                </div>
              </a>

              <a 
                href={`mailto:${CLINIC_INFO.email}`}
                className="flex items-start gap-4 md:gap-8 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-100 text-amber-600 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-all">
                  <Icons.MessageCircle />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">E-mail</h3>
                  <p className="text-lg md:text-2xl font-bold text-slate-900">{CLINIC_INFO.email}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] space-y-8 md:space-y-12 shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl font-bold tracking-tighter text-slate-900">Send os en besked</h2>
            <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <input 
                    type="text" 
                    placeholder="DIT NAVN" 
                    className="w-full bg-transparent border-b border-slate-300 py-3 focus:border-teal-600 transition-colors outline-none font-bold text-[10px] tracking-widest uppercase" 
                />
                <input 
                    type="email" 
                    placeholder="DIN E-MAIL" 
                    className="w-full bg-transparent border-b border-slate-300 py-3 focus:border-teal-600 transition-colors outline-none font-bold text-[10px] tracking-widest uppercase" 
                />
                <textarea 
                    rows={3} 
                    placeholder="DIN BESKED" 
                    className="w-full bg-transparent border-b border-slate-300 py-3 focus:border-teal-600 transition-colors outline-none font-bold text-[10px] tracking-widest uppercase resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white py-4 md:py-6 rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-teal-600 transition-all flex items-center justify-center gap-3 active:scale-95">
                Send besked
                <Icons.Send />
              </button>
            </form>
          </div>
        </div>

        {/* Simplified Map Area for Mobile */}
        <div className="mt-20 md:mt-40 relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden h-[300px] md:h-[600px] shadow-2xl group border-4 border-white">
            <img 
                src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=2000&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 md:opacity-40 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100"
                alt="Map View"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-rose-600/10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce">
                    <Icons.MapPin />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
