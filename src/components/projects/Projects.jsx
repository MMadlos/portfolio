import IMGTest from "../../assets/avatar_test.jpg";

export default function Projects() {
  return (
    <main className="justify-between bg-[#F6F6F6] px-6 gap-8 sm:overflow-y-auto">
      <section className="pt-10">
        <h2 className="bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] text-transparent bg-clip-text font-fira text-sm font-semibold w-fit">
          Featured projects
        </h2>

        <div className="flex flex-col gap-20 py-10">
          <ProjectInfo name="Cronos" />
          <ProjectInfo name="Oshop" />
        </div>
      </section>
    </main>
  );
}

function ProjectInfo({ name = "", src = IMGTest }) {
  return (
    <article className="font-geist flex flex-col gap-8 ">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold ">{name}</h3>
        <p className="text-[#999999]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae
          ducimus soluta expedita eos! Nemo quod tenetur voluptatibus cum. Modi
          quas quam quidem iste itaque laborum minus quasi.
        </p>
      </div>
      <div className="bg-white w-full aspect-square rounded-2xl relative shadow-lg overflow-hidden">
        <img src={src} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-row gap-4 w-full font-fira text-sm font-semibold">
        <button className="py-3 px-6 w-full text-white bg-black rounded-xl ">
          Website
        </button>
        <button className="py-3 px-6 w-full text-black rounded-xl border-2 border-black">
          Github
        </button>
      </div>
    </article>
  );
}
