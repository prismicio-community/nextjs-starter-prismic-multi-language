import React from "react";
import { useRouter } from "next/router";

// Project components & functions
import { Client } from "../utils/prismicHelpers";
import { homePageQuery } from "./../utils/queries";
import Layout from "../components/Layout";
import { SliceZone } from "../components";

/**
 * Homepage component
 */

const Homepage = ({ doc, menu, currentLang, isMyMainLanguage, locale }) => {
  const router = useRouter();

  if (doc && doc.data) {
    return (
      <Layout
        altLangs={doc.alternate_languages}
        currentLang={currentLang}
        isMyMainLanguage={isMyMainLanguage}
        menu={menu}
      >
        <SliceZone sliceZone={doc.data.body} />
      </Layout>
    );
  }

  // Message when repository has not been setup yet
  return <div>no document found</div>;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;
  // const { locale } = context.query;
  
  const locale = "fr-fr";

  let languages = ["en-us", "fr-fr"];

  // Setting Master language as default language option
  const mainLanguage = languages[0].id;

  // Sets current language based on the locale
  const currentLang = locale !== undefined ? locale : mainLanguage;
  const isMyMainLanguage = mainLanguage === currentLang;

  // Queries both the homepage and navigation menu documents
  const client = Client();
  const doc =
    (await client.getSingle(
      "homepage",
      { lang: currentLang },
      ref ? { ref } : null
    )) || {};
  const menu =
    (await client.getSingle(
      "top_menu",
      { lang: currentLang },
      ref ? { ref } : null
    )) || {};

  return {
    props: {
      doc,
      menu,
      currentLang,
      isMyMainLanguage,
      locale,
      preview,
    },
  };
}

// Sets homepage dynamic route

export async function getStaticPaths() {
  const documents = await homePageQuery((doc) => doc.type === "homepage");
  return {
    paths: documents.map((doc) => `/${doc.lang}`),
    fallback: false,
  };
}

export default Homepage;