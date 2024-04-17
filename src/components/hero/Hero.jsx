export default function Hero() {
  return (
    <section className="h-[70vh] flex items-end ">
      <div className="p-4 overflow-hidden">
        <h2 className="tracking-tighter text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[#333]/50 font-normal xl:max-w-[65vw] uppercase leading-5">
          I'm a Front-End Developer aiming to fill the gap between {""}
          <span className="animate-breathe bg-gradient-to-tl  md:text-nowrap text-[#333] ">
            development and design.
          </span>
        </h2>
      </div>
    </section>
  );
}
