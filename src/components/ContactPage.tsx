import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Phone, Mail, Sparkles, Map, Info, Shield, MessageSquare } from "lucide-react";
import { CmsData } from "../types";

export default function ContactPage({ cmsData }: { cmsData: CmsData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectText, setProjectText] = useState("");
  const [budget, setBudget] = useState("50k-100k");
  const [submitted, setSubmitted] = useState(false);

  // Map simulator settings
  const [zoomLevel, setZoomLevel] = useState(14);
  const [radarPulse, setRadarPulse] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1C1C1C] min-h-screen py-16">
      
      {/* 1. Contact Header Section */}
      <section className="relative py-20 max-w-7xl mx-auto px-6 md:px-12 mt-8 text-left">
        {/* Glow */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 brand-glow-radial opacity-45 pointer-events-none" />
        <div className="max-w-4xl">
          <span className="text-[10px] font-mono text-[#FC8019] tracking-[0.3em] uppercase block mb-3 font-bold">
            SECURE COMMUNICATIONS GATEWAY
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-normal uppercase leading-[1.05] text-[#1C1C1C]">
            CONTACT & BOOKING <br/>
            <span className="text-[#FC8019]">DISPATCH DESK</span>
          </h1>
          <div className="w-16 h-0.5 bg-[#FC8019] mt-6" />
        </div>
      </section>

      {/* 2. Two Column Layout: Form & Map Simulator / Details */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Secure Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-8 md:p-10 border border-[#ECE7DF] shadow-xs text-left">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 bg-white">
                <div className="w-16 h-16 border border-[#FC8019] text-[#FC8019] rounded-none flex items-center justify-center mb-6 relative bg-[#FC8019]/5">
                  <Send className="w-6 h-6" />
                  <span className="absolute inset-0 border border-[#FC8019]/35 rounded-none animate-ping" />
                </div>
                <h3 className="text-2xl font-heading tracking-normal text-[#1C1C1C] mb-3 uppercase font-black">DISPATCH TRANSMITTED</h3>
                <p className="text-[#555555] text-xs font-sans max-w-md leading-relaxed">
                  Your project specs have been securely delivered to the desk of our Post Supervisor. We will review files and reach out on email/coordinates within 2 hours.
                </p>
                <div className="mt-8 text-[10px] font-mono text-neutral-400">REF: #CON-{(Math.random() * 1000000).toFixed(0)}</div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <span className="text-[10px] font-mono text-[#FC8019] tracking-wider uppercase flex items-center gap-1.5 mb-1 bg-[#FAF7F2] w-max px-3 py-1 border border-[#ECE7DF] font-bold">
                    <Shield className="w-3.5 h-3.5 text-[#FC8019]" /> SECURE END-TO-END TRANSMISSION
                  </span>
                  <h2 className="text-2xl font-heading font-black text-[#1C1C1C] uppercase mt-3">BID A NEW PROJECT</h2>
                  <p className="text-[#555555] text-xs font-sans mt-1">Conform your schedule, color workflow, and mastering specs directly on our dashboard.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-neutral-500 uppercase mb-2 font-bold">FULL NAME / STUDIO DESK</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Christopher Nolan / Sync Pictures"
                      className="w-full bg-white border border-[#ECE7DF] text-sm py-3 px-4 text-[#1C1C1C] focus:outline-none focus:border-[#FC8019] uppercase placeholder-neutral-300 font-mono tracking-wider"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-neutral-500 uppercase mb-2 font-bold">ENTERPRISE EMAIL</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="director@studios.com"
                      className="w-full bg-white border border-[#ECE7DF] text-sm py-3 px-4 text-[#1C1C1C] focus:outline-none focus:border-[#FC8019] placeholder-neutral-300 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-neutral-500 uppercase mb-2 font-bold">PROJECT WORKFLOW DETAILS</label>
                    <textarea
                      rows={5}
                      required
                      value={projectText}
                      onChange={(e) => setProjectText(e.target.value)}
                      placeholder="Specify cameras, codec (e.g. ProRes 4444 XQ), color space targeted (e.g. ACES Rec.2020), delivery timelines, and dubbing needs..."
                      className="w-full bg-white border border-[#ECE7DF] text-xs py-3 px-4 text-[#1C1C1C] focus:outline-none focus:border-[#FC8019] placeholder-neutral-300 leading-relaxed font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-neutral-500 uppercase mb-2 font-bold">ESTIMATED FINISHING BUDGET</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-white border border-[#ECE7DF] text-xs py-3 px-4 text-[#1C1C1C] focus:outline-none focus:border-[#FC8019] uppercase cursor-pointer tracking-wider"
                    >
                      <option value="Under 25k">Under $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k+">Over $250,000 (Theatrical / Series Bundle)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 border border-[#FC8019] bg-[#FC8019] hover:bg-[#E06A0E] text-white font-subheading font-bold text-xs tracking-widest uppercase transition-colors duration-300 rounded-none cursor-pointer shadow-sm"
                  >
                    DISPATCH PROJECT BRIEF
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right: Technical Coordinates, Parking Specs & Map Simulator */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-12">
            
            {/* Interactive Map Simulator (Render ivory radar canvas with orange accents) */}
            <div className="relative border border-[#ECE7DF] overflow-hidden bg-white aspect-[16/10] shadow-xs text-left">
              {/* Radar grids */}
              <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#ECE7DF 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
              {/* Radial glow background around the marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FC8019]/[0.03] rounded-full filter blur-xl pointer-events-none" />

              {/* Coordinates readouts */}
              <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-xs border border-[#ECE7DF] px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest flex items-center gap-2 text-[#1C1C1C] font-bold shadow-xs">
                <span className="w-1.5 h-1.5 bg-[#FC8019] rounded-full animate-ping" />
                <span>PHOENIX CALIBRATION: 17.4065° N, 78.4772° E</span>
              </div>

              {/* Crosshair radar */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[90%] h-[1px] bg-[#FC8019]/10" />
                <div className="absolute h-[90%] w-[1px] bg-[#FC8019]/10" />
              </div>

              {/* Marker pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="w-10 h-10 border border-[#FC8019] bg-white flex items-center justify-center transform rotate-45 relative animate-pulse duration-3000 shadow-sm">
                  <div className="transform -rotate-45 text-[#FC8019] font-black font-heading text-xs">PHX</div>
                </div>
                {radarPulse && (
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-[#FC8019]/20 rounded-full animate-ping pointer-events-none" />
                )}
                <div className="mt-4 bg-white border border-[#ECE7DF] text-[9px] font-mono py-1 px-2.5 uppercase text-[#1C1C1C] shadow-md font-bold">
                  AAA PHOENIX THEATRE
                </div>
              </div>

              {/* Simulated Map Controls */}
              <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                <button
                  type="button"
                  onClick={() => setZoomLevel(Math.min(18, zoomLevel + 1))}
                  className="w-8 h-8 bg-white border border-[#ECE7DF] flex items-center justify-center text-sm font-bold text-[#1C1C1C] hover:text-[#FC8019] cursor-pointer shadow-xs"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel(Math.max(10, zoomLevel - 1))}
                  className="w-8 h-8 bg-white border border-[#ECE7DF] flex items-center justify-center text-sm font-bold text-[#1C1C1C] hover:text-[#FC8019] cursor-pointer shadow-xs"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => setRadarPulse(!radarPulse)}
                  className={`px-3 bg-white border flex items-center justify-center text-[8px] font-mono uppercase tracking-widest cursor-pointer shadow-xs font-bold ${
                    radarPulse ? "text-[#FC8019] border-[#FC8019]/40" : "text-neutral-400 border-[#ECE7DF]"
                  }`}
                >
                  <Map className="w-3.5 h-3.5 mr-1" /> PULSE
                </button>
              </div>

              {/* Scale indicator */}
              <div className="absolute bottom-4 left-4 z-20 text-[9px] font-mono text-neutral-400 bg-white/80 px-2.5 py-1 border border-[#ECE7DF] uppercase font-bold shadow-xs">
                RESOLVER SCALE: {zoomLevel * 100}m
              </div>
            </div>

            {/* Parking and Office Details */}
            <div className="space-y-6 pt-6 border-t border-[#ECE7DF] text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#555555] text-xs md:text-sm font-sans tracking-wide">
                
                {/* Secure channels */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1 font-bold">FOUNDERS DESK</span>
                    <p className="text-[#1C1C1C] text-xs font-bold font-subheading tracking-wider mb-2 uppercase">Ashoka & Anand Jatla</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1 font-bold">TELEPHONE DESK</span>
                    <a href="tel:+919160402143" className="text-[#1C1C1C] hover:text-[#FC8019] text-sm font-bold font-mono tracking-wider flex items-center gap-1.5 uppercase transition-colors">
                      <Phone className="w-3.5 h-3.5 text-[#FC8019]" /> +91 91604 02143
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1 font-bold">SECURE WHATSAPP HELPDESK</span>
                    <a href="https://wa.me/919160402143" target="_blank" rel="noopener noreferrer" className="text-[#1C1C1C] hover:text-[#FC8019] text-sm font-bold font-mono tracking-wider flex items-center gap-1.5 uppercase transition-colors">
                      <MessageSquare className="w-3.5 h-3.5 text-green-600" /> +91 91604 02143
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1 font-bold">SECURE EMAIL HUB</span>
                    <a href="mailto:conform@aaaphoenix.com" className="text-[#1C1C1C] hover:text-[#FC8019] text-sm font-bold font-mono flex items-center gap-1.5 uppercase transition-colors">
                      <Mail className="w-3.5 h-3.5 text-[#FC8019]" /> conform@aaaphoenix.com
                    </a>
                  </div>
                </div>

                {/* Parking specs */}
                <div>
                  <span className="text-[10px] font-mono text-[#FC8019] uppercase block mb-2 flex items-center gap-1 font-bold">
                    <Info className="w-3.5 h-3.5 text-[#FC8019]" /> OFFICE & PARKING DIRECTIONS
                  </span>
                  <p className="text-justify leading-relaxed font-sans text-xs text-[#555555]">
                    Direct private multi-car underground parking with secure gated entrance for creative directors. Valet service is available on request for active project reviews and master DI screenings on Road No. 2, Banjara Hills, Hyderabad, India.
                  </p>
                </div>

              </div>

              {/* Social links */}
              <div className="pt-6 border-t border-[#ECE7DF] flex justify-between items-center text-[10px] font-mono text-neutral-400 uppercase font-bold">
                <span>IMDb Co-op: co0489955</span>
                <div className="flex gap-4">
                  <span className="text-neutral-400">DESKS:</span>
                  <a href="#vimeo" className="hover:text-[#FC8019] transition-colors">VIMEO</a>
                  <a href="#linkedin" className="hover:text-[#FC8019] transition-colors">LINKEDIN</a>
                  <a href="#instagram" className="hover:text-[#FC8019] transition-colors">INSTAGRAM</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
