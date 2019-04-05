import React, { Fragment } from 'react'
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'
import { linkResolver, hrefResolver } from 'prismic-configuration'
import { header } from 'styles'

const MenuLinks = ({ menu }) => (
  menu.data.menu_links.map((menuLink) => {
    return (
      <li key={menuLink.link.id}>
        <NextLink
          as={linkResolver(menuLink.link)}
          href={hrefResolver(menuLink.link)}
          passHref
          prefetch
        >
          <a>{RichText.asText(menuLink.label)}</a>
        </NextLink>
      </li>
    );
  })
);

const Header = (menu) => (
  <Fragment>
    <header className="site-header">
      <NextLink href="/" passHref prefetch>
        <a><div className="logo">Example Site</div></a>
      </NextLink>
      <nav>
        <ul>
          <MenuLinks {...menu}/>
        </ul>
      </nav>
    </header>
    <style jsx global>{ header }</style>
  </Fragment>
);

export default Header;