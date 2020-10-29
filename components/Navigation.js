import { default as NextLink } from "next/link";
import { RichText } from "prismic-reactjs";
import { linkResolver, hrefResolver } from "prismic-configuration";

const MenuLinks = ({ links = [] }) => {
  if (links) {
    return links.map((menuLink) => {
      return (
        <li className="language-switcher" key={menuLink.link.id}>
          <NextLink
            as={linkResolver(menuLink.link)}
            href={hrefResolver(menuLink.link)}
            passHref
          >
            <a>{RichText.asText(menuLink.label)}</a>
          </NextLink>
        </li>
      );
    });
  } else {
    null;
  }
};

const Navigation = ({ menu }) => menu ? <MenuLinks links={menu.data.menu_links} /> : null;

export default Navigation;
