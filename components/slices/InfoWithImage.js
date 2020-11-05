import React from 'react';
import { RichText } from 'prismic-reactjs';

const InfoWithImage = ({ slice }) => {
  const featuredImage = slice.primary.featured_image;
  return (
    <section className="info-with-image">
      <div className="featured-image">
        {featuredImage ? (
          <picture>
            <source
              srcSet={featuredImage.mobile.url}
              alt={featuredImage.mobile.alt || ''}
              media="(max-width: 500px)"
            />
            <source
              srcSet={featuredImage.tablet.url}
              alt={featuredImage.tablet.alt || ''}
              media="(max-width: 1100px)"
            />
            <img src={featuredImage.url} alt={featuredImage.alt || ''} />
          </picture>
        ) : (
          <img alt="" />
        )}
      </div>
      <div className="text-content">
        <img src="/images/top-icon.png" alt="Checkbox icon" />
        {RichText.render(slice.primary.section_title || [])}
        {RichText.render(slice.primary.text || [])}
      </div>
    </section>
  );
};

export default InfoWithImage;
