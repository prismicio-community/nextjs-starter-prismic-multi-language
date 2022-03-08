import { PrismicRichText, PrismicText } from "@prismicio/react";
import Image from "next/image";

const InfoWithImage = ({ slice }) => {
  const featuredImage = slice.primary.featuredImage;

  return (
    <section className="collapsible bg-white px-6 py-12">
      <div className="mx-auto grid max-w-5xl grid-flow-row-dense items-start gap-7 lg:grid-cols-2 lg:gap-12">
        <div className="grid gap-7 lg:col-start-2">
          <img
            src="/images/top-icon.png"
            alt="Checkbox icon"
            className="h-14 w-14 md:h-16 md:w-16"
          />
          <h2 className="text-3xl font-bold leading-snug lg:text-5xl lg:leading-tight">
            <PrismicText field={slice.primary.sectionTitle} />
          </h2>
          <div className="max-w-prose leading-relaxed">
            <PrismicRichText
              field={slice.primary.text}
              components={{
                heading3: ({ children }) => (
                  <h3 className="mb-7 text-xl font-bold leading-relaxed last:mb-0">
                    {children}
                  </h3>
                ),
                paragraph: ({ children }) => (
                  <p className="mb-7 last:mb-0">{children}</p>
                ),
              }}
            />
          </div>
        </div>
        <div className="lg:col-start-1">
          <div className="hidden lg:block">
            <Image
              src={featuredImage.url}
              alt={featuredImage.alt || ""}
              width={featuredImage.dimensions.width}
              height={featuredImage.dimensions.height}
              layout="responsive"
            />
          </div>
          <div className="hidden md:block lg:hidden">
            <Image
              src={featuredImage.tablet.url}
              alt={featuredImage.tablet.alt || ""}
              width={featuredImage.tablet.dimensions.width}
              height={featuredImage.tablet.dimensions.height}
              layout="responsive"
            />
          </div>
          <div className="md:hidden">
            <Image
              src={featuredImage.mobile.url}
              alt={featuredImage.mobile.alt || ""}
              width={featuredImage.mobile.dimensions.width}
              height={featuredImage.mobile.dimensions.height}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoWithImage;
