import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import ProjectGridItem from "@/components/ProjectGridItem";
import ProjectsScroller from "@/components/ProjectsScroller";
import ProjectSection from "@/components/ProjectSection";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Testing</title>
        <meta name="description" content="Personal site" />
      </Head>
      <section className="layoutInner items-center gap-y-12">
        <Header />
        <section className="col-span-4 col-start-5 flex flex-col gap-10">
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
      <section>
        <ProjectSection projectName="Helpper" projectImages={[2, 2, 2]} />
      </section>
      <section>
        <p>
          Oh, space, that vast, dark, possibly cold (who's really checked,
          right?) expanse that has captivated humans for... well, forever. It's
          full of stars that are probably just celestial lightbulbs, planets
          that could be cosmic bowling balls, and black holes that are, let's
          face it, the universe's way of telling us there's a limit to
          curiosity.
        </p>
        <p>
          Then there's the Moon, our loyal celestial sidekick, always there,
          hanging in the sky, reminding us that even in the vast loneliness of
          the cosmos, we've got a rocky friend. Oh, and let's not forget Mars,
          the red-faced neighbor who's been the target of our robotic paparazzi
          for years. Mars, if you're listening, sorry for the rovers, we're just
          really, really curious.
        </p>
        <p>
          And comets! Those flashy show-offs of the solar system, zipping by
          with their fancy tails, just begging for attention. You can't deny
          their flair, though. They're like the universe's way of saying, 'Hey,
          look at me, I'm fabulous and I know it.'
        </p>
        <p>
          In conclusion, space: it's big, it's mysterious, and it's probably
          laughing at our tiny attempts to understand it. But hey, we're humans.
          We're stubborn. We'll keep looking up, dreaming big, and maybe, just
          maybe, making a little sense of this cosmic joke.
        </p>
        <p>
          Oh, space, that vast, dark, possibly cold (who's really checked,
          right?) expanse that has captivated humans for... well, forever. It's
          full of stars that are probably just celestial lightbulbs, planets
          that could be cosmic bowling balls, and black holes that are, let's
          face it, the universe's way of telling us there's a limit to
          curiosity.
        </p>
        <p>
          Then there's the Moon, our loyal celestial sidekick, always there,
          hanging in the sky, reminding us that even in the vast loneliness of
          the cosmos, we've got a rocky friend. Oh, and let's not forget Mars,
          the red-faced neighbor who's been the target of our robotic paparazzi
          for years. Mars, if you're listening, sorry for the rovers, we're just
          really, really curious.
        </p>
        <p>
          And comets! Those flashy show-offs of the solar system, zipping by
          with their fancy tails, just begging for attention. You can't deny
          their flair, though. They're like the universe's way of saying, 'Hey,
          look at me, I'm fabulous and I know it.'
        </p>
        <p>
          In conclusion, space: it's big, it's mysterious, and it's probably
          laughing at our tiny attempts to understand it. But hey, we're humans.
          We're stubborn. We'll keep looking up, dreaming big, and maybe, just
          maybe, making a little sense of this cosmic joke.
        </p>
        <p>
          Oh, space, that vast, dark, possibly cold (who's really checked,
          right?) expanse that has captivated humans for... well, forever. It's
          full of stars that are probably just celestial lightbulbs, planets
          that could be cosmic bowling balls, and black holes that are, let's
          face it, the universe's way of telling us there's a limit to
          curiosity.
        </p>
        <p>
          Then there's the Moon, our loyal celestial sidekick, always there,
          hanging in the sky, reminding us that even in the vast loneliness of
          the cosmos, we've got a rocky friend. Oh, and let's not forget Mars,
          the red-faced neighbor who's been the target of our robotic paparazzi
          for years. Mars, if you're listening, sorry for the rovers, we're just
          really, really curious.
        </p>
        <p>
          And comets! Those flashy show-offs of the solar system, zipping by
          with their fancy tails, just begging for attention. You can't deny
          their flair, though. They're like the universe's way of saying, 'Hey,
          look at me, I'm fabulous and I know it.'
        </p>
        <p>
          In conclusion, space: it's big, it's mysterious, and it's probably
          laughing at our tiny attempts to understand it. But hey, we're humans.
          We're stubborn. We'll keep looking up, dreaming big, and maybe, just
          maybe, making a little sense of this cosmic joke.
        </p>
        <p>
          Oh, space, that vast, dark, possibly cold (who's really checked,
          right?) expanse that has captivated humans for... well, forever. It's
          full of stars that are probably just celestial lightbulbs, planets
          that could be cosmic bowling balls, and black holes that are, let's
          face it, the universe's way of telling us there's a limit to
          curiosity.
        </p>
        <p>
          Then there's the Moon, our loyal celestial sidekick, always there,
          hanging in the sky, reminding us that even in the vast loneliness of
          the cosmos, we've got a rocky friend. Oh, and let's not forget Mars,
          the red-faced neighbor who's been the target of our robotic paparazzi
          for years. Mars, if you're listening, sorry for the rovers, we're just
          really, really curious.
        </p>
        <p>
          And comets! Those flashy show-offs of the solar system, zipping by
          with their fancy tails, just begging for attention. You can't deny
          their flair, though. They're like the universe's way of saying, 'Hey,
          look at me, I'm fabulous and I know it.'
        </p>
        <p>
          In conclusion, space: it's big, it's mysterious, and it's probably
          laughing at our tiny attempts to understand it. But hey, we're humans.
          We're stubborn. We'll keep looking up, dreaming big, and maybe, just
          maybe, making a little sense of this cosmic joke.
        </p>
        <p>
          Oh, space, that vast, dark, possibly cold (who's really checked,
          right?) expanse that has captivated humans for... well, forever. It's
          full of stars that are probably just celestial lightbulbs, planets
          that could be cosmic bowling balls, and black holes that are, let's
          face it, the universe's way of telling us there's a limit to
          curiosity.
        </p>
        <p>
          Then there's the Moon, our loyal celestial sidekick, always there,
          hanging in the sky, reminding us that even in the vast loneliness of
          the cosmos, we've got a rocky friend. Oh, and let's not forget Mars,
          the red-faced neighbor who's been the target of our robotic paparazzi
          for years. Mars, if you're listening, sorry for the rovers, we're just
          really, really curious.
        </p>
        <p>
          And comets! Those flashy show-offs of the solar system, zipping by
          with their fancy tails, just begging for attention. You can't deny
          their flair, though. They're like the universe's way of saying, 'Hey,
          look at me, I'm fabulous and I know it.'
        </p>
        <p>
          In conclusion, space: it's big, it's mysterious, and it's probably
          laughing at our tiny attempts to understand it. But hey, we're humans.
          We're stubborn. We'll keep looking up, dreaming big, and maybe, just
          maybe, making a little sense of this cosmic joke.
        </p>
        <p>
          Oh, space, that vast, dark, possibly cold (who's really checked,
          right?) expanse that has captivated humans for... well, forever. It's
          full of stars that are probably just celestial lightbulbs, planets
          that could be cosmic bowling balls, and black holes that are, let's
          face it, the universe's way of telling us there's a limit to
          curiosity.
        </p>
        <p>
          Then there's the Moon, our loyal celestial sidekick, always there,
          hanging in the sky, reminding us that even in the vast loneliness of
          the cosmos, we've got a rocky friend. Oh, and let's not forget Mars,
          the red-faced neighbor who's been the target of our robotic paparazzi
          for years. Mars, if you're listening, sorry for the rovers, we're just
          really, really curious.
        </p>
        <p>
          And comets! Those flashy show-offs of the solar system, zipping by
          with their fancy tails, just begging for attention. You can't deny
          their flair, though. They're like the universe's way of saying, 'Hey,
          look at me, I'm fabulous and I know it.'
        </p>
        <p>
          In conclusion, space: it's big, it's mysterious, and it's probably
          laughing at our tiny attempts to understand it. But hey, we're humans.
          We're stubborn. We'll keep looking up, dreaming big, and maybe, just
          maybe, making a little sense of this cosmic joke.
        </p>
        <p>
          Oh, space, that vast, dark, possibly cold (who's really checked,
          right?) expanse that has captivated humans for... well, forever. It's
          full of stars that are probably just celestial lightbulbs, planets
          that could be cosmic bowling balls, and black holes that are, let's
          face it, the universe's way of telling us there's a limit to
          curiosity.
        </p>
        <p>
          Then there's the Moon, our loyal celestial sidekick, always there,
          hanging in the sky, reminding us that even in the vast loneliness of
          the cosmos, we've got a rocky friend. Oh, and let's not forget Mars,
          the red-faced neighbor who's been the target of our robotic paparazzi
          for years. Mars, if you're listening, sorry for the rovers, we're just
          really, really curious.
        </p>
        <p>
          And comets! Those flashy show-offs of the solar system, zipping by
          with their fancy tails, just begging for attention. You can't deny
          their flair, though. They're like the universe's way of saying, 'Hey,
          look at me, I'm fabulous and I know it.'
        </p>
        <p>
          In conclusion, space: it's big, it's mysterious, and it's probably
          laughing at our tiny attempts to understand it. But hey, we're humans.
          We're stubborn. We'll keep looking up, dreaming big, and maybe, just
          maybe, making a little sense of this cosmic joke.
        </p>
        <p>
          Oh, space, that vast, dark, possibly cold (who's really checked,
          right?) expanse that has captivated humans for... well, forever. It's
          full of stars that are probably just celestial lightbulbs, planets
          that could be cosmic bowling balls, and black holes that are, let's
          face it, the universe's way of telling us there's a limit to
          curiosity.
        </p>
        <p>
          Then there's the Moon, our loyal celestial sidekick, always there,
          hanging in the sky, reminding us that even in the vast loneliness of
          the cosmos, we've got a rocky friend. Oh, and let's not forget Mars,
          the red-faced neighbor who's been the target of our robotic paparazzi
          for years. Mars, if you're listening, sorry for the rovers, we're just
          really, really curious.
        </p>
        <p>
          And comets! Those flashy show-offs of the solar system, zipping by
          with their fancy tails, just begging for attention. You can't deny
          their flair, though. They're like the universe's way of saying, 'Hey,
          look at me, I'm fabulous and I know it.'
        </p>
        <p>
          In conclusion, space: it's big, it's mysterious, and it's probably
          laughing at our tiny attempts to understand it. But hey, we're humans.
          We're stubborn. We'll keep looking up, dreaming big, and maybe, just
          maybe, making a little sense of this cosmic joke.
        </p>
        <p>
          Oh, space, that vast, dark, possibly cold (who's really checked,
          right?) expanse that has captivated humans for... well, forever. It's
          full of stars that are probably just celestial lightbulbs, planets
          that could be cosmic bowling balls, and black holes that are, let's
          face it, the universe's way of telling us there's a limit to
          curiosity.
        </p>
        <p>
          Then there's the Moon, our loyal celestial sidekick, always there,
          hanging in the sky, reminding us that even in the vast loneliness of
          the cosmos, we've got a rocky friend. Oh, and let's not forget Mars,
          the red-faced neighbor who's been the target of our robotic paparazzi
          for years. Mars, if you're listening, sorry for the rovers, we're just
          really, really curious.
        </p>
        <p>
          And comets! Those flashy show-offs of the solar system, zipping by
          with their fancy tails, just begging for attention. You can't deny
          their flair, though. They're like the universe's way of saying, 'Hey,
          look at me, I'm fabulous and I know it.'
        </p>
        <p>
          In conclusion, space: it's big, it's mysterious, and it's probably
          laughing at our tiny attempts to understand it. But hey, we're humans.
          We're stubborn. We'll keep looking up, dreaming big, and maybe, just
          maybe, making a little sense of this cosmic joke.
        </p>
      </section>
      {/*<ProjectsScroller>
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
      </section>*/}
    </>
  );
};

export default HomePage;
