import { default as NextLink } from 'next/link';
import { RichText } from 'prismic-reactjs';
import { hrefResolver } from 'prismic-configuration';

const MenuLinks = ({ links = [] }) => {
  if (links) {
    return links.map((menuLink) => {
      return (
        <li className="language-switcher" key={menuLink.link.id}>
          <NextLink
            href={hrefResolver(menuLink.link)}
            passHref
          >
            <a>{RichText.asText(menuLink.label)}</a>
          </NextLink>
        </li>
      );
    });
  }
};

const Navigation = ({ menu }) =>
  menu ? <MenuLinks links={menu.data.menu_links} /> : null;

export default Navigation;
