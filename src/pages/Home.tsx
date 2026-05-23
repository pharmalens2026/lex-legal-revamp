import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Scale, Briefcase, Building2, Shield, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const IMAGES = {
  hero: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/hero-boardroom-5bfaec2f-1778506297745.webp',
  architecture: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/hero-architecture-f1810037-1778506297354.webp',
  team: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/team-action-ec7f48af-1778506298535.webp',
  signing: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/corporate-law-jpg-88ce946b-1778503731635.webp',
  justice: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/justice-statue-jpg-996d4eb7-1778503731599.webp',
  details: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/practice-details-bb22488d-1778506298285.webp'
};

const practicePreviews = [
  { 
    title: 'Corporate & Commercial', 
    desc: 'Strategic legal counsel for complex business ventures, mergers, and cross-border transactions.',
    icon: Briefcase,
    img: IMAGES.signing
  },
  { 
    title: 'Litigation & Arbitration', 
    desc: 'Formidable representation in high-stakes disputes across East African courts and tribunals.',
    icon: Scale,
    img: IMAGES.justice
  },
  { 
    title: 'Real Estate & Projects', 
    desc: 'Specialized expertise in high-value property development and infrastructure investments.',
    icon: Building2,
    img: IMAGES.architecture
  },
];

const testimonials = [
  {
    name: 'Samuel Kamau',
    role: 'Managing Director, Regional Logistics',
    text: 'Otieno Justus & Co Advocates provides unparalleled legal counsel. Their attention to detail in our recent regional merger was exceptional, demonstrating profound strategic depth.',
  },
  {
    name: 'Amara Okechukwu',
    role: 'Founder, TechBridge Pan-Africa',
    text: 'Navigating intellectual property and compliance in Kenya was daunting until we partnered with this firm. They are professional, strategic, and truly understand the modern digital economy.',
  },
];

export const Home: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[#0A1128]">
        <motion.div style={{ y }} className="absolute inset-0 z-0 scale-105">
          <img 
            src={IMAGES.hero}
            alt="Law Firm Excellence"
            className="w-full h-full object-cover opacity-40 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent"></div>
        </motion.div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-[#D4AF37] mb-6 md:mb-8"
            ></motion.div>
            <h1 className="text-[10vw] sm:text-[12vw] md:text-[75px] lg:text-[85px] text-white font-serif font-bold leading-[0.95] mb-6 sm:mb-8 tracking-tighter">
              Strategic <br />
              <span className="italic text-[#D4AF37] font-light">Precision.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 font-light mb-8 sm:mb-10 max-w-xl leading-relaxed">
              A premier East African legal practice dedicated to sophisticated solutions for complex commercial and civil challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
              <button 
                onClick={() => onNavigate('contact')}
                className="btn-luxury bg-[#D4AF37] text-[#0A1128] px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto font-bold uppercase tracking-[0.2em] text-[10px] sm:text-[11px] hover:bg-white transition-all duration-500 flex items-center justify-center group"
              >
                REQUEST CONSULTATION
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('practice-areas')}
                className="text-white/60 hover:text-white uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] font-bold transition-all flex items-center group cursor-pointer"
              >
                EXPLORE EXPERTISE
                <span className="ml-4 w-10 h-px bg-[#D4AF37]/40 group-hover:w-16 group-hover:bg-[#D4AF37] transition-all"></span>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 sm:bottom-12 left-0 w-full hidden sm:block">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-end">
            <div className="flex gap-10 md:gap-20">
              <div>
                <p className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-[0.4em] font-bold mb-1 sm:mb-2">Location</p>
                <p className="text-white/60 text-[10px] sm:text-[11px] font-medium tracking-wide">Nairobi, Kenya</p>
              </div>
              <div>
                <p className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-[0.4em] font-bold mb-1 sm:mb-2">Practice</p>
                <p className="text-white/60 text-[10px] sm:text-[11px] font-medium tracking-wide">Corporate & Civil</p>
              </div>
            </div>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="flex flex-col items-center gap-3 sm:gap-4"
            >
              <span className="text-white/30 text-[8px] sm:text-[9px] uppercase tracking-[0.4em] font-bold">Scroll</span>
              <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-4 mb-6 sm:mb-8">
                <div className="w-8 h-px bg-[#D4AF37]"></div>
                <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[10px] sm:text-[11px]">The Firm's Mandate</h4>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[54px] lg:text-[64px] font-serif font-bold text-[#0A1128] mb-6 sm:mb-8 leading-[1.1] tracking-tight">
                Built on Integrity, <br /> Defined by Results.
              </h2>
              <p className="text-[#1A1A1A]/70 leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg font-light max-w-2xl">
                For over 15 years, Otieno Justus & Co Advocates has established itself as a cornerstone of legal excellence in Nairobi. Our approach merges rigorous analytical depth with visionary strategy to protect our clients' most critical interests.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 pt-4">
                <div>
                  <h5 className="text-[#0A1128] font-bold text-3xl sm:text-4xl font-serif mb-2 tracking-tighter">15+</h5>
                  <p className="text-slate-400 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">Years of Legacy</p>
                </div>
                <div>
                  <h5 className="text-[#0A1128] font-bold text-3xl sm:text-4xl font-serif mb-2 tracking-tighter">500+</h5>
                  <p className="text-slate-400 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">Client Successes</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] bg-slate-50 relative overflow-hidden shadow-[20px_20px_50px_-15px_rgba(10,17,40,0.1)]">
                <img src={IMAGES.team} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out" alt="Team Action" />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-4 md:-right-10 bg-[#0A1128] p-6 sm:p-8 md:p-10 shadow-2xl hidden xs:block">
                <Shield className="w-8 h-8 sm:w-9 sm:h-9 text-[#D4AF37]" strokeWidth={1} />
                <p className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] mt-4 sm:mt-5">Trust & Reliability</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-12 md:py-20 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 sm:mb-16 gap-8 sm:gap-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-4 mb-6 sm:mb-8">
                <div className="w-8 h-px bg-[#D4AF37]"></div>
                <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[10px] sm:text-[11px]">Key Expertise</h4>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[54px] lg:text-[64px] font-serif font-bold text-[#0A1128] leading-[1.1] tracking-tight">
                Our Core Legal <br /> Disciplines.
              </h2>
            </div>
            <button 
              onClick={() => onNavigate('practice-areas')}
              className="border border-[#0A1128]/10 text-[#0A1128] px-8 sm:px-10 py-4 sm:py-5 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-[11px] hover:bg-[#0A1128] hover:text-white transition-all duration-700 flex items-center group cursor-pointer"
            >
              VIEW ALL SERVICES
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {practicePreviews.map((service, i) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  className="bg-white p-8 sm:p-10 lg:p-12 hover:bg-[#0A1128] group transition-all duration-700 cursor-pointer shadow-sm hover:shadow-2xl border border-slate-100"
                  onClick={() => onNavigate('practice-areas')}
                >
                  <div className="text-[#D4AF37] mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-700 ease-out origin-left">
                    <IconComp className="w-8 h-8 sm:w-9 sm:h-9" strokeWidth={1} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-5 group-hover:text-white transition-colors duration-500 tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 group-hover:text-white/60 transition-colors duration-500 leading-relaxed font-light mb-6 sm:mb-10 text-sm sm:text-base h-auto sm:h-20">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-[9px] sm:text-[10px] font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#D4AF37] overflow-hidden">
                    <span className="translate-x-0 group-hover:translate-x-0 transition-transform duration-500">LEARN MORE</span>
                    <ArrowRight className="ml-3 sm:ml-4 w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prestige Statement */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#0A1128] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale pointer-events-none">
          <img src={IMAGES.details} className="w-full h-full object-cover mix-blend-overlay" alt="Background" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] mb-8 sm:mb-10">The Standard of Excellence</h4>
            <h2 className="text-3xl sm:text-5xl md:text-[75px] lg:text-[85px] font-serif font-bold mb-8 sm:mb-12 leading-[1.05] tracking-tight">
              Elite Counsel for <br /> Global Interests.
            </h2>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto mb-12 sm:mb-16"></div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-left">
              {[
                { title: 'Global Outlook', desc: 'Aligning local practice with international commercial standards.' },
                { title: 'Proven Expertise', desc: 'A record of high-stakes successes for domestic and global firms.' },
                { title: 'Strategic Edge', desc: 'Proactive counsel that anticipates regulatory and commercial shifts.' },
                { title: 'Elite Talent', desc: 'A collective of the most rigorous legal minds in the region.' }
              ].map((item, i) => (
                <div key={i} className="space-y-3 sm:space-y-4">
                  <h3 className="text-[#D4AF37] font-serif text-lg sm:text-xl font-bold">{item.title}</h3>
                  <p className="text-white/40 text-[12px] sm:text-[13px] leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 sm:gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-4 mb-6 sm:mb-8">
                <div className="w-8 h-px bg-[#D4AF37]"></div>
                <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[10px] sm:text-[11px]">Endorsements</h4>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[54px] lg:text-[64px] font-serif font-bold text-[#0A1128] mb-8 sm:mb-10 leading-[1.1] tracking-tight">
                Our Clients' <br /> Perspective.
              </h2>
              <div className="flex space-x-4 sm:space-x-6">
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-12 h-12 sm:w-14 sm:h-14 border border-slate-200 flex items-center justify-center hover:bg-[#0A1128] hover:text-white transition-all duration-700 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1} />
                </button>
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="w-12 h-12 sm:w-14 sm:h-14 border border-slate-200 flex items-center justify-center hover:bg-[#0A1128] hover:text-white transition-all duration-700 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#F8F9FA] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <Quote className="absolute -top-10 -right-10 text-[#D4AF37]/5 w-32 h-32 sm:w-56 sm:h-56" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="relative z-10"
                  >
                    <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#0A1128] leading-relaxed mb-8 sm:mb-10 font-light">
                      "{testimonials[activeTestimonial].text}"
                    </p>
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className="w-8 sm:w-10 h-px bg-[#D4AF37]"></div>
                      <div>
                        <h4 className="font-bold text-[#0A1128] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] mb-1">{testimonials[activeTestimonial].name}</h4>
                        <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest font-bold">{testimonials[activeTestimonial].role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 md:py-40 bg-[#0A1128] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.architecture} 
            className="w-full h-full object-cover opacity-10 grayscale brightness-50" 
            alt="Corporate Architecture" 
          />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl sm:text-6xl lg:text-8xl text-white font-serif font-bold mb-10 sm:mb-12 leading-[1] tracking-tight">
              Powerful <br /> Advocacy.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
              <button 
                onClick={() => onNavigate('contact')}
                className="btn-luxury bg-[#D4AF37] text-[#0A1128] px-10 sm:px-16 py-4 sm:py-6 w-full sm:w-auto min-w-[250px] sm:min-w-[300px] font-bold uppercase tracking-[0.2em] text-[11px] sm:text-[12px] hover:bg-white transition-all duration-700"
              >
                BOOK CONSULTATION
              </button>
              <a 
                href="tel:+254762502510" 
                className="btn-luxury border border-white/20 text-white px-10 sm:px-16 py-4 sm:py-6 w-full sm:w-auto min-w-[250px] sm:min-w-[300px] font-bold uppercase tracking-[0.2em] text-[11px] sm:text-[12px] hover:bg-white hover:text-[#0A1128] transition-all duration-700 flex items-center justify-center"
              >
                CALL OUR CHAMBERS
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};