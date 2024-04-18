export default function Hero() {
  return (
    <section className="h-[60vh] flex items-end relative noise ">
      <div className="flex flex-col gap-2 px-4 pb-8 md:gap-0 w-full opacity-90">
        <h3 className="text-3xl font-semibold tracking-tighter text-[#333] md:text-4xl lg:text-5xl">
          Front-End Developer.
        </h3>
        <p className="tracking-tight text-2xl sm:text-3xl md:text-2xl lg:text-3xl text-[#333] leading-7 sm:leading-7 ">
          Navigating between development and design
        </p>
      </div>
    </section>
  );
}
