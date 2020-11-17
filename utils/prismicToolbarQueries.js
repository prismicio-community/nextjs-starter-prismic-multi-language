import { Client } from 'utils/prismicHelpers';

export const pageToolbarDocs = (uid, ref = null, lang) => (async () => {
  const page = await Client().getByUID('page', uid, {ref, lang, fetch: 'page.display_title'})
  const menu = await Client().getSingle('top_menu', { ref, lang, fetch: 'top_menu.display_title'}) 

  return {
    page,
    menu
  }
})


export const homepageToolbarDocs = (ref = null, lang) => (async () => {
  const homepage = await Client().getSingle('homepage', { ref, lang, fetch: 'homepage.display_title' }) 
  const menu = await Client().getSingle('top_menu', { ref, lang, fetch: 'top_menu.display_title' }) 

  return {
    homepage,
    menu
  }
})
