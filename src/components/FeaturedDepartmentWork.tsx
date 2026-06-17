import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { CmsData, ProjectItem } from "../types";
import ProjectImage from "./ProjectImage";

interface FeaturedDepartmentWorkProps {
  cmsData: CmsData;
  onNavigate: (page: string) => void;
}

export default function FeaturedDepartmentWork({
  cmsData,
  onNavigate
}: FeaturedDepartmentWorkProps) {
  const [activeCategory, setActiveCategory] = useState("editorial");

  const categories = [
    { id: "editorial", name: "EDITORIAL", label: "Editing" },
    { id: "color", name: "COLOR", label: "DI Grading" },
    { id: "sound", name: "SOUND", label: "Atmos Mixing" },
    { id: "music", name: "MUSIC", label: "Music" }
  ];

  const getProjectsByCategory = (categoryId: string): ProjectItem[] => {
    const categoryMap: Record<string, string> = {
      editorial: "EDITORIAL DEPARTMENT",
      color: "COLOR DEPARTMENT",
      sound: "SOUND MIXING DEPARTMENT",
      music: "MUSIC DEPARTMENT"
    };
    return cmsData.projects
      .filter(p => p.category === categoryMap[categoryId])
      .slice(0, 3) || [];
  };

  const activeProjects = getProjectsByCategory(activeCategory);

  return (
    <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 border-b border-[#ECE7DF]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#FC8019] uppercase font-bold">
            PORTFOLIO DEPARTMENTS
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-normal text-[#1C1C1C] uppercase leading-none mt-2">
            FEATURED WORK
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer border ${
              activeCategory === cat.id
                ? "bg-[#FC8019] text-white border-[#FC8019]"
                : "bg-white text-[#555555] border-[#ECE7DF] hover:border-[#FC8019]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {activeProjects.length > 0 ? (
            activeProjects.map(project => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-[#FAF7F2] aspect-[3/4] mb-4">
                  <ProjectImage
                    src={project.poster}
                    alt={project.name}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <h3 className="text-base font-subheading font-bold text-[#1C1C1C] uppercase mb-1">
                  {project.name}
                </h3>
                <p className="text-xs text-[#555555] mb-3">{project.year}</p>
                <p className="text-xs text-[#666666] line-clamp-2 mb-3">
                  {project.overview || project.role}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-[#999999]">
              No projects found in this category
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-16 text-center">
        <button
          onClick={() => onNavigate("work")}
          className="px-8 py-3 border border-[#FC8019] text-[#FC8019] hover:bg-[#FC8019] hover:text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 mx-auto"
        >
          <span>View All Portfolio</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
