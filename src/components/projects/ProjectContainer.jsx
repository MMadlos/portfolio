import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectContent from "./ProjectContent";

export default function ProjectContainer({ projectData }) {
  const { imgURL, header, subheader } = projectData;

  return (
    <article>
      <div className="relative h-[150vh]">
        <ProjectImage imgURL={imgURL} />
        <OverlayContent heading={header} subheading={subheader} />
      </div>
      <ProjectContent projectData={projectData} />
    </article>
  );
}

function ProjectImage({ imgURL }) {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.8]);
  const opacityImage = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.2], ["0px", "16px"]);

  const opacityOverlay = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgURL})`,
        backgroundSize: "cover",
        backgroundPosition: "right bottom",
        scale,
        borderRadius,
        opacity: opacityImage,
        height: "100vh",
        top: 0,
      }}
      ref={imageRef}
      className="sticky z-0 overflow-hidden shadow-sm"
    >
      <motion.div
        style={{
          opacity: opacityOverlay,
        }}
        className="absolute inset-0 bg-black/50"
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

  const y = useTransform(scrollYProgress, [0, 1], [350, -350]);
  const opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.6, 0.7],
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
      <p className="text-center text-4xl font-bold md:text-5xl xl:text-7xl px-4">
        {heading}
      </p>
    </motion.div>
  );
}
