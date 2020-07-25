import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <Layout>
        <div className="not-found">
          <Head><title>Error!</title></Head>
          <h1>{this.props.statusCode
          ? `${this.props.statusCode} Error`
          : 'Client-side error'}</h1>
          <h2>{this.props.statusCode == '404' ? 'Document not found' : 'Please contact developer'}</h2>
          <p><a href="/">Return to homepage</a></p>
          <style jsx>{`
            .not-found {
              display: flex;
              flex-direction: column;
              justify-content: center;
              height: 42vw;
              align-items: center;
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}