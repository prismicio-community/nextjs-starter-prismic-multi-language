import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";
import clsx from "clsx";

import { Bounded } from "../../components/Bounded";

const Image = ({ slice }) => {
  return (
    <Bounded
      as="section"
      className={clsx(
        slice.variation === "lightSlate" && "bg-slate-100",
        slice.variation === "white" && "bg-white"
      )}
    >
      <div className="relative">
        {slice.primary.withAccent && (
          <div className="absolute -top-4 -left-4 w-1/3">
            <div className="aspect-w-1 aspect-h-1 bg-slate-200/50" />
          </div>
        )}
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
    </Bounded>
  );
};

export default Image;

