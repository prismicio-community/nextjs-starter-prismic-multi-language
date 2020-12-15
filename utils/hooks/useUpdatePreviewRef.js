import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { prismicRepoName } from 'utils/prismicHelpers';

export default function useUpdatePreviewRef(preview, documentId) {
  const router = useRouter()

  useEffect(() => {
    async function updatePreview() {
    if (preview.isActive) {
      const rawPreviewCookie = Cookies.get('io.prismic.preview')
      if (rawPreviewCookie) {
        const previewCookie = JSON.parse(rawPreviewCookie)
        const previewCookieObject = previewCookie[`${prismicRepoName}.prismic.io`]
        const previewCookieRef = previewCookieObject && previewCookieObject.preview
          ? previewCookieObject.preview
          : null

        if (previewCookieRef && preview.activeRef !== previewCookieRef) {
          return router.push(`/api/preview?token=${previewCookieRef}&documentId=${documentId}`)
        }
      } else {
        return router.push('/api/exit-preview')
      }
    }
  }
  updatePreview();
  }, [])
}