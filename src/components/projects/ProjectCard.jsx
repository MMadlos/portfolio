export default function ProjectCard({ projectData }) {
  const { imgURL, header, technologies, description, links } = projectData;

  const { website, github } = links;

  return (
    <article className="flex flex-col sm:flex-row gap-16 border border-[#5810A2]/20 hover:border-[#5810A2]/70 py-[24px] px-[40px] rounded-md bg-[#1D0D35]/40 hover:bg-[#1D0D35]/70 backdrop-blur group-hover/list:opacity-15 hover:!opacity-100 transition-opacity">
      <picture>
        <img
          src={imgURL}
          alt=""
          className="rounded-sm sm:max-w-[250px] aspect-square object-cover object-right-bottom"
        />
      </picture>

      <div className="flex flex-col gap-10">
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

        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-white text-xl">{header}</h2>

          <p className="font-medium text text-white/70">{description}</p>
        </div>

        <div className="flex flex-row gap-4 text-white">
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
        </div>
      </div>
    </article>
  );
}
