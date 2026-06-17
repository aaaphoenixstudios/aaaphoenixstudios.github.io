import { Sparkles, Monitor, Users, Zap } from "lucide-react";
import { CmsData } from "../types";

interface StudioPageProps {
  cmsData: CmsData;
}

export default function StudioPage({ cmsData }: StudioPageProps) {
  return (
    <div className="bg-[#FAF7F2] text-[#1C1C1C] min-h-screen py-16">
      <section className="relative py-20 max-w-7xl mx-auto px-6 md:px-12 mt-8 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 brand-glow-radial opacity-45 pointer-events-none" />
        
        <div className="max-w-[80%] mx-auto">
          <span className="text-[10px] font-mono text-[#FC8019] tracking-[0.3em] uppercase flex items-center justify-center gap-2 mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5" /> OUR FACILITIES
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-normal uppercase leading-[1.05] text-[#1C1C1C]">
            STUDIO <br/>
            <span className="text-[#FC8019]">SHOWCASE</span>
          </h1>
          <div className="w-16 h-0.5 bg-[#FC8019] mx-auto mt-6" />
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cmsData.showcase.map((item, idx) => (
            <div key={idx} className="p-8 bg-white border border-[#ECE7DF] hover:border-[#FC8019]/40 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Monitor className="w-6 h-6 text-[#FC8019]" />
                <h3 className="text-xl font-bold text-[#1C1C1C] uppercase">{item.title}</h3>
              </div>
              <p className="text-[#555555] text-sm mb-4">{item.description}</p>
              <div className="pt-4 border-t border-[#ECE7DF]">
                <p className="text-[9px] font-mono text-[#FC8019] uppercase mb-2 font-bold">Equipment</p>
                <ul className="space-y-1">
                  {item.equipment.map((eq, eidx) => (
                    <li key={eidx} className="text-xs text-[#666666]">{eq}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
