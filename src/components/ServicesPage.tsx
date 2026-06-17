import { motion } from "motion/react";
import { 
  Film, Sliders, Music, Video, Zap, RefreshCw, Cpu, 
  Server, Radio, Shield, Globe, Mic, Sparkles, CheckCircle2 
} from "lucide-react";
import { CmsData } from "../types";

export default function ServicesPage({ cmsData }: { cmsData: CmsData }) {
  
  // The 12 custom industry-standard capabilities requested by the user
  const showcaseServices = [
    {
      title: "Film Editing & Offline Narrative",
      icon: <Film className="w-5 h-5" />,
      tagline: "Structure & Rhythm",
      equipments: "Avid Media Composer, Premiere Pro, Nexis Shared Storage",
      desc: "Narrative pacing and structural assembly assemblies. Multi-cam synchronization, offline editorial proxy preparation, and timeline conform files.",
      workflows: "Dailies ingestion → Offline assemblies → Final draft lock → XML conforming."
    },
    {
      title: "Digital Intermediate (DI)",
      icon: <Sliders className="w-5 h-5" />,
      tagline: "Visual Unity & Calibration",
      equipments: "Baselight Eight, Flanders Scientific, Christie Laser 4K",
      desc: "Comprehensive color-accurate conforming pipelines. SMPTE 2067-21 standard sync, ACES 1.3 color space mapping, and RAW linear formats.",
      workflows: "XML conform mapping → Raw debayer setting → Color chart match → Gamut matching."
    },
    {
      title: "Color Grading",
      icon: <Cpu className="w-5 h-5" />,
      tagline: "Atmosphere & Aesthetics",
      equipments: "Dual DaVinci Resolve Advanced Panel, Baselight Blackboard",
      desc: "Bespoke color grading for Feature Films, Web series, and OTT releases. Calibrated reference screens under specialized D65 bias lights.",
      workflows: "LMT Look creation → Secondary adjustments → Contrast tracking → HDR metadata."
    },
    {
      title: "Dolby Atmos Mixing",
      icon: <Music className="w-5 h-5" />,
      tagline: "Sound Stage & Immersion",
      equipments: "Avid S6 Console, Pro Tools Ultimate, Atmos RMU Renderer",
      desc: "Full 9.1.6 calibrated theatre array mixing room. Dynamic coordinate-based audio objects placement to achieve realistic cinema depth.",
      workflows: "Session conform → Foley mixing → Atmos Object panning → Spatial rendering."
    },
    {
      title: "Sound Design",
      icon: <Radio className="w-5 h-5" />,
      tagline: "Acoustics & Environments",
      equipments: "Pro Tools Ultimate, Soundminer metadata engine, custom foley stages",
      desc: "Custom audio synthesis and bespoke sound design. Organic foley recordings and deep low-frequency soundscapes designed for IMAX.",
      workflows: "Scene spot sheets → SFX sound synthesis → Foley tracking → Ambient layout."
    },
    {
      title: "Dubbing & ADR Recording",
      icon: <Mic className="w-5 h-5" />,
      tagline: "Voice & Language Sync",
      equipments: "Neumann U87 microphones, Avalon VT737 channels",
      desc: "Multi-language ADR recordings and professional lip-sync synchronization. Noise-isolated acoustic environments to secure pristine vocal master feeds.",
      workflows: "Casting → Vocal track guide sync → Vocal ADR recording → Noise scrubbing."
    },
    {
      title: "Visual Effects (VFX)",
      icon: <Video className="w-5 h-5" />,
      tagline: "Environments & Illusion",
      equipments: "Nuke Studio, Houdini FX, Flame Composing Suite",
      desc: "Photorealistic compositing, CGI background integration, cleanups, tracking, and particle physics simulations managed in parallel rendering units.",
      workflows: "Plate preparation → Camera tracking → FX rendering → Nuke composite conform."
    },
    {
      title: "Motion Graphics",
      icon: <Zap className="w-5 h-5" />,
      tagline: "Visual Vector Dynamics",
      equipments: "After Effects Studio, Cinema 4D, Redshift render nodes",
      desc: "Dynamic vector animations, screen interfaces, animated maps, and stylized vectors tailored specifically for contemporary TV/web broadcasts.",
      workflows: "Storyboards → Styleframe creation → Vector animation → Composite burn-in."
    },
    {
      title: "Title & Typography Design",
      icon: <Server className="w-5 h-5" />,
      tagline: "Bespoke Visual Identity",
      equipments: "TrueType Vector engines, Adobe suite, custom lettering tablets",
      desc: "Custom motion titles and opening sequence typography. Visual branding vectors matching the specific aesthetic mood of the cinematic project.",
      workflows: "Concept design → Vector typography layout → Entrance motion → Title render."
    },
    {
      title: "OTT Mastering",
      icon: <Globe className="w-5 h-5" />,
      tagline: "Multi-Platform Encoding",
      equipments: "Dolby Vision Professional Toolset, Colorfront Transkoder",
      desc: "Digital mastering and packaging following precise specifications from major partners like Netflix, Prime Video, HBO, and Apple TV+.",
      workflows: "HDR Master validation → Dolby Vision metadata export → IMF packet compile."
    },
    {
      title: "Cinematic Film Restoration",
      icon: <RefreshCw className="w-5 h-5" />,
      tagline: "Archival Preservation",
      equipments: "Phoenix Refine Software, DFT Scan Masters",
      desc: "Scratch removal, stabilizing shaky reels, resolution upscaling, and color rebuilding for historic classic negatives and archival library film packages.",
      workflows: "4K scanning → Dust/scratch removal → Color reconstruction → LTO archive compile."
    },
    {
      title: "Delivery & DCP Packaging",
      icon: <Shield className="w-5 h-5" />,
      tagline: "Secure Cinema Distribution",
      equipments: "Clipster Mastering System, EasyDCP Creator Pro",
      desc: "We compile industry-compliant SMPTE DCP packages. Complete with secure KDM encryption key creation and deployment vectors for world distribution.",
      workflows: "Master audio/video sync → Interop/SMPTE DCP wrapping → KDM security keys compile."
    }
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#1C1C1C] min-h-screen py-16">
      
      {/* 1. Services Title Header */}
      <section className="relative py-20 max-w-7xl mx-auto px-6 md:px-12 mt-8 text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 brand-glow-radial opacity-45 pointer-events-none" />
        
        <div className="max-w-[80%] mx-auto text-center">
          <span className="text-[10px] font-mono text-[#FC8019] tracking-[0.3em] uppercase block mb-4 font-bold">
            POST SECTOR EXPERTISE
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-normal uppercase leading-[1.05] text-[#1C1C1C]">
            12 DISCIPLINE <br/>
            <span className="text-[#FC8019]">CAPABILITIES</span>
          </h1>
          <div className="w-16 h-0.5 bg-[#FC8019] mx-auto mt-6" />
        </div>
      </section>

      {/* 2. Grid of 12 dedicated capabilities */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseServices.map((srv, idx) => (
            <div
              key={idx}
              className="p-8 bg-white border border-[#ECE7DF] hover:border-[#FC8019]/40 hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 border border-[#ECE7DF] text-[#FC8019] flex items-center justify-center bg-[#FAF7F2]">
                    {srv.icon}
                  </div>
                  <span className="text-[9px] font-mono text-neutral-400 font-extrabold">STAGE {idx + 1}</span>
                </div>

                <span className="text-[10px] font-mono text-[#FC8019] uppercase tracking-widest block mb-1 font-bold">
                  {srv.tagline}
                </span>
                <h3 className="text-xl font-subheading font-bold text-[#1C1C1C] tracking-wide uppercase mb-4">
                  {srv.title}
                </h3>
                <p className="text-[#555555] text-xs leading-relaxed mb-6 text-justify font-sans">
                  {srv.desc}
                </p>
                
                <div className="pt-4 border-t border-[#ECE7DF]">
                  <span className="text-[9px] font-mono text-neutral-400 uppercase block mb-1.5 font-bold">HARDWARE & TOOLS</span>
                  <p className="text-xs text-[#1C1C1C] font-semibold uppercase tracking-wider font-sans mb-4">{srv.equipments}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#ECE7DF] bg-[#FAF7F2] p-4 border border-[#ECE7DF]">
                <span className="text-[8px] font-mono text-[#FC8019] uppercase block mb-1 font-bold">WORKFLOW SEQUENCE</span>
                <p className="text-[10.5px] font-mono text-[#555555] leading-relaxed uppercase">{srv.workflows}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Technical Workflow highlights */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 border-t border-[#ECE7DF] mt-20 text-center">
        <span className="text-[10px] font-mono text-[#FC8019] tracking-widest uppercase block mb-2 font-bold">REFERENCE INFRASTRUCTURE</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-normal text-[#1C1C1C] uppercase leading-none">
          ACES 1.3 CALIBRATED PIPELINE
        </h2>
        <p className="text-[#555555] text-xs sm:text-sm max-w-[700px] mx-auto font-sans leading-relaxed mt-4">
          Our entire studio pipeline operates within Academy Color Encoding System (ACES) parameters. Metadata and high bit depth EXR files move securely from Offline editing to Dolby Atmos Sound stages, keeping perfect technical parity and zero pixel depreciation.
        </p>
      </section>

    </div>
  );
}
