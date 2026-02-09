'use client';

import React from 'react';
import { Settings, Briefcase, GraduationCap, Mail, MapPin, Award, ChevronRight, FileText, Phone, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

// --- DATA FROM YOUR CV ---
const PROFESSIONAL_EXPERIENCE = [
  {
    company: "Nigerian Security Printing and Minting",
    role: "Officer II. Mechanical engineer",
    duration: "May, 2021 - Till Date",
    details: "Knowledge in operating and maintaining lathe machine, drilling machine, milling machine, welding machine, grinding machine, and other workshop tools and equipments",
    icon: <Settings className="w-5 h-5" />
  },
  {
    company: "Chelfom Construction and Engineering Company Limited",
    role: "IT Supervisor",
    duration: "June 2017 - December 2017",
    details: "Stock Recording, Construction Machine Maintenance (Bulldozers, Excavator, Payloader, Roller and Grader)",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    company: "CGC Nigeria Limited",
    role: "Industrial Trainee",
    duration: "February, 2017 - June, 2017",
    details: "Industrial Welding, Machine Maintenance, Lathe Machine Uses.",
    icon: <Settings className="w-5 h-5" />
  }
];

export default function IbrahimPortfolio() {
  const cvPath = `/assets/docs/${encodeURIComponent("My CV IB.pdf")}`;
  const imagePath = `/assets/images/${encodeURIComponent("1001971690(1).jpg")}`;

  return (
    <main className="min-h-screen bg-[#030014] text-slate-300 font-sans selection:bg-purple-500/30 overflow-x-hidden text-left relative">
      
      {/* --- AESTHETIC BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base dark layer */}
        <div className="absolute inset-0 bg-[#030014]" />
        
        {/* Animated Purple Orb */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-purple-900/40 blur-[120px]" 
        />
        
        {/* Animated Indigo Orb */}
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/40 blur-[120px]" 
        />
        
        {/* Blue Accent Orb */}
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-900/30 blur-[100px]" />

        {/* Tactical Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1b3d_1px,transparent_1px),linear-gradient(to_bottom,#1f1b3d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-[#030014]/60 backdrop-blur-xl border-b border-white/5 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-black tracking-[0.3em] text-[10px] md:text-xs uppercase text-white">I.B. FOLARANMI</span>
          <div className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#about" className="hover:text-purple-400 transition-colors">Summary</a>
            <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
            <a href="#leadership" className="hover:text-purple-400 transition-colors">Leadership</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
          <a 
            href={cvPath}
            download="My CV IB.pdf"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:shadow-xl hover:shadow-purple-500/20 transition-all"
          >
            <FileText size={14} /> Download CV
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="about" className="pt-32 md:pt-48 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-purple-400 text-[10px] font-black uppercase tracking-widest rounded-full"
            >
              <Zap size={12} fill="currentColor" /> Professional Profile
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-white uppercase">
              Ibrahim <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 italic">Babatunde</span>
            </h1>
            
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-500 rounded-full" />
              <p className="text-slate-400 text-lg md:text-xl max-w-3xl leading-relaxed pl-4 font-medium">
                A highly disciplined Mechanical Engineer and Project Management professional with extensive experience in industrial operations at the Nigerian Security Printing and Minting. 
                Expert in the maintenance and operation of heavy-duty workshop machinery—including Lathe, Milling, and Drilling systems—complemented by a Master’s degree in Project Management to drive operational efficiency and strategic organizational goals. A proven leader and former NAKSS President, dedicated to leveraging technical precision and administrative excellence to deliver high-impact results.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
               <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-[10px] font-bold text-slate-400 flex items-center gap-2 uppercase tracking-tighter shadow-sm">
                 <MapPin size={14} className="text-purple-500" /> Abuja, Nigeria
               </span>
               <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-[10px] font-bold text-slate-400 flex items-center gap-2 uppercase tracking-tighter shadow-sm">
                 <Mail size={14} className="text-purple-500" /> Pholaranmiib@yahoo.com
               </span>
               <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-[10px] font-bold text-slate-400 flex items-center gap-2 uppercase tracking-tighter shadow-sm">
                 <Phone size={14} className="text-purple-500" /> 07056901212
               </span>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="aspect-[4/5] bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative border-[12px] border-white/5 group">
              <img 
                src={imagePath} 
                alt="Folaranmi Ibrahim Babatunde" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-purple-500/20 rounded-[3rem]" />
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section id="experience" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-purple-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">// Career Trajectory</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase">Professional Experience</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROFESSIONAL_EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
              >
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-500/20">
                    {exp.icon}
                  </div>
                  <h4 className="text-xl font-black mb-2 uppercase tracking-tight text-white leading-tight">{exp.company}</h4>
                  <p className="text-purple-400 text-[10px] font-black uppercase tracking-widest mb-6">{exp.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium italic group-hover:text-slate-400">"{exp.details}"</p>
                </div>
                <div className="pt-6 border-t border-white/5 text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">
                  {exp.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACADEMICS & LEADERSHIP */}
      <section id="leadership" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-12">
            <h2 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] italic">// Academic Foundation</h2>
            <div className="space-y-12">
              <div className="relative pl-10 border-l-2 border-purple-900/50">
                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full border-4 border-[#030014] shadow-md" />
                <p className="text-[10px] font-bold text-purple-400 uppercase mb-2">Completion Nov 2024</p>
                <h4 className="text-2xl font-extrabold uppercase tracking-tight leading-tight mb-2 text-white">University of Abuja</h4>
                <p className="text-slate-500 text-sm font-black opacity-80 uppercase tracking-wide">Masters of Project Management</p>
              </div>
              <div className="relative pl-10 border-l-2 border-slate-800">
                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-slate-800 rounded-full border-4 border-[#030014] shadow-sm" />
                <p className="text-[10px] font-bold text-slate-600 uppercase mb-2">Graduated 2019</p>
                <h4 className="text-2xl font-extrabold uppercase tracking-tight leading-tight mb-2 text-slate-400">FUTMINNA, Niger State</h4>
                <p className="text-slate-500 text-sm font-bold leading-relaxed">B. Tech. Industrial Technology Education (Metal Work Option)</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0a0a1a] to-indigo-950 p-10 md:p-14 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            <Award className="text-purple-400 mb-8" size={44} />
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-10">Honorary Awards</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <ChevronRight className="text-purple-400 shrink-0" size={24} />
                <p className="text-lg font-bold leading-tight uppercase tracking-tight">President, NAKSS Futminna Chapter (2016-2018)</p>
              </div>
              <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 italic text-purple-100 text-sm leading-relaxed">
                "Award of Excellence - 2018 (recognized for active leadership, achievements, and socio-academic impact at Federal University of Technology Minna)."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT */}
      <section id="contact" className="pb-32 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-800 rounded-[4rem] p-12 md:p-24 text-white text-center shadow-3xl relative overflow-hidden">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 italic uppercase leading-[0.85]">
            Let's build <br/> something <span className="text-white underline decoration-white/30 underline-offset-8 italic">Great</span>.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:Pholaranmiib@yahoo.com" className="bg-white text-purple-900 px-12 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-xl w-full sm:w-auto">
              Send Me A Mail
            </a>
            <div className="px-10 py-6 bg-black/20 backdrop-blur-md rounded-full font-black text-[11px] uppercase tracking-[0.3em] border border-white/20 w-full sm:w-auto text-white">
              07056901212
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-transparent text-center border-t border-white/5 backdrop-blur-sm">
        <p className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600 italic flex items-center justify-center gap-2">
          Made with <Heart size={10} className="text-purple-500" fill="currentColor" /> for I.B. Folaranmi // 2026
        </p>
      </footer>
    </main>
  );
}