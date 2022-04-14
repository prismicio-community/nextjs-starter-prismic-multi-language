import NextImage from "next/image";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
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
        {prismicH.isFilled.image(slice.primary.buttonImage) && (
          <PrismicLink field={slice.primary.buttonLink}>
            <NextImage
              src={slice.primary.buttonImage.url}
              alt={slice.primary.buttonImage.alt}
              width={slice.primary.buttonImage.dimensions.width}
              height={slice.primary.buttonImage.dimensions.height}
            />
          </PrismicLink>
        )}
        {prismicH.isFilled.image(slice.primary.image) && (
          <div className="w-full">
            <NextImage
              src={slice.primary.image.url}
              alt={slice.primary.image.alt}
              width={slice.primary.image.dimensions.width}
              height={slice.primary.image.dimensions.height}
              layout="responsive"
            />
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default Hero;
