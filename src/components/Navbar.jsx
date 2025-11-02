import { useState } from 'react';
import { Rocket, ShoppingCart, Search } from 'lucide-react';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white">
              <Rocket size={20} />
            </div>
            <span className="font-semibold text-gray-900">PromptMart</span>
          </a>

          <form onSubmit={handleSubmit} className="hidden md:flex items-center gap-2 w-full max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search prompts (e.g. marketing, code review, image ideas)"
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/70"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              Search
            </button>
          </form>

          <button className="ml-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
            <span className="ml-1 inline-flex items-center justify-center text-xs font-semibold h-5 w-5 rounded-full bg-indigo-600 text-white">0</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search prompts"
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/70"
            />
          </div>
        </form>
      </div>
    </header>
  );
}
