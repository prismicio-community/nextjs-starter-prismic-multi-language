import React from 'react'
import { Link, RichText } from 'prismic-reactjs'
import { linkResolver } from '../prismic-configuration'

export default class Header extends React.Component {
  menuLinks() {
    return this.props.menu.data.menu_links.map((menuLink) => {
      return (
        <li key={menuLink.link.id}>
        {/* THIS DEF NEEDS TO BE LINK ROUTING NO CHANCE IT'S EXTERNAL */}
          <a href={Link.url(menuLink.link, linkResolver)}>
            {RichText.asText(menuLink.label)}
          </a>
        </li>
      );
    });
  }

  render() {
    return(
      <header className="site-header">
        <a href="./">
          <div className="logo">Example Site</div>
        </a>
        <nav>
          <ul>
            {this.menuLinks()}
          </ul>
        </nav>
      </header>
    )
  }
}