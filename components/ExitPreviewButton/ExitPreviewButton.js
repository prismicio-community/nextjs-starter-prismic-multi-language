import React from 'react'
import { withRouter } from 'next/router'
import Button from './../Button'
import styles from './ExitPreviewButton.module.scss'

function ExitPreviewButton({ router }) {
  const previewExitUrl = '/api/exit-preview'
  const linkUrl = router.asPath ? `${previewExitUrl}?currentUrl=/docs${router.asPath}` : previewExitUrl

  return (
    <Button
      staticLink={linkUrl}
      className={styles.exitPreviewButton}
      secondary
    >
      Exit Preview
    </Button>
  )
}

export default withRouter(ExitPreviewButton)
