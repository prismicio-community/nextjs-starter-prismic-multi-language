import React, { Fragment } from 'react'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'prismic-configuration'

const MenuLinks = ({ menu }) => (
  menu.data.menu_links.map((menuLink) => {
    return (
      <li key={menuLink.link.id}>
        <Link
          as={linkResolver(menuLink.link)}
          href={`/page?uid=${menuLink.link.uid}`}
          passHref
          prefetch
        >
          <a>{RichText.asText(menuLink.label)}</a>
        </Link>
      </li>
    );
  })
);

const Header = (menu) => (
  <Fragment>
    <header className="site-header">
      <Link href="./" prefetch>
        <a><div className="logo">Example Site</div></a>
      </Link>
      <nav>
        <ul>
          <MenuLinks {...menu}/>
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
  </Fragment>
);

export default Header;