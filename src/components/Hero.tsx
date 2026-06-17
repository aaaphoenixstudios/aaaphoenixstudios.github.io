import { motion } from "motion/react";
import { ArrowRight, Phone, MessageSquare, Sparkles } from "lucide-react";

interface HeroProps {
  heading: string;
  subheading: string;
  tagline: string;
  videoUrl?: string; // maintained for CMS fallback compatibility
  imageUrl?: string; // local hero-image.jpg or placeholder
  onNavigate?: (page: string) => void;
}

export default function Hero({ tagline, heading, subheading, onNavigate }: HeroProps) {

  const handleNav = (targetPage: string) => {
    if (onNavigate) {
      onNavigate(targetPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const displayImage = "/hero/background_image.png";

  return (
    <section
      id="hero-section"
      className="relative min-h-screen py-12 lg:py-0 flex items-center justify-center bg-[#FAF7F2] select-none text-[#1C1C1C] overflow-hidden"
    >
      {/* Decorative Brand Accent Background Gradient Blur */}
      <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] brand-glow-radial opacity-30 pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-screen">
        
        {/* Left Side: Content Area (45% Width on Desktop) */}
        <div className="w-full lg:w-[45%] flex flex-col items-start text-left max-sm:items-center max-sm:text-center z-10 py-8">
          
          {/* Small Label with brand orange accent */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4 bg-[#FC8019]/5 border border-[#FC8019]/25 px-3.5 py-1.5 text-[#FC8019] text-[10px] font-mono font-bold tracking-[0.2em] uppercase max-sm:mx-auto"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin duration-5000" />
            <span>{tagline || "PREMIUM FILM POST PRODUCTION"}</span>
          </motion.div>

          {/* Giant Display Headline */}
          <div className="overflow-hidden mb-6 w-full text-left max-sm:text-center">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl sm:text-6xl lg:text-[62px] xl:text-[68px] font-heading font-black tracking-normal leading-[1.0] uppercase text-[#1C1C1C]"
            >
              {heading ? (
                heading.toUpperCase().includes("WHERE STORIES MATTER") || heading.toUpperCase().includes("WHERE STORY'S MATTER") ? (
                  <>
                    WHERE STORIES <br/>
                    <span className="text-[#FC8019]">MATTER</span>
                  </>
                ) : (
                  heading
                )
              ) : (
                <>
                  WHERE STORIES <br/>
                  <span className="text-[#FC8019]">MATTER</span>
                </>
              )}
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-sm sm:text-base text-[#555555] font-sans leading-relaxed mb-10 max-w-[620px] max-sm:text-center max-sm:mx-auto"
          >
            {subheading || "AAA Phoenix Post Production Studio delivers professional Editing, Digital Intermediate, Color Grading, Dolby Atmos Mixing, Sound Design, VFX, OTT Mastering, and Creative Finishing solutions for Films, OTT Platforms, Web Series, and Commercial Productions."}
          </motion.p>

          {/* Structured CTAs Block - View, Explore, Call, WhatsApp */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full space-y-4 flex flex-col max-sm:items-center"
          >
            {/* Primary & Secondary Buttons Row */}
            <div className="flex flex-wrap gap-4 max-sm:justify-center">
              {/* VIEW PORTFOLIO */}
              <button
                onClick={() => handleNav("work")}
                className="px-8 py-3.5 bg-[#FC8019] hover:bg-[#E06A0E] text-white font-subheading font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer flex items-center gap-2 shadow-xs"
              >
                <span>VIEW PORTFOLIO</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              {/* EXPLORE SERVICES */}
              <button
                onClick={() => handleNav("services")}
                className="px-8 py-3.5 border border-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white text-[#1C1C1C] font-subheading font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer bg-transparent"
              >
                EXPLORE SERVICES
              </button>
            </div>

            {/* Direct Communications Row (Call & WhatsApp) */}
            <div className="flex flex-wrap gap-3 pt-2 max-sm:justify-center">
              {/* CALL NOW */}
              <a
                href="tel:+919160402143"
                className="flex items-center gap-2 px-5 py-2.5 border border-[#ECE7DF] hover:border-[#FC8019] text-[#555555] hover:text-[#FC8019] font-mono text-[10px] font-bold tracking-widest uppercase transition-colors bg-white shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#FC8019]" />
                <span>CALL NOW</span>
              </a>

              {/* WHATSAPP US */}
              <a
                href="https://wa.me/919160402143"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-[#ECE7DF] hover:border-[#FC8019] text-[#555555] hover:text-[#FC8019] font-mono text-[10px] font-bold tracking-widest uppercase transition-colors bg-white shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-green-600" />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Showcase Creative Workspace Image (55% Width on Desktop) */}
        <div className="w-full lg:w-[55%] h-full relative flex items-center justify-center lg:justify-end py-4 lg:py-0 select-none z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.0 }}
            className="relative w-full h-full min-h-[320px] sm:min-h-[480px] lg:min-h-[580px] flex items-center justify-center lg:justify-end overflow-visible select-none"
          >
            {/* Soft fade transition on the left edge of the image */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-28 lg:w-[120px] bg-gradient-to-r from-[#FAF7F2] to-transparent pointer-events-none z-10 hidden sm:block" />
            
            {/* Soft fade transition on the bottom edge for integration */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none z-10" />

            <img
              src={displayImage}
              alt="AAA Phoenix Cinematic Creative Workshop Setup"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain lg:object-right object-center select-none pointer-events-none"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80") {
                  target.src = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80";
                }
              }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
