export default function Projects() {
  return (
    <section className="flex flex-col justify-between bg-[#F6F6F6] p-6 gap-8">
      <h2 className="mt-[40px] bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] text-transparent bg-clip-text font-fira text-sm font-semibold w-fit">
        Featured projects
      </h2>
      <div className="flex flex-col gap-20">
        <ProjectInfo />
        <ProjectInfo />
      </div>
    </section>
  );
}

function ProjectInfo() {
  return (
    <article className="font-geist flex flex-col gap-2 ">
      <h3 className="text-lg font-medium">Cronos</h3>
      <p className="text-[#999999]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae
        ducimus soluta expedita eos! Nemo quod tenetur voluptatibus cum. Modi
        quas quam quidem iste itaque laborum minus quasi.
      </p>

      <div className="bg-white w-full aspect-square rounded-2xl relative shadow-lg mt-8">
        <img src="" alt="" />

        <div className="absolute bottom-0 mb-4 flex flex-row gap-4 w-full px-2 font-fira text-sm font-semibold">
          <button className="py-2 px-6 w-full text-[#FAFAFA] bg-black rounded-lg">
            Github
          </button>
          <button className="py-2 px-6 w-full text-black bg-[#FAFAFA]  border-2 border-black rounded-lg">
            Website
          </button>
        </div>
      </div>
    </article>
  );
}
