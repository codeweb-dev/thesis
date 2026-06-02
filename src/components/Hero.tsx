"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Compass, MapPin } from "lucide-react";

interface HeroProps {
  scrollYProgress?: MotionValue<number>;
}

export function Hero({ scrollYProgress }: HeroProps) {
  // If scrollYProgress isn't provided (e.g. testing in isolation), fallback to 0 movement.
  const yFast = useTransform(scrollYProgress || new motion.MotionValue(), [0, 1], ["0%", "150%"]);
  const ySlow = useTransform(scrollYProgress || new motion.MotionValue(), [0, 1], ["0%", "50%"]);

  return (
    <section className="relative w-full py-32 flex flex-col items-center justify-center text-center overflow-hidden">


      <div className="z-10 max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center justify-center space-x-2 border-2 border-foreground px-4 py-1.5 rounded-full mb-8 bg-background shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
        >
          <Compass className="w-4 h-4 text-foreground" />
          <span className="text-sm font-semibold uppercase tracking-wider text-foreground">The Grand Expedition</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground"
        >
          BSCS Thesis Journey 2026
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-foreground/80 font-medium max-w-2xl mx-auto"
        >
          Exploring innovative solutions through technology, research, and innovation.
        </motion.p>
      </div>

    </section>
  );
}
