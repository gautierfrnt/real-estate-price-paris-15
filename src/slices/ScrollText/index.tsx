"use client"

import { FC, useRef } from "react";
import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Props for `ScrollText`.
 */
export type ScrollTextProps = SliceComponentProps<Content.ScrollTextSlice>;

/**
 * Component for "ScrollText" Slices.
 */
const ScrollText: FC<ScrollTextProps> = ({ slice }) => {

  const componentRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)


  const words = asText(slice.primary.text).split(" ");

  useGSAP(() => {
    const component = componentRef.current
    const textElement = textRef.current
    const contentElement = contentRef.current;
    const letters = textElement?.querySelectorAll("span");

    if (!component || !textElement || !letters || !contentElement) return;

    gsap.set(contentElement, {filter: "blur(40px)"});
    gsap.set(letters, {color: 'hsl(36, 20%, 79%)'});

    gsap.to(contentElement, {
      filter: "blur(0px)",
      duration: 1,
      scrollTrigger: {
        trigger: component,
        start: "top 75%",
        end: "top top",
        scrub: 2, 
        markers: false
      }
    })

    const colorT1 = gsap.timeline({
      scrollTrigger: {
        trigger: component, 
        start: "top top",
        end: "bottom -100%",
        pin: true, // L'élément reste immobile
        scrub: 2, 
        markers: false
      },
    });

    colorT1.to(letters, {
      color: "#141414",
      stagger: {
        each: 0.01,
        from: "start",
        ease: "power1.inOut"
      }
    });

  }, {scope: componentRef})

  return (
    <Bounded
      ref={componentRef}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex h-screen items-center justify-center bg-[#D3CCC1] relative"
    >

      <div ref={contentRef}>
        <div className="mb-2 text-center text-sm tracking-wider text-[#141414] uppercase md:mb-8 md:text-base">
          <span>{slice.primary.eyebrow}</span>
        </div>

        {/* Paragraph */}
        <div ref={textRef} className="text-center">
          <p className="font-display flex flex-wrap justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug sm:leading-tight text-balance uppercase text-center">
            {words.map((word, index) => (
              <span key={`${word}-${index}`} className="inline-block">
                {word.split("").map((char, charIndex) => (
                  <span key={`${char}-${charIndex}`} className="inline-block">
                    {char}
                  </span>
                ))}
                {index < words.length - 1 && <span className="inline-block">&nbsp;</span>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Bounded>
  );
};

export default ScrollText;
