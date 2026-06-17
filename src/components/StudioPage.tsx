import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, AlertCircle, Award } from "lucide-react";
import { CmsData } from "../types";

export default function StudioPage({ cmsData }: { cmsData: CmsData }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItemIdx, setSelectedItemIdx] = useState<number | null>(null);

  // Mapped list of fallback local photographs matching categories
  const getFallbackImage = (category: string, id: string): string => {
    switch (category) {
      case "Editing Suites":
        return "/EditingSuite.jpg.jpeg";
      case "DI Color Grading Rooms":
        return "/DiRoom.png";
      case "Dolby Atmos Studio":
        return "/studio/sound-design-room.jpg";
      case "Sound Design Room":
        return "/studio/sound-design-room.jpg";
      case "Dubbing Theatre":
        return "/studio/dubbing-theatre.jpg";
      case "Client Lounge":
        return "/EditingSuite.jpg.jpeg";
      case "Preview Theatre":
        return "/DiRoom.png";
      case "Production Floor":
        return "/EditingSuite.jpg.jpeg";
      case "Team At Work":
        return "/Behindthescenes.jpg.jpeg";
      case "Behind The Scenes":
        return "/Behindthescenes.jpg.jpeg";
      default:
        return "/DiRoom.png";
    }
  };

  const galleryItems = cmsData.gallery || [];

  // Dynamically extract all categories present in the active gallery collection for future proofing!
  const categories = [
    "All",
    ...Array.from(new Set(galleryItems.map((item) => item.category)))
  ];

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIdx === null) return;
    setSelectedItemIdx((selectedItemIdx + 1) % filteredItems.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIdx === null) return;
    setSelectedItemIdx((selectedItemIdx - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1C1C1C] min-h-screen pb-32 relative">
      
      {/* 1. Hero Header Section */}
      <section id="studio-hero-title" className="relative pt-36 pb-12 z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <div className="text-center">
          <span className="text-[10px] font-mono text-[#FC8019] tracking-[0.3em] uppercase block mb-4 font-bold">
            INSIDE AAA PHOENIX
          </span>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-normal leading-[1.05] text-[#1C1C1C] uppercase max-w-[80%] mx-auto mt-2 mb-10">
            Explore our world-class <br/>
            <span className="text-[#FC8019]">post-production environment.</span>
          </h1>

          <div className="w-16 h-0.5 bg-[#FC8019] mx-auto" />
        </div>
      </section>

      {/* 2. Category Navigation Bar with Thin Divider */}
      <section id="gallery-filters" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-2 pb-8 flex flex-col items-center">
        <div className="w-full flex flex-wrap justify-center gap-2 max-w-5xl py-4 border-y border-[#ECE7DF]">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedItemIdx(null);
              }}
              className={`px-4 py-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[1px] transition-all duration-300 pointer-events-auto cursor-pointer rounded-none relative bg-transparent ${
                activeCategory === cat
                  ? "text-white font-bold border border-[#FC8019] bg-[#FC8019] shadow-xs"
                  : "hover:bg-white text-neutral-500 hover:text-[#1C1C1C] border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Interactive Gallery Grid Area */}
      <section id="gallery-grid" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-[#ECE7DF] mx-auto max-w-xl bg-white shadow-xs">
            <AlertCircle className="w-8 h-8 text-neutral-400 mx-auto mb-3" />
            <span className="text-neutral-500 font-mono text-xs uppercase tracking-widest block">No snapshots available in this category</span>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
          >
            {filteredItems.map((item, idx) => {
              const displayImage = getFallbackImage(item.category, item.id);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white border border-[#ECE7DF] hover:border-[#FC8019]/40 hover:shadow-md transition-all duration-500 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedItemIdx(idx)}
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-neutral-100 p-1">
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102 brightness-95 group-hover:brightness-100"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== displayImage) {
                          target.src = displayImage;
                        }
                      }}
                    />

                    {/* Quick zoom hint tag */}
                    <div className="absolute top-3 right-3 z-20 p-2 bg-white/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#ECE7DF]">
                      <Maximize2 className="w-3.5 h-3.5 text-[#FC8019]" />
                    </div>

                    {/* Category Label bottom left */}
                    <div className="absolute bottom-3 left-3 z-20 px-2.5 py-1 bg-white border border-[#ECE7DF] text-[#1C1C1C] font-mono text-[9px] font-bold uppercase tracking-wider shadow-xs">
                      {item.category}
                    </div>
                  </div>

                  {/* Metadata descriptor area */}
                  <div className="p-5 bg-white border-t border-[#ECE7DF] text-left">
                    <h3 className="text-base font-subheading font-bold text-[#1C1C1C] uppercase tracking-wide mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#555555] text-xs leading-relaxed font-sans line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </section>

      {/* Lightbox Modal for immersive cinematic viewing */}
      <AnimatePresence>
        {selectedItemIdx !== null && filteredItems[selectedItemIdx] && (
          <div className="fixed inset-0 z-[5000] flex flex-col justify-between p-4 md:p-8">
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItemIdx(null)}
              className="absolute inset-0 bg-[#1C1C1C]/96 backdrop-blur-md z-0 cursor-zoom-out"
            />

            {/* Top Toolbar */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between text-white border-b border-white/5 pb-4 select-none">
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#FC8019] animate-pulse" /> PHOENIX STUDIO THEATRICAL SCREENING {selectedItemIdx + 1} OF {filteredItems.length}
                </span>
                <span className="text-xs font-bold font-mono tracking-widest uppercase text-[#FC8019] mt-1">
                  {filteredItems[selectedItemIdx].category}
                </span>
              </div>

              {/* Close Button Trigger */}
              <button
                type="button"
                onClick={() => setSelectedItemIdx(null)}
                className="p-3 text-neutral-400 hover:text-white align-middle border border-transparent hover:border-white/10 transition-all rounded-none cursor-pointer bg-black/20"
                title="Exit lightbox viewing mode"
              >
                <X className="w-5 h-5 bg-transparent border-none" />
              </button>
            </div>

            {/* Central Slide Window */}
            <div className="relative z-10 flex-grow w-full max-w-5xl mx-auto flex items-center justify-center py-6">
              {/* Left Selector Arrow */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-0 p-3.5 bg-black/60 hover:bg-white/10 hover:text-[#FC8019] border border-white/5 hover:border-white/15 transition-all cursor-pointer z-20 select-none rounded-none text-white"
                title="Previous snapshot"
              >
                <ChevronLeft className="w-6 h-6 bg-transparent border-none" />
              </button>

              {/* Visual Frame */}
              <motion.div
                key={selectedItemIdx}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.4 }}
                className="max-h-[70vh] max-w-full overflow-hidden p-1 border border-white/5 bg-black relative shadow-2xl"
              >
                <img
                  src={filteredItems[selectedItemIdx].imageUrl}
                  alt={filteredItems[selectedItemIdx].title}
                  className="max-h-[66vh] w-auto max-w-full object-contain pointer-events-none mx-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const catFallback = getFallbackImage(filteredItems[selectedItemIdx].category, filteredItems[selectedItemIdx].id);
                    if (target.src !== catFallback) {
                      target.src = catFallback;
                    }
                  }}
                />
              </motion.div>

              {/* Right Selector Arrow */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-0 p-3.5 bg-black/60 hover:bg-white/10 hover:text-[#FC8019] border border-white/5 hover:border-white/15 transition-all cursor-pointer z-20 select-none rounded-none text-white"
                title="Next snapshot"
              >
                <ChevronRight className="w-6 h-6 bg-transparent border-none" />
              </button>
            </div>

            {/* Bottom Descriptor Card */}
            <div className="relative z-10 w-full max-w-4xl mx-auto text-center border-t border-white/5 pt-4 select-none">
              <h2 className="text-xl md:text-2xl font-heading font-black tracking-normal text-white uppercase mb-1">
                {filteredItems[selectedItemIdx].title}
              </h2>
              <p className="text-neutral-400 font-sans text-xs md:text-sm font-light max-w-2xl mx-auto leading-relaxed">
                {filteredItems[selectedItemIdx].description}
              </p>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Security Credentials Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 border-t border-[#ECE7DF] mt-12">
        <div id="tpn-credential-card" className="p-8 bg-white border border-[#ECE7DF] flex flex-col md:flex-row items-center justify-between gap-8 text-left shadow-xs">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-[#FC8019]/5 text-[#FC8019] border border-[#FC8019]/15 shrink-0">
              <Award className="w-8 h-8 font-light text-[#FC8019]" />
            </div>
            <div>
              <h4 className="text-xl font-subheading font-bold text-[#1C1C1C] uppercase tracking-wide mb-1">TPN REGISTERED POST RECEPTACLE</h4>
              <p className="text-[#555555] text-xs font-sans max-w-xl leading-relaxed">
                AAA Phoenix Post Production Studio adheres strictly to MPAA Content Security Best Practices and TPN (Trusted Partner Network) procedures. Our cinematic physical suites are certified for studio bulk reviews, high bit-depth color space conformity, and Dolby spatial configuration audits.
              </p>
            </div>
          </div>
          <div className="text-[10px] font-mono text-white bg-[#1C1C1C] px-4 py-2 uppercase shrink-0 font-bold tracking-wider shadow-xs">
            TPN SECURITY STATUS: SIGNED & SECURE
          </div>
        </div>
      </section>
    </div>
  );
}
