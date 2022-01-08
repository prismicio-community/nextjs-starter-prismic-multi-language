import React from 'react'
import { Client, manageLocal } from 'utils/prismicHelpers'
import { homepageToolbarDocs } from 'utils/prismicToolbarQueries'
import useUpdatePreviewRef from 'utils/hooks/useUpdatePreviewRef'
import useUpdateToolbarDocs from 'utils/hooks/useUpdateToolbarDocs'
import { Layout, SliceZone } from 'components'

/**
 * Homepage component
 */
const Homepage = ({ doc, menu, lang, preview }) => {
  if (doc && doc.data) {
    useUpdatePreviewRef(preview, doc.id)
    useUpdateToolbarDocs(homepageToolbarDocs(preview.activeRef, doc.lang), [
      doc,
    ])

    return (
      <Layout
        altLangs={doc.alternate_languages}
        lang={lang}
        menu={menu}
        isPreview={preview.isActive}
      >
        <SliceZone sliceZone={doc.data.body} />
      </Layout>
    )
  }
}

export async function getStaticProps({
  preview,
  previewData,
  locale,
  locales,
}) {
  const ref = previewData ? previewData.ref : null
  const isPreview = preview || false
  const doc =
    (await Client().getSingle(
      'homepage',
      ref ? { ref, lang: locale } : { lang: locale }
    )) || {}
  const menu =
    (await Client().getSingle(
      'top_menu',
      ref ? { ref, lang: locale } : { lang: locale }
    )) || {}

  const { currentLang, isMyMainLanguage } = manageLocal(locales, locale)

  return {
    props: {
      menu,
      doc,
      preview: {
        isActive: isPreview,
        activeRef: ref,
      },
      lang: {
        currentLang,
        isMyMainLanguage,
      },
    },
  }
}

export default Homepage
