import React from 'react';

const FullWidthImage = ({ slice }) => {
  const imagePosition = slice.primary.background_image_position === 'Left' ? 'left-bg' : 'right-bg'

  return (
    <section className="full-width-image auto-grid">
      <div className="main-img">
        <img
          src={slice.primary.image ? slice.primary.image.url : ''}
          alt={slice.primary.image ? slice.primary.image.alt : ''}
        />
      </div>
      <div className={`background ${imagePosition}`}>
        <img src='/images/full-width-image-background.png' alt="Background pattern" />
      </div>
    </section>
  )
};

export default FullWidthImage;
