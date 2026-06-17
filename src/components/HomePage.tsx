import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Film, Sliders, Volume2, Radio, Mic, Video, Zap, Globe, 
  ArrowRight, Sparkles, Award, Users, Shield, Compass, Calendar, Play
} from "lucide-react";
import { CmsData, ProjectItem } from "../types";
import Hero from "./Hero";
import TrustBar from "./TrustBar";
import FeaturedDepartmentWork from "./FeaturedDepartmentWork";

interface HomePageProps {
  cmsData: CmsData;
  onNavigate: (page: string) => void;
}

export default function HomePage({ cmsData, onNavigate }: HomePageProps) {
  
  // Department configurations
  const stats = [
    { label: "Projects Completed", value: "500+", count: 500, desc: "Theatrical, OTT, Web & Broadcasts" },
    { label: "Award Recognitions", value: "50+", count: 50, desc: "Guild & Academy accolades" },
    { label: "Global Clients", value: "100+", count: 100, desc: "Production desks & studios" },
    { label: "Years Experience", value: "10+", count: 10, desc: "Sustained workflow calibration" }
  ];

  // Core services requested to show on home page
  const featuredServices = [
    { title: "Editing", icon: <Film className="w-5 h-5" />, desc: "Narrative pacing and structural flow. Offline assemblies, multi-cam proxy syncs, and final conforming." },
    { title: "DI Color Grading", icon: <Sliders className="w-5 h-5" />, desc: "ACES 1.3 matched environments, custom LMT film profiles, and theatrical calibration on Christie Laser." },
    { title: "Dolby Atmos Mixing", icon: <Volume2 className="w-5 h-5" />, desc: "Spatial 9.1.6 arrays panning objects smoothly across physical acoustic zones for immersive cinemas." },
    { title: "Sound Design", icon: <Radio className="w-5 h-5" />, desc: "Custom low frequency synthesizers, realistic field recordings, and immersive Foley track structures." },
    { title: "Dubbing", icon: <Mic className="w-5 h-5" />, desc: "Pristine dialogue ADR in acoustically detached rooms. Precision localization and voice synchrony." },
    { title: "VFX", icon: <Video className="w-5 h-5" />, desc: "Photorealistic compositing, greenscreen extractions, matchmoving, and seamless CGI environment plate merges." },
    { title: "Motion Graphics", icon: <Zap className="w-5 h-5" />, desc: "High-end vector animations, broadcasting title bumpers, digital map routing, and promotional interfaces." },
    { title: "OTT Mastering", icon: <Globe className="w-5 h-5" />, desc: "Compliance-passed packaging for Netflix, Prime, Hotstar, delivering metadata and IMF wrappers." }
  ];

  // Filter projects by department
  const editorialProjects = cmsData.projects.filter(p => p.category === "EDITORIAL DEPARTMENT") || [];
  const colorProjects = cmsData.projects.filter(p => p.category === "COLOR DEPARTMENT") || [];
  const soundProjects = cmsData.projects.filter(p => p.category === "SOUND MIXING DEPARTMENT") || [];
  const musicProjects = cmsData.projects.filter(p => p.category === "MUSIC DEPARTMENT") || [];

  return (
    <div className="bg-[#FAF7F2] text-[#1C1C1C]">
      
      {/* 1. Extraordinary Hero Section */}
      <Hero
        tagline={cmsData.heroTagline}
        heading={cmsData.heroHeading}
        subheading={cmsData.heroSubheading}
        videoUrl={cmsData.heroVideoUrl}
        imageUrl={cmsData.aboutImage}
        onNavigate={onNavigate}
      />

      {/* 2. Platform Partner Trust Bar */}
      <TrustBar />

      {/* 3. Narrative Introduction - Storyteller Magazine Style */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-0 w-80 h-80 brand-glow-radial opacity-40 rounded-full pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-left">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#FC8019] uppercase flex items-center gap-1.5 mb-3 font-bold">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> THE MASTER STORY ARCHITECT
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-normal uppercase leading-[1.05] text-[#1C1C1C]">
              BEYOND TECHNIQUE. <br/>
              <span className="text-[#FC8019]">WE ARE STORYTELLERS.</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#FC8019] my-6" />
            <p className="text-[#555555] font-sans text-sm sm:text-base leading-relaxed text-justify mb-8 max-w-[600px]">
              {cmsData.aboutText ? cmsData.aboutText.split("\n\n")[0] : "At AAA Phoenix Post Production Studio, we shape and deliver raw audio-visual content with cinematic standards. We calibrate audio-visual experiences for cinema, broadcast, and digital networks with peerless expertise."}
            </p>
            <div>
              <button
                onClick={() => onNavigate("about")}
                className="px-8 py-3.5 border border-[#FC8019] text-[#FC8019] hover:bg-[#FC8019]/5 transition-all text-xs font-bold uppercase tracking-widest cursor-pointer rounded-none bg-transparent"
              >
                Our Complete Story
              </button>
            </div>
          </div>

          {/* Graphical Frame */}
          <div className="relative group">
            <div className="absolute -inset-2 border border-[#ECE7DF] group-hover:border-[#FC8019]/40 transition-colors pointer-events-none -z-10" />
            <div className="aspect-[16/10] overflow-hidden p-1 bg-white border border-[#ECE7DF] shadow-xs">
              <img
                src={cmsData.aboutImage || "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80"}
                alt="Finishing Theatre Suite"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-103 brightness-95 hover:brightness-100"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Beautifully Designed Statistics Counters Section */}
      <section className="py-16 md:py-24 bg-white border-y border-[#ECE7DF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#FAF7F2] border border-[#ECE7DF] relative overflow-hidden group hover:border-[#FC8019]/30 transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#666666] uppercase block mb-1 font-bold">
                    {stat.label}
                  </span>
                  <div className="text-4xl sm:text-5xl font-heading text-[#FC8019] font-black tracking-wider my-3">
                    {stat.value}
                  </div>
                </div>
                <p className="text-xs text-[#555555] font-sans mt-2">{stat.desc}</p>
                {/* Decorative border bar */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-[#ECE7DF] group-hover:bg-[#FC8019] transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Services Section */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 border-b border-[#ECE7DF]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#FC8019] uppercase font-bold">
              EXPERTISE DISCIPLINE
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-normal text-[#1C1C1C] uppercase leading-none mt-2">
              FEATURED SERVICES
            </h2>
          </div>
          <button
            onClick={() => onNavigate("services")}
            className="group text-[11px] font-mono font-bold uppercase tracking-widest text-[#FC8019] hover:text-[#1C1C1C] flex items-center gap-2 cursor-pointer bg-transparent border-none"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 8 service cards display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#ECE7DF] hover:border-[#FC8019]/40 hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 border border-[#ECE7DF] text-[#FC8019] flex items-center justify-center bg-[#FAF7F2] mb-5">
                  {service.icon}
                </div>
                <h3 className="text-base font-subheading font-bold text-[#1C1C1C] tracking-wide mb-2 uppercase">
                  {service.title}
                </h3>
                <p className="text-[#555555] text-xs leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#FAF7F2]">
                <button
                  onClick={() => onNavigate("services")}
                  className="text-[10px] font-mono font-bold text-[#666666] group-hover:text-[#FC8019] uppercase tracking-wider flex items-center gap-1 bg-transparent border-none cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Featured Work Section (Segmented by Departments) */}
      <FeaturedDepartmentWork cmsData={cmsData} onNavigate={onNavigate} />

      {/* 7. Beautifully Designed Live Action Call To Action */}
      <section className="py-24 md:py-32 bg-white border-t border-[#ECE7DF] text-center relative overflow-hidden">
        <div className="absolute inset-0 brand-glow-radial opacity-30 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <span className="text-[10px] font-mono text-[#FC8019] tracking-[0.3em] uppercase block font-bold mb-2">
            SECURE COLLABORATION SLOTS
          </span>
          <h2 className="text-4xl sm:text-6xl font-heading font-black tracking-normal text-[#1C1C1C] uppercase leading-none mt-2">
            READY TO AWAKEN YOUR FOOTAGE?
          </h2>
          <p className="text-[#555555] text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed my-8">
            Engage immediately with our Post Production Supervisor. Inquire about pricing packages, schedule active Christie Laser theatrical reviews, or confirm technical ACES timelines.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 h-12 bg-[#FC8019] hover:bg-[#E06A0E] text-white font-subheading font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-sm flex items-center gap-2"
            >
              <span>CONNECT WITH POST DESK</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <a
              href="tel:+919160402143"
              className="px-8 h-12 border border-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white text-[#1C1C1C] font-subheading font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center bg-transparent"
            >
              CALL DIRECT
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
