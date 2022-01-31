import React from 'react'
import { client, manageLocal } from 'prismic.config'
import { Layout } from 'components'
import { SliceZone } from '@prismicio/react'
import {
  EmailSignup,
  FullWidthImage,
  HeadlineWithButton,
  InfoWithImage,
  TextInfo,
} from 'slices'

const components = {
  email_signup: EmailSignup,
  full_width_image: FullWidthImage,
  headline_with_button: HeadlineWithButton,
  info_with_image: InfoWithImage,
  text_info: TextInfo,
}

/**
 * posts component
 */
const Page = ({ doc, menu, lang }) => {
  if (doc?.data) {
    return (
      <Layout altLangs={doc.alternate_languages} lang={lang} menu={menu}>
        <SliceZone slices={doc.data.body} components={components} />
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
