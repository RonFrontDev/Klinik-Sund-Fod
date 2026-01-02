
import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../constants';
import { askFootAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hej! Jeg er din virtuelle fodassistent. Har du spørgsmål til dine fødder eller vores behandlinger?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await askFootAssistant(input, messages);
    setMessages(prev => [...prev, { role: 'model', text: response || 'Kunne ikke hente svar.' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-teal-600 text-white p-4 rounded-full shadow-2xl hover:bg-teal-700 transition-all transform active:scale-90 flex items-center gap-2 group"
        >
          <Icons.MessageCircle />
          <span className="hidden md:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium text-sm">Spørg om råd</span>
        </button>
      ) : (
        <div className="bg-white w-[calc(100vw-2rem)] md:w-96 h-[80vh] md:h-[500px] rounded-3xl shadow-2xl flex flex-col border border-slate-200 animate-in slide-in-from-bottom-4 duration-300 overflow-hidden">
          <div className="p-4 bg-teal-600 text-white flex justify-between items-center shadow-lg relative z-10">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Icons.Foot />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight">Fod-Assistent</h3>
                <p className="text-[10px] text-teal-100">AI-drevet vejledning</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
              <Icons.X />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-teal-600 text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 bg-white">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Skriv spørgsmål..."
                className="w-full pl-5 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none text-sm transition-all placeholder:text-slate-400"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-teal-600 text-white p-2 rounded-xl hover:bg-teal-700 disabled:opacity-50 transition-colors shadow-md"
              >
                <Icons.Send />
              </button>
            </div>
            <p className="text-[9px] text-slate-400 mt-3 text-center px-4 leading-tight">Assistenten giver generelle råd. Søg altid professionel hjælp ved akutte gener.</p>
          </div>
        </div>
      )}
    </div>
  );
};
