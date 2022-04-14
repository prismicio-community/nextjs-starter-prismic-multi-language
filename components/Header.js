import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";

import { linkResolver } from "../prismicio";
import { Bounded } from "./Bounded";

const FlagIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();

  return <span className={`fi fi-${code}`} />;
};

export const Header = ({ alternateLanguages = [], navigation, settings }) => {
  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicLink href="/">
          {prismicH.isFilled.image(settings.data.logo) && (
            <NextImage
              src={settings.data.logo.url}
              alt={settings.data.logo.alt}
              width={settings.data.logo.dimensions.width}
              height={settings.data.logo.dimensions.height}
              layout="fixed"
            />
          )}
        </PrismicLink>
        <nav>
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {navigation.data?.links.map((item) => (
              <li
                key={prismicH.asText(item.label)}
                className="font-semibold tracking-tight text-slate-800"
              >
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
            {alternateLanguages.map((lang) => (
              <li key={lang.lang}>
                <PrismicLink href={linkResolver(lang)} locale={lang.lang}>
                  <span className="sr-only">{lang.lang}</span>
                  <FlagIcon lang={lang.lang} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
};
