import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Target, Users, Clock, Globe } from 'lucide-react';

const IMAGES = {
  office: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/about-office-d25bdb0a-1778506305111.webp',
  skyline: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/hero-architecture-f1810037-1778506297354.webp',
  team: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/team-action-ec7f48af-1778506298535.webp'
};

export const About: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const values = [
    { title: "Integrity", desc: "Unwavering commitment to the highest ethical standards and total transparency.", icon: Shield },
    { title: "Excellence", desc: "Meticulous attention to detail to deliver superior legal service and results.", icon: Award },
    { title: "Innovation", desc: "Embracing modern legal technologies to provide creative, efficient solutions.", icon: Target },
    { title: "Client Focus", desc: "Tailoring our strategies to the specific business and personal goals of our clients.", icon: Users },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden bg-[#0A1128]">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.skyline} 
            className="w-full h-full object-cover grayscale opacity-30" 
            alt="Nairobi Architecture" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/80 via-transparent to-[#0A1128]"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-4xl"
          >
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.5em] text-[10px] sm:text-[11px] mb-6 sm:mb-8">Firm Profile</h4>
            <h1 className="text-4xl sm:text-6xl md:text-8xl text-white font-serif font-bold mb-8 sm:mb-10 leading-tight tracking-tight">Defining <br /><span className="italic font-light text-[#D4AF37]">Excellence.</span></h1>
            <div className="w-24 h-px bg-[#D4AF37]"></div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-[64px] font-serif font-bold text-[#0A1128] mb-10 sm:mb-12 leading-tight tracking-tight">A Premier <br /> Legal Practice.</h2>
              <div className="space-y-8 sm:space-y-10">
                <p className="text-xl sm:text-2xl text-[#0A1128] font-serif leading-relaxed italic border-l-[3px] border-[#D4AF37] pl-6 sm:pl-10 font-light">
                  "Founded on the principles of justice and professional excellence, Otieno Justus & Co Advocates is dedicated to protecting the interests of our clients with unwavering precision."
                </p>
                <div className="space-y-6 sm:space-y-8 text-slate-500 text-base sm:text-lg leading-relaxed font-light">
                  <p>
                    Headquartered in Nairobi's Viewpark Towers, our firm serves a distinguished portfolio of clients ranging from multinational corporations and financial institutions to government agencies and private individuals.
                  </p>
                  <p>
                    Our advocates bring collective decades of experience across complex commercial litigation, high-value real estate transactions, and sophisticated regulatory advisory. We build strategic partnerships that drive meaningful results.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-8 lg:pt-12">
              <div className="space-y-4 sm:space-y-8">
                <div className="aspect-[4/5] overflow-hidden grayscale bg-slate-100 shadow-2xl">
                  <img src={IMAGES.office} className="w-full h-full object-cover hover:grayscale-0 transition-all duration-1000" alt="Office Interior" />
                </div>
                <div className="bg-[#0A1128] p-8 sm:p-10 text-white text-center shadow-xl">
                  <Clock className="mx-auto text-[#D4AF37] mb-4 sm:mb-5 w-8 h-8 sm:w-10 sm:h-10" strokeWidth={1} />
                  <div className="text-4xl sm:text-5xl font-bold font-serif mb-2 tracking-tighter">24h</div>
                  <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/40 font-bold">Response Protocol</p>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-8 pt-12 sm:pt-20">
                <div className="bg-[#D4AF37] p-8 sm:p-10 text-[#0A1128] text-center shadow-xl">
                  <Globe className="mx-auto mb-4 sm:mb-5 w-8 h-8 sm:w-10 sm:h-10" strokeWidth={1} />
                  <div className="text-3xl sm:text-4xl font-bold font-serif mb-2 tracking-tighter">Global</div>
                  <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#0A1128]/60 font-bold">Standards</p>
                </div>
                <div className="aspect-[4/5] overflow-hidden grayscale bg-slate-100 shadow-2xl">
                  <img src={IMAGES.team} className="w-full h-full object-cover hover:grayscale-0 transition-all duration-1000" alt="Team Synergy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#0A1128] text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center mb-16 sm:mb-24">
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] mb-8 sm:mb-10">Core Principles</h4>
            <h2 className="text-3xl sm:text-5xl lg:text-[72px] font-serif font-bold mb-10 sm:mb-12 leading-tight tracking-tight">The Foundation <br /> of Our Practice.</h2>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  className="group text-center p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-700"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 border border-white/10 flex items-center justify-center text-[#D4AF37] mb-8 sm:mb-10 mx-auto group-hover:bg-[#D4AF37] group-hover:text-[#0A1128] transition-all duration-700 ease-out">
                    <IconComp className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-6 tracking-tight">{v.title}</h3>
                  <p className="text-white/40 leading-relaxed text-xs sm:text-sm font-light">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-[64px] font-serif font-bold text-[#0A1128] mb-8 sm:mb-10 leading-tight tracking-tight">Our Evolution.</h2>
            <p className="text-lg sm:text-xl text-slate-500 font-light leading-relaxed">A journey defined by strategic growth and uncompromising excellence.</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {[
              { year: "2009", title: "The Genesis", desc: "Otieno Justus established the firm with a single mission: To redefine legal advocacy through uncompromising integrity." },
              { year: "2015", title: "Regional Expansion", desc: "Extended our footprint to serve complex commercial and litigation interests across the East African community." },
              { year: "2020", title: "Strategic Modernization", desc: "Integrated cutting-edge legal technology and moved to our landmark chambers in Nairobi's corporate heart." },
              { year: "2024", title: "Elite Choice", desc: "Consolidated as the premier choice for sophisticated domestic and international legal matters in the region." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12 md:gap-20 group mb-12 sm:mb-20 last:mb-0"
              >
                <div className="text-[#D4AF37] font-bold font-serif text-5xl sm:text-6xl md:text-8xl opacity-10 group-hover:opacity-100 transition-all duration-1000 w-full sm:w-56 shrink-0 tabular-nums">{item.year}</div>
                <div className="pt-4 sm:pt-6 border-l-[1px] border-slate-100 pl-8 sm:pl-12">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A1128] mb-4 sm:mb-6 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-cinzel">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-base sm:text-lg font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 md:py-40 bg-[#0A1128] text-center relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <h2 className="text-4xl sm:text-6xl md:text-8xl text-white font-serif font-bold mb-12 sm:mb-16 leading-tight tracking-tight">
            Your Strategic <br /><span className="italic font-light text-[#D4AF37]">Advantage.</span>
          </h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="btn-luxury bg-[#D4AF37] text-[#0A1128] px-10 sm:px-16 py-4 sm:py-6 w-full sm:w-auto min-w-[280px] sm:min-w-[320px] font-bold uppercase tracking-[0.2em] text-[11px] sm:text-[12px] hover:bg-white transition-all duration-700"
          >
            ENGAGE OUR FIRM
          </button>
        </div>
      </section>
    </div>
  );
};