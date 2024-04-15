export default function ProjectContent() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 h-[80dvh]">
      <div className="col-span-1  md:col-span-4 ">
        <h2 className="text-4xl font-semibold tracking-tight">
          Interactive dashboard
        </h2>
      </div>
      <div className="col-span-1 md:col-span-8 eading-relaxed text-neutral-600 ">
        <p className="mb-4 text-xl md:text-2xl l">
          Dynamic dashboard, fetching user data from an API and showcasing it
          through interactive charts powered by Chart.js. It includes features
          such as a dark/light mode, sorting options and a pagination panel.
        </p>

        <h3 className="text-xl font-bold py-4 text-neutral-700">
          Technologies
        </h3>
        <div className="flex flex-row gap-2 pb-8 [&>div]:font-medium [&>div]:text-lg [&>div]:text-neutral-500 flex-wrap">
          <div className="px-4 py-2 bg-neutral-200 rounded-full ">
            <p>HTML</p>
          </div>
          <div className="px-4 py-2 bg-neutral-200 rounded-full">
            <p>CSS</p>
          </div>
          <div className="px-4 py-2 bg-neutral-200 rounded-full">
            <p>JavaScript</p>
          </div>
          <div className="px-4 py-2 bg-neutral-200 rounded-full">
            <p>React JS</p>
          </div>
          <div className="px-4 py-2 bg-neutral-200 rounded-full">
            <p>Tailwind CSS</p>
          </div>
          <div className="px-4 py-2 bg-neutral-200 rounded-full">
            <p>Vite</p>
          </div>
          <div className="px-4 py-2 bg-neutral-200 rounded-full">
            <p>Vitest</p>
          </div>
          <div className="px-4 py-2 bg-neutral-200 rounded-full">
            <p>Figma</p>
          </div>
        </div>

        <div className="flex gap-4 ">
          <button className="w-full rounded-full bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit mt-12 font-semibold">
            Live demo
          </button>
          <button className="w-full rounded-full bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit mt-12 font-semibold">
            Code
          </button>
        </div>
      </div>
    </div>
  );
}
