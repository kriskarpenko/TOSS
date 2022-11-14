import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from "next/head";
import { CONFIG } from "../utils/consts";
import "../styles/globals.css";
import Contact from "../components/Contact/Contact";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const linkContact = () => {
    router.pathname === "./contact" ? null : <Contact />;
  };
  return (
    <>
      <Head>
        <title>{CONFIG.website.title}</title>
        <meta name="description" content={CONFIG.website.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Component {...pageProps} />
      {linkContact}

      <Footer />
    </>
  );
}

export default MyApp;
