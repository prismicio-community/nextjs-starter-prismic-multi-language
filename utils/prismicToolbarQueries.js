import { client } from 'prismic'

export const pageToolbarDocs =
  (uid, ref = null, lang) =>
  async () => {
    const page = await client.getByUID('page', uid, {
      ref,
      lang,
      fetch: 'page.display_title',
    })
    const menu = await client.getSingle('top_menu', {
      ref,
      lang,
      fetch: 'top_menu.display_title',
    })

    return {
      page,
      menu,
    }
  }

export const homepageToolbarDocs =
  (ref = null, lang) =>
  async () => {
    const homepage = await client.getSingle('homepage', {
      ref,
      lang,
      fetch: 'homepage.display_title',
    })
    const menu = await client.getSingle('top_menu', {
      ref,
      lang,
      fetch: 'top_menu.display_title',
    })

    return {
      homepage,
      menu,
    }
  }
