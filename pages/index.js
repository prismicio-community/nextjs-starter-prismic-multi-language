import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import { linkResolver, apiEndpoint, accessToken } from '../prismic-configuration'
import SliceZone from '../components/slices/SliceZone'
import Header from '../components/Header'
import Head from 'next/head'
import Link from 'next/link'
import DefaultLayout from '../layouts'


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: {},
      menu: {}
    }
  }

  static async getInitialProps(context) {
    const req = context.req;
    const home = await this.getHomePage(req);
    return {
      doc: home.document,
      menu: home.menu
    };
  }

  static async getHomePage(req) {
    try {
      const API = await Prismic.getApi(apiEndpoint, {req, accessToken });
      const document = await API.getSingle('homepage');
      const menu = await API.getSingle('menu');
      return { document, menu };
    } catch(error) {
      console.error(error);
      return error;
    }
  }

  homePageBanner(banner) {
    return (
      <React.Fragment>
        <section className="homepage-banner"
          style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + banner.image.url +')'}}>
          <div className="banner-content container">
            <h2 className="banner-title">{RichText.asText(banner.title)}</h2>
            <p className="banner-description">{RichText.asText(banner.tagline)}</p>
            {RichText.asText(banner.button_label) !== "" ? (
              // Displays the button link only if it's been defined
              <a className="banner-button" href={banner.button_link.url}>
              {/* WARNING! Currently hardcoded to external links only. Learn how to handle all links */}
                {RichText.asText(banner.button_label)}
              </a>
            ) : ''}
          </div>
        </section>
        <style jsx>{`
          .homepage-banner {
            margin: -70px 0 80px;
            padding: 10em 0 8em;
            background-position: center center;
            background-size: cover;
            color: #ffffff;
            line-height: 1.75;
            text-align: center;
          }
          .banner-content {
            text-align: center;
          }
          .banner-title, .banner-description {
            width: 90%;
            max-width: 490px;
            margin-left: auto;
            margin-right: auto;
          }
          .banner-title {
            color: #ffffff;
            font-size: 70px;
            font-weight: 900;
            line-height: 70px;
          }
          .banner-button {
            background: #ffffff;
            border-radius: 7px;
            color: #484D52;
            font-size: 14px;
            font-weight: 700;
            padding: 15px 40px;
          }
          .banner-button:hover {
            background: #c8c9cb;
          }
          @media (max-width: 767px) {
            .homepage-banner {
              margin: 0 0 40px;
              padding: 10em 0 6em;
            }
            .banner-title {
              font-size: 50px;
              line-height: 50px;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }

  render() {
    return(
      <DefaultLayout>
        <Head>
          <title>
            {RichText.asText(this.props.doc.data.homepage_banner[0].title)}
          </title>
        </Head>
        <div className="homepage" data-wio-id={this.props.doc.id}>
          <Header menu={this.props.menu} />
          {this.homePageBanner(this.props.doc.data.homepage_banner[0])}
          <div className="container">
            <SliceZone sliceZone={this.props.doc.data.page_content} />
          </div>
        </div>
      </DefaultLayout>
    );
  }
}