import { ArrowUp, Award, Sparkles, ShieldCheck } from "lucide-react";

interface FooterProps {
  companyName: string;
  onNavigate: (page: string) => void;
}

export default function Footer({ companyName, onNavigate }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#ECE7DF] py-16 md:py-24 relative select-none text-[#1C1C1C]">
      
      {/* Absolute center warm glow aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 brand-glow-radial opacity-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top footer row: giant branding display & return button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 pb-12 border-b border-[#ECE7DF]">
          
          <div className="flex items-center gap-3.5">
            <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center select-none shrink-0 transition-transform duration-500 hover:scale-105">
              <img 
                src="/logo_pheonix.png" 
                alt="AAA Phoenix Logo" 
                className="w-full h-full object-contain filter drop-shadow-md mix-blend-multiply"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fb = document.getElementById('footer-logo-fallback');
                  if (fb) fb.classList.remove('hidden');
                }}
              />
              <div 
                id="footer-logo-fallback" 
                className="w-12 h-12 border border-[#FC8019] flex items-center justify-center transform rotate-45 hidden"
              >
                <div className="w-5 h-5 bg-[#FC8019] transform rotate-[-45deg]"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl md:text-3xl tracking-tight text-[#1C1C1C] uppercase leading-none mb-1">
                AAA<span className="text-[#FC8019]">PHOENIX</span><span className="text-[#1C1C1C] ml-1">STUDIOS</span>
              </span>
              <span className="text-[9px] font-mono tracking-[0.3em] text-[#666666] uppercase">
                Post Production Studio
              </span>
            </div>
          </div>

          {/* Elegant Back to Top button */}
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-2.5 px-4 py-2 border border-[#ECE7DF] hover:border-[#FC8019] text-[10px] font-mono uppercase tracking-widest text-[#555555] hover:text-[#FC8019] hover:bg-[#FC8019]/5 transition-all duration-300 rounded-none cursor-pointer"
          >
            <span>Back to top / Home</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FC8019]" />
          </button>

        </div>

        {/* Link categories matrices */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-left">
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-subheading font-bold text-[#1C1C1C] tracking-widest uppercase mb-6 border-l-2 border-[#FC8019] pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => { onNavigate("home"); handleScrollTop(); }}
                  className="text-xs text-[#555555] hover:text-[#FC8019] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-sans"
                >
                  Home Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate("about"); handleScrollTop(); }}
                  className="text-xs text-[#555555] hover:text-[#FC8019] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-sans"
                >
                  Story & History
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate("work"); handleScrollTop(); }}
                  className="text-xs text-[#555555] hover:text-[#FC8019] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-sans"
                >
                  Featured Credits
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate("studio"); handleScrollTop(); }}
                  className="text-xs text-[#555555] hover:text-[#FC8019] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-sans"
                >
                  Studio Facilities
                </button>
              </li>
            </ul>
          </div>

          {/* Workflow Services links */}
          <div>
            <h4 className="text-xs font-subheading font-bold text-[#1C1C1C] tracking-widest uppercase mb-6 border-l-2 border-[#FC8019] pl-2.5">
              Core Services
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => { onNavigate("services"); handleScrollTop(); }}
                  className="text-xs text-[#555555] hover:text-[#FC8019] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-sans"
                >
                  Digital Intermediate (DI)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate("services"); handleScrollTop(); }}
                  className="text-xs text-[#555555] hover:text-[#FC8019] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-sans"
                >
                  Color Theory & Grading
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate("services"); handleScrollTop(); }}
                  className="text-xs text-[#555555] hover:text-[#FC8019] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-sans"
                >
                  Dolby Atmos Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate("services"); handleScrollTop(); }}
                  className="text-xs text-[#555555] hover:text-[#FC8019] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-sans"
                >
                  CGI Compositing & VFX
                </button>
              </li>
            </ul>
          </div>

          {/* Recognition and Accolades */}
          <div>
            <h4 className="text-xs font-subheading font-bold text-[#1C1C1C] tracking-widest uppercase mb-6 border-l-2 border-[#FC8019] pl-2.5">
              Recognition
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => { onNavigate("about"); handleScrollTop(); }}
                  className="text-xs text-[#555555] hover:text-[#FC8019] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-sans"
                >
                  Guild Archives
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate("work"); handleScrollTop(); }}
                  className="text-xs text-[#555555] hover:text-[#FC8019] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer text-left font-sans"
                >
                  Technical Diaries
                </button>
              </li>
              <li>
                <span className="text-xs text-[#666666] uppercase font-mono tracking-wider flex items-center gap-1.5 cursor-default">
                  <Award className="w-3.5 h-3.5 text-[#FC8019]" /> 52 Guild Medals
                </span>
              </li>
            </ul>
          </div>

          {/* Secure Distribution */}
          <div>
            <h4 className="text-xs font-subheading font-bold text-[#1C1C1C] tracking-widest uppercase mb-6 border-l-2 border-[#FC8019] pl-2.5">
              Secure Pipeline
            </h4>
            <p className="text-[10px] font-mono text-[#666666] leading-relaxed uppercase">
              All workflows strictly adhere to TPN (Trusted Partner Network) security standards. Delivering ironclad protection for all pre-release Intellectual Property.
            </p>
            <div className="mt-4 text-[10px] font-mono text-[#FC8019] uppercase tracking-wider flex items-center gap-1.5 cursor-default font-bold">
              <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-ping" /> SECURED COLD STORE ACTIVE
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-[#ECE7DF] flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[10px] font-mono text-[#666666] uppercase tracking-widest">
            © {new Date().getFullYear()} {companyName}. All Rights Reserved. Crafted with high premium cinematic standards.
          </p>
          <div className="flex gap-4 text-[10px] font-mono text-[#666666] uppercase tracking-widest">
            <button
              onClick={() => { onNavigate("contact"); handleScrollTop(); }}
              className="hover:text-[#FC8019] transition-colors bg-transparent border-none p-0 cursor-pointer font-mono text-[10px]"
            >
              Safety Protocols
            </button>
            <span className="text-[#ECE7DF]">|</span>
            <button
              onClick={() => { onNavigate("contact"); handleScrollTop(); }}
              className="hover:text-[#FC8019] transition-colors bg-transparent border-none p-0 cursor-pointer font-mono text-[10px]"
            >
              TPN Certified
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
