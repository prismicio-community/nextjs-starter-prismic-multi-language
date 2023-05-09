import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "./Bounded";

const languageLabels = {
  "en-us": "EN",
  "fr-fr": "FR",
};

export const Header = ({ languages = [], navigation, settings }) => {
  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicLink href="/">
          {prismicH.isFilled.image(settings.data.logo) && (
            <PrismicNextImage field={settings.data.logo} />
          )}
        </PrismicLink>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-10">
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
          </ul>
          <div className="flex flex-wrap gap-3">
            <span aria-hidden={true}>🌐</span>
            <ul className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <li key={lang.lang} className="first:font-semibold">
                  <PrismicLink
                    href={lang.url}
                    locale={lang.lang}
                    aria-label={`Change language to ${lang.lang_name}`}
                  >
                    {languageLabels[lang.lang] || lang.lang}
                  </PrismicLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </Bounded>
  );
};
