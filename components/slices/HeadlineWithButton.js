import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver, hrefResolver } from 'prismic-configuration'

const HeadlineWithButton = ({ slice }) => (
  <section className="headline-with-button">
    <div>
      {RichText.render(slice.primary.headline || [])}
      {RichText.render(slice.primary.description || [], linkResolver, hrefResolver)}
    </div>
    <div className="button">
      <img
        src={slice.primary.button ? slice.primary.button.url : ''}
        alt={slice.primary.button ? slice.primary.button.alt : ''}
      />
    </div>
  </section>
);

export default HeadlineWithButton;
