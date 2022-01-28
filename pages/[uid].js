import React from 'react'
import { client, manageLocal } from 'prismic'
import { Layout, SliceZone } from 'components'

/**
 * posts component
 */
const Page = ({ doc, menu, lang }) => {
  if (doc?.data) {
    return (
      <Layout altLangs={doc.alternate_languages} lang={lang} menu={menu}>
        <SliceZone sliceZone={doc.data.body} />
      </Layout>
    )
  }
}

export async function getStaticProps({ params, locale, locales }) {
  const doc = await client.getByUID('page', params.uid, { lang: locale })
  const menu = await client.getSingle('top_menu', { lang: locale })

  const { currentLang, isMyMainLanguage } = manageLocal(locales, locale)

  return {
    props: {
      menu,
      doc,
      lang: {
        currentLang,
        isMyMainLanguage,
      },
    },
  }
}

export async function getStaticPaths() {
  const documents = await client.getAllByType('page')
  return {
    paths: documents.map((doc) => {
      return { params: { uid: doc.uid }, locale: doc.lang }
    }),
    fallback: false,
  }
}

export default Page
