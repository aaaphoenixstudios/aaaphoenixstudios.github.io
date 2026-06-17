import { useState } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProjectImage({ src, alt, className = "" }: ProjectImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const posterUrl = src.startsWith("/") || src.startsWith("http") 
    ? src 
    : `/${src}`;

  const fallbackUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=60";

  return (
    <div className={`relative overflow-hidden bg-[#FAF7F2] ${className}`}>
      <img
        src={hasError ? fallbackUrl : posterUrl}
        alt={alt}
        className="w-full h-full object-cover transition-opacity duration-300"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        loading="lazy"
      />
      {isLoading && (
        <div className="absolute inset-0 bg-[#ECE7DF] animate-pulse" />
      )}
    </div>
  );
}
