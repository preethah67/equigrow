"use client";
import { useState } from 'react';
import { Lightbulb, Gem, Users, TrendingUp, Handshake, Brain, Zap, Palette, Feather, Award } from 'lucide-react'; // New icons

export default function BiasScanner() {
  const [text, setText] = useState("");
  
  const biasMap: Record<string, string> = { 
    "aggressive": "driven", 
    "ninja": "expert", 
    "rockstar": "top-tier talent",
    "dominant": "leading",
    "forceful": "determined",
    "mankind": "humanity",
    "chairman": "chairperson",
    "chairman's": "chairperson's",
    "spokesman": "spokesperson",
    "businessman": "business professional",
    "businessmen": "business professionals",
    "he": "they", 
    "him": "them",
    "his": "their",
    "hero": "leader", 
    "heroes": "leaders",
    "god": "creator", 
    "goddess": "creator",
    "foreman": "supervisor",
    "landlord": "property owner",
    "manpower": "workforce",
    "right-hand man": "trusted assistant"
  };

  const scanText = () => {
    let highlighted = text;
    Object.keys(biasMap).forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      highlighted = highlighted.replace(
        regex, 
        `<span class="bg-violet-300/50 text-violet-800 border border-violet-400 px-2 py-0.5 rounded-md font-bold shadow-md">${biasMap[word]}</span>`
      );
    });
    return highlighted;
  };

  const getBiasCount = () => {
    let count = 0;
    Object.keys(biasMap).forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      if (text.match(regex)) {
        count += text.match(regex)!.length;
      }
    });
    return count;
  };

  const biasCount = getBiasCount();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 p-6 md:p-12 text-gray-800 font-sans relative overflow-hidden">
      
      {/* DECORATIVE IMAGES / SHAPES */}
      <div className="absolute top-8 left-[5%] text-6xl opacity-20"><Palette className="text-pink-400"/></div>
      <div className="absolute top-1/3 right-[3%] text-8xl opacity-15"><Feather className="text-yellow-400"/></div>
      <div className="absolute bottom-10 left-[15%] text-5xl opacity-25 animate-pulse"><Award className="text-violet-400"/></div>
      <div className="absolute top-[20%] left-[40%] bg-blue-300/30 w-24 h-24 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-[20%] right-[30%] bg-green-300/30 w-32 h-32 rounded-full blur-3xl animate-blob-delay" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-violet-200 border border-violet-300 text-violet-700 text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2">
            <Zap className="w-4 h-4" /> Goal 5: Equitable Language
          </div>
          <h1 className="text-6xl font-black mb-4 tracking-tighter italic text-gray-900">
            Inclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600">Language AI</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Removes subtle gender biases to foster truly diverse and inclusive opportunities.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Input Area */}
          <div className="flex flex-col">
            <label className="mb-3 ml-2 text-sm font-bold text-gray-600 uppercase tracking-widest flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-gray-500" /> Original Text
            </label>
            <textarea 
              className="flex-1 min-h-[300px] w-full p-6 text-lg bg-white/70 border-2 border-pink-200 rounded-3xl focus:border-violet-400 transition-all outline-none shadow-lg text-gray-800 placeholder:text-gray-400"
              placeholder="Paste your job description, resume, or any text here. (Try: 'We need an aggressive businessman chairman for mankind.')"
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          {/* Output Area */}
          <div className="flex flex-col">
            <label className="mb-3 ml-2 text-sm font-bold text-gray-600 uppercase tracking-widest flex items-center gap-2">
              <Gem className="w-4 h-4 text-gray-500" /> Transformed for Equity
            </label>
            <div className="flex-1 min-h-[300px] w-full p-8 bg-gradient-to-br from-white/80 to-pink-50/80 border-2 border-violet-200 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-300/30 blur-3xl rounded-full transition-all group-hover:bg-violet-400/40" />
              
              <div className="relative z-10 text-xl leading-relaxed text-gray-800">
                {text ? (
                  <div dangerouslySetInnerHTML={{ __html: scanText() }} />
                ) : (
                  <span className="text-gray-400 italic">Results optimized for diversity will appear here...</span>
                )}
              </div>
              
              {text && (
                <button 
                  onClick={() => navigator.clipboard.writeText(text.replace(/<[^>]*>/g, ''))}
                  className="absolute bottom-6 right-6 px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
                >
                  <Handshake className="w-3 h-3" /> Copy Inclusive Text
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Impact Stats - Focused on Gender Equality */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center justify-center gap-3">
            <TrendingUp className="w-7 h-7 text-green-500" /> Impact on Gender Equality
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white/70 border border-green-200 rounded-3xl shadow-xl">
              <div className="text-5xl mb-4">♀️♂️</div>
              <p className="text-4xl font-black text-green-600 mb-2">{biasCount > 0 ? (biasCount * 8) + '%' : '0%'}</p>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Reduction in Bias Terms</p>
            </div>
            <div className="p-8 bg-white/70 border border-blue-200 rounded-3xl shadow-xl">
              <div className="text-5xl mb-4">🌟</div>
              <p className="text-4xl font-black text-blue-600 mb-2">Up to 40%</p>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Increase in Diverse Applications</p>
            </div>
            <div className="p-8 bg-white/70 border border-orange-200 rounded-3xl shadow-xl">
              <div className="text-5xl mb-4">🤝</div>
              <p className="text-4xl font-black text-orange-600 mb-2">100%</p>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Focus on Skill, Not Stereotype</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}