
import React, { useState, useRef, useEffect } from 'react';
import { getKittenAdvice } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    {role: 'ai', text: 'Welcome. I am Arla, your personal concierge. How may I assist with your inquiry today?'}
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setIsTyping(true);
    const aiResponse = await getKittenAdvice(userMsg);
    setMessages(prev => [...prev, {role: 'ai', text: aiResponse}]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center space-x-4 bg-white/80 backdrop-blur-md px-6 py-4 border border-[#E8E4E1] shadow-xl hover:bg-slate-900 hover:text-white transition-all duration-500"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Concierge</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#C5A08E] group-hover:bg-white animate-pulse"></div>
        </button>
      )}

      {isOpen && (
        <div className="w-[400px] h-[600px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.1)] flex flex-col border border-[#E8E4E1] animate-fade-in">
          <div className="p-8 border-b border-[#E8E4E1] flex justify-between items-center">
            <div>
              <h4 className="font-serif text-xl font-bold">Arla</h4>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#C5A08E] font-bold mt-1">Personal Assistant</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto space-y-8 bg-[#FAFAFA]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] text-xs leading-relaxed font-light ${
                  msg.role === 'user' ? 'bg-slate-900 text-white p-4' : 'text-slate-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-[9px] uppercase tracking-widest text-slate-400 italic">Arla is typing...</div>}
          </div>

          <div className="p-6 bg-white border-t border-[#E8E4E1] flex items-center">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Your message..."
              className="flex-grow text-xs font-light placeholder:text-slate-300 focus:outline-none"
            />
            <button onClick={handleSend} className="text-[10px] uppercase tracking-widest font-bold text-[#C5A08E] ml-4 hover:text-slate-900 transition-colors">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
