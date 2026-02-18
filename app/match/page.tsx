"use client";
import { useState } from 'react';
import { Award, Info, AlertCircle, CheckCircle2, ArrowRight, Scale, Globe, Landmark, Users2, Sparkles, UserCheck, Handshake, Briefcase } from 'lucide-react';

export default function MentorMatch() {
  const [connectedId, setConnectedId] = useState<number | null>(null);
  
  const mentors = [
    { id: 1, skill: "Inclusive Leadership", exp: "5 years", match: "98%", color: "border-pink-500", icon: "💖" },
    { id: 2, skill: "Gender Policy Advocacy", exp: "7 years", match: "95%", color: "border-purple-500", icon: "🏛️" },
    { id: 3, skill: "Women in Tech Empowerment", exp: "4 years", match: "92%", color: "border-blue-500", icon: "👩‍💻" },
    { id: 4, skill: "DEI Strategy (Corporate)", exp: "8 years", match: "90%", color: "border-green-500", icon: "🌍" },
    { id: 5, skill: "Breaking Glass Ceilings", exp: "6 years", match: "88%", color: "border-yellow-500", icon: "🚀" },
    { id: 6, skill: "Work-Life Balance Coaching", exp: "3 years", match: "85%", color: "border-orange-500", icon: "⚖️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8 text-gray-800 relative overflow-hidden">
      
      {/* DECORATIVE FLOATING IMAGES/ICONS */}
      <div className="absolute top-10 left-[10%] text-7xl opacity-20"><Handshake className="text-purple-500" /></div>
      <div className="absolute top-1/3 right-[5%] text-9xl opacity-15"><UserCheck className="text-pink-500" /></div>
      <div className="absolute bottom-10 left-[20%] text-6xl opacity-25 animate-pulse"><Briefcase className="text-blue-500" /></div>
      <div className="absolute top-[25%] left-[60%] bg-red-300/30 w-36 h-36 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-[30%] right-[20%] bg-violet-300/30 w-28 h-28 rounded-full blur-3xl animate-blob-delay" />

      <div className="max-w-3xl mx-auto relative z-10">
        <header className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-pink-200 border border-pink-300 text-pink-700 text-xs font-black tracking-widest uppercase">
            Goal 5: Mentorship for Equity
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-4 italic underline decoration-pink-300">
            GENDER-BLIND MENTORSHIP
          </h1>
          <p className="text-gray-600 text-lg">Connect with mentors dedicated to fostering gender equality and professional growth.</p>
        </header>

        <div className="space-y-6">
          {mentors.map(m => (
            <div key={m.id} className={`bg-white/80 p-6 rounded-3xl border-l-8 ${m.color} shadow-xl flex flex-col md:flex-row justify-between items-center transition-transform hover:scale-[1.02] border-t-2 border-r-2 border-b-2 border-white/50 relative overflow-hidden`}>
              <div className="flex items-center gap-5">
                <div className="text-4xl bg-white/70 border border-gray-100 w-16 h-16 flex items-center justify-center rounded-full shadow-inner">{m.icon}</div>
                <div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Mentor Profile #00{m.id}</span>
                  <h2 className="text-2xl font-bold text-gray-900 my-1">{m.skill}</h2>
                  <p className="text-green-600 font-semibold">{m.exp} Industry Experience</p>
                </div>
              </div>
              <div className="text-center mt-4 md:mt-0">
                <div className="text-3xl font-black text-gray-900 mb-2">{m.match}</div>
                <button 
                  onClick={() => setConnectedId(m.id)}
                  className={`px-6 py-3 rounded-full font-bold transition-all shadow-md text-sm ${connectedId === m.id ? 'bg-green-500 text-white animate-pulse' : 'bg-violet-600 text-white hover:bg-violet-700'}`}
                >
                  {connectedId === m.id ? "✓ Connected!" : "Request Connection"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}