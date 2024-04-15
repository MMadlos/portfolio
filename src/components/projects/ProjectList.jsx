import { PROJECTS_DATA } from "/src/content/projectsData.js";
import ProjectContainer from "./ProjectContainer";

export default function ProjectList() {
  return (
    <main>
      <section>
        {PROJECTS_DATA.map((projectData, index) => {
          return <ProjectContainer key={index} projectData={projectData} />;
        })}
      </section>
    </main>
  );
}
