import DASHBOARD_IMG from "../../assets/projects/Dashboard.png";

export default function ProjectList() {
  return (
    <main className="h-dvh bg-[#0E0E0E] px-12  py-12">
      <div className="container mx-auto max-w-[1000px]">
        <h1 className="text-xl font-bold text-white">Projects</h1>

        <div className="flex flex-col gap-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </main>
  );
}

function ProjectCard() {
  return (
    <article className="flex flex-col sm:flex-row gap-16 border border-[#5810A2]/40 py-[24px] px-[40px] rounded-md bg-[#1D0D35]/50 backdrop-blur ">
      <picture>
        <img
          src={DASHBOARD_IMG}
          alt=""
          className="rounded-sm sm:max-w-[250px] aspect-square object-cover object-right-bottom"
        />
      </picture>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-white">Interactive dashboard </h2>
          <p className="font-medium text-sm text-white/70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            perferendis magnam obcaecati molestias sunt eligendi optio iste
            debitis fugiat nostrum, tempora repudiandae sequi fuga aliquid animi
            est molestiae dolor nesciunt.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap text-[#B080FF] text-xs">
          <div className="px-4 py-1 bg-[#450B7D]/50 rounded-full ">HTML</div>
          <div className="px-4 py-1 bg-[#450B7D]/50 rounded-full ">CSS</div>
          <div className="px-4 py-1 bg-[#450B7D]/50 rounded-full ">
            JavaScript
          </div>
        </div>
        <div className="flex flex-row gap-4 text-white">
          <a
            href="/"
            className="bg-[#8214EF] px-4 py-2 rounded text-sm font-semibold hover:bg-[#450B7D]"
          >
            Live demo
          </a>
          <a
            href="/"
            className="px-4 py-2 rounded text-sm font-medium hover:underline"
          >
            Github
          </a>
        </div>
      </div>
    </article>
  );
}
