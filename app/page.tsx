"use client";
import { useState } from 'react';

export default function BiasScanner() {
  const [text, setText] = useState("");
  
  // Expanded dictionary for a more powerful scanner
  const biasMap: Record<string, string> = { 
    "aggressive": "driven", 
    "ninja": "expert", 
    "rockstar": "top-tier talent",
    "dominant": "leading",
    "forceful": "determined",
    "mankind": "humanity",
    "chairman": "chairperson",
    "ambitious": "growth-oriented"
  };

  const scanText = () => {
    let highlighted = text;
    Object.keys(biasMap).forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      highlighted = highlighted.replace(
        regex, 
        `<span class="bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 px-2 py-0.5 rounded-md font-bold shadow-[0_0_10px_rgba(34,211,238,0.3)]">${biasMap[word]}</span>`
      );
    });
    return highlighted;
  };

  return (
    <div className="min-h-screen bg-[#0f172a] p-6 md:p-12 text-white font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold tracking-widest uppercase">
            Phase 1: Language
          </div>
          <h1 className="text-6xl font-black mb-4 tracking-tighter italic">
            LINGUISTIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SCANNER</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            We fix gender-coded wording to remove psychological barriers before you even apply.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Input Area */}
          <div className="flex flex-col">
            <label className="mb-3 ml-2 text-sm font-bold text-slate-500 uppercase tracking-widest">Input Text (Job Post / Resume)</label>
            <textarea 
              className="flex-1 min-h-[300px] w-full p-6 text-lg bg-slate-900/50 border-2 border-slate-800 rounded-3xl focus:border-cyan-500 transition-all outline-none shadow-inner text-slate-300 placeholder:text-slate-700"
              placeholder="Paste your text here... (Try: 'We need an aggressive ninja rockstar')"
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          {/* Output Area */}
          <div className="flex flex-col">
            <label className="mb-3 ml-2 text-sm font-bold text-slate-500 uppercase tracking-widest">Inclusive Output</label>
            <div className="flex-1 min-h-[300px] w-full p-8 bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-3xl shadow-2xl relative overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full transition-all group-hover:bg-cyan-500/20" />
              
              <div className="relative z-10 text-xl leading-relaxed text-slate-200">
                {text ? (
                  <div dangerouslySetInnerHTML={{ __html: scanText() }} />
                ) : (
                  <span className="text-slate-600 italic italic">Scan results will appear here in real-time...</span>
                )}
              </div>
              
              {text && (
                <button 
                  onClick={() => navigator.clipboard.writeText(text.replace(/<[^>]*>/g, ''))}
                  className="absolute bottom-6 right-6 px-4 py-2 bg-slate-700 hover:bg-cyan-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2"
                >
                  <span>📋</span> Copy Inclusive Text
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-800/30 border border-slate-800 rounded-2xl">
            <p className="text-3xl font-black text-cyan-400">40%</p>
            <p className="text-slate-500 text-sm font-bold uppercase">More Female Applicants</p>
          </div>
          <div className="p-6 bg-slate-800/30 border border-slate-800 rounded-2xl">
            <p className="text-3xl font-black text-blue-400">Zero</p>
            <p className="text-slate-500 text-sm font-bold uppercase">Psychological Barriers</p>
          </div>
          <div className="p-6 bg-slate-800/30 border border-slate-800 rounded-2xl">
            <p className="text-3xl font-black text-purple-400">100%</p>
            <p className="text-slate-500 text-sm font-bold uppercase">Skill-Based Focus</p>
          </div>
        </div>
      </div>
    </div>
  );
}
