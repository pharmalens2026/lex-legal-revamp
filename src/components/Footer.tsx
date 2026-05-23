import React from 'react';
import { Gavel, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp, Send } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-[#0A1128] pt-12 md:pt-24 pb-8 md:pb-12 text-white border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 sm:gap-14 lg:gap-16 mb-12 sm:mb-20 items-start">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-10 group">
              <div className="bg-[#D4AF37] p-2.5 sm:p-3 transition-transform group-hover:rotate-12">
                <Gavel className="text-[#0A1128] w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel font-bold text-xl sm:text-2xl tracking-[0.2em] text-white leading-none uppercase">
                  Otieno Justus
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] font-medium text-[#D4AF37] mt-1.5 sm:mt-2 opacity-80">
                  & Co Advocates
                </span>
              </div>
            </div>
            <p className="text-white/40 mb-8 sm:mb-12 leading-relaxed text-base sm:text-lg font-light max-w-md">
              Elevating legal standards in Nairobi through elite counsel, strategic solutions, and an unwavering commitment to excellence since 2009.
            </p>
            <div className="flex gap-8">
              {[Linkedin, Facebook, Twitter, Instagram].map((Icon, i) => (
                <a 
                  key={i}
                  href="#"
                  className="text-white/20 hover:text-[#D4AF37] transition-all duration-500 scale-110 hover:scale-150"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-8 sm:mb-10 text-[#D4AF37]">Practice</h4>
            <ul className="space-y-4 sm:space-y-5">
              {['Home', 'Firm Profile', 'Expertise', 'Our People', 'Insights', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      const id = item === 'Firm Profile' ? 'about' : item === 'Expertise' ? 'practice-areas' : item === 'Our People' ? 'team' : item.toLowerCase().replace(' ', '-');
                      setCurrentPage(id);
                      window.scrollTo(0, 0);
                    }}
                    className="text-white/30 hover:text-[#D4AF37] transition-all duration-500 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] cursor-pointer text-left block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-5">
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-8 sm:mb-10 text-[#D4AF37]">Chambers</h4>
            <div className="space-y-6 sm:space-y-10">
              <div className="flex items-start gap-6 sm:gap-8">
                <MapPin className="text-[#D4AF37] w-5 h-5 sm:w-6 sm:h-6 mt-1 shrink-0" strokeWidth={1} />
                <p className="text-white/40 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed">
                  Viewpark Towers, 15th Floor, <br />
                  Utalii Lane, Nairobi, Kenya
                </p>
              </div>
              <div className="flex items-center gap-6 sm:gap-8">
                <Phone className="text-[#D4AF37] w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={1} />
                <p className="text-white/40 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">+254 762 502510</p>
              </div>
              <div className="flex items-center gap-6 sm:gap-8">
                <Mail className="text-[#D4AF37] w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={1} />
                <p className="text-white/40 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">info@otienojustus.com</p>
              </div>
            </div>

            <form className="mt-10 sm:mt-16 flex border-b border-white/10 pb-4 group">
              <input 
                type="email" 
                placeholder="SUBSCRIBE TO LEGAL INSIGHTS" 
                className="bg-transparent w-full outline-none text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] placeholder:text-white/20 text-[#D4AF37]"
              />
              <button className="text-[#D4AF37] hover:text-white transition-all duration-500 cursor-pointer">
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 sm:pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10">
          <p className="text-white/10 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-center md:text-left">
            &copy; {new Date().getFullYear()} Otieno Justus & Co Advocates. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex gap-8 text-white/10 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em]">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Legal Notice</a>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 text-[#D4AF37] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] group cursor-pointer hover:text-white transition-colors"
            >
              <span className="hidden xs:inline">BACK TO TOP</span> <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-y-2 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};