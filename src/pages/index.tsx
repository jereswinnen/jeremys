import Header from "@/components/Header";
import ProjectGridItem from "@/components/ProjectGridItem";
import ProjectHeroTitle from "@/components/ProjectHeroTitle";
import ProjectsScrubber from "@/components/ProjectsScrubber";
import ProjectsScrubberItem from "@/components/ProjectsScrubberItem";
import Head from "next/head";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Testing</title>
        <meta name="description" content="Personal site" />
      </Head>
      <section className="inline-grid h-fit grid-cols-8 items-center gap-8">
        <section className="col-span-6 col-start-2 flex flex-col gap-10">
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
      <ProjectsScrubber>
        <ProjectsScrubberItem
          projectName="Helpper"
          imageIndex={2}
          className="col-span-5"
        />
        <ProjectsScrubberItem
          projectName="Helpper"
          imageIndex={2}
          className="col-span-5"
        />
        <ProjectsScrubberItem
          projectName="Helpper"
          imageIndex={2}
          className="col-span-5"
        />
        <ProjectsScrubberItem
          projectName="Helpper"
          imageIndex={2}
          className="col-span-5"
        />
        <ProjectsScrubberItem
          projectName="Helpper"
          imageIndex={2}
          className="col-span-5"
        />
        <ProjectsScrubberItem
          projectName="Helpper"
          imageIndex={2}
          className="col-span-5"
        />
        <ProjectsScrubberItem
          projectName="Helpper"
          imageIndex={2}
          className="col-span-5"
        />
      </ProjectsScrubber>
      <section className="bg-lime-100">
        <section className="flex flex-col items-center bg-white py-10">
          <ProjectHeroTitle projectName="Yally" />
        </section>
        <header className="inline-grid grid-cols-8 gap-8 bg-lime-300">
          <div className="col-span-full flex justify-end">
            <h2 className="font-serif text-[8vw] text-neutral-900">
              <em className="italic">Selected</em> work
            </h2>
          </div>
          <div className="col-span-7 col-start-2 inline-grid grid-cols-2 justify-end gap-8">
            <span className="order-2 text-right font-serif text-[8vw] text-neutral-900">
              2014-2024
            </span>
            <article>
              <p>
                Throughout the years, I’ve had the please of collaborating with
                a diverse array of clients from around the globe, primarily in
                the tech and real estate sectors. These partnerships have been
                both a professional journey and a source of continuous learning
                for me.
              </p>
              <p>
                Rather than speaking at length about myself, I prefer to let my
                work do the talking. Below, you'll find a selection of projects
                that reflect my commitment to delivering a polished end result.
              </p>
            </article>
          </div>
        </header>
        <section id="gridRow" className="inline-grid grid-cols-8 gap-8">
          <ProjectGridItem
            projectName="Yally"
            imageIndex={2}
            className="col-span-5 mt-[10vh]"
          />
          <ProjectGridItem
            projectName="Yally"
            imageIndex={1}
            className="col-span-3"
          />
        </section>
        <section id="gridRow" className="inline-grid grid-cols-8 gap-8">
          <ProjectGridItem
            projectName="Helpper"
            imageIndex={1}
            className="col-span-4"
          />
          <ProjectGridItem
            projectName="Yally"
            imageIndex={0}
            className="col-span-4"
          />
        </section>
      </section>
    </>
  );
};

export default HomePage;
