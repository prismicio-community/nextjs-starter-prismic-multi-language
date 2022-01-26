import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { linkResolver, repoName as repositoryName } from '../prismic'
import { PrismicPreview } from '@prismicio/next'

import 'styles/main.scss'

export default function App({ Component, pageProps }) {
  return (
    <PrismicPreview repositoryName>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href} {...props}>
            <a className={props.className ? props.className : ''}>{children}</a>
          </Link>
        )}
      >
        <Component {...pageProps} />
      </PrismicProvider>
    </PrismicPreview>
  )
}
