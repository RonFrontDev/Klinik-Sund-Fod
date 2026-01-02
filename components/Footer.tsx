
import React from 'react';
import { Icons, CLINIC_INFO } from '../constants';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* About Widget */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center font-black">SF</div>
              <span className="text-xl font-black uppercase tracking-tight">Klinik Sund Fod</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Vi tilbyder professionel fodterapi på Frederiksberg. Hos os er dine fødder i trygge hænder hos en statsautoriseret fodterapeut.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-slate-700 flex items-center justify-center rounded-full hover:bg-teal-600 transition-colors">
                <Icons.Star />
              </a>
              <a href="#" className="w-10 h-10 border border-slate-700 flex items-center justify-center rounded-full hover:bg-teal-600 transition-colors">
                <Icons.MessageCircle />
              </a>
            </div>
          </div>

          {/* Opening Hours Widget */}
          <div>
            <h4 className="text-lg font-bold mb-8 border-l-4 border-teal-600 pl-4 uppercase tracking-widest text-sm">Åbningstider</h4>
            <div className="space-y-3">
              {CLINIC_INFO.hours.map((h, i) => (
                <div key={i} className="flex justify-between text-slate-400 text-xs border-b border-slate-800 pb-2">
                  <span className="font-bold">{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Widget */}
          <div>
            <h4 className="text-lg font-bold mb-8 border-l-4 border-teal-600 pl-4 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
              <li><button onClick={() => onNavigate('home')} className="hover:text-teal-600 transition-colors">Forside</button></li>
              <li><button onClick={() => onNavigate('treatments')} className="hover:text-teal-600 transition-colors">Behandlinger</button></li>
              <li><button onClick={() => onNavigate('prices')} className="hover:text-teal-600 transition-colors">Priser & Tilskud</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-teal-600 transition-colors">Kontakt Os</button></li>
            </ul>
          </div>

          {/* Contact Widget */}
          <div>
            <h4 className="text-lg font-bold mb-8 border-l-4 border-teal-600 pl-4 uppercase tracking-widest text-sm">Find Os</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-teal-600 mt-1"><Icons.MapPin /></div>
                <p className="text-slate-400 text-xs leading-relaxed font-bold uppercase tracking-widest">
                  {CLINIC_INFO.address}<br />
                  <span className="text-teal-600 font-medium lowercase italic tracking-normal">{CLINIC_INFO.locationDetail}</span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-teal-600"><Icons.Phone /></div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{CLINIC_INFO.phone}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-teal-600"><Icons.MessageCircle /></div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{CLINIC_INFO.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">
            © {new Date().getFullYear()} Klinik Sund Fod. WordPress Theme Inspired.
          </p>
          <div className="flex gap-8 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
            <span>CVR: {CLINIC_INFO.cvr}</span>
            <span>Udført af Fodterapeut</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
