"use client";
import clsx from "clsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

// Enregistrement des plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

type FadeInProps = {
  children: React.ReactNode;
  vars?: gsap.TweenVars;
  className?: string;
};

export const FadeIn = ({ children, vars = {}, className }: FadeInProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          containerRef.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 1.2,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%", // déclenche quand l’élément est à 85% du viewport
              toggleActions: "play none none none",
            },
            ...vars,
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(containerRef.current, {
          opacity: 1,
          y: 0,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={clsx("opacity-0", className)}>
      {children}
    </div>
  );
};
