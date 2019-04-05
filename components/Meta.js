import React, { Fragment } from 'react';
import Head from 'next/head'
import { apiEndpoint } from 'prismic-configuration';
import { reset, globals, medias } from 'styles';

export default () => (
  <Fragment>
    <Head>
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="icon" href="/static/favicon.png" type="image/png" />
      <title>Sample Website</title>
      <script dangerouslySetInnerHTML={{
        __html: `
        window.prismic = { endpoint: "${apiEndpoint}" }
      `}} />
      <script src="//static.cdn.prismic.io/prismic.min.js" />
    </Head>
    <style jsx global>{ reset }</style>
    <style jsx global>{ globals }</style>
    <style jsx global>{ medias }</style>
  </Fragment>
)