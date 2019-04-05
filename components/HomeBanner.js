import React, { Fragment } from "react"
import { default as NextLink } from 'next/link'
import { Link, RichText } from 'prismic-reactjs'
import { linkResolver, hrefResolver } from 'prismic-configuration'

const HomeBanner = ({ banner }) => {
  let internalLink = banner.button_link.link_type == "Document";
  // Determines if the link is for an internal document or an external resource
  // so it can be handled accordingly
  return (
    <Fragment>
      <section
        className="homepage-banner"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(" +
            banner.image.url +
            ")"
        }}
      >
        <div className="banner-content container">
          <h2 className="banner-title">{RichText.asText(banner.title)}</h2>
          <p className="banner-description">
            {RichText.asText(banner.tagline)}
          </p>
          {RichText.asText(banner.button_label) !== "" ? (
            // Displays the button link only if it's been defined
            <NextLink
              as={internalLink ? linkResolver(banner.button_link) : ""}
              // No need to change how the route is shown if it's external
              href={
                internalLink
                  ? hrefResolver(banner.button_link)
                  : Link.url(banner.button_link, linkResolver)
                // We get the url if it's an external link, otherwise we get the generated internal route
              }
              passHref
            >
              {/* Handles the link client-side if it's a Prismic document, otherwise it's just a regular href */}
              <a className="banner-button">
                {RichText.asText(banner.button_label)}
              </a>
            </NextLink>
          ) : (
            ""
          )}
        </div>
      </section>
      <style jsx>{`
        .homepage-banner {
          margin: -70px 0 80px;
          padding: 10em 0 8em;
          background-position: center center;
          background-size: cover;
          color: #ffffff;
          line-height: 1.75;
          text-align: center;
        }
        .banner-content {
          text-align: center;
        }
        .banner-title,
        .banner-description {
          width: 90%;
          max-width: 490px;
          margin-left: auto;
          margin-right: auto;
        }
        .banner-title {
          color: #ffffff;
          font-size: 70px;
          font-weight: 900;
          line-height: 70px;
        }
        .banner-button {
          background: #ffffff;
          border-radius: 7px;
          color: #484d52;
          font-size: 14px;
          font-weight: 700;
          padding: 15px 40px;
        }
        .banner-button:hover {
          background: #c8c9cb;
        }
        @media (max-width: 767px) {
          .homepage-banner {
            margin: 0 0 40px;
            padding: 10em 0 6em;
          }
          .banner-title {
            font-size: 50px;
            line-height: 50px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default HomeBanner;
