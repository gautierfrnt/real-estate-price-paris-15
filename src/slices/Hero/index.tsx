"use client";

import { FC } from "react";

import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { PrismicNextLink } from "@prismicio/next";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#D3CCC1] text-[#141414] py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Texte à gauche */}
        <div className="flex flex-col justify-center space-y-8">
          <RevealText
            field={slice.primary.heading}
            id="hero-heading"
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1]"
            staggerAmount={0.2}
            duration={1.7}
            as="h1"
          />

          <FadeIn
            className="text-lg leading-relaxed md:pr-6"
            vars={{ delay: 0.5, duration: 1.2 }}
          >
            <PrismicRichText field={slice.primary.body} />
          </FadeIn>

          <FadeIn>
            <PrismicNextLink
              field={slice.primary.button}
              className="inline-block px-12 py-3 rounded-full bg-[#141414] text-[#D3CCC1] font-semibold tracking-wide text-base transition-colors duration-300 hover:bg-[#333] hover:text-white shadow-md"
            >
              {slice.primary.button?.text}
            </PrismicNextLink>

          </FadeIn>
        </div>

        {/* Image à droite, prend toute la hauteur */}
        <FadeIn
          className="w-full h-full"
          vars={{ delay: 0.8, duration: 1.2 }}
        >
          <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl">
            <PrismicNextImage
              field={slice.primary.image}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>
      </div>
    </Bounded>
  );
};

export default Hero;
