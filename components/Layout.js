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
      menu={menu}
    />
    <main>{children}</main>
    {isPreview ? <ExitPreviewButton /> : null}
    <Footer />
  </>
);

export default Layout;
