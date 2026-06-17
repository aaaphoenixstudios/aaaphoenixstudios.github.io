import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sliders, Menu, X, Calendar, Sparkles, Check, Phone, Mail, Award, Clock } from "lucide-react";

interface HeaderProps {
  companyName: string;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ companyName, currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  
  // Form submission success states for Book Consultation
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingService, setBookingService] = useState("Color Grading");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Services", page: "services" },
    { label: "Portfolio", page: "work" },
    { label: "Studio", page: "studio" },
    { label: "Team", page: "team" },
    { label: "Contact", page: "contact" },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsConsultationOpen(false);
      setFormSubmitted(false);
      setBookingName("");
      setBookingEmail("");
      setBookingDate("");
    }, 2800);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#ECE7DF] py-3.5 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Left - Styled with custom brand image and robust fallback */}
          <button 
            onClick={() => { onNavigate("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
            className="flex items-center gap-3 group text-left bg-transparent border-none cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center select-none shrink-0 transition-transform duration-500 group-hover:scale-105">
              <img 
                src="/logo_pheonix.png" 
                alt="AAA Phoenix Logo" 
                className="w-full h-full object-contain filter drop-shadow-md mix-blend-multiply transition-all duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fb = document.getElementById('header-logo-fallback');
                  if (fb) fb.classList.remove('hidden');
                }}
              />
              <div 
                id="header-logo-fallback" 
                className="w-10 h-10 border border-[#FC8019] flex items-center justify-center transform rotate-45 group-hover:rotate-[135deg] transition-transform duration-700 hidden"
              >
                <div className="w-4 h-4 bg-[#FC8019] transform rotate-[-45deg]"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-black tracking-tight uppercase text-[#1C1C1C] leading-none mb-0.5">
                AAA<span className="text-[#FC8019] ml-0.5">PHOENIX</span><span className="text-[#1C1C1C] ml-1">STUDIOS</span>
              </span>
              <span className="text-[8px] font-mono tracking-[0.25em] text-[#666666] uppercase">
                Post Production
              </span>
            </div>
          </button>

          {/* Navigation Center - Montserrat / font-sans caps styling */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] font-subheading font-bold uppercase tracking-[0.15em] text-[#666666]">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => { onNavigate(item.page); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`transition-colors py-2 relative group cursor-pointer ${
                  currentPage === item.page ? "text-[#1C1C1C] font-extrabold" : "hover:text-[#1C1C1C]"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#FC8019] transition-all duration-300 ${
                  currentPage === item.page ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </button>
            ))}
          </nav>

          {/* CTA Buttons Right */}
          <div className="hidden sm:flex items-center gap-3.5">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-4 py-2 border-none bg-[#FC8019] hover:bg-[#E06A0E] text-white text-[10px] font-subheading font-bold uppercase tracking-widest transition-all duration-300 rounded-none cursor-pointer font-bold shadow-sm"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile hamburger & workspace triggers */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1C1C1C] hover:text-[#FC8019] p-2 transition-colors cursor-pointer bg-transparent border-none"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAF7F2]/98 flex flex-col justify-center items-center lg:hidden"
          >
            <div className="flex flex-col gap-5 text-center">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.page);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`text-xl font-subheading tracking-widest uppercase transition-colors cursor-pointer bg-transparent border-none ${
                    currentPage === item.page ? "text-[#FC8019] font-extrabold" : "text-[#555555] hover:text-[#1C1C1C]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="h-[1px] bg-[#ECE7DF] my-3 w-40 mx-auto" />

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsConsultationOpen(true);
                }}
                className="px-5 py-2.5 bg-[#FC8019] text-white font-subheading text-xs font-bold tracking-widest uppercase rounded-none cursor-pointer"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Book Consultation Deluxe Modal */}
      <AnimatePresence>
        {isConsultationOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConsultationOpen(false)}
              className="absolute inset-0 bg-[#1C1C1C]/60 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-[#FAF7F2] border border-[#ECE7DF] p-8 md:p-10 shadow-2xl overflow-hidden text-[#1C1C1C]"
            >
              <button
                onClick={() => setIsConsultationOpen(false)}
                className="absolute top-4 right-4 text-[#666666] hover:text-[#FC8019] transition-colors duration-300 bg-transparent border-none cursor-pointer z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FC8019]/10 border border-[#FC8019] flex items-center justify-center mb-5 text-[#FC8019] relative">
                    <Check className="w-8 h-8" />
                    <span className="absolute inset-0 rounded-full border border-[#FC8019]/30 animate-ping" />
                  </div>
                  <h3 className="text-3xl font-heading tracking-wider text-[#1C1C1C] mb-2">
                    REQUEST RECEIVED
                  </h3>
                  <p className="text-xs text-[#555555] max-w-sm leading-relaxed font-sans">
                    Our Production Desk will review <strong>{bookingName || "your"}</strong> project requirements and reach out via email within 4 hours.
                  </p>
                  <div className="mt-6 text-[10px] font-mono text-neutral-400 select-none">
                    TICKET REF: #PHX-{(Math.random() * 100000).toFixed(0)}
                  </div>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6 relative">
                    <span className="text-[9px] font-mono text-[#FC8019] tracking-widest uppercase flex items-center gap-1.5 mb-1.5 font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-[#FC8019]" /> DESIGN COLLABORATION DESK
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-heading tracking-normal text-[#1C1C1C] uppercase leading-none mb-2">
                      BOOK A COLLABORATION
                    </h3>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      Bring your production files down to the Phoenix Studio. Schedule color conform sessions or spatial audio audits with our master engineers.
                    </p>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-mono tracking-wider text-[#555555] uppercase mb-1">
                        Full Name / Agency Desk
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        placeholder="e.g. Christopher Nolan"
                        className="w-full bg-white border border-[#ECE7DF] text-sm py-2.5 px-3 uppercase text-[#1C1C1C] focus:outline-none focus:border-[#FC8019] font-sans placeholder-neutral-300"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono tracking-wider text-[#555555] uppercase mb-1">
                          Enterprise Email
                        </label>
                        <input
                          type="email"
                          required
                          value={bookingEmail}
                          onChange={(e) => setBookingEmail(e.target.value)}
                          placeholder="director@studios.com"
                          className="w-full bg-white border border-[#ECE7DF] text-sm py-2.5 px-3 text-[#1C1C1C] focus:outline-none focus:border-[#FC8019] font-sans placeholder-neutral-300"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono tracking-wider text-[#555555] uppercase mb-1">
                          Desired Date
                        </label>
                        <input
                          type="date"
                          required
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full bg-white border border-[#ECE7DF] text-sm py-2 px-3 text-[#1C1C1C] focus:outline-none focus:border-[#FC8019] font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono tracking-wider text-[#555555] uppercase mb-1">
                        Core Workflow Solution
                      </label>
                      <select
                        value={bookingService}
                        onChange={(e) => setBookingService(e.target.value)}
                        className="w-full bg-white border border-[#ECE7DF] text-xs py-2.5 px-3 text-[#1C1C1C] focus:outline-none focus:border-[#FC8019] uppercase tracking-wider cursor-pointer"
                      >
                        <option value="Color Grading">Color Grading & Digital Intermediate (DI)</option>
                        <option value="Dolby Atmos Mixing">Calibrated Dolby Atmos Immersive Mixing</option>
                        <option value="Editing">Narrative Offline Editing</option>
                        <option value="VFX Compositing">Photorealistic Compositing & VFX</option>
                        <option value="OTT Delivery package">OTT Mastering / IMF packaging</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#FC8019] hover:bg-[#E06A0E] text-white font-subheading font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer mt-5 rounded-none shadow-sm"
                    >
                      REQUEST PRODUCTION SLOT
                    </button>
                  </form>

                  {/* Consultation footer indicators */}
                  <div className="mt-6 flex justify-between text-[9px] font-mono text-neutral-400 pt-4 border-t border-[#ECE7DF] uppercase px-0.5">
                    <span className="flex items-center gap-1"><Phone className="w-2.5 h-2.5 text-[#FC8019]" /> DIRECT DESK: +91 9160402143</span>
                    <span className="flex items-center gap-1"><Clock className="w-2.5 h-2.5 text-[#FC8019]" /> 2-HOUR RESPONSE SLA</span>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
