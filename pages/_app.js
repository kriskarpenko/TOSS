import Footer from '../components/Footer';
import Head from 'next/head';
import { CONFIG } from '../utils/consts';
import '../styles/globals.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{CONFIG.website.title}</title>
        <meta name="description" content={CONFIG.website.description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400&family=Roboto+Slab&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
