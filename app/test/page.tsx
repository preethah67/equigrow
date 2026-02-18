export default function SkillTest() {
  return (
    <div className="min-h-screen bg-blue-50 p-8 flex flex-col items-center">
      <div className="bg-green-400 w-full max-w-4xl p-10 rounded-[40px] shadow-2xl border-b-8 border-blue-600 mb-10">
        <h1 className="text-5xl font-extrabold text-white text-center italic">
          Skill & Confidence Lab
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        <div className="bg-white p-8 rounded-3xl border-4 border-green-400">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" 
            className="rounded-xl mb-4" 
            alt="Skills" 
          />
          <h2 className="text-2xl font-bold text-blue-600">Technical Assessment</h2>
          <p className="mt-2">Measure your hard skills with our adaptive testing engine.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border-4 border-blue-400">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" 
            className="rounded-xl mb-4" 
            alt="Confidence" 
          />
          <h2 className="text-2xl font-bold text-green-600">Confidence Metric</h2>
          <p className="mt-2">Discover your inner strengths and leadership potential.</p>
        </div>
      </div>
    </div>
  );
}