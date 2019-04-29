import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'
import { linkResolver, hrefResolver } from 'prismic-configuration'

const MenuLinks = ({ links = [] }) => (
  links.map((menuLink) => {
    return (
      <li key={menuLink.link.id}>
        <NextLink
          as={linkResolver(menuLink.link)}
          href={hrefResolver(menuLink.link)}
          passHref
          prefetch
        >
          <a>{RichText.asText(menuLink.label)}</a>
        </NextLink>
      </li>
    );
  })
);

const Navigation = ({ menu }) => (
  <MenuLinks links={menu.data.menu_links} />
);

export default Navigation;