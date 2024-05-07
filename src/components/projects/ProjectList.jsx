import { PROJECTS_DATA } from "../../content/projectsData";

import MainContainer from "./MainContainer";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <MainContainer>
      <div className="container mx-auto max-w-[1000px]">
        <h1 className="font-semibold tracking-wider mb-2  text-[#B080FF] uppercase">
          Projects
        </h1>
        <div className="flex flex-col gap-4 group/list relative">
          {PROJECTS_DATA.map((projectData, index) => {
            return <ProjectCard key={index} projectData={projectData} />;
          })}
        </div>
      </div>
    </MainContainer>
  );
}
