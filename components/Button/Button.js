import React from 'react'
import DocLink from 'components/DocLink'
import styles from './Button.module.scss'

export default function Button({ children, className, link, staticLink, secondary }) {
  const secondaryClass = secondary ? styles.secondary : null

  if (link) {
    return (
      <DocLink
        link={link}
        linkClass={`${styles.button} ${className} ${secondaryClass}`.trim()}
      >
        {children}
      </DocLink>
    )
  }

  if (staticLink) {
    return (
      <a
        href={staticLink}
        className={`${styles.button} ${className} ${secondaryClass}`.trim()}
      >
        {children}
      </a>
    )
  }

  return null
}
