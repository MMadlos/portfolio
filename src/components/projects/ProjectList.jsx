import DASHBOARD_IMG from "../../assets/projects/Dashboard.png";

export default function ProjectList() {
  return (
    <main className="h-dvh bg-[#0E0E0E] px-12 text-white">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold ">Projects</h1>
        <article className="flex flex-row gap-16 border border-white py-[24px] px-[40px] rounded-md bg-[#1D0D35]/75">
          <picture>
            <img
              src={DASHBOARD_IMG}
              alt=""
              className="rounded-sm max-w-[250px] aspect-square object-cover object-right-bottom"
            />
          </picture>

          <div className="">
            <h2 className="font-bold text">Interactive dashboard </h2>
            <p className="font-medium text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              perferendis magnam obcaecati molestias sunt eligendi optio iste
              debitis fugiat nostrum, tempora repudiandae sequi fuga aliquid
              animi est molestiae dolor nesciunt.
            </p>

            <div>Tags</div>
            <div>Buttons</div>
          </div>
        </article>
      </div>
    </main>
  );
}
