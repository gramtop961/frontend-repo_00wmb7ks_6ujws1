import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-medium mb-4">
              <Star size={14} />
              Curated prompts from top creators
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Find the perfect prompt for any task
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Browse high-quality prompts for chat, coding, marketing, design, and more. Save time and get better results instantly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#catalog" className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors">Explore Catalog</a>
              <a href="#" className="px-5 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:border-gray-300 transition-colors">Sell Your Prompts</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 opacity-90" />
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-4">
              {['Code Review Pro', 'Marketing Angle Wizard', 'Logo Ideas Booster', 'Blog Outline Guru'].map((name, i) => (
                <div key={i} className="rounded-xl bg-white/80 backdrop-blur border border-white/60 shadow-sm p-4 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Popular</p>
                    <h3 className="font-semibold text-gray-900">{name}</h3>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={14} fill="#f59e0b" stroke="#f59e0b" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">$6.99</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
