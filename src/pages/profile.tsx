import React from "react";
import Head from "next/head";
import ProjectGridItem from "@/components/ProjectGridItem";
import ProjectHeroTitle from "@/components/HeroTitle";
import ProjectsScroller from "@/components/ProjectsScroller";
import ProjectsScrollerItem from "@/components/ProjectsScrollerItem";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Personal site" />
      </Head>
      <h1>Profile page</h1>
      <ProjectsScroller>
        <ProjectsScrollerItem
          projectName="Helpper"
          imageIndex={2}
          className="col-span-5"
        />
        <ProjectsScrollerItem
          projectName="Helpper"
          imageIndex={2}
          className="col-span-5"
        />
        <ProjectsScrollerItem
          projectName="Helpper"
          imageIndex={2}
          className="col-span-5"
        />
        <ProjectsScrollerItem
          projectName="Helpper"
          imageIndex={2}
          className="col-span-5"
        />
        <ProjectsScrollerItem
          projectName="Helpper"
          imageIndex={2}
          className="col-span-5"
        />
        <ProjectsScrollerItem
          projectName="Helpper"
          imageIndex={2}
          className="col-span-5"
        />
        <ProjectsScrollerItem
          projectName="Helpper"
          imageIndex={2}
          className="col-span-5"
        />
      </ProjectsScroller>
      <section className="bg-lime-100">
        <section className="flex flex-col items-center bg-white py-10">
          <ProjectHeroTitle projectName="Yally" />
        </section>
        <header className="layoutInner bg-lime-300">
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
        <section id="gridRow" className="layoutInner">
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
        <section id="gridRow" className="layoutInner">
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
      */
    </>
  );
};

export default Profile;
