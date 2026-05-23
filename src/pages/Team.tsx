import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowRight, Award, GraduationCap, Briefcase, Users } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  specialties: string[];
  img: string;
  bio: string;
  education?: string;
  subtitle?: string;
}

const managingPartner: TeamMember = {
  name: 'Otieno Justus',
  role: 'Managing Partner',
  specialties: ['Insurance Defense', 'Commercial Litigation', 'Banking Law', 'Civil Procedure'],
  img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/otieno-justus---managing-partner-cb8c5223-1778505369111.webp',
  bio: 'Founding partner of Otieno Justus & Co Advocates, specializing in high-stakes insurance defense and complex commercial litigation. With a distinguished track record in banking law and civil procedure, he provides strategic leadership and vision to the firm.',
  education: 'LLB (Hons) (UoN), PGD (KSL)'
};

const otherTeamMembers: TeamMember[] = [
  {
    name: 'Stephanie Anastacey Olilo',
    role: 'Associate',
    specialties: ['Litigation', 'Tax Law', 'Regulatory Compliance'],
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/stephanie-anastacey-olilo---associate-0d16e552-1778505369336.webp',
    bio: 'An Advocate of the High Court of Kenya, Stephanie brings exceptional precision to tax law and complex regulatory compliance matters.',
    education: 'Advocate of the High Court of Kenya'
  },
  {
    name: 'Margaret Awuor Otieno',
    role: 'Associate',
    specialties: ['Client Advisory', 'Legal Analysis', 'Case Strategy'],
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/margaret-awuor-otieno---associate-aeefd41d-1778505368944.webp',
    bio: 'Known for her sharp legal analysis and strategic thinking, Margaret excels in complex case management and high-pressure negotiations.',
    education: 'Advocate of the High Court of Kenya'
  }
];

const externalConsultants: TeamMember[] = [
  {
    name: 'Brenda Nyakanga Nyamwaya',
    role: 'External Consultant',
    specialties: ['Litigation', 'Legislative Drafting', 'Public Governance', 'Mediation'],
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/brenda-nyakanga-nyamwaya-portrait-e1528a5f-1778567083469.webp',
    bio: 'Advocate, Certified Secretary, and Certified Mediator with expertise in litigation, legislative drafting and public governance. Serves at the Kisii County Assembly providing legal representation and policy advisory.',
    education: 'Advocate, Certified Secretary, Certified Mediator'
  },
  {
    name: 'Dr. Johana Kambo',
    role: 'External Consultant',
    subtitle: 'Executive Dean & Senior Lecturer, University of Embu School of Law',
    specialties: ['Labour Law Expert', 'Executive Dean, University of Embu', 'Extraordinary Research Fellow'],
    img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/dr--johana-kambo-portrait-6a0f4c08-1778567083696.webp',
    bio: 'Labour law expert and academic leader. Executive Dean at University of Embu, Extraordinary Research Fellow at North-West University.',
    education: 'LLD, LLM, LLB (Nelson Mandela University)'
  }
];

const teamActionImg = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/team-action-ec7f48af-1778506298535.webp';

export const Team: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#0A1128] py-16 md:py-32 lg:py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale">
          <img src={teamActionImg} className="w-full h-full object-cover" alt="Team Background" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-5xl mx-auto"
          >
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] mb-8 sm:mb-10">Our Advocates</h4>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl text-white font-serif font-bold mb-10 sm:mb-12 leading-tight tracking-tight">Elite <br /><span className="italic font-light text-[#D4AF37]">Counsel.</span></h1>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Managing Partner */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden grayscale bg-slate-100 shadow-[20px_20px_50px_-15px_rgba(0,0,0,0.15)]">
                <img src={managingPartner.img} className="w-full h-full object-cover hover:grayscale-0 transition-all duration-1000" alt={managingPartner.name} />
              </div>
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-[#D4AF37] p-8 hidden xs:block shadow-2xl">
                <Award className="text-[#0A1128] w-9 h-9 sm:w-11 sm:h-11" strokeWidth={1} />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-[11px] mb-6 sm:mb-8">Managing Partner</h4>
              <h2 className="text-3xl sm:text-5xl md:text-[64px] font-serif font-bold text-[#0A1128] mb-8 sm:mb-10 leading-tight tracking-tight">{managingPartner.name}</h2>
              <p className="text-slate-600 leading-relaxed mb-10 sm:mb-12 text-lg sm:text-xl font-light italic border-l-[3px] border-[#D4AF37] pl-6 sm:pl-10">
                {managingPartner.bio}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-16">
                <div>
                  <div className="flex items-center gap-4 mb-6 sm:mb-8">
                    <Briefcase className="text-[#D4AF37] w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1} />
                    <h5 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#0A1128]">Core Expertise</h5>
                  </div>
                  <ul className="space-y-4">
                    {managingPartner.specialties.map((s, i) => (
                      <li key={i} className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0A1128]/50 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-6 sm:mb-8">
                    <GraduationCap className="text-[#D4AF37] w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1} />
                    <h5 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#0A1128]">Credentials</h5>
                  </div>
                  <p className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0A1128]/50 leading-loose tabular-nums">{managingPartner.education}</p>
                </div>
              </div>
              
              <div className="flex gap-10 sm:gap-12">
                <a href="#" className="text-[#0A1128]/40 hover:text-[#D4AF37] transition-all duration-500 scale-110 sm:scale-125 hover:scale-150"><Linkedin className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1} /></a>
                <a href="#" className="text-[#0A1128]/40 hover:text-[#D4AF37] transition-all duration-500 scale-110 sm:scale-125 hover:scale-150"><Mail className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1} /></a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Associates */}
      <section className="py-12 md:py-20 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16 sm:mb-24">
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] mb-8 sm:mb-10">The Associate Team</h4>
            <h2 className="text-3xl sm:text-5xl lg:text-[72px] font-serif font-bold text-[#0A1128] mb-0 tracking-tight leading-none">Our Advocates.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
            {otherTeamMembers.map((member, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-white p-8 lg:p-16 group shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-100"
              >
                <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 mb-10 sm:mb-12 shadow-xl">
                  <img src={member.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={member.name} />
                </div>
                <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-[11px] mb-4 sm:mb-5">{member.role}</h4>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1128] mb-6 sm:mb-8 tracking-tight">{member.name}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 sm:mb-10 font-light text-base sm:text-lg">{member.bio}</p>
                <button className="flex items-center text-[10px] sm:text-[11px] font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#0A1128] group-hover:text-[#D4AF37] transition-colors cursor-pointer">
                  DETAILED PROFILE <ArrowRight className="ml-4 sm:ml-6 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-4 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Consultants */}
      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-10 sm:gap-12">
            <div>
              <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <Users className="text-[#D4AF37] w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.5em] text-[10px] sm:text-[11px]">Our People</h4>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-[64px] font-serif font-bold text-[#0A1128] mb-0 tracking-tight leading-none">External <br /><span className="italic font-light text-[#D4AF37]">Consultants.</span></h2>
            </div>
            <p className="max-w-md text-slate-500 text-base sm:text-lg font-light leading-relaxed">
              Our practice is bolstered by a network of distinguished external advisors and academic leaders who bring specialized expertise to complex legal challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
            {externalConsultants.map((member, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-[#0A1128] p-8 lg:p-16 group shadow-2xl transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#D4AF37]/5 rounded-bl-full"></div>
                
                <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 mb-10 sm:mb-12 shadow-2xl border border-white/5">
                  <img src={member.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={member.name} />
                </div>
                
                <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-[11px] mb-4 sm:mb-5">{member.role}</h4>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3 sm:mb-4 tracking-tight">{member.name}</h3>
                {member.subtitle && (
                  <p className="text-[#D4AF37]/60 text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-6 sm:mb-8">{member.subtitle}</p>
                )}
                
                <p className="text-slate-400 leading-relaxed mb-8 sm:mb-10 font-light text-base sm:text-lg italic">"{member.bio}"</p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <GraduationCap className="text-[#D4AF37] w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80">{member.education}</p>
                  </div>
                  <div className="pt-6 sm:pt-8 border-t border-white/10">
                    <h5 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#D4AF37] mb-4 sm:mb-6">Expertise & Achievements</h5>
                    <ul className="grid grid-cols-1 gap-3 sm:gap-4">
                      {member.specialties.map((spec, idx) => (
                        <li key={idx} className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-medium tracking-[0.05em] sm:tracking-[0.1em] text-white/60">
                          <div className="w-1 h-1 bg-[#D4AF37] rotate-45"></div>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 sm:py-32 md:py-40 bg-[#0A1128] text-center relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl text-white font-serif font-bold mb-12 sm:mb-16 leading-tight tracking-tight">
            Legal <br /><span className="italic font-light text-[#D4AF37]">Excellence.</span>
          </h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="btn-luxury bg-[#D4AF37] text-[#0A1128] px-10 sm:px-16 py-4 sm:py-6 w-full sm:w-auto min-w-[280px] sm:min-w-[320px] font-bold uppercase tracking-[0.2em] text-[11px] sm:text-[12px] hover:bg-white transition-all duration-700"
          >
            JOIN OUR PRACTICE
          </button>
        </div>
      </section>
    </div>
  );
};