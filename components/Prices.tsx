
import React from 'react';
import { Icons } from '../constants';

const PRICE_LIST = [
  {
    category: "Fodbehandling",
    color: "teal",
    items: [
      { name: "Almindelig behandling", price: "520 kr.", sub: "Ca. 45 min" },
      { name: "Kompliceret behandling", price: "610 kr.", sub: "Mange ligtorne / hård hud" },
      { name: "Luksus behandling", price: "720 kr.", sub: "Inkl. fodmaske" },
    ]
  },
  {
    category: "Speciale",
    color: "rose",
    items: [
      { name: "Bøjlebehandling 1. negl", price: "275 kr.", sub: "Orthonyxi" },
      { name: "Formthotics indlæg", price: "950 kr.", sub: "Varmetilpasset" },
      { name: "Paraffinbehandling", price: "250 kr.", sub: "Wellness" },
    ]
  },
  {
    category: "Andet",
    color: "amber",
    items: [
      { name: "Udebehandling", price: "650 kr.", sub: "I hjemmet" },
      { name: "Afbud / Udeblivelse", price: "250 kr.", sub: "Senest 24t før" },
    ]
  }
];

export const Prices: React.FC = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header Banner */}
      <section className="relative h-64 flex items-center bg-slate-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop" 
          alt="Price Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Prisliste 2024</h1>
          <div className="w-20 h-1.5 bg-teal-600 mt-4"></div>
          <p className="mt-4 text-slate-300 font-bold uppercase tracking-widest text-[10px]">Gennemsigtighed & Faglighed</p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-20">
          {PRICE_LIST.map((section, idx) => (
            <div key={idx} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-6 border-b-2 border-slate-100 pb-4">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{section.category}</h2>
              </div>
              
              <div className="grid gap-6">
                {section.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center group py-4 px-6 hover:bg-slate-50 transition-colors rounded">
                    <div className="space-y-1">
                      <p className="text-xl font-bold text-slate-800">{item.name}</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.sub}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-black text-teal-600">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Tilskud Section */}
          <div className="pt-12">
             <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 rounded flex flex-col md:flex-row items-center gap-12">
                <div className="w-32 h-32 flex-shrink-0 bg-white p-4 rounded-full shadow-lg flex items-center justify-center border-4 border-teal-600/10">
                  <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover rounded-full" alt="Icon" />
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Tilskudsmuligheder</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Vi samarbejder med Sygeforsikringen "danmark", der giver tilskud til fodbehandling og indlæg. Har du en lægehenvisning til diabetes, gigt, arvæv eller nedgroede negle, ydes der ligeledes tilskud fra den offentlige sygesikring.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                  <a href="https://kliniksundfod.dk/online-booking/" className="block text-center bg-slate-900 text-white px-10 py-5 rounded font-bold text-xs uppercase tracking-widest hover:bg-teal-600 transition-all">
                    Book Tid Nu
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
