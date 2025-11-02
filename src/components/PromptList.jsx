import { useMemo, useState } from 'react';
import { Star, Tag } from 'lucide-react';

const SAMPLE_PROMPTS = [
  {
    id: 'p1',
    title: 'Code Review Pro',
    description: 'Get structured, actionable feedback on code snippets with complexity analysis and refactoring tips.',
    categories: ['Coding', 'Engineering'],
    price: 6.99,
    rating: 4.9,
    ratingsCount: 241,
    tags: ['JavaScript', 'Python', 'Best Practices']
  },
  {
    id: 'p2',
    title: 'Marketing Angle Wizard',
    description: 'Generate 20+ unique angles, hooks, and CTAs tailored to your product and audience.',
    categories: ['Marketing', 'Copywriting'],
    price: 7.99,
    rating: 4.8,
    ratingsCount: 182,
    tags: ['Ads', 'Emails', 'Landing Pages']
  },
  {
    id: 'p3',
    title: 'Logo Ideas Booster',
    description: 'Creative visual directions and prompt chains for unique logo concepts ready for AI image tools.',
    categories: ['Design', 'Branding'],
    price: 5.99,
    rating: 4.7,
    ratingsCount: 96,
    tags: ['Midjourney', 'Brand Kit', 'Moodboards']
  },
  {
    id: 'p4',
    title: 'Blog Outline Guru',
    description: 'SEO-aware outlines with section objectives, FAQs, and internal linking ideas.',
    categories: ['Writing', 'SEO'],
    price: 4.99,
    rating: 4.8,
    ratingsCount: 128,
    tags: ['Content', 'Ideas', 'SERP']
  },
  {
    id: 'p5',
    title: 'Interview Coach',
    description: 'Targeted interview prep with behavioral questions and role-specific scenarios.',
    categories: ['Career', 'Coaching'],
    price: 6.49,
    rating: 4.9,
    ratingsCount: 77,
    tags: ['FAANG', 'Behavioral', 'STAR']
  },
];

function Rating({ value }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill={i < full ? '#f59e0b' : 'none'} stroke="#f59e0b" />
      ))}
    </div>
  );
}

export default function PromptList({ activeCategory, search }) {
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = (search || '').trim().toLowerCase();
    return SAMPLE_PROMPTS.filter((p) => {
      const inCategory = !activeCategory || p.categories.includes(activeCategory);
      const inQuery = !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return inCategory && inQuery;
    });
  }, [activeCategory, search]);

  const handleBuy = (prompt) => {
    setSelected(prompt.id);
    setTimeout(() => setSelected(null), 1000);
    alert(`Added "${prompt.title}" to cart. Checkout coming soon!`);
  };

  return (
    <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Featured Prompts</h2>
          <p className="text-gray-600">Hand-picked prompts that deliver great results</p>
        </div>
        {activeCategory && (
          <div className="text-sm text-gray-500">Filtering by <span className="font-medium text-gray-700">{activeCategory}</span></div>
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <article key={p.id} className="group h-full rounded-xl border border-gray-200 hover:border-gray-300 bg-white shadow-sm hover:shadow-md transition-all overflow-hidden">
            <div className="p-5 flex flex-col h-full">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{p.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Rating value={p.rating} />
                <span className="text-xs text-gray-500">{p.ratingsCount.toLocaleString()} reviews</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                    <Tag size={12} /> {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">${p.price.toFixed(2)}</span>
                <button
                  onClick={() => handleBuy(p)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium text-white transition-colors ${selected === p.id ? 'bg-emerald-600' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                >
                  {selected === p.id ? 'Added!' : 'Buy Prompt'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600">No prompts match your search. Try different keywords or categories.</p>
        </div>
      )}
    </section>
  );
}
