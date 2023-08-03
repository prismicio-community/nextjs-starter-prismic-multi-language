import { SliceZone } from "@prismicio/react";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";

import { Layout } from "@/components/Layout";
import { components } from "@/slices";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params: { lang } }) {
  const client = createClient();
  const page = await client.getByUID("page", "home", { lang });

  return {
    title: page.data.title,
  };
}

export default async function Page({ params: { lang } }) {
  const client = createClient();

  const page = await client.getByUID("page", "home", { lang });
  const navigation = await client.getSingle("navigation", { lang });
  const settings = await client.getSingle("settings", { lang });

  const locales = await getLocales(page, client);

  return (
    <Layout locales={locales} navigation={navigation} settings={settings}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}
