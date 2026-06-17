import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CmsData, ProjectItem } from "../types";
import { 
  X, Film, Sliders, Volume2, Music, ExternalLink, 
  Play, Calendar, Tv, Users, ArrowRight 
} from "lucide-react";
import { ProjectImage } from "./ProjectImage";

interface FeaturedDepartmentWorkProps {
  cmsData: CmsData;
  onNavigate?: (page: string) => void;
}

export default function FeaturedDepartmentWork({ cmsData, onNavigate }: FeaturedDepartmentWorkProps) {
  const [activeTab, setActiveTab] = useState<string>("EDITORIAL DEPARTMENT");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const departments = [
    { id: "EDITORIAL DEPARTMENT", label: "Editorial", icon: <Film className="w-4 h-4" /> },
    { id: "COLOR DEPARTMENT", label: "Color Grading", icon: <Sliders className="w-4 h-4" /> },
    { id: "SOUND MIXING DEPARTMENT", label: "Sound Mixing & Atmos", icon: <Volume2 className="w-4 h-4" /> },
    { id: "MUSIC DEPARTMENT", label: "Music Department", icon: <Music className="w-4 h-4" /> },
  ];

  // Map project contributors dynamically of database
  const getProjectContributors = (project: ProjectItem): string[] => {
    // Find all team members whose previousWorks includes this project name
    const activeMembers = cmsData.team.filter(m => 
      m.previousWorks && 
      m.previousWorks.some(work => {
        const w = work.toLowerCase().trim();
        const pName = project.name.toLowerCase().trim();
        return w === pName || w.includes(pName) || pName.includes(w);
      })
    );

    // Filter them by the category/department mapping
    let deptName = "";
    if (project.category === "EDITORIAL DEPARTMENT") deptName = "EDITORS";
    else if (project.category === "COLOR DEPARTMENT") deptName = "DI DEPARTMENT";
    else if (project.category === "SOUND MIXING DEPARTMENT") deptName = "SOUND DEPARTMENT";
    else if (project.category === "MUSIC DEPARTMENT") deptName = "MUSIC";

    const filtered = activeMembers.filter(m => m.department === deptName);
    if (filtered.length > 0) {
      return filtered.map(m => m.name);
    }

    // Fallback: if no department-specific matches, return all matched non-founder members
    const nonFounders = activeMembers.filter(m => m.department !== "FOUNDERS");
    if (nonFounders.length > 0) {
      return nonFounders.map(m => m.name);
    }

    // Secondary Fallback if any previousWorks lists have it
    if (activeMembers.length > 0) {
      return activeMembers.map(m => m.name);
    }

    // Default static fallback from the old SWITCH block
    switch (project.category) {
      case "EDITORIAL DEPARTMENT":
        return ["Shashank Mali", "Pradeep Moram"];
      case "COLOR DEPARTMENT":
        return ["Vidhan Bommalla"];
      case "SOUND MIXING DEPARTMENT":
        return ["Santhosh Kumar Vodnala", "Swapnik Rao Valipe"];
      case "MUSIC DEPARTMENT":
        return ["Ravi Nidaparthy"];
      default:
        return ["Studio Specialist"];
    }
  };

  // Profile initials helper
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // Profile color helper
  const getAvatarBg = (name: string): string => {
    const colors = [
      "bg-[#FC8019] text-white", // Orange
      "bg-zinc-800 text-zinc-100", 
      "bg-neutral-900 text-white",
    ];
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
      sum += name.charCodeAt(i);
    }
    return colors[sum % colors.length];
  };

  // Group projects by category
  const getProjectsByDept = (deptId: string): ProjectItem[] => {
    return cmsData.projects.filter(p => p.category === deptId);
  };

  const filteredProjects = getProjectsByDept(activeTab);

  return (
    <section id="featured-department-work" className="relative py-24 md:py-32 bg-[#FAF7F2] overflow-hidden">
      {/* Decorative clean background mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FC8019]/2.5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header section with minimal clean styling */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 mb-16">
          <div className="text-left">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#FC8019] uppercase font-bold flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#FC8019] rounded-none rotate-45" /> CINEMATIC PORTFOLIO DIRECTORY
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-normal text-[#1C1C1C] uppercase leading-none mt-2">
              FEATURED DEPARTMENT WORK
            </h2>
            <div className="w-20 h-[3px] bg-[#FC8019] mt-6" />
          </div>

          {/* Department Tab Buttons */}
          <div className="flex flex-wrap gap-2.5 bg-white p-1.5 border border-[#ECE7DF] shadow-xs">
            {departments.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 text-[10px] sm:text-xs font-subheading font-bold uppercase tracking-wider transition-all duration-300 rounded-none cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#FC8019] text-white shadow-xs"
                    : "bg-transparent text-neutral-500 hover:text-[#1C1C1C] hover:bg-[#FAF7F2]"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Netflix-style Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => {
              const members = getProjectContributors(p);
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onClick={() => setSelectedProject(p)}
                  className="group relative flex flex-col justify-between bg-white border border-[#ECE7DF] hover:border-[#FC8019] hover:shadow-xl transition-all duration-500 cursor-pointer h-full select-none overflow-hidden"
                >
                  {/* Image Poster with Hover Zoom */}
                  <div className="aspect-[2/3] w-full overflow-hidden relative bg-neutral-900 border-b border-[#ECE7DF]">
                    <ProjectImage
                      projectName={p.name}
                      explicitPoster={p.poster}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 brightness-95 group-hover:brightness-100"
                    />
                    
                    {/* Dark gradient shadow inside card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                    {/* Meta tags embedded inside poster */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                      <span className="px-2 py-0.5 bg-[#FC8019] text-white text-[8px] font-mono font-bold uppercase tracking-widest whitespace-nowrap">
                        {p.genre || "Drama"}
                      </span>
                      <span className="px-2 py-0.5 bg-black/80 text-white text-[8px] font-mono tracking-widest uppercase">
                        {p.year}
                      </span>
                    </div>

                    {/* Title and details overlay on poster bottom */}
                    <div className="absolute bottom-0 inset-x-0 p-5 text-left z-20">
                      <p className="text-[10px] font-mono text-[#FC8019] uppercase tracking-widest font-semibold mb-1">
                        {p.platform || "Platform"}
                      </p>
                      <h4 className="text-xl font-heading font-black tracking-tight text-white uppercase group-hover:text-[#FC8019] transition-colors leading-tight mb-2 line-clamp-2">
                        {p.name}
                      </h4>
                      <p className="text-neutral-400 font-sans text-xs line-clamp-2 font-light leading-relaxed mb-4">
                        {p.overview || "Professional post-production completion."}
                      </p>

                      {/* Worked By Team Chips */}
                      <div className="pt-3 border-t border-white/10">
                        <span className="text-[8.5px] font-mono text-neutral-400 tracking-wider uppercase block mb-2">
                          Worked By:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {members.map((m, idx) => (
                            <span 
                              key={idx}
                              className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-xs border border-white/5 py-0.5 px-2 text-[9px] font-mono text-white tracking-wide"
                            >
                              <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-bold ${getAvatarBg(m)}`}>
                                {getInitials(m)}
                              </span>
                              <span className="truncate max-w-[80px]">{m.split(" ")[0]}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Information Card Deck */}
                  <div className="p-5 text-left bg-white flex flex-col justify-between flex-grow">
                    <div className="space-y-2 mb-4 font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                      <div className="flex justify-between items-center pb-2 border-b border-[#FAF7F2]">
                        <span>Director:</span>
                        <span className="text-[#1C1C1C] font-semibold">{p.director || "Public Info"}</span>
                      </div>
                      <div className="flex justify-between items-start pt-1">
                        <span>Role Provided:</span>
                        <span className="text-[#FC8019] font-bold text-right pl-4 max-w-[150px] line-clamp-2 leading-tight">
                          {p.role}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(p);
                      }}
                      className="w-full py-2.5 border border-[#ECE7DF] hover:border-[#FC8019] bg-transparent hover:bg-[#FC8019]/5 text-neutral-600 hover:text-[#FC8019] font-subheading text-[9px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Master Registry Nav link */}
        {onNavigate && (
          <div className="mt-16 text-center">
            <button
              onClick={() => onNavigate("work")}
              className="px-10 py-4 border border-[#1C1C1C] hover:border-[#FC8019] text-[#1C1C1C] hover:text-[#FC8019] hover:bg-[#FC8019]/5 transition-all text-[10px] font-mono uppercase tracking-[0.2em] cursor-pointer bg-transparent duration-300"
            >
              EXPLORE ALL MASTER ARCHIVES
            </button>
          </div>
        )}

      </div>

      {/* Cinematic Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 overflow-y-auto bg-black/90 backdrop-blur-md">
            
            {/* Backdrop Closer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-white border border-[#FC8019]/30 shadow-2xl z-20 max-h-[90vh] overflow-y-auto no-scrollbar rounded-none text-left"
            >
              
              {/* Close Button Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 border border-[#ECE7DF] hover:border-[#FC8019] bg-white text-zinc-950 hover:text-[#FC8019] flex items-center justify-center transition-all cursor-pointer rounded-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                
                {/* Poster column */}
                <div className="md:col-span-2 relative bg-neutral-950 aspect-[2/3] md:aspect-auto md:min-h-full">
                  <ProjectImage
                    projectName={selectedProject.name}
                    explicitPoster={selectedProject.poster}
                    className="w-full h-full object-cover"
                  />
                  {/* Floating tags */}
                  <div className="absolute top-4 left-4 bg-[#FC8019] text-white px-2.5 py-0.5 text-[9px] font-mono tracking-widest uppercase font-bold">
                    {selectedProject.genre || "Drama"}
                  </div>
                </div>

                {/* Information content column */}
                <div className="md:col-span-3 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    {/* Header meta */}
                    <div className="flex items-center gap-3 text-neutral-400 font-mono text-[9px] uppercase tracking-widest mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[#FC8019]" /> {selectedProject.year}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Tv className="w-3 h-3 text-[#FC8019]" /> {selectedProject.platform || "OTT"}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-heading font-black text-[#1C1C1C] uppercase tracking-tight leading-none mb-1">
                      {selectedProject.name}
                    </h3>
                    <p className="text-xs font-mono text-[#FC8019] uppercase tracking-widest mb-6">
                      {selectedProject.category.replace("DEPARTMENT", "SERVICES")}
                    </p>

                    <div className="w-12 h-0.5 bg-[#FC8019] mb-6" />

                    {/* Synopsis */}
                    <p className="text-neutral-600 font-sans text-sm leading-relaxed mb-6">
                      {selectedProject.overview || "A highly demanding post-production co-production conformed and mastered locally inside our Dolby-calibrated workspace suites."}
                    </p>

                    {/* Director, Cast, and Roles metadata lists */}
                    <div className="space-y-3 font-sans text-xs text-neutral-700 border-y border-[#ECE7DF] py-5 mb-6">
                      <div className="grid grid-cols-4 gap-2">
                        <span className="font-mono text-[9.5px] uppercase text-neutral-400 tracking-wider">Director:</span>
                        <span className="col-span-3 font-semibold text-zinc-900">{selectedProject.director || "Verified Public Data"}</span>
                      </div>
                      
                      {selectedProject.cast && selectedProject.cast.length > 0 && (
                        <div className="grid grid-cols-4 gap-2">
                          <span className="font-mono text-[9.5px] uppercase text-neutral-400 tracking-wider">Starring:</span>
                          <span className="col-span-3 text-zinc-950 font-medium">{selectedProject.cast.join(", ")}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-4 gap-2">
                        <span className="font-mono text-[9.5px] uppercase text-neutral-400 tracking-wider">Contribution:</span>
                        <span className="col-span-3 text-neutral-600 italic leading-snug">{selectedProject.role}</span>
                      </div>

                      {/* Team Members contributed list */}
                      <div className="grid grid-cols-4 gap-2 pt-2">
                        <span className="font-mono text-[9.5px] uppercase text-neutral-400 tracking-wider">Team:</span>
                        <span className="col-span-3 flex flex-wrap gap-1.5">
                          {getProjectContributors(selectedProject).map((m, idx) => (
                            <span 
                              key={idx}
                              className="inline-flex items-center gap-1 bg-[#FAF7F2] border border-[#ECE7DF] py-0.5 px-2 text-[9px] font-mono text-neutral-700"
                            >
                              <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-bold ${getAvatarBg(m)}`}>
                                {getInitials(m)}
                              </span>
                              <span>{m}</span>
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions footer row */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    {selectedProject.imdbUrl && (
                      <a
                        href={selectedProject.imdbUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 h-12 bg-zinc-950 hover:bg-neutral-900 text-white font-subheading text-[10px] tracking-widest font-bold uppercase flex items-center justify-center gap-2 transition-all"
                      >
                        <span>IMDb RECORD</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    
                    {selectedProject.videoUrl && (
                      <a
                        href={selectedProject.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 h-12 border border-[#FC8019] text-[#FC8019] hover:bg-[#FC8019] hover:text-white font-subheading text-[10px] tracking-widest font-bold uppercase flex items-center justify-center gap-2 transition-all"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>WATCH WORKREEL</span>
                      </a>
                    )}
                  </div>

                </div>

              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
