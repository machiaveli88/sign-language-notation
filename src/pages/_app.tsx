import Head from 'next/head';
import React from 'react';
import { AppProps } from 'next/app';
import '../assets/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SignLanguage Notationsystems</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
