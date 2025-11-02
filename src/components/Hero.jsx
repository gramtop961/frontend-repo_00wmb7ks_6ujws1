import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Wand2, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-white">
      {/* Soft animated video background */}
      <div className="absolute inset-0 opacity-70">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1200&auto=format&fit=crop"
        >
          <source src="https://cdn.coverr.co/videos/coverr-abstract-particles-4569/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Warm gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),rgba(249,115,22,0.15)_60%,transparent_70%)] blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-amber-700 text-xs font-medium mb-4"
            >
              <Star size={14} />
              Hand-picked prompts that feel magical
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight"
            >
              Create more with warm, inspiring AI prompts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-gray-700"
            >
              A cozy home for creators. Explore animated, living examples and discover prompts that spark better work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a href="#marketplace" className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors inline-flex items-center gap-2">
                <Wand2 size={18} /> Explore Marketplace
              </a>
              <a href="#learn-more" className="px-5 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:border-gray-300 transition-colors">
                Learn more
              </a>
            </motion.div>

            {/* Floating badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                'Marketing Boosters',
                'Coding Assist',
                'Design Spark',
                'Writing Flow',
              ].map((label, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                  className="px-3 py-1.5 rounded-full bg-white/70 backdrop-blur border border-white/60 shadow-sm text-sm text-gray-700"
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Spline canvas */}
          <div className="relative h-[460px] sm:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden shadow-lg bg-white/60">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
