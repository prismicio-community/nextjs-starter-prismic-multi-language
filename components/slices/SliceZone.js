import React from 'react';
import TextSection from './TextSection';
import Quote from './Quote';
import FullWidthImage from './FullWidthImage';
import ImageGallery from './ImageGallery';
import ImageHighlight from './ImageHighlight';

export default class SliceZone extends React.Component {
  render() {
    return this.props.sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ("text_section"):
          return <TextSection slice={slice} key={'slice-' + index} />
        case ("quote"):
          return <Quote slice={slice} key={'slice-' + index} />
        case ("full_width_image"):
          return <FullWidthImage slice={slice} key={'slice-' + index} />
        case ("image_gallery"):
          return <ImageGallery slice={slice} key={'slice-' + index} />
        case ("image_highlight"):
          return <ImageHighlight slice={slice} key={'slice-' + index} />
        default:
          return null;
      }
    })
  }
}
