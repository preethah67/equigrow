export default function MentorMatch() {
  return (
    <div className="min-h-screen bg-violet-100 p-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-violet-500 via-red-400 to-orange-400 p-1 rounded-3xl shadow-2xl">
        <div className="bg-white rounded-[22px] p-8 text-center">
          <h1 className="text-4xl font-black text-violet-700 mb-4">Find Your Perfect Match</h1>
          <p className="text-gray-600 font-medium">Connecting you with industry leaders across the globe.</p>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <button className="relative px-12 py-6 bg-white rounded-full leading-none flex items-center divide-x divide-gray-200">
            <span className="pr-6 text-violet-600 font-bold text-xl uppercase">Start Matching Now</span>
            <span className="pl-6 text-orange-500 font-bold text-xl">🚀</span>
          </button>
        </div>
      </div>

      <div className="mt-16 flex justify-around opacity-80">
         <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnAxaG43bmZ4NjZ3Mmx6eHB6Znl6eXp6eXp6eXp6eXp6eXp6ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlMG1WfHnZaX6qk/giphy.gif" width="150" alt="icon" />
         <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDY5NW0ybmZ4NjZ3Mmx6eHB6Znl6eXp6eXp6eXp6eXp6eXp6ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKVUn7iM8FMEU24/giphy.gif" width="150" alt="icon" />
      </div>
    </div>
  );
}