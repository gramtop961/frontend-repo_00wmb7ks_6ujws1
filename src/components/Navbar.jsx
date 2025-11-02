import { useState } from 'react';
import { Rocket, ShoppingCart } from 'lucide-react';

export default function Navbar({ onNavigate }) {
  const [current, setCurrent] = useState('home');

  const go = (page) => {
    setCurrent(page);
    onNavigate?.(page);
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <button onClick={() => go('home')} className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white">
              <Rocket size={20} />
            </div>
            <span className="font-semibold text-gray-900">PromptMart</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => go('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                current === 'home' ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => go('market')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                current === 'market' ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Marketplace
            </button>
          </nav>

          <button className="ml-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
            <span className="ml-1 inline-flex items-center justify-center text-xs font-semibold h-5 w-5 rounded-full bg-indigo-600 text-white">0</span>
          </button>
        </div>

        <div className="md:hidden pb-3">
          <div className="flex gap-2">
            <button
              onClick={() => go('home')}
              className={`flex-1 px-3 py-2 rounded-md text-sm font-medium ${
                current === 'home' ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => go('market')}
              className={`flex-1 px-3 py-2 rounded-md text-sm font-medium ${
                current === 'market' ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Marketplace
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
