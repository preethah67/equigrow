"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Trophy, Target, BarChart3, ShieldCheck, Globe2, 
  Briefcase, Star, Heart, ClipboardCheck, Sparkles, FileText, X, Printer
} from 'lucide-react';

export default function EqualityAssessment() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showReport, setShowReport] = useState(false);

  const questions = [
    { id: 0, q: "What is SDG 5's primary focus?", a: ["Gender Equality", "Climate Change", "Life Below Water"], correct: 0 },
    { id: 1, q: "By 2030, SDG 5 aims to ensure women's full participation in...", a: ["Economic Life", "Leadership & Decisions", "All of the above"], correct: 2 },
    { id: 2, q: "What is the 'Glass Ceiling'?", a: ["A luxury decor", "Invisible barrier to promotion", "A transparent office"], correct: 1 },
    { id: 3, q: "Equal pay for equal work is a key target of which goal?", a: ["SDG 5 & SDG 8", "SDG 1", "SDG 10"], correct: 0 },
    { id: 4, q: "What percentage of Fortune 500 CEOs are women (as of 2024)?", a: ["Approx 10%", "Approx 50%", "Approx 25%"], correct: 0 },
    { id: 5, q: "Unpaid care work (housework) is mostly done by...", a: ["Men", "Women", "Governments"], correct: 1 },
    { id: 6, q: "Inclusive leadership leads to how much higher innovation?", a: ["20%", "5%", "None"], correct: 0 },
    { id: 7, q: "Which term describes biases we aren't aware of?", a: ["Explicit Bias", "Unconscious Bias", "Normal Bias"], correct: 1 },
    { id: 8, q: "Mentorship is vital for SDG 5 because it...", a: ["Bypasses systemic gates", "Saves time", "Is a tradition"], correct: 0 },
    { id: 9, q: "What is 'Gender Mainstreaming'?", a: ["Fashion trends", "Integrating gender in policy", "Social media"], correct: 1 }
  ];

  const handleSelect = (qIdx: number, aIdx: number) => {
    setAnswers({ ...answers, [qIdx]: aIdx });
  };

  const calculateScore = () => {
    return Object.keys(answers).reduce((acc, qIdx) => {
      return acc + (answers[parseInt(qIdx)] === questions[parseInt(qIdx)].correct ? 1 : 0);
    }, 0);
  };

  const score = calculateScore();

  const getMentor = (score: number) => {
    if (score > 8) return { name: "Dr. Aris (Executive)", img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=200" };
    if (score > 5) return { name: "Sarah J. (Tech)", img: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?w=200" };
    return { name: "Elena R. (Policy)", img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?w=200" };
  };

  // FUNCTIONAL LINKS
  const handleDownloadPDF = () => window.print();
  const handleBookSession = () => router.push('/match');

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-50 via-blue-50 to-pink-50 p-6 md:p-12 text-slate-800 relative">
      
      {/* BACKGROUND DECOR (Hidden on Print) */}
      <div className="print:hidden absolute top-20 left-[2%] opacity-10 rotate-12 scale-150"><Globe2 size={120} className="text-blue-600" /></div>
      <div className="print:hidden absolute top-[40%] right-[-2%] opacity-10 -rotate-12"><ShieldCheck size={200} className="text-emerald-600" /></div>
      <div className="print:hidden absolute bottom-40 left-[5%] opacity-15"><Star size={80} className="text-yellow-600 fill-yellow-100" /></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {!showReport ? (
          <>
            <header className="text-center mb-16">
              <div className="inline-block px-5 py-2 mb-6 rounded-full bg-white border border-blue-200 text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase shadow-sm">
                 Leadership Assessment • SDG 5
              </div>
              <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                 <span className="underline decoration-blue-500 decoration-8 underline-offset-8 uppercase">Equity Audit</span>
              </h1>
              <p className="text-slate-500 text-xl font-medium max-w-xl mx-auto">
                 Complete all 10 modules below to generate your personalized professional gender-equity report.
              </p>
            </header>

            <div className="space-y-8 mb-20">
              {questions.map((q, qIdx) => (
                <div key={q.id} className="bg-white/70 backdrop-blur-md rounded-[40px] p-10 border border-white shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
                  <h3 className="text-2xl font-black text-slate-800 mb-8 flex gap-4">
                    <span className="text-blue-500">0{qIdx + 1}.</span> {q.q}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {q.a.map((opt, aIdx) => (
                      <button
                        key={aIdx}
                        onClick={() => handleSelect(qIdx, aIdx)}
                        className={`p-4 rounded-2xl font-bold text-sm transition-all border-2 ${
                          answers[qIdx] === aIdx 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105' 
                          : 'bg-white text-slate-600 border-slate-100 hover:border-blue-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex justify-center pt-10">
                <button 
                  onClick={() => setShowReport(true)}
                  disabled={Object.keys(answers).length < 10}
                  className="bg-slate-900 text-white px-16 py-6 rounded-full font-black text-lg hover:bg-blue-600 transition-all shadow-2xl disabled:opacity-30 flex items-center gap-3 group"
                >
                  <FileText className="group-hover:animate-bounce" /> GENERATE MY REPORT
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="animate-in fade-in zoom-in duration-500 py-10">
             {/* THE FINAL REPORT CARD */}
             <div className="bg-white rounded-[60px] p-16 shadow-2xl border-4 border-blue-50 text-center relative overflow-hidden print:border-0 print:shadow-none">
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 via-pink-500 to-emerald-500 print:bg-blue-600" />
                
                <Trophy size={80} className="mx-auto text-yellow-500 mb-6" />
                <h2 className="text-5xl font-black text-slate-900 mb-2 italic uppercase">Final Results</h2>
                <div className="text-7xl font-black text-blue-600 mb-8">{score * 10}%</div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
                   <div className="p-8 bg-slate-50 rounded-[40px] border border-slate-100">
                      <BarChart3 className="text-blue-600 mb-4" />
                      <h4 className="font-black uppercase text-xs tracking-widest text-slate-400 mb-2">Impact Analysis</h4>
                      <p className="text-slate-700 font-bold leading-relaxed">
                        {score > 7 
                          ? "Visionary Status: You possess a high level of gender-inclusive intelligence required for top-tier leadership." 
                          : "Rising Ally: You have a solid foundation but should focus more on systemic policy impacts."}
                      </p>
                   </div>
                   
                   <div className="p-8 bg-emerald-50 rounded-[40px] border border-emerald-100">
                      <Sparkles className="text-emerald-600 mb-4" />
                      <h4 className="font-black uppercase text-xs tracking-widest text-emerald-400 mb-2">Learning Path</h4>
                      <p className="text-slate-800 font-bold mb-4">Suggested Mentor to help you scale:</p>
                      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                        <img src={getMentor(score).img} className="w-14 h-14 rounded-xl object-cover" alt="Mentor" />
                        <div>
                           <p className="font-black text-slate-900">{getMentor(score).name}</p>
                           <button 
                            onClick={handleBookSession}
                            className="text-xs text-blue-600 font-black underline hover:text-pink-600 transition-colors"
                           >
                             Book Session
                           </button>
                        </div>
                      </div>
                   </div>
                </div>

                {/* FUNCTIONAL ACTION BUTTONS */}
                <div className="flex flex-wrap justify-center gap-4 print:hidden">
                  <button 
                    onClick={() => setShowReport(false)} 
                    className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black hover:bg-blue-600 transition-all shadow-xl"
                  >
                    Edit Answers
                  </button>
                  <button 
                    onClick={handleDownloadPDF}
                    className="bg-blue-100 text-blue-700 px-10 py-4 rounded-2xl font-black hover:bg-blue-200 transition-all flex items-center gap-2"
                  >
                    <Printer size={18} /> Download PDF Certificate
                  </button>
                </div>

                <div className="hidden print:block mt-20 pt-10 border-t border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-widest">
                  Official EquiGrow SDG 5 Achievement Certificate
                </div>
             </div>
          </div>
        )}

        {/* BOTTOM GALLERY (Hidden on Print) */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-40 hover:opacity-100 transition-opacity print:hidden">
           <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=300" className="h-40 w-full object-cover rounded-3xl" alt="Work" />
           <img src="https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?w=300" className="h-40 w-full object-cover rounded-3xl translate-y-4" alt="Leadership" />
           <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=300" className="h-40 w-full object-cover rounded-3xl" alt="Diversity" />
           <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=300" className="h-40 w-full object-cover rounded-3xl translate-y-4" alt="Team" />
        </div>
      </div>
    </div>
  );
}git add .