import { Sparkles } from "lucide-react";
import { CmsData } from "../types";
import ProjectImage from "./ProjectImage";

interface TeamPageProps {
  cmsData: CmsData;
}

export default function TeamPage({ cmsData }: TeamPageProps) {
  return (
    <div className="bg-[#FAF7F2] text-[#1C1C1C] min-h-screen py-16">
      <section className="relative py-20 max-w-7xl mx-auto px-6 md:px-12 mt-8 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 brand-glow-radial opacity-45 pointer-events-none" />
        
        <div className="max-w-[80%] mx-auto">
          <span className="text-[10px] font-mono text-[#FC8019] tracking-[0.3em] uppercase flex items-center justify-center gap-2 mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5" /> MEET THE TEAM
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-normal uppercase leading-[1.05] text-[#1C1C1C]">
            OUR <br/>
            <span className="text-[#FC8019]">SPECIALISTS</span>
          </h1>
          <div className="w-16 h-0.5 bg-[#FC8019] mx-auto mt-6" />
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cmsData.team.slice(0, 12).map((member, idx) => (
            <div key={idx} className="text-center">
              <div className="relative overflow-hidden bg-[#FAF7F2] aspect-[3/4] mb-4">
                <ProjectImage
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-base font-bold text-[#1C1C1C] uppercase mb-1">{member.name}</h3>
              <p className="text-[10px] font-mono text-[#FC8019] uppercase tracking-wider mb-2 font-bold">{member.position}</p>
              <p className="text-xs text-[#666666]">{member.department}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
