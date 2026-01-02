
import React, { useState, useEffect } from 'react';
import { Page } from '../App';
import { CLINIC_INFO, Icons } from '../constants';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Hjem', value: 'home' },
    { label: 'Behandlinger', value: 'treatments' },
    { label: 'Priser', value: 'prices' },
    { label: 'Kontakt', value: 'contact' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* WordPress-style Top Bar */}
      <div className={`bg-slate-900 text-white py-2 px-6 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="container mx-auto flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Icons.MapPin /> {CLINIC_INFO.address}</span>
            <span className="hidden md:flex items-center gap-2"><Icons.Phone /> {CLINIC_INFO.phone}</span>
          </div>
          <div className="flex gap-4">
            <span className="hidden sm:inline">Mandag - Fredag: 09:00 - 17:00</span>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <nav className={`w-full transition-all duration-300 border-b ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3 outline-none group">
            <div className="w-10 h-10 bg-teal-600 rounded flex items-center justify-center text-white font-black text-xl transition-transform group-hover:rotate-3">
              SF
            </div>
            <div className="text-left">
              <span className="block text-xl font-black tracking-tight text-slate-900 leading-none">Klinik Sund Fod</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 mt-1">Statsautoriseret Fodterapi</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-teal-600 relative py-2 ${
                  currentPage === item.value ? 'text-teal-600' : 'text-slate-700'
                }`}
              >
                {item.label}
                {currentPage === item.value && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600"></span>
                )}
              </button>
            ))}
            <a
              href="https://kliniksundfod.dk/online-booking/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-3 rounded font-bold text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95"
            >
              Book Tid Nu
            </a>
          </div>

          {/* Mobile Menu Icon (Simplified for this view) */}
          <button className="lg:hidden text-slate-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          </button>
        </div>
      </nav>
    </header>
  );
};
