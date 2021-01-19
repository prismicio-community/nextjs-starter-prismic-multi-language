// If you wish to add the token in an .env, prefix it with prefix the variable with NEXT_PUBLIC_. 
// For example: NEXT_PUBLIC_ACCESS_TOKEN. Then modify the apiKey variable below.
const apiKey = process.env.NEXT_PUBLIC_ACCESS_TOKEN || ''

module.exports = {
  // -- Prismic API endpoint
  // Determines which repository to query and fetch data from
  // Configure your site's access point here
  apiEndpoint: 'https://your-repo-name.cdn.prismic.io/api/v2',

  // -- Access Token if the repository is not public
  // Generate a token in your dashboard and configure it here if your repository is private
  // If you wish to add the token in an .env, prefix it with prefix the variable with NEXT_PUBLIC_. 
  // For example: NEXT_PUBLIC_ACCESS_TOKEN. Then modify the apiKey variable in this file.
  accessToken: apiKey,
  
  // -- Link resolution rules
  // Manages links to internal Prismic documents
  // Modify as your project grows to handle any new routes you've made
  linkResolver: function(doc) {
    if (doc.type === 'page') {
      return `/${doc.lang}/${doc.uid}`;
    }
    if (doc.type === 'homepage') {
      return `/${doc.lang}`;
    }
    return '/';
  },

  // Additional helper function for Next/Link component
  hrefResolver: function(doc) {
    if (doc.type === 'page') {
      return `/${doc.lang}/${doc.uid}`;
    }
    if (doc.type === 'homepage') {
      return `/${doc.lang}`;
    }
    return '/';
  },
};
