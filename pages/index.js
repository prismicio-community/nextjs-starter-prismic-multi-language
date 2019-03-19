import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import { linkResolver, apiEndpoint, accessToken } from '../prismic-configuration'
import Head from 'next/head'
import Link from 'next/link'
import DefaultLayout from '../layouts'


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: {},
    }
  }

  static async getInitialProps(context) {
    const req = context.req;
    const document = await this.getHomePage(req);
    return {
      doc: document
    };
  }

  static async getHomePage(req) {
    try {
      const API = await Prismic.getApi(apiEndpoint, {req, accessToken });
      const document = await API.getSingle('homepage');
      console.log(document);
      return document;
    } catch(error) {
      console.error(error);
      return error;
    }
  }

  homePageBanner(banner) {
    return (
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
    );
  }

  render() {
    return(
      <DefaultLayout>
        <Head>
          <title key="title">
            {RichText.asText(this.props.doc.data.homepage_banner[0].title)}
          </title>
        </Head>
        <div className="homepage" data-wio-id={this.props.doc.id}>
          {/* <Header /> */}
          {this.homePageBanner(this.props.doc.data.homepage_banner[0])}
          <div className="container">
            {/* <SliceZone sliceZone={this.props.doc.data.page_content} /> */}
          </div>
        </div>
      </DefaultLayout>
    );
  }
}