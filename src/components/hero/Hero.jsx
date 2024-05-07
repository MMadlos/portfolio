export default function Hero() {
  return (
    <section className="h-[100vh] relative overflow-hidden hero-bg">
      <div class="circle-sm left"></div>
      <div class="circle-sm right"></div>
      <div class="circle-lg"></div>

      <div className="flex justify-center items-end h-full">
        <div className="h-[50vh]  px-12 flex flex-row gap-4 ">
          <div className="relative">
            <div className="h-full w-[1px] bg-gradient-to-b from-white to-#[1E0E2E] to-90%"></div>
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white size-4 absolute -top-2 -left-2 animate-bounce shadow"
            >
              <circle cx="60" cy="60" r="50" />
            </svg>
          </div>

          <div className="flex flex-col gap-4 pt-6">
            <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-6xl ">
              Front-End Developer
            </h3>
            <p className=" text-white/50 text-lg lg:text-lg lg:max-w-[60%]">
              I blend my experience in UX/UI Design and customer-facing roles to
              create meaningful and user-centric digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
