import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Elegant organic progress simulation accelerating and slowing down mimicking actual asset caching
    let timer: NodeJS.Timeout;
    const startTime = Date.now();
    
    // Check if user has already watched the full luxurious loader during this session
    const isReturning = typeof window !== "undefined" && sessionStorage.getItem("aaa_phoenix_loaded");
    const duration = isReturning ? 350 : 2000; // Hyper-speed bypass for returning sessions, standard elegant reveal for first load

    const step = () => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      // Easing curve (easeOutCubic style)
      const easeProgress = Math.floor(
        100 * (1 - Math.pow(1 - progressRatio, 3))
      );

      setProgress(easeProgress);

      if (progressRatio < 1) {
        timer = setTimeout(step, 16); // 60fps-like ticks
      } else {
        if (typeof window !== "undefined") {
          sessionStorage.setItem("aaa_phoenix_loaded", "true");
        }
        setTimeout(() => {
          onComplete();
        }, isReturning ? 100 : 250);
      }
    };

    timer = setTimeout(step, 16);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[99999] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Subtle Spark Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Golden spotlight overlay */}
      <div className="absolute inset-0 gold-glow-radial opacity-60 pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-md px-6 text-center">
        {/* Isolated Animated Logo for Premium Feel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-40 h-40 md:w-56 md:h-56 mb-12 flex items-center justify-center relative"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full" />
          
          <img
            src="/logo_pheonix.png"
            alt="Pheonix Studio"
            className="w-full h-full object-contain relative z-10 transition-transform duration-[3s]"
            style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.5))" }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fb = document.getElementById('loader-logo-fallback');
              if (fb) fb.classList.remove('hidden');
            }}
          />
          <div 
            id="loader-logo-fallback" 
            className="w-24 h-24 border border-white/20 flex flex-col items-center justify-center hidden absolute bg-[#1C1C1C]"
          >
            <span className="font-heading font-black text-white text-xl tracking-widest">AAA</span>
          </div>
        </motion.div>

        {/* Minimalist Progress Meter */}
        <div className="flex flex-col items-center w-64 max-w-full relative z-20 mt-4">
          <div className="text-[10px] sm:text-xs font-mono text-[#FC8019] tracking-widest mb-3">
            {progress.toString().padStart(3, "0")} %
          </div>
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 bottom-0 bg-[#FC8019]"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: [0.2, 0.6, 0.2] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="text-[8px] font-mono font-medium text-white/40 tracking-[0.3em] mt-4 uppercase uppercase"
          >
             INITIALIZING WORKSPACE
          </motion.div>
        </div>
      </div>

      <div className="absolute top-8 left-8 right-8 bottom-8 border border-white/5 pointer-events-none" />
    </div>
  );
}
