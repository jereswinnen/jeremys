import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Lenis from "@studio-freight/lenis";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.15,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
