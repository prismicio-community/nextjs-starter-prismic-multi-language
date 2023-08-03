import { SliceZone } from "@prismicio/react";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";

import { Layout } from "@/components/Layout";
import { components } from "@/slices";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client.getByUID("page", params.uid, { lang: params.lang });

  return {
    title: page.data.title,
  };
}

export default async function Page({ params }) {
  const client = createClient();

  const page = await client.getByUID("page", params.uid, { lang: params.lang });
  const navigation = await client.getSingle("navigation", {
    lang: params.lang,
  });
  const settings = await client.getSingle("settings", { lang: params.lang });

  const locales = await getLocales(page, client);

  return (
    <Layout locales={locales} navigation={navigation} settings={settings}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: "*" });

  return pages.map((page) => {
    return {
      uid: page.uid,
      lang: page.lang,
    };
  });
}
