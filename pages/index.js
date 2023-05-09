import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { getLanguages } from "../lib/getLanguages";
import { createClient } from "../prismicio";
import { components } from "../slices/";
import { Layout } from "../components/Layout";

const Index = ({ page, navigation, settings, languages }) => {
  return (
    <Layout languages={languages} navigation={navigation} settings={settings}>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  const languages = await getLanguages(page, client);

  return {
    props: {
      page,
      navigation,
      settings,
      languages,
    },
  };
}
