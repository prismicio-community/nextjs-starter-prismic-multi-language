import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import clsx from "clsx";

import { repositoryName } from "@/prismicio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(inter.className)}>
      <body className="overflow-x-hidden antialiased">
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
              . Remove this bar in <code>app/layout.js</code>.
            </p>
          </div>
        )}
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
