"use client";

import { motion, MotionValue, useTransform, useInView, motionValue } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MapPin, Flag, BadgeCheck, Crown, Layout, Database, Palette, Users, Code, CheckCircle2 } from "lucide-react";
import { ElementType, useRef, useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface GroupCardProps {
  id: number;
  title: string;
  description: string;
  icon: ElementType;
  index: number;
  color: string;
  scrollYProgress?: MotionValue<number>;
  fullDescription?: string;
  leader?: string;
  members?: string[];
  roles?: Record<string, string>;
  images?: string[];
  landingImage?: string;
}

export function GroupCard({ id, title, description, icon: Icon, index, color, scrollYProgress, fullDescription, leader, members, roles, images, landingImage }: GroupCardProps) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const isActive = useInView(ref, { margin: "-30% 0px -30% 0px" });

  // Faster parallax for foreground decorations
  const decorationY = useTransform(scrollYProgress || motionValue(0), [0, 1], ["0%", "-200%"]);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className={`border-foreground/50 font-semibold px-3 py-1 transition-colors duration-500 text-foreground`}
                style={{ backgroundColor: isActive ? color : undefined }}
              >
                Group {id}
              </Badge>
              <Badge
                variant="outline"
                className={`border-foreground/50 font-semibold px-3 py-1 transition-colors duration-500 text-foreground`}
                style={{ backgroundColor: isActive ? color : undefined }}
              >
                <BadgeCheck data-icon="inline-start" />
                Title Defended
              </Badge>
            </div>
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
        <CardFooter className="pt-4 border-t border-foreground/10 bg-muted/20">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="outline" className="w-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
                View Details
              </Button>
            </DrawerTrigger>
            <DrawerContent className="w-full sm:max-w-none md:w-1/2">
              <DrawerHeader>
                <DrawerTitle className="text-2xl">{title} Details</DrawerTitle>
                <DrawerDescription>Team and Project Information</DrawerDescription>
              </DrawerHeader>
              <div className="overflow-y-auto px-4 py-2 flex flex-col gap-6">
                {landingImage && (
                  <div className="relative w-full rounded-xl border-2 border-foreground/10 shadow-sm aspect-video">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={landingImage} alt={`${title} landing page`} className="object-cover w-full h-full" />
                  </div>
                )}

                {leader && (
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-foreground flex items-center gap-2">
                      <Crown className="w-5 h-5 text-yellow-500" />
                      Leader
                    </h4>
                    <div className="bg-foreground/5 p-3 rounded-lg border border-foreground/10 inline-flex items-center gap-3">
                      <span className="font-semibold text-foreground text-base">{leader}</span>
                    </div>
                  </div>
                )}

                {roles && (
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-foreground flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-500" />
                      Roles
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground">
                      {Object.entries(roles).map(([role, person]) => {
                        let RoleIcon = Code;
                        if (role.toLowerCase().includes("frontend")) RoleIcon = Layout;
                        if (role.toLowerCase().includes("backend")) RoleIcon = Database;
                        if (role.toLowerCase().includes("designer")) RoleIcon = Palette;
                        
                        return (
                          <div key={role} className="flex items-center gap-3 bg-foreground/5 hover:bg-foreground/10 transition-colors p-3 rounded-lg border border-foreground/10">
                            <div className="p-2 bg-background rounded-md shadow-sm border border-foreground/10">
                              <RoleIcon className="w-4 h-4 text-foreground/70" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/50">{role}</span>
                              <span className="font-medium text-foreground leading-tight">{person}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {members && members.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Members
                    </h4>
                    <div className="flex flex-wrap gap-2 text-muted-foreground">
                      {members.map((member, i) => (
                        <div key={i} className="flex items-center bg-background border border-foreground/20 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:border-foreground/40 transition-colors">
                          {member}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {fullDescription && (
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-foreground">Project Description</h4>
                    <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                      {fullDescription.split("\n").map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                )}

                {images && images.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-foreground">Gallery</h4>
                    <div className="px-12">
                      <Carousel
                        setApi={setApi}
                        opts={{
                          align: "start",
                        }}
                        className="w-full"
                      >
                        <CarouselContent>
                          {images.map((img, i) => (
                            <CarouselItem key={i}>
                              <div className="p-1">
                                <div className="relative aspect-video rounded-lg overflow-hidden border border-foreground/10">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src={img} alt={`${title} screenshot ${i + 1}`} className="object-cover w-full h-full" />
                                </div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                      <div className="py-2 text-center text-sm text-muted-foreground">
                        Slide {current} of {count}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline" className="border-2 border-foreground hover:bg-foreground hover:text-background">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
