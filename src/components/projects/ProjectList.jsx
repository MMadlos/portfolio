import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Battleship from "../../assets/projects/Battleship.png";
import Dashboard from "../../assets/projects/Dashboard.png";
import Oshop from "../../assets/projects/Oshop.png";

import ProjectContent from "./ProjectContent";

export default function ProjectList() {
  return (
    <main>
      <section>
        <ProjectContainer
          imgURL={Oshop}
          heading="Interactive dashboard"
          subheading="Featured"
        >
          <ProjectContent />
        </ProjectContainer>

        <ProjectContainer
          imgURL={Dashboard}
          heading="Interactive dashboard"
          subheading="Featured"
        >
          <ProjectContent />
        </ProjectContainer>

        <ProjectContainer
          imgURL={Battleship}
          heading="Interactive dashboard"
          subheading="Latest"
        >
          <ProjectContent />
        </ProjectContainer>
      </section>
    </main>
  );
}

function ProjectContainer({ imgURL, heading, subheading, children }) {
  return (
    <article>
      <div className="relative h-dvh w-full px-2">
        <ProjectImage imgURL={imgURL} />
        <OverlayContent heading={heading} subheading={subheading} />
      </div>
      {children}
    </article>
  );
}

function ProjectImage({ imgURL }) {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.95]);
  const opacityImage = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.2], ["0px", "16px"]);

  const opacityOverlay = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        scale,
        borderRadius,
        opacity: opacityImage,
      }}
      ref={imageRef}
      className="sticky z-0 overflow-hidden w-full h-full"
    >
      <motion.div
        style={{
          opacity: opacityOverlay,
        }}
        className="absolute inset-0 bg-black/70"
      ></motion.div>
    </motion.div>
  );
}
function OverlayContent({ heading, subheading }) {
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [500, -350]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.6, 0.65, 0.7],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={contentRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-5xl xl:text-7xl">
        {heading}
      </p>
    </motion.div>
  );
}
