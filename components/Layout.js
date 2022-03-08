import Head from "next/head";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children, altLangs, menu }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Multi-language site</title>
      </Head>
      <Header altLangs={altLangs} menu={menu} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
