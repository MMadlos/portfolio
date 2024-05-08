export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-50 ">
      <div className="py-2 px-4 sm:px-4 sm:py-1 flex gap-8 items-center  justify-between ">
        <h1 className="hidden sm:block text-2xl tracking-tighter font-bold pl-2 text-white ">
          Michael Madlos
        </h1>

        <h1 className="sm:hidden text-2xl tracking-tighter font-extrabold text-white ">
          MM
        </h1>

        <div className="flex gap-4 text-white ">
          <a
            href="https://www.linkedin.com/in/michaelmadlos/"
            className="font-medium text-sm sm:px-4 sm:py-2 hover:text-black"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MMadlos"
            className="font-medium text-sm sm:px-4 sm:py-2 hover:text-black"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
