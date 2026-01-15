
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, X, MessageSquare } from 'lucide-react';
import { getWeddingStylistResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIStylist: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Krásný den! Jsem Jakubův AI asistent. Rád vám pomohu s čímkoliv ohledně vaší svatby – od výběru video balíčku až po tipy na nejlepší čas pro novomanželské focení. Co vás zajímá?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getWeddingStylistResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-ochre text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-stone-900 transition-all duration-300 flex items-center gap-2"
      >
        <Sparkles size={24} />
        <span className="hidden md:inline font-bold text-xs uppercase tracking-widest">Svatební rádce</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-96 h-[550px] bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden border border-stone-100 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-stone-900 p-5 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-ochre p-1.5 rounded-lg">
                <Sparkles size={16} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold serif-font leading-none">Svatební rádce</span>
                <span className="text-[9px] uppercase tracking-widest text-white/50">Expert na video a plánování</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-stone-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-ochre text-white rounded-tr-none shadow-sm' 
                  : 'bg-white text-stone-700 shadow-sm rounded-tl-none border border-stone-100'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-stone-100 shadow-sm">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-ochre rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-ochre rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-ochre rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-stone-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Zeptejte se na svatbu..."
              className="flex-1 text-sm bg-stone-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ochre/20"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-stone-900 text-white p-3 rounded-xl hover:bg-ochre transition-all disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIStylist;
