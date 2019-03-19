import React from 'react';
import {RichText} from 'prismic-reactjs';

export default class Quote extends React.Component {
  render() {
    return (
      <section className="content-section quote">
        <blockquote>
          {RichText.asText(this.props.slice.primary.quote_text)}
        </blockquote>
      </section>
    );
  }
}