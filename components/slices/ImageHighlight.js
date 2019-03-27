import React, { Fragment } from 'react';
import { default as NextLink } from 'next/link';
import { Link , RichText } from 'prismic-reactjs';
import { linkResolver } from 'prismic-configuration';

const ImageHighlight = ({ slice }) => {
  let internalLink = slice.primary.link.link_type == 'Document';
  return (
    <Fragment>
      <section className="highlight content-section">
        <div className="highlight-left">
          {RichText.render(slice.primary.title, linkResolver)}
          {RichText.render(slice.primary.headline, linkResolver)}
          {RichText.asText(slice.primary.link_label) !== "" ? (
            <p>
              <NextLink
                as={ internalLink ?
                  linkResolver(slice.primary.link)
                  : ''} 
                href={ internalLink ?
                    `/page?uid=${slice.primary.link.uid}`
                  : Link.url(slice.primary.link, linkResolver)} 
                passHref
              >
                <a>{RichText.asText(slice.primary.link_label)}</a>
              </NextLink>
            </p>
          ) : '' }
        </div>
        <div className="highlight-right">
          <img src={slice.primary.featured_image.url} alt={slice.primary.featured_image.alt} />
        </div>
      </section>
      <style jsx>{`
        .highlight {
          position: relative;
          overflow: auto;
        }
        .highlight-left {
          width: 43%;
          float: left;
        }
        .highlight-right {
          width: 48%;
          float: right;
        }
        @media (max-width: 767px) {
          .highlight-left,
          .highlight-right {
            width: 100%;
            float: none;
          }
        }
      `}</style>
    </Fragment>
  );
}

export default ImageHighlight;