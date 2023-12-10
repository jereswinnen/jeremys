import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Testing</title>
        <meta name="description" content="Personal site" />
      </Head>
      {/* Page body */}
      <section>
        <Header />
        <h1>Hero</h1>
      </section>
    </>
  );
};

export default HomePage;
