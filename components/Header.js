import React from 'react'
import { Link, RichText } from 'prismic-reactjs'
import { linkResolver, apiEndpoint } from '../prismic-configuration'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: {}
    }
  }

  static async getInitialProps(context) {
    const req = context.req;
    const document = await this.getMenu(req);
    console.log('we called ' + document);
    return {
      doc: document
    };
  }

  static async getMenu(req) {
    try {
      const API = await Prismic.getApi(apiEndpoint, {req, accessToken });
      return await API.getSingle('menu');
    } catch(error) {
      console.error(error);
      return error;
    }
  }

  menuLinks() {
    return this.props.doc.data.menu_links.map((menuLink) => {
      return (
        <li key={menuLink.link.id}>
          <a href={Link.url(menuLink.link, linkResolver)}> // THIS DEFINITELY NEEDS TO BE INTERNAL ROUTING ONLY
            {RichText.asText(menuLink.label)}
          </a>
        </li>
      );
    });
  }

  render() {
    return(
      <header className="site-header">
        <a href="./">
          <div className="logo">Example Site</div>
        </a>
        <nav>
          <ul>
            {this.menuLinks()}
          </ul>
        </nav>
      </header>
    )
  }
}