import React from 'react';

const FullWidthImage = ({ slice }) => {
  const imagePosition = slice.primary.background_image_position === 'Left' ? 'left-bg' : 'right-bg';
  return (
    <section className="full-width-image auto-grid">
      <div className="main-img">
        {slice.primary.image ? (
          <img
            src={slice.primary.image.url}
            alt={slice.primary.image.alt || ''}
          />
        ) : (
          <img alt="" />
        )}
      </div>
      <div className={`background ${imagePosition}`}>
        <img
          src="/images/full-width-image-background.png"
          alt="Background pattern"
        />
      </div>
    </section>
  );
};

export default FullWidthImage;
