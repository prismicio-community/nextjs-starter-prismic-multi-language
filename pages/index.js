import React from 'react'
import { client, manageLocal } from 'prismic'
import { Layout, SliceZone } from 'components'

/**
 * Homepage component
 */
const Homepage = ({ doc, menu, lang }) => {
  if (doc && doc.data) {
    return (
      <Layout altLangs={doc.alternate_languages} lang={lang} menu={menu}>
        <SliceZone sliceZone={doc.data.body} />
      </Layout>
    )
  }
}

export async function getStaticProps({ locale, locales }) {
  const doc = await client.getSingle('homepage', { lang: locale })
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

export default Homepage
