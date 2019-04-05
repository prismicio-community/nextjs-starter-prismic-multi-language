import React from 'react'
import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken } from 'prismic-configuration'
import { Header, HomeBanner, SliceZone } from 'components'

import DefaultLayout from 'layouts'

export default class extends React.Component {
  // Fetch relevant data from Prismic before rendering
  static async getInitialProps(context) {
    const req = context.req;
    const home = await this.getHomePage(req);
    // Extra call to render the edit button, in case we've been routed client-side
    if (process.browser) window.prismic.setupEditButton();
    return {
      doc: home.document,
      menu: home.menu
    };
  }

  static async getHomePage(req) {
    try {
      // Initializes the API, including the preview information if there's any
      const API = await Prismic.getApi(apiEndpoint, { req, accessToken });
      // Queries both the homepage and navigation menu documents
      const document = await API.getSingle('homepage');
      const menu = await API.getSingle('menu');
      return { document, menu };
    } catch(error) {
      console.error(error);
      return error;
    }
  }

  render() {
    // With the Prismic data in this.props we can render the components for the Homepage
    // passing to each component the required object
    return(
      <DefaultLayout>
        <div className="homepage" data-wio-id={this.props.doc.id}>
          <Header menu={this.props.menu} />
          <HomeBanner banner={this.props.doc.data.homepage_banner[0]} />
          <SliceZone sliceZone={this.props.doc.data.page_content} />
        </div>
      </DefaultLayout>
    );
  }
}