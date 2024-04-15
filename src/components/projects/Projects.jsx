import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import IMG_OSHOP from "../../assets/oshop.jpg";

export default function ProjectList() {
  return (
    <main>
      <section>
        <ProjectContainer
          imgURL={IMG_OSHOP}
          heading="OSHOP"
          subheading="Latest"
        >
          <ProjectContent />
        </ProjectContainer>
        <ProjectContainer
          imgURL={IMG_OSHOP}
          heading="Interactive dashboard"
          subheading="Featured"
        />
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

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.65, 0.7, 1],
    [1.1, 1, 1, 0.8, 0.5]
  );
  const opacityImage = useTransform(scrollYProgress, [0.5, 0.8], [1, 0.3]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.2], ["0px", "8px"]);

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
      <div
        style={{
          opacity: opacityOverlay,
        }}
        className="absolute inset-0 bg-black/70"
      ></div>
    </motion.div>
  );
}
function OverlayContent({ heading, subheading }) {
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6, 0.7],
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

function ProjectContent({ content }) {
  return (
    <div className="h-dvh">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        ipsa nostrum sapiente tenetur ea ipsum tempora quod architecto explicabo
        fugiat eveniet ullam perspiciatis ab, quis commodi optio nisi. Totam,
        soluta?
      </p>
    </div>
  );
}
