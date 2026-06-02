"use client";

import { motion, MotionValue, useTransform, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Flag } from "lucide-react";
import { ElementType, useRef } from "react";

interface GroupCardProps {
  id: number;
  title: string;
  description: string;
  icon: ElementType;
  index: number;
  color: string;
  scrollYProgress?: MotionValue<number>;
}

export function GroupCard({ id, title, description, icon: Icon, index, color, scrollYProgress }: GroupCardProps) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const isActive = useInView(ref, { margin: "-30% 0px -30% 0px" });

  // Faster parallax for foreground decorations
  const decorationY = useTransform(scrollYProgress || new motion.MotionValue(), [0, 1], ["0%", "-200%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`relative w-full pl-20 md:pl-0 md:w-5/12 ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
    >
      {/* Route Marker on the timeline for Desktop */}
      <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${isEven ? "-right-[20%]" : "-left-[20%]"} w-[20%] items-center`}>
        {/* Connector line */}
        <div className={`absolute w-full h-0.5 border-t-2 transition-all duration-500 ${isActive ? "border-solid border-foreground" : "border-dashed border-foreground/30"}`} />
        {/* Marker */}
        <div 
          className={`absolute ${isEven ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"} w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center z-10 transition-all duration-500 ${isActive ? "scale-110" : "bg-background scale-100"}`}
          style={{ backgroundColor: isActive ? color : undefined }}
        >
          <MapPin className="w-5 h-5 text-foreground transition-colors duration-500" />
        </div>
      </div>

      {/* Route Marker for Mobile */}
      <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-8 -translate-x-1/2 z-10">
        <div 
          className={`w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center transition-all duration-500 ${isActive ? "scale-110" : "bg-background scale-100"}`}
          style={{ backgroundColor: isActive ? color : undefined }}
        >
          <div className="w-2 h-2 rounded-full bg-foreground transition-colors duration-500" />
        </div>
        {/* Connector line for mobile */}
        <div className={`absolute top-1/2 left-full w-9 h-0.5 border-t-2 -translate-y-1/2 transition-all duration-500 ${isActive ? "border-solid border-foreground" : "border-dashed border-foreground/30"}`} />
      </div>



      <Card 
        className={`rounded-xl border-2 border-foreground shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all duration-500 overflow-hidden group ${isActive ? "scale-[1.02]" : "bg-background"}`}
        style={{ backgroundColor: isActive ? color : undefined }}
      >
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start mb-2">
            <Badge 
              variant="outline" 
              className={`border-foreground/50 font-semibold px-3 py-1 transition-colors duration-500 text-foreground`}
              style={{ backgroundColor: isActive ? color : undefined }}
            >
              Group {id}
            </Badge>
            <div 
              className={`p-2 rounded-full border-2 border-foreground transition-all duration-500 text-foreground group-hover:bg-foreground group-hover:text-background ${!isActive && "bg-background"}`}
              style={{ backgroundColor: isActive ? color : undefined }}
            >
              <Icon className="w-5 h-5" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold leading-tight">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-muted-foreground font-medium">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
