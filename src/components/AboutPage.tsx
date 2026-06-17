import { motion } from "motion/react";
import { 
  Award, Sparkles, Trophy, Calendar, CheckCircle2, Heart, 
  Cpu, Zap, ShieldAlert, ShieldCheck, Star 
} from "lucide-react";
import { CmsData } from "../types";

interface AboutPageProps {
  cmsData: CmsData;
}

export default function AboutPage({ cmsData }: AboutPageProps) {
  const paragraphs = cmsData.aboutText.split("\n\n");

  const coreValues = [
    {
      title: "Creativity",
      desc: "Transforming raw cinematic footage into expressive, memorable visual stories with dynamic color sweeps and acoustic depth.",
      icon: <Sparkles className="w-8 h-8 text-[#FC8019]" />,
      illustrationText: "ARTISTIC INTEGRATION"
    },
    {
      title: "Professionalism",
      desc: "Meticulous conform workflows aligned to Hollywood TPN compliance and international digital cinema projection models.",
      icon: <Cpu className="w-8 h-8 text-[#FC8019]" />,
      illustrationText: "ACES REFERENCE STANDARDS"
    },
    {
      title: "Passion",
      desc: "Our colorists, sound designers, and editors work relentlessly to lock down every frame down to absolute, pure accuracy.",
      icon: <Heart className="w-8 h-8 text-[#FC8019]" />,
      illustrationText: "DEDICATION ENGINE"
    },
    {
      title: "Quality Excellence",
      desc: "Uptimes powered by enterprise fiber storage arrays, dual 4K Christie projection systems, and certified Dolby Atmos sound systems.",
      icon: <Star className="w-8 h-8 text-[#FC8019]" />,
      illustrationText: "ZERO TIMELINE COMPROMISE"
    },
    {
      title: "Reliability",
      desc: "Over 10 years of trusted deliverable timelines representing stress-free, pixel-perfect IMF packets passed by worldwide streamers.",
      icon: <ShieldCheck className="w-8 h-8 text-[#FC8019]" />,
      illustrationText: "TPN & MIL-SPEC SECURED"
    }
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#1C1C1C] min-h-screen py-16">
      
      {/* 1. Page Header - Cinematic Magazine Design */}
      <section className="relative py-20 max-w-7xl mx-auto px-6 md:px-12 mt-8 text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 brand-glow-radial opacity-45 pointer-events-none" />
        
        <div className="max-w-[80%] mx-auto">
          <span className="text-[10px] font-mono text-[#FC8019] tracking-[0.3em] uppercase flex items-center justify-center gap-2 mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5" /> LEGACY OF STORYTELLING
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-normal uppercase leading-[1.05] text-[#1C1C1C]">
            AAA PHOENIX <br/>
            <span className="text-[#FC8019]">STUDIO PROFILE</span>
          </h1>
          <div className="w-16 h-0.5 bg-[#FC8019] mx-auto mt-6" />
        </div>
      </section>

      {/* 2. Company Story & History */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 border border-[#ECE7DF] group-hover:border-[#FC8019]/35 transition-colors pointer-events-none" />
            <div className="aspect-[4/5] overflow-hidden bg-white p-1.5 border border-[#ECE7DF] shadow-xs">
              <img
                src={cmsData.aboutImage || "https://images.unsplash.com/photo-1478720143022-385f704a3b7a?auto=format&fit=crop&w=1200&q=80"}
                alt="Finishing theater room"
                className="w-full h-full object-cover brightness-95"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-[10px] font-mono text-[#FC8019] font-bold tracking-widest block uppercase">THE BIOGRAPHY</span>
            <h3 className="text-3xl sm:text-4xl font-heading font-bold text-[#1C1C1C] uppercase leading-none mb-1">
              {cmsData.aboutTitle || "Crafting Cinematic Excellence Since Day One"}
            </h3>
            
            <div className="space-y-5 text-[#555555] font-sans text-sm sm:text-base leading-relaxed text-justify">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Mission & Vision Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-[#ECE7DF] mt-10">
              <div>
                <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block mb-1 font-bold">OUR MISSION</span>
                <p className="text-[#1C1C1C] text-xs font-subheading font-bold uppercase tracking-wider mb-2">Empowering Visionary Directors</p>
                <p className="text-[#555555] text-xs leading-relaxed text-justify">
                  To turn raw production assets into highly calibrated visual masterpieces, ensuring emotional accuracy and absolute theatrical fidelity across all screens.
                </p>
              </div>
              <div>
                <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block mb-1 font-bold">OUR VISION</span>
                <p className="text-[#1C1C1C] text-xs font-subheading font-bold uppercase tracking-wider mb-2">Global Post-Finishing Standard</p>
                <p className="text-[#555555] text-xs leading-relaxed text-justify">
                  To establish AAA Phoenix as the absolute reference partner for film production houses, OTT distributors, and global broadcasters seeking peerless craft.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Values Section (Strictly customized as requested) */}
      <section className="py-24 bg-white border-y border-[#ECE7DF] my-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[10px] font-mono text-[#FC8019] tracking-widest uppercase block font-bold">FOUNDATIONAL ETHOS</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-normal text-[#1C1C1C] uppercase leading-none mt-2">
              OUR CORE VALUES
            </h2>
            <div className="w-12 h-0.5 bg-[#FC8019] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#FAF7F2] border border-[#ECE7DF] hover:border-[#FC8019]/40 transition-all flex flex-col justify-between group h-full shadow-xs"
              >
                <div>
                  <div className="w-12 h-12 rounded-none bg-white border border-[#ECE7DF] flex items-center justify-center mb-6 group-hover:bg-[#FC8019]/5 group-hover:border-[#FC8019]/40 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-subheading font-black text-[#1C1C1C] uppercase tracking-wider mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#555555] text-xs leading-relaxed font-sans mb-6">
                    {value.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ECE7DF] select-none">
                  <span className="text-[8px] font-mono text-neutral-400 group-hover:text-[#FC8019] tracking-wider block font-bold transition-colors">
                    {value.illustrationText}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Statistics Banner */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-12 my-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-[#ECE7DF] text-center shadow-xs">
            <div className="text-4xl font-heading text-[#FC8019] font-black tracking-normal mb-1">500+</div>
            <div className="text-[9px] font-mono text-[#666666] uppercase tracking-widest font-bold">MASTERED TACTICAL TITLES</div>
          </div>
          <div className="p-6 bg-white border border-[#ECE7DF] text-center shadow-xs">
            <div className="text-4xl font-heading text-[#FC8019] font-black tracking-normal mb-1">0 JITTER</div>
            <div className="text-[9px] font-mono text-[#666666] uppercase tracking-widest font-bold">DI SYNCHRONIZED CLOCKS</div>
          </div>
          <div className="p-6 bg-white border border-[#ECE7DF] text-center shadow-xs">
            <div className="text-4xl font-heading text-[#FC8019] font-black tracking-normal mb-1">100%</div>
            <div className="text-[9px] font-mono text-[#666666] uppercase tracking-widest font-bold">BARCO REAL COLOR CONFORMANCE</div>
          </div>
          <div className="p-6 bg-white border border-[#ECE7DF] text-center shadow-xs">
            <div className="text-4xl font-heading text-[#FC8019] font-black tracking-normal mb-1">12 STAGES</div>
            <div className="text-[9px] font-mono text-[#666666] uppercase tracking-widest font-bold">PARALLEL HYPER-SPEED BLOCKS</div>
          </div>
        </div>
      </section>

      {/* 5. Festival Recognition & Awards */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 my-12 border-t border-[#ECE7DF]">
        <div className="mb-10 text-left">
          <span className="text-[10px] font-mono text-[#FC8019] tracking-[0.3em] uppercase block font-bold">ACCOLADE REGISTRY</span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-normal text-[#1C1C1C] uppercase mt-2 mb-4">
            FESTIVAL RECOGNITIONS
          </h2>
          <div className="w-16 h-0.5 bg-[#FC8019]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {cmsData.awards.map((award, idx) => (
            <div 
              key={award.id || idx} 
              className="p-6 bg-white border border-[#ECE7DF] hover:border-[#FC8019]/30 transition-all flex gap-4 items-start shadow-xs"
            >
              <div className="p-3 bg-[#FC8019]/5 text-[#FC8019] border border-[#FC8019]/15 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5 text-[#FC8019]" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-neutral-400 uppercase block mb-1 flex items-center gap-1 font-bold">
                  <Calendar className="w-3 h-3 text-[#FC8019]" /> {award.year} — {award.category}
                </span>
                <h4 className="text-sm font-subheading font-bold text-[#1C1C1C] tracking-wide uppercase mb-1">{award.awardName}</h4>
                <p className="text-xs font-sans text-[#555555] leading-relaxed">
                  Conferred for peerless post finishing on master release <strong className="text-[#1C1C1C] font-semibold">{award.project}</strong>.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
