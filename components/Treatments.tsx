
import React from 'react';
import { Icons } from '../constants';

const DETAILED_TREATMENTS = [
  {
    title: "Almindelig Fodbehandling",
    desc: "Vores mest populære behandling. Vi starter med et afslappende fodbad. Herefter klippes, renses og slibes neglene. Hård hud og eventuelle ligtorne fjernes nænsomt. Behandlingen afsluttes med en let massage med en creme, der passer til netop din hudtype.",
    features: ["Fodbad & Analyse", "Neglepleje & Slibning", "Fjernelse af hård hud", "Afsluttende creme-massage"],
    image: "https://images.unsplash.com/photo-1519415510236-855911991cdb?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Diabetes & Gigtbehandling",
    desc: "Særlig fokus på forebyggelse og observation. Vi udfører lovpligtig fodstatus for diabetikere, hvor vi tjekker følesans og kredsløb. Patienter med diabetes eller leddegigt kan få tilskud med lægehenvisning.",
    features: ["Fodstatus-undersøgelse", "Vibrationstest", "Sår-tjek", "Vejledning i fodtøj"],
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Formthotics Indlægssåler",
    desc: "Vi er certificerede Formthotics behandlere. Disse indlæg er unikke, da de kan varmetilpasses direkte til din fod og dine sko på få minutter. De giver optimal støtte og afhjælper smerter.",
    features: ["Hurtig tilpasning", "Stødabsorberende", "Lang holdbarhed", "Til sport og hverdag"],
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Bøjlebehandling (Orthonyxi)",
    desc: "Døjer du med smerter fra nedgroede negle? En lille tynd stålbøjle limes på neglen og fungerer som en fjeder, der løfter neglekanten fri af huden. Giver ofte øjeblikkelig smertelindring.",
    features: ["Smertefri påsætning", "Øjeblikkelig lindring", "Undgå operation", "Tilskudsmulighed"],
    image: "https://images.unsplash.com/photo-1522338140262-f46f5912018a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Luksus & Paraffin",
    desc: "Forkæl dig selv med en paraffinbehandling. Dine fødder dyppes i varm, smeltet voks, som trænger dybt ind og blødgør huden. Perfekt til tørre fødder eller gigtramte led.",
    features: ["Dybdegående varme", "Ekstra blød hud", "Lindrer ledsmerter", "Wellness oplevelse"],
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop"
  }
];

export const Treatments: React.FC = () => {
  return (
    <div className="pt-24 bg-white">
      {/* Page Header Banner */}
      <section className="relative h-64 flex items-center bg-slate-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516549221187-df702847954e?q=80&w=2000&auto=format&fit=crop" 
          alt="Treatment Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Behandlinger & Specialer</h1>
          <div className="w-20 h-1.5 bg-teal-600 mt-4"></div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DETAILED_TREATMENTS.map((t, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative group">
                  <img 
                    src={t.image} 
                    alt={t.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-teal-600/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8 flex-grow space-y-4">
                  <h2 className="text-2xl font-black text-slate-900">{t.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
                  <ul className="space-y-2 pt-4">
                    {t.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <span className="text-teal-600"><Icons.Star filled color="currentColor" /></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <a 
                    href="https://kliniksundfod.dk/online-booking/" 
                    target="_blank"
                    className="block text-center bg-teal-600 text-white py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-slate-900 transition-colors"
                  >
                    Bestil tid nu
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Block */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-slate-900 text-white p-10 md:p-16 rounded shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="space-y-6 flex-1">
              <h3 className="text-3xl font-black tracking-tight">Er du i tvivl om hvilken behandling du skal vælge?</h3>
              <p className="text-slate-400">Kontakt os i dag for en uforpligtende samtale, eller brug vores AI-assistent i bunden af siden for hurtige svar på dine spørgsmål.</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+4522404068" className="flex items-center gap-2 bg-teal-600 px-6 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-teal-700 transition-colors">
                  <Icons.Phone /> Ring til os
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
