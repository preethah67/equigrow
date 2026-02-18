"use client";
import { useState } from 'react';
import { 
  UserCheck, Handshake, Briefcase, Star, ShieldCheck, 
  Globe2, Quote, GraduationCap, Heart, Trophy, Target,
  Rocket, CheckCircle2
} from 'lucide-react';

export default function MentorMatch() {
  const [connectedId, setConnectedId] = useState<number | null>(null);
  
  const mentors = [
    { 
      id: 1, 
      skill: "Executive Leadership", 
      exp: "12+ years", 
      match: "98%", 
      color: "border-pink-500", 
      img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400", 
      tag: "Board Member" 
    },
    { 
      id: 2, 
      skill: "Gender Policy & Law", 
      exp: "9 years", 
      match: "95%", 
      color: "border-blue-500", 
      img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400", 
      tag: "UN Consultant" 
    },
    { 
      id: 3, 
      skill: "Engineering Director", 
      exp: "15 years", 
      match: "92%", 
      color: "border-emerald-500", 
      img: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=400", 
      tag: "Tech Visionary" 
    },
    { 
      id: 4, 
      skill: "Venture Capitalist", 
      exp: "10 years", 
      match: "90%", 
      color: "border-orange-500", 
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400", 
      tag: "Equity Investor" 
    },
    { 
      id: 5, 
      skill: "Climate Justice Advocate", 
      exp: "7 years", 
      match: "89%", 
      color: "border-green-500", 
      img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400", 
      tag: "Sustainability Lead" 
    },
    { 
      id: 6, 
      skill: "FinTech Founder", 
      exp: "11 years", 
      match: "87%", 
      color: "border-yellow-500", 
      img: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400", 
      tag: "Entrepreneur" 
    },
    { 
      id: 7, 
      skill: "Inclusive HR Strategy", 
      exp: "14 years", 
      match: "85%", 
      color: "border-violet-500", 
      img: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=400", 
      tag: "Global HR Director" 
    },
    { 
      id: 8, 
      skill: "Political Strategist", 
      exp: "10 years", 
      match: "82%", 
      color: "border-red-500", 
      img: "https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg?auto=compress&cs=tinysrgb&w=400", 
      tag: "Public Policy Expert" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-rose-50 via-sky-50 to-amber-50 p-8 text-slate-800 relative overflow-hidden">
      
      {/* BACKGROUND GRAPHICS */}
      <div className="absolute top-10 left-[2%] opacity-10 rotate-12 scale-150"><Globe2 size={120} className="text-blue-600" /></div>
      <div className="absolute top-1/4 right-[8%] opacity-10 rotate-45"><Target size={100} className="text-red-500" /></div>
      <div className="absolute bottom-20 left-[5%] opacity-15 animate-bounce"><Trophy size={60} className="text-yellow-600" /></div>
      <div className="absolute bottom-1/3 left-[15%] opacity-10"><Heart size={80} className="text-pink-500 fill-pink-100" /></div>
      <div className="absolute top-[75%] right-[5%] opacity-10"><Rocket size={100} className="text-orange-500" /></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <div className="inline-block px-6 py-2 mb-6 rounded-full bg-white/80 border border-pink-200 text-pink-600 text-xs font-black tracking-[0.2em] uppercase shadow-md flex items-center justify-center gap-2 mx-auto">
             <Star className="w-3 h-3 fill-current" /> SDG 5 LEADERSHIP NETWORK
          </div>
          
          <h1 className="text-7xl font-black text-slate-900 mb-6 tracking-tighter">
            <span className="underline decoration-pink-500 decoration-8 underline-offset-8">EXPERT MENTORS</span>
          </h1>
          
          <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Verified leadership profiles curated for high-impact professional growth.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mentors.map(m => (
            <div key={m.id} className="group bg-white/90 backdrop-blur-xl rounded-[40px] p-8 border border-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              
              <div className="flex justify-between items-start mb-6">
                <div className="relative">
                  <img 
                    src={m.img} 
                    alt={m.skill} 
                    className="w-24 h-24 rounded-3xl object-cover shadow-xl border-4 border-white group-hover:rotate-2 transition-transform bg-slate-200"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=400";
                    }}
                  />
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-xl shadow-lg border-2 border-white">
                    <UserCheck size={16} />
                  </div>
                </div>
                <div className="text-right">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Match Rate</span>
                    <span className="text-4xl font-black text-slate-800">{m.match}</span>
                </div>
              </div>

              <div className="mb-8">
                <div className={`inline-block px-4 py-1 rounded-full bg-slate-100 border ${m.color} text-[10px] font-black uppercase mb-4 text-slate-600`}>
                    {m.tag}
                </div>
                <h2 className="text-3xl font-black text-slate-800 leading-tight mb-3 min-h-[90px]">
                    {m.skill}
                </h2>
                <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                    <Briefcase size={16} className="text-pink-500" /> {m.exp} Industry Authority
                </div>
              </div>

              <button 
                onClick={() => setConnectedId(m.id)}
                className={`w-full py-5 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-3 tracking-widest uppercase ${
                  connectedId === m.id 
                  ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-500' 
                  : 'bg-slate-900 text-white hover:bg-pink-600 hover:shadow-2xl'
                }`}
              >
                {connectedId === m.id ? (
                  <> <CheckCircle2 size={18} /> Connection Sent </>
                ) : (
                  <> <Handshake size={18} /> Request Mentorship </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 p-12 rounded-[50px] bg-white border border-slate-200 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500" />
             <h3 className="text-4xl font-black mb-4 text-slate-900 tracking-tight italic">ELEVATE YOUR CAREER</h3>
             <p className="text-slate-500 font-bold mb-10 max-w-md mx-auto">
               Connect with world-class experts breaking barriers across all industries.
             </p>
             <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-pink-600 text-white px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform shadow-xl">
                  Join as a Mentee
                </button>
                <button className="bg-slate-100 text-slate-800 px-10 py-4 rounded-2xl font-black hover:bg-slate-200 transition-colors">
                  Contact Support
                </button>
             </div>
        </div>
      </div>
    </div>
  );
}