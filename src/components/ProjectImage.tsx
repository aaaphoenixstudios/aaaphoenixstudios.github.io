import React, { useState, useEffect } from "react";

interface ProjectImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  projectName: string;
  explicitPoster?: string;
  className?: string;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  loading?: "lazy" | "eager";
  alt?: string;
}

// Beautiful fallback SVG component rendering an elegant movie poster
function SvgPlaceholder({ title }: { title: string }) {
  let sum = 0;
  for (let i = 0; i < title.length; i++) sum += title.charCodeAt(i);
  const gradients = [
    { from: "#121214", to: "#1B1B1E", accent: "#FC8019" }, // Slate Amber
    { from: "#0B0F19", to: "#111827", accent: "#38bdf8" }, // Cool Void Blue
    { from: "#051A14", to: "#0F2D24", accent: "#10b981" }, // Deep Emerald Glow
    { from: "#14050E", to: "#240E1B", accent: "#ec4899" }, // Velvet Amethyst
    { from: "#0D0D0D", to: "#1F1F1F", accent: "#EF4444" }, // High Contrast Obsidian Red
    { from: "#1E1305", to: "#321E08", accent: "#F59E0B" }  // Rich Gold Rust
  ];
  const theme = gradients[sum % gradients.length];

  return (
    <div 
      className="relative w-full h-full flex flex-col justify-between p-6 overflow-hidden select-none" 
      style={{ background: `linear-gradient(180deg, ${theme.from} 0%, ${theme.to} 100%)` }}
    >
      {/* Film Framing Guidelines */}
      <div className="absolute inset-4 border border-white/5 pointer-events-none" />
      <div className="absolute inset-5 border border-white/5 border-dashed pointer-events-none" />
      
      {/* Header */}
      <div className="text-center mt-4">
        <span className="block font-mono text-[8px] font-extrabold tracking-[0.3em]" style={{ color: theme.accent }}>PHOENIX POST-PRODUCTION</span>
        <span className="block font-sans text-[6.5px] font-semibold text-white/40 tracking-wider mt-1">OFFICIAL DI &amp; SOUND MIX</span>
      </div>

      {/* Center Title */}
      <div className="text-center my-auto px-2">
        <div className="bg-black/40 border border-white/5 px-4 py-3 backdrop-blur-[2px]">
          <h2 className="font-sans text-sm font-black text-white tracking-widest uppercase leading-tight line-clamp-3">
            {title}
          </h2>
          <span className="block font-mono text-[7px] font-bold tracking-widest mt-1.5" style={{ color: theme.accent }}>STUDIO CERTIFICATE</span>
        </div>
      </div>

      {/* Footer info */}
      <div className="mt-auto space-y-1 font-mono text-[7px] text-white/40 text-left">
        <p>AUDIO : DOLBY ATMOS 7.1.4</p>
        <p>COLOR : DCI-P3 REC 709 DI</p>
        <div className="text-center pt-3 border-t border-white/10 mt-2">
          <span className="font-sans text-[8px] font-bold text-white/45 tracking-[0.2em] uppercase">AAA PHOENIX STUDIOS</span>
        </div>
      </div>
    </div>
  );
}

export function ProjectImage({
  projectName,
  explicitPoster,
  className,
  onLoad,
  onError,
  loading,
  alt,
  ...props
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (explicitPoster) {
      console.log("Loading:", explicitPoster);
    }
    setHasError(false);
  }, [explicitPoster]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log(`[PROJECT CARD DEBUG - SUCCESS] Loaded: "${explicitPoster}"`);
    if (onLoad) onLoad(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`[PROJECT CARD DEBUG - ERROR] Failed to load: "${explicitPoster}"`);
    setHasError(true);
    if (onError) onError(e);
  };

  if (hasError || !explicitPoster) {
    return (
      <div className={className}>
        <SvgPlaceholder title={projectName} />
      </div>
    );
  }

  // Use the explicit poster (either URL or filename).
  // If it's a relative filename, ensure it's picked up from the public/projects folder using exact or resolved URL base
  let srcUrl = explicitPoster;
  if (!srcUrl.startsWith("http") && !srcUrl.startsWith("data:") && !srcUrl.startsWith("/")) {
    srcUrl = `/projects/${srcUrl}`;
  }

  return (
    <img
      src={srcUrl}
      alt={alt || projectName}
      onLoad={handleLoad}
      onError={handleError}
      className={className}
      loading={loading}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
