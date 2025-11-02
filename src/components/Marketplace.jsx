import { useMemo, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import PromptList from './PromptList';

const CATEGORIES = [
  'All',
  'Coding',
  'Marketing',
  'Design',
  'Writing',
  'SEO',
  'Career',
];

export default function Marketplace() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const effectiveCategory = useMemo(() => (active === 'All' ? '' : active), [active]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Marketplace</h1>
              <p className="text-gray-600">Clean browsing with precise search and category filters</p>
            </div>
          </div>

          <div className="mt-6 grid lg:grid-cols-3 gap-4 items-end">
            <form onSubmit={onSubmit} className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="Search prompts (e.g. marketing, code review, image ideas)"
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                />
              </div>
            </form>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 bg-white">
                <Filter size={16} /> Filters
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-3 py-1.5 rounded-full border text-sm transition-colors ${
                  active === c
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <PromptList activeCategory={effectiveCategory} search={query} />
    </main>
  );
}
