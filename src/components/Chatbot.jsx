import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, Bot, Sparkles, Minus, Headset } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Namaste! I am your Parekh e-Trade Assistant. How can I help you with Textile Trade today?' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Rule-based Logic
    setTimeout(() => {
      let botResponse = "I'm sorry, I couldn't find information on that. Please try asking about 'Tenders', 'Auctions', or 'Registration'.";
      
      const query = input.toLowerCase();
      if (query.includes('tender')) botResponse = "All active textile tenders are listed in our 'Tender & Contracts' section.";
      else if (query.includes('auction')) botResponse = "Our e-Auction portal handles bulk bidding for textile machinery and raw stocks.";
      else if (query.includes('buyer')) botResponse = "To register as a buyer, please visit the Buyer Platform and upload your GST/MSME documents.";
      else if (query.includes('seller')) botResponse = "Sellers can list their products by registering on the Seller Platform with valid trade licenses.";
      else if (query.includes('hi') || query.includes('hello')) botResponse = "Hello! Welcome to the digital hub of Hyderabad Textile Market. How can I assist you?";

      setMessages([...newMessages, { role: 'bot', text: botResponse }]);
    }, 800);
  };

  return (
    /* IMPORTANT: bottom-24 used to avoid overlap with WhatsApp (bottom-6).
       z-[2000] ensures it stays above all content.
    */
    <div className="fixed bottom-24 right-6 z-[2000] font-sans">
      
      {/* --- CHAT WINDOW --- */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[320px] sm:w-[380px] h-[500px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-2xl flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-[#020617] p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Headset size={18} className="text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#020617] rounded-full"></div>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-blue-400 leading-none mb-1">Live Help</p>
                <h3 className="text-sm font-bold leading-none">e-Trade Assistant</h3>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/10 p-1.5 rounded-full transition"
            >
              <Minus size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${msg.role === 'user' ? 'bg-blue-600' : 'bg-white border border-slate-200'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-white"/> : <Sparkles size={14} className="text-blue-600"/>}
                  </div>
                  <div className={`p-3 text-[13px] shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none' 
                    : 'bg-white text-slate-700 rounded-2xl rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your query..." 
              className="flex-grow p-3 bg-slate-100 border-none rounded-xl text-sm outline-none focus:ring-1 focus:ring-blue-600"
            />
            <button type="submit" className="bg-blue-600 p-3 text-white rounded-xl hover:bg-[#020617] transition shadow-md">
              <Send size={18} />
            </button>
          </form>
          <div className="text-[8px] text-center pb-2 text-slate-400 font-bold uppercase tracking-widest bg-white">
            Parekh Digital Support System
          </div>
        </div>
      )}

      {/* --- FLOATING TOGGLE BUTTON --- */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[#020617] text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center border-b-4 border-blue-700 hover:-translate-y-1 active:scale-90 ${isOpen ? 'bg-red-600 border-red-800 rotate-90' : ''}`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        
        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white animate-bounce">
            1
          </span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;