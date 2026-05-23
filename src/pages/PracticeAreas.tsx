import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, Scale, Building2, Landmark, ArrowRight, 
  ShieldAlert, Gavel, Users, UserCheck, FileText, 
  Ship, Home, Banknote, Pickaxe, HardHat, Lightbulb, 
  Map, Heart, MessageSquare, Handshake, Stethoscope,
  ChevronLeft, LucideIcon
} from 'lucide-react';

interface PracticeArea {
  id: string;
  title: string;
  Icon: LucideIcon;
  description: string;
  services: string[];
}

const IMAGES = {
  banking: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/practice-details-bb22488d-1778506298285.webp'
};

const legalServices: PracticeArea[] = [
  {
    id: 'personal-injury',
    title: 'Personal Injuries & Insurance Law',
    Icon: ShieldAlert,
    description: 'We provide expert representation for individuals seeking justice and compensation for injuries sustained due to negligence or accidents. Our team handles complex insurance claims and litigation with a focus on securing maximum recovery for our clients while navigating the intricacies of insurance policy frameworks.',
    services: ['Motor Vehicle Claims', 'Work Injury Benefits', 'Medical Negligence', 'Insurance Disputes']
  },
  {
    id: 'commercial-law',
    title: 'Commercial Law – General',
    Icon: Briefcase,
    description: 'Comprehensive legal support for businesses of all sizes in the East African market. We advise on commercial transactions, contract drafting, and dispute resolution to ensure your business interests are protected and all regulatory requirements are met with precision.',
    services: ['Contract Law', 'Business Transactions', 'Commercial Disputes', 'Trade Practices']
  },
  {
    id: 'criminal-law',
    title: 'Criminal Law – General',
    Icon: Gavel,
    description: 'Our criminal defense team provides robust and dedicated representation for individuals and corporations facing criminal investigations or charges. We handle everything from minor misdemeanors to high-stakes felony cases, bail applications, and complex criminal appeals.',
    services: ['Felony Defense', 'Misdemeanor Cases', 'Criminal Appeals', 'Bail Applications']
  },
  {
    id: 'employment-law',
    title: 'Industrial Relations & Employment Law',
    Icon: Users,
    description: 'Navigating the complex landscape of labor relations and employment regulations in Kenya. We assist both employers and employees in union negotiations, labor disputes, and ensuring workplace safety compliance across various industries.',
    services: ['Union Negotiations', 'Labor Disputes', 'Workplace Safety', 'Employment Contracts']
  },
  {
    id: 'consumer-protection',
    title: 'Consumer Protection',
    Icon: UserCheck,
    description: 'Dedicated advocacy for consumer rights against corporate malpractice. We handle cases involving product liability, false advertising, and warranty disputes to ensure consumers are protected from unfair business practices and receive due compensation.',
    services: ['Product Liability', 'False Advertising', 'Consumer Rights', 'Warranty Disputes']
  },
  {
    id: 'banking-finance',
    title: 'Banking, Finance & Securities Law',
    Icon: Landmark,
    description: 'Specialized legal counsel for the financial sector and investment markets. We advise on regulatory compliance, securities regulation, and complex financial transactions for top-tier financial institutions and private investors.',
    services: ['Securities Regulation', 'Banking Compliance', 'Financial Transactions', 'Investment Law']
  },
  {
    id: 'legislative-drafting',
    title: 'Legislative Drafting',
    Icon: FileText,
    description: 'Expertise in crafting clear, effective, and constitutionally sound legislation and regulatory frameworks. We assist government bodies, NGOs, and international organizations in policy development and legal reform initiatives.',
    services: ['Bill Drafting', 'Regulatory Frameworks', 'Policy Development', 'Legal Reform']
  },
  {
    id: 'maritime-law',
    title: 'Maritime & Carriage of Goods Law',
    Icon: Ship,
    description: 'Specialized services for the maritime and transport industry operating in the Indian Ocean and beyond. We handle shipping law, cargo claims, and maritime insurance disputes with deep industry knowledge and jurisdictional expertise.',
    services: ['Shipping Law', 'Cargo Claims', 'Maritime Insurance', 'Transport Contracts']
  },
  {
    id: 'property-law',
    title: 'Property & Conveyancing Law',
    Icon: Home,
    description: 'Comprehensive property law services including high-value land transactions, commercial lease agreements, and property dispute resolution. We ensure seamless conveyance and protect the rights of landlords and tenants with absolute diligence.',
    services: ['Land Transactions', 'Lease Agreements', 'Property Disputes', 'Tenant Rights']
  },
  {
    id: 'taxation-revenue',
    title: 'Taxation & Revenue',
    Icon: Banknote,
    description: 'Strategic tax planning and compliance services designed to optimize fiscal outcomes. We represent clients in high-stakes tax appeals and advise on international taxation matters and revenue compliance for multi-national entities.',
    services: ['Tax Planning', 'Revenue Compliance', 'Tax Appeals', 'International Taxation']
  },
  {
    id: 'mining-law',
    title: 'Mining Law',
    Icon: Pickaxe,
    description: 'Legal advisory for the extractive industries and resource management. We assist with mining licenses, resource rights, and ensuring environmental compliance and community agreements for major mining projects.',
    services: ['Mining Licenses', 'Resource Rights', 'Environmental Compliance', 'Community Agreements']
  },
  {
    id: 'construction-law',
    title: 'Construction & Engineering Law',
    Icon: HardHat,
    description: 'Specialized legal support for the construction and infrastructure sector. We handle complex contract drafting (including FIDIC), project financing, and dispute resolution for large-scale building and engineering projects.',
    services: ['Construction Contracts', 'Project Financing', 'Building Disputes', 'Engineering Standards']
  },
  {
    id: 'constitutional-law',
    title: 'Constitutional & Human Rights Law',
    Icon: Scale,
    description: 'Advocating for the fundamental rights and freedoms of all citizens as enshrined in the Constitution. We handle constitutional challenges, human rights advocacy, and judicial reviews against institutional overreach.',
    services: ['Civil Liberties', 'Constitutional Challenges', 'Human Rights Advocacy', 'Judicial Review']
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property Law',
    Icon: Lightbulb,
    description: 'Protecting your innovations, brand identity, and creative works in a globalized economy. We handle trademark registration, patent applications, copyright protection, and complex IP licensing agreements.',
    services: ['Trademarks', 'Patents', 'Copyrights', 'IP Licensing']
  },
  {
    id: 'planning-environment',
    title: 'Planning & Environment Law',
    Icon: Map,
    description: 'Expertise in environmental law and urban planning regulations. We represent clients in Land and Environment Court matters and advise on local governance, land use planning, and environmental impact compliance.',
    services: ['Environmental Law', 'Urban Planning', 'Local Governance', 'Land Court Matters']
  },
  {
    id: 'pro-bono',
    title: 'Pro Bono Legal Services',
    Icon: Heart,
    description: 'Our commitment to social justice and the rule of law through free legal aid for the underserved. We support public interest law and operate legal clinics to increase access to justice for the vulnerable in our society.',
    services: ['Community Legal Aid', 'Public Interest Law', 'Legal Clinics', 'Access to Justice']
  },
  {
    id: 'defamation-law',
    title: 'Defamation & Media Law',
    Icon: MessageSquare,
    description: 'Protecting corporate and personal reputations in the modern digital age. We handle libel defense, media rights, and publication law with a focus on reputation management and crisis legal response.',
    services: ['Libel Defense', 'Media Rights', 'Publication Law', 'Reputation Management']
  },
  {
    id: 'family-law',
    title: 'Family Law & Succession',
    Icon: Building2,
    description: 'Compassionate and professional legal support for family-related matters including divorce, child custody, and inheritance disputes. We focus on fair succession planning and family mediation to resolve sensitive matters.',
    services: ['Divorce Proceedings', 'Child Custody', 'Inheritance Disputes', 'Family Mediation']
  },
  {
    id: 'adr',
    title: 'Alternative Dispute Resolution (ADR)',
    Icon: Handshake,
    description: 'Resolving complex disputes outside the traditional courtroom through mediation, arbitration, and negotiation. We focus on efficient, private, and commercially sensible conflict resolution strategies.',
    services: ['Mediation', 'Arbitration', 'Negotiation', 'Conflict Resolution']
  },
  {
    id: 'osh-law',
    title: 'Occupational & Environmental Health',
    Icon: Stethoscope,
    description: 'Ensuring workplace safety and compliance with stringent health regulations. We advise on OSH standards, environmental health protocols, and represent clients in workplace safety litigation.',
    services: ['OSH Compliance', 'Environmental Health', 'Workplace Safety', 'Health Regulations']
  }
];

export const PracticeAreas: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [view, setView] = useState<'list' | 'detail'>('list');
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, selectedArea]);

  const handleSelectArea = (area: PracticeArea) => {
    setSelectedArea(area);
    setView('detail');
  };

  const handleBack = () => {
    setView('list');
    setSelectedArea(null);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-[#0A1128] py-16 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale">
          <img src={IMAGES.banking} className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-5xl mx-auto"
          >
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] mb-8 sm:mb-10">Legal Expertise</h4>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl text-white font-serif font-bold mb-10 sm:mb-12 leading-tight tracking-tight">
              {view === 'list' ? (
                <>Areas of <br /><span className="italic font-light text-[#D4AF37]">Practice.</span></>
              ) : (
                <span className="italic font-light text-[#D4AF37]">Practice Detail.</span>
              )}
            </h1>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {view === 'list' ? (
          <motion.section
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-12 md:py-20 lg:py-24"
          >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
              <div className="text-center mb-12 sm:mb-16">
                <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] mb-4 sm:mb-5">Core Legal Services</h4>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#0A1128] tracking-tight leading-tight">Our Comprehensive Disciplines</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {legalServices.map((area, i) => (
                  <motion.div
                    key={area.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                    onClick={() => handleSelectArea(area)}
                    className="bg-white border border-slate-100 p-8 flex flex-col items-start hover:shadow-2xl transition-all duration-500 group cursor-pointer h-full"
                  >
                    <div className="w-14 h-14 bg-[#F8F9FA] flex items-center justify-center mb-6 group-hover:bg-[#0A1128] transition-colors duration-500">
                      <area.Icon className="text-[#D4AF37] w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0A1128] mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors duration-500">
                      {area.title}
                    </h3>
                    <div className="mt-auto flex items-center text-[9px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      EXPLORE <ArrowRight size={14} className="ml-2" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        ) : (
          selectedArea && (
            <motion.section
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="py-12 md:py-20 lg:py-24 bg-white"
            >
              <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                <button 
                  onClick={handleBack} 
                  className="text-[#D4AF37] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] mb-10 sm:mb-12 flex items-center gap-2 hover:translate-x-[-4px] transition-transform cursor-pointer"
                >
                  <ChevronLeft size={14} /> Back to Practice Areas
                </button>

                <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-4 sm:gap-6 mb-8">
                      <selectedArea.Icon className="text-[#D4AF37] w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1} />
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0A1128] tracking-tight leading-tight">{selectedArea.title}</h2>
                    </div>
                    <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12 font-light">
                      {selectedArea.description}
                    </p>
                    
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0A1128] mb-6 sm:mb-8 border-b border-slate-100 pb-4">Key Specializations</h3>
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      {selectedArea.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-5 sm:p-6 bg-[#F8F9FA] border border-slate-50 hover:border-[#D4AF37]/30 transition-colors duration-500">
                          <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0A1128]">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-5">
                    <div className="bg-[#0A1128] p-10 sm:p-12 text-center sticky top-32 shadow-2xl">
                       <selectedArea.Icon className="text-[#D4AF37] mx-auto mb-8 opacity-50 w-12 h-12 sm:w-16 sm:h-16" strokeWidth={1} />
                       <h4 className="text-white text-xl sm:text-2xl font-serif mb-4">Expert Advocacy</h4>
                       <p className="text-white/50 text-xs sm:text-sm mb-10 leading-relaxed font-light">
                         Our specialized legal team is ready to provide the strategic counsel you need for matters concerning {selectedArea.title}.
                       </p>
                       <button 
                         onClick={() => onNavigate('contact')}
                         className="w-full btn-luxury bg-[#D4AF37] text-[#0A1128] py-4 sm:py-5 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-[11px] hover:bg-white transition-all duration-500"
                       >
                         REQUEST CONSULTATION
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 md:py-40 bg-[#0A1128] text-center relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <h2 className="text-4xl sm:text-6xl md:text-8xl text-white font-serif font-bold mb-12 sm:mb-16 leading-tight tracking-tight">
            Strategic Counsel <br /><span className="italic font-light text-[#D4AF37]">for Growth.</span>
          </h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="btn-luxury bg-[#D4AF37] text-[#0A1128] px-10 sm:px-16 py-4 sm:py-6 w-full sm:w-auto min-w-[280px] sm:min-w-[320px] font-bold uppercase tracking-[0.2em] text-[11px] sm:text-[12px] hover:bg-white transition-all duration-700"
          >
            CONTACT OUR CHAMBERS
          </button>
        </div>
      </section>
    </div>
  );
};