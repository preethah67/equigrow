"use client";
import { useState } from 'react';
import { Award, Info, AlertCircle, CheckCircle2, ArrowRight, Scale, Globe, Landmark, Users2, Sparkles, Lightbulb, TrendingUp } from 'lucide-react';

export default function ConfidenceTest() {
  const [confidence, setConfidence] = useState(50);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    { 
      id: 1, 
      q: "Globally, how much less do women earn for every $1 men earn when including bonuses and total compensation?", 
      a: "77 cents", 
      options: ["92 cents", "85 cents", "77 cents"] 
    },
    { 
      id: 2, 
      q: "According to UN Women, what is the estimated number of years it will take to achieve full legal equality between genders at the current rate of progress?", 
      a: "286 years", 
      options: ["50 years", "125 years", "286 years"] 
    },
    { 
      id: 3, 
      q: "In 'Blind Audition' studies, how much did the probability of a female candidate being hired increase when her gender was hidden?", 
      a: "30%", 
      options: ["10%", "30%", "50%"] 
    },
    { 
      id: 4, 
      q: "What percentage of Fortune 500 CEOs are women as of 2024 (reflecting the 'Glass Ceiling' effect)?", 
      a: "Approx. 10%", 
      options: ["Approx. 10%", "Approx. 25%", "Approx. 40%"] 
    }
  ];

  const handleAnswer = (qId: number, val: string) => {
    const newAnswers = { ...answers, [qId]: val };
    setAnswers(newAnswers);
    if (Object.keys(newAnswers).length === questions.length) setShowResult(true);
  };

  const score = (questions.filter(q => answers[q.id] === q.a).length / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-green-100 to-blue-100 p-6 md:p-12 text-gray-800 font-sans relative overflow-hidden">
      
      {/* DECORATIVE FLOATING IMAGES/ICONS (Randomly Positioned) */}
      <div className="absolute top-10 right-[5%] text-6xl opacity-20"><Globe className="text-blue-500" /></div>
      <div className="absolute top-1/2 left-[2%] text-8xl opacity-15"><Lightbulb className="text-yellow-500" /></div>
      <div className="absolute bottom-10 right-[10%] text-5xl opacity-25 animate-pulse"><TrendingUp className="text-green-500" /></div>
      <div className="absolute top-[10%] left-[30%] bg-pink-300/30 w-28 h-28 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-[15%] right-[25%] bg-orange-300/30 w-36 h-36 rounded-full blur-3xl animate-blob-delay" />

      <div className="max-w-3xl mx-auto relative z-10">
        <header className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-200 border border-blue-300 text-blue-700 text-xs font-black tracking-widest uppercase">
            Goal 5: Gender Equality Assessment
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-4 italic">
            EQUITY <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">LITERACY</span>
          </h1>
          <p className="text-gray-600 text-lg">Knowledge is the first step toward dismantling systemic bias. How much do you know about the global gender gap?</p>
        </header>

        {/* Confidence Slider */}
        <div className="bg-white/70 border border-blue-200 p-8 rounded-[40px] mb-12 shadow-2xl backdrop-blur-md relative group">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-2xl"><Users2 className="text-blue-600" /></div>
                <label className="text-xl font-bold text-gray-700">
                    Self-Perception: <span className="text-blue-600 text-3xl">{confidence}%</span>
                </label>
            </div>
          <input 
            type="range" min="0" max="100" value={confidence}
            onChange={(e) => setConfidence(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-[10px] text-gray-500 mt-4 font-black uppercase tracking-[0.3em]">
            <span>Systemic Doubt</span>
            <span>Unbiased Power</span>
          </div>
        </div>

        {/* Skill Questions */}
        <div className="space-y-6">
          {questions.map((q, index) => (
            <div key={q.id} className="bg-white/60 border border-green-200 p-8 rounded-3xl transition-all hover:border-blue-300 hover:bg-white/70 group relative overflow-hidden">
               <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Scale size={100} className="text-green-400"/>
               </div>
              <p className="text-xl font-bold mb-6 leading-snug text-gray-800">
                <span className="text-green-600 mr-3 text-sm font-black">QUESTION 0{index + 1}</span><br/>
                {q.q}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {q.options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(q.id, opt)}
                    className={`p-4 rounded-2xl border-2 transition-all font-bold text-sm ${
                      answers[q.id] === opt 
                      ? 'border-blue-500 bg-blue-500/10 text-blue-800 shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                      : 'border-yellow-200 bg-yellow-50/50 text-gray-600 hover:border-blue-300 hover:text-blue-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* The SDG 5 Result Insight */}
        {showResult && (
          <div className="mt-16 animate-in zoom-in-95 duration-700">
            <div className="p-10 rounded-[50px] bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 shadow-[0_0_60px_rgba(34,197,94,0.3)] border border-white/30 relative overflow-hidden">
              <h2 className="text-4xl font-black mb-8 italic flex items-center gap-4 text-white">
                <Award className="w-10 h-10 text-pink-400 animate-bounce" /> LITERACY SCORE: {score.toFixed(0)}%
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/20 p-6 rounded-3xl backdrop-blur-md text-white">
                   <p className="font-bold text-blue-200 mb-2 flex items-center gap-2"><Scale size={16}/> The Reality Check</p>
                   <p className="text-sm leading-relaxed">
                     {score >= 75 
                        ? "You have a high level of awareness regarding systemic gender barriers. This knowledge is your greatest tool for advocacy." 
                        : "You're beginning to see the gaps. SDG 5 requires us all to understand these statistics to drive real policy change."}
                   </p>
                </div>
                <div className="bg-white/20 p-6 rounded-3xl backdrop-blur-md text-white">
                   <p className="font-bold text-blue-200 mb-2 flex items-center gap-2"><Users2 size={16}/> Confidence Match</p>
                   <p className="text-sm leading-relaxed">
                     Your self-perceived ability was {confidence}%. In many corporate structures, women's confidence is suppressed despite high performance. 
                     {confidence < score ? " You are more capable than you feel!" : " Your confidence is a superpower."}
                   </p>
                </div>
              </div>

              <div className="bg-black/10 p-6 rounded-3xl border border-white/10">
                <p className="text-xs uppercase font-black text-blue-200 mb-2">Next Action for SDG 5</p>
                <p className="text-lg font-bold text-white">Use these facts to challenge bias in your next workplace or classroom discussion.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}