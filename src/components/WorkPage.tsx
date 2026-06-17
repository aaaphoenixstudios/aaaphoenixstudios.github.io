import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, Calendar, Sparkles, MonitorPlay } from "lucide-react";
import { CmsData, ProjectItem } from "../types";
import { ProjectImage } from "./ProjectImage";

export default function WorkPage({ cmsData }: { cmsData: CmsData }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const getFallbackProjectPoster = (name: string): string => {
    const presets: Record<string, string> = {
      "happy ending": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
      "14 days": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80",
      "raja ramyam": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
      "kalaham madhuram": "https://images.unsplash.com/photo-1542204172-e70528091852?auto=format&fit=crop&w=800&q=80",
      "siblings": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
      "agent sai srinivasa athreya": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "majili": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      "mission impossible": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
      "goa trip": "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
      "kanyakumari": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      "sristi": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80"
    };
    return presets[name.toLowerCase().trim()] || "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80";
  };

  // Dynamically extract categories from current projects roster for automatic future-proof filters
  const categories = [
    "All",
    ...Array.from(new Set(cmsData.projects.map(p => p.category.toUpperCase())))
  ];

  const filteredProjects = selectedCategory === "All"
    ? cmsData.projects
    : cmsData.projects.filter(p => p.category.toUpperCase() === selectedCategory.toUpperCase());

  return (
    <div className="bg-[#FAF7F2] text-[#1C1C1C] min-h-screen py-16">
      
      {/* 1. Title Section */}
      <section className="relative py-20 max-w-7xl mx-auto px-6 md:px-12 mt-8 text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 brand-glow-radial opacity-45 pointer-events-none" />
        <div className="max-w-[80%] mx-auto">
          <span className="text-[10px] font-mono text-[#FC8019] tracking-[0.3em] uppercase block mb-3 font-bold">
            MASTER REGISTRY OF FILMS, OTT & MUSIC CO-PRODUCTIONS
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-normal uppercase leading-[1.05] text-[#1C1C1C]">
            STUDIO <span className="text-[#FC8019]">PORTFOLIO</span>
          </h1>
          <div className="w-16 h-0.5 bg-[#FC8019] mx-auto mt-6" />
        </div>
      </section>

      {/* 2. Structured Department Filter Selector */}
      <section className="py-2 max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2.5 border-b border-[#ECE7DF] pb-8">
          {categories.map((cat) => (
            <button
              id={`filter-btn-${cat.toLowerCase().replace(/ /g, "-")}`}
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-[10px] font-subheading font-bold uppercase tracking-wider transition-all rounded-none cursor-pointer border ${
                selectedCategory === cat
                  ? "border-[#FC8019] text-white bg-[#FC8019] shadow-xs"
                  : "border-[#ECE7DF] text-[#666666] hover:text-[#1C1C1C] hover:border-[#FC8019]/40 bg-white"
              }`}
            >
              {cat === "All" ? "ALL DEPARTMENTS" : cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Portfolio Projects Cards */}
      <section className="py-2 max-w-7xl mx-auto px-6 md:px-12">
        <div id="portfolio-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              id={`project-card-${project.id}`}
              key={project.id || idx}
              className="group bg-white border border-[#ECE7DF] hover:border-[#FC8019]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Poster Container */}
              <div className="aspect-[2/3] w-full overflow-hidden relative bg-neutral-100 p-1 border-b border-[#ECE7DF]">
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors z-10" />
                <ProjectImage
                  projectName={project.name}
                  explicitPoster={project.poster}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const fallback = getFallbackProjectPoster(project.name);
                    if (target.src !== fallback) {
                      target.src = fallback;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                />
                
                {/* Visual Eye Hover badge overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#FAF7F2]/90 backdrop-blur-xs">
                  <button
                    id={`view-specs-btn-${project.id}`}
                    onClick={() => setActiveProject(project)}
                    className="px-5 py-3 rounded-none bg-[#FC8019] hover:bg-[#E06A0E] text-white font-subheading text-[10px] tracking-widest font-bold uppercase flex items-center gap-2 cursor-pointer transition-colors border-none shadow-sm"
                  >
                    <Eye className="w-4 h-4 text-white" /> DETAILS & TECHNICAL SPECS
                  </button>
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 z-25 px-2 py-1 bg-[#1C1C1C] text-white font-mono text-[8.5px] uppercase tracking-wider font-bold">
                  {project.category}
                </div>
                
                {project.platform && (
                  <div className="absolute bottom-3 left-3 z-20 px-2 py-0.5 bg-[#FC8019] text-white font-mono text-[8.5px] uppercase tracking-wider font-semibold">
                    {project.platform}
                  </div>
                )}
              </div>

              {/* Card Context */}
              <div className="p-6 bg-white flex flex-col justify-between flex-grow text-left">
                <div>
                  <h3 className="text-lg font-subheading font-bold text-[#1C1C1C] uppercase tracking-wider mb-2">
                    {project.name}
                  </h3>
                  <div className="flex justify-between text-[9.5px] font-mono text-neutral-400 uppercase tracking-widest mb-4 pb-2 border-b border-[#FAF7F2]">
                    <span>Director: <strong className="text-[#1C1C1C]">{project.director || "PUBLIC DATA"}</strong></span>
                    <span>{project.year}</span>
                  </div>
                  <p className="text-[#555555] text-xs leading-relaxed font-sans line-clamp-3">
                    {project.overview || project.role}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#FAF7F2]">
                  <button
                    id={`details-btn-${project.id}`}
                    onClick={() => setActiveProject(project)}
                    className="w-full py-2.5 border border-[#ECE7DF] hover:border-[#FC8019] bg-transparent hover:bg-[#FC8019]/5 text-neutral-500 hover:text-[#FC8019] font-mono text-[9px] font-bold tracking-widest uppercase transition-colors cursor-pointer"
                  >
                    DETAILS & CREDITS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Lightbox Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-[#1C1C1C]/65 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="relative w-full max-w-4xl bg-[#FAF7F2] border border-[#ECE7DF] shadow-2xl overflow-y-auto no-scrollbar max-h-[92vh]"
            >
              {/* Close Button */}
              <button
                id="close-lightbox-btn"
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-[#FC8019] z-50 p-2 cursor-pointer bg-white border border-[#ECE7DF] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-10 text-left">
                {/* Poster display */}
                <div className="col-span-1 md:col-span-5">
                  <div className="aspect-[2/3] w-full overflow-hidden bg-[#ECE7DF] p-1.5 border border-[#ECE7DF] shadow-xs">
                    <ProjectImage
                      projectName={activeProject.name}
                      explicitPoster={activeProject.poster}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const fallback = getFallbackProjectPoster(activeProject.name);
                        if (target.src !== fallback) {
                          target.src = fallback;
                        }
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details column */}
                <div className="col-span-1 md:col-span-7 flex flex-col justify-between text-[#1C1C1C]">
                  <div>
                    <span className="text-[10px] font-mono text-[#FC8019] tracking-[0.25em] uppercase flex items-center gap-1.5 mb-2 font-bold">
                      <Sparkles className="w-3.5 h-3.5" /> VERIFIED CREDIT REGISTRY
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-black tracking-normal uppercase leading-tight mb-2">
                      {activeProject.name}
                    </h2>
                    
                    <div className="flex items-center gap-4 text-[9px] font-mono text-neutral-400 pt-2 pb-4 border-b border-[#ECE7DF] uppercase font-bold">
                      <span>DEPT: {activeProject.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#FC8019]" /> REGISTRY: {activeProject.year}</span>
                    </div>

                    <div className="space-y-4 my-6">
                      {activeProject.director && (
                        <div>
                          <span className="text-[9px] font-mono text-neutral-400 uppercase block mb-1 font-bold">DIRECTOR</span>
                          <p className="text-[#1C1C1C] text-sm uppercase tracking-wider font-bold">{activeProject.director}</p>
                        </div>
                      )}
                      
                      {activeProject.platform && (
                        <div>
                          <span className="text-[9px] font-mono text-neutral-400 uppercase block mb-1 font-bold">DISTRIBUTION PLATFORM</span>
                          <p className="text-[#FC8019] text-sm uppercase tracking-wider font-mono font-bold">{activeProject.platform}</p>
                        </div>
                      )}

                      <div>
                        <span className="text-[9px] font-mono text-neutral-400 uppercase block mb-1 font-bold">PROJECT SUMMARY</span>
                        <p className="text-[#555555] text-xs leading-relaxed font-sans text-justify bg-white p-4 border border-[#ECE7DF]">
                          {activeProject.overview || `${activeProject.name} conformed to exact technical parity on our certified studio channels.`}
                        </p>
                      </div>

                      <div>
                        <span className="text-[9px] font-mono text-neutral-400 uppercase block mb-1 font-bold">ROLE & RESPONSIBILITY</span>
                        <p className="text-[#1C1C1C] text-xs font-mono leading-relaxed uppercase font-semibold">
                          {activeProject.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* High fidelity Technical standard blocks */}
                  <div className="pt-6 border-t border-[#ECE7DF] grid grid-cols-2 gap-4 text-[9px] font-mono text-neutral-500 uppercase tracking-widest pl-0.5">
                    <div>
                      <span className="text-neutral-400 block mb-0.5">RESOLUTION</span>
                      <span className="text-[#1C1C1C] text-[10.5px] font-bold">UNCOMPRESSED 4K DCI MASTER</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block mb-0.5">COLORSPACE</span>
                      <span className="text-[#1C1C1C] text-[10.5px] font-bold">ACES CC (V1.3) REFERENCE</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
