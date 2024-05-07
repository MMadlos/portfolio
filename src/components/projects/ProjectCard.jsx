export default function ProjectCard({ projectData }) {
  const { imgURL, header, technologies, description, links } = projectData;

  const { website, github } = links;

  return (
    <a href={website} className="group ">
      <article className="flex flex-col sm:flex-row gap-16 border border-[#5810A2]/20 hover:border-[#5810A2]/70 py-[24px] px-[40px] rounded-md bg-[#5810A2]/10 hover:bg-[#1D0D35]/70 backdrop-blur group-hover/list:opacity-15 hover:!opacity-100 transition-opacity ">
        <picture className="">
          <img
            src={imgURL}
            alt=""
            className="rounded-sm sm:max-w-[200px] aspect-square object-cover object-right-bottom "
          />
        </picture>

        <div className="flex flex-col gap-10 justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center ">
              <h2 className="font-medium text-white text-xl group-hover:underline group-hover:underline-offset-4 ">
                {header}
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-[#B080FF] opacity-0  -translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition "
              >
                <path
                  fill-rule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <p className="font-medium text text-white/50">{description}</p>
          </div>

          <ul className="flex gap-3 flex-wrap text-[#B080FF] text-xs">
            {technologies.map((label, index) => {
              return (
                <li
                  key={index}
                  className="px-4 py-1 bg-[#450B7D]/50 rounded-full "
                >
                  {label}
                </li>
              );
            })}
          </ul>

          {/* <div className="flex flex-row gap-4 text-white">
            <a
              href={website}
              className="bg-[#8214EF] px-4 py-2 rounded text-sm font-semibold hover:bg-[#450B7D] transition"
            >
              Live demo
            </a>
            <a
              href={github}
              className="px-4 py-2 rounded text-sm font-medium hover:underline "
            >
              Github
            </a>
          </div> */}
        </div>
      </article>
    </a>
  );
}
