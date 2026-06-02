"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hero } from "@/components/Hero";
import { JourneyMap } from "@/components/JourneyMap";
import { Footer } from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const noiseY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <main ref={containerRef} className="relative flex flex-col items-center overflow-hidden">

      {/* Base Layer: Background */}
      <div className="fixed inset-0 bg-background z-[-5]" />

      {/* Layer 1: Parchment Texture */}
      <motion.div
        className="fixed inset-0 opacity-[0.04] pointer-events-none z-[-4]"
        style={{
          y: noiseY,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Layer 2: Video Background */}
      <motion.div
        className="fixed inset-0 z-[-3] pointer-events-none opacity-100 flex items-center justify-center overflow-hidden"
        style={{ y: videoY }}
      >
        <div 
          dangerouslySetInnerHTML={{
            __html: `
              <video 
                autoplay 
                loop 
                muted 
                playsinline 
                style="width: 100%; height: 100%; object-fit: cover;"
                class="scale-125"
              >
                <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4" type="video/mp4" />
              </video>
            `
          }}
          className="w-full h-full"
        />
      </motion.div>

      {/* Layer 3: Gradient Overlay to keep text readable */}
      <div className="fixed inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50 pointer-events-none z-[-2]" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Hero scrollYProgress={scrollYProgress} />
        <JourneyMap scrollYProgress={scrollYProgress} />
        <Footer />
      </div>

    </main>
  );
}
