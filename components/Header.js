import React, { Fragment } from 'react'
import { default as NextLink } from 'next/link'
import { Navigation, LanguageSwitcher } from 'components'
import { header } from 'styles'

const Header = ({ menu, altLangs }) => (
  <Fragment>
    <header className="site-header">
      <NextLink href="./" passHref prefetch>
        <a><div className="logo">Example Site</div></a>
      </NextLink>
      <nav>
        <ul>  
          <Navigation menu={menu} />
          <LanguageSwitcher altLangs={altLangs} />
        </ul>
      </nav>
    </header>
    <style jsx global>{ header }</style>
  </Fragment>
);

export default Header;