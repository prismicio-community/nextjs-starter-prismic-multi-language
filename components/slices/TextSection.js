import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../prismic-configuration'

export default class TextSection extends React.Component {
  render() {
    const sectionClass = this.props.slice.slice_label ? 'text-section-' + this.props.slice.slice_label : 'text-section-1col'
    return (
      <section className={`content-section ${sectionClass}`}>
        <div>
          {RichText.render(this.props.slice.primary.rich_text, linkResolver)}
        </div>
      </section>
    );
  }
}