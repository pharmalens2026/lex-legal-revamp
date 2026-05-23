import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your inquiry has been received. Our chambers will contact you within 24 hours.', {
      style: {
        background: '#0A1128',
        color: '#D4AF37',
        border: '1px solid #D4AF37'
      }
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#0A1128] py-16 md:py-24 lg:py-32 text-center relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-5xl mx-auto"
          >
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.5em] text-[10px] sm:text-[11px] mb-6 sm:mb-8">Engagement</h4>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white font-serif font-bold mb-8 sm:mb-10 leading-tight tracking-tight">Private <br /><span className="italic font-light text-[#D4AF37]">Counsel.</span></h1>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-10 lg:space-y-16">
              <div>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-8 sm:mb-12 text-[#0A1128] tracking-tight">Our Chambers</h3>
                <div className="space-y-8 sm:space-y-12">
                  <div className="flex items-start gap-6 sm:gap-8 group">
                    <div className="bg-[#F8F9FA] p-4 sm:p-5 text-[#D4AF37] group-hover:bg-[#0A1128] group-hover:text-[#D4AF37] transition-all duration-700 shadow-sm shrink-0 border border-slate-100">
                      <MapPin className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1} />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-2 sm:mb-3">Nairobi HQ</p>
                      <p className="font-serif text-xl sm:text-2xl text-[#0A1128] font-bold tracking-tight">Viewpark Towers, 15th Floor</p>
                      <p className="text-slate-500 leading-relaxed mt-2 sm:mt-3 font-light text-base sm:text-lg italic">Utalii Lane, Nairobi, Kenya<br />P.O. Box 7183 - 00100</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 sm:gap-8 group">
                    <div className="bg-[#F8F9FA] p-4 sm:p-5 text-[#D4AF37] group-hover:bg-[#0A1128] group-hover:text-[#D4AF37] transition-all duration-700 shadow-sm shrink-0 border border-slate-100">
                      <Phone className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1} />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-2 sm:mb-3">Direct Lines</p>
                      <p className="font-serif text-xl sm:text-2xl text-[#0A1128] font-bold tracking-tight">+254 762 502510</p>
                      <p className="text-slate-500 leading-relaxed mt-2 sm:mt-3 font-light text-base sm:text-lg italic">+254 703 667009 / +254 733 383 789</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 sm:gap-8 group">
                    <div className="bg-[#F8F9FA] p-4 sm:p-5 text-[#D4AF37] group-hover:bg-[#0A1128] group-hover:text-[#D4AF37] transition-all duration-700 shadow-sm shrink-0 border border-slate-100">
                      <Mail className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1} />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-2 sm:mb-3">Inquiries</p>
                      <p className="font-serif text-xl sm:text-2xl text-[#0A1128] font-bold tracking-tight">info@otienojustus.com</p>
                      <p className="text-slate-500 leading-relaxed mt-2 sm:mt-3 font-light text-base sm:text-lg italic">otienojustusadvocates@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-10 bg-[#F8F9FA] border-t-2 border-[#D4AF37] shadow-lg">
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#0A1128] mb-6 sm:mb-8 flex items-center gap-4 sm:gap-6 tracking-tight">
                  <Clock className="text-[#D4AF37] w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1} />
                  Office Hours
                </h4>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex justify-between border-b border-slate-200 pb-4">
                    <span className="text-slate-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em]">Monday – Friday</span>
                    <span className="font-bold text-[#0A1128] text-xs sm:text-sm tracking-widest uppercase">08:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-4">
                    <span className="text-slate-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em]">Saturday</span>
                    <span className="font-bold text-[#0A1128] text-xs sm:text-sm tracking-widest uppercase">09:00 – 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em]">Sunday</span>
                    <span className="text-[#D4AF37] font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] italic">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 md:p-10 lg:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 relative">
                <div className="mb-10 sm:mb-16">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0A1128] mb-4 sm:mb-6 leading-tight tracking-tight">Request a Private <br /> Consultation.</h3>
                  <p className="text-slate-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em]">Confidentiality Assured</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12">
                  <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#0A1128]/40">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="ENTER YOUR FULL NAME" 
                        className="w-full bg-transparent px-0 py-4 sm:py-5 border-b border-slate-200 focus:border-[#D4AF37] outline-none transition-all placeholder:text-slate-200 font-bold uppercase text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#0A1128]"
                      />
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#0A1128]/40">Professional Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="EMAIL@ORGANIZATION.COM" 
                        className="w-full bg-transparent px-0 py-4 sm:py-5 border-b border-slate-200 focus:border-[#D4AF37] outline-none transition-all placeholder:text-slate-200 font-bold uppercase text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#0A1128]"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#0A1128]/40">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+254 --- --- ---" 
                        className="w-full bg-transparent px-0 py-4 sm:py-5 border-b border-slate-200 focus:border-[#D4AF37] outline-none transition-all placeholder:text-slate-200 font-bold uppercase text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#0A1128]"
                      />
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#0A1128]/40">Practice Area</label>
                      <select className="w-full bg-transparent px-0 py-4 sm:py-5 border-b border-slate-200 focus:border-[#D4AF37] outline-none transition-all appearance-none font-bold uppercase text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#0A1128] cursor-pointer">
                        <option>Corporate Law</option>
                        <option>Commercial Litigation</option>
                        <option>Real Estate & Projects</option>
                        <option>Banking & Finance</option>
                        <option>Other Services</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#0A1128]/40">Nature of Inquiry</label>
                    <textarea 
                      required
                      rows={4} 
                      placeholder="PROVIDE A BRIEF SUMMARY OF YOUR LEGAL NEEDS..." 
                      className="w-full bg-transparent px-0 py-4 sm:py-5 border-b border-slate-200 focus:border-[#D4AF37] outline-none transition-all placeholder:text-slate-200 font-medium text-base sm:text-lg leading-relaxed text-[#0A1128]"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-luxury bg-[#0A1128] text-white w-full py-5 sm:py-6 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all duration-700 shadow-2xl flex justify-center items-center group">
                    SEND SECURE MESSAGE
                    <Send className="ml-4 sm:ml-6 w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[350px] md:h-[500px] w-full bg-[#F8F9FA] relative overflow-hidden grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000 shadow-inner">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819914614214!2d36.818804374341!3d-1.2817816356262453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d7a041f993%3A0xc47e3a6344547900!2sView%20Park%20Towers!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Chambers Location"
        ></iframe>
      </section>
    </div>
  );
};