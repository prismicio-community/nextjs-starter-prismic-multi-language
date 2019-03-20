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
      <React.Fragment>
        <section className="image-gallery content-section">
          {RichText.render(this.props.slice.primary.gallery_title, linkResolver)}
          <div className="gallery">
            {this.galleryItem()}
          </div>
        </section>
        <style jsx global>{`
          .gallery {
            display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
            display: -ms-flexbox;  /* TWEENER - IE 10 */
            display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
            display: flex;
            -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-justify-content: space-between; 
            justify-content: space-between; 
          }
          .gallery-item {
            -webkit-box-flex: 0 1 48%;
            -moz-box-flex:  0 1 48%;
            -webkit-flex:  0 1 48%;
            -ms-flex:  0 1 48%;
            flex: 0 1 48%;
          }
          .gallery-link {
            margin-top: -20px;
            text-transform: uppercase;
          }
          .gallery img {
            margin-bottom: 1rem;
          }
          @media (max-width: 767px) {
            .gallery-item {
              -webkit-box-flex: 100%;
              -moz-box-flex:  100%;
              -webkit-flex:  100%;
              -ms-flex:  100%;
              flex: 100%;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}