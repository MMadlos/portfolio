export default function Hero() {
  return (
    <section className="h-[60vh] flex items-end p-4">
      <div className="flex flex-col gap-4">
        <div className="sm:hidden">
          <h3 className="text-2xl font-semibold tracking-tighter">
            Michael Madlos
          </h3>
          <div className="flex gap-1 items-center animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-2  fill-emerald-500"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            </svg>
            <span className="text-xs font-medium text-emerald-500">
              Available
            </span>
          </div>
        </div>
        <p className="tracking-tighter text-lg sm:text-3xl md:text-4xl lg:text-5xl text-[#333]/60  font-light xl:max-w-[40ch] leading-6 sm:leading-7">
          I’m a Front-End Developer from Barcelona aiming to deliver exceptional
          digital experience for the web.
        </p>
      </div>
    </section>
  );
}
