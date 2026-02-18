"use client";
import { useState } from 'react';
import { 
  Lightbulb, Info, Zap, Sparkles, Target, Users, Wand2, RefreshCw, CheckCircle, X
} from 'lucide-react';

export default function BiasScanner() {
  const [text, setText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeInsight, setActiveInsight] = useState<{word: string, suggestion: string, reason: string} | null>(null);
  
  const biasData: Record<string, {suggestion: string, reason: string}> = { 
    "aggressive": { suggestion: "driven", reason: "Focuses on results rather than gendered personality stereotypes." },
    "chairman": { suggestion: "chairperson", reason: "Neutralizes leadership titles to include all genders (SDG 5.5)." },
    "mankind": { suggestion: "humanity", reason: "Ensures the language acknowledges the whole population, not just men." },
    "manpower": { suggestion: "workforce", reason: "Reflects a modern, inclusive talent pool." },
    "ninja": { suggestion: "expert", reason: "Removes masculine-coded 'tech-bro' culture terms." },
    "rockstar": { suggestion: "top-tier talent", reason: "Focuses on skill rather than exclusionary labels." }
  };

  // INSTANT AI SOLUTION LOGIC
  const giveInstantSolution = () => {
    setIsProcessing(true);
    setTimeout(() => {
      let newText = text;
      Object.keys(biasData).forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        newText = newText.replace(regex, biasData[word].suggestion);
      });
      setText(newText);
      setIsProcessing(false);
    }, 800); // Small delay to feel like AI is "thinking"
  };

  const scanAndHighlight = () => {
    if (!text) return <span className="text-gray-400 italic">AI Analysis will appear here...</span>;
    let elements: React.ReactNode[] = [];
    const words = text.split(/(\s+)/); 

    words.forEach((word, i) => {
      const cleanWord = word.toLowerCase().trim().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
      if (biasData[cleanWord]) {
        elements.push(
          <button
            key={i}
            onClick={() => setActiveInsight({ word: cleanWord, ...biasData[cleanWord] })}
            className="bg-yellow-200 text-yellow-900 border-b-4 border-yellow-500 px-1 rounded-sm font-black hover:bg-pink-200 transition-all mx-0.5"
          >
            {word}
          </button>
        );
      } else {
        elements.push(word);
      }
    });
    return elements;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50 p-6 md:p-12 text-slate-800 font-sans relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-20 left-[2%] opacity-10 rotate-12"><Zap size={120} className="text-yellow-500" /></div>
      <div className="absolute bottom-10 right-[2%] opacity-10"><Sparkles size={150} className="text-pink-500" /></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white border border-violet-200 text-violet-600 text-[10px] font-black tracking-[0.3em] uppercase shadow-sm">
            Instant Equity Engine • SDG 5
          </div>
          <h1 className="text-7xl font-black text-slate-900 mb-6 tracking-tighter">
            <span className="underline decoration-violet-500 decoration-8 underline-offset-8">INCLUSION SCANNER</span>
          </h1>
          <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">
            Detect bias manually or use the <span className="text-violet-600 font-black">AI Magic Wand</span> for an instant inclusive rewrite.
          </p>
        </header>

        {/* MAIN INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div className="space-y-4 relative">
            <div className="flex justify-between items-center px-4">
               <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Your Input</label>
               <button 
                 onClick={giveInstantSolution}
                 disabled={!text || isProcessing}
                 className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-600 text-white px-6 py-2 rounded-full font-black text-xs hover:scale-105 transition-all shadow-lg disabled:opacity-50"
               >
                 {isProcessing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                 AI MAGIC FIX
               </button>
            </div>
            <textarea 
              value={text}
              className="w-full min-h-[450px] p-10 text-xl bg-white/80 backdrop-blur-md border-2 border-white rounded-[50px] shadow-2xl focus:ring-4 focus:ring-violet-200 transition-all outline-none"
              placeholder="Paste your text here... (e.g., We need a rockstar chairman)"
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="space-y-4">
             <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4">AI Inclusive Result</label>
             <div className="w-full min-h-[450px] p-10 bg-white/40 border-4 border-dashed border-violet-200 rounded-[50px] relative">
                <div className="text-2xl leading-relaxed font-medium text-slate-800">
                  {scanAndHighlight()}
                </div>

                {activeInsight && (
                  <div className="mt-10 bg-white border-2 border-violet-500 p-8 rounded-[40px] shadow-2xl relative animate-in slide-in-from-bottom">
                    <button onClick={() => setActiveInsight(null)} className="absolute top-6 right-6 text-slate-300"><X /></button>
                    <p className="text-2xl font-black text-slate-900 mb-2 italic">"{activeInsight.word}" → <span className="text-emerald-500">"{activeInsight.suggestion}"</span></p>
                    <p className="text-slate-600 font-medium">{activeInsight.reason}</p>
                  </div>
                )}
             </div>
          </div>
        </div>

        {/* GALLERIES & CTA */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400" className="h-64 w-full object-cover rounded-[40px] shadow-lg hover:scale-105 transition-transform" />
            <img src="https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=400" className="h-64 w-full object-cover rounded-[40px] shadow-lg hover:scale-105 transition-transform translate-y-6" />
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" className="h-64 w-full object-cover rounded-[40px] shadow-lg hover:scale-105 transition-transform" />
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400" className="h-64 w-full object-cover rounded-[40px] shadow-lg hover:scale-105 transition-transform translate-y-6" />
        </div>

        <div className="bg-slate-900 rounded-[60px] p-16 text-center text-white relative">
            <h3 className="text-4xl font-black mb-4 italic tracking-tighter">READY TO DEPLOY?</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto font-medium">Your text is now optimized for SDG 5 compliance. This promotes equality and boosts diverse applications by up to 40%.</p>
            <button className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black hover:bg-emerald-500 hover:text-white transition-all">
                Copy Inclusive Text
            </button>
        </div>
      </div>
    </div>
  );
}