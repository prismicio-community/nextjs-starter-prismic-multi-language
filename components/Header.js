import React from 'react'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../prismic-configuration'

export default class Header extends React.Component {
  menuLinks() {
    return this.props.menu.data.menu_links.map((menuLink) => {
      return (
        <li key={menuLink.link.id}>
          <Link
            as={linkResolver(menuLink.link)}
            href={`/page?uid=${menuLink.link.uid}`}
            passHref
          >
            <a>{RichText.asText(menuLink.label)}</a>
          </Link>
        </li>
      );
    });
  }

  render() {
    return(
      <header className="site-header">
        <Link href="./">
          <a><div className="logo">Example Site</div></a>
        </Link>
        <nav>
          <ul>
            {this.menuLinks()}
          </ul>
        </nav>
      </header>
    )
  }
}