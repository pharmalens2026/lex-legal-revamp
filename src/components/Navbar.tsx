import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Gavel } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Firm Profile' },
    { id: 'practice-areas', label: 'Expertise' },
    { id: 'team', label: 'Our People' },
    { id: 'blog', label: 'Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        isScrolled ? 'bg-[#0A1128]/95 backdrop-blur-md shadow-2xl py-3 sm:py-4' : 'bg-transparent py-5 sm:py-8'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 sm:gap-4 cursor-pointer group"
          onClick={() => {
            setCurrentPage('home');
            window.scrollTo(0, 0);
          }}
        >
          <div className="bg-[#D4AF37] p-2 sm:p-2.5 transition-all duration-700 group-hover:bg-white group-hover:scale-105">
            <Gavel className="text-[#0A1128] w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel font-bold text-base sm:text-lg leading-none text-white tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              Otieno Justus
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.4em] sm:tracking-[0.5em] font-medium text-[#D4AF37] mt-1 sm:mt-1.5 opacity-80">
              & Co Advocates
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-14">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                window.scrollTo(0, 0);
              }}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-all duration-500 hover:text-[#D4AF37] relative group cursor-pointer ${
                currentPage === link.id ? 'text-[#D4AF37]' : 'text-white/60'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#D4AF37] transition-all duration-500 ease-out ${currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          <button 
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo(0, 0);
            }}
            className="btn-luxury border border-[#D4AF37] text-[#D4AF37] px-6 xl:px-10 py-3 xl:py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all duration-700 whitespace-nowrap"
          >
            CONSULTATION
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 transition-transform hover:scale-110 active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 lg:hidden bg-[#0A1128] z-[110] flex flex-col p-6 sm:p-10 pt-24 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 sm:space-y-10">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => {
                    setCurrentPage(link.id);
                    setIsMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`text-3xl sm:text-4xl font-serif text-left transition-all ${
                    currentPage === link.id ? 'text-[#D4AF37] pl-4 sm:pl-6 border-l-2 border-[#D4AF37]' : 'text-white/80'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            
            <div className="mt-12 sm:mt-auto space-y-8 sm:space-y-10 border-t border-white/5 pt-10 sm:pt-12 pb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-2">
                  <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">Phone</p>
                  <p className="text-white text-xs sm:text-sm font-medium">+254 762 502510</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">Email</p>
                  <p className="text-white text-xs sm:text-sm font-medium">info@otienojustus.com</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setCurrentPage('contact');
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="bg-[#D4AF37] text-[#0A1128] w-full py-5 sm:py-6 font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px]"
              >
                REQUEST CONSULTATION
              </button>
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 sm:top-8 right-6 sm:right-8 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-7 h-7 sm:w-8 sm:h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};