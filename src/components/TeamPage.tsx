import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Instagram, Sparkles, User, Briefcase, Award, ExternalLink, Film } from "lucide-react";
import { CmsData, TeamMember } from "../types";

export default function TeamPage({ cmsData }: { cmsData: CmsData }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Group team members by department category dynamically
  const uniqueDepartments = Array.from(new Set((cmsData?.team || []).map((m) => (m.department || "SPECIALISTS").toUpperCase())));
  const departments = uniqueDepartments.map((dept) => ({
    title: dept,
    members: (cmsData?.team || []).filter((m) => (m.department || "SPECIALISTS").toUpperCase() === dept)
  }));

  // Helper mapping names to high-quality fallback Unsplash portrait images in case local images are not ready.
  const getFallbackImage = (name: string): string => {
    const fallbacks: Record<string, string> = {
      "ashoka": "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=500&q=80",
      "anand jatla": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
      "vidhan bommalla": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
      "shashank mali": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80",
      "pradeep moram": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
      "shantosh kumar vadamala": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
      "swapnik rao valipe": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
      "ravi nidamarthy": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=500&q=80"
    };
    return fallbacks[name.toLowerCase()] || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80";
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1C1C1C] min-h-screen py-16">
      
      {/* 1. Title Header Section */}
      <section className="relative py-20 max-w-7xl mx-auto px-6 md:px-12 mt-8 text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 brand-glow-radial opacity-45 pointer-events-none" />
        <div className="max-w-[80%] mx-auto">
          <span className="text-[10px] font-mono text-[#FC8019] tracking-[0.3em] uppercase block mb-3 font-bold">
            TECHNICAL & CREATIVE COLLECTIVE
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-normal uppercase leading-[1.05] text-[#1C1C1C]">
            STUDIO <span className="text-[#FC8019]">ROSTER & EXPERTS</span>
          </h1>
          <div className="w-16 h-0.5 bg-[#FC8019] mx-auto mt-6" />
        </div>
      </section>

      {/* 2. Roster Departments Grid layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 mb-16">
        {departments.map((dept) => {
          if (dept.members.length === 0) return null;
          
          return (
            <section key={dept.title} id={`dept-${dept.title.toLowerCase().replace(/ /g, "-")}`} className="space-y-10 text-left">
              {/* Department Header */}
              <div className="flex items-center gap-4 border-b border-[#ECE7DF] pb-4">
                <span className="w-2.5 h-2.5 bg-[#FC8019] rotate-45 shrink-0" />
                <h2 className="text-sm sm:text-base font-subheading font-bold tracking-wider text-[#1C1C1C] uppercase leading-none">
                  {dept.title === "MUSIC" ? "MUSIC COMPOSITION DEPARTMENT" : dept.title}
                </h2>
                <span className="text-[10px] font-mono text-neutral-400 uppercase font-bold">
                  ({dept.members.length} {dept.members.length === 1 ? "SPECIALIST" : "SPECIALISTS"})
                </span>
              </div>

              {/* Department members cards layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dept.members.map((member) => (
                  <div
                    id={`team-card-${member.id}`}
                    key={member.id}
                    onMouseEnter={() => setHoveredId(member.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="group relative bg-white border border-[#ECE7DF] overflow-hidden flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-[#FC8019]/40 hover:shadow-md h-full text-left"
                  >
                    {/* Member image with failback logic */}
                    <div className="aspect-[4/5] relative overflow-hidden bg-neutral-100 p-1 border-b border-[#ECE7DF]">
                      <img
                        src={member.photo}
                        alt={member.name}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = getFallbackImage(member.name);
                        }}
                        className="w-full h-full object-cover brightness-95 group-hover:brightness-100 group-hover:scale-102 transition-transform duration-700 object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                      
                      <div className="absolute bottom-4 left-4 z-10 text-left">
                        <span className="text-[9px] font-mono text-white/90 bg-[#FC8019] px-2 py-0.5 uppercase tracking-wide inline-block mb-1 font-bold">
                          {member.position}
                        </span>
                        <h3 className="text-xl font-heading tracking-normal text-white uppercase leading-none mt-1">
                          {member.name}
                        </h3>
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                      <div className="space-y-4">
                        {member.summary && (
                          <p className="text-[#555555] text-xs font-sans leading-relaxed text-justify">
                            {member.summary}
                          </p>
                        )}

                        {member.experience && (
                          <div className="flex items-start gap-2.5 pt-4 border-t border-[#FAF7F2]">
                            <Briefcase className="w-4 h-4 text-[#FC8019] mt-0.5 shrink-0" />
                            <div>
                              <span className="text-[8px] font-mono text-neutral-400 uppercase block font-bold">WORK HISTORY RECORD</span>
                              <p className="text-[#1C1C1C] text-xs font-sans font-semibold mt-0.5">{member.experience}</p>
                            </div>
                          </div>
                        )}

                        {member.previousWorks && member.previousWorks.length > 0 && (
                          <div className="pt-4 border-t border-[#FAF7F2]">
                            <div className="flex items-center gap-1.5 mb-2.5">
                              <Film className="w-3.5 h-3.5 text-[#FC8019]" />
                              <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-wider block font-bold">PREVIOUS WORKS & CREDITS</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {member.previousWorks.map((work, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center px-2 py-0.5 bg-[#FAF7F2] hover:bg-[#FC8019]/5 border border-[#ECE7DF] hover:border-[#FC8019]/40 text-[#1C1C1C] hover:text-[#FC8019] text-[9.5px] font-mono font-bold tracking-tight uppercase transition-all duration-300 select-none"
                                >
                                  [ {work} ]
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Social & External Profiles */}
                      <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#FAF7F2]">
                        <div className="flex items-center gap-3">
                          {member.linkedin && (
                            <a
                              id={`team-linkedin-${member.id}`}
                              href={member.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              className="text-neutral-400 hover:text-[#FC8019] transition-colors p-1"
                              title="LinkedIn Connection"
                            >
                              <Linkedin className="w-4 h-4" />
                            </a>
                          )}
                          {member.instagram && (
                            <a
                              id={`team-instagram-${member.id}`}
                              href={member.instagram}
                              target="_blank"
                              rel="noreferrer"
                              className="text-neutral-400 hover:text-[#FC8019] transition-colors p-1"
                              title="Instagram Portfolio"
                            >
                              <Instagram className="w-4 h-4" />
                            </a>
                          )}
                        </div>

                        {member.imdb && (
                          <a
                            id={`team-imdb-${member.id}`}
                            href={member.imdb}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[9.5px] font-mono text-neutral-400 hover:text-[#FC8019] transition-colors flex items-center gap-1 uppercase font-bold"
                            title="IMDb Profile Credits"
                          >
                            <span>IMDb Credits</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

    </div>
  );
}
