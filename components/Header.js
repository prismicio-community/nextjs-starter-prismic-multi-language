import React from 'react';
import { default as NextLink } from 'next/link';
import { Navigation, LanguageSwitcher } from '.';

const Header = ({ menu, altLangs, currentLang, isMyMainLanguage }) => (
  <>
    <header>
      <div className="menu">
        <NextLink href={isMyMainLanguage ? '/' : `/${currentLang}`} passHref>
          <a>
            <img className="logo" src="/images/logo.png" alt="Site logo" />
          </a>
        </NextLink>
      </div>
      <div className="menu">
        <ul>
          <Navigation menu={menu} />
          <LanguageSwitcher altLangs={altLangs} />
        </ul>
      </div>
    </header>
  </>
);

export default Header;
