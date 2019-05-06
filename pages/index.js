import React from 'react'
import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken } from 'prismic-configuration'
import { Header, HomeBanner, SliceZone } from 'components'
import DefaultLayout from 'layouts'
import Error from './_error';

export default class homepage extends React.Component {
  // Fetch relevant data from Prismic before rendering
  static async getInitialProps(context) {
    const { locale } = context.query;
    const req = context.req;
    const home = await this.getHomePage(locale, req);
    // Extra call to render the edit button, in case we've been routed client-side
    if (process.browser) window.prismic.setupEditButton();
    return {
      ...home,
      doc: home.document,
      locale: locale
    };
  }

  static async getHomePage(locale, req) {
    try {
      // Initializes the API, including the preview information if there's any
      const API = await Prismic.getApi(apiEndpoint, { req, accessToken });
      // Languages from API response
      let languages = API.data.languages;
      // Setting Master language as default language option
      const mainLanguage = languages[0].id;
      // Sets current language based on the locale
      const currentLang = locale !== undefined ? locale : mainLanguage;
      const isMyMainLanguage = mainLanguage === currentLang;

      // Queries both the homepage and navigation menu documents
      const document = await API.getSingle('homepage', { lang: currentLang });
      const menu = await API.getSingle('menu', { lang: currentLang });
      return { document, menu, currentLang, isMyMainLanguage };
    } catch(error) {
      return error;
    }
  }

  render() {
    // If the query returns null, then we don't attempt to render the page
    if (!this.props.doc) {
      return(
        // Call the standard error page if the document was not found
        // Essential for dealing with previews of documents that have not been published
        <Error statusCode='404' />
      );
    } else {
      return(
        <DefaultLayout>
          <div className="homepage" data-wio-id={this.props.doc.id}>
            <Header
              altLangs={this.props.doc.alternate_languages}
              currentLang={this.props.currentLang}
              isMyMainLanguage={this.props.isMyMainLanguage}
              menu={this.props.menu}
            />
            <HomeBanner banner={this.props.doc.data.homepage_banner[0]} />
            <SliceZone sliceZone={this.props.doc.data.page_content} />
          </div>
        </DefaultLayout>
      );
    }
  }
}