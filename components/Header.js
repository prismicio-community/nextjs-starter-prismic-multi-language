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
      <React.Fragment>
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
        <style jsx global>{`
          .site-header {
            height: 30px;
            padding: 20px 0;
          }
          .site-header,
          .site-header a {
            color: #484d52;
            font-weight: 700;
          }
          .site-header nav a:hover {
            color: #72767B;
          }
          .homepage .site-header,
          .homepage .site-header a {
            color: #ffffff;
          }
          .homepage .site-header nav a:hover {
            color: #c8c9cb;
          }
          .site-header .logo {
            display: inline-block;
            font-size: 22px;
            font-weight: 900;
          }
          .site-header nav {
            float: right;
          }
          .site-header nav ul {
            margin: 0;
          }
          .site-header nav li {
            display: inline-block;
            margin-left: 40px;
          }
          @media (max-width: 1060px) {
            .site-header {
              padding-left: 20px;
              padding-right: 20px;
            }
          }
          @media (max-width: 767px) {
            .site-header {
              height: auto;
            }
            .homepage .site-header {
              position: absolute;
              left: 0;
              right: 0;
            }
            .site-header .logo {
              display: block;
              text-align: center;
            }
            .site-header nav {
              float: none;
              text-align: center;
            }
            .site-header nav li {
              display: inline-block;
              margin-left: 10px;
              margin-right: 10px;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}