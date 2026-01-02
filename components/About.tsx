
import React from 'react';
import { Icons, CLINIC_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="om-klinikken" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-teal-600">Om Lisbeth Thomsen</h2>
              <h3 className="text-4xl font-black text-slate-900 leading-tight">Din Statsautoriserede <br />Fodterapeut</h3>
              <div className="w-16 h-1 bg-teal-600"></div>
            </div>
            
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              Klinik Sund Fod ejes af Lisbeth Thomsen, der er uddannet statsautoriseret fodterapeut. Dette er din garanti for en behandling af højeste faglige kvalitet.
            </p>
            
            <p className="text-slate-600 leading-relaxed">
              Klinikken er centralt beliggende på Frederiksberg i moderne lokaler. Vi lægger vægt på en personlig og tryg atmosfære, hvor der er god tid til den enkelte patient. Klinikken er desuden udstyret med elevator, så der er nem adgang for alle.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="text-teal-600"><Icons.Star filled color="currentColor" /></div>
                <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Høj Faglighed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-teal-600"><Icons.Star filled color="currentColor" /></div>
                <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Moderne Udstyr</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-teal-600"><Icons.Star filled color="currentColor" /></div>
                <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Centralt Beliggende</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-teal-600"><Icons.Star filled color="currentColor" /></div>
                <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Patient i Fokus</span>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-slate-900 text-white px-10 py-5 rounded font-bold text-sm uppercase tracking-widest hover:bg-teal-600 transition-all">
                Læs Mere Om Klinikken
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582213726892-28c47e0f0f32?q=80&w=2070&auto=format&fit=crop" 
                alt="Lisbeth Thomsen" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 border-l-8 border-teal-600 shadow-xl max-w-xs">
              <p className="text-slate-900 font-black text-2xl leading-none">Lisbeth Thomsen</p>
              <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mt-2">Indehaver & Fodterapeut</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
