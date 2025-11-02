import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PromptList from './components/PromptList'
import Footer from './components/Footer'

const CATEGORIES = [
  'All',
  'Coding',
  'Marketing',
  'Design',
  'Writing',
  'SEO',
  'Career',
]

function App() {
  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')

  const effectiveCategory = useMemo(() => (active === 'All' ? '' : active), [active])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onSearch={setSearch} />
      <Hero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-700">Browse by category</h3>
          {search && (
            <button
              onClick={() => setSearch('')}
              className="text-xs text-gray-500 hover:text-gray-700 underline"
            >
              Clear search
            </button>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
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
      </section>

      <PromptList activeCategory={effectiveCategory} search={search} />
      <Footer />
    </div>
  )
}

export default App
