import React from 'react';
import {
  EmailSignup,
  FullWidthImage,
  HeadlineWithButton,
  InfoWithImage,
  TextInfo,
} from './slices';

const SliceZone = ({ sliceZone }) => {
  return (
    <div className="container">
      {sliceZone.map((slice, index) => {
        switch (slice.slice_type) {
          case 'text_info':
            return <TextInfo slice={slice} key={`slice-${index}`} />;
          case 'info_with_image':
            return <InfoWithImage slice={slice} key={`slice-${index}`} />;
          case 'full_width_image':
            return <FullWidthImage slice={slice} key={`slice-${index}`} />;
          case 'headline_with_button':
            return <HeadlineWithButton slice={slice} key={`slice-${index}`} />;
          case 'email_signup':
            return <EmailSignup slice={slice} key={`slice-${index}`} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default SliceZone;
