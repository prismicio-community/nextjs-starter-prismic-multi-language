import React from "react";

const somepage = (props) => {
  console.log("props", props.doc)
  return <div>{props.doc}</div>
}

export async function getStaticProps({params, locale, locales}) {
  console.log({params, locale, locales}) // check if params exist and if they do, pass it as local, If not then is master locale.
  // const data = [{ lang: "en-us", text: "ingles" }, { lang: "fr-fr", text: "frances" }]
  return {
    props: {
      doc: "hey"
    },
  };
}


export const getStaticPaths = (cnt) => {
  console.log(cnt)
  return {
    paths: [
      { params: { uid: 'english' }},
      { params: { uid: 'francais' }},
    ],
    fallback: true,
  }
}

export default somepage





