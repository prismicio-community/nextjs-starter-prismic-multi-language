import { useEffect } from 'react';
import qs from 'qs';
import { linkResolver } from "prismic-configuration";
import { Client } from "utils/prismicHelpers";

const Preview = ({ history, location }) => {
  useEffect(() => {
    const {token, documentId} = qs.parse(location.search.slice(1));
    if (!token) {
      return console.warn(`No token available, check your configuration`);
    }
    Client.getPreviewResolver(token, documentId).resolve(linkResolver, '/').then(url => history.push(url));
    });
  return null;
};

export default Preview;