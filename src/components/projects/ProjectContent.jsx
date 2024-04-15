export default function ProjectContent({ projectData }) {
  const { header, features, technologies, description, links } = projectData;

  return (
    <div className="px-4 py-12 grid grid-cols-1 gap-9 md:py-24 md:px-0 md:grid-cols-16 ">
      <div className="col-span-1  md:col-span-6 md:text-right">
        <h2 className="text-5xl font-semibold tracking-tighter text-stone-800">
          {header}
        </h2>
      </div>

      <div className="col-span-1 md:col-start-8 md:col-span-7 leading-relaxed text-neutral-600 flex flex-col gap-10">
        <div className="flex flex-col gap-3 ">
          <p className="mb-4 text-3xl  text-stone-400 tracking-tight">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3 ">
          <h3 className="text-xl font-semibold text-stone-600">Features</h3>
          {features.map((feature, index) => (
            <FeatureTag key={index} text={feature} />
          ))}
        </div>

        <div className="flex flex-col gap-3 ">
          <h3 className="text-xl font-semibold text-stone-600">Technologies</h3>
          <div className="flex flex-row gap-2 flex-wrap">
            {technologies.map((tech, index) => (
              <TechTag key={index} text={tech} />
            ))}
          </div>
        </div>

        <ProjectLinks links={links} />
      </div>
    </div>
  );
}

function FeatureTag({ text }) {
  return (
    <div className="flex flex-row gap-2 text-[#737373] items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-5 md:size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>

      <p className="text-lg">{text}</p>
    </div>
  );
}

function TechTag({ text }) {
  return (
    <div className="px-6 py-2 bg-[#FAFAFA] rounded-full font-medium text-lg text-[#737373] ">
      <p>{text}</p>
    </div>
  );
}

function ProjectLinks({ links }) {
  const { website, github } = links;

  return (
    <div className="flex flex-col gap-3 sm:flex-row flex-wrap">
      {website && (
        <a
          href={website}
          target="_blank"
          className="flex flex-row gap-4 w-full rounded-full bg-[#171717] px-9 py-4 text-lg text-white  hover:opacity-50 sm:w-fit font-semibold justify-center items-center"
        >
          Live demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
      )}
      <a
        href={github}
        target="_blank"
        className="flex flex-row gap-4 w-full rounded-full px-9 py-3 text-lg text-[#171717]  hover:opacity-50 sm:w-fit font-semibold justify-center items-center border-[#171717] border-[3px]"
      >
        Github
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </a>
    </div>
  );
}
