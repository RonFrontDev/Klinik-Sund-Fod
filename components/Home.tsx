
import React from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { About } from './About';
import { Page } from '../App';
import { Icons } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero />
      
      {/* WordPress-style Trust Bar / Logos */}
      <div className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-black">DA</div>
               <span className="font-black text-xs uppercase tracking-widest text-slate-900">Danmark</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-black">SS</div>
               <span className="font-black text-xs uppercase tracking-widest text-slate-900">Sundhed</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-black">FB</div>
               <span className="font-black text-xs uppercase tracking-widest text-slate-900">Frb. Kommune</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-black">SF</div>
               <span className="font-black text-xs uppercase tracking-widest text-slate-900">Stat. Aut.</span>
             </div>
          </div>
        </div>
      </div>

      <Services />

      {/* WordPress-style CTA Section */}
      <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519415510236-855911991cdb?q=80&w=2000&auto=format&fit=crop" 
          alt="CTA Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="container mx-auto px-6 space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Oplev Forskellen Med En Professionel Behandling</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Vi tager imod nye patienter og hjælper med alt fra hverdagens fodpleje til specialiserede indlæg.</p>
          <div className="flex justify-center gap-4">
            <a href="https://kliniksundfod.dk/online-booking/" target="_blank" className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-5 rounded font-bold text-sm uppercase tracking-widest transition-all shadow-2xl">
              Book Din Tid Nu
            </a>
          </div>
        </div>
      </section>

      <About />
      
      {/* WP Theme-style Testimonials Slider (Static) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-teal-600">Referencer</h2>
            <h3 className="text-4xl font-black text-slate-900">Hvad Vores Patienter Siger</h3>
            <div className="w-16 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Kirsten Jensen", 
                text: "Jeg har gået hos Lisbeth i mange år og har altid fået en fantastisk behandling. Mine fødder føles som nye hver gang.",
                img: "https://images.unsplash.com/photo-1544005313-94ff956c9d3e?q=80&w=150&h=150&auto=format&fit=crop"
              },
              { 
                name: "Morten Nielsen", 
                text: "Fik lavet Formthotics indlæg til mine løbesko. Det har fjernet mine knæsmerter fuldstændigt. Meget professionelt!",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop"
              },
              { 
                name: "Hanne Berg", 
                text: "Utrolig venlig service og meget grundig behandling. Klinikken er pæn og ren, og Lisbeth er meget vidende.",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
              }
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded border border-slate-200 relative">
                <div className="text-teal-600 mb-6 flex gap-1">
                  {[1,2,3,4,5].map(s => <Icons.Star key={s} filled color="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                  <div>
                    <p className="font-black text-slate-900">{t.name}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verificeret Patient</p>
                  </div>
                </div>
                <div className="absolute top-8 right-8 text-slate-200 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19C19.5523 16 20 15.5523 20 15V9C20 8.44772 19.5523 8 19 8H16C15.4477 8 15 8.44772 15 9V12C15 12.5523 14.5523 13 14 13H11V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10C10.5523 16 11 15.5523 11 15V9C11 8.44772 10.5523 8 10 8H7C6.44772 8 6 8.44772 6 9V12C6 12.5523 5.55228 13 5 13H2V21H5.017Z"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
