"use client";
import { useState } from 'react';

export default function ConfidenceTest() {
  const [confidence, setConfidence] = useState(50);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    { id: 1, q: "If a set of 3 pens costs ₹30, how much do 12 pens cost?", a: "₹120", options: ["₹90", "₹120", "₹150"] },
    { id: 2, q: "Which number comes next: 2, 4, 8, 16, ...?", a: "32", options: ["24", "32", "64"] },
    { id: 3, q: "A recruiter spends 6 seconds on a resume. How many resumes in 1 minute?", a: "10", options: ["10", "60", "6"] }
  ];

  const handleAnswer = (qId: number, val: string) => {
    setAnswers({ ...answers, [qId]: val });
    if (Object.keys(answers).length === questions.length - 1) setShowResult(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => { if (answers[q.id] === q.a) correct++; });
    return (correct / questions.length) * 100;
  };

  const score = calculateScore();

  return (
    <div className="min-h-screen bg-[#0f172a] p-6 md:p-12 text-white font-sans">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
            CONFIDENCE CHECK
          </h1>
          <p className="text-slate-400 text-lg">Measure your skills against your self-perception.</p>
        </header>

        {/* Phase 1: Confidence Slider */}
        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl mb-8 shadow-2xl backdrop-blur-sm">
          <label className="block text-xl font-bold mb-6 text-purple-300">
            How confident are you in your logical skills? <span className="text-white ml-2 text-3xl">{confidence}%</span>
          </label>
          <input 
            type="range" min="0" max="100" value={confidence}
            onChange={(e) => setConfidence(Number(e.target.value))}
            className="w-full h-4 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-2 font-bold uppercase tracking-widest">
            <span>Low Confidence</span>
            <span>Unstoppable</span>
          </div>
        </div>

        {/* Phase 2: Skill Questions */}
        <div className="space-y-6">
          {questions.map((q, index) => (
            <div key={q.id} className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl transition-all hover:border-purple-500">
              <p className="text-lg font-medium mb-4 text-slate-200">
                <span className="text-purple-500 mr-2 font-black">0{index + 1}.</span> {q.q}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {q.options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(q.id, opt)}
                    className={`p-3 rounded-xl border-2 transition-all font-bold ${
                      answers[q.id] === opt 
                      ? 'border-purple-500 bg-purple-500/20 text-white' 
                      : 'border-slate-700 bg-slate-900 text-slate-400 hover:border-slate-500'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Phase 3: The Insight (Result) */}
        {showResult && (
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-700 shadow-[0_0_50px_rgba(168,85,247,0.4)] animate-in fade-in zoom-in duration-500">
            <h2 className="text-3xl font-black mb-2 italic">THE EQUI-GROW INSIGHT</h2>
            <div className="flex justify-between items-end border-b border-purple-400/30 pb-4 mb-4">
              <div>
                <p className="text-purple-200 text-sm uppercase font-bold tracking-tighter">Your Actual Skill</p>
                <p className="text-5xl font-black">{score.toFixed(0)}%</p>
              </div>
              <div className="text-right">
                <p className="text-purple-200 text-sm uppercase font-bold tracking-tighter">Your Confidence</p>
                <p className="text-5xl font-black text-purple-300">{confidence}%</p>
              </div>
            </div>
            <p className="text-xl font-medium leading-relaxed">
              {confidence < score 
                ? "🚀 Impact: You are underselling yourself! You scored higher than you expected. You should apply for 'Stretch' roles immediately." 
                : "⚖️ Impact: Your confidence is perfectly aligned with your skills. Keep building that technical foundation!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}