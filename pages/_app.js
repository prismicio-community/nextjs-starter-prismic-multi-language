import Link from "next/link";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName, linkResolver } from "../prismicio";

import "../styles/globals.css";

const richTextComponents = {
  paragraph: ({ children }) => <p className="mb-7 last:mb-0">{children}</p>,
  oList: ({ children }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
};

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={Link}
      linkResolver={linkResolver}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
        {/* TODO: Remove the following element once you have read the documentation. */}
        {process.env.NODE_ENV === "development" && (
          <div
            style={{
              background: "#5163ba",
              padding: "1rem",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "#fff",
            }}
          >
            <p>
              <strong>👋 Welcome to your new website!</strong> To customize the
              code and content of this site,{" "}
              <a
                href="https://github.com/prismicio-community/nextjs-starter-prismic-multi-language/tree/master/docs"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "underline" }}
              >
                see the documentation
              </a>
              . Remove this bar in <code>pages/_app.js</code>.
            </p>
          </div>
        )}
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
