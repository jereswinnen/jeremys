import React from "react";
import { projects, Project } from "../lib/projects";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectHeroTitleProps = {
  projectName: string;
};

const ProjectHeroTitle: React.FC<ProjectHeroTitleProps> = ({ projectName }) => {
  const project = projects.find((p) => p.name === projectName) as Project;
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <motion.h1 className="textMask overflow-hidden text-[240px] text-transparent font-bold">
      {project.name}
      <motion.div
        className="absolute left-0 top-0 h-full w-full bg-contain mix-blend-overlay brightness-75 saturate-150"
        style={{
          backgroundImage: `url(${project?.keyImage.src})`,
          y: parallaxY,
        }}
      ></motion.div>
    </motion.h1>
  );
};

export default ProjectHeroTitle;
