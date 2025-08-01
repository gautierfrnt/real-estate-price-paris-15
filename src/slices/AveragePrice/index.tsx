"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicTable } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";

export type AverageProps = SliceComponentProps<Content.AverageSlice>;

const Average: FC<AverageProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#D3CCC1] text-[#141414] py-24"
    >
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[600px]">
        {/* Image à gauche */}
        <FadeIn className="w-full h-full" vars={{ delay: 0.5, duration: 1.2 }}>
          <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <PrismicNextImage
              field={slice.primary.image}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>

        {/* Contenu à droite */}
        <div className="flex flex-col justify-center space-y-10 h-full">
          <FadeIn className="text-lg md:text-xl font-medium" vars={{ delay: 0.7 }}>
            <PrismicRichText field={slice.primary.text} />
          </FadeIn>

          <FadeIn className="overflow-x-auto" vars={{ delay: 1 }}>
            <div className="min-w-full border-2 border-[#141414] rounded-lg overflow-hidden">
              <div className="[&>table]:w-full [&>table]:border-collapse [&>table]:text-left">
                <PrismicTable field={slice.primary.table} />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Bounded>
  );
};

export default Average;
