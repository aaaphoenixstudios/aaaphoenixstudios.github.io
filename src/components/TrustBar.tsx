import { useState } from "react";
import { motion } from "motion/react";
import { Award } from "lucide-react";

function PlatformLogo({ name, fallbackText, brandColor, logoUrl, fallbackLogoUrl, className }: { name: string; fallbackText: string, brandColor?: string, logoUrl?: string, fallbackLogoUrl?: string, className?: string }) {
  const [imgError, setImgError] = useState(false);
  const [fallbackImgError, setFallbackImgError] = useState(false);

  if (logoUrl && !imgError) {
    return (
      <img
        src={logoUrl}
        alt={`${name} logo`}
        onError={() => setImgError(true)}
        className={`h-8 sm:h-10 md:h-11 lg:h-12 xl:h-[52px] w-auto max-w-[120px] sm:max-w-full object-contain transition-transform duration-300 group-hover:scale-105 ${className || ''}`}
        style={{ display: 'block' }}
      />
    );
  }

  if (fallbackLogoUrl && !fallbackImgError) {
    return (
      <img
        src={fallbackLogoUrl}
        alt={`${name} logo (fallback)`}
        onError={() => {
          console.error(`Both primary and fallback logos failed to load for ${name}`);
          setFallbackImgError(true);
        }}
        className={`h-8 sm:h-10 md:h-11 lg:h-12 xl:h-[52px] w-auto max-w-[120px] sm:max-w-full object-contain transition-transform duration-300 group-hover:scale-105 ${className || ''}`}
        style={{ display: 'block' }}
      />
    );
  }

  return (
    <span 
      className={`font-heading text-sm md:text-base lg:text-lg tracking-[1.5px] group-hover:opacity-80 transition-opacity duration-300 uppercase font-black block ${className?.includes('object-center') ? 'text-center' : 'text-left'}`}
      style={{ color: brandColor || '#1C1C1C' }}
    >
      {fallbackText}
    </span>
  );
}

export default function TrustBar() {
  const platforms = [
    { name: "NETFLIX", type: "IMF Certified", specs: "High HDR / Atmos Mastering", brandColor: "#E50914", logoUrl: "/logos/netflix_logo.png", fallbackLogoUrl: "/logos/netflix.svg" },
    { name: "PRIME VIDEO", type: "Prime Direct Partner", specs: "DCI Master Deliverables", brandColor: "#00A8E1", logoUrl: "/logos/amazon_prime.png", fallbackLogoUrl: "/logos/primevideo.svg" },
    { name: "AHA", type: "Post Finishing Partner", specs: "UHD Broadcast SDR/HDR", brandColor: "#FF4D00", logoUrl: "/logos/aha_logo.png", fallbackLogoUrl: "/logos/aha.svg" },
    { name: "SILLYMONKS", type: "Media Aggregator Sync", specs: "SDR Stream Mastering", brandColor: "#F9A01B", logoUrl: "/logos/sillymonks.png", fallbackLogoUrl: "/logos/sillymonks.svg" },
    { name: "DISNEY+ HOTSTAR", type: "Disney Certified Mix", specs: "Dolby Vision Compliance", brandColor: "#113CCF", logoUrl: "/logos/disney.png", fallbackLogoUrl: "/logos/disney.svg" },
    { name: "ZEE5", type: "OTT Release Master", specs: "AAC / Atmos Sound Mix", brandColor: "#8230C6", logoUrl: "/logos/zee5.png", fallbackLogoUrl: "/logos/zee5.svg" },
    { name: "ETV WIN", type: "Full Broadcast Wrap", specs: "4K Color Grade & Conforming", brandColor: "#D8252B", logoUrl: "/logos/etvwin.png", fallbackLogoUrl: "/logos/etvwin.svg" }
  ];

  const marqueeItems = [...platforms, ...platforms, ...platforms];

  return (
    <section className="bg-[#FAF7F2] py-16 border-t border-b border-[#ECE7DF] overflow-hidden relative select-none">
      
      {/* Vignette fading masks for seamless marquee transition */}
      <div className="absolute left-0 inset-y-0 w-24 md:w-64 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 md:w-64 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

      {/* Marquee Header label */}
      <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col items-center justify-center text-center gap-1">
        <span className="text-[10px] font-mono tracking-[4px] text-neutral-500 uppercase flex items-center gap-1.5 font-bold">
          <Award className="w-3.5 h-3.5 text-[#FC8019]" /> TRUSTED BY MAJOR STREAMERS & PORTALS
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-normal text-[#1C1C1C] uppercase leading-none">
          PLATFORMS WE WORKED WITH
        </h2>
        <div className="w-16 h-0.5 bg-[#FC8019] mt-3" />
      </div>

      {/* 1. Continuous Luxury Scrolling Marquee */}
      <div className="flex w-full relative overflow-hidden mb-12">
        <div className="animate-marquee-infinite flex gap-8 md:gap-10 items-center py-2">
          {marqueeItems.map((platform, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white border border-[#ECE7DF] hover:border-[#FC8019]/40 px-5 py-3.5 transition-all duration-300 group min-w-[230px] rounded-none shadow-xs"
            >
              {/* Orange Ring Indicator */}
              <div className="relative flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#FC8019] group-hover:scale-125 transition-transform" />
                <div className="absolute w-4 h-4 rounded-full border border-[#FC8019]/35 group-hover:animate-ping" />
              </div>

              <div className="flex flex-col text-left">
                <PlatformLogo name={platform.name} fallbackText={platform.name} brandColor={platform.brandColor} logoUrl={platform.logoUrl} fallbackLogoUrl={platform.fallbackLogoUrl} className="object-left" />
                <span className="text-[8px] font-mono tracking-[0.5px] text-neutral-500 mt-0.5">
                  {platform.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Premium Grid Display */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="group p-5 bg-white border border-[#ECE7DF] hover:border-[#FC8019] transition-all duration-300 flex flex-col justify-between text-center relative shadow-xs"
            >
              <div className="flex flex-col items-center justify-center space-y-1">
                <PlatformLogo name={platform.name} fallbackText={platform.name} brandColor={platform.brandColor} logoUrl={platform.logoUrl} fallbackLogoUrl={platform.fallbackLogoUrl} className="object-center mx-auto" />
                <p className="text-[8.5px] font-mono text-[#666666] uppercase tracking-wider block font-bold">
                  {platform.type}
                </p>
              </div>

              <div className="h-[1px] bg-[#ECE7DF] my-3 group-hover:bg-[#FC8019]/15 transition-colors" />

              <span className="text-[8px] font-mono text-neutral-400 group-hover:text-[#222] uppercase tracking-[0.5px] block select-none">
                {platform.specs}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
