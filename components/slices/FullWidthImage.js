import React from 'react';

export default class FullWidthImage extends React.Component {
  render() {
    return (
      <section className="full-width-image content-section">
        <img src={this.props.slice.primary.image.url} alt={this.props.slice.primary.image.alt} />
      </section>
    );
  }
}