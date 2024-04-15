export default function ProjectContent({ projectData }) {
  const { header, features, technologies, description, links } = projectData;

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 ">
      <div className="col-span-1  md:col-span-4 ">
        <h2 className="text-4xl font-semibold tracking-tight">{header}</h2>
      </div>
      <div className="col-span-1 md:col-span-8 eading-relaxed text-neutral-600 ">
        <p className="mb-4 text-xl md:text-2xl l">{description}</p>

        <h3>Features</h3>
        <div>
          {features.map((feature) => (
            <TechTag text={feature} />
          ))}
        </div>

        <h3 className="text-xl font-bold py-4 text-neutral-700">
          Technologies
        </h3>
        <div className="flex flex-row gap-2 pb-8 [&>div]:font-medium [&>div]:text-lg [&>div]:text-neutral-500 flex-wrap">
          {technologies.map((tech) => (
            <TechTag text={tech} />
          ))}
        </div>

        <div className="flex gap-4 ">
          <a className="w-full rounded-full bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit mt-12 font-semibold">
            Live demo
          </a>
          <a className="w-full rounded-full bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit mt-12 font-semibold">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

function TechTag({ text }) {
  return (
    <div className="px-4 py-2 bg-neutral-200 rounded-full">
      <p>{text}</p>
    </div>
  );
}
