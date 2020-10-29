import React, { Fragment } from 'react'
import { default as NextLink } from 'next/link'
import { Navigation, LanguageSwitcher } from 'components'

const Header = ({ menu, altLangs, currentLang, isMyMainLanguage }) => (
  <Fragment>
    <header >
      <div className="menu">
        <NextLink href={isMyMainLanguage ? '/' : `/${currentLang}`} passHref>
          <a>
            <img className="logo" src={"/images/logo.png"} alt="Site logo" />
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
  </Fragment>
);

export default Header;