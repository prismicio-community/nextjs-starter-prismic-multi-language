import React from 'react';
import { RichText } from 'prismic-reactjs'
import { linkResolver, hrefResolver } from 'prismic-configuration'

const EmailSignup = ({ slice }) => (
  <section className="email-signup">
    <div className="description">
      {RichText.render(slice.primary.section_title || [])}
      {RichText.render(slice.primary.description || [])}
      {/* {RichText.render(slice.primary.description || [], linkResolver, hrefResolver)} */}
    </div>
    <div className="form">
      {RichText.render(slice.primary.input_label || [])}
      <input
        className="email-input"
        type="text"
        name="FirstName"
        placeholder={RichText.asText(slice.primary.input_placeholder || [])}
      />
      <input
        className="btn"
        type="submit"
        value={RichText.asText(slice.primary.button_text || [])}
      />
    </div>
  </section>
);

export default EmailSignup;