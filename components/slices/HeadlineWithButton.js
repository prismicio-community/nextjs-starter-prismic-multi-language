import React from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from 'prismic-configuration'
import { customLink } from '../../utils/prismicHelpers'

const HeadlineWithButton = ({ slice }) => {
  return (
    <section className="headline-with-button">
      <div>
        {RichText.render(slice.primary.headline || [])} 
        {RichText.render(slice.primary.description || [])} 

        {/* {RichText.render(slice.primary.description || [], linkResolver, hrefResolver)} */}

        {/* <RichText
          render={slice.primary.description}
          linkResolver={linkResolver}
          serializeHyperlink={customLink}
        /> */}
      </div>
      <div className="button">
        <img
          src={slice.primary.button ? slice.primary.button.url : ""}
          alt={slice.primary.button ? slice.primary.button.alt : ""}
        />
      </div>
    </section>
  );
};

export default HeadlineWithButton;
