import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { PracticeAreas } from './pages/PracticeAreas';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { Toaster } from './components/ui/sonner';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'about': return <About onNavigate={setCurrentPage} />;
      case 'practice-areas': return <PracticeAreas onNavigate={setCurrentPage} />;
      case 'team': return <Team onNavigate={setCurrentPage} />;
      case 'contact': return <Contact />;
      case 'blog': return <Blog />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans selection:bg-[#D4AF37] selection:text-[#0A1128]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Cinzel:wght@400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        :root {
          --primary-navy: #0A1128;
          --accent-gold: #D4AF37;
          --charcoal: #1A1A1A;
          --off-white: #F8F9FA;
        }

        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          width: 100%;
          background-color: white;
        }
        
        h1, h2, h3, h4, .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .font-cinzel {
          font-family: 'Cinzel', serif;
        }

        .btn-luxury {
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .btn-luxury::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 1;
        }

        .btn-luxury:hover::before {
          left: 0;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="relative overflow-x-hidden min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      <WhatsAppButton />
      <Toaster position="top-center" expand={false} richColors />
    </div>
  );
}

export default App;