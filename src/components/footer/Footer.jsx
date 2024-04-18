export default function Footer() {
  return (
    <footer className="px-4 py-10 bg-black text-white flex flex-col gap-8 lg:flex-row lg:gap-7 lg:divide-x lg:divide-emerald-200">
      <div>
        <a href="#">
          <h1 className="text-2xl tracking-tight font-bold   ">
            Michael Madlos
          </h1>
        </a>
        <div className="flex gap-2 items-center flex-nowrap">
          <p className="text-nowrap">Portfolio designed and coded with</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="fill-emerald-400 size-4"
          >
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:gap-16  lg:justify-between lg:pl-8 xl:gap-24">
        <div>
          <p className="font-bold text-lg text-emerald-400">Credits</p>
          <div>
            <p>Font - Geist from Vercel</p>
            <p>Icons - Heroicons and Fontawesome</p>
          </div>
        </div>

        <div>
          <p className="font-bold text-lg text-emerald-400">Projects</p>
          <div className="flex flex-col gap-4 xl:flex-row xl:gap-12">
            <div>
              <p className="font-bold">Dashboard</p>
              <div>
                <p>Live demo</p>
                <p>Github</p>
              </div>
            </div>
            <div>
              <p className="font-bold">Online shop</p>
              <div>
                <p>Live demo</p>
                <p>Github</p>
              </div>
            </div>
            <div>
              <p className="font-bold">Battleship game</p>
              <div>
                <p>Live demo</p>
                <p>Github</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="font-bold text-lg text-emerald-400">Contact</p>
          <div className="flex flex-col gap-1 ">
            <a
              href="https://www.linkedin.com/in/michaelmadlos/"
              className="flex items-center gap-2 font-medium hover:text-stone-400"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/MMadlos"
              className="flex items-center gap-2 font-medium hover:text-stone-400"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
