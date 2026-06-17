import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Sparkles, ArrowRight } from "lucide-react";
import { CmsData } from "../types";
import ProjectImage from "./ProjectImage";

interface WorkPageProps {
  cmsData: CmsData;
}

export default function WorkPage({ cmsData }: WorkPageProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "EDITORIAL DEPARTMENT", name: "Editorial" },
    { id: "COLOR DEPARTMENT", name: "Color" },
    { id: "SOUND MIXING DEPARTMENT", name: "Sound" },
    { id: "MUSIC DEPARTMENT", name: "Music" }
  ];

  const filteredProjects = activeCategory === "all"
    ? cmsData.projects
    : cmsData.projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#FAF7F2] text-[#1C1C1C] min-h-screen py-16">
      <section className="relative py-20 max-w-7xl mx-auto px-6 md:px-12 mt-8 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 brand-glow-radial opacity-45 pointer-events-none" />
        
        <div className="max-w-[80%] mx-auto">
          <span className="text-[10px] font-mono text-[#FC8019] tracking-[0.3em] uppercase flex items-center justify-center gap-2 mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5" /> PORTFOLIO SHOWCASE
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-normal uppercase leading-[1.05] text-[#1C1C1C]">
            FEATURED <br/>
            <span className="text-[#FC8019]">PROJECTS</span>
          </h1>
          <div className="w-16 h-0.5 bg-[#FC8019] mx-auto mt-6" />
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all border cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#FC8019] text-white border-[#FC8019]"
                  : "bg-white text-[#555555] border-[#ECE7DF] hover:border-[#FC8019]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layoutId={project.id}
                onClick={() => setSelectedProject(project.id)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-[#FAF7F2] aspect-[3/4] mb-4">
                  <ProjectImage
                    src={project.poster}
                    alt={project.name}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <h3 className="text-base font-subheading font-bold text-[#1C1C1C] uppercase mb-1">
                  {project.name}
                </h3>
                <p className="text-xs text-[#666666] mb-2">{project.year}</p>
                <p className="text-xs text-[#555555]">{project.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
