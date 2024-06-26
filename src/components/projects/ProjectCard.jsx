export default function ProjectCard({ projectData }) {
  const { imgURL, header, technologies, description, links } = projectData;

  const { website } = links;

  const isImageEmpty = imgURL === "";

  return (
    <article className="relative group flex flex-col sm:flex-row gap-6 sm:gap-12 border border-[#5810A2] sm:border-[#5810A2]/20 sm:hover:border-[#5810A2] sm:p-4 rounded-md bg-[#5810A2]/20 sm:bg-[#5810A2]/20  backdrop-blur sm:group-hover/list:opacity-15 sm:hover:!opacity-100 transition-opacity overflow-hidden">
      {!isImageEmpty && (
        <picture className="">
          <img
            src={imgURL}
            alt=""
            className="sm:rounded-sm sm:max-w-[175px] sm:aspect-square object-cover object-right-bottom "
          />
        </picture>
      )}

      <div className="flex flex-col gap-6 sm:gap-4 p-4 pt-0 sm:p-0">
        <h2 className=" text-white font-semibold sm:font-medium text-lg sm:group-hover:underline sm:group-hover:text-[#B080FF] group-hover:underline-offset-4 ">
          <a href={website} target="_blank">
            <span className="absolute inset-x-0 inset-y-0 hidden sm:block"></span>
            <span className="flex flex-row gap-2 sm:gap-3 sm:justify-between items-center">
              {header}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 sm:size-6 text-[#B080FF] sm:opacity-0  sm:-translate-x-6 sm:group-hover:translate-x-0 group-hover:opacity-100 transition sm:group-hover:animate-pulse inline-block "
              >
                <path
                  fill-rule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </a>
        </h2>

        <p className="text-sm text-white/70 ">{description}</p>

        <ul className="flex gap-2 flex-wrap text-[#B080FF] text-xs sm:items-end sm:h-full  pt-3">
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
      </div>
    </article>
  );
}
