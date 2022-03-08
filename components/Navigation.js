import { PrismicLink, PrismicText } from "@prismicio/react";

export const Navigation = ({ menu }) => {
  if (!menu?.data.menu_links) {
    return null;
  }

  return (
    <ul className="-ml-4 -mt-4 flex flex-wrap md:-ml-6 md:-mt-6">
      {menu.data.menu_links.map((menuLink) => {
        return (
          <li key={menuLink.label} className="pl-4 pt-4 md:pl-6 md:pt-6">
            <PrismicLink field={menuLink.link} className="text-lg font-bold">
              <PrismicText field={menuLink.label} />
            </PrismicLink>
          </li>
        );
      })}
    </ul>
  );
};
