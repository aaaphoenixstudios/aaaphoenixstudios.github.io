import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function GlowCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Physics springs for 120 FPS high fidelity smooth motion
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect mobile touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
       return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // High performance event delegation for hover states (eliminates memory leaks & MutationObserver)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("a, button, [role='button'], input, textarea, select, .premium-hover-trigger")) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("a, button, [role='button'], input, textarea, select, .premium-hover-trigger")) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Golden Spotlight Halo */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold/40 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 2.2 : isClicked ? 0.8 : 1.0,
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.08)" : "rgba(0,0,0,0)",
          borderColor: isHovered ? "rgba(212, 175, 55, 0.9)" : "rgba(212, 175, 55, 0.4)",
          boxShadow: isHovered 
            ? "0 0 20px rgba(212, 175, 55, 0.4), inset 0 0 10px rgba(212, 175, 55, 0.2)" 
            : "0 0 10px rgba(212, 175, 55, 0.1)"
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
      {/* Inner Glowing Core */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-gold rounded-full pointer-events-none z-[10000]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          marginLeft: "11px",
          marginTop: "11px",
          scale: isHovered ? 1.5 : isClicked ? 0.5 : 1.0,
          boxShadow: "0 0 12px rgba(212, 175, 55, 0.8)"
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.1 }}
      />
    </>
  );
}
