import React from 'react';

const FullWidthImage = ({ slice }) => (
  <section className="full-width-image content-section">
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
  </section>
);

export default FullWidthImage;