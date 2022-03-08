import { PrismicLink } from "@prismicio/react";

import { linkResolver } from "../prismicio";

const LangIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();

  return <span className={`fi fi-${code}`} />;
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
