"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { groups } from "@/data/groups";
import { GroupCard } from "./GroupCard";

interface JourneyMapProps {
  scrollYProgress?: MotionValue<number>;
}

export function JourneyMap({ scrollYProgress }: JourneyMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: localScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathHeight = useTransform(localScrollYProgress, [0, 1], ["0%", "100%"]);

  // Removed line parallax to prevent overflowing into footer

  return (
    <section className="relative w-full py-16 px-6 max-w-6xl mx-auto" ref={containerRef}>

      {/* Decorative map path start */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-0 left-8 md:left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-4 h-4 rounded-full bg-foreground border-4 border-background" />
      </motion.div>

      {/* Central Dotted Line for Desktop */}
      <div
        className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-foreground/30"
      />

      {/* Animated Path fill */}
      <motion.div
        className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 w-1 bg-foreground origin-top z-0"
        style={{ height: pathHeight }}
      />

      <div className="relative z-10 flex flex-col space-y-24 md:space-y-32 py-10">
        {groups.map((group, index) => (
          <GroupCard
            key={group.id}
            id={group.id}
            title={group.title}
            description={group.description}
            icon={group.icon}
            index={index}
            color={group.color}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>

    </section>
  );
}
