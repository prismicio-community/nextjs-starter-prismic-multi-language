import NextImage from "next/image";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";

const TextWithImage = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16 lg:gap-28">
        <div className="relative max-w-xs md:col-span-5 md:max-w-none">
          <div className="absolute -top-6 -left-6 w-2/3">
            <div className="aspect-w-1 aspect-h-1 bg-slate-100/50" />
          </div>
          {prismicH.isFilled.image(slice.primary.image) && (
            <NextImage
              src={slice.primary.image.url}
              alt={slice.primary.image.alt}
              width={slice.primary.image.dimensions.width}
              height={slice.primary.image.dimensions.height}
              layout="responsive"
              className="relative"
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

