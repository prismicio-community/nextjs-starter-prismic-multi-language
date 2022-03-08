import Image from "next/image";
import * as prismicH from "@prismicio/helpers";

const FullWidthImage = ({ slice }) => {
  return (
    <section className="bg-white px-6 py-12 lg:pt-36">
      <div className="relative mx-auto max-w-5xl">
        <img
          src="/images/full-width-image-background.png"
          alt="Background pattern"
          width={1686}
          height={1380}
          className={[
            "absolute -top-24 hidden w-8/12 lg:block",
            slice.primary.backgroundPosition === "Left"
              ? "-left-24"
              : "-right-24",
          ].join(" ")}
        />
        {prismicH.isFilled.image(slice.primary.image) && (
          <Image
            src={slice.primary.image.url}
            alt={slice.primary.image.alt || ""}
            width={slice.primary.image.dimensions.width}
            height={slice.primary.image.dimensions.height}
            className="relative"
            layout="responsive"
          />
        )}
      </div>
    </section>
  );
};

export default FullWidthImage;
