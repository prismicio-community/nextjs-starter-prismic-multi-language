import React from 'react';
import { Link, RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

// WARNING! HANDLE INTERNAL LINKS WITH CLIENT SIDE ROUTING

export default class ImageGallery extends React.Component {
  galleryItem() {
    return this.props.slice.items.map((item, index) => {
      return (
        <div className="gallery-item" key={index}>
          <img src={item.image.url} alt={item.image.alt} />
          {RichText.render(item.image_description, linkResolver)}
          {RichText.asText(item.link_label) !== "" ? (
            <p className="gallery-link">
              <a href={Link.url(item.link, linkResolver)}>
                {RichText.asText(item.link_label)}
              </a>
            </p>
          ) : '' }
        </div>
      );
    });
  }

  render() {
    return (
      <section className="image-gallery content-section">
        {RichText.render(this.props.slice.primary.gallery_title, linkResolver)}
        <div className="gallery">
          {this.galleryItem()}
        </div>
      </section>
    );
  }
}