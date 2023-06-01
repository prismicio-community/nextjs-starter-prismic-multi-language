import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

const TextWithImage = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16">
        <div className="relative max-w-xs md:col-span-5 md:max-w-none">
          <div className="absolute -left-6 -top-6 w-2/3">
            <div className="aspect-h-1 aspect-w-1 bg-slate-100/50" />
          </div>
          {prismic.isFilled.image(slice.primary.image) && (
            <PrismicNextImage
              field={slice.primary.image}
              sizes="100vw"
              className="relative w-full"
            />
          )}
        </div>
        <div className="max-w-prose self-end leading-relaxed md:col-span-7">
          <PrismicRichText
            field={slice.primary.text}
            components={{
              heading1: ({ children }) => (
                <Heading as="h2" size="6xl" className="mb-8 last:mb-0">
                  {children}
                </Heading>
              ),
              heading2: ({ children }) => (
                <Heading as="h3" size="2xl" className="mb-2 last:mb-0">
                  {children}
                </Heading>
              ),
            }}
          />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
