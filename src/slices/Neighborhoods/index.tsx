import { FC } from "react";
import { Content, ImageField } from "@prismicio/client"; // 👈 ajoute ImageField
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";

export type NeighborhoodsProps = SliceComponentProps<Content.NeighborhoodsSlice>;

const Neighborhoods: FC<NeighborhoodsProps> = ({ slice }) => {
  const items = slice.primary.popularneighborhoods as {
    titleneighborhoods?: string;
    imgneighborhoods?: ImageField; // 👈 ici on remplace any
  }[];

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#D3CCC1] text-[#141414]"
    >
      <FadeIn className="text-center font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-16">
        <PrismicRichText field={slice.primary.titlefamousneighborhoods} />
      </FadeIn>

      <div className="flex flex-wrap justify-center gap-8 mx-auto">
        {items.slice(0, 4).map((item, index) => (
          <FadeIn
            key={index}
            className="w-full md:w-[48%] flex flex-col items-center text-center space-y-4"
          >
            <div className="relative w-full h-100 overflow-hidden rounded-lg shadow-md group">
              <PrismicNextImage
                field={item.imgneighborhoods}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            {item.titleneighborhoods && (
              <h3 className="text-xl font-semibold">{item.titleneighborhoods}</h3>
            )}
          </FadeIn>
        ))}
      </div>
    </Bounded>
  );
};

export default Neighborhoods;
