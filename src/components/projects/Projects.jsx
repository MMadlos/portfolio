import IMGTest from "../../assets/avatar_test.jpg";
import Link from "../Link/Link";
import { Fragment } from "react";
import { projectsInfo } from "../../content/projectsInfo";

export default function Projects() {
  return (
    <main className="justify-between bg-[#F6F6F6] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] px-6 gap-8 sm:overflow-y-auto sm:px-20">
      <section className="pt-10">
        <h2 className="bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] text-transparent bg-clip-text font-fira text-sm font-semibold w-fit">
          Featured projects
        </h2>

        <div className="flex flex-col gap-20 py-10 ">
          {projectsInfo.map((projectData, index) => {
            const { id, name, description, src, alt, hrefWeb, hrefGithub } =
              projectData;

            return (
              <Fragment key={id}>
                <ProjectInfo
                  name={name}
                  description={description}
                  srcIMG={src}
                  altIMG={alt}
                  hrefWeb={hrefWeb}
                  hrefGithub={hrefGithub}
                />
                {index !== projectsInfo.length - 1 && <Divider />}
              </Fragment>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function Divider() {
  return <div className="bg-[#dadada] h-[1px] w-full sm:hidden"></div>;
}

function ProjectInfo({
  name,
  description,
  srcIMG = IMGTest,
  altIMG,
  hrefWeb = "#",
  hrefGithub = "#",
}) {
  return (
    <article className="font-geist flex flex-col gap-6 sm:flex-row sm:gap-24">
      <div className="sm:max-w-[25%]">
        <h3 className="text-lg font-semibold ">{name}</h3>
        <div className="hidden sm:flex sm:flex-col gap-6 sm:mt-4">
          <ProjectDescription
            description={description}
            hrefWeb={hrefWeb}
            hrefGithub={hrefGithub}
          />
        </div>
      </div>
      <div className="bg-white w-full rounded-md shadow-md overflow-hidden sm:max-h-[60vh] ">
        <img src={srcIMG} alt={altIMG} className="w-full object-cover h-full" />
      </div>

      {/* Only visible for xs screens */}
      <div className="sm:hidden flex flex-col gap-6">
        <ProjectDescription
          description={description}
          hrefWeb={hrefWeb}
          hrefGithub={hrefGithub}
        />
      </div>
    </article>
  );
}

function ProjectDescription({ description, hrefWeb, hrefGithub }) {
  return (
    <>
      <p className="text-[#999] font-geist text-sm tracking-wide ">
        {description}
      </p>
      <div className="flex flex-row gap-6 sm:gap-4">
        {hrefWeb !== "#" && <Link text="Website" href={hrefWeb} light />}
        <Link text="Github" href={hrefGithub} light />
      </div>
    </>
  );
}
