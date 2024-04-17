export default function Hero() {
  return (
    <section className="h-[70vh] flex items-end ">
      <div className="p-4 ">
        <h2 className="tracking-tighter text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-400 font-light xl:max-w-[65vw] ">
          I'm a Front-End Developer aiming to fill the gap between {""}
          <span className="animate-breathe bg-gradient-to-tl text-stone-500 md:text-nowrap">
            development and design
          </span>
        </h2>
      </div>
    </section>
  );
}
