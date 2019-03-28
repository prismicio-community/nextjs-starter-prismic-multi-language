import React from 'react'
import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken } from 'prismic-configuration'
import SliceZone from 'components/slices/SliceZone'
import Header from 'components/Header'
import DefaultLayout from 'layouts'
import Error from './_error';


export default class Page extends React.Component {  
  static async getInitialProps(context) {
    const { uid } = context.query;
    const req = context.req;
    const page = await this.getPage(uid, req);
    return {
      doc: page.document,
      menu: page.menu,
      uid: uid
    };
  }

  static async getPage(uid, req) {
    try {
      const API = await Prismic.getApi(apiEndpoint, { req, accessToken });
      console.log("Trying to getByUID from Prismic");
      const document = await API.getByUID('page', uid);
      console.log(document);
      const menu = await API.getSingle('menu');
      return { document, menu };
    } catch(error) {
      console.error(error);
      return error;
    }
  }
  
  render() {
    if (!this.props.doc) {
      return(
        // Call the standard error page if the document was not found
        <Error statusCode='404' />
      );
    } else {
      return(
        <DefaultLayout>
          <div className="page" data-wio-id={this.props.doc.id}>
            <Header menu={this.props.menu} />
            <div className="container">
              <SliceZone sliceZone={this.props.doc.data.page_content} />
            </div>
          </div>
        </DefaultLayout>
      );
    }
  }
}