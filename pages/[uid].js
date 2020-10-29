import React from "react";
import { queryRepeatableDocuments } from '../utils/queries'
import { Client } from "../utils/prismicHelpers";

import SliceZone from '../components/SliceZone'
import Layout from '../components/Layout'


/**
 * posts component
 */
const Page = ({ doc, menu, currentLang, isMyMainLanguage }) => {
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

export async function getStaticProps({ preview = null, previewData = {}, params, locale, locales }) {
  const { ref } = previewData
  const client = Client()
  const doc = await client.getByUID('page', params.uid, ref ? { ref } : { lang: locale }) || {}
  const menu = await client.getSingle('top_menu', ref ? { ref } : { lang: locale }) || {}
  
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


export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'page')
  return {
    paths: documents.map((doc, i) => { return { params: { uid: doc.uid, }, locale: doc.lang, } }),
    fallback: false,
  }
}

export default Page





