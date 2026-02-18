"use client";
import { useState } from 'react';

export default function MentorMatch() {
  const [connectedId, setConnectedId] = useState<number | null>(null);
  
  // Expanded list of mentors with diverse skills
  const mentors = [
    { id: 1, skill: "React & Next.js", exp: "5 years", match: "98%", color: "border-blue-500", icon: "⚛️" },
    { id: 2, skill: "Python Data Science", exp: "3 years", match: "92%", color: "border-yellow-500", icon: "🐍" },
    { id: 3, skill: "UI/UX Design", exp: "4 years", match: "89%", color: "border-pink-500", icon: "🎨" },
    { id: 4, skill: "Cloud Architecture (AWS)", exp: "7 years", match: "95%", color: "border-orange-500", icon: "☁️" },
    { id: 5, skill: "Cybersecurity", exp: "6 years", match: "87%", color: "border-red-500", icon: "🛡️" },
    { id: 6, skill: "Mobile App Dev (Flutter)", exp: "3 years", match: "91%", color: "border-cyan-500", icon: "📱" },
    { id: 7, skill: "Product Management", exp: "8 years", match: "84%", color: "border-indigo-500", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] p-8 text-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent italic tracking-tight">
          SKILL-FIRST MATCHING
        </h1>
        <p className="text-slate-400 text-lg">We hide names and photos to focus purely on the mentorship you need.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {mentors.map(m => (
          <div key={m.id} className={`bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border-l-4 ${m.color} flex justify-between items-center hover:bg-slate-800 transition-all border border-slate-700 shadow-xl`}>
            <div className="flex items-center gap-5">
              <div className="text-4xl bg-slate-700 w-16 h-16 flex items-center justify-center rounded-full shadow-inner">{m.icon}</div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Profile #{m.id}0X</span>
                <h2 className="text-2xl font-bold text-white leading-tight">{m.skill}</h2>
                <p className="text-emerald-400 text-sm font-medium">Industry Expert • {m.exp}</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-black text-white">{m.match}</div>
              <button 
                onClick={() => setConnectedId(m.id)}
                className={`mt-2 px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                  connectedId === m.id 
                  ? 'bg-emerald-500 text-white cursor-default shadow-[0_0_15px_rgba(16,185,129,0.5)]' 
                  : 'bg-white text-black hover:bg-emerald-400 hover:text-black shadow-lg'
                }`}
              >
                {connectedId === m.id ? "✓ Requested" : "Connect"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}