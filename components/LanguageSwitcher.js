import { PrismicLink } from "@prismicio/react";

import { linkResolver } from "../prismicio";

const langIconURLs = {
  "fr-fr": "/images/fr.svg",
  "en-us": "/images/us.svg",
};

const LangIcon = ({ lang }) => {
  const iconURL = langIconURLs[lang];

  if (iconURL) {
    return <img src={iconURL} width="200" height="150" className="w-7" />;
  }

  return null;
};

export const LanguageSwitcher = ({ altLangs = [] }) => {
  return (
    <ul className="-ml-4 -mt-4 flex flex-wrap">
      {altLangs.map((altLang) => {
        return (
          <li key={altLang.lang} className="" className="pl-4 pt-4">
            <PrismicLink href={linkResolver(altLang)} locale={altLang.lang}>
              <span className="sr-only">{altLang.lang}</span>
              <LangIcon lang={altLang.lang} />
            </PrismicLink>
          </li>
        );
      })}
    </ul>
  );
};

export default LanguageSwitcher;
