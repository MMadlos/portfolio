export default function Hero() {
  return (
    <section className="h-dvh bg-gradient-to-b from-[#305EDF] via-[#8214EF] via-30% to-[#0E0E0E] to-80%">
      <div class="circle-sm left"></div>
      <div class="circle-sm right"></div>
      <div class="circle-lg"></div>

      <div className="flex items-end h-full">
        <div className="h-[35vh]  px-12 flex flex-row gap-4">
          <div className="h-full w-[1px] bg-gradient-to-b from-white to-white/0  relative">
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white size-4 absolute -top-2 -left-2 "
            >
              <circle cx="60" cy="60" r="50" />
            </svg>
          </div>

          <div className="flex flex-col gap-4 pt-6">
            <h3 className="text-3xl font-semibold tracking-tighter text-white md:text-4xl lg:text-5xl ">
              Front-End Developer
            </h3>
            <p className="tracking-tight text-white/80 text-lg lg:text-2xl lg:max-w-[35vw]">
              I blend my experiences in UX/UI Design and customer-facing roles
              to create meaningful and user-centric digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
