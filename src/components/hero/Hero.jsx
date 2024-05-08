export default function Hero() {
  return (
    <section className="h-[100vh] relative overflow-x-hidden hero-bg">
      <div class="circle-sm left"></div>
      <div class="circle-sm right"></div>
      <div class="circle-lg"></div>

      <div className="flex justify-center items-end h-full">
        <div className="gap-6 px-4 sm:px-0 h-[80vh] sm:h-[70vh] flex flex-row sm:gap-4 max-w-[600px]">
          <div className="relative">
            <div className="h-full w-[1px] bg-gradient-to-b from-white to-#[1E0E2E] to-100%"></div>
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white size-4 absolute -top-2 -left-2 animate-bounce shadow"
            >
              <circle cx="60" cy="60" r="50" />
            </svg>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 pt-6 sm:pl-6">
            <h4 className="text-white/70 text-sm font-medium sm:text-base sm:font-semibold ">
              Michael Madlos
            </h4>
            <h3 className="text-3xl font-bold  text-white md:text-4xl">
              Front-End Developer
            </h3>
            <p className="text-white/70 font-light text-base">
              Background in UX/UI design and customer-centric roles. Experienced
              in communicating complex concepts to both technical and
              non-technical users. Problem solver and self-taught programmer.
            </p>

            <div className="flex flex-row gap-4 mt-6 ">
              <a
                href="https://www.linkedin.com/in/michaelmadlos/"
                target="_blank"
                className="bg-[#8214EF] text-white py-2 px-6 rounded font-medium sm:min-w-[150px] hover:opacity-60 text-center"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/MMadlos"
                target="_blank"
                className="bg-black text-white py-2 px-6 rounded font-medium sm:min-w-[150px] hover:opacity-60 text-center"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
