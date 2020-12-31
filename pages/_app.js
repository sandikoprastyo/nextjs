import '../styles/globals.scss';
import './index.module.scss';
import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be access by the client
    return { pageProps: pageProps };
  }

  render() {
    //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
