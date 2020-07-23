import React, { Fragment } from 'react'
import { default as NextLink } from 'next/link'
import { Navigation, LanguageSwitcher } from 'components'

const Header = ({ menu, altLangs, currentLang, isMyMainLanguage }) => (
  <Fragment>
    <header className="menu">
      <NextLink href={isMyMainLanguage ? '/' : `/${currentLang}`} passHref prefetch>
        <a>
          <img className="white-asset" src='/static/images/check1.png' alt="Site logo" />
          <h3 className="logo-text">Todoop</h3>
        </a>
      </NextLink>
      <nav className="menu">
        <ul>  
          <Navigation menu={menu} />
          <LanguageSwitcher altLangs={altLangs} />
        </ul>
      </nav>
    </header>
  </Fragment>
);

export default Header;