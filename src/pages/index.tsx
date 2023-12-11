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
      <section className="col-span-full inline-grid h-screen grid-cols-8 items-center bg-slate-200">
        <section className="col-span-6 col-start-2 flex flex-col gap-10 bg-slate-100">
          <Header />
          <article className="text-3xl/10">
            <p>
              Blending a decade of UX/UI design experience with sharp
              problem-solving skills, I create mobile-first interfaces that
              captivate users, bringing them to life with modular, semantic
              code.
            </p>
            <p>Currently working as a creative developer at Yally.</p>
          </article>
        </section>
      </section>
    </>
  );
};

export default HomePage;
