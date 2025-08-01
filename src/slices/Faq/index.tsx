"use client"

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { FadeIn } from "@/components/FadeIn";
import { Bounded } from "@/components/Bounded";

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "Faq" Slices.
 */
const Faq: FC<FaqProps> = ({ slice }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#D3CCC1] text-[#141414] py-16"
    >
      <FadeIn className="text-center font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-16">
          <PrismicRichText field={slice.primary.titlefaq} />
      </FadeIn>

      <div className="space-y-4 mx-auto">
        {slice.primary.items.map((item, index) => {
          const isOpen = openItems.has(index);

          return (
            <FadeIn
              key={index}
              className="border border-[#141414]/20 rounded-xl bg-[#eae6df] shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left bg-[#e2ddd3] hover:bg-[#d7d1c6] transition-colors duration-200 flex justify-between items-center"
                aria-expanded={isOpen}
              >
                <div className="text-lg font-semibold">
                  <PrismicRichText field={item.questionfaq} />
                </div>
                <svg
                  className={`w-5 h-5 text-[#141414] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 bg-[#f7f5f1] text-[#141414]">
                  <PrismicRichText field={item.answerfaq} />
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Bounded>
  );
};

export default Faq;
