import { createPrismicClient, linkResolver } from 'prismic'
import { setPreviewData, redirectToPreviewURL } from '@prismicio/next'

export default async (req, res) => {
  const client = createPrismicClient({ req })
  await setPreviewData({ req, res })
  const previewURL = await client.resolvePreviewURL({
    linkResolver,
    defaultURL: '/',
  })
  res.redirect(previewURL)

  // TODO: prismicio/next's redirect isn't working

  // await redirectToPreviewURL({ req, res, client, linkResolver })
}
