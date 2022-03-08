import { PrismicRichText, PrismicText } from "@prismicio/react";

const TextInfo = ({ slice }) => {
  return (
    <section className="collapsible bg-white px-6 py-12">
      <div className="mx-auto grid max-w-5xl items-start gap-7 lg:grid-cols-2">
        <div className="grid gap-7">
          <img
            src="/images/top-icon.png"
            alt="Checkbox icon"
            className="h-14 w-14 md:h-16 md:w-16"
          />
          <h2 className="text-3xl font-bold leading-snug lg:text-5xl lg:leading-tight">
            <PrismicText field={slice.primary.sectionTitle} />
          </h2>
          <div className="max-w-prose leading-relaxed">
            <PrismicRichText field={slice.primary.leftColumnText} />
          </div>
        </div>
        <div className="max-w-prose leading-relaxed">
          <PrismicRichText
            field={slice.primary.rightColumnText}
            components={{
              heading3: ({ children }) => (
                <h3 className="mb-2 text-xl font-bold leading-relaxed last:mb-0">
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
    </section>
  );
};
export default TextInfo;
