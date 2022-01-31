import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const InfoWithImage = ({ slice }) => {
  const featuredImage = slice.primary.featured_image
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
        <PrismicRichText field={slice.primary.section_title} />
        <PrismicRichText field={slice.primary.text} />
      </div>
    </section>
  )
}

export default InfoWithImage
