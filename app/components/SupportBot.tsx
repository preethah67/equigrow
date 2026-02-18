"use client";
import { useState } from 'react';
import { MessageCircle, X, Send, ShieldCheck } from 'lucide-react';

export default function SupportBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([{ role: 'bot', text: 'Hi! I’m the EquiGrow Assistant. How can I help with your SDG 5 journey today?' }]);

  const handleSend = () => {
    if (!message.trim()) return;
    setChat([...chat, { role: 'user', text: message }]);
    
    // Simple logic: In a real app, you'd call an API here
    setTimeout(() => {
      setChat(prev => [...prev, { role: 'bot', text: "Thanks for reaching out! Our equity mentors have been notified and will respond via email shortly." }]);
    }, 1000);
    
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {isOpen ? (
        <div className="bg-white w-80 h-[450px] rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-blue-400" />
              <span className="font-bold text-sm">EquiGrow Support</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
            {chat.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-xs font-medium ${
                  msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white border text-slate-700 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t flex gap-2">
            <input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="bg-blue-600 p-2 rounded-full text-white">
              <Send size={14} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-sm">Contact Support</span>
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}