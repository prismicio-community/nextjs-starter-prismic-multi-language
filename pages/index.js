import React from "react";

const somepage = (props) => {
  console.log(props)
    return<div>home</div>
}


export async function getStaticProps(context) {
  console.log(context, "where's the context???") // check if params exist and if they do, pass it as local, If not then is master locale.
  // const data = [{lang: "en-us", text: "ingles"},{lang: "fr-fr", text: "frances"}]
  return {
    props: {
      doc: "home"
    },
  };
} 


export const getStaticPaths = (context) => {
  console.log(context, "paths")
  return {
    paths: [
      { params: { lang: 'en-us' }, locale: 'en-US' },
      { params: { lang: 'fr-fr' }, locale: 'fr-FR' },
    ],
    fallback: true,
  }
}

export default somepage