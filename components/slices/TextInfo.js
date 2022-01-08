import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const TextInfo = ({ slice }) => (
  <section className="text-info">
    <div className="left-column">
      <img src="/images/top-icon.png" alt="Checkbox icon" />
      <PrismicRichText field={slice.primary.section_title} />
      <PrismicRichText field={slice.primary.left_column_text} />
    </div>
    <div className="right-column">
      <PrismicRichText field={slice.primary.right_column_text} />
    </div>
  </section>
)

export default TextInfo
