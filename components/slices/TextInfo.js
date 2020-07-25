import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver, hrefResolver } from 'prismic-configuration'

const TextInfo = ({ slice }) => (
  <section className="text-info">
    <div className="left-column">
      <img src='/static/images/top-icon.png' alt="Checkbox icon" />
      {RichText.render(slice.primary.section_title || [])}
      {RichText.render(slice.primary.left_column_text || [])}
      {/* {RichText.render(slice.primary.left_column_text || [], linkResolver, hrefResolver)} */}

    </div>
    <div className="right-column">
      {RichText.render(slice.primary.right_column_text || [])}
      {/* {RichText.render(slice.primary.right_column_text || [], linkResolver, hrefResolver)} */}
    </div>
  </section>
);

export default TextInfo;
