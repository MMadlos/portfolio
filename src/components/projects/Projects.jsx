import IMGTest from "../../assets/avatar_test.jpg";
import Link from "../Link/Link";

export default function Projects() {
  return (
    <main className="justify-between bg-[#F6F6F6] px-6 gap-8 sm:overflow-y-auto">
      <section className="pt-10">
        <h2 className="bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] text-transparent bg-clip-text font-fira text-sm font-semibold w-fit">
          Featured projects
        </h2>

        <div className="flex flex-col gap-20 py-10 ">
          <ProjectInfo name="Cronos" />
          <Divider />
          <ProjectInfo name="New long name project" />
          <Divider />
          <ProjectInfo name="Oshop" />
        </div>
      </section>
    </main>
  );
}

function Divider() {
  return <div className="bg-[#CACACA] h-[1px] w-full sm:hidden"></div>;
}

function ProjectInfo({
  name = "",
  srcIMG = IMGTest,
  hrefWeb = "#",
  hrefGithub = "#",
}) {
  return (
    <article className="font-geist flex flex-col gap-6 sm:flex-row sm:gap-14">
      <div>
        <h3 className="text-lg font-semibold ">{name}</h3>
        <div className="hidden sm:flex sm:flex-col gap-6 sm:mt-6">
          <ProjectDescription />
        </div>
      </div>
      <div className="bg-white w-full rounded-md shadow-md overflow-hidden sm:max-h-[60vh] ">
        <img src={srcIMG} alt="" className="w-full object-cover aspect-auto" />
      </div>
      <div className="sm:hidden flex flex-col gap-6">
        <ProjectDescription />
      </div>
    </article>
  );
}

function ProjectDescription() {
  return (
    <>
      <p className="text-[#999] font-geist text-sm tracking-wide ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae
        ducimus soluta expedita eos! Nemo quod tenetur voluptatibus cum. Modi
        quas quam quidem iste itaque laborum minus quasi.
      </p>
      <div className="flex flex-row gap-6">
        <Link text="Website" light />
        <Link text="Github" light />
      </div>
    </>
  );
}
