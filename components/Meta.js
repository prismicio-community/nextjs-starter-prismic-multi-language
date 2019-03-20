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
      <script dangerouslySetInnerHTML={{
        __html: `
        window.prismic = { endpoint: "${apiEndpoint}" }
      `}} />
      <script src="//static.cdn.prismic.io/prismic.min.js" />
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
    </Head>
  </React.Fragment>
)