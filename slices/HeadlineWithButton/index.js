import { PrismicRichText, PrismicText } from "@prismicio/react";
import Image from "next/image";
import * as prismicH from "@prismicio/helpers";

const HeadlineWithButton = ({ slice }) => {
  return (
    <section className="collapsible bg-white px-6 py-12">
      <div className="mx-auto grid max-w-5xl items-end justify-items-center gap-6 lg:grid-cols-3">
        <div className="text-center lg:col-span-2 lg:text-left">
          <h1 className="mb-4 text-4xl font-bold lg:mb-8 lg:text-8xl">
            <PrismicText field={slice.primary.headline} />
          </h1>
          <div className="max-w-prose text-xl leading-relaxed">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        {prismicH.isFilled.image(slice.primary.button) && (
          <Image
            src={slice.primary.button.url}
            alt={slice.primary.button.alt || ""}
            width={slice.primary.button.dimensions.width}
            height={slice.primary.button.dimensions.height}
          />
        )}
      </div>
    </section>
  );
};

export default HeadlineWithButton;
