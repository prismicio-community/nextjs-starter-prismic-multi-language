import Head from 'next/head'
import { apiEndpoint } from '../prismic-configuration';

export default () => (
  <React.Fragment>
    <Head>
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="icon" href="/static/favicon.png" type="image/png" />
      <title>Sample Website</title>
      <script dangerouslySetInnerHTML={{
        __html: `
        window.prismic = { endpoint: "${apiEndpoint}" }
      `}} />
      <script src="//static.cdn.prismic.io/prismic.min.js" />
    </Head>
    <style jsx global>{`
      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed,
      figure, figcaption, footer, header, hgroup,
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article, aside, details, figcaption, figure,
      footer, header, hgroup, menu, nav, section {
        display: block;
      }
      body {
        line-height: 1;
      }
      ol, ul {
        list-style: none;
      }
      blockquote, q {
        quotes: none;
      }
      blockquote:before, blockquote:after,
      q:before, q:after {
        content: '';
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
    `}</style>
    <style jsx global>{`
      * {
        -webkit-font-smoothing: antialiased;
      }
      ::selection {
        background: #FFF7C7; /* WebKit/Blink Browsers */
      }
      ::-moz-selection {
        background: #FFF7C7; /* Gecko Browsers */
      }

      /*
      * Globals
      */
      body {
        padding: 20px;
        color: #72767b;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 400;
        letter-spacing : 0.4;
        line-height: 28px;
      }
      a {
        color: #72767B;
        font-size: 14px;
        font-weight: 400;
        letter-spacing : 0.35;
        line-height: 28px;
        text-decoration: none;
      }
      p a {
        text-decoration: underline;
      }
      h2, h3, h4, h5, h6 {
        font-family: 'Lato', sans-serif;
      }
      h1 {
        font-family: ‘Lora’, Serif; 
        font-size: 42px; 
        font-weight: normal; 
        color: #484D52; 
        line-height: 52px; 
        letter-spacing : 1.14;
        margin-bottom: 1rem;
      }
      h2, h2 a {
        margin-bottom: 1rem;
        color: #484d52;
        font-size: 32px;
        font-weight: 700;
        letter-spacing : 0.85;
        line-height: 42px;
      }
      h3, h3 a {
        margin-bottom: 1rem;
        Color: #484d52;
        font-size: 20px;
        font-weight: 400;
        letter-spacing : 0.52;
        line-height: 34px;
      }
      p {
        margin-bottom: 2rem;
      }
      pre, ul {
        margin-bottom: 20px;
      }
      strong {
        font-weight: bold;
      }
      em {
        font-style: italic;
      }
      img {
        max-width: 100%;
      }
    `}</style>
    <style jsx global>{`
      .container, header, footer {
        max-width: 980px;
        margin: auto;
      }
      .content-section {
        margin-bottom: 3.75rem;
      }
      .wio-link {
        background-color: #31a8fd !important;
        color: white;
        position: fixed;
        z-index: 10000;
        padding: 6px 10px;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        border-radius: 50%;
        bottom: 30px;
        right: 30px;
        height: 50px;
        width: 50px !important;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-shadow: 0 2px 7px 0 rgba(90, 90, 140, 0.4);
                box-shadow: 0 2px 7px 0 rgba(90, 90, 140, 0.4); 
      }
      .wio-link img {
        display: none;
      }
      .wio-link:after {
        font-family: 'Material Icons';
        content: '\\E3C9';
        color: white;
        font-size: 24px;
      }
    `}</style>
    <style jsx global>{`
      @media (max-width: 767px) {
        h1 {
          font-size: 32px;
          line-height: 40px;
        }
        h2 {
          font-size: 26px;
        }
        h3 {
          font-size: 18px;
        }
        .content-section {
          margin-bottom: 2rem;
        }
      }
    `}</style>
  </React.Fragment>
)