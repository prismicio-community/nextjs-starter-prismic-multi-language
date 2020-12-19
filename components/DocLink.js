import React from 'react'
import Link from 'next/link'
import { Link as PrismicLink } from 'prismic-reactjs'
import { linkResolver, hrefResolver } from 'prismic-configuration';

const isPrismicDoc = (maybeLink) => (
  (
    maybeLink
    && ![maybeLink.link_type, maybeLink._linkType, maybeLink.linkType].some(
      (e) => e && ['Document', 'Link.Document', 'Link.document'].includes(e),
    )
    && maybeLink.id && maybeLink.type
  )
)

export default function DocLink({ children, link, linkClass, onClick, ariaLabel }) {
  if (link) {
    const linkUrl = isPrismicDoc(link)
      ? linkResolver(link)
      : PrismicLink.url(link, linkResolver)

    if (!linkUrl) {
      return (
        <a aria-label={ariaLabel} className={linkClass}>{children}</a>
      )
    }

    if (linkUrl.indexOf('http') === 0 || linkUrl.indexOf('https') === 0 || linkUrl.indexOf('mailto') === 0) {
      const target = link.target && link.target === '_blank' ? '_blank' : null
      const rel = target ? 'noreferrer noopener' : null

      return (
        <a
          aria-label={ariaLabel}
          className={linkClass}
          href={linkUrl}
          target={target}
          rel={rel}
        >
          {children}
        </a>
      )
    }

    const hrefUrl = isPrismicDoc(link)
      ? hrefResolver(link)
      : PrismicLink.url(link, hrefResolver)

    return (
      <Link
        href={hrefUrl}
        passHref
      >
        <a
          aria-label={ariaLabel}
          className={linkClass}
          onClick={onClick}
          onKeyPress={onClick}
          role="link"
          tabIndex="0"
        >
          {children}
        </a>
      </Link>
    )
  }
  return <a aria-label={ariaLabel} className={linkClass}>{children}</a>
}
