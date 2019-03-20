import React from 'react';
import {RichText} from 'prismic-reactjs';

export default class Quote extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="content-section quote">
          <blockquote>
            {RichText.asText(this.props.slice.primary.quote_text)}
          </blockquote>
        </section>
        <style jsx>{`
          .quote blockquote {
            display: block;
            font-family: 'Lora', Serif; 
            font-size: 36px;
            font-style: italic;
            font-weight: normal; 
            color: #484D52; 
            letter-spacing : 1.14;
            line-height: 1.5em;
            quotes: "\\201C""\\201D""\\2018""\\2019";
            text-align: center;
          }
          .quote blockquote:before,
          .quote blockquote:after {
            color: #e9e9e9;
            content: open-quote;
            font-family: 'Lora', Serif;
            font-size: 2.5em;
            font-weight: 900;
            line-height: 0.1em;
            margin-left: 10px;
            margin-right: 10px;
            vertical-align: -0.3em;
          }
          .quote blockquote:after {
            content: close-quote;
          }
          @media (max-width: 767px) {
            .quote {
              font-size: 20px;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}