
import React from 'react';
import { Icons } from '../constants';

const SERVICES = [
  {
    title: "Fodbehandling",
    desc: "En grundig behandling der omfatter fodbad, klip af negle, oprensning og fjernelse af hård hud.",
    icon: <Icons.Foot />,
    image: "https://images.unsplash.com/photo-1519415510236-855911991cdb?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    title: "Indlægssåler",
    desc: "Individuelt tilpassede Formthotics såler der afhjælper smerter i fødder, knæ og ryg.",
    icon: <Icons.Star />,
    image: "https://images.unsplash.com/photo-1610492415170-071a9314546c?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    title: "Bøjlebehandling",
    desc: "Effektiv og smertefri rettelse af nedgroede negle ved hjælp af fjedrende stålbøjler.",
    icon: <Icons.Stethoscope />,
    image: "https://images.unsplash.com/photo-1522338140262-f46f5912018a?q=80&w=400&h=300&auto=format&fit=crop"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="behandlinger" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-teal-600">Specialiseret Fodpleje</h2>
          <h3 className="text-4xl font-black text-slate-900">Vores Mest Populære Ydelser</h3>
          <div className="w-16 h-1 bg-teal-600 mx-auto"></div>
          <p className="text-slate-600">Vi tilbyder en bred vifte af behandlinger skræddersyet til dine behov.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              <div className="relative h-56 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-teal-600 text-white p-3 rounded shadow-lg">
                  {s.icon}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="text-2xl font-black text-slate-900 mb-4">{s.title}</h4>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{s.desc}</p>
                <div className="pt-6 border-t border-slate-100">
                  <button className="text-teal-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                    Læs Mere <Icons.ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
