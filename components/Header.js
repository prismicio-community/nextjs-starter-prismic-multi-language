import { PrismicLink } from "@prismicio/react";

import { Navigation } from "./Navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = ({ menu, altLangs }) => {
  return (
    <header className="bg-white px-6 pt-8 md:py-16">
      <div className="mx-auto grid max-w-5xl justify-items-center gap-4 md:grid-cols-[1fr_auto] md:justify-items-start">
        <div>
          <PrismicLink href="/">
            <img className="" src="/images/logo.png" alt="Site logo" />
          </PrismicLink>
        </div>
        <div className="grid items-center justify-items-center gap-3 md:grid-cols-[1fr_auto] md:justify-items-end md:gap-6 md:justify-self-end">
          <Navigation menu={menu} />
          <LanguageSwitcher altLangs={altLangs} />
        </div>
      </div>
    </header>
  );
};
