import React from 'react';
import { RichText } from 'prismic-reactjs';

const HeadlineWithButton = ({ slice }) => (
  <section className="headline-with-button">
    <div>
      {RichText.render(slice.primary.headline || [])}
      {RichText.render(slice.primary.description || [])}
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
);

export default HeadlineWithButton;
