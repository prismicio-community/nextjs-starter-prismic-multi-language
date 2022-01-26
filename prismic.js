import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'

export const repoName = 'multilanguage-examples-sam'
export const accessToken = ''

const apiEndpoint = prismic.getEndpoint(repoName)

export const client = prismic.createClient(apiEndpoint, { accessToken })

export function linkResolver(doc) {
  if (doc.type === 'page') {
    return `/${doc.lang}/${doc.uid}`
  }
  if (doc.type === 'homepage') {
    return `/${doc.lang}`
  }
  return '/'
}

export const createPrismicClient = (config) => {
  enableAutoPreviews({
    client,
    context: config.context,
    req: config.req,
  })

  return client
}

export const manageLocal = (locales, locale) => {
  // Get languages from API response and set master language as default
  const mainLanguage = locales[0]

  // Set current language based on the locale
  const currentLang = locale !== undefined ? locale : mainLanguage
  const isMyMainLanguage = mainLanguage === currentLang

  return { mainLanguage, currentLang, isMyMainLanguage }
}
