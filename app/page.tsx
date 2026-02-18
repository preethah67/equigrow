import Image from 'next/image';

export default function BiasScanner() {
  return (
    <div className="min-h-screen bg-pink-100 p-8 flex flex-col items-center">
      {/* Header Section */}
      <header className="bg-yellow-400 p-6 rounded-3xl shadow-lg border-4 border-pink-500 mb-10 w-full max-w-4xl text-center">
        <h1 className="text-4xl font-black text-pink-600 uppercase tracking-widest">
          🔍 Bias Scanner
        </h1>
      </header>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        <div className="flex-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border-l-8 border-yellow-400 shadow-md">
            <p className="text-xl font-bold text-gray-700">
              Identify unconscious bias in real-time. Upload your text or documents below to ensure equity in your growth.
            </p>
          </div>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full text-2xl transition-transform hover:scale-105 shadow-xl">
            Start Scanning
          </button>
        </div>

        {/* Animated Professional Image */}
        <div className="flex-1 flex justify-center">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndXNqZTh4ZDJueXp3bXo5bmh6amN6eDljeXp6eXp6eXp6eXp6ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjPXYYLtiHSS4/giphy.gif" 
            alt="Scanning Animation"
            className="rounded-3xl border-8 border-white shadow-2xl w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
}