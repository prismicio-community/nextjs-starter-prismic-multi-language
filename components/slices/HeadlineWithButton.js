import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const HeadlineWithButton = ({ slice }) => (
  <section className="headline-with-button">
    <div>
      <PrismicRichText field={slice.primary.headline} />
      <PrismicRichText field={slice.primary.description} />
    </div>
    <div className="button">
      {slice.primary.button ? (
        <img
          src={slice.primary.button.url}
          alt={slice.primary.button.alt || ''}
        />
      ) : (
        <img alt="" />
      )}
    </div>
  </section>
)

export default HeadlineWithButton
