import React from 'react';
import { RichText } from 'prismic-reactjs';

const TextInfo = ({ slice }) => (
  <section className="text-info">
    <div className="left-column">
      <img src="/images/top-icon.png" alt="Checkbox icon" />
      {RichText.render(slice.primary.section_title || [])}
      {RichText.render(slice.primary.left_column_text || [])}
    </div>
    <div className="right-column">
      {RichText.render(slice.primary.right_column_text || [])}
    </div>
  </section>
);

export default TextInfo;
