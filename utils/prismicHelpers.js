/* eslint-disable max-len */
import * as prismic from '@prismicio/client'
import { apiEndpoint, accessToken } from '../prismic-configuration'

// Helper function to get the Prismic repository name from the URL
export const [, prismicRepoName] = apiEndpoint.match(
  /https?:\/\/([^.]+)?\.(cdn\.)?.+/
)

// Client method to query documents from the Prismic repo

export const Client = (req = null) =>
  prismic.createClient(apiEndpoint, createClientOptions(req, accessToken))

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const manageLocal = (Locales, locale) => {
  // Languages from API response
  // // Setting Master language as default language option
  const mainLanguage = Locales[0]
  // // Sets current language based on the locale
  const currentLang = locale !== undefined ? locale : mainLanguage
  const isMyMainLanguage = mainLanguage === currentLang

  return { mainLanguage, currentLang, isMyMainLanguage }
}
