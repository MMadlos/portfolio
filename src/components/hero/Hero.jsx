export default function Hero() {
  return (
    <section className="h-[60vh]  relative noise-color  ">
      <div className="flex flex-col justify-end gap-4 px-4 pb-8  w-full h-full noise">
        <h3 className="text-3xl font-semibold tracking-tighter text-[#333] md:text-4xl lg:text-5xl">
          Front-End Developer
        </h3>
        <p className="tracking-tight text-lg leading-6   sm:text-2xl sm:leading-7 sm:max-w-[30ch]  md:text-2xl lg:text-3xl text-[#333]  md:max-w-[50vw] lg:max-w-[50ch] 2xl:max-w-[50ch]">
          My journey through UX/UI design and customer-centric roles has
          sharpened my analytical and problem-solving skills
        </p>
      </div>
    </section>
  );
}
