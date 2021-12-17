import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Nav from "../components/nav";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist//antd.css";
import { UserProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Cribs App</title>
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>
      <Nav />
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
