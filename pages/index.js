import React from "react";
import { Client } from "./../utils/prismicHelpers";

import SliceZone from './../components/SliceZone'
import Layout from '../components/Layout'

/**
 * Homepage component
 */
const Homepage = ({ doc, menu, currentLang, isMyMainLanguage }) => {
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
  return null;
};


export async function getStaticProps({ params, preview = null, previewData = {}, locale, locales }) {
  const { ref } = previewData
  const client = Client()
  const doc = await client.getSingle('homepage', ref ? { ref } : { lang: locale }) || {}
  const menu = await client.getSingle('top_menu', ref ? { ref } : { lang: locale }) || {}
  
  // Languages from API response
  // // Setting Master language as default language option
  const mainLanguage = locales[0];
  // // Sets current language based on the locale
  const currentLang = locale !== undefined ? locale : mainLanguage;
  const isMyMainLanguage = mainLanguage === currentLang;

  return {
    props: {
      preview,
      menu,
      doc,
      locales,
      mainLanguage,
      currentLang,
      isMyMainLanguage
    }
  }
}; 

export default Homepage