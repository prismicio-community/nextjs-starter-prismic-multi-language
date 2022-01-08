import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const EmailSignup = ({ slice }) => (
  <section className="email-signup">
    <div className="description">
      <PrismicRichText field={slice.primary.section_title} />
      <PrismicRichText field={slice.primary.description} />
    </div>
    <div className="form">
      <PrismicRichText field={slice.primary.input_label} />
      <input
        className="email-input"
        type="text"
        name="FirstName"
        placeholder={slice.primary.input_placeholder}
      />
      <input className="btn" type="submit" value={slice.primary.button_text} />
    </div>
  </section>
)

export default EmailSignup
