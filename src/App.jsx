import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marketplace from './components/Marketplace';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('home'); // 'home' | 'market'

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onNavigate={setPage} />

      {page === 'home' ? (
        <>
          <Hero />
          {/* You can extend the home with more animated sections in the future */}
        </>
      ) : (
        <>
          <a id="marketplace" className="sr-only">Marketplace</a>
          <Marketplace />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
