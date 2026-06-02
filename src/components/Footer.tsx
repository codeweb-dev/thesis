"use client";

import { Anchor, Flag, Map } from "lucide-react";
import Confetti from "react-confetti";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer ref={ref} className="w-full py-24 flex flex-col items-center justify-center text-center relative overflow-hidden bg-background border-t-2 border-foreground">
      {isInView && windowDimension.width > 0 && (
        <div className="fixed inset-0 pointer-events-none z-[100]">
          <Confetti 
            width={windowDimension.width} 
            height={windowDimension.height} 
            recycle={false} 
            numberOfPieces={600} 
            gravity={0.15}
            colors={["#FFB3B3", "#B3D4FF", "#B3FFC6", "#FFE0B2", "#D1C4E9", "#F8BBD0", "#B2EBF2", "#FFF9C4"]}
          />
        </div>
      )}
      <div className="z-10 flex flex-col items-center max-w-2xl px-6 mt-8">
        <div className="w-20 h-20 bg-background border-2 border-foreground rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-center mb-8 rotate-3 hover:rotate-0 transition-all">
          {/* Using a custom combination for treasure chest look */}
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
            <rect x="3" y="8" width="18" height="14" rx="2" />
            <path d="M12 8v14" />
            <path d="M3 8c0-3.5 4-4 9-4s9 .5 9 4" />
            <circle cx="12" cy="11" r="2" />
          </svg>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Congratulations! You&apos;ve reached the end of the Thesis Journey.
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-8 text-muted-foreground font-medium">
          <div className="flex items-center gap-2">
            <Map className="w-5 h-5" />
            <span>Total Projects: 8</span>
          </div>
          <div className="flex items-center gap-2">
            <Flag className="w-5 h-5" />
            <span>Program: BSCS</span>
          </div>
          <div className="flex items-center gap-2">
            <Anchor className="w-5 h-5" />
            <span>EARIST Cavite Campus</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
