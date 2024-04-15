export default function Hero() {
  return (
    <section className="h-[70dvh] flex items-end pb-4">
      <div className="p-4 ">
        <h2 className="tracking-tighter text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-400 font-light xl:max-w-[80vw] ">
          I'm a Front-End developer aspiring to be the bridge between {""}
          {/* <span className=" text-stone-600 font-medium tracking-tighter  animate-swapFirst">
              development
            </span>
            <span className=" text-stone-600 font-medium tracking-tighter animate-swapSecond">
              design
            </span> */}
          <span className=" font-medium tracking-tighter  animate-breathe bg-gradient-to-tl text-stone-500 md:text-nowrap">
            development and design
          </span>
        </h2>
      </div>
    </section>
  );
}
