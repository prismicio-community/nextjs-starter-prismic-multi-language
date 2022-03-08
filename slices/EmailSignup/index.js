import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

const EmailSignup = ({ slice }) => {
  return (
    <section className="bg-white px-6 py-12 md:pb-24">
      <div className="mx-auto grid max-w-5xl items-start justify-items-center gap-6 lg:grid-cols-12">
        <div className="text-center lg:col-span-5 lg:text-left">
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
            <PrismicRichText field={slice.primary.section_title} />
          </h2>
          <div className="max-w-2xl text-xl leading-relaxed">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        <div className="grid w-full max-w-sm gap-3 lg:col-span-7">
          <PrismicRichText field={slice.primary.input_label} />
          <input
            className="rounded-md border border-black px-6 py-4 placeholder-neutral-400"
            type="text"
            name="FirstName"
            placeholder={prismicH.asText(slice.primary.input_placeholder)}
          />
          <input
            className="rounded-md bg-black px-6 py-4 text-white"
            type="submit"
            value={prismicH.asText(slice.primary.button_text)}
          />
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
