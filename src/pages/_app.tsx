import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Instrument_Sans } from "next/font/google";
const instrument_sans = Instrument_Sans({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${instrument_sans.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
