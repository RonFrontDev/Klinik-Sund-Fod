
import React from 'react';
import { Icons, CLINIC_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519415510236-855911991cdb?q=80&w=2000&auto=format&fit=crop" 
          alt="Clinic Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl bg-white/95 backdrop-blur-sm p-10 md:p-16 rounded shadow-2xl animate-in fade-in slide-in-from-left-12 duration-1000">
          <div className="space-y-6">
            <div className="inline-block border-b-2 border-teal-600 pb-2">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-teal-600">
                Velkommen til Frederiksberg
              </p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Professionel <br />
              <span className="text-teal-600">Fodterapi</span> med <br />
              omtanke.
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Statsautoriseret fodterapeut Lisbeth Thomsen tilbyder alt indenfor moderne fodpleje i lyse og venlige omgivelser.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://kliniksundfod.dk/online-booking/"
                target="_blank"
                className="bg-teal-600 text-white px-10 py-5 rounded font-bold text-sm uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl text-center"
              >
                Bestil Tid Online
              </a>
              <a 
                href="/#behandlinger"
                className="bg-slate-100 text-slate-800 px-10 py-5 rounded font-bold text-sm uppercase tracking-widest hover:bg-slate-200 transition-all text-center"
              >
                Vores Ydelser
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Bar (Common in WP themes) */}
      <div className="absolute bottom-0 w-full bg-teal-600 text-white py-6 hidden md:block">
        <div className="container mx-auto px-6 grid grid-cols-3 divide-x divide-white/20">
          <div className="flex items-center justify-center gap-4">
            <Icons.Star filled color="white" />
            <span className="font-bold text-xs uppercase tracking-widest">Statsautoriseret</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Icons.Calendar />
            <span className="font-bold text-xs uppercase tracking-widest">Online Booking</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Icons.MapPin />
            <span className="font-bold text-xs uppercase tracking-widest">Elevator til døren</span>
          </div>
        </div>
      </div>
    </section>
  );
};
