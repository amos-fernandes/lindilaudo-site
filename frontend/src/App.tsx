import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Validation from './components/Validation';
import BusinessModel from './components/BusinessModel';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[128px] pointer-events-none" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Features />
        <Stats />
        <Validation />
        <BusinessModel />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-neon-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 LindiLaudo Shape Wave. Todos os direitos reservados.
          </p>
          <p className="text-neon-cyan/60 text-xs mt-2 font-mono">
            Powered by AI • Made in Brazil 🇧🇷
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
