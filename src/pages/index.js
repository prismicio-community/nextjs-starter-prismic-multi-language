import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";
import { components } from "@/slices/";
import { Layout } from "@/components/Layout";

export default function Home({ page, navigation, settings, locales }) {
  return (
    <Layout locales={locales} navigation={navigation} settings={settings}>
      <Head>
        <title>{prismic.asText(page.data.title)}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  const locales = await getLocales(page, client);

  return {
    props: {
      page,
      navigation,
      settings,
      locales,
    },
  };
}
