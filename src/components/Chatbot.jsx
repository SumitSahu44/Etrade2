import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, X, Send, User, Sparkles, 
  Minus, Headset, Building2, Gavel, 
  FileText, CheckCircle2, Search, Info
} from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'bot', 
      text: 'Namaste! Welcome to Parekh e-Trade. I am your digital trade assistant. How can I facilitate your textile business today?',
      icon: <Sparkles size={14} className="text-blue-600" />
    }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const getProfessionalResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes('tender')) return {
      text: "Our 'Tenders & Contracts' portal displays all current government and private textile procurement notices. Would you like the link to active listings?",
      icon: <FileText size={14} className="text-blue-600" />
    };
    if (q.includes('auction')) return {
      text: "The e-Auction module manages competitive bidding for surplus machinery and raw fabric stocks. Ensure your EMD (Earnest Money Deposit) is updated.",
      icon: <Gavel size={14} className="text-blue-600" />
    };
    if (q.includes('buyer')) return {
      text: "Buyer verification requires valid GST, MSME registration, and a PAN card. Please visit the 'Onboarding' section to upload your KYC documents.",
      icon: <CheckCircle2 size={14} className="text-blue-600" />
    };
    if (q.includes('seller')) return {
      text: "Sellers must provide a Trade License and Factory Act registration. Once verified, you can list bulk inventory directly on our spot-market.",
      icon: <Building2 size={14} className="text-blue-600" />
    };
    if (q.includes('hi') || q.includes('hello')) return {
      text: "Greetings. I am here to assist with Hyderabad Textile Market trade inquiries, registrations, and auction support.",
      icon: <Info size={14} className="text-blue-600" />
    };

    return {
      text: "I apologize, I didn't recognize that specific request. You may ask about 'Tenders', 'Auctions', or 'Registration' for immediate assistance.",
      icon: <Search size={14} className="text-slate-600" />
    };
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getProfessionalResponse(input);
      setMessages(prev => [...prev, { ...response, role: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-24 right-6 z-[2000] font-sans antialiased">
      {/* --- CHAT WINDOW --- */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[340px] sm:w-[400px] h-[550px] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl flex flex-col overflow-hidden border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Professional Header */}
          <div className="bg-[#0f172a] p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-blue-600 p-2 rounded-xl shadow-inner">
                  <Headset size={20} className="text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0f172a] rounded-full"></div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-400 leading-none mb-1">Parekh e-Trade</p>
                <h3 className="text-[15px] font-semibold leading-none tracking-tight">Support Concierge</h3>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
              <Minus size={20} className="text-slate-400" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-6 bg-[#f8fafc]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm ${msg.role === 'user' ? 'bg-blue-700' : 'bg-white border border-slate-200'}`}>
                    {msg.role === 'user' ? <User size={16} className="text-white" /> : (msg.icon || <Sparkles size={16} className="text-blue-600" />)}
                  </div>
                  <div className={`p-3.5 text-[13.5px] leading-relaxed shadow-sm ring-1 ring-black/5 ${
                    msg.role === 'user' 
                      ? 'bg-blue-700 text-white rounded-2xl rounded-tr-none' 
                      : 'bg-white text-slate-800 rounded-2xl rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start gap-3">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                  <Sparkles size={14} className="text-blue-600 animate-pulse" />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm ring-1 ring-black/5 flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <form onSubmit={handleSend} className="flex gap-2 bg-slate-50 border border-slate-200 rounded-xl p-1 focus-within:ring-2 focus-within:ring-blue-600/20 focus-within:border-blue-600 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Tenders, KYC, or Bidding..."
                className="flex-grow p-2.5 bg-transparent text-[13.5px] outline-none placeholder:text-slate-400"
              />
              <button type="submit" className="bg-blue-700 p-2.5 text-white rounded-lg hover:bg-slate-900 transition-all shadow-sm">
                <Send size={18} />
              </button>
            </form>
            <div className="flex justify-between items-center mt-3 px-1">
              <span className="text-[9px] text-slate-400 font-bold uppercase st">Digital Infrastructure</span>
              <div className="flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-blue-600/20"></div>
                 <div className="w-2 h-2 rounded-full bg-blue-600/40"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- FLOATING TOGGLE BUTTON --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative group h-14 w-14 rounded-2xl shadow-2xl transition-all duration-500 flex items-center justify-center overflow-hidden ${
          isOpen 
          ? 'bg-slate-900 rotate-90 scale-90' 
          : 'bg-[#0f172a] hover:scale-110 active:scale-95 border-b-4 border-blue-800'
        }`}
      >
        {isOpen ? (
          <X size={28} className="text-white" />
        ) : (
          <div className="relative">
            <MessageSquare size={26} className="text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          </div>
        )}

        {/* Professional Notification */}
        {!isOpen && (
          <span className="absolute top-2 right-2 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 border border-white"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;