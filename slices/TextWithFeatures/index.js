import NextImage from "next/image";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";

const TextWithFeatures = ({ slice }) => {
  return (
    <Bounded collapsible={false} as="section" className="bg-slate-100">
      <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-10 lg:gap-28">
        <div className="grid grid-cols-1 gap-8">
          {prismicH.isFilled.image(slice.primary.icon) && (
            <NextImage
              src={slice.primary.icon.url}
              alt={slice.primary.icon.alt}
              width={slice.primary.icon.dimensions.width}
              height={slice.primary.icon.dimensions.height}
              layout="fixed"
            />
          )}
          <div className="leading-relaxed">
            <PrismicRichText
              field={slice.primary.text}
              components={{
                heading1: ({ children }) => (
                  <Heading as="h2" size="6xl" className="mb-4 last:mb-0">
                    {children}
                  </Heading>
                ),
              }}
            />
          </div>
        </div>
        <ul className="grid gap-10">
          {slice.items.map((item) => (
            <li
              key={prismicH.asText(item.featureDescription)}
              className="leading-relaxed"
            >
              <PrismicRichText
                field={item.featureDescription}
                components={{
                  heading3: ({ children }) => (
                    <Heading as="h3" size="2xl" className="mb-2 last:mb-0">
                      {children}
                    </Heading>
                  ),
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default TextWithFeatures;

