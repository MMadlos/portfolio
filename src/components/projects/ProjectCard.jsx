export default function ProjectCard({ projectData }) {
  const { imgURL, header, technologies, description, links } = projectData;

  const { website } = links;

  const isImageEmpty = imgURL === "";

  return (
    <article className="relative group flex flex-col sm:flex-row gap-6 sm:gap-12 border border-[#5810A2] sm:border-[#5810A2]/20 sm:hover:border-[#5810A2] p-4 rounded-md bg-[#5810A2]/20 sm:bg-[#5810A2]/20  backdrop-blur sm:group-hover/list:opacity-15 sm:hover:!opacity-100 transition-opacity">
      {!isImageEmpty && (
        <picture className="hidden sm:block">
          <img
            src={imgURL}
            alt=""
            className="rounded-sm sm:max-w-[175px] sm:aspect-square object-cover object-right-bottom"
          />
        </picture>
      )}

      <div className="flex flex-col gap-4 ">
        <h2 className=" text-white font-semibold sm:font-medium sm:text-lg sm:group-hover:underline sm:group-hover:text-[#B080FF] group-hover:underline-offset-4 ">
          <a href={website} target="_blank">
            <span className="absolute inset-x-0 inset-y-0 hidden sm:block"></span>
            <span className="flex flex-row gap-3 justify-between">
              {header}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-[#B080FF] sm:opacity-0  sm:-translate-x-6 sm:group-hover:translate-x-0 group-hover:opacity-100 transition sm:group-hover:animate-pulse inline-block"
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

        {!isImageEmpty && (
          <picture className="sm:hidden pt-6">
            <img
              src={imgURL}
              alt=""
              className="rounded-sm sm:max-w-[175px] sm:aspect-square object-cover object-right-bottom"
            />
          </picture>
        )}

        <ul className="flex gap-2 flex-wrap text-[#B080FF] text-xs sm:items-end sm:h-full sm:pt-3">
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

/*
export default function ProjectCard({ projectData }) {
  const { imgURL, header, technologies, description, links } = projectData;

  const { website } = links;

  const isImageEmpty = imgURL === "";

  return (
    <a href={website} className="group ">
      <article className="flex flex-col sm:flex-row gap-6 sm:gap-12 border border-[#5810A2]/20 hover:border-[#5810A2] p-4 rounded-md bg-[#5810A2]/20 sm:bg-[#5810A2]/20  backdrop-blur sm:group-hover/list:opacity-15 sm:hover:!opacity-100 transition-opacity ">
        {!isImageEmpty && (
          <picture className="">
            <img
              src={imgURL}
              alt=""
              className="rounded-sm sm:max-w-[175px] sm:aspect-square object-cover object-right-bottom"
            />
          </picture>
        )}

        <div className="flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center sm:justify-between">
              <h2 className=" text-white font-medium sm:text-lg group-hover:underline group-hover:underline-offset-4 ">
                {header}
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-[#B080FF] sm:opacity-0  sm:-translate-x-20 sm:group-hover:translate-x-0 group-hover:opacity-100 transition sm:group-hover:animate-pulse"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <p className="text-sm text-white/70  sm:mb-0 mb-3">{description}</p>
          </div>

          <ul className="flex gap-2 flex-wrap text-[#B080FF] text-xs">
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
    </a>
  );
}

*/
