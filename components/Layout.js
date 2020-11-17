import React from 'react';
import Head from 'next/head';
import { prismicRepoName } from 'utils/prismicHelpers';
import Header from './Header';
import Footer from './Footer';
import ExitPreviewButton from './ExitPreviewButton'

const Layout = ({
  isPreview,
  children,
  altLangs,
  lang,
  menu,
}) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,700,900,400italic,700italic"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/css/flag-icon.min.css"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.png" type="image/png" />
      <title>Multi-language site</title>
      <script
        async
        defer
        src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${prismicRepoName}`}
      />
    </Head>
    <Header
      altLangs={altLangs}
      currentLang={lang.currentLang}
      isMyMainLanguage={lang.isMyMainLanguage}
      menu={menu}
    />
    <main>{children}</main>
    {isPreview ? <ExitPreviewButton /> : null}
    <Footer />
  </>
);

export default Layout;
