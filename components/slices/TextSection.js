import React, { Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from 'prismic-configuration';

const TextSection = ({ slice }) => {
  const sectionClass = slice.slice_label ? 'text-section-' + slice.slice_label : 'text-section-1col';
  return (
    <Fragment>
      <section className={`content-section ${sectionClass}`}>
        <div>
          {RichText.render(slice.primary.rich_text, linkResolver)}
        </div>
      </section>
      <style jsx>{`
        .text-section-2col {
          -webkit-column-count: 2; /* Chrome, Safari, Opera */
          -moz-column-count: 2; /* Firefox */
          column-count: 2;
          -webkit-column-gap: 40px; /* Chrome, Safari, Opera */
          -moz-column-gap: 40px; /* Firefox */
          column-gap: 40px;
        }
        .text-section-1col img,
        .text-section-2col img,
        .gallery img {
          margin-bottom: 1rem;
        }
        .text-section-1col p:last-child,
        .text-section-2col p:last-child {
          margin-bottom: 0;
        }
        @media (max-width: 767px) {
          .text-section-2col {
            -webkit-column-count: 1; /* Chrome, Safari, Opera */
            -moz-column-count: 1; /* Firefox */
            column-count: 1;
            -webkit-column-gap: 40px; /* Chrome, Safari, Opera */
            -moz-column-gap: 40px; /* Firefox */
            column-gap: 40px;
          }
        }
      `}</style>
    </Fragment>
  );
}

export default TextSection;