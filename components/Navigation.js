import { PrismicLink, PrismicRichText } from '@prismicio/react'

const MenuLinks = ({ links = [] }) => {
  if (links) {
    return links.map((menuLink) => {
      return (
        <li key={menuLink.link.id}>
          <PrismicLink field={menuLink.link}>
            <PrismicRichText field={menuLink.label} />
          </PrismicLink>
        </li>
      )
    })
  }
}

const Navigation = ({ menu }) =>
  menu ? <MenuLinks links={menu.data.menu_links} /> : null

export default Navigation
