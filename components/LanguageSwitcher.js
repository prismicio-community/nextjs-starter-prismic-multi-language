import { PrismicLink } from '@prismicio/react'
import { linkResolver } from './../prismic-configuration'

const AltLangs = ({ altLangs = [] }) =>
  altLangs.map((altLang) => {
    return (
      <li className="language-switcher" key={altLang.id}>
        <PrismicLink
          locale={altLang.lang}
          href={linkResolver(altLang)}
          passHref
          className={`flag-icon-${altLang.lang.slice(-2)}`}
        >
          .
        </PrismicLink>
      </li>
    )
  })

const LanguageSwitcher = ({ altLangs }) => <AltLangs altLangs={altLangs} />

export default LanguageSwitcher
