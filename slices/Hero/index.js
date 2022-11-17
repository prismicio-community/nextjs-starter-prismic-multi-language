import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";

const Hero = ({ slice }) => {
  return (
    <Bounded as="section" collapsible={false} className="bg-white pb-0 md:pb-0">
      <div className="grid grid-cols-1 justify-items-center gap-10">
        <div className="max-w-2xl text-center leading-relaxed">
          <PrismicRichText
            field={slice.primary.text}
            components={{
              heading1: ({ children }) => (
                <Heading className="mb-6 last:mb-0">{children}</Heading>
              ),
              paragraph: ({ children }) => (
                <p className="mb-6 last:mb-0">{children}</p>
              ),
            }}
          />
        </div>
        {prismicH.isFilled.link(slice.primary.buttonLink) &&
          prismicH.isFilled.keyText(slice.primary.buttonText) && (
            <PrismicLink
              field={slice.primary.buttonLink}
              className="rounded bg-slate-800 px-7 py-3 font-bold text-white"
            >
              {slice.primary.buttonText}
            </PrismicLink>
          )}
        {prismicH.isFilled.image(slice.primary.image) && (
          <div className="w-full">
            <PrismicNextImage
              field={slice.primary.image}
              sizes="100vw"
              className="w-full"
            />
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default Hero;
