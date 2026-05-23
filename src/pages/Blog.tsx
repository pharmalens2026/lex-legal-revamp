import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const IMAGES = {
  blog1: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/team-action-ec7f48af-1778506298535.webp',
  blog2: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/hero-architecture-f1810037-1778506297354.webp',
  blog3: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/453ec6f2-8d35-4852-8f3d-142eef2c35ce/corporate-law-jpg-88ce946b-1778503731635.webp'
};

const posts = [
  {
    title: 'Navigating New Employment Laws in Kenya 2024',
    excerpt: 'An in-depth analysis of the recent amendments to the Employment Act and what they mean for businesses and employees across Kenya.',
    date: 'May 15, 2024',
    author: 'Stephanie Olilo',
    category: 'Employment Law',
    readTime: '8 min read',
    img: IMAGES.blog1
  },
  {
    title: 'The Future of Real Estate Investment in Nairobi',
    excerpt: 'Strategic legal insights into the evolving landscape of property development, land ownership titles, and sectional property laws.',
    date: 'April 22, 2024',
    author: 'Otieno Justus',
    category: 'Real Estate',
    readTime: '12 min read',
    img: IMAGES.blog2
  },
  {
    title: 'Intellectual Property: Protecting Your Digital Brand',
    excerpt: 'A comprehensive guide for startups and tech firms on trademark registration, copyright protection, and data privacy in the digital age.',
    date: 'March 10, 2024',
    author: 'Legal Associate',
    category: 'Intellectual Property',
    readTime: '6 min read',
    img: IMAGES.blog3
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#0A1128] py-20 md:py-32 lg:py-40 text-center relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-5xl mx-auto"
          >
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] mb-6 sm:mb-8">Legal Insights</h4>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl text-white font-serif font-bold mb-8 sm:mb-10 leading-tight tracking-tight">Expert <br /><span className="italic font-light text-[#D4AF37]">Intelligence.</span></h1>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-[20px_20px_60px_-20px_rgba(0,0,0,0.1)] bg-slate-50"
            >
              <img src={posts[0].img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Featured Insight" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
                <span className="bg-[#D4AF37] text-[#0A1128] text-[9px] sm:text-[10px] font-bold uppercase px-4 sm:px-5 py-2 tracking-[0.2em] sm:tracking-[0.3em]">Featured</span>
                <span className="text-slate-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em]">{posts[0].date}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A1128] mb-8 sm:mb-10 leading-tight hover:text-[#D4AF37] transition-colors cursor-pointer tracking-tight">
                {posts[0].title}
              </h2>
              <p className="text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 font-light">
                {posts[0].excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-8 sm:gap-10 mb-10 sm:mb-12">
                <div className="flex items-center text-[10px] sm:text-[11px] text-[#0A1128]/40 font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                  <User className="mr-2 sm:mr-3 text-[#D4AF37] w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1} />
                  {posts[0].author}
                </div>
                <div className="flex items-center text-[10px] sm:text-[11px] text-[#0A1128]/40 font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                  <Clock className="mr-2 sm:mr-3 text-[#D4AF37] w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1} />
                  {posts[0].readTime}
                </div>
              </div>
              <button className="btn-luxury bg-[#0A1128] text-white px-10 py-4 sm:py-5 font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-[11px] hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all duration-700 shadow-xl w-full sm:w-auto">
                READ FULL INSIGHT
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-20 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {posts.map((post, i) => (
              <motion.article 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="bg-white p-8 lg:p-12 flex flex-col h-full group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-100"
              >
                <div className="h-48 sm:h-64 overflow-hidden relative mb-8 sm:mb-10 grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-md">
                  <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={post.title} />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0A1128] text-[#D4AF37] text-[8px] sm:text-[9px] font-bold uppercase px-3 py-1.5 tracking-[0.2em] sm:tracking-[0.3em]">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-300 mb-6">
                    <div className="flex items-center">
                      <Calendar className="mr-2 text-[#D4AF37] w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={1.5} />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold mb-6 text-[#0A1128] group-hover:text-[#D4AF37] transition-colors duration-500 line-clamp-2 leading-tight tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 line-clamp-3 font-light">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <button className="flex items-center text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#0A1128] group-hover:text-[#D4AF37] transition-all duration-500 group/btn">
                      CONTINUE READING
                      <ArrowRight className="ml-4 sm:ml-5 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-4 transition-transform duration-500" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 sm:mt-24 text-center">
            <button className="border border-[#0A1128]/10 text-[#0A1128] px-12 sm:px-16 py-4 sm:py-5 font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-[11px] hover:bg-[#0A1128] hover:text-white transition-all duration-700 w-full sm:w-auto">
              BROWSE ALL ARTICLES
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#0A1128] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="bg-white p-8 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl max-w-6xl mx-auto border border-[#D4AF37]/20">
            <div className="relative z-10">
              <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] mb-8 sm:mb-10">Intelligence Hub</h4>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold text-[#0A1128] mb-8 sm:mb-10 leading-tight tracking-tight">Strategic <br /> Updates.</h2>
              <p className="text-slate-500 mb-10 sm:mb-12 max-w-xl mx-auto font-light text-lg sm:text-xl leading-relaxed">Subscribe to our quarterly brief for exclusive legal insights and firm updates delivered directly to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-0 max-w-3xl mx-auto border-b-2 border-slate-100 pb-2 focus-within:border-[#D4AF37] transition-colors" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="PROFESSIONAL EMAIL ADDRESS" 
                  className="flex-grow bg-transparent px-0 py-4 sm:py-5 outline-none text-[#0A1128] font-bold uppercase text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] placeholder:text-slate-200"
                />
                <button className="text-[#0A1128] hover:text-[#D4AF37] transition-all duration-500 font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] px-8 sm:px-10 py-4 cursor-pointer">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};